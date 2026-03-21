var ON_CONNECTION_ERROR = 0;
var ON_DISCONNECTION = 1;
var ON_LOGIN_SUCCESS = 2;
var ON_MATCHMAKING_CONNECTION_SUCCESS = 3;
var ON_GAMEROOM_CONNECTION_SUCCESS = 4;
var ON_USEROWNERROOM_CREATE_SUCCESS = 5;
var ON_USEROWNERROOM_JOIN_SUCCESS = 6;
var ON_ROOM_INFO_RETURNED = 7;
var ON_BACK_FROM_A_ROOM = 8;

var ERROR_CODE_UNKNOWNROOM = "UnknownRoom";

/////////////// ROOM TYPE
var ROOM_TYPE_MATCHMAKING = 'MatchmakingRoom';
var ROOM_TYPE_USEROWNER = 'UserOwnerRoom';
var ROOM_TYPE_GAME = "GameRoom";

function CNetworkManager(){
    
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oCurConnection;
    var _oCurClient;
    var _oMessageForwarder;
    
    var _iPlayerOrderID;
    
    var _szNickname;
    var _szEnemyNickname;
    var _szCurRoomID;
    var _szCurRoomPass;
    var _szBotName;
    
    this._init = function(){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oMessageForwarder = new CNetworkMessageForwarder();
    };

    this.unload = function(){
        s_oNetworkManager = null;
    };
    
    this.connectToSystem = function(){
        s_oNetworkManager.addEventListener(ON_LOGIN_SUCCESS, s_oNetworkManager.gotoLobby);
        g_oCTLMultiplayer.showChooseNickName();
    };

    this.login = function(szNickname){
        _szNickname = szNickname;
        
        var szIDNickname = this._setValidNick(szNickname);
        
        PlayerIO.useSecureApiRequests = !MULTIPLAYER_TEST_LOCAL;	
        
        PlayerIO.authenticate(GAME_PLAYERIO_ID, "public", { userId: szIDNickname }, {}, function (client) {
            _oCurClient = client;
            _oCurClient.multiplayer.useSecureConnections = !MULTIPLAYER_TEST_LOCAL;
            //console.log("Authenticated to PlayerIO as: " + client.connectUserId);

            if(MULTIPLAYER_TEST_LOCAL){
                _oCurClient.multiplayer.developmentServer = 'localhost:8184';
                _oCurClient.multiplayer.createJoinRoom("fakeroom"+Math.random(), "fakeroom", false, null, null, function (connection) {
                    connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
                    connection.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);
                }, s_oNetworkManager.callbackError);
            }

            
            if(_aCbCompleted[ON_LOGIN_SUCCESS]){
                _aCbCompleted[ON_LOGIN_SUCCESS].call(_aCbOwner[ON_LOGIN_SUCCESS]);
            }
            
        }, s_oNetworkManager.callbackError);
    };

    this._setValidNick = function(szNickname){
        var szValidNickname;
        var szCodeNumber = s_oNetworkManager._getRandomCodeNumber();
        
        ///EMPTY CASE
        if(szNickname === ""){
            szValidNickname = "guest-"+szCodeNumber;
            _szNickname = szValidNickname;
        } else {
            szValidNickname = szNickname +"-"+ szCodeNumber;
        }
        
        return szValidNickname; 
    };

    this._getRandomCodeNumber = function(){
        return Math.floor( Math.random()*1000);
    };


    this.generateRandomName = function(){
        var aListName = [
            "xmariox", "alex", "max", "mahuro", "biajus", "rob", "idah", "fabrix", "seth", "ikillyou", "commander", "admiral", "general", "seasalt", "emperorofthesea",
            "Aspect","Kraken","Dragon","Shiver","Dracula","Doom","Scar","Roadkill","Cobra","Psycho","Ranger","Ripley","Clink","Bruise","Bowser","Creep","Cannon","Daemon",
            "Steel","Tempest","Hurricane","Titanium","Tito", "Lightning", "IronHeart", "Sabotage" ,"Rex", "Hydra", "Terminator", "Agrippa", "Gash",
            "Blade","Katana","Gladius","Angon","Claymore","Pike","Hammer","Club","Heart","Gauntlet","Montante","Longbow","bow","Dagger"
        ];

        var iRandomIndex = Math.floor( Math.random()*aListName.length );
        var szRandomName = aListName[iRandomIndex];

        /////SET RANDOM NUMBER
        if(Math.random()> 0.5){
            var szRandomNumber = Math.floor( Math.random()*100 );
            /////ADD SPECIAL CHAR
            if(Math.random() > 0.5){
                var aSpecial = ["-", "_"];
                var iRandomIndex = Math.floor( Math.random()*aSpecial.length );
                var szSpecialChar = aSpecial[iRandomIndex];

                szRandomName += szSpecialChar;
            }
            szRandomName += szRandomNumber;
        }

        _szBotName = szRandomName;
        
        return szRandomName;
    };  

    this.getBotName = function(){
        return _szBotName;
    };

    this.addEventListener = function(iEvent,cbCompleted, cbOwner){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    ///////////////////////////////// EVENT FUNCTIONS
    //Log all errors to console
    this.callbackError = function(error) {
            //console.log("Error: " + error.code + " - " + error.message);
            if(_aCbCompleted[ON_CONNECTION_ERROR]){
                _aCbCompleted[ON_CONNECTION_ERROR].call(_aCbOwner[ON_CONNECTION_ERROR], error);
            }
    };
    
    //Log disconnection
    this.callbackDisconnect = function(error) {
            //console.log("Disconnected");
            if(_aCbCompleted[ON_DISCONNECTION]){
                _aCbCompleted[ON_DISCONNECTION].call(_aCbOwner[ON_DISCONNECTION], error);
            }
    };
    
    //////////////////// COMMUNICATION TO SERVER /////////
    this.sendMsg = function(szMessage, oParam){
        if(_oCurConnection){
            _oCurConnection.send(szMessage, oParam);
        }
    };
    //////////////////////////////////////////////////////

    this.disconnect = function(){
        if(_oCurConnection){
            _oCurConnection.disconnect();
            _oCurConnection = null;
        }
        
    };
    
    this.isUserA = function(){
        return parseInt(_iPlayerOrderID) === 0 ? true:false;
    };
    
    this.getPlayerOrderID = function(){
        return _iPlayerOrderID;
    };
    
    this.getPlayerNickname = function(){
        return _szNickname;
    };
    
    this.getEnemyNickname = function(){
        return _szEnemyNickname;
    };
    
    ////////////////////////////////////////////////////////////
    ///////////////////// ROOMS SYSTEM FUNCTIONS////////////////

    this.createRoom = function(szRoomID, szPass){
        s_oNetworkManager.addEventListener(ON_USEROWNERROOM_CREATE_SUCCESS, this._onRoomCreated);

        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }
        
        //Join the room
        _oCurClient.multiplayer.createJoinRoom(szRoomID, ROOM_TYPE_USEROWNER, true, {id: szRoomID, pass: szPass}, {nickname:_szNickname}, function (connection) {

            //console.log("create owner room for user: " + _oCurClient.connectUserId);
            _oCurConnection = connection;
            connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
            connection.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);

            if(_aCbCompleted[ON_USEROWNERROOM_CREATE_SUCCESS]){
                _aCbCompleted[ON_USEROWNERROOM_CREATE_SUCCESS].call(_aCbOwner[ON_USEROWNERROOM_CREATE_SUCCESS]);
            }


        }, s_oNetworkManager.callbackError);
    };
    
    this.joinRoom = function(szRoomID){
        s_oNetworkManager.addEventListener(ON_CONNECTION_ERROR, this._onRoomJoinedFailed);
        //console.log("join room as: " + _oCurClient.connectUserId);

        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }

        //Join the room
        _oCurClient.multiplayer.joinRoom(szRoomID, {nickname:_szNickname}, function (connection) {
            _oCurConnection = connection;
            connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
            connection.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);

            if(_aCbCompleted[ON_USEROWNERROOM_JOIN_SUCCESS]){
                _aCbCompleted[ON_USEROWNERROOM_JOIN_SUCCESS].call(_aCbOwner[ON_USEROWNERROOM_JOIN_SUCCESS]);
            }
        }, s_oNetworkManager.callbackError);
    };
    
    this.gotoGameRoom = function(oMessage){
        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }

        var szRoomID = oMessage.getString(0);
        _iPlayerOrderID = oMessage.getInt(1);
        _szEnemyNickname = oMessage.getString(2);

        //Join the room
        _oCurClient.multiplayer.createJoinRoom(szRoomID, ROOM_TYPE_GAME, false, null, null, function (connection) {
                _oCurConnection = connection;
                connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
                connection.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);

                //console.log("game found! move players to a private game room");

                g_oCTLMultiplayer.closeAllDialog();

                if(_aCbCompleted[ON_GAMEROOM_CONNECTION_SUCCESS]){
                    _aCbCompleted[ON_GAMEROOM_CONNECTION_SUCCESS].call(_aCbOwner[ON_GAMEROOM_CONNECTION_SUCCESS]);
                }


        }, s_oNetworkManager.callbackError);
    };
    
    this.gotoMatchMakingRoom = function(){
        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }

        //Join the room
        _oCurClient.multiplayer.createJoinRoom('matchmakingroom1', ROOM_TYPE_MATCHMAKING, true, null, {nickname:_szNickname}, function (connection) {
                _oCurConnection = connection;
                connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
                connection.addDisconnectCallback(s_oNetworkManager.callbackDisconnect);

                //console.log("Connected to matchmaking room");

                if(_aCbCompleted[ON_MATCHMAKING_CONNECTION_SUCCESS]){
                    _aCbCompleted[ON_MATCHMAKING_CONNECTION_SUCCESS].call(_aCbOwner[ON_MATCHMAKING_CONNECTION_SUCCESS]);
                }
                

        }, s_oNetworkManager.callbackError);
    };

    this.tryCreateUniqueRoom = function(szRoomID, szPass){
        _szCurRoomID = szRoomID;
        _szCurRoomPass = szPass;
        
        _oCurClient.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {id: szRoomID}, 0,0,s_oNetworkManager._onUniqueListRoomSearch, s_oNetworkManager.callbackError);
    };
    
    this._onUniqueListRoomSearch = function(aRooms){
        if(aRooms.length > 0){
            ///ANOTHER ROOM WITH SAME NAME EXIST!
            _szCurRoomID += "-" + s_oNetworkManager._getRandomCodeNumber();
        }
        
        s_oNetworkManager.createRoom(_szCurRoomID, _szCurRoomPass);
    };

    this._onRoomCreated = function(){
        g_oCTLMultiplayer.closeAllDialog();
        
        g_oCTLMultiplayer.showLoading(TEXT_WAITING_FOR_OPPONENT_IN_ROOM +_szCurRoomID, "s_oNetworkManager._onDisconnectFromARoom");
    };
    
    this._onDisconnectFromARoom = function(){
        if(_aCbCompleted[ON_BACK_FROM_A_ROOM]){
            _aCbCompleted[ON_BACK_FROM_A_ROOM].call(_aCbOwner[ON_BACK_FROM_A_ROOM]);
        }
        
        s_oNetworkManager.disconnect();

        ///Seems there is some delay to listrooms when you delete a room. Even with a callback to disconnect function
        setTimeout(function(){
            s_oNetworkManager.gotoLobby();
        }, 250);
    };
    
    this._onRoomJoined = function(){
        
    };
    
    this._onRoomJoinedFailed = function(szError){
        s_oNetworkManager.addEventListener(ON_CONNECTION_ERROR, function(){});
        
        switch(szError.code){
            case ERROR_CODE_UNKNOWNROOM: {
                    g_oCTLMultiplayer.closeAllDialog();
                    g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_DOESNT_EXIST, "s_oNetworkManager.gotoLobby");
                break;
            }
        }
    };
    
    this.gotoLobby = function(){
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_CONNECT_TO_LOBBY);
        
        _oCurClient.multiplayer.listRooms(ROOM_TYPE_USEROWNER, null, 0,0,s_oNetworkManager._onListRoom, s_oNetworkManager.callbackError);
    };
    
    this._onListRoom = function(aRooms){
        var aRoomInfo = new Array();
        for(var i=0; i<aRooms.length; i++){
            
            var bPrivate = aRooms[i].roomData.pass.length === 0 ? false : true;
            
            aRoomInfo[i] = {name: aRooms[i].id, private:bPrivate};
        }
        
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showRoomList(aRoomInfo);
    };
    
    this.joinQuickMatch = function(){
        g_oCTLMultiplayer.showLoading(TEXT_NETWORK_CONNECTING);
        
        s_oNetworkManager.gotoMatchMakingRoom();
    };

    this.tryJoinRoomWithPass = function(szRoomID, szPass){
        _szCurRoomID = szRoomID;
        _szCurRoomPass = szPass;
        
        s_oNetworkManager.addEventListener(ON_ROOM_INFO_RETURNED, s_oNetworkManager._checkUserPermissionToJoin);
        s_oNetworkManager.getRoomInfo(szRoomID, szPass);
    };
    
    this._checkUserPermissionToJoin = function(aRoomInfo){
        if(aRoomInfo.length > 0){
            //"PERMISSIONGRANTED"
            s_oNetworkManager.joinRoom(aRoomInfo[0].roomData.id, aRoomInfo[0].roomData.pass);
        }else {
            //"PERMISSIONREFUSED"
            g_oCTLMultiplayer.closeAllDialog();
            g_oCTLMultiplayer.showGeneralDialog(TEXT_WRONG_PASSWORD, "s_oNetworkManager._onPasswordFailed");
        }
    };
    
    this._onPasswordFailed = function(){
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showTypeRoomPassword(_szCurRoomID);
    };
    
    this.getRoomInfo = function(szRoomID, szPass){
        _oCurClient.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {id: szRoomID, pass: szPass}, 0,0, s_oNetworkManager._onRoomInfoReturned, s_oNetworkManager.callbackError);
    };
    
    this._onRoomInfoReturned = function(aRoomInfo){
        if(_aCbCompleted[ON_ROOM_INFO_RETURNED]){
            _aCbCompleted[ON_ROOM_INFO_RETURNED].call(_aCbOwner[ON_ROOM_INFO_RETURNED], aRoomInfo);
        }
    };

    

    this._init();
}

