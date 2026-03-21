// Put user code here //
var testDatabase = baseDatabase.extend({
    init: function(){
        
    },
    
    createDatabase: function(callback){
        let db = game.data.initUser;
        
        // populate db
        db.device.platform = "Test Database";
        // db.device.os = game.util.getDevicePlatform();
        // --
        
        console.log("[TEST] database created.");
        // callback();
    },
    
    loadDatabase: function(){
        console.log("[TEST DATABASE] load database");
        let db = game.data.initUser;
        
        if(DATABASE_TEST_FULL){
            //harus nyala
    	        db.device.haveLogin   = 1;
    	        db.userData.name = "cacad";
	        //--
                
	        if(gameSnacks_API){
                if(GameSnacks.storage.getItem('highScore1') == null){}else{db.userData.highScore = JSON.parse(GameSnacks.storage.getItem('highScore1'))}
                if(GameSnacks.storage.getItem('item1') == null){}else{db.userData.item = JSON.parse(GameSnacks.storage.getItem('item1'))}
                if(GameSnacks.storage.getItem('bank1') == null){}else{db.userData.bank = JSON.parse(GameSnacks.storage.getItem('bank1'))}
                if(GameSnacks.storage.getItem('haveTutorial1') == null){}else{db.userData.haveTutorial = JSON.parse(GameSnacks.storage.getItem('haveTutorial1'))}
            }
        }   
        
        return new Promise((resolve, reject) => {
            resolve(db);
        });
    },
    
    saveToDatabase: function(obj, callback){
        // console.log("[TEST DATABASE] success save to database, this is the object that you save");
        console.log(obj);
    },
    
    getData: function(sequence){
        let res = game.user;
        // console.log(res);
        for(let i = 0; i < sequence.length; i++){
            if(res != null) res = res[sequence[i]];
        }
        return new Promise((resolve, reject) => {
            resolve(res);
        });
    },
    
    setData: function(sequence, value){
        // success set data
        let res = game.data.initUser;
        for(let i = 0; i < sequence.length; i++){
            let temp = res[sequence[i]];
            if(typeof temp === "undefined"){
                res = value;
                break;
            }
            res = temp;
        }
        return res;
    }
});
//  End of user code  //
