// Put user code here //
var DataController = me.Object.extend({
    init: function(){
            this.dbController = new testDatabase();
    },
    
      
    initDatabase: async function(callback){
      game.user = await this.dbController.loadDatabase();
       
    //   console.log(game.user);
       
      let isDatabaseEmpty = !game.user || game.user.userData.name == "" || game.user.device.haveLogin == 0;
      if(isDatabaseEmpty) {
            // console.log("returned db is empty");
            this.createDatabase();
            if(typeof callback !== "undefined") callback(false);
            return;
      }
        
        if(typeof callback !== 'undefined') callback(true);
    },
    
    createDatabase: function(){
        this.dbController.createDatabase();
        
        let sequence = ["ID","name", "haveLogin"];
        this.dbController.setData(sequence, 1);
        game.user.device.haveLogin = 1;
    },
    
    setTutorial : async function(){
        let sequence = ["userData", "haveTutorial"];

            this.dbController.setData(sequence, 1);
            game.user.userData.haveTutorial = 1;
            
        if(gameSnacks_API){GameSnacks.storage.setItem('haveTutorial1', JSON.stringify(game.user.userData.haveTutorial))}
    },
    
    setAudioCheck : async function(value){
        let sequence = ["userData", "mute"];

        this.dbController.setData(sequence, value);
        game.user.userData.mute = value;
    },
    
    setScore : async function(value, callback){
        let sequence = ["userData", "score"],
            oldValue = await this.dbController.getData(sequence);
            
            var valuestring = String(value);
            var oldvaluestring = String(oldValue);
            
            this.dbController.setData(sequence, value);
            game.user.userData.score = value;
      
        
        if(typeof callback !== "function") callback = function(){};
    },
    
    setHighScore : async function(value, callback){
        let sequence = ["userData", "highScore"],
            oldValue = await this.dbController.getData(sequence);
            
            if(value > oldValue){
                this.dbController.setData(sequence, value);
                game.user.userData.highScore = value;
            }
            if(value >= 99999){
                this.dbController.setData(sequence, 99999);
                game.user.userData.highScore = 99999;
            }
            
            if(gameSnacks_API){GameSnacks.storage.setItem('highScore1', JSON.stringify(game.user.userData.highScore))}
        if(typeof callback !== "function") callback = function(){};
    },
    
    setgoldbank : async function(value, callback){
        let sequence = ["userData", "bank"],
            oldValue = await this.dbController.getData(sequence);
            
            newValue = oldValue + value;
            this.dbController.setData(sequence, newValue);
            game.user.userData.bank = newValue;
            
            if(newValue >= 99999){
                this.dbController.setData(sequence, 99999);
                game.user.userData.bank = 99999;
            }
            
            if(gameSnacks_API){GameSnacks.storage.setItem('bank1', JSON.stringify(game.user.userData.bank))}
            
        if(typeof callback !== "function"){ 
            callback = function(){};
        }
        
        callback();
    },
    
    resetScore : async function(callback){
        let sequence = ["userData", "score"];
            
            this.dbController.setData(sequence, 0);
            game.user.userData.score = 0;
            
        if(typeof callback !== "function") callback = function(){};
    },
    
    deleteDatabase: function(){
        let sequence = ["device", "haveLogin"];
        this.dbController.setData(sequence, 0);
        game.user.device.haveLogin = 0;
    },
    
    getData : async function(callback){
        if(typeof callback !== "function") callback = function(){};
        
        let getValue = await this.dbController.getUserData();
        
        callback(getValue);
    },
    
    getDataFromJSON: function(datatype, id, checking){
        if(typeof checking === "undefined"){
            checking = (obj, id) => obj.id === id;
        }
        
        let data = game.data[datatype];
        if(!data){
            throw `game.data.${datatype} is not a valid.`;
        }
        
        return data;
    },
    
    getDataItemInfo: function(){
        return this.getDataFromJSON('itemInfo', 0);
    },
    
    getDataGamePlay: function(){
        return this.getDataFromJSON('dataGamePlay', 0);
    },
    
    buyItem : async function(userItem, newUserCoin, callback){
        if(typeof callback !== "function") callback = function(){};
        
        await this.modifyUserDataProperty("item", userItem);
        await this.modifyUserDataProperty("score", newUserCoin);
        callback(newUserCoin);
    },
    
    upgradeItem : async function(id, level, cost, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let itemSequence = ["userData", 'item'],
            bankSequence = ["userData", 'bank'],
            userItem = await this.dbController.getData(itemSequence),
            userBank = await this.dbController.getData(bankSequence);
            
        if(userBank >= cost){
            userItem[id] = level;
            await this.modifyUserDataProperty("item", userItem);
            await this.modifyUserDataProperty("bank", userBank - cost);
            callback(true);
            
            if(gameSnacks_API){
                GameSnacks.storage.setItem('bank1', JSON.stringify(game.user.userData.bank));
                GameSnacks.storage.setItem('item1', JSON.stringify(userItem));
            }
        }
        else{
            callback(false);    
        }
    },
    
    resetItem : async function(){
        let sequence = ["userData", "item"],
            itemKosong = [];
            
        this.dbController.setData(sequence, itemKosong);
        game.user.userData.item = [];
            
        if(typeof callback !== "function") callback = function(){};
    },
    
    getUserDataProperty : async function(property, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", property],
            getValue = await this.dbController.getData(sequence);
        
        callback(getValue);
    },
    
    modifyUserDataProperty: async function(property, value, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", property];
            newValue = value;
        
        this.dbController.setData(sequence, newValue);
        game.user.userData[property] = newValue;
        callback(newValue);
    },
    
    clearData : function(){
        for(let i in DEFAULT_DATA){
            let property = i;
            let data = DEFAULT_DATA[i];
            if(property != 'id' && property != 'name'){
                this.modifyUserDataProperty(property, data);
            }
        }
    },
});
//  End of user code  //
