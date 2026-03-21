;(function(){
	

	//all game codes here
	class Main {
		constructor(){
		}


	}

	//all non gameplay utility codes here
	class CustomUtils {
		constructor(){
		}

        tuto_loadAndVerify(tuto_stats_storage,tuto_stats_hash){
            for (var lvlPack in tuto_stats_storage["tuto"]["how_to"]){
                if(lvlPack!=="version"){
                    if(typeof tuto_stats_storage["tuto"]["how_to"][lvlPack]["gm"] !== "undefined"){
                        for (var typeProperty in tuto_stats_storage["tuto"]["how_to"][lvlPack]["gm"]){
                            if(!typeProperty.includes("powerup")){
                                if(typeof tuto_stats_hash[lvlPack]["gm"][typeProperty] !== "undefined"){
                                    tuto_stats_storage["tuto"]["how_to"][lvlPack]["gm"][typeProperty]=tuto_stats_hash[lvlPack]["gm"][typeProperty];
                                } else{
                                    delete tuto_stats_storage["tuto"]["how_to"][lvlPack]["gm"][typeProperty];
                                    for (var newProperty in tuto_stats_hash[lvlPack]["gm"]){
                                        if(!newProperty.includes("powerup")){
                                            tuto_stats_storage["tuto"]["how_to"][lvlPack]["gm"][newProperty]=tuto_stats_hash[lvlPack]["gm"][newProperty];
                                        }
                                    }
                                }
                            }
                        }
                    } else{
                        tuto_stats_storage["tuto"]["how_to"][lvlPack]=tuto_stats_hash[lvlPack];
                    }
                }
            }
            window.eventToFire.fireEvent("c2:tuto_loadComplete",JSON.stringify(tuto_stats_storage),JSON.stringify(tuto_stats_hash));
        }
	}

	if(typeof window.playtouchGame === "undefined"){window.playtouchGame = {};}

	window.playtouchGame.main = new Main();
	window.playtouchGame.customUtils = new CustomUtils();
})();