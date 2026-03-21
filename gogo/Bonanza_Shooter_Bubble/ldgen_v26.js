;(function(){
	console.log("LD Generator V26");
	
	var gen = function(){
	};
	
	
	var common = {}, config={}, execParams = {},
		_u = "undefined", _n = "number";
	common.randPick = function(values, seed, se){
		var _u = "undefined", rnd=(typeof playtouch === _u || typeof playtouch.seedsField === _u) ? Math.random() : playtouch.seedsField.plant("LD", seed, se).random(1, 0), t=0, wc=false, order = Object.keys(values).sort();
		for(var i=0; i<order.length;i++){
			if(values[order[i]] === '*'){	wc = order[i]; continue;	}
			t += values[order[i]];
			if(t > rnd) return order[i];
		}
		return wc;
	};
	 
	
	const se = "alea",
		minMoves = 6,
		minMovesPerObjective = 3.2,
		lowRefillThreshold = 0.65,      // minimal expected rate of nbBall before refill
		highRefillThreshold = 0.95,     // maximal expected rate of nbBall before refill
        thresholdPercentBonusPerKindOverMinimumKind = 0.05, // rate added to expected rate based on level's nbBallKinds
		minBallB4Refill = 19,           // hard min limit of balls on screen before refill
		maxBallB4Refill = 45,           // hard max limit of balls on screen before refill
		minBallPerLevel = minBallB4Refill + 9,           // >= minBallB4Refill + 8
		maxBallPerLevel = 50,           // >= 32 && >= maxBallB4Refill
		minBallPerChain = 10,
		maxBallPerChain = 43,
		minBallPerCannon = 13,
		maxBallPerCannon = 35,
		minBallPerObjective = 23,       //Initial minBallPerObjective was 20
		maxBallPerObjective = 65,
		maxCratePerLevel = 22,
		maxCrateInDistributor = 6,
		maxEggPerLevel = 7,
		maxPrisonerPerLevel = 7,
		maxPrisonerAndEggInDistributor = 3,
		multiLockreduceRate = 0.1,
		maxChainBridge_move = 8,
		_a="a";
	
	function checkMove(moves){ if(moves === null || moves == "null" || moves !== moves) throw moves;};
	gen.prototype.getAllowedFeatures = function(asString){
		let allowedFeatures = ["egg","crate","cratePower","chain","jar","powerUps","magnet","bridge","wheel_type","prisoner","tnt","multiColorBall","cannon","pulsar"];
		return (asString) ? allowedFeatures.join(',') : allowedFeatures;
	};
	gen.prototype.genLevel = function(difficulty, masterSeed, allowedFeatures){
		if(typeof allowedFeatures === "undefined") allowedFeatures = this.getAllowedFeatures();
		var updateMove = function (_moves, reason){
			if(true){
				switch(true){
					case (_moves === 0):  //console.log("MOVES:" + "No change ("+moves+") ", reason); break;
					case (_moves < 0): 	  //console.log("MOVES:" + "Remove "+_moves+" ("+(moves+_moves)+") ", reason); break;
					case (_moves > 0):	  //console.log("MOVES:" + "Add  "+_moves+" ("+(moves+_moves)+") ", reason); break;
					default:break;
				}
			}
			moves+=_moves; 
		}; 
	
		if(typeof masterSeed === "undefined") masterSeed = "pouet"+Math.random();
		var seed = playtouch.seedsField.plant("s", masterSeed, se),
			difficulty = ((typeof difficulty !== "undefined") ? difficulty :playtouch.seedsField.plant("diff", masterSeed, se).random(100)),
			level = {seed:masterSeed},
			rDifficulty = difficulty/100,
			frDifficulty = Math.min(1, rDifficulty),
			//screens=Math.max(1,Math.min(6, Math.floor(seed.random(10*rDifficulty,1.3)))),
			screens=Math.max(1,Math.min(6, Math.round(seed.random(10*rDifficulty,1.3)))),
			//nbBallKinds = Math.floor(seed.random(4+(4*rDifficulty),4)),
			// nbBallKinds = Math.round(Math.min(seed.random(3+(3*rDifficulty), 3.4), 6)),
			nbBallKinds = Math.round(seed.random(100)<5 ? seed.random(6,5) : 3.4 + seed.random(3*rDifficulty)), // 5% to have 5 or 6 colors, else colorsnb ramps up from round(3.4 to 6.4) => from 4 tp 6 plus few cases of 6 and rare cases of 3
            lowestKinds = 3, // based on math done just above
			nbBalls = Math.floor(seed.random(minBallPerLevel+((maxBallPerLevel-minBallPerLevel)*frDifficulty)*(nbBallKinds/5.5),minBallPerLevel)),
			ballsThatAreWinCondition=[],
			minDifficultyForPowerPrisoner = 20,
			nbPowerUps = Math.min(Math.max(0, Math.floor(seed.random(nbBalls/10,-nbBalls/20))), 4),
			sizePowerUps = Math.floor(seed.random(3,0)),
			possiblePowerUps = {"0":"*","1":0.2,"2":0.1},
			possibleWinConditions = {"ball_0":"*","crate":0.09,"cratePower":0.10,"egg":0.12,"prisoner":0.12},
			fillingSection_1 = {"none":"*", "magnet":0.15, "wheel_type":0.1},
			fillingSection_2 = {"none":"*", "bridge":0.1, "wheel_type":0.15},
			ballOdds = (1-possibleWinConditions.crate-possibleWinConditions.cratePower-possibleWinConditions.egg-possibleWinConditions.prisoner)/7,
			// nbOflevelMoves = Math.floor(seed.random(56-(15*rDifficulty),10)),
			nbOfLevelParts = Math.floor(seed.random(8-(4*rDifficulty),1)),
			nbOfWinConditions = Math.min(3, Math.floor(seed.random(3+(2*rDifficulty),1))), // up to 3 victory conditions. Between 1 and 3, with a larger capped random for highest difficulty. (stating that it is more difficult to have more conditions, which is not really the case as the moves are cumulatives while the condition can be reached in parrallele.)
			distributor_cratePower = 0,
			distributor_crate = [],
			distributor_prisoner = 0,
			distributor_powerPrisoner = 0,
			distributor_egg = 0,
			distributor_balls = [],
			distributor_powerUps = [],
			distributor_tnt = 0,
			distributor_jar_bType = [],
			refill = {
				balls_threshold:minBallB4Refill,// This will be set later ! ~L122
				probability_ball:[],
				spawn:{after:{},loop:{}}
			},
			mask={},
			crates={},
			ballKind=0,
			moves = 0,
			nbPadLock = 0,
	
			endOfVar=0;
			updateMove(3, "Init");
			//updateMove(-nbPowerUps/2, "nbPowerUps"); // v18 console.log("REMOVE MOVE ", -nbPowerUps/2 , -nbPowerUps/1.5);
			updateMove(-nbPowerUps/1.5, "nbPowerUps"); // v19
		
		for(var pb=0; pb<nbBallKinds; pb++) refill.probability_ball.push(1);
		// 																		  v- base 10         v- with ring		   v- with splitter
		for(var m = 0; m<screens; m++) mask[m] = {"index":Math.floor(seed.random(10+((difficulty>25)?4:0)+((difficulty>40)?2:0))),"section_1": {},"bridge_1": {},"section_2": {},"bridge_2": {},"wallFixed": {}};
		for(var b = 1; b<nbBallKinds; b++) possibleWinConditions["ball_"+b] = ballOdds;
		var winConditions =[],rules_win={}, atry;
		for (let wc = 0; wc < nbOfWinConditions; wc++) {
			let winConditionsMaxTry = 25;
			do{atry = common.randPick(possibleWinConditions, seed.random(), se);} while(winConditions.indexOf(atry)!==-1 && --winConditionsMaxTry);
			if(atry.indexOf('ball_') !== -1){
				ballsThatAreWinCondition.push(parseInt(atry.replace('ball_', '')));
				winConditions.push(atry);
			}else if(allowedFeatures.indexOf(atry) !== -1) winConditions.push(atry);
		}
		
		// boost nbBalls when there is a lot of ball kinds, then adapt refill
		var nbBallsBoostPerBallKinds = [1, 1, 1, 1, 1.1, 1.25, 1.5];
		nbBalls = Math.round(Math.max(nbBallKinds*4.5, Math.min(maxBallPerLevel, nbBalls * nbBallsBoostPerBallKinds[nbBallKinds])));
		// refill.balls_threshold = Math.min(Math.max(minBallB4Refill, Math.floor( nbBalls * (0.78 -frDifficulty*0.25  +nbBallKinds*0.2))), maxBallB4Refill);// 94% @dif=0, 69% @dif=100, including a 0.2 per nbBallKinds (between 3 to 6)
       // refill.balls_threshold = Math.min(Math.max(minBallB4Refill, Math.floor( nbBalls * ((lowRefillThreshold+((nbBallKinds-lowestKinds)*thresholdPercentBonusPerKindOverMinimumKind)) + (highRefillThreshold-((nbBallKinds-lowestKinds)*thresholdPercentBonusPerKindOverMinimumKind)) * frDifficulty))), maxBallB4Refill);// 94% @dif=0, 69% @dif=100, including a 0.2 per nbBallKinds (between 3 to 6)
		
		refill.balls_threshold = Math.min(Math.max(minBallB4Refill,Math.floor( nbBalls * (((lowRefillThreshold+((nbBallKinds-lowestKinds)*thresholdPercentBonusPerKindOverMinimumKind)) + (highRefillThreshold-((nbBallKinds-lowestKinds)*thresholdPercentBonusPerKindOverMinimumKind))) * frDifficulty))),maxBallB4Refill);// 94% @dif=0, 69% @dif=100, including a 0.2 per nbBallKinds (between 3 to 6)
	
		for(var c=0; c<ballsThatAreWinCondition.length; c++) refill.probability_ball[c] *= Math.max(1, 1.8-frDifficulty); // +25% --- +100% of ball that are winning conditions
		//console.log("PROBABILITY ",Math.max(0.5, 1.6-frDifficulty));
			// console.log((nbBalls/nbBallKinds), "*seed.random(", 1.1+((ballsThatAreWinCondition.indexOf(c)!==-1)?0.2:0), ",", 0.9+((ballsThatAreWinCondition.indexOf(c)!==-1)?0.2:0), ")");
		for(var c=0; c<nbBallKinds; c++) distributor_balls.push(Math.round((nbBalls/nbBallKinds)*seed.random(1.1+((ballsThatAreWinCondition.indexOf(c)!==-1)?0.2:0), 0.9+((ballsThatAreWinCondition.indexOf(c)!==-1)?0.2:0)))); //+20% if the balls are in the win donditions
		
        if(allowedFeatures.indexOf("powerUps") !== -1) for(var c=0; c<nbPowerUps; c++) distributor_powerUps.push(common.randPick(possiblePowerUps, seed.random(), se) + "_" +sizePowerUps);
		
		for(var aCond in winConditions){
			var splittedDiffRate = winConditions.length/1.5;
			switch(winConditions[aCond]){ //distributor_powerUps
				case "crate":
					rules_win.rule_crate = Math.floor(3 + seed.random((maxCratePerLevel-3)*(rDifficulty/splittedDiffRate)));
					for(var i=0; i<rules_win.rule_crate; i++) distributor_crate.push(1+((seed.random(120) < difficulty)? 1 : 0));//(1+Math.floor(seed.random(rDifficulty*0.5)+0.5));
					distributor_powerUps = [];updateMove(distributor_crate.reduce((a,b)=>a+b) *0.7, "distributor_crate");
					// if(distributor_powerUps.length===0) moves+=rules_win.rule_crate;//only if there is no powerUps
					break;
				case "cratePower":
					rules_win.rule_cratePower = Math.floor(2 + seed.random((maxCratePerLevel-2)*(rDifficulty/splittedDiffRate)*0.9));
					distributor_cratePower = rules_win.rule_cratePower;
					distributor_powerUps = []; updateMove(Math.max(rules_win.rule_cratePower*0.7, Math.round(rules_win.rule_cratePower*(2-rDifficulty)-(rules_win.rule_cratePower**1.3))), "distributor_cratePower");
					// if(distributor_powerUps.length===0) moves+=Math.round(rules_win.rule_cratePower*(2-rDifficulty)); // from *2(easy) to *1(hard), only if there is no powerUps
					break;
				case "egg":
					let minEgg = ((nbOfWinConditions===1&&difficulty>15)?2:1);
					rules_win.rule_egg = Math.floor(minEgg + seed.random((maxEggPerLevel-minEgg)*(rDifficulty/splittedDiffRate)));
					var hangingEggs = Math.max(Math.min(Math.floor(seed.random(rules_win.rule_egg+1, -rules_win.rule_egg)), screens), 0);
					distributor_egg = rules_win.rule_egg;
					for(var h = 0; h<hangingEggs; h++){
						for(var m = 0; m<screens; m++){
							if(Object.keys(mask[m].section_1).length===0 && distributor_egg&&seed.random(100)<45){
								let maxTryEggBallKind = 25;
								do{ballKind = Math.floor(seed.random(nbBallKinds,0));} while(ballsThatAreWinCondition.indexOf(ballKind) !== -1 && --maxTryEggBallKind);
								mask[m].section_1 = {"hanging_eggs_bType_bNum":ballKind+"_"+Math.max(Math.floor(seed.random(maxBallPerChain*frDifficulty,minBallPerChain)),minBallPerChain)};
								updateMove(Math.round(parseInt(mask[m].section_1.hanging_eggs_bType_bNum.split("_")[1])/2.75), "hanging_eggs");
								distributor_egg--;
								continue;
							}
						}
					}
					updateMove(1.5*screens, "screen");
					break;
				case "prisoner":
					let minPrisoner = ((nbOfWinConditions===1&&difficulty>15)?2:1);
					rules_win.rule_prisoner = minPrisoner + Math.floor(seed.random((maxPrisonerPerLevel-minPrisoner)*(rDifficulty/splittedDiffRate)));
					var hangingPrisoners = Math.max(Math.min(Math.floor(seed.random(rules_win.rule_prisoner+1, -rules_win.rule_prisoner)), screens), 0), nbPrisoners = rules_win.rule_prisoner;
					//console.log("hangingPrisoners:"+hangingPrisoners);
					//console.log("nbPrisoners1:"+nbPrisoners);
					for(var h = 0; h<hangingPrisoners; h++){
						for(var m = 0; m<screens; m++){
							if(Object.keys(mask[m].section_1).length===0 && nbPrisoners&&seed.random(100)<40){
								let maxTryPrisonerBallKind = 25;
								do{ballKind = Math.floor(seed.random(nbBallKinds,0));} while(ballsThatAreWinCondition.indexOf(ballKind) !== -1 && --maxTryPrisonerBallKind);
								var isPowerPrisoner=seed.random(difficulty)>minDifficultyForPowerPrisoner ? 1 : 0;
								//to enable debug console.log("isPowerPrisoner:"+isPowerPrisoner);
								mask[m].section_1 = {"hanging_prisoners_type_bType_bNum_pLife":isPowerPrisoner+"_"+ballKind+"_"+Math.max(Math.floor(seed.random(maxBallPerChain*frDifficulty,minBallPerChain)),minBallPerChain)+"_"+( Math.max(1,Math.floor(seed.random((5-isPowerPrisoner)*rDifficulty,1))) )  };
								updateMove((parseInt(mask[m].section_1.hanging_prisoners_type_bType_bNum_pLife.split("_")[2])/2.25)*(parseInt(mask[m].section_1.hanging_prisoners_type_bType_bNum_pLife.split("_")[3]) + isPowerPrisoner*3)/3 , "hanging"+(isPowerPrisoner?"Power":"")+"Prisoners_section1");
								//to enable debug console.log("mask["+m+"].section_1.hanging_prisoners_type_bType_bNum_pLife:", mask[m].section_1.hanging_prisoners_type_bType_bNum_pLife);
								nbPrisoners--;
							}
							if(Object.keys(mask[m].section_2).length===0 && nbPrisoners&&seed.random(100)<40){
								let maxTryPrisonerBallKind = 25;
								do{ballKind = Math.floor(seed.random(nbBallKinds,0));} while(ballsThatAreWinCondition.indexOf(ballKind) !== -1 && --maxTryPrisonerBallKind);
								var isPowerPrisoner=seed.random(difficulty)>minDifficultyForPowerPrisoner ? 1 : 0;
								mask[m].section_2 = {"hanging_prisoners_type_bType_bNum_pLife":isPowerPrisoner+"_"+ballKind+"_"+Math.max(Math.floor(seed.random(maxBallPerChain*frDifficulty,minBallPerChain)),minBallPerChain)+"_"+( Math.max(1,Math.floor(seed.random((5-isPowerPrisoner)*rDifficulty,1))) )  };
								updateMove((parseInt(mask[m].section_2.hanging_prisoners_type_bType_bNum_pLife.split("_")[2])/2.25)*(parseInt(mask[m].section_2.hanging_prisoners_type_bType_bNum_pLife.split("_")[3]) + isPowerPrisoner*3)/3 , "hanging"+(isPowerPrisoner?"Power":"")+"Prisoners_section2");
								nbPrisoners--;
								continue;
							}
						}
					}
					//to enable debug console.log("1 mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife", mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife);
					//to enable debug console.log("nbPrisoners2:"+nbPrisoners);
					//to enable debug console.log("mask:", mask);
					//prisoners life :
					distributor_prisoner=[];
					distributor_powerPrisoner=[];
					// for(var p=0; p<nbPrisoners; p++) distributor_prisoner.push(1+Math.floor(seed.random(4*rDifficulty,1)));
					// for(var p=0; p<nbPrisoners; p++) updateMove(distributor_prisoner[p] *2/3, "nbPrisoners");
					for(var p=0; p<nbPrisoners; p++){
						var isPowerPrisoner=seed.random(difficulty)>minDifficultyForPowerPrisoner;
						if(isPowerPrisoner){
							var prisonerLife = 1+Math.floor(seed.random(3*rDifficulty,1));
							distributor_powerPrisoner.push(prisonerLife);
							updateMove(prisonerLife     , "nbPowerPrisoners");
						}else{ 
							var prisonerLife = 1+Math.floor(seed.random(4*rDifficulty,1));
							distributor_prisoner.push(prisonerLife);
							updateMove(prisonerLife *2/3, "nbPrisoners");
						}
					}
					//moves = Math.round(moves);
					// distributor_prisoner = distributor_prisoner.join('');
					//to enable debug console.log("2 mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife", mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife);
					break;
				default: // ball_x
					if(typeof rules_win.rule_ball === "undefined") rules_win.rule_ball = [];
					rules_win.rule_ball.push(winConditions[aCond].split('_')[1] +"_" + Math.floor(minBallPerObjective + seed.random((maxBallPerObjective-minBallPerObjective)*(rDifficulty/splittedDiffRate)))); 
					//V18
					//updateMove(Math.max(6, Math.round(parseInt(rules_win.rule_ball[rules_win.rule_ball.length-1].split("_")[1])/2.3)), "ball");
					
					//V19
					//updateMove(Math.max(6, Math.round(parseInt(rules_win.rule_ball[rules_win.rule_ball.length-1].split("_")[1])/3.7)), "ball");
					
					//V21 to update
					//updateMove(Math.max(6, Math.round(parseInt(rules_win.rule_ball[rules_win.rule_ball.length-1].split("_")[1])/3.35)), "ball");
					updateMove(Math.max(6, Math.round(parseInt(rules_win.rule_ball[rules_win.rule_ball.length-1].split("_")[1])/(4-0.25*nbBallKinds))), "ball");
					ballsThatAreWinCondition.push(parseInt(rules_win.rule_ball[rules_win.rule_ball.length-1].split("_")[0]));
					break;
			}
		}
		if(typeof rules_win.rule_ball !== "undefined") rules_win.rule_ball=rules_win.rule_ball.join(',');
		//to enable debug console.log("3 mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife", mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife);
		//add some powerUps
		// Color bomb
		var distributor_multiColorBall = 0; 
        if(allowedFeatures.indexOf("multiColorBall") !== -1){
            if(seed.random(100)<4) {
                //loop
                let loop = Math.floor(3+seed.random(25+20*rDifficulty, 15));
                if(typeof refill.spawn.loop["multiColorBall"] === "undefined") refill.spawn.loop["multiColorBall"] = [];
                refill.spawn.loop["multiColorBall"].push(loop);
                updateMove(-45/loop * 1.6,"refill multiColorBall");
            }
            if(seed.random(100)<2){
                distributor_multiColorBall = Math.floor(seed.random(5, 1)); 
                updateMove(-distributor_multiColorBall*0.6,"distributor_multiColorBall");
            }
        }
		
		// console.log("distributor_multiColorBall", distributor_multiColorBall);
	
		// TNT
        if(allowedFeatures.indexOf("tnt") !== -1){
			if(seed.random(100)<3){ // 3% tnt at distrib (8% tnt total)
                distributor_tnt = Math.floor(seed.random(6, 1));
                updateMove(-distributor_tnt*0.75, "tnt dist");
            }
            if(seed.random(100)< 5 + (distributor_tnt !== 0) ? 30 : 0){ // 5% tnt as loop (8% tnt total) or 35% if there is TNT in dist
                //to enable debug console.log("4 mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife", mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife);
                //loop	(in 4% every 8-18 balls, else every 20 - 35 balls)
                let loop = (seed.random(100)<4) ? Math.floor(8+seed.random(8+10*rDifficulty, 8)) : Math.floor(20+seed.random(25+20*rDifficulty, 15));
                if(typeof refill.spawn.loop["tnt"] === "undefined") refill.spawn.loop["tnt"] = [];
                refill.spawn.loop["tnt"].push(loop);
                // updateMove(-1.5); 
                updateMove(-45/loop * 2, "tnt loop");
            }
            
        }
	//console.log("5 mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife", mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife);
        
		// Jar
        if(allowedFeatures.indexOf("jar") !== -1){
            if(seed.random(100)<4){ // 4% jar in refill
                let kinds = Math.max(5, seed.random(nbBallKinds, 1));
                for(var bk=0; bk<nbBallKinds; bk++){
                    if(seed.random() < (kinds/nbBallKinds) + 0.2 * ((ballsThatAreWinCondition.indexOf(bk) !== -1) ? 1:0)){  // +20% odds for color being part of the objectives
                        if(typeof refill.spawn.loop["jar_b_"+bk] === "undefined") refill.spawn.loop["jar_b_"+bk] = [];
                        let loop = Math.ceil(((seed.random(100)<8) ? Math.floor(12+seed.random(7+7*rDifficulty, 7)) : Math.floor(20+seed.random(30+30*rDifficulty, 20))));
                        refill.spawn.loop["jar_b_"+bk].push(loop);
                        if(ballsThatAreWinCondition.length === 0){ 
                            updateMove(-80/loop * 1.6, "refill(neutral) jar loop " + bk);
                        }else{
                            if(ballsThatAreWinCondition.indexOf(bk) !== -1){ // actually helps
                                updateMove(-80/loop * 2.3, "refill(help) jar loop " + bk);
                            }else{ // not helping
                                updateMove(80/loop * 1.6, "refill(against) jar loop " + bk);
                            }
                        }
                    }
                }		
            }
            if(seed.random(100)<2.5){ // 2.5% jar in distributor
                var nbJar = Math.floor(seed.random(5, 1)); 
                for(var b=0;b<nbBallKinds;b++) distributor_jar_bType.push(0);
                for(var j=0; j<nbJar;j++){
                    let jarId=0;
        
                    if(ballsThatAreWinCondition.length === 0 || seed.random()<rDifficulty)jarId = Math.floor(seed.random(distributor_jar_bType.length,0)); //jar are randomly distributed
                    else jarId = ballsThatAreWinCondition[Math.floor(seed.random(ballsThatAreWinCondition.length))]; // prefer a color in condition
                    
                    distributor_jar_bType[jarId]++;
                    
                    if(ballsThatAreWinCondition.length === 0){ 
                        updateMove(-0.5, "distrib(neutral) jar "+jarId);
                    }else{
                        if(ballsThatAreWinCondition.indexOf(jarId) !== -1){ // actually helps
                            updateMove(-1.5, "distrib(help) jar "+jarId);
                        }else{ // not helping
                            updateMove(1, "(against) jar  "+jarId);
                        }
                    }
        
                }
                distributor_jar_bType = distributor_jar_bType.join(",").replace(/0/g,"");
            }
        }
		
		// console.log("distributor_jar_bType", distributor_jar_bType);
	//console.log("6 mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife", mask[0].section_1.hanging_prisoners_type_bType_bNum_pLife);
	
		//add some decoration
		for(var m = 0; m<screens; m++){
			// avoid same mask twice in the row (don't touch the index 0)
			while(m!==0 && mask[m].index === mask[m-1].index) mask[m].index = Math.floor(seed.random(16));
			// If nothing blocks the ball at section 2, then try to add a magnet or a wheel

			if(Object.keys(mask[m].section_1).length===0){
				switch(common.randPick(fillingSection_1, seed.random(), se)){
					case "magnet":
                        if(allowedFeatures.indexOf("magnet") === -1) break;
						mask[m].section_1 = {"magnet" : 1};
						//V18
						//updateMove(2, "magnet_section1");
						updateMove(1, "magnet_section1");
						break;
					case "wheel_type":
                        if(allowedFeatures.indexOf("wheel_type") === -1) break;
						mask[m].section_1 = {"wheel_type" : Math.round(seed.random(1.2))};
						updateMove(1, "wheel_section1");
						break;
					default:
						break;
				}
			}
			if(Object.keys(mask[m].section_1).length!==0 || m === 0){ //clear bridge1 under section1 + clean bridge1 of first mask
				delete mask[m].bridge_1;
			}else{
				if(seed.random(100+difficulty)>65){
					var material = ["chain", "crate", "cratePower"][Math.floor(seed.random(3))];
					mask[m].bridge_1={"bridge": {
						"material": material,
						"type": Math.floor(seed.random((material==="chain")?3:4))
					}};
					if(material==="chain"){
						let triesToAvoidChainRuleMatchingWinConditions = seed.random(2+frDifficulty*3); //give 2 tries to find color not in wincondition, up to 6 tries for harder difficulties
						do{ballKind = Math.floor(seed.random(nbBallKinds,0));} while(ballsThatAreWinCondition.indexOf(ballKind) !== -1 && --triesToAvoidChainRuleMatchingWinConditions > 0);
						if(ballsThatAreWinCondition.indexOf(ballKind) === -1) refill.probability_ball[ballKind]+=nbBallKinds/((winConditions.indexOf("egg") !== -1) ? 1 : 2)*Math.max(0.2, 1-rDifficulty);
						mask[m].bridge_1.bridge.ball_type_count=ballKind+","+Math.max(Math.floor(seed.random(maxBallPerChain*frDifficulty,minBallPerChain)),minBallPerChain);
						//updateMove(parseInt(mask[m].bridge_1.bridge.ball_type_count.split(",")[1])/3, "chain_bridge1");
						updateMove(parseInt(mask[m].bridge_1.bridge.ball_type_count.split(",")[1])/(3.5+rDifficulty*2), "chain_bridge1");
					}else if(material==="crate"){
						updateMove(1, "crate_bridge1");if(typeof rules_win.rule_egg !== "undefined")updateMove(1, "crate_bridge1 (bonus egg)");
					}else{
						updateMove(2, "cratePower_bridge1");if(typeof rules_win.rule_egg !== "undefined")updateMove(2, "cratePower_bridge1 (bonus egg)");
					}
				}
			}
			if(Object.keys(mask[m].section_2).length===0){
				switch(common.randPick(fillingSection_2, seed.random(), se)){
					case "bridge":
                        if(allowedFeatures.indexOf("bridge") === -1) break;
                        var possibleMaterial = []; 
                            if(allowedFeatures.indexOf("chain") !== -1) possibleMaterial.push("chain");
                            if(allowedFeatures.indexOf("crate") !== -1) possibleMaterial.push("crate");
                            if(allowedFeatures.indexOf("cratePower") !== -1) possibleMaterial.push("cratePower");
                        if(possibleMaterial.length === 0) break;
						var material = possibleMaterial[Math.floor(seed.random(possibleMaterial.length))];
						mask[m].section_2={"bridge": {
							"material": material,
							"type": Math.floor(seed.random((material==="chain")?3:4))
						}};
						if(material==="chain"){
							let triesToAvoidChainRuleMatchingWinConditions = seed.random(3+rDifficulty*3); //give 3 tries to find color not in wincondition, up to 6 tries for harder difficulties
							do{ballKind = Math.floor(seed.random(nbBallKinds,0));} while((ballsThatAreWinCondition.indexOf(ballKind) !== -1 && --triesToAvoidChainRuleMatchingWinConditions > 0));
							if(ballsThatAreWinCondition.indexOf(ballKind) === -1) refill.probability_ball[ballKind]+=nbBallKinds/((winConditions.indexOf("egg") !== -1) ? 1 : 2)*Math.max(0.2, 1-rDifficulty);
							mask[m].section_2.bridge.ball_type_count=ballKind+","+Math.max(Math.floor(seed.random(maxBallPerChain*frDifficulty,minBallPerChain)),minBallPerChain);
							//updateMove(Math.min(maxChainBridge_move,parseInt(mask[m].section_2.bridge.ball_type_count.split(",")[1])/3), "chain_bridge2 limited");
							updateMove(Math.min(maxChainBridge_move,parseInt(mask[m].section_2.bridge.ball_type_count.split(",")[1])/(3+rDifficulty*2)), "chain_bridge2 limited");
						}else if(material==="crate"){
							updateMove(1, "crate_bridge2");if(typeof rules_win.rule_egg !== "undefined")updateMove(1, "crate_bridge2 (bonus egg)");
						}else{
							updateMove(2, "cratePower_bridge2");if(typeof rules_win.rule_egg !== "undefined")updateMove(2, "cratePower_bridge2 (bonus egg)");
						}
						break;
					case "wheel_type":
                        if(allowedFeatures.indexOf("wheel_type") === -1) break;
						mask[m].section_2 = {"wheel_type" : Math.round(seed.random(0.7))};
						updateMove(1, "whyeel_section2");if(typeof rules_win.rule_egg !== "undefined")updateMove(1, "wheel_section2 (bonus egg)");
						break;
					default:
						break;
				}
			}
			//70% odds of bridge 2, plus we always have one, on the last screen
			if(	(
					screens === 1 
					|| screens === m+1 
					|| seed.random(100)<70
					|| (typeof mask[m].bridge_1 === "undefined" || Object.keys(mask[m].bridge_1).length===0)
				)	
			){
				if(allowedFeatures.indexOf("bridge") === -1) break;
                var possibleMaterial = []; 
                    if(allowedFeatures.indexOf("chain") !== -1) possibleMaterial.push("chain");
                    if(allowedFeatures.indexOf("crate") !== -1) possibleMaterial.push("crate");
                    if(allowedFeatures.indexOf("cratePower") !== -1) possibleMaterial.push("cratePower");
                if(possibleMaterial.length === 0) break;
				var material = possibleMaterial[Math.floor(seed.random(possibleMaterial.length))];
				mask[m].bridge_2={"bridge": {
					"material": material,
					"type": Math.floor(seed.random((material==="chain")?3:4))
				}};
				if(material==="chain"){
					let triesToAvoidChainRuleMatchingWinConditions = seed.random(3+rDifficulty*3); //give 3 tries to find color not in wincondition, up to 6 tries for harder difficulties
					do{ballKind = Math.floor(seed.random(nbBallKinds,0));} while(ballsThatAreWinCondition.indexOf(ballKind) !== -1 && --triesToAvoidChainRuleMatchingWinConditions > 0);
					if(ballsThatAreWinCondition.indexOf(ballKind) === -1) refill.probability_ball[ballKind]+=nbBallKinds/((winConditions.indexOf("egg") !== -1) ? 1 : 2)*Math.max(0.2, 1-rDifficulty);
					mask[m].bridge_2.bridge.ball_type_count=ballKind+","+Math.max(Math.floor(seed.random(maxBallPerChain*frDifficulty,minBallPerChain)),minBallPerChain);
					//updateMove(parseInt(mask[m].bridge_2.bridge.ball_type_count.split(",")[1])/3, "chain_bridge2.");
					updateMove(parseInt(mask[m].bridge_2.bridge.ball_type_count.split(",")[1])/3.5, "chain_bridge2.");
				}else if(material==="crate"){
					updateMove(1, "crate_bridge2.");if(typeof rules_win.rule_egg !== "undefined")updateMove(2, "crate_bridge2. (bonus egg)");
				}else{
					updateMove(2, "cratePower_bridge2.");if(typeof rules_win.rule_egg !== "undefined")updateMove(2, "cratePower_bridge2. (bonus egg)");
				}
			}
			//adding some wallFixed
			if(seed.random(100)<45){
				var canonQuad_bType_bNum = [];
				for(var c=0; allowedFeatures.indexOf("cannon") !== -1 && c<2; c++){
					var oddsToCannon = 30;
					if(winConditions.indexOf("crate") !== -1) oddsToCannon-=4.5*(1+rDifficulty);	// cannon helps on crate
					if(winConditions.indexOf("cratePower") !== -1) oddsToCannon-=9*(1+rDifficulty);	// cannon helps on cratePower
					oddsToCannon+=(winConditions.join("").match(/ball\_/g) || []).length*5*(1+rDifficulty);	// cannon create disorder for collection
					if(seed.random(100)<oddsToCannon){
						var possibleColors = [];
						if(seed.random(100)<60+15*rDifficulty){ // prefer a chain color in 70% of cases  //hanging_prisoners_type_bType_bNum_pLife  hanging_eggs_bType_bNum
							if(typeof mask[m].section_1?.hanging_eggs_bType_bNum === "string") possibleColors.push(mask[m].section_1.hanging_eggs_bType_bNum.split("_")[0]);
							if(typeof mask[m].section_1?.hanging_prisoners_type_bType_bNum_pLife === "string") possibleColors.push(mask[m].section_1.hanging_prisoners_type_bType_bNum_pLife.split("_")[1]);
							if(typeof mask[m].section_2?.bridge?.ball_type_count === "string") possibleColors.push(mask[m].section_2.bridge.ball_type_count.split(",")[0]);
							if(typeof mask[m].section_2?.hanging_prisoners_type_bType_bNum_pLife === "string") possibleColors.push(mask[m].section_2.hanging_prisoners_type_bType_bNum_pLife.split("_")[1]);
							if(typeof mask[m].bridge_1?.bridge?.ball_type_count === "string") possibleColors.push(mask[m].bridge_1.bridge.ball_type_count.split(",")[0]);
							if(typeof mask[m].bridge_2?.bridge?.ball_type_count === "string") possibleColors.push(mask[m].bridge_2.bridge.ball_type_count.split(",")[0]);
						}
						//else pick random
                        var maxTryPossibleColors = 10; // as we may have only 3 colors, so possible infinite loop
						if(possibleColors.length===0){ do{possibleColors = [Math.floor(seed.random(nbBallKinds,0))]; } while(ballsThatAreWinCondition.indexOf(possibleColors[0]) !== -1 && --maxTryPossibleColors); }
						possibleColors.sort(a=>seed.random()-.5);
						canonQuad_bType_bNum.push(possibleColors[0]+"_"+Math.floor(seed.random( maxBallPerCannon*rDifficulty, minBallPerCannon )));
						canonQuad_bType_bNum.push(possibleColors[0]+"_"+Math.floor(seed.random( Math.max(minBallPerCannon, maxBallPerCannon*rDifficulty -(10*(m+1)/screens)), minBallPerCannon )));
					}
					// if(seed.random(100)<30) canonQuad_bType_bNum.push(ballKind+"_"+Math.floor(seed.random(maxBallPerCannon*rDifficulty,minBallPerCannon)));
				}
				if(canonQuad_bType_bNum.length) mask[m].wallFixed.canonQuad_bType_bNum = canonQuad_bType_bNum.join(",");
				var pulsarCount_pos_type = [];
				if(allowedFeatures.indexOf("pulsar") !== -1 && (Object.keys(mask[m].bridge_2).length>0 || Object.keys(mask[m].section_2).length>0)){ // otherwise useless to have those
					if(seed.random(100)<15) pulsarCount_pos_type.push(0);
					if(seed.random(100)<7) pulsarCount_pos_type.push(0);
					if(pulsarCount_pos_type.length) mask[m].wallFixed.pulsarCount_pos_type = pulsarCount_pos_type.join(",");
				}
			}	
			// Tidy up
			if(typeof mask[m].section_1 !== "undefined" && Object.keys(mask[m].section_1).length===0) delete mask[m].section_1;
			if(typeof mask[m].section_2 !== "undefined" && Object.keys(mask[m].section_2).length===0) delete mask[m].section_2;
			if(typeof mask[m].bridge_1 !== "undefined" && Object.keys(mask[m].bridge_1).length===0) delete mask[m].bridge_1;
			if(typeof mask[m].bridge_2 !== "undefined" && Object.keys(mask[m].bridge_2).length===0) delete mask[m].bridge_2;
			if(typeof mask[m].wallFixed !== "undefined" && Object.keys(mask[m].wallFixed).length===0) delete mask[m].wallFixed;
			
			// Apply haircut on multiple padlocks per mask
			
			var haircutBNum = (toReduceArray) => { 
				let eggImplication = (typeof rules_win.rule_egg !== "undefined") ? 2 : 1;
				if(toReduceArray.indexOf("section_1.hanging_eggs_bType_bNum") !== -1 && typeof mask[m]?.section_1?.hanging_eggs_bType_bNum === "string") mask[m].section_1.hanging_eggs_bType_bNum = mask[m].section_1.hanging_eggs_bType_bNum.split("_").map((v,i)=>i!==1?v:Math.ceil(v*Math.pow(1-multiLockreduceRate * eggImplication, Math.max(1,nbPadLock/1.0)  ))).join('_');
				if(toReduceArray.indexOf("section_1.hanging_prisoners_type_bType_bNum_pLife") !== -1 && typeof mask[m]?.section_1?.hanging_prisoners_type_bType_bNum_pLife === "string") mask[m].section_1.hanging_prisoners_type_bType_bNum_pLife = mask[m].section_1.hanging_prisoners_type_bType_bNum_pLife.split("_").map((v,i)=>i!==2?v:Math.ceil(v*Math.pow(1-multiLockreduceRate * eggImplication, Math.max(1,nbPadLock/1.1)))).join('_');
				if(toReduceArray.indexOf("bridge_1.bridge.ball_type_count") !== -1 && typeof mask[m]?.bridge_1?.bridge.ball_type_count === "string") mask[m].bridge_1.bridge.ball_type_count = mask[m].bridge_1.bridge.ball_type_count.split(",").map((v,i)=>i!==1?v:Math.ceil(v*Math.pow(1-multiLockreduceRate * eggImplication, Math.max(1,nbPadLock/1.25)))).join(',');
				if(toReduceArray.indexOf("section_2.hanging_prisoners_type_bType_bNum_pLife") !== -1 && typeof mask[m]?.section_2?.hanging_prisoners_type_bType_bNum_pLife === "string") mask[m].section_2.hanging_prisoners_type_bType_bNum_pLife = mask[m].section_2.hanging_prisoners_type_bType_bNum_pLife.split("_").map((v,i)=>i!==2?v:Math.ceil(v*Math.pow(1-multiLockreduceRate * eggImplication, Math.max(1,nbPadLock/1.1)))).join('_');
				if(toReduceArray.indexOf("section_2.bridge.ball_type_count") !== -1 && typeof mask[m]?.section_2?.bridge?.ball_type_count === "string") mask[m].section_2.bridge.ball_type_count = mask[m].section_2.bridge.ball_type_count.split(",").map((v,i)=>i!==1?v:Math.ceil(v*Math.pow(1-multiLockreduceRate * eggImplication, Math.max(1,nbPadLock/1.25)))).join(',');
				if(toReduceArray.indexOf("bridge_2.bridge.ball_type_count") !== -1 && typeof mask[m]?.bridge_2?.bridge.ball_type_count === "string") mask[m].bridge_2.bridge.ball_type_count = mask[m].bridge_2.bridge.ball_type_count.split(",").map((v,i)=>i!==1?v:Math.ceil(v*Math.pow(1-multiLockreduceRate * eggImplication, Math.max(1,nbPadLock/1.25)))).join(',');
			};

			
			// var padlocksToReduce=[];
			// if(typeof mask[m]?.section_1?.hanging_eggs_bType_bNum === "string"){ /* haircutBNum(padlocksToReduce); */ nbPadLock++; }
			// padlocksToReduce.push("section_1.hanging_eggs_bType_bNum");
			// if(typeof mask[m]?.section_1?.hanging_prisoners_type_bType_bNum_pLife === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			// padlocksToReduce.push("section_1.hanging_prisoners_type_bType_bNum_pLife"); 
			// if(typeof mask[m]?.bridge_1?.bridge?.ball_type_count === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			// padlocksToReduce.push("bridge_1.bridge.ball_type_count"); 
			// if(typeof mask[m]?.section_2?.hanging_prisoners_type_bType_bNum_pLife === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			// padlocksToReduce.push("section_2.hanging_prisoners_type_bType_bNum_pLife"); 
			// if(typeof mask[m]?.section_2?.bridge?.ball_type_count === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			// padlocksToReduce.push("section_2.bridge.ball_type_count"); 
			// if(typeof mask[m]?.bridge_2?.bridge?.ball_type_count === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			// padlocksToReduce.push("bridge_2.bridge.ball_type_count"); //useless
			// /* playtouch.gen.genLevel(100,"pouet9")   1.24, 1.28 */
			///////////////////////////
			var padlocksToReduce=[];
			padlocksToReduce.push("section_1.hanging_eggs_bType_bNum");
			if(typeof mask[m]?.section_1?.hanging_eggs_bType_bNum === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			padlocksToReduce.push("section_1.hanging_prisoners_type_bType_bNum_pLife"); 
			if(typeof mask[m]?.section_1?.hanging_prisoners_type_bType_bNum_pLife === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			padlocksToReduce.push("bridge_1.bridge.ball_type_count"); 
			if(typeof mask[m]?.bridge_1?.bridge?.ball_type_count === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			padlocksToReduce.push("section_2.hanging_prisoners_type_bType_bNum_pLife"); 
			if(typeof mask[m]?.section_2?.hanging_prisoners_type_bType_bNum_pLife === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			padlocksToReduce.push("section_2.bridge.ball_type_count"); 
			if(typeof mask[m]?.section_2?.bridge?.ball_type_count === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
			padlocksToReduce.push("bridge_2.bridge.ball_type_count");
			if(typeof mask[m]?.bridge_2?.bridge?.ball_type_count === "string"){ haircutBNum(padlocksToReduce); nbPadLock++; }
		}
	
		level.difficulty = difficulty;
		level.distributor = {};
		if(distributor_powerUps.length) level.distributor.powerup_hcb_type_size=distributor_powerUps.join(",");
		// if(distributor_crate) level.distributor.crate=distributor_crate; //winConditions
		if(winConditions.indexOf("crate") !== -1 && distributor_crate){ //arrstr
			for(var anItem=0; anItem<distributor_crate.length; anItem++){
				if(distributor_crate.length - anItem > maxCrateInDistributor || seed.random(100)<50+rDifficulty*25){ // Force crates in refill if distributor_crate > maxCrateInDistributor, else 25 to 50% of having them in refill
					let after = Math.floor(12+seed.random(8+rDifficulty*10, 4));
					if(typeof refill.spawn.after["crate_"+distributor_crate[anItem]] === "undefined") refill.spawn.after["crate_"+distributor_crate[anItem]] = [];
					refill.spawn.after["crate_"+distributor_crate[anItem]].push(after);
					updateMove(after/10, "after crate_"+distributor_crate[anItem]);
					distributor_crate[anItem] = -1;
				}
			}
			distributor_crate = distributor_crate.filter(v=>v!==-1);
			if(distributor_crate.length) level.distributor.crate=distributor_crate.join('');
		}else{
			if(allowedFeatures.indexOf("crate") !== -1 && seed.random(100)<2+rDifficulty*3) { // 2 --- 5% life 1
				//loop
				//let loop = Math.floor(10+seed.random(20, 20-20*rDifficulty)), cratelife = 1; // This is v16
				let loop = Math.floor(9+seed.random(20, 20-20*rDifficulty)), cratelife = 1;	// This is v17
				if(typeof refill.spawn.loop["crate_"+cratelife] === "undefined") refill.spawn.loop["crate_"+cratelife] = [];
				refill.spawn.loop["crate_"+cratelife].push(loop);
			}
			if(allowedFeatures.indexOf("crate") !== -1 && seed.random(100)<2+rDifficulty*3) { // 2 --- 5% life 2
				//loop
				//let loop = Math.floor(10+seed.random(20, 20-20*rDifficulty)), cratelife = 2; // This is v16
				let loop = Math.floor(9+seed.random(20, 20-20*rDifficulty)), cratelife = 2;	// This is v17
				if(typeof refill.spawn.loop["crate_"+cratelife] === "undefined") refill.spawn.loop["crate_"+cratelife] = [];
				refill.spawn.loop["crate_"+cratelife].push(loop);
			}
		}
		
	
		// if(distributor_cratePower) level.distributor.cratePower=distributor_cratePower;
		if(winConditions.indexOf("cratePower") !== -1 && distributor_cratePower){	//num
			for(var anItem=0; anItem<distributor_cratePower; anItem++){
				if(seed.random(100)<18+rDifficulty*15){
					let after = Math.floor(15+seed.random(6+rDifficulty*10, 4));
					if(typeof refill.spawn.after["cratePower"] === "undefined") refill.spawn.after["cratePower"] = [];
					refill.spawn.after["cratePower"].push(after);
					updateMove(after/7, "after cratePower");
					distributor_cratePower--;
				}
			}
			if(distributor_cratePower) level.distributor.cratePower=distributor_cratePower;
		}else{
			if(allowedFeatures.indexOf("cratePower") !== -1 && seed.random(100)<2+rDifficulty*3) { // 2 --- 5% life 2
				//loop
				let loop = Math.floor(10+seed.random(20, 20-20*rDifficulty));
				if(typeof refill.spawn.loop["cratePower"] === "undefined") refill.spawn.loop["cratePower"] = [];
				refill.spawn.loop["cratePower"].push(loop);
			}
		}
	
		if(distributor_multiColorBall) level.distributor.multiColorBall=distributor_multiColorBall;
		if(distributor_jar_bType.length !== 0) level.distributor.jar_bType=distributor_jar_bType;   else delete level.distributor.jar_bType;
	
		if(distributor_egg){
			for(var anEgg=0; anEgg<distributor_egg; anEgg++){
				if(distributor_egg -anEgg < maxPrisonerAndEggInDistributor || seed.random(100)<25+rDifficulty*30){
					if(typeof refill.spawn.after["freeEgg"] === "undefined") refill.spawn.after.freeEgg = [];
					let after = Math.floor(10+seed.random(7+rDifficulty*15, 5));
					refill.spawn.after.freeEgg.push(after);
					distributor_egg--;
					updateMove(after/5, "after egg");
				}
			}
			if(distributor_egg) level.distributor.freeEgg=distributor_egg;
		}
		
		if(distributor_prisoner){
			var totalPrisonerToDistribute = distributor_prisoner.length+distributor_powerPrisoner.length;
			for(var aPrisoner=0; aPrisoner<totalPrisonerToDistribute; aPrisoner++){
				if(totalPrisonerToDistribute - aPrisoner > maxPrisonerAndEggInDistributor || seed.random(100)<25+rDifficulty*30){
					let after = Math.floor(15+seed.random(10+rDifficulty*15, 5)),
						prisonerTypeToPostpone="";
					switch(true){
						case distributor_prisoner.length > 0 && distributor_powerPrisoner.length > 0: // both types possible
							prisonerTypeToPostpone = seed.random()>.5 ? "prisoner" : "powerPrisoner";
						break;
						case distributor_prisoner.length > 0 : 
							prisonerTypeToPostpone = "prisoner";
						break
						case distributor_powerPrisoner.length > 0 : 
							prisonerTypeToPostpone = "powerPrisoner";
						break;
					}
					if(prisonerTypeToPostpone === "prisoner"){
						if(typeof distributor_prisoner[aPrisoner]!=="undefined"){
							if(typeof refill.spawn.after["freePrisoner_"+distributor_prisoner[aPrisoner]] === "undefined") refill.spawn.after["freePrisoner_"+distributor_prisoner[aPrisoner]] = [];
							refill.spawn.after["freePrisoner_"+distributor_prisoner[aPrisoner]].push(after);
							updateMove(after/9, "after prisoner");
							distributor_prisoner[aPrisoner] = -1; 
						}// mark it to be deleted
					}else if(prisonerTypeToPostpone === "powerPrisoner"){
						if(typeof distributor_powerPrisoner[aPrisoner]!=="undefined"){
							if(typeof refill.spawn.after["freePowerPrisoner_"+distributor_powerPrisoner[aPrisoner]] === "undefined") refill.spawn.after["freePowerPrisoner_"+distributor_powerPrisoner[aPrisoner]] = [];
							refill.spawn.after["freePowerPrisoner_"+distributor_powerPrisoner[aPrisoner]].push(after);
							updateMove(after/6, "after power prisoner");
							distributor_powerPrisoner[aPrisoner] = -1; // mark it to be deleted
						}
					}
				}
			}
			distributor_prisoner = distributor_prisoner.filter(v=>v!==-1);
			distributor_powerPrisoner = distributor_powerPrisoner.filter(v=>v!==-1);
			if(distributor_prisoner.length) level.distributor.freePrisoner=distributor_prisoner.join('');
			if(distributor_powerPrisoner.length) level.distributor.freePowerPrisoner=distributor_powerPrisoner.join('');
		}
	
		if(distributor_tnt) level.distributor.tnt=Math.round(distributor_tnt);
	
		level.rules_win = rules_win;
	
		level.mask = mask;
		//to enable debug  console.log("MOVES: SET FROM "+moves+ " TO "+Math.round(moves*(0.5 + 0.6*(1-rDifficulty))));
		// console.log("FINAL Moves :" + moves);
		level.nbBalls = nbBalls;
		level.move = Math.max(minMoves, Math.ceil(minMovesPerObjective*Object.keys(rules_win).length), Math.round(moves*(0.6 + 0.5*(1-rDifficulty))));
		level.distributor.balls = distributor_balls.join(",");//+"_"+ballsThreshold
	
		let totProba = refill.probability_ball.reduce((a,b)=>a+b);
		refill.probability_ball = refill.probability_ball.map((v,i)=>(i===0) ? "*" : Math.floor(v*100/totProba)).join(',');
		for(var something in refill.spawn.after) refill.spawn.after[something] = refill.spawn.after[something].join(',');
		for(var something in refill.spawn.loop) refill.spawn.loop[something] = refill.spawn.loop[something].join(',');
		// level.difficulty = Math.round(level.difficulty);
		level.refill = refill;
	
		return JSON.stringify(level);
	}
	// console.log()
	/*
	if(typeof window !== "undefined"){
		window.setLD = function(){
			window.newLevel = genLevel(Math.random()*100);
			console.log("Difficulty :",window.newLevel.difficulty, window.newLevel);
			c2_callFunction("customCheat_inject_ldstring", [JSON.stringify(window.newLevel)]);
		};
		var genLD = false, c2LayoutChange = function(dir, layout){
			if(genLD && dir === "out" && (layout === "LevelSelect" || layout === "GameOver")) window.setLD();
		};
		console.log("You can generate a level by doing:  genLevel(LEVEL_DIFFICULTY_FROM_0_TO_100, SEED)   (both parameters can be left blank)");
		console.log("Copy-paste :  genLD=!genLD   to de/activate the auto generation (desactivated by default)");
		genLD=!genLD;
	}else{
		// console.log(JSON.stringify(genLevel(Math.random()*100)));
		// console.log(JSON.stringify(genLevel(80, "pouet1"+Math.random())));
		console.log(JSON.stringify(genLevel(63.37082217225236, "pouet0.25578838802386095")));
	}*/
	
	if(typeof(window?.playtouch) != "object"){ window.playtouch = {};}
		playtouch.gen = new gen();
	})();
	
	// playtouch.gen.genLevel(29.58, "1_186")