var Define = function () {};
var Enum = function () {};

Define.txtVer = "ver.1.0.19"; // 버젼

Enum.DEVICE_STATE = {
	PC : 0,
	IOS : 1,
	ANDROID : 2
};

Enum.GAME_MODE = {
    EASY : 0,
    NORMAL : 1,
    HARD : 2
};

Enum.LANGUAGE = {
    korea : 0,
    english : 1,
    japan : 2
};

Define.bLocalHost = (document.location.href.indexOf("localhost") !== -1 );
Define.GAME_CODE = 187;
Define.SAVE_VER = 1;    // 세이브버젼
Define.IMG_VER = 3;     // 이미지 버젼
Define.SND_VER = 1;     // 사운드 버젼
Define.JSON_VER = 1;     // JSON 버젼
Define.SPINE_VER = 2;
Define.DEVICE = Enum.DEVICE_STATE.PC;

Define.GameName = 'wordler';
Define.SAVE_KEY = "com.hotShare.wordle";

// 언어 설정
Define.tbLang = [0, 1];
Define.LANG = Define.tbLang[0];
Define.LANG = MSSDK.getParameterByName('lang') == "en" ? Define.tbLang[1] :Define.tbLang[0];
Define.PID = MSSDK.getParameterByName('id');
//Define.GameName = $(document).find("title").text();
Define.iADCnt = 0;


Define.DARUMA_MAX_SPRITE_NUMBER = 6;
Define.GOOGLE_SHEETS_DATA = false;
Define.GOOGLE_SPREADSHEET_ID = "1kHvpt5vbB9I_dRtRGiBn42wFdFbNdg9sEgQ48WDr1kw";
var MG_LanguageJson = '{"1":{"ko":"워들러","en":"Wordler"},"2":{"ko":"힌트","en":"Hint"},"3":{"ko":"단어를 추측할 6번의 기회가 주어집니다.","en":"You have 6 tries to guess the WORD."},"4":{"ko":"뜻이 되는 5글자 단어를 입력하고 엔터를 누르세요.","en":"Suggest the valid 5 letter word\\nand press ENTER to submit."},"5":{"ko":"단어를 제시했을 시 알파벳의 색상이 힌트가 됩니다.","en":"After you submit, the color of letters\nwill give you an additional hint."},"6":{"ko":"녹색으로 표시된 알파벳은 답 단어에\n존재하며 동일한 위치임을 의미합니다.","en":"Letter colored in green means that it exists in\nthe target word and takes the same place."},"7":{"ko":"노란색으로 표시된 알파벳은 답 단어에\n존재하지만 위치는 다름을 의미합니다.","en":"Letter colored in yellow means that it exists in\nthe word but not on the same place."},"8":{"ko":"검정색으로 표시된 알파벳은 답 단어에\n해당 알파벳이 없음을 의미합니다.","en":"Letter colored in black means there is\nno such letter in the target word."},"9":{"ko":"한번만 더","en":"ONE MORE TRY"},"10":{"ko":"아니오","en":"NO,THANKS"},"11":{"ko":"성공","en":"SUCCESS!"},"12":{"ko":"실패","en":"Failed.."},"13":{"ko":"정답 확인 해보기","en":"Show me the word"},"14":{"ko":"통계","en":"STATISTICS"},"15":{"ko":"게임 횟수","en":"PLAYED"},"16":{"ko":"승률","en":"WON.%"},"17":{"ko":"현재 연승","en":"WINNING STREAK"},"18":{"ko":"최대 연승","en":"MAX STREAK"},"19":{"ko":"추측","en":"GUESS"},"20":{"ko":"다음 단어","en":"NEXT WORD"},"21":{"ko":"설정","en":"SETTING"},"22":{"ko":"테마","en":"THEME"},"23":{"ko":"배경음","en":"BGM"},"24":{"ko":"효과음","en":"SE"},"25":{"ko":"게임 종료","en":"Exit"}}';
Define.SHEET_LOCAL_STRING = 'json: {"GameInfo":{"ant_speed":"5,4,5,1","ant_speed_big":"5,9,5,1"}}';

Define.fontStyle = 'Roboto-Bold';//'Retroica';//TmoneyRoundWindExtraBold';//HYDNKB';//HYDNKB';
Define.fontStyle_Ko = 'NanumSquareRoundB';//'Arial';//'Arial';

'use strict';
KeyboardPanel = function (game) {
	this.game = game;
	this.grpPanel = null;
	this.level = 0;
	this.parent = null;
	this.cb_Input = null;

};

Enum.KEBOARD_STATE = {
	default : 0,
	out : 1,
	strike : 2,
	inactive  :3,
};

KeyboardPanel.prototype = {
	preload: function () {
	},
	create: function () {
	},
	init : function () {
		this.grpPanel = this.game.add.group();
		this.inputKeyboard();
	},
	inputKeyboard : function ()
	{
		var keySortList = [10,23,21,12,2, 13,14,15,7,16,
			17,18,25,24,8,	9,0,3,11,4,	6,22,1,20,5,19];

		for(var i=65; i <= 90; i++)
		{
			this.game.input.keyboard.addKey(i).onDown.add(function(event){
				//console.log(String.fromCharCode(event.keyCode));
				if(!this.parent.getKeyboardActive())
				{
					return;
				}
				this.keyPress(this.sprKeyWord[keySortList[event.keyCode-65]]);
				this.game.time.events.add(50, function () {
					this.keyUp(this.sprKeyWord[keySortList[event.keyCode-65]]);
				}.bind(this), this);

			}, this);
		}
		this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE).onDown.add(function(event){
			if(!this.parent.getKeyboardActive())
			{
				return;
			}
			this.keyPress(this.sprKeyWord[27]);
			this.game.time.events.add(50, function () {
				this.keyUp(this.sprKeyWord[27]);
			}.bind(this), this);

		}, this);

		this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(function(event){
			if(!this.parent.getKeyboardActive())
			{
				return;
			}
			this.keyPress(this.sprKeyWord[26]);
			this.game.time.events.add(50, function () {
				this.keyUp(this.sprKeyWord[26]);
			}.bind(this), this);

		}, this);


	},
	setKeyboard : function (parent, cb_Input)
	{
		this.parent = parent;
		this.cb_Input = cb_Input;

		var tb2 = ["Q","W","E","R","T","Y","U","I","O","P"];
		var tb3 = ["A","S","D","F","G","H","J","K","L"];
		var tb4 = ["Z","X","C","V","B","N","M"];

		this.sprKeyWord = [];
		this.keyboardY = MG.iCSY +107;



		for(var i=0;i<10;++i){

			this.sprKeyWord[i] = this.AddSpriteButton(this.grpPanel, 44+(i*70), this.keyboardY+280, "atlasImage","Game_Key_A.png");
			this.sprKeyWord[i].tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
			this.sprKeyWord[i].state = Enum.KEBOARD_STATE.default;
			this.sprKeyWord[i].txt = MG.AddText(this.sprKeyWord[i], 0, 3, tb2[i], {font: "24px "+Define.fontStyle, fill: "#FFFFFF"});
			this.sprKeyWord[i].events.onInputDown.add(this.keyPress, this);
			this.sprKeyWord[i].events.onInputUp.add(this.keyUp, this);
			if(i < 9) {
				this.sprKeyWord[10+i] = this.AddSpriteButton(this.grpPanel, 44+35+(i*70), this.keyboardY+378, "atlasImage","Game_Key_A.png");
				this.sprKeyWord[10+i].tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
				this.sprKeyWord[10+i].state = Enum.KEBOARD_STATE.default;
				this.sprKeyWord[10+i].txt = MG.AddText(this.sprKeyWord[10+i], 0, 3, tb3[i], {font: "24px "+Define.fontStyle, fill: "#FFFFFF"});
				this.sprKeyWord[10+i].events.onInputDown.add(this.keyPress, this);
				this.sprKeyWord[10+i].events.onInputUp.add(this.keyUp, this);
			}

			if(i < 7) {
				this.sprKeyWord[19+i] = this.AddSpriteButton(this.grpPanel, 44+105+(i*70), this.keyboardY+476, "atlasImage","Game_Key_A.png");
				this.sprKeyWord[19+i].tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
				this.sprKeyWord[19+i].state = Enum.KEBOARD_STATE.default;
				this.sprKeyWord[19+i].txt = MG.AddText(this.sprKeyWord[19+i], 0, 3, tb4[i], {font: "24px "+Define.fontStyle, fill: "#FFFFFF"});
				this.sprKeyWord[19+i].events.onInputDown.add(this.keyPress, this);
				this.sprKeyWord[19+i].events.onInputUp.add(this.keyUp, this);
			}
		}

		// Enter
		this.sprKeyWord[26] = this.AddSpriteButton(this.grpPanel, 58+3, this.keyboardY+476,  "atlasImage","Game_Key_B.png");
		MG.AddSprite(this.sprKeyWord[26], 0, 0,'atlasImage','Game_Key_B_Enter.png', undefined, 1, 0.5, 0.5);
		this.sprKeyWord[26].tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
		this.sprKeyWord[26].state = Enum.KEBOARD_STATE.default;
		this.sprKeyWord[26].txt = {};
		this.sprKeyWord[26].txt.text = "enter";
		this.sprKeyWord[26].events.onInputDown.add(this.keyPress, this);
		this.sprKeyWord[26].events.onInputUp.add(this.keyUp, this);
		// 백스페이스
		this.sprKeyWord[27] = this.AddSpriteButton(this.grpPanel, 660-4, this.keyboardY+476, "atlasImage","Game_Key_B.png");
		MG.AddSprite(this.sprKeyWord[27], 0, 0,'atlasImage','Game_Key_B_Back.png', undefined, 1, 0.5, 0.5);
		this.sprKeyWord[27].tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
		this.sprKeyWord[27].state = Enum.KEBOARD_STATE.default;
		this.sprKeyWord[27].txt = {};
		this.sprKeyWord[27].txt.text = "back";
		this.sprKeyWord[27].events.onInputDown.add(this.keyPress, this);
		this.sprKeyWord[27].events.onInputUp.add(this.keyUp, this);
		this.sprKeyWord[27].events.onInputOut.add(this.keyOut, this);
		this.sprKeyWord[27].events.onInputOver.add(this.keyOver, this);


		// var ttt = this.AddSpriteButton(this.grpPanel, 44, this.game.height - 13, "atlasImage","Game_Key_A.png");
		// ttt.anchor.y = 1;
		//
		// var ttt2 = this.AddSpriteButton(this.grpPanel, 44, this.game.height - 13 - 98, "atlasImage","Game_Key_A.png");
		// ttt2.anchor.y = 1;
		//
		// var ttt3 = this.AddSpriteButton(this.grpPanel, 44, this.game.height - 13 -98 - 98, "atlasImage","Game_Key_A.png");
		// ttt3.anchor.y = 1;


	},
	keyboardInit : function ()
	{
		for(var i=0;i<26;++i){
			this.sprKeyWord[i].loadTexture ( 'atlasImage',"Game_Key_A.png" );
			this.sprKeyWord[i].state = Enum.KEBOARD_STATE.default;
			this.sprKeyWord[i].tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
			this.sprKeyWord[i].txt.alpha = 1;
		}
	},
	setModeColor : function (mode)
	{
		for(var i=0;i<28;++i){

			if(this.sprKeyWord[i].state == Enum.WORD_STATE.strike)
			{
				this.sprKeyWord[i].loadTexture ( 'atlasImage',"Game_Key_A_"+this.parent.mode+"_Strike.png" );
				this.sprKeyWord[i].tint = 0xffffff;
				this.sprKeyWord[i].state = Enum.KEBOARD_STATE.strike;
			}
			else if(this.sprKeyWord[i].state == Enum.WORD_STATE.out)
			{
				this.sprKeyWord[i].tint = 0xffc53b;
				this.sprKeyWord[i].state = Enum.KEBOARD_STATE.out;
			}
			else if(this.sprKeyWord[i].state == Enum.KEBOARD_STATE.inactive)
			{
				this.sprKeyWord[i].txt.alpha = this.parent.mode == "Dark"?0.2:1;
				this.sprKeyWord[i].tint = this.parent.mode == "Dark"?0x44474e:0xc2c3c4;
			}
			else
			{
				this.sprKeyWord[i].txt.alpha = this.parent.mode == "Dark"?1:0.2;
				this.sprKeyWord[i].tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
				this.sprKeyWord[i].txt.alpha = 1;
			}



		}
	},
	getPanel : function ()
	{
		return this.grpPanel;
	},
	Show: function (txt) {
	},
	Hide: function () {
		if(this.oTween.isRunning) this.oTween.stop();

		MG.game.time.events.remove(this.TE_Update1);
		MG.game.time.events.remove(this.TE_Update2);
		this.cursor.visible = false;
		this.rect.visible = false;

		console.log('hide');

		MG.game.add.tween(this.keyboard).to({y:500}, 300, Phaser.Easing.Quartic.Out, true).onComplete.addOnce(function(){
			this.keyboard.visible = false;
		}.bind(this), this);
	},
	AddSpriteButton : function (parent, x, y, atlas, imgName, width, height, ax, ay) {
		var spr = MG.game.add.sprite(x, y, atlas, imgName);
		if(height != undefined) spr.height = height;
		if(width != undefined) spr.width = width;
		ax ? spr.anchor.x = ax : spr.anchor.x = 0.5;
		ay ? spr.anchor.y = ay : spr.anchor.y = 0.5;
		spr.inputEnabled = true;
		parent.addChild(spr);
		return spr;
	},
	changeKey : function (word, state)
	{

		for(var i=0;i<26;++i){
			if(this.sprKeyWord[i].txt.text.toLowerCase() == word)
			{
				if(state == Enum.WORD_STATE.strike)
				{
					if(this.sprKeyWord[i].state != Enum.KEBOARD_STATE.strike)
					{
						this.sprKeyWord[i].loadTexture ( 'atlasImage',"Game_Key_A_"+this.parent.mode+"_Strike.png" );
					}
					this.sprKeyWord[i].tint = 0xffffff;
					this.sprKeyWord[i].state = Enum.KEBOARD_STATE.strike;
				}
				else if(state == Enum.WORD_STATE.out)
				{
					if(this.sprKeyWord[i].state != Enum.KEBOARD_STATE.strike)
					{
						this.sprKeyWord[i].tint = 0xffc53b;
						this.sprKeyWord[i].state = Enum.KEBOARD_STATE.out;
					}
				}
				else
				{
					if(this.sprKeyWord[i].state != Enum.KEBOARD_STATE.strike && this.sprKeyWord[i].state != Enum.KEBOARD_STATE.out)
					{
						this.sprKeyWord[i].txt.alpha = this.parent.mode == "Dark"?0.2:1;
						this.sprKeyWord[i].tint = this.parent.mode == "Dark"?0x44474e:0xc2c3c4;
						this.sprKeyWord[i].state = Enum.KEBOARD_STATE.inactive;
					}

				}
			}
		}
	},
	keyPress: function (spr) {


		spr.tint = 0xffffff;
		if(spr.state == Enum.KEBOARD_STATE.strike)
		{
			spr.loadTexture ( 'atlasImage',"Game_Key_A.png" );
		}

	},
	keyUp: function (spr) {

		switch (spr.state)
		{
			case Enum.KEBOARD_STATE.strike:
				spr.tint = 0xffffff;
				spr.loadTexture ( 'atlasImage',"Game_Key_A_"+this.parent.mode+"_Strike.png" );
				break;
			case Enum.KEBOARD_STATE.inactive:
				spr.tint = this.parent.mode == "Dark"?0x44474e:0xc2c3c4;
				break;
			case Enum.KEBOARD_STATE.out:
				spr.tint = 0xffc53b;
				break;
			default:
				spr.tint = this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
				break;
		}
		if(this.cb_Input)this.cb_Input(spr.txt.text);
	},
	keyOut: function (spr) {

	},
	keyOver: function (spr) {

	},
	refresh : function ()
	{
	},
	update: function () {
	},
	destroy : function () {
	},
};
window[''] = window[''] || {};
window[''].KeyboardPanel = KeyboardPanel;
TutorialPopup = function (game) {
    this.game = game;
    this.grpPanel = null;
    this.parent = null;

};
TutorialPopup.prototype = {
    preload: function () {
    },
    create: function () {
    },
    init : function () {
        this.grpPanel = this.game.add.group();
    },
    setTutorial : function (parent, cb_close)
    {
        //Define.LANG = Define.tbLang[1];
        this.grpPanel.x = MG.iCSX;
        this.grpPanel.y = MG.iCSY;
        this.parent = parent;

        this.backAlpha = MG.AddSpriteNine(this.grpPanel,0, 0,'atlasImage','white.png', this.game.width,this.game.height, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        this.backAlpha.alpha = 0.5;
        this.backAlpha.tint = 0x00000000;
        this.backAlpha.inputEnabled = true;
        this.textColor = this.parent.mode == "Dark"?"#ffffff":"#8d8e8f";



        MG.AddSpriteNine(this.grpPanel,0, 0,'atlasImage','Pop_Frame_'+this.parent.mode+'.png', 592,1160, {top: 124, bottom:  91, left: 76, right: 75},0.5,0.5);
        MG.AddSprite(this.grpPanel, 230, -504,'atlasImage','Pop_Exit_'+this.parent.mode+'.png', undefined, 1, 0.5, 0.5);
        MG.AddText(this.grpPanel,0,-504 , "TUTORIAL", {font: "42px "+Define.fontStyle, fontWeight:'bold',fill: this.textColor});

        this.btnClose = MG.AddSpriteNine(this.grpPanel, 225, -508,'atlasImage','white.png', 60,60, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        this.btnClose.alpha = 0.01;
        this.btnClose.tint = 0x00000000;
        this.btnClose.inputEnabled = true;

        this.btnClose.events.onInputUp.add(function(){
            cb_close();
        }.bind(this));
        //Define.LANG = 1;
        var strWord_1 = "WORLD";
        var strWord_2 = "MODEL";
        var strWord_3 = "RAISE";

        // this.backAlpha2 = MG.AddSpriteNine(this.grpPanel,0, -410,'atlasImage','white.png', 100,100, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        // this.backAlpha3 = MG.AddSpriteNine(this.grpPanel,0, -180,'atlasImage','white.png', 100,80, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        // this.backAlpha4 = MG.AddSpriteNine(this.grpPanel,0, 50,'atlasImage','white.png', 100,60, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        // this.backAlpha5 = MG.AddSpriteNine(this.grpPanel,0, 260,'atlasImage','white.png', 100,60, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        // this.backAlpha6 = MG.AddSpriteNine(this.grpPanel,0, 500,'atlasImage','white.png', 100,100, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);

        // Eng
        //this.backAlpha2 = MG.AddSpriteNine(this.grpPanel,0, -418,'atlasImage','white.png', 100,85, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        //this.backAlpha3 = MG.AddSpriteNine(this.grpPanel,0, -167,'atlasImage','white.png', 100,70, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        // this.backAlpha4 = MG.AddSpriteNine(this.grpPanel,0, 50,'atlasImage','white.png', 100,60, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        // this.backAlpha5 = MG.AddSpriteNine(this.grpPanel,0, 260,'atlasImage','white.png', 100,60, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        // this.backAlpha6 = MG.AddSpriteNine(this.grpPanel,0, 500,'atlasImage','white.png', 100,100, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);

        MG.AddText(this.grpPanel, 0, Define.LANG == Define.tbLang[1]?-362:-344, MG.getString(3), {font: "20px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fill: this.textColor,align:"center"},0.5, 0.5);
        MG.AddText(this.grpPanel, 0, Define.LANG == Define.tbLang[1]?-298:-287, MG.getString(4), {font: "20px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fill: this.textColor, align:"center"},0.5, 0.5);
        MG.AddText(this.grpPanel, 0, Define.LANG == Define.tbLang[1]?-222:-230, MG.getString(5), {font: "20px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fill: this.textColor, align:"center"},0.5, 0.5);

        var greenText = MG.AddText(this.grpPanel, 0, Define.LANG == Define.tbLang[1]?5:-8, MG.getString(6), {font: "20px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fill: "#45d39a", wordWrap:true,wordWrapWidth: 460,align:"center"},0.5, 0.5);
        if(Define.LANG == 0)
        {
            greenText.addColor(this.parent.mode == "Dark"?"#6c7278":"#b0b0b0", 14);
        }
        else
        {
            greenText.addColor(this.parent.mode == "Dark"?"#6c7278":"#b0b0b0", 23);
        }


        var yellowText = MG.AddText(this.grpPanel, 0, Define.LANG == Define.tbLang[1]?215:208, MG.getString(7), {font: "20px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fill: "#ffc53b", wordWrap:true,wordWrapWidth: 420,align:"center"},0.5, 0.5);
        if(Define.LANG == 0)
        {
            yellowText.addColor(this.parent.mode == "Dark"?"#6c7278":"#b0b0b0", 14);
        }
        else
        {
            yellowText.addColor(this.parent.mode == "Dark"?"#6c7278":"#b0b0b0", 24);
        }


        var grayText = MG.AddText(this.grpPanel, 0, Define.LANG == Define.tbLang[1]?435:423, MG.getString(8), {font: "20px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fill:this.parent.mode == "Dark"?"#ffffff":"#8d8e8f", wordWrap:true,wordWrapWidth: 420,align:"center"},0.5, 0.5);
        if(Define.LANG == 0)
        {
            grayText.addColor(this.parent.mode == "Dark"?"#6c7278":"#b0b0b0", 14);
        }
        else
        {
            grayText.addColor(this.parent.mode == "Dark"?"#6c7278":"#b0b0b0", 24);
        }
        for(var i=0;i<5;i++){
            var sprName = 'Game_Box_A_0.png';
            if(i == 0)
            {
                sprName = "Game_Box_C_"+ this.parent.mode+"_0.png";
            }

            var sprBox_1 = MG.AddSprite(this.grpPanel, MG.iCSX-558+(i*99), Define.LANG == Define.tbLang[1]?-80:-90,'atlasImage',sprName, undefined, 1, 0.5, 0.5);
            sprBox_1.tint = (i == 0)?0xffffff:0x6c7278;
            sprBox_1.scale.setTo(0.85);
            MG.AddText(this.grpPanel, MG.iCSX-558+(i*99), Define.LANG == Define.tbLang[1]?-75:-85, strWord_1[i], {font: "48px "+Define.fontStyle, fill: "#FFFFFF", fontWeight:'bold'});

            sprName = 'Game_Box_A_0.png';

            var sprBox_2 = MG.AddSprite(this.grpPanel, MG.iCSX-558+(i*99), Define.LANG == Define.tbLang[1]?130:125,'atlasImage',sprName, undefined, 1, 0.5, 0.5);
            sprBox_2.tint = (i == 1)?0xffc53b:0x6c7278;
            sprBox_2.scale.setTo(0.85);
            MG.AddText(this.grpPanel, MG.iCSX-558+(i*99), Define.LANG == Define.tbLang[1]?135:130, strWord_2[i], {font: "48px "+Define.fontStyle, fill: "#FFFFFF", fontWeight:'bold'});


            var sprBox_3 = MG.AddSprite(this.grpPanel, MG.iCSX-558+(i*99), Define.LANG == Define.tbLang[1]?350:340,'atlasImage',sprName, undefined, 1, 0.5, 0.5);
            sprBox_3.tint = 0x6c7278;
            sprBox_3.scale.setTo(0.85);
            MG.AddText(this.grpPanel, MG.iCSX-558+(i*99), Define.LANG == Define.tbLang[1]?355:345, strWord_3[i], {font: "48px "+Define.fontStyle, fill: "#FFFFFF", fontWeight:'bold'});
        }

    },
    refresh : function ()
    {
    },
    update: function () {
    },
    destroy : function () {
        this.grpPanel.removeAll();
    },
};
window[''] = window[''] || {};
window[''].TutorialPopup = TutorialPopup;

OptionPopup = function (game) {
    this.game = game;
    this.grpPanel = null;
    this.parent = null;

};
OptionPopup.prototype = {
    preload: function () {
    },
    create: function () {
    },
    init : function () {
        this.grpPanel = this.game.add.group();
        this.grpFrame = this.game.add.group();
    },
    setOption : function (parent, cb_close)
    {
        this.grpPanel.x = MG.iCSX;
        this.grpPanel.y = MG.iCSY;
        this.parent = parent;
        this.textColor = this.parent.mode == "Dark"?"#ffffff":"#8d8e8f";

        this.backAlpha = MG.AddSpriteNine(this.grpPanel,0, 0,'atlasImage','white.png', this.game.width,this.game.height, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        this.backAlpha.alpha = 0.9;
        this.backAlpha.tint = this.parent.mode == "Dark"?0x191d22:0xb1b1b1;
        this.backAlpha.inputEnabled = true;

        this.sprFrame = MG.AddSpriteNine(this.grpFrame,0, 0,'atlasImage','Pop_Frame_'+this.parent.mode+'.png', 493,1001, {top: 124, bottom:  91, left: 76, right: 75},0.5,0.5);
        this.grpPanel.addChild(this.grpFrame);

        this.sprExit = MG.AddSprite(this.grpPanel, 175, -424,'atlasImage','Pop_Exit_'+this.parent.mode+'.png', undefined, 1, 0.5, 0.5);
        this.textTitle = MG.AddText(this.grpPanel,0,-424 , "SETTING", {font: "42px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fontWeight:'bold',fill:this.textColor });

        this.btnClose = MG.AddSpriteNine(this.grpPanel, 170, -428,'atlasImage','white.png', 60,60, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        this.btnClose.alpha = 0.01;
        this.btnClose.tint = 0x00000000;
        this.btnClose.inputEnabled = true;

        this.btnClose.events.onInputUp.add(function(){
            cb_close();
        }.bind(this));


        this.iconBGTint = this.parent.mode == "Dark"?0x1e2328:0xd0d1d2;
        this.iconTint = this.parent.mode == "Dark"?0x5d6f80:0x7e8291;


        this.textTheme =MG.AddText(this.grpPanel,0,-270 , MG.getString(22), {font: "32px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fontWeight:'bold',fill:this.textColor });
        this.btnTheme = MG.AddSprite(this.grpPanel, 0, -200,'atlasImage',"Settings_Icon_FrameB.png", undefined, 1, 0.5, 0.5);
        this.btnTheme.tint = this.iconBGTint;
        this.iconTheme = MG.AddSprite(this.grpPanel, this.parent.mode =="Dark"?44:-44, -200,'atlasImage',"Settings_Icon_FrameA.png", undefined, 1, 0.5, 0.5);
        this.iconTheme.tint = this.iconTint;
        this.sprIconTheme = MG.AddSprite(this.grpPanel, this.parent.mode =="Dark"?44:-44, -200,'atlasImage','Settings_Icon_'+this.parent.mode+'.png', undefined, 1, 0.5, 0.5);
        this.btnTheme.inputEnabled = true;
        this.btnTheme.events.onInputUp.add(function(){

            this.parent.mode = this.parent.mode =="Dark"?"Light":"Dark";
            this.sprIconTheme.loadTexture('atlasImage','Settings_Icon_'+this.parent.mode+'.png');
            this.iconTheme.x = this.parent.mode =="Dark"?44:-44;
            this.sprIconTheme.x =this.parent.mode =="Dark"?44:-44;

            this.changeMode();
            this.parent.setModeColor();
            kData.theme = (this.parent.mode == "Dark")?1:0;
            MG.NM.LocalSave();

        }.bind(this));

        var _offy = -5000;
        this.textMusic = MG.AddText(this.grpPanel,0,-90+_offy, MG.getString(23), {font: "32px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fontWeight:'bold',fill:this.textColor });
        this.btnMusic = MG.AddSprite(this.grpPanel, 0, -20+_offy,'atlasImage',"Settings_Icon_FrameB.png", undefined, 1, 0.5, 0.5);
        this.btnMusic.tint = this.iconBGTint;
        this.iconMusic = MG.AddSprite(this.grpPanel, kData.isBGM ==false?44:-44, -20+_offy,'atlasImage',"Settings_Icon_FrameA.png", undefined, 1, 0.5, 0.5);
        this.iconMusic.tint = this.iconTint;
        this.sprIconMusic = MG.AddSprite(this.grpPanel, kData.isBGM ==false?44:-44, -20+_offy,'atlasImage',"Settings_Icon_Music_On.png", undefined, 1, 0.5, 0.5);
        this.btnMusic.inputEnabled = true;
        this.btnMusic.events.onInputUp.add(function(){
            //return;//게임스낵 사운드버튼 잠기기
            kData.isBGM = !kData.isBGM;
            if(kData.isBGM== false)
            {
                MG.StopBgm(MG.curBgm);
            }
            else
            {
                MG.PlayBgm(MG.curBgm);
            }

            this.iconMusic.x = kData.isBGM ==false?44:-44;
            this.sprIconMusic.x = kData.isBGM ==false?44:-44;
            this.sprIconMusic.loadTexture('atlasImage','Settings_Icon_Music_'+(kData.isBGM==true?'On':'Off')+'.png');
            MG.NM.LocalSave();
        }.bind(this));


        this.textSound = MG.AddText(this.grpPanel,0, 90+_offy , MG.getString(24), {font: "32px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fontWeight:'bold',fill:this.textColor });
        this.btnSound = MG.AddSprite(this.grpPanel, 0, 160+_offy,'atlasImage',"Settings_Icon_FrameB.png", undefined, 1, 0.5, 0.5);
        this.btnSound.tint = this.iconBGTint;
        this.iconSound = MG.AddSprite(this.grpPanel, kData.isSfx ==false?44:-44, 160+_offy,'atlasImage',"Settings_Icon_FrameA.png", undefined, 1, 0.5, 0.5);
        this.iconSound.tint = this.iconTint;
        this.sprIconSound = MG.AddSprite(this.grpPanel, kData.isSfx ==false?44:-44, 160+_offy,'atlasImage',"Settings_Icon_Sound_On.png", undefined, 1, 0.5, 0.5);
        this.btnSound.inputEnabled = true;
        this.btnSound.events.onInputUp.add(function(){
            //return;//게임스낵 사운드버튼 잠기기
            kData.isSfx = !kData.isSfx;
            this.iconSound.x = kData.isSfx ==false?44:-44;
            this.sprIconSound.x = kData.isSfx ==false?44:-44;
            this.sprIconSound.loadTexture('atlasImage','Settings_Icon_Music_'+(kData.isSfx==true?'On':'Off')+'.png');
            MG.NM.LocalSave();
        }.bind(this));


        this.btnExit = MG.AddSpriteNine(this.grpPanel, 0, 315+_offy,'atlasImage','Settings_Btn_Exit_Frame.png', 276,110, {top: 110, bottom: 0, left: 54, right: 54},0.5,0.5);
        MG.AddText(this.grpPanel,0, 315+_offy , MG.getString(25), {font: "36px "+(Define.LANG == 0 ?Define.fontStyle_Ko:Define.fontStyle), fontWeight:'bold',fill:"#ffffff" });
        this.btnExit.inputEnabled = true;
        this.btnExit.events.onInputUp.add(function(){
            MSSDK.gameExit();
        }.bind(this));

        //this.btnExit.visible = false;//이동 이동 해버리므로, 주석처리

        MG.AddText(this.grpPanel, 0, 440, Define.txtVer, {font:"20px "+Define.fontStyle, fill: "#ffffff", align:"center", stroke:"#000000", strokeThickness:4}, 0.5, 0.5);


        this.sprIconMusic.loadTexture('atlasImage', 'Settings_Icon_Music_' + (kData.isBGM == true ? 'On' : 'Off') + '.png');//게임스낵용 추가
        this.sprIconSound.loadTexture('atlasImage', 'Settings_Icon_Music_' + (kData.isSfx == true ? 'On' : 'Off') + '.png');//게임스낵용 추가

    },
    changeMode : function ()
    {
        this.grpFrame.removeAll();

        this.backAlpha.tint = this.parent.mode == "Dark"?0x191d22:0xb1b1b1;
        this.textColor = this.parent.mode == "Dark"?"#ffffff":"#8d8e8f";
        this.iconBGTint = this.parent.mode == "Dark"?0x1e2328:0xd0d1d2;
        this.iconTint = this.parent.mode == "Dark"?0x5d6f80:0x7e8291;

        //this.sprFrame.loadTexture('atlasImage','Pop_Frame_'+this.parent.mode+'.png');
        this.sprFrame = MG.AddSpriteNine(this.grpFrame,0, 0,'atlasImage','Pop_Frame_'+this.parent.mode+'.png', 493,1001, {top: 124, bottom:  91, left: 76, right: 75},0.5,0.5);

        this.textTitle.addColor(this.textColor,  0, this.textTitle.text.length);
        this.textTheme.addColor(this.textColor,  0,this.textTheme.text.length);
        this.textSound.addColor(this.textColor,  0,this.textSound.text.length);
        this.textMusic.addColor(this.textColor,  0,this.textMusic.text.length);

        this.btnTheme.tint = this.iconBGTint;
        this.iconTheme.tint = this.iconTint;

        this.btnMusic.tint = this.iconBGTint;
        this.iconMusic.tint = this.iconTint;

        this.btnSound.tint = this.iconBGTint;
        this.iconSound.tint = this.iconTint;

        this.sprExit.loadTexture('atlasImage','Pop_Exit_'+this.parent.mode+'.png');
    },
    refresh : function ()
    {
    },
    update: function () {
    },
    destroy : function () {
        this.grpFrame.removeAll();
        this.grpPanel.removeAll();
    },
};
window[''] = window[''] || {};
window[''].OptionPopup = OptionPopup;

ContinueScene = function (game) {
    this.game = game;
    this.grpPanel = null;
    this.parent = null;
    this.flowtime = 0;
    this.cb_close = null;
};
ContinueScene.prototype = {
    preload: function () {
    },
    create: function () {
    },
    init : function () {
        this.grpPanel = this.game.add.group();
    },
    showContinue : function (parent, cb_close)
    {
        MG.game.state.states['game'].bk_result = true;//행 추가 확인용

        this.cb_close = cb_close;
        this.parent = parent;
        this.bg = MG.AddSpriteNine(this.grpPanel,MG.iCSX, MG.iCSY,'atlasImage','white.png', this.game.width,this.game.height, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        this.bg.tint = this.parent.mode == "Dark"?0x242a32:0xf2f2f3;
        this.bg.inputEnabled = true;
        this.bg_Top = MG.AddSprite(this.grpPanel,0, 0,'atlasImage','Continue_BG.png', undefined, 1, 0, 0);
        this.bg_Top.scale.setTo(2);
        this.bg_Top.tint = this.parent.mode == "Dark"?0x20262d:0xe6e7e8;

        this.bg_Bottom = MG.AddSprite(this.grpPanel,MG.iCSX, MG.iCSY+400,'atlasImage','Continue_BG.png', undefined, 1, 0.5, 0.5);
        this.bg_Bottom.scale.setTo(2);
        this.bg_Bottom.angle = 180;
        this.bg_Bottom.tint = this.parent.mode == "Dark"?0x20262d:0xe6e7e8;


        this.grpGauge = this.game.add.group();
        this.grpGauge.x = MG.iCSX;
        this.grpGauge.y = MG.iCSY- 260 -10;
        this.gaugeBG = MG.AddSprite(this.grpGauge,0, 0,'atlasImage','Continue_Gauge_BG.png', undefined, 1, 0.5, 0.5);
        this.gaugeBG.scale.setTo(2);
        this.gaugeBG.alpha = 0.05;
        this.gaugeBG.tint = this.parent.mode == "Dark"?0xffffff:0x000000;

        this.gaugeNumberBack = MG.AddSprite(this.grpGauge,0, 0,'atlasImage','Continue_Number_Back.png', undefined, 1, 0.5, 0.5);
        this.gaugeNumberBack.alpha = this.parent.mode == "Dark"?0.2:1;
        this.gaugeNumberBack.scale.setTo(2);
        this.gaugeNumberBack.tint = this.parent.mode == "Dark"?0x16aaff:0xffffff;

        this.gauge = MG.AddSprite(this.grpGauge,0, 0,'atlasImage','Continue_Gauge.png', undefined, 1, 0.5, 0.5);
        this.graphicsGauge = this.game.add.graphics(0, 0);

        this.timeGauge = 0;
        this.graphicsGauge.clear();
        this.graphicsGauge.beginFill(0xffffff);
        this.graphicsGauge.arc(0, 0, 180, this.game.math.degToRad(-90), this.game.math.degToRad(-90 +this.timeGauge), true, 128);//128
        this.graphicsGauge.endFill();
        this.gauge.mask = this.graphicsGauge;
        this.grpGauge.addChild(this.graphicsGauge);

        this.textNumber = MG.AddText(this.grpGauge,0, 0, "0", {font: "148px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#909090"});


        this.btn_Try = MG.AddSpriteNine(this.grpPanel, MG.iCSX, 892,'atlasImage','Continue_Btn_Try.png', 544,142, {top: 142, bottom:  0, left: 68, right: 67},0.5,0.5);
        this.btn_Try.inputEnabled = true;
        this.btn_Try.events.onInputDown.add(function(){

        }.bind(this));
        this.btn_Try.events.onInputUp.add(function(a, b, c){
            console.log('btn_Try.events.onInputUp, "ONE MORE TRY"', a,b,c);
            MG.game.paused = true;
            ShowAD("reward", "continue", function () {
                MG.game.paused = false;
                console.log('scb btn_Try.events.onInputUp, "ONE MORE TRY"');
                this.bk_result = true;
                this.cb_close(true);
            }.bind(this), function () {
                console.log('fcb btn_Try.events.onInputUp, "ONE MORE TRY"');
                MG.game.paused = false;

                // this.bk_result = true;//지울것
                // this.cb_close(true);//지울것
            }.bind(this));

        }.bind(this));
        this.text_Try = MG.AddText(this.grpPanel,MG.iCSX-34, 892 , "ONE MORE TRY", {font: "46px "+Define.fontStyle, fontWeight:'bold',fill: "#ffffff"}, 0.5,0.5);
        MG.AddSprite(this.grpPanel, MG.iCSX+200, 890,'atlasImage','Continue_Icon_Ad.png', undefined, 1, 0.5, 0.5);

        this.btn_No = MG.AddSpriteNine(this.grpPanel, MG.iCSX, 1024,'atlasImage','Continue_Btn_No.png', 374,114, {top: 114, bottom:  0, left: 56, right: 57},0.5,0.5);
        this.text_No = MG.AddText(this.grpPanel,MG.iCSX, 1024 , "NO, THANKS", {font: "36px "+Define.fontStyle, fontWeight:'bold',fill: "#ffffff"});
        this.btn_No.events.onInputDown.add(function(){
        }.bind(this));
        this.btn_No.events.onInputUp.add(function(a, b, c){
            this.cb_close(false);
        }.bind(this));
        this.btn_No.inputEnabled = true;

        this.stateWords();


    },
    stateWords : function ()
    {


        for(var i=0; i < 5; i++)
        {

            var textWord = this.parent.gamePanel.checkStrike(i);
            console.log(textWord);
            var sprName = "Game_Box_A_0.png";
            var sprTint =  this.parent.mode == "Dark"?0x6c7278:0x8d8e8f;
            if(textWord != "")
            {
                sprName = "Game_Box_C_"+this.parent.mode+"_0.png";
                sprTint =  0xffffff;
            }

            var sprWords = MG.AddSprite(this.grpPanel, 126+(i*117), 685,'atlasImage',sprName, undefined, 1, 0.5, 0.5);
            sprWords.tint = sprTint;

            MG.AddText(this.grpPanel, 126+(i*117), 690, textWord, {font: "58px "+Define.fontStyle, fill: "#FFFFFF", fontWeight:'bold'});



        }

    },

    refresh : function ()
    {
    },
    update: function () {
        this.graphicsGauge.clear();
        this.graphicsGauge.beginFill(0xa000f3);

        this.graphicsGauge.arc(0, 0, 180, this.game.math.degToRad(-90), this.game.math.degToRad(-90 + this.timeGauge ), true, 128);
        this.graphicsGauge.endFill();

        this.flowtime += MG.deltaTime;
        this.timeGauge = 360 * (this.flowtime/10);
        if(this.textNumber)
        {
            this.textNumber.setText(10 - Math.floor(this.flowtime).toFixed(0));
        }
        if(this.flowtime >= 10)
        {
            this.flowtime = 0;
            this.timeGauge = 0;
            this.cb_close(false);

        }

    },
    destroy : function () {
        this.grpPanel.removeAll();
        this.grpGauge.removeAll();
    },
};
window[''] = window[''] || {};
window[''].ContinueScene = ContinueScene;
ResultScene = function (game) {
    this.game = game;
    this.grpPanel = null;
    this.parent = null;
    this.cb_close = null;
};
ResultScene.prototype = {
    preload: function () {
    },
    create: function () {
    },
    init : function () {
        this.grpPanel = this.game.add.group();
    },
    showResult : function (parent, result, cb_close)
    {
        this.cb_close = cb_close;
        this.parent = parent;
        this.bg = MG.AddSpriteNine(this.grpPanel,MG.iCSX, MG.iCSY,'atlasImage','white.png', this.game.width,this.game.height, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
        this.bg.tint = this.parent.mode == "Dark"?0x242a32:0xf2f2f3;
        this.bg.inputEnabled = true;

        this.bg_Top = MG.AddSprite(this.grpPanel,0, 0,'atlasImage','Continue_BG.png', undefined, 1, 0, 0);
        this.bg_Top.scale.setTo(2);
        this.bg_Top.tint = this.parent.mode == "Dark"?0x20262d:0xe6e7e8;

        var textTitle = result==true ? "SUCCESS":"FAILED";
        this.spineResult = null;
        MG.AddText(this.grpPanel,MG.iCSX, 115, textTitle, {font: "82px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
        var sprBox = [];
        var textBox = [];
        var suceessY = result==false ? 0: 60;
        if(Define.LANG == Define.tbLang[0])
        {
            suceessY = 60;
        }
        for(var i=0; i < 5; i++)
        {
            var textWord = this.parent.gamePanel.checkStrike(i);
            var sprName = "Result_TextBox_"+this.parent.mode+"_A.png";
            if(textWord != "")
            {
                sprName = "Result_TextBox_"+this.parent.mode+"_B.png";
            }
            sprBox[i] = MG.AddSprite(this.grpPanel, 180+(i*90), 211+suceessY,'atlasImage',sprName, undefined, 1, 0.5, 0.5);
            textBox[i] = MG.AddText(this.grpPanel, 180+(i*90), 216+suceessY, textWord, {font: "36px "+Define.fontStyle, fill: "#FFFFFF", fontWeight:'bold'});
        }

        if(result == false)
        {
            this.btn_AD = MG.AddSpriteNine(this.grpPanel, MG.iCSX, 315,'atlasImage','Result_Btn_Show.png', 380,80, {top: 80, bottom:  0, left: 42, right:43},0.5,0.5);
            this.text_AD = MG.AddText(this.grpPanel,MG.iCSX - 28, 317 , "Show me the word", {font: "26px "+Define.fontStyle, fontWeight:'bold',fill: "#ffffff"});
            this.sprIcon = MG.AddSprite(this.grpPanel, MG.iCSX+130, 315,'atlasImage','Result_Icon_Ad.png', undefined, 1, 0.5, 0.5);
            this.btn_AD.events.onInputDown.add(function(){


            }.bind(this));
            this.btn_AD.events.onInputUp.add(function(a, b, c){
                console.log('btn_AD.events.onInputUp, "Show me the word"',a,b,c);
                MG.game.paused = true;
                //ShowAD("basic", "answer", function () {
                ShowAD("reward", "answer", function () {
                    console.log('scb btn_AD.events.onInputUp, "Show me the word"',a,b,c);
                    MG.game.paused = false;
                    //---답보여주기---
                    for(var i=0; i < 5; i++)
                    {
                        sprBox[i].loadTexture ( 'atlasImage',"Result_TextBox_"+this.parent.mode+"_B.png" );
                        textBox[i].setText(kData.correctText[i].toUpperCase());
                    }
                    this.btn_AD.visible = false;
                    this.text_AD.visible = false;
                    this.sprIcon.visible = false;
                    // "➥ " ➪
                    // if(Define.LANG == Define.tbLang[0])
                    // {
                    //     this.textAnswer = MG.AddText(this.grpPanel,MG.iCSX - 28, 315 , "➪ "+this.parent.wordData_Ko[kData.curIndex], {font: "36px "+Define.fontStyle_Ko, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
                    // }
                    //this.textAnswer = MG.AddText(this.grpPanel,MG.iCSX - 28, 315 , "➪ "+this.parent.wordData_Ko[165]+"바비큐를 하다", {font: "32px Arial", fontWeight:'bold',fill: "#ffffff"});
                    //---답보여주기---
                }.bind(this), function () {
                    console.log('fcb btn_AD.events.onInputUp, "Show me the word"',a,b,c);
                    //a.visible = false; //버튼숨김 할필요없어서 주석처리
                    MG.game.paused = false;
                }.bind(this));

                // //---답보여주기---//위로 이동함
                // for(var i=0; i < 5; i++)
                // {
                //     sprBox[i].loadTexture ( 'atlasImage',"Result_TextBox_"+this.parent.mode+"_B.png" );
                //     textBox[i].setText(kData.correctText[i].toUpperCase());
                // }
                // this.btn_AD.visible = false;
                // this.text_AD.visible = false;
                // this.sprIcon.visible = false;
                // // "➥ " ➪
                // // if(Define.LANG == Define.tbLang[0])
                // // {
                // //     this.textAnswer = MG.AddText(this.grpPanel,MG.iCSX - 28, 315 , "➪ "+this.parent.wordData_Ko[kData.curIndex], {font: "36px "+Define.fontStyle_Ko, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
                // // }
                // //this.textAnswer = MG.AddText(this.grpPanel,MG.iCSX - 28, 315 , "➪ "+this.parent.wordData_Ko[165]+"바비큐를 하다", {font: "32px Arial", fontWeight:'bold',fill: "#ffffff"});
                // //---답보여주기---

            }.bind(this));
            this.btn_AD.inputEnabled = true;
        }
        else
        {

            // if(Define.LANG == Define.tbLang[0])
            // {
            //     this.textAnswer = MG.AddText(this.grpPanel,MG.iCSX - 28, 315 , "➪ "+this.parent.wordData_Ko[kData.curIndex], {font: "36px "+Define.fontStyle_Ko, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
            // }

            this.spineResult = this.game.add.spine(MG.iCSX, MG.iCSY, 'spineResult');
            this.spineResult.setAnimationByName ( 0, "In", false);
            this.spineResult.state.onComplete = function () {

                this.spineResult.setAnimationByName ( 1, "Idle", true);

                // spineResult.state.clearTracks();
                // spineResult.parent.removeChild( spineResult);
                // spineResult = null;

            }.bind(this);
            MG.PlayAudio('06_SE_Clear');
        }

        this.statisticsUI(result);

        this.btn_Next = MG.AddSpriteNine(this.grpPanel, MG.iCSX, 1148,'atlasImage','Result_Btn_Next_'+this.parent.mode+'.png', 596,132, {top: 132, bottom:  0, left: 70, right: 69},0.5,0.5);
        this.text_Next = MG.AddText(this.grpPanel,MG.iCSX, 1148 , "NEXT WORD", {font: "54px "+Define.fontStyle, fontWeight:'bold',fill: "#ffffff"});
        this.btn_Next.events.onInputDown.add(function(){

        }.bind(this));
        this.btn_Next.events.onInputUp.add(function(a, b, c){
            this.cb_close();
        }.bind(this));
        this.btn_Next.inputEnabled = true;

        if((++Define.iADCnt)%2 == 0 || this.parent.playTime >= 120)
        {

            ShowAD("basic",'result', function () {

            },function () {

            });
        }



    },
    statisticsUI : function (result)
    {
        var frameY = 718;
        MG.AddSpriteNine(this.grpPanel,MG.iCSX, frameY,'atlasImage','Result_Frame_'+this.parent.mode+'.png', 580, 686, {top: 58, bottom:  452, left: 85, right: 86},0.5,0.5);
        MG.AddText(this.grpPanel,MG.iCSX, frameY-280 , "STATISTICS", {font: "46px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});

        MG.AddText(this.grpPanel,MG.iCSX -190, frameY-160 , "PLAYED", {font: "22px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
        MG.AddText(this.grpPanel,MG.iCSX -70, frameY-160 , "WON,%", {font: "22px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
        var textWinning = MG.AddText(this.grpPanel,MG.iCSX +70, frameY-160+11 , "WINNING\nSTREAK", {font: "22px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f", align :"center", maxLines:2, boundsAlignV:"top"});
        textWinning.lineSpacing = -10;
        var textMax = MG.AddText(this.grpPanel,MG.iCSX +190, frameY-160+11, "MAX\nSTREAK", {font: "22px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f", align :"center",maxLines:2, boundsAlignV:"top"});
        textMax.lineSpacing = -10;

        var maxStrikeCnt = 1;
        var totalStrikeCnt = 0;
        for(var i=0;i<7;i++)
        {
            if(kData.strikeCnt[i] >= maxStrikeCnt)
            {
                maxStrikeCnt = kData.strikeCnt[i];
            }
            totalStrikeCnt += kData.strikeCnt[i];
        }
        var value = (totalStrikeCnt/kData.played)*100;


        MG.AddText(this.grpPanel,MG.iCSX -190, frameY-204 , kData.played, {font: "42px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
        MG.AddText(this.grpPanel,MG.iCSX -70, frameY-204 , value.toFixed(0)+"%", {font: "42px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
        MG.AddText(this.grpPanel,MG.iCSX +70, frameY-204 , kData.winning_streak, {font: "42px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});
        MG.AddText(this.grpPanel,MG.iCSX +190, frameY-204 , kData.max_streak, {font: "42px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f"});

        MG.AddText(this.grpPanel,MG.iCSX -176, frameY -62 , "GUESSES", {font: "34px "+Define.fontStyle, fontWeight:'bold',fill: this.parent.mode == "Dark"?"#ffffff":"#8d8e8f",align :"left"});

        this.sprGaugeTip = [];
        this.sprGauge = [];

        //kData.strikeCnt[0];




        for(var i=0;i<7;i++)
        {
            var gauge = 450 * (kData.strikeCnt[i]/maxStrikeCnt);
            var tint = 0x4b5f6d;

            if(result == true & this.parent.row == i)
            {
                tint = 0x45d39a;
            }

            this.sprGaugeTip[i] = MG.AddSprite(this.grpPanel, 124+gauge, 705+(i*50),'atlasImage','Result_Gauge_Tip.png', undefined, 1, 0, 0.5);
            this.sprGaugeTip[i].tint = tint;
            this.sprGauge[i] = MG.AddSpriteNine(this.grpPanel, 124, 705+(i*50),'atlasImage','Result_Gauge.png', 24+gauge, 44, {top: 44, bottom:  0, left: 11, right: 12}, 0, 0.5);
            MG.AddText(this.grpPanel,142+gauge, 705+(i*50)+3 , kData.strikeCnt[i], {font: "24px "+Define.fontStyle, fontWeight:'bold',fill: "#ffffff"});
            if(kData.strikeCnt[i] > 0)
            {

            }

            this.sprGauge[i].tint = tint;
        }


    },
    refresh : function ()
    {
    },
    update: function () {
    },
    destroy : function () {
        if(this.spineResult)
        {
            this.spineResult.state.clearTracks();
            this.spineResult.parent.removeChild( this.spineResult);
            this.spineResult = null;
        }


        this.grpPanel.removeAll();
    },
};
window[''] = window[''] || {};
window[''].ResultScene = ResultScene;


ResourcesManager = function (game) {
    this.game = game;

    this.MoviLoad ={
        'image': [
            // ['pop.png', 'assets/atlas/load/pop.png?v='+Define.IMG_VER],
            // ['movi.png', 'assets/atlas/load/movi.png?v='+Define.IMG_VER],
            //['logo_movisoft_0.png', 'assets/atlas/load/logo_movisoft_0.png?v='+Define.IMG_VER],
        ]
    };

    var lang = Define.LANG == Define.tbLang[0] ?'ko':'en';
    this.Preloader = {
        'image': [
            ['all.png', 'assets/atlas/load/all.png?v='+Define.IMG_VER],
        ],
        'json': [
            ["json_Word", 'assets/json/word.json?v='+Define.JSON_VER],
            ["json_Word_Kr", 'assets/json/word_kr.json?v='+Define.JSON_VER],
        ],
        'atlas': [
            ['atlasImage', 'assets/atlas/atlasImage.png?v='+Define.IMG_VER, 'assets/atlas/atlasImage.json?v='+Define.IMG_VER, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY],
        ],
        'spine': [
            ['spineBox_Dark_0', 'assets/spine/Box_Dark_0.json?v='+Define.SPINE_VER],
            ['spineBox_Dark_1', 'assets/spine/Box_Dark_1.json?v='+Define.SPINE_VER],
            ['spineBox_Dark_2', 'assets/spine/Box_Dark_2.json?v='+Define.SPINE_VER],
            ['spineBox_Dark_3', 'assets/spine/Box_Dark_3.json?v='+Define.SPINE_VER],
            ['spineBox_Dark_4', 'assets/spine/Box_Dark_4.json?v='+Define.SPINE_VER],
            ['spineBox_Light_0', 'assets/spine/Box_Light_0.json?v='+Define.SPINE_VER],
            ['spineBox_Light_1', 'assets/spine/Box_Light_1.json?v='+Define.SPINE_VER],
            ['spineBox_Light_2', 'assets/spine/Box_Light_2.json?v='+Define.SPINE_VER],
            ['spineBox_Light_3', 'assets/spine/Box_Light_3.json?v='+Define.SPINE_VER],
            ['spineBox_Light_4', 'assets/spine/Box_Light_4.json?v='+Define.SPINE_VER],
            ['spineTitle', 'assets/spine/Title.json?v='+Define.SPINE_VER],
            ['spineResult', 'assets/spine/Result.json?v='+Define.SPINE_VER],
        ],
    };

};
ResourcesManager.prototype = {
    preload: function () {
    },
    create: function () {
    },
    update: function () {
    },
    loader: function (res) {
        var pack = res;
        for(var method in pack) {
            pack[method].forEach(function(args) {
                var loader = this.game.load[method];
                loader && loader.apply(this.game.load, args);
            }, this);
        }
    },
    Preloader : function () {

    },
};



window[''] = window[''] || {};
window[''].ResourcesManager = ResourcesManager;





var kData = new Data();
function Data(){
	this.iVer = Define.SAVE_VER;
	this.isBGM = true;
	this.isSfx = true;
	this.dateTime = new Date();
	this.gameData = null;
	this.TutoState = 0;

	this.theme = 0;
	this.played = 0;
	this.won = 0;
	this.winning_streak = 0;
	this.max_streak = 0;

	this.strikeCnt = [];
	for(var i=0;i<7;i++)
	{
		this.strikeCnt[i] = 0;
	}

	this.sprWordTable = [];
	this.curRow = 0;
	this.curIndex = 0;
	this.correctText = "";
	for(var i=0;i<7;i++) {
		this.sprWordTable[i] = "";
	}
	this.continue = 0;
}

'use strict';
// var deltaTime = 0;
// function updateTick()
// {
// 	deltaTime = MG.game.time.elapsed * 0.001;
// }

// 게임 비활성화시 일시정지 제어
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}
function handleVisibilityChange() {
    if (!document[hidden]) {
        window.focus();
        if(MG)
		{
			MG.gamePause = false;
			MG.ResumeBgm();
			//MG.game.paused = false;
			console.log("resume");
		}
    }
    else
    {
        if(MG)
		{
			console.log("paused");
			//MG.game.paused = true;
			MG.gamePause = true;
			MG.PauseBgm();
		}
    }
}
document.addEventListener(visibilityChange, handleVisibilityChange, false);//success~~~~!!!!!

//윈도우창을 닫을때 이벤트.
window.addEventListener('blur', function() {
}, false);
window.addEventListener("focus", function(event)
{
}, false);




function MoviGame() {
	// arguments을 배열로 바꾼다.
	var args = Array.prototype.slice.call(arguments);
	// 마지막 인자는 콜백 함수
	var callback = args.pop();
	// 모듈은 배열로 전달될 수도있고 개별 인자로 전달 될 수도 있습니다.
	var  modules = (args[0] && typeof args[0] === "string") ? args : args[0];
	var i;

	// 함수가 생성자로 호출되도록 보장(new를 강제하지 않는 패턴)
	if (!(this instanceof MoviGame)) {
		return new MoviGame(modules, callback);
	}
	// "this객체에 모듈을 추가"
	// 모듈이 없거나 "*"(전부)이면 사용 가능한 모든 모듈을 사용한다는 의미입니다.
	if (!modules || modules === '*' || modules[0] === '*') {
		modules = [];
		for (i in MoviGame.Modules) {
			if (MoviGame.modules.hasOwnProperty(i)) {
				modules.push(i);
			}
		}
	}
	// 필요한 모듈들을 초기화
	var m_length = modules.length;
	for (i=0; i<m_length; i+=1) {
		MoviGame.modules[modules[i]](this);
	}
	// 콜백 함수 호출
	callback(this);
	//==================================================================================
	// 여기서 부터 변수선언..
	//==================================================================================
	this.game = null;
	this.resourcesManager = null;
//	this.networkManager = null;

	this.MGButton = null;
	this.rankGrade = 0;
	this._sound = null;
	this._bgm = null;
	this.gameSheetsData = null;
	this.grpLoad = null;
    this.iMSW = 720;
    this.iMSH = 1280;
    this.iCSX = this.iMSW/2;
    this.iCSY = this.iMSH/2;

    this.deltaTime = 0;

    this.GameManager = null;
	this.gamePause = false;
}

// 필요한 프로토타입 프로퍼티들을 추가
MoviGame.prototype = {
	name: $(document).find("title").text(),//

	getName: function () {
		return this.name;
	},
	getServiceString: function () {
		return 'HotShare';
	},
	Initialize : function(game){
		// 디바이스 구분.
		if (/Android/i.test(navigator.userAgent))
			Define.DEVICE = Enum.DEVICE_STATE.ANDROID;
		else if (/iPhone|iPad|iPod/i.test(navigator.userAgent))
			Define.DEVICE = Enum.DEVICE_STATE.IOS;
		else
			Define.DEVICE = Enum.DEVICE_STATE.PC;

		this.game = game;

		this.game.stage.disableVisibilityChange = true;  // 포커스 무시하고 시간이 흐름..

		this.resourcesManager = game.plugins.add(ResourcesManager);
		this.game.plugins.add(PhaserSpine.SpinePlugin);
		this.initScreenSize();
		this.NM = new NetworkManager();

        this.languageData = JSON.parse(MG_LanguageJson.replace(/\n/gi, '\\n'));

		//this.wordData = JSON.parse(MG_WordJson.replace(/\n/gi, '\\n'));


        //Define.GAME_CODE = this.getGameCode();


		// 프레임설정을 해줘야 120hz, 144hz모니터에서 제대로 작동하게 된다.
		this.game.time._desiredFps = 144;
		this.game.time.advancedTiming = true;
		this.LoaderList = [];

	},
	SamsungDataCheck:function (cloud_data, local_data) {
		var cTotal = (cloud_data.gameData.level);
		var lTotal = (local_data.gameData.level);

		if(cTotal >= lTotal){
			if(cTotal == lTotal){
				if(cloud_data.gameData.exp >= local_data.gameData.exp)
				{
					return cloud_data;
				}
				else
				{
					return local_data;
				}
			}
			return cloud_data;
		}
		return local_data;
	},
	initScreenSize: function(){
		var that = this;
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.pageAlignHorizontally = false;
		this.game.pageAlignVertically = false;
		this.game.scale.parentIsWindow = true;//지우니간 폭만 맞고 길이가 길어지는 화면이 됨
		window.addEventListener("resize", function() {
			that.reScreenSize();
		});

		this.game.scale.setShowAll();
		this.reScreenSize();

	},
	reScreenSize : function () {
		var per = (window.innerWidth*MG.iMSH) / (window.innerHeight*MG.iMSW);
		if(per >= 0.85 && per <= 1.15)
			this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		else
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


        if(window.innerWidth < window.innerHeight && /Android/i.test(navigator.userAgent))
        {
            var width = Math.min(window.innerWidth, window.outerWidth);
            var height = Math.min(window.innerHeight, window.outerHeight);
            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            var ratio_w = parseFloat(width / this.game.width);
            var ratio_h = parseFloat(height/ this.game.height);
            this.game.scale.setUserScale(ratio_w>1? 1: ratio_w, ratio_h);
        }

		this.game.scale.refresh();

        //아이폰 하단 메뉴가림때문에 게임 키보드 겹침 피하려고, 추가함
		if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
			var _scale = 1;
			var _off = 120;
			if (window.innerWidth > window.innerHeight) {
				_scale = 0.8;
				if(MG.game.state.states['game'].bk_result){
					_off = 320;
					_scale = 0.7;
				}
			}

			if (_GameManager && _GameManager.keyboardPanel && _GameManager.keyboardPanel.grpPanel) {
				_GameManager.keyboardPanel.grpPanel.scale.setTo(_scale, _scale);
				_GameManager.keyboardPanel.grpPanel.position.setTo(MG.iCSX * (1 - _scale), (_off * (1 - _scale)) + (MG.iCSY * (1 - _scale)));
			}
		}
		//아이폰 하단 메뉴가림때문에 게임 키보드 겹침 피하려고, 추가함
	},
	spriteLoading : function () {

		if(this.grpLoad != null)
		{
			this.destroyLoading();
		}

		this.grpLoad = this.game.add.group();

		this.grpLoad.x = this.game.width/2;
		this.grpLoad.y = this.game.height/2;

		//parent.addChild(this.grpLoad);
		//MG.PlayAudio('se_heart');

		this.grpLoad.backAlpha = MG.AddSpriteNine(this.grpLoad,0, 0,'atlasMenu','white.png', this.game.width,this.game.height, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
		this.grpLoad.backAlpha.alpha = 0.3;
		this.grpLoad.backAlpha.tint = 0x00000000;
		this.grpLoad.backAlpha.inputEnabled = true;

		this.grpLoad.loading = this.game.add.sprite(0, 0, 'atlasMenu','loading.png');
		this.grpLoad.loading.anchor.setTo(0.5, 0.5);
		this.grpLoad.addChild(this.grpLoad.loading);

		this.game.add.tween(this.grpLoad.loading).to( { angle: 360 }, 1000, Phaser.Easing.Linear.None, true).loop(true);
	},
	destroyLoading : function () {

		if(this.grpLoad != null)
		{
			this.grpLoad.backAlpha.destroy();
			this.grpLoad.loading.destroy();
			this.grpLoad.removeAll();
			this.grpLoad = null;
		}
	},
    getString : function (key) {
        if(Define.LANG == 0)
            return this.languageData[key.toString()].ko;
        else if(Define.LANG == 1)
            return this.languageData[key.toString()].en;
        else
            return this.languageData[key.toString()].en;

    },
	cacheImageLoad : function (key, path, cb, bg) {
		if(MG.game.cache.checkImageKey(key) == false){

			var loadData = {
				key : key,
				type : 'Image',
				path : path,
				err_cnt:0,
				cb : cb,
				error : bg,
			};

			this.cacheLoad(loadData.key, loadData.path, loadData.type, loadData.cb);
		}else {
			cb(key);
		}
	},
	cacheSpineLoad : function (key, path, cb) {

		if(MG.game.cache.checkJSONKey(key) == false){

			var loadData = {
				key : key,
				type : 'spine',
				path : path,
				err_cnt:0,
				cb : cb
			};
			this.cacheLoad(loadData.key, loadData.path, loadData.type, loadData.cb);
		}else {
			cb(key);
		}
	},
	cacheSoundLoad : function (key, path, cb) {
		if(this.game.cache.checkSoundKey(key) == false){
			var loadData = {
				key : key,
				type : 'sound',
				path : path,
				cb : cb
			};
			this.cacheLoad(loadData.key, loadData.path, loadData.type, loadData.cb);
		}else {
			cb(key);
		}
	},
	cacheLoad : function (key, path, type, cb) {
		var loader = new Phaser.Loader(this.game);
		switch (type){
			case 'sound':
				loader.audio(key, path);
				break;
			case 'spine':
				loader.spine(key, path);
				break;
			case 'Image':
				loader.image(key, path);
				break;
			default:
				loader.image(key, path);
				break;
		}

		this.isLoading = true;

		loader.onLoadComplete.add(function(){
			this.isLoading = false;
			loader.onLoadComplete.removeAll();
			loader.onFileError.removeAll();
			cb(key);
		}.bind(this), this);

		loader.onFileError.add(function(){
			loader.onLoadComplete.removeAll();
			loader.onFileError.removeAll();
			console.error("load error");
			cb(null);
		}.bind(this), this);
		loader.start();
	},
    getGameCode : function () {
	    var sIndex = window.location.pathname.indexOf("Movi_IQGame");
	    var strName = window.location.pathname.substring(sIndex);
	    var eindex =  strName.indexOf("/");
        var titleName = strName.substring(12, eindex);


        if(titleName == "" || titleName == "1")
        {
            return 143;
        }
        else
        {
            return  142+parseInt(titleName);
        }
    },
	updateTick : function () {
		if(MG.gamePause == false)this.deltaTime = this.game.time.elapsed * 0.001;
	}
};

MoviGame.modules = {
	utils : function (box) {
		box.Init = function() {
			console.log("  utils  ==");
		};
		box.GetSecondsToTimeString = function(s) {
			var min = Math.floor(s/60);
			var sec = Math.floor(s%60);
			var strMin = (min >= 10) ? min.toString():"0"+min;
			var strSec = (sec >= 10) ? sec.toString():"0"+sec;
			return (strMin+':' +strSec);
		};

		box.GetDateToTimeString = function(s) {
			var min = Math.floor(s/60);
			var sec = Math.floor(s%60);
			var strMin = (min >= 10) ? min.toString():"0"+min;
			var strSec = (sec >= 10) ? sec.toString():"0"+sec;
			return (strMin+':' +strSec);
		};

		box.AddSprite = function(parent, x, y, atlas, imgName, color, alpha, ax, ay, width, height) {
			var spr = this.game.add.sprite(x, y, atlas, imgName);
			if(color != undefined) spr.tint = color;
			if(alpha != undefined) spr.alpha = alpha;
			if(ax == undefined) 	spr.anchor.x = 0.5;
			else					spr.anchor.x = ax;
			if(ay == undefined) 	spr.anchor.y = 0.5;
			else					spr.anchor.y = ay;
			if(width != undefined)	spr.width = width;
			if(height != undefined)	spr.height = height;
			parent.addChild(spr);
			return spr;
		};
		box.AddSpriteNine = function(parent, x, y, atlas, imgName, w, h, style, ax, ay, color){
			var spr = new PhaserNineSlice.NineSlice(MG.game, x, y, atlas, imgName, w, h, style);
			if(ax == undefined) spr.anchor.x = 0.5;
			else				spr.anchor.x = ax;
			if(ay == undefined) spr.anchor.y = 0.5;
			else				spr.anchor.y = ay;
			if(color != undefined) spr.tint = color;
			parent.addChild(spr);
			return spr;
		};
		box.AddText = function(parent, x, y, txt, fontStyle, ax, ay) {
			var txt = MG.game.add.text(x, y, txt, fontStyle);
			if(ax == undefined) txt.anchor.x = 0.5;
			else 				txt.anchor.x = ax;
			if(ay == undefined)	txt.anchor.y = 0.5;
			else 				txt.anchor.y = ay;
			parent.addChild(txt);
			return txt;
		};

		box.textNumberCounting = function(text, cur_number, add_number, aniTime, nFrameCount, callback){
			var nFrameTime;

			if(nFrameCount === undefined)
				nFrameTime = 10;
			else
				nFrameTime = nFrameCount;

			var nAdd = 0;
			var isEnd = false;
			var nFrame = parseInt(aniTime/nFrameTime);
			var totalNum = cur_number + add_number;
			var increase_time;

			// text.setText(totalNum.toLocaleString());
			//
			// return;

			text.setText(MG.GetSecondsToTimeString(cur_number));

			increase_time = this.game.time.events.loop(10, function(){
				var val = parseInt(add_number / nFrame);

				nAdd += (val === 0 ? 1: val);
				if(nAdd+cur_number < totalNum)
				{
					text.setText((cur_number +nAdd).toLocaleString());
				}
				else {
					text.setText(totalNum.toLocaleString());
					this.game.time.events.remove(increase_time);
					if(callback !== undefined) callback();
				}

			}, this);
		};
        box.textNumberFloatCounting = function(text, cur_number, add_number, aniTime, nFrameCount, callback){
            var nFrameTime;

            if(nFrameCount === undefined)
                nFrameTime = 10;
            else
                nFrameTime = nFrameCount;

            var nAdd = 0;
            var isEnd = false;
            var nFrame = parseInt(aniTime/nFrameTime);
            var totalNum = cur_number + add_number;
            var increase_time;

            // text.setText(totalNum.toLocaleString());
            //
            // return;

            text.setText(MG.GetSecondsToTimeString(cur_number));

            increase_time = this.game.time.events.loop(10, function(){
                var val = parseFloat(add_number / nFrame);

                nAdd += (val === 0 ? 1: val);
                if(nAdd+cur_number < totalNum)
                {
                    text.setText((cur_number +nAdd).toFixed(2));
                }
                else {
                    text.setText(totalNum.toFixed(2));
                    this.game.time.events.remove(increase_time);
                    if(callback !== undefined) callback();
                }

            }, this);
        };

        // 0 (포함) and 1 (불포함) 난수를 반환
        box.getRandom = function() {
            return Math.random();
        }

        // min (포함) 과 max (불포함) 사이의 난수를 반환
        box.getRandomArbitrary = function(min, max) {
            return Math.random() * (max - min) + min;
        }

        // min (포함) 과 max (불포함) 사이의 임의 정수를 반환
        // Math.round() 를 사용하면 고르지 않은 분포를 얻게된다!
        box.getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // min (포함) 과 max (포함) 사이의 임의 정수를 반환
        // Math.round() 를 사용하면 고르지 않은 분포를 얻게된다!
        box.getRandomIntInclusive = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        box.weightedChoice = function(weights, isFloor) {
            var weightSum = 0;
            var _weights = [];
            var cnt =0;
            weights.forEach(function(w) {
                _weights[cnt] = w;
                weightSum += w;
                cnt++;
            }, this);
            var choice = 0;
            if(isFloor != undefined)
                choice = MG.getRandomArbitrary(0, weightSum);//MG.getRandomInt(0, weightSum);
            else
                choice = MG.getRandomInt(0, weightSum);//MG.getRandomInt(0, weightSum);

            var idx = Object.keys(weights).length - 1;
            while ((choice -= _weights[idx]) >= 0) {
                idx -= 1;
            }
            return idx+1;
        }
		box.googleSheetsToData = function(sheetData)
		{

			var dicData = sheetData.substring(6); // json: ==> 제거
			//onsole.log(dicData);
			//JSON.stringify(dicData);
			return JSON.parse(dicData);

		}
		box.loadGameSheetsData = function(sheet,google, callback)
		{
			var that = this;
			//this.gameSheetsData = [];

			if(google === false)
			{
				this.gameData = this.googleSheetsToData(Define.SHEET_LOCAL_STRING);
				if(callback !== undefined)
				{
					callback(null);
				}
				return;
			}


			var url = "https://spreadsheets.google.com/feeds/list/" +
					Define.GOOGLE_SPREADSHEET_ID + "/" +sheet+
					"/public/basic?alt=json";
			jQuery(function($){
				$.ajax({
					type: "GET",
					url: url,
					dataType:"jsonp"
				}).done(function ( response ) {


					var jsonString = JSON.stringify(response);
					var tbString = JSON.parse(jsonString);
					var strSheet = tbString.feed.entry[0].content.$t;

					that.gameSheetsData = that.googleSheetsToData(strSheet);
					if(callback !== undefined)
					{
						callback(response);
					}
					//console.log(that.gameSheetsData);
				}).fail(function () {
					that.gameSheetsData = that.googleSheetsToData(Define.SHEET_LOCAL_STRING);
					if(callback !== undefined)
					{
						callback(response);
					}
				});
			});
		};
		box.DrawRect = function (parent, x, y, w, h, color, alpha, input){
			var grp = MG.game.add.graphics(0, 0);
			grp.beginFill(color);
			grp.drawRect(x, y, w, h);
			grp.endFill();
			grp.alpha = alpha;
			if(input)
				grp.inputEnabled = input;
			parent.addChild(grp);

			return grp;
		};
		box.DrawRoundedRect = function (parent, x, y, w, h, r, color, alpha, input){
			var grp = MG.game.add.graphics(0, 0);
			grp.beginFill(color);
			grp.drawRoundedRect(x, y, w, h, r);
			grp.endFill();
			grp.alpha = alpha;
			if(input)
				grp.inputEnabled = input;
			parent.addChild(grp);

			return grp;
		};
		box.alert = function (title, comment, cb) {
			Swal.fire({
				title: title,
				width: 400,
				html: "<br>"+comment.replace(/\n/gi, '<br>')+"<br><br>",
				confirmButtonColor: '#b0c1eb',
				allowOutsideClick: false,
			}).then(function(result){
				if (result.value) {
					if(cb) cb();
				}
			});
		};
        /*box.gameExit = function () {
			var strExit = MSSDK.getParameterByName('lang') == "en" ? "Do you want to exit?" : "게임을 종료하시겠습니까?";
			MG.confirm("", strExit, "YES", "NO", function () {
				PopconGame.Sdk.exitGame();
			}, function () {
				history.pushState(null, document.title, location.href);
			});
        };*/
		box.confirm = function (title, comment, btnYes, btnNo, cb, fcb) {
			if (btnYes == undefined) btnYes = "YES";
			if (btnNo == undefined) btnNo = "NO";

			Swal.fire({
				title: title,
				width: 400,
				html: "<br>"+comment.replace(/\n/gi, '<br>')+"<br><br>",
				allowOutsideClick: false,
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: btnYes,
				cancelButtonText: btnNo
			}).then(function(result){
				if (result.value) {
					if(cb) cb();
				}else{
					if(fcb) fcb();
				}
			});
		};
		box.STR2BIN = function (str) {
			var compressData = str.split('').map(function(e) {
				return e.charCodeAt(0);
			});
			var inflate = new Zlib.Deflate(compressData);
			var output = inflate.compress();
			var binstr = Array.prototype.map.call(output, function (ch) {
				return String.fromCharCode(ch);
			}).join('');
			return btoa(binstr);
		};
		box.BIN2STR = function (binstr) {
			binstr = atob(binstr);
			var compressData = binstr.split('').map(function(e) {
				return e.charCodeAt(0);
			});
			var inflate = new Zlib.Inflate(compressData);
			var output = inflate.decompress();
			var str = Array.prototype.map.call(output, function (ch) {
				return String.fromCharCode(ch);
			}).join('');
			return str;
		};
		box.bigNumberFormatter = function (num) {

			//console.log("big = num "+num);
			if(num == null)
			{
				return;
			}
			//console.log(num.toString().length+"big = num "+num);
			if(num.toString().length >  60) return 0;

			if(num.toString() == "NaN") return 0;

			var digit = 3;
			var strNum = bigInt(Number(num).toFixed(0)).toString();
			var numLength = strNum.length;

			if(numLength <=  3 )
				return strNum;

			var unit = (numLength/digit)-1;
			var count = (numLength%digit) == 0 ? 3: (numLength%digit);
			if((numLength%digit) == 0)
				unit -=1;

			var strValue =  strNum.substring(0, count);
			strValue += '.';
			strValue += strNum.substring(count, count+1);
			if(unit >= 26)
			{
				strValue += String.fromCharCode(65+(unit/26)-1);
			}
			strValue += String.fromCharCode(65+unit%26);

			return strValue == '' ? '0': strValue;

		};
	},
	audio: function (box) {
		this.curSound = -1;

		box.Init = function() {

		};
		box.AudioInit = function() {

            if (/Android/i.test(navigator.userAgent))
            {
                this.audioFormat = '.ogg';
            }
            else
            {
                this.audioFormat = '.mp3';
            }
			this.game.input.onDown.addOnce(function() {
				if (this.isSfx) {
					try {
						this.game.sound.context.resume();
					} catch (e) {
					}
				}
			});
            if(this.isSfx === undefined)this.isSfx = true;
            if(this.isBGM === undefined)this.isBGM = true;

            this._sound = [];
            this._bgm = [];


		};

		box.AudioSwitch = function(on) {
			kData.isSfx = !on;
			kData.isBGM = !on;

			MG.NM.LocalSave();
		};
		box.PlayAudio = function(sound) {
			if(kData.isSfx)	{
				/*if(this._sound && this._sound[sound]) {
					if(this.curSound != -1 && this.curSound != undefined )
						this._sound[this.curSound].stop();

					this._sound[sound].play();
					this.curSound = sound;
				}*/

				if(this._sound[sound] == undefined || this._sound[sound] == null){
                    this.cacheSoundLoad(sound, 'assets/sound/'+sound+this.audioFormat, function () {

							this._sound[sound] = this.game.add.audio(sound).play();


                    }.bind(this));
				}else{
					this._sound[sound].stop();
					this._sound[sound].play();
				}


				try {
					this.game.sound.context.resume();
				} catch (e) {
				}
			}
		};
		box.StopAudio  = function(sound) {
			this._sound[sound].stop();
		};
        box.PlayBgm  = function(bgm, loop) {
            if(bgm == undefined){
                bgm = this.curBgm;
            }

            if(kData.isBGM) {
                this.StopBgm();
                if(this._bgm[bgm] == undefined || this._bgm[bgm] == null)
                {
                    this.cacheSoundLoad(bgm, 'assets/sound/'+bgm+this.audioFormat, function () {
                        this._bgm[bgm] = this.game.add.audio(bgm,1,true).play();
                        this._bgm[bgm].volume = 0.5;
                    }.bind(this));
                }
                else
                {
                    this._bgm[bgm].volume = 0.5;
                    this._bgm[bgm].play();
                }
                this.curBgm = bgm;
                // 아이폰 사운드 오프상태에서 홈버튼으로 나갔다가 돌아오면, 사운드(온/오프)해도 사운드가 안나오는 문제
                try {
                    this.game.sound.context.resume();
                } catch (e) {}
            }
        };
		box.BgmVolume = function (vol) {
            if(kData.isBGM)
			{
                this._bgm[this.curBgm].volume = vol;
			}

        };
        box.StopBgm  = function(bgm) {
            if(bgm == undefined && this.curBgm != null)
            {
                if(this._bgm[this.curBgm] != undefined)
                    this._bgm[this.curBgm].stop();
            }
            if(this._bgm == null)
                return;

            if(this._bgm[bgm] != undefined)
                this._bgm[bgm].stop();
        };

        box.PauseBgm  = function(bgm) {
        	if(this._bgm == null)return;
            if(bgm)this._bgm[bgm].pause();
        };
        box.ResumeBgm  = function(bgm) {
            if(this._bgm == null)return;
            if(bgm)this._bgm[bgm].resume();
        };
        box.FadeInBgm  = function(duration, cb) {
			if(this.curBgm == undefined) return;
            if(!kData.isSfx){
				this.game.time.events.add(200, function () {
					if(cb) cb(false);
				}.bind(this), this);
				return;
			}

            this._bgm[this.curBgm].fadeIn(duration, true);
			this.game.time.events.add(duration, function () {
				if(cb) cb(true);
			}.bind(this), this);

        };
        box.FadeOutBgm  = function(duration, cb) {
			if(this.curBgm == undefined) return;
            if(!kData.isSfx)
			{
				this.game.time.events.add(200, function () {
					if(cb) cb(false);
				}.bind(this), this);
				return;
			}


            this._bgm[this.curBgm].fadeOut(duration);
			this.game.time.events.add(duration, function () {
				if(cb) cb(true);
			}.bind(this), this);
            //setTimeout(function(){ if(cb) cb(); }.bind(this), duration);
        };

	}
};
window[''] = window[''] || {};
window[''].MoviGame = MoviGame;



'use strict';
// utils, sound
var MG = MoviGame('utils','audio', function() { });

function Boot() {}
Boot.prototype = {
    preload: function () {
        MG.Initialize(this.game);
        MG.resourcesManager.loader ( MG.resourcesManager.MoviLoad );
    },
    create: function () {
        // MSSDK를 초기화를 해준다. 이안에 adsInit가 들어있다.
        MSSDK.initializeAsync({}, function(){   // {isBanner:true}광고 결제로 인해 광고가 안보여야 할경우 isBanner:false로 설정해준다.
            MG.NM.LocalLoad(function(){
                adsInit({isBanner:true});
                Define.LANG = MSSDK.LANG == "en"?Define.tbLang[1]:Define.tbLang[0];
                /*if(kData.iVer == undefined){ // todo : 마이그레이션 작업
                }*/

                MSSDK.audioIsEnabled(function (onoff){ //GameSnacks
                    kData.isSfx = kData.isBGM = onoff;
                    //참고문구
                    //MG.game.state.states['game'].sound_googlesnack(onoff);
                });

                //점수생성후,보내기<<
                // var _sum = 0;
                // kData.strikeCnt.forEach((value, index) => {
                //     _sum+=kData.strikeCnt[index]* Math.pow(10, (6-index));
                // });
                // MSSDK.scoreUpdate(_sum);//GameSnacks
                //점수생성후,보내기>>


                this.game.state.start('preloader');
            }.bind(this));
        }.bind(this));
    },
};

window[''] = window[''] || {};
window[''].Boot = Boot;




'use strict';
function Preloader() {
	this.ready = false;
	this.loadingText = null;
	this.sprLoad = null;
}

Preloader.prototype = {

	preload: function () {
		var iCSX = this.game.world.centerX;
		//this.stage.backgroundColor = '#ffcc3c';
		this.stage.backgroundColor = '#ffffff';

		this.sprLoad = [];

		//this.sprLoad[0] = this.add.sprite(MG.iCSX, MG.iCSY - 100, 'logo_movisoft_0.png');
		//this.sprLoad[0].anchor.setTo(0.5, 0.5);
		this.loadingText = this.add.text(MG.iCSX, MG.iCSY, "12%",
			{ font: "32px Arial", fill: "#636363", align: "center" });
		this.loadingText.anchor.setTo(0.5, 0.5);

		// this.sprLoad[0] = this.add.graphics(iCSX, 520);
		// this.sprLoad[0].beginFill(0xe7eaf0);
		// this.sprLoad[0].arc(0, 0, 250, 0, Math.PI*2);
		// this.sprLoad[0].endFill();
		//
		// this.sprLoad[1] = this.add.graphics(iCSX, 520);
		// this.sprLoad[1].beginFill(0xfe7234);
		// this.sprLoad[1].arc(0, 0, 250, MG.game.math.degToRad(-90), MG.game.math.degToRad(360-90+0), true, 360);
		// this.sprLoad[1].endFill();
		//
		// this.sprLoad[2] = this.add.sprite(iCSX, 520, 'pop.png');
		// this.sprLoad[2].anchor.setTo(0.5, 0.5);
		//
		// this.sprLoad[3] = this.add.sprite(iCSX, 836, 'movi.png');
		// this.sprLoad[3].anchor.setTo(0.5, 0.5);

		// this.loadingText = this.add.text(iCSX, 675, "0%", { font: "32px Arial", fill: "#636363", align: "center" });
		// this.loadingText.anchor.setTo(0.5, 0.5);

		this.load.onFileComplete.add(this.onFileComplete, this);
		this.load.onLoadComplete.add(this.onLoadComplete, this);
		MG.resourcesManager.loader(MG.resourcesManager.Preloader);
	},
	onFileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
		// this.sprLoad[1].beginFill(0xfe7234);
		// this.sprLoad[1].arc(0, 0, 250, this.math.degToRad(-90), this.math.degToRad(270-(3.5999*progress)), true, 360);
		// this.sprLoad[1].endFill();
		this.loadingText.setText(progress + "%");
	},
	onLoadComplete: function () {
		var that = this;
		this.ready = true;

		MG.AudioInit();
		// setTimeout(function(){
		// 	MG.loadGameSheetsData(1, Define.GOOGLE_SHEETS_DATA, function(rep){
		// 		that.game.state.start('game');
		// 		that.destroy();
		// 	}.bind(this));
		// }.bind(this), 300);


		MG.loadGameSheetsData(1, Define.GOOGLE_SHEETS_DATA, function(rep){
			/*if(Define.bLocalHost == false){
				adsInit({isBanner:true}, function(){});
			}*/
			this.game.state.start('game');
			this.destroy();
		}.bind(this));
	},
	update: function () {
	},
	destroy :function () {
		// this.sprLoad.forEach(function (t) {
		// 	t.destroy();
		// });
		this.loadingText.destroy();
	}
};

window[''] = window[''] || {};
window[''].Preloader = Preloader;



//===============================================================================
// Phaser Text 기능 확장.
//===============================================================================
Phaser.Text.prototype.ReSize = function(txt, limit_width, limit_height){
	if(txt != undefined)	this.text = txt;
	this.scale.set(1);
	if(this.width > limit_width) {
		if(limit_height === undefined)
			this.scale.set(limit_width/this.width);
		else if(limit_width/this.width <= limit_height/this.height)
			this.scale.set(limit_width/this.width);
	}
	if(limit_height != undefined && this.height > limit_height) {
		if(limit_width/this.width > limit_height/this.height)
			this.scale.set(limit_height/this.height);
	}
}

Phaser.Text.prototype.ChangeTextColor = function(){
	for(var i=0;i<this.text.length;++i){
		if(this.text[i] == "["){
			if(this.text[i+7] == "]"){	// 컬러색일경우
				var ec = this.text.slice(0, i+8).split(/(?:\r\n|\r|\n)/).length - 1;
				var color = "#"+this.text.slice(i+1, i+7);
				this.text = this.text.replace(this.text.slice(i, i+8), "");
				this.addColor(color, i-ec);
			}else if(this._text[i+1] == "-"){
				var ec = this.text.slice(0, i+3).split(/(?:\r\n|\r|\n)/).length - 1;
				this.text = this.text.replace(this.text.slice(i, i+3), "");
				this.addColor("#"+this.tint.toString(16), i-ec);
			}
		}
	}
}
//=============================================================================
// c#용 string.format부분 대체용.
//=============================================================================
var	string = function(){};
if (!string.Format) {
	string.Format = function(format) {
		var args = Array.prototype.slice.call(arguments, 1);
		return format.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined'
				? args[number]
				: match
				;
		});
	};
}

'use strict';


/*function cbGamePocketSdkrefresh(){
    var td = MG.NM.LocalLoad();
    if ( td == undefined ) { // todo : 세이브가 없을경우 바로 세이브를 한번 해준다.
        if(kData.strikeCnt == undefined)
        {
            kData.strikeCnt = [];
            for(var i=0;i<7;i++)
            {
                kData.strikeCnt[i] = 0;
                kData.strikeCnt[i] = 0;
            }
        }
        MG.NM.LocalSave();
    }
    else
	{
        kData = td;
	}
}*/

Enum.WORDLE_GAME_MODE = {
    dark : 0,
    light : 1,
};
Enum.GAME_STATE = {
    ready : 0,
    input : 1,
    result : 2,
};

function Game() {
    this.grpPanel = null;
    this.mode = "Dark";
    this.stage = 0;
    //this.correctText = "";
    //this.curIndex = 0;
    this.state = Enum.GAME_STATE.input;

    this.row = 0;           // 행
    this.column = 0;        // 열

    this.endCount = 6;
    this.playTime = 0;
    this.isAnimation = false;

    this.demo_cnt = 0;
    this.demo_time = 3000;
    this.demo_sqe = [];
}
Game.prototype = {
	preload: function () {
	},
    create: function () {
        MSSDK.ready(); //게임스낵 ready
        MSSDK.audioSubscribe(function (onoff){  //게임스낵 오디오콜백
            if(MG && MG.game) {
                MG.game.state.states['game'].sound_googlesnack(onoff);
            }
        });
    },
    init : function () {

        if(kData.theme == 'undefined')
        {
            kData.theme = 0;
        }

        this.grpPanel = this.game.add.group();
        //MG.NM.Init(cbGamePocketSdkrefresh);
        MG.GameManager = this;
        this.playTime = new Date().getTime();


        this.bk_result = false;//행 추가 확인용

        this.mode = kData.theme == 0?"Light":"Dark";
        this.stage.backgroundColor = this.mode == "Dark"?0x20262d:0xf2f2f3;
        this.wordData = MG.game.cache.getJSON('json_Word');
        this.wordData_Ko = MG.game.cache.getJSON('json_Word_Kr');
        this.keyboardPanel = this.game.plugins.add(KeyboardPanel);
        this.gamePanel = this.game.plugins.add(GamePanel);

        this.continueScene = null;
        this.resultScene = null;
        this.optionPopup  = null;
        this.tutorialPopup = null;

        this.keyboardPanel.setKeyboard(this, function (word){
            this.wordInput(word);
        }.bind(this));

        if(kData.played == undefined)
        {
            kData.played = 0;
        }
        if(kData.winning_streak == undefined)
        {
            kData.winning_streak = 0;
        }
        if(kData.max_streak == undefined)
        {
            kData.max_streak = 0;
        }

        if(kData.curRow == undefined)
        {
            kData.curRow = 0;
        }

        if(kData.curIndex == undefined)
        {
            kData.curIndex = 0;
        }

        if(kData.correctText == undefined)
        {
            kData.correctText = "";
        }

        if(kData.sprWordTable == undefined)
        {
            kData.sprWordTable = [];
            for(var i=0;i<7;i++) {
                kData.sprWordTable[i] = "";
            }
        }

        if(kData.curRow == 0)
        {
            for(var i=0;i<7;i++) {
                kData.sprWordTable[i] = "";
            }

        }
        else
        {
            if(kData.continue == 1)
            {
                this.endCount = 7;
            }
            this.row =  kData.curRow;
        }

        this.topUI();
        this.gameInit();
        this.gamePanel.gameUI(this);




        MG.PlayBgm("01_BGM_Main", true);
        if(kData.curRow == 6 && kData.continue == 0)
        {
            this.showContinueScene();
        }
        //this.grpPanel.tint = 0x000000;


        var spine_Title = this.game.add.spine(MG.iCSX, MG.iCSY, "spineTitle");
        spine_Title.setAnimationByName ( 0, "Intro", false);
        var sprineParent = spine_Title.children[spine_Title.skeleton.findSlotIndex("Text")];
        var textWord = MG.AddText(sprineParent, 0, 5, "WORDLER", {font: "78px "+Define.fontStyle, fill: "#c0bebf", fontWeight:'bold'});

        var sprineParentCopy = spine_Title.children[spine_Title.skeleton.findSlotIndex("Copyright")];
        //var textCopy = MG.AddText(sprineParentCopy, 0, 5, "Ⓒ MoviSoft Co.,Ltd. All Rights Reserved.", {font: "20px "+Define.fontStyle, fill: "#c0bebf", fontWeight:'bold'});
        this.isReady = false;

        spine_Title.state.onComplete = function () {

            //textCopy.destroy();
            //textCopy = null;

            textWord.destroy();
            textWord = null;

            spine_Title.state.clearTracks();
            spine_Title.parent.removeChild( spine_Title);
            spine_Title = null;


            this.grpFade = this.game.add.group();
            this.backAlpha = MG.AddSpriteNine(this.grpFade,MG.iCSX, MG.iCSY,'atlasImage','white.png', this.game.width,this.game.height, {top: 2, bottom:  2, left: 2, right: 2},0.5,0.5);
            this.backAlpha.tint = 0x000000;
            this.backAlpha.inputEnabled = true;
            this.game.add.tween(this.backAlpha).to( {alpha: 0 }, 800,  Phaser.Easing.Linear.None, true, 200).onComplete.add(function () {
                this.isReady = true;
                this.backAlpha.inputEnabled = false;
                this.grpFade.removeAll();
            }, this);


        }.bind(this);


    },
    getKeyboardActive : function ()
    {
        if(this.backAlpha.alpha != 0)
            return false;

        if(this.continueScene || this.resultScene || this.optionPopup || this.tutorialPopup)
            return false;

        return true;

    },
    gameInit : function ()
    {
        MG.NM.start();

        if(kData.curRow > 0)
        {
            return;
        }
        this.row = 0;
        this.column = 0;
        this.endCount = 6;
        this.playTime = 0;

        this.wordDataInit();
        this.sprTopUI[1].visible = true;

        kData.played++;

        kData.curRow = 0;
        MG.NM.LocalSave();
    },
    wordDataInit : function ()
    {
        var wordNum = this.wordData.length;
        if(kData.played < 80)
        {
            wordNum = 512;
        }
        kData.curIndex = MG.getRandomInt(0, wordNum);
        kData.correctText = this.wordData[kData.curIndex];
        //kData.correctText = "world"
    },
    topUI : function (){
        this.grpTopUI = this.game.add.group();
        this.sprTopUI = [];
        this.sprTopBG = MG.AddSpriteNine(this.grpTopUI,0, 0,'atlasImage','Game_Top_BG.png', 720,250, {top: 247, bottom:  0, left: 100, right: 99},0,0);

//        this.textTitle = MG.AddText(this.grpTopUI,MG.iCSX, 75, "", {font: "38px "+Define.fontStyle, fontWeight:'bold',fill: "#4b5769"});



        // Tutorial
        this.sprTopUI[0] = MG.AddSprite(this.grpTopUI, 430, 75,'atlasImage','Game_Btn_Tutorial.png', undefined, 1, 0.5, 0.5);
        this.sprTopUI[0].inputEnabled = true;
        this.sprTopUI[0].events.onInputDown.add(function(){
        }.bind(this));
        this.sprTopUI[0].events.onInputUp.add(function(a, b, c){
            this.openTutorial();
        }.bind(this));
        // Hint
        this.sprTopUI[1] = MG.AddSprite(this.grpTopUI, 520, 75,'atlasImage','Game_Btn_Hint.png', undefined, 1, 0.5, 0.5);
        this.sprTopUI[1].inputEnabled = true;
        this.sprTopUI[1].events.onInputDown.add(function(){
        });
        this.sprTopUI[1].events.onInputUp.add(function(a, b, c){

            var hintColumn = -1;
            for(var i=0; i < 5; i++)
            {
                if(this.gamePanel.checkStrike(i) == "")
                {
                    hintColumn = i;
                    break;
                }
            }

            if(hintColumn >= 0)
            {
                MG.game.paused = true;
                ShowAD("reward", "hint", function () {
                    this.showHintWord(hintColumn);
                    if(hintColumn == 4)
                    {
                        //this.sprTopUI[1].visible = false;
                    }
                    MG.game.paused = false;
                }.bind(this), function () {
                    MG.game.paused = false;
                }.bind(this));
            }

        }.bind(this));

        // Share
        this.sprTopUI[2] = MG.AddSprite(this.grpTopUI, 520, 75,'atlasImage','Game_Btn_Share.png', undefined, 1, 0.5, 0.5);
        this.sprTopUI[2].visible = false;
        this.sprTopUI[2].inputEnabled = true;
        this.sprTopUI[2].events.onInputDown.add(function(){
        });
        this.sprTopUI[2].events.onInputUp.add(function(a, b, c){
        });

        // Option
        this.sprTopUI[3] = MG.AddSprite(this.grpTopUI, 610, 75,'atlasImage','Game_Btn_Setup.png', undefined, 1, 0.5, 0.5);
        this.sprTopUI[3].inputEnabled = true;
        this.sprTopUI[3].events.onInputDown.add(function(){
        });
        this.sprTopUI[3].events.onInputUp.add(function(a, b, c){

            // window.navigator.share({
            //     title: "WORDLER", // 공유될 제목
            //     text: "", // 공유될 설명
            //     url: "https://game.hotsharegames.com/Popit/index.html?lang=ko", // 공유될 URL
            // });

            this.openSetting();
        }.bind(this));

        this.sprTopUI[4] = MG.AddSprite(this.grpTopUI, 210, 72,'atlasImage','Game_Title_'+this.mode+'.png', undefined, 1, 0.5, 0.5);
        this.setModeColor();

    },

    wordInput : function (word)
    {
        if(!this.isReady)return;
        if(this.endCount == this.row || this.isAnimation)
        {
            return;
        }

        switch (word)
        {
            case "enter":
                if(this.checkCorrectWords())
                {
                    this.isAnimation = true;
                    this.resultInput(function (){
                        this.isAnimation = false;
                        if(kData.correctText == this.gamePanel.rowText(this.row).toLowerCase())
                        {
                            this.showResult(true);
                        }
                        else
                        {
                            this.column = 0;
                            this.row++;

                            if(this.endCount <= this.row)
                            {
                                if(this.endCount == 7)
                                {
                                    kData.curRow = 0;
                                    this.showResult(false);
                                }
                                else
                                {
                                    this.row = this.endCount;
                                    kData.curRow = this.row;
                                    this.showContinueScene();
                                }
                            }
                            else
                            {
                                this.gamePanel.currentRow(this.row);
                                kData.curRow = this.row;
                            }

                            MG.NM.LocalSave();

                        }

                    }.bind(this));
                    this.state = Enum.GAME_STATE.result;

                }
                else
                {
                    this.gamePanel.wrongWords(this.row);
                }
                break;
            case "back":
                MG.PlayAudio('03_SE_Delete');
                this.column--;
                if(this.column < 0)
                {
                    this.column = 0;
                }
                else
                {
                    this.column = this.gamePanel.deleteTextInput(this.row,this.column);

                    // if(this.gamePanel.deleteTextInput(this.row,this.column) == false)
                    // {
                    //     this.column++;
                    // }
                }
                break;
            default:
                MG.PlayAudio('02_SE_Type');
                if(kData.correctText == "")
                {
                    this.wordDataInit();
                }
                if(this.column >= 5) {
                    return;
                }
                this.column = this.gamePanel.textInput(this.row,this.column, word)

                break;
        }
    },
    resultInput : function (cb)
    {
        //this.correctText
        var words = this.gamePanel.rowText(this.row).toLowerCase();
        var arrResult = [];
        for(var i=0; i < 5; i++)
        {
            arrResult[i] = this.checkAnwserWord(i, words, words[i]);
            this.gamePanel.inputResultAnimation(this.row, i, arrResult[i],function (col){
                this.keyboardPanel.changeKey(words[col], arrResult[col]);
                if(col== 4)
                {
                    cb();
                }
            }.bind(this));
        }

        kData.sprWordTable[this.row] = words;
        MG.NM.LocalSave();

    },
    showHintWord : function (hintColumn)
    {
        if(kData.correctText == "")
        {
            this.wordDataInit();
        }

        if(hintColumn >= 0)
        {
            this.gamePanel.hintCorrectWord(this.row, hintColumn, kData.correctText[hintColumn].toUpperCase());

            //this.gamePanel.sprWordTable[this.row][this.column];
            this.keyboardPanel.changeKey(kData.correctText[hintColumn], Enum.KEBOARD_STATE.strike);
            if(this.column == hintColumn)
            {
                this.column = hintColumn+1;
            }
            else
            {
                if(this.gamePanel.sprWordTable[this.row][this.column])
                {

                }

            }


        }
    },
    checkAnwserWord : function (index, words, word)
    {
        if(kData.correctText[index] == word)
        {
            return Enum.WORD_STATE.strike;
        }
        // else
        // {
        //     for(var i=0; i < 5; i++)
        //     {
        //         if(kData.correctText[i] == word)
        //         {
        //             return Enum.WORD_STATE.out;
        //         }
        //     }
        // }

        var wState = Enum.WORD_STATE.fail;
        for(var i = 0; i < 5; i++)
        {
            if(kData.correctText[i] == word)
            {
                var isStrike = false;
                var correctWordList = [];
                var currentWordList = [];

                // check strike
                for(var j = 0; j < 5; j++)
                {
                    if(kData.correctText[j] == words[j] && kData.correctText[j] == word)
                    {
                        isStrike = true;
                    }

                    if(kData.correctText[j] == word)
                    {
                        correctWordList.push(j);
                    }

                    if(words[j] == word)
                    {
                        currentWordList.push(j);
                    }

                }
                if(isStrike == false)
                {
                    if(currentWordList.length > 1)
                    {
                        if(index == currentWordList.shift())
                        {
                            console.log("index = "+index);
                            console.log(currentWordList);
                            wState = Enum.WORD_STATE.out;
                        }
                    }
                    else
                    {
                        wState = Enum.WORD_STATE.out;
                    }
                }
                else
                {
                    if(correctWordList.length > 1)
                    {
                        wState = Enum.WORD_STATE.out;
                    }

                }
            }
        }

        return wState;
    },
    checkCorrectWords : function ()
    {
        console.log(this.gamePanel.rowText(this.row));
        var chkWords = this.wordData.filter(function (item, a) {
            return item === this.gamePanel.rowText(this.row).toLowerCase();
        }.bind(this));
        return (chkWords.length>0);
    },
    showContinueScene : function ()
    {
        this.game.time.events.add(500, function () {
            this.continueScene = this.game.plugins.add(ContinueScene);
            this.continueScene.showContinue(this, function (result){
                this.continueScene.destroy();
                this.game.plugins.remove(this.continueScene);
                this.continueScene = null;
                MG.reScreenSize();//행 추가 확인용
                if(result == true)
                {
                    this.column = 0;
                    this.endCount = 7;
                    this.gamePanel.addRow(this.row);
                    kData.continue = 1;
                    MG.NM.LocalSave();
                }
                else
                {
                    this.showResult(false);
                }


            }.bind(this));
        }.bind(this));

    },
    showResult : function (result)
    {
        if(result == true)
        {
            if(kData.strikeCnt == undefined)
            {
                kData.strikeCnt = [];
                for(var i=0;i<7;i++)
                {
                    kData.strikeCnt[i] = 0;
                }
            }
            kData.strikeCnt[this.row]++;
            kData.winning_streak++;
            if(kData.max_streak <= kData.winning_streak)
            {
                kData.max_streak = kData.winning_streak;
            }
            MG.NM.LocalSave();

            //점수생성후,보내기<<
            var _sum = 0;
            kData.strikeCnt.forEach((value, index) => {
                _sum+=kData.strikeCnt[index]* Math.pow(10, (6-index));
            });
            MSSDK.scoreUpdate(_sum); //게임스낵 점수
            //점수생성후,보내기>>

            MSSDK.levelComplete(kData.max_streak);//GameSnacks
        }
        else
        {
            kData.winning_streak = 0;
            MSSDK.gameOver();//GameSnacks
        }
        this.resultScene = this.game.plugins.add(ResultScene);
        this.resultScene.showResult(this, result, function (){
            this.resultScene.destroy();
            this.game.plugins.remove(this.resultScene);
            this.resultScene = null;
            this.gameInit();
            this.keyboardPanel.keyboardInit();
            this.gamePanel.tableInit();
        }.bind(this));

        kData.continue = 0;
        kData.curRow = 0;
        MG.NM.LocalSave();
        MG.NM.end({type:'gameclear'});


    },
    openTutorial : function ()
    {
        this.tutorialPopup = this.game.plugins.add(TutorialPopup);
        this.tutorialPopup.setTutorial(this, function (){
            this.tutorialPopup.destroy();
            this.game.plugins.remove(this.tutorialPopup);
            this.tutorialPopup = null;
        }.bind(this));
    },
    openSetting : function ()
    {
        this.optionPopup = this.game.plugins.add(OptionPopup);
        this.optionPopup.setOption(this, function (){
            this.optionPopup.destroy();
            this.game.plugins.remove(this.optionPopup);
            this.optionPopup = null;
        }.bind(this));
    },
    setModeColor : function ()
    {
        if(this.mode == "Dark")
        {
            this.stage.backgroundColor = 0x20262d;
            this.sprTopBG.tint = 0x242a32;
            for(var i=0; i<4;i++ )
            {
                this.sprTopUI[i].tint = 0x4b5769;
            }
        }
        else
        {
            this.stage.backgroundColor = 0xf2f2f3;
            this.sprTopBG.tint = 0xa3a5a6;

            for(var i=0; i<4;i++ )
            {
                this.sprTopUI[i].tint = 0xffffff;
            }
        }
         //= MG.AddSprite(this.grpTopUI, 80, 75,'atlasImage','Game_Title_'+this.mode+'.png', undefined, 1, 0.5, 0.5);
        this.sprTopUI[4].loadTexture('atlasImage','Game_Title_'+this.mode+'.png');
        //this.textTitle.addColor(this.mode == "Dark"?"#4b5769":"#ffffff",  0, this.textTitle.text.length);

        this.gamePanel.setModeColor(this.mode);
        this.keyboardPanel.setModeColor(this.mode);

    },

	update: function () {
	    MG.updateTick();
        if(this.playTime <= 120) {
            this.playTime += MG.deltaTime;
        }
        if(kData.played<=1){
            
        }
	},
	destroy : function () {
	},
    render: function() {
        //this.game.debug.text("FPS : "+this.game.time.fps, 2, 14, "#00ff00");
    },

    sound_googlesnack(onoff){ //게임스낵// 모든 사운드 버튼 업데이트
        window.focus();
        if(onoff)
        {
            kData.isBGM = kData.isSfx = true;
            if (MG && !MG.curBgm) MG.curBgm = "01_BGM_Main";
            if (MG) MG.PlayBgm(MG.curBgm);
        }
        else
        {
            kData.isBGM = kData.isSfx = false;
            if (MG && !MG.curBgm) MG.curBgm = "01_BGM_Main";
            if (MG) MG.StopBgm(MG.curBgm);
        }
        var popup = MG.game.state.states['game'].optionPopup;
        if(popup) {
            //배경
            popup.iconMusic.visible = true;//배경음 검정 버튼
            popup.iconMusic.visible = true;//배경음 검정 버튼
            popup.iconMusic.x = kData.isBGM === false ? 44 : -44;
            popup.sprIconMusic.x = kData.isBGM === false ? 44 : -44;
            popup.sprIconMusic.loadTexture('atlasImage', 'Settings_Icon_Music_' + (kData.isBGM == true ? 'On' : 'Off') + '.png');
            popup.iconSound.x = kData.isSfx === false ? 44 : -44;
            popup.sprIconSound.x = kData.isSfx === false ? 44 : -44;
            popup.sprIconSound.loadTexture('atlasImage', 'Settings_Icon_Music_' + (kData.isSfx == true ? 'On' : 'Off') + '.png');
        }

    },
    run_demo(){
        kData.correctText = "world";
        let demo_seq = [
            'W','R','O','N','G','enter',
            'R','O','U','N','D','enter',
            'A','R','R','O','W','enter',
            // 'A','C','O','L','D','enter',
            // 'C','L','O','U','D','enter',
        ];
        let _time = 0;
        for (let i = 0; i < demo_seq.length; i++) {
            let key = demo_seq[i];
            let _time2 = _time;
            setTimeout((_i, _key) => {
                MG.game.state.states['game'].wordInput(_key.toString());
                MG.game.state.states['game'].demo_cnt+=1;
            }, _time2, i,key);
            console.log(i, _time2, key);
            let _off = 100;
            if(key === 'enter') _off = 3000;
            _time+=(100+_off);
        }
    }
};

window[''] = window[''] || {};
window[''].Game = Game;

GamePanel = function (game) {
    this.game = game;
    this.grpPanel = null;
    this.level = 0;
    this.parent = null;

};
Enum.WORD_STATE = {
    none : 0,
    out : 1,
    strike : 2,
    fail : 3,

};
GamePanel.prototype = {
    preload: function () {
    },
    create: function () {
    },
    init : function () {
        this.grpPanel = this.game.add.group();
        this.sprWordTable = [];
        this.mode = "Light";
        this.curInput = null;
    },
    gameUI : function (parent)
    {
        this.parent = parent;
        this.mode = this.parent.mode;
        this.textColor = this.mode == "Dark"?"#ffffff":"#8d8e8f";
        for(var i=0;i<7;i++){
            this.sprWordTable[i] = [];
            for(var j=0;j<5;j++){
                if(i==0 || i == 5 || i==6)
                {
                    var sprName = 'Game_Box_B_0.png';
                    if(j==0)
                    {
                        if(i == 5 || i==6)
                        {
                            sprName = 'Game_Box_B_3.png';
                        }
                        else
                        {
                            sprName = 'Game_Box_B_1.png';
                        }

                        this.sprWordTable[i][j] = MG.AddSprite(this.grpPanel, 126+(j*117), 280+(117*i),'atlasImage',sprName, undefined, 1, 0.5, 0.5);
                    }
                    else if(j==4)
                    {
                        if(i == 5 || i==6)
                        {
                            sprName = 'Game_Box_B_4.png';
                        }
                        else
                        {
                            sprName = 'Game_Box_B_2.png';
                        }
                        this.sprWordTable[i][j] = MG.AddSprite(this.grpPanel, 126+(j*117), 280+(117*i),'atlasImage',sprName, undefined, 1, 0.5, 0.5);
                    }
                    else
                    {
                        this.sprWordTable[i][j] = MG.AddSprite(this.grpPanel, 126+(j*117), 280+(117*i),'atlasImage',sprName, undefined, 1, 0.5, 0.5);
                    }
                }
                else
                {
                    this.sprWordTable[i][j] = MG.AddSprite(this.grpPanel, 126+(j*117), 280+(117*i),'atlasImage','Game_Box_B_0.png', undefined, 1, 0.5, 0.5);
                }
                if(i >0)
                {
                    this.sprWordTable[i][j].alpha = this.mode == "Dark"?0.2:0.4;
                }
                this.sprWordTable[i][j].spine = null;
                this.sprWordTable[i][j].state = Enum.WORD_STATE.none;
                this.sprWordTable[i][j].line = i+1;
                this.sprWordTable[i][j].tint = this.mode == "Dark"?0x6c7278:0xcacbcc;
                this.sprWordTable[i][j].txt = MG.AddText(this.grpPanel, 126+(j*117), 280+(117*i)+5, "", {font: "58px "+Define.fontStyle, fill: this.textColor, fontWeight:'bold'});
                if(i==6)
                {
                    this.sprWordTable[i][j].visible = false;
                }
                this.sprWordTable[i][j].txt.visible = false;
            }
        }
        this.grpPanel.y = -58;
        this.grpPanel.y = 0;
        this.loadTable();
    },
    loadTable : function ()
    {
        if(kData.played===1){
            kData.curRow = 4;
            MG.game.state.states['game'].row = kData.curRow;
            kData.correctText = "world";
            kData.sprWordTable = ['wrong', 'color', 'arrow', 'idols', '', '', ''];
            //wrong//round//arrow//acold//cloud
        }
        if(kData.curRow > 0)
        {
            for(var i=0;i<kData.curRow;i++){
                for(var j=0;j<5;j++){


                    this.sprWordTable[i][j].txt.setText(kData.sprWordTable[i][j].toUpperCase());
                    this.sprWordTable[i][j].txt.visible = true;
                    var state = this.parent.checkAnwserWord(j, kData.sprWordTable[i],kData.sprWordTable[i][j]);
                    this.parent.keyboardPanel.changeKey(kData.sprWordTable[i][j], state);

                    var spriteName = "";
                    var sprFrameName = this.sprWordTable[i][j]._frame.name;
                    var sprNumber = parseInt(sprFrameName.substr(sprFrameName.length-5,1));

                    this.sprWordTable[i][j].state = state;
                    this.sprWordTable[i][j].txt.addColor("#ffffff", 0, 1);
                    if(state == Enum.WORD_STATE.strike)
                    {
                        spriteName = "Game_Box_C_"+this.mode+"_"+sprNumber+".png";
                        this.sprWordTable[i][j].tint = 0xffffff;
                    }
                    else
                    {
                        spriteName = "Game_Box_A_"+sprNumber+".png";
                        if(state == Enum.WORD_STATE.out)
                        {
                            this.sprWordTable[i][j].tint = 0xffc53b;
                        }
                        else
                        {
                            this.sprWordTable[i][j].tint = this.mode == "Dark"?0x6c7278:0x8d8e8f;
                        }
                    }
                    this.sprWordTable[i][j].alpha = 1;
                    this.sprWordTable[i][j].loadTexture( 'atlasImage',spriteName);

                }

            }
            this.currentRow(kData.curRow);
        }

        if(kData.continue == 1)
        {
            this.addRow(kData.curRow);
        }

    },
    tableInit : function ()
    {
        this.textColor = this.mode == "Dark"?"#ffffff":"#8d8e8f";
        for(var i=0;i<7;i++) {
            for (var j = 0; j < 5; j++) {
                var sprName = 'Game_Box_B_0.png';
                if(i==0 || i == 5 || i==6)
                {

                    if(j==0)
                    {
                        if(i == 5 || i==6)
                        {
                            sprName = 'Game_Box_B_3.png';
                        }
                        else
                        {
                            sprName = 'Game_Box_B_1.png';
                        }
                    }
                    else if(j==4)
                    {
                        if(i == 5 || i==6)
                        {
                            sprName = 'Game_Box_B_4.png';
                        }
                        else
                        {
                            sprName = 'Game_Box_B_2.png';
                        }

                    }

                }
                this.sprWordTable[i][j].loadTexture ( 'atlasImage',sprName );
                if(i >0)
                {
                    this.sprWordTable[i][j].alpha = this.mode == "Dark"?0.2:0.4
                }
                this.sprWordTable[i][j].txt.addColor(this.textColor, 0, 1);
                this.sprWordTable[i][j].state = Enum.WORD_STATE.none;
                this.sprWordTable[i][j].line = i+1;
                //this.sprWordTable[i][j].tint = this.mode == "Dark"?0x6c7278:0x8d8e8f;
                //this.sprWordTable[i][j].tint = this.mode == "Dark"?0x6c7278:0x8d8e8f;
                this.sprWordTable[i][j].tint = this.mode == "Dark"?0x6c7278:0xcacbcc;
                this.sprWordTable[i][j].txt.setText("");
                if(i==6)
                {
                    this.sprWordTable[i][j].visible = false;
                }
                this.sprWordTable[i][j].txt.visible = false;
            }
        }
        this.grpPanel.y = 0;
    },
    setModeColor : function (mode)
    {
        this.mode = mode;
        this.textColor = this.mode == "Dark"?"#ffffff":"#8d8e8f";

        for(var i=0;i<7;i++) {
            if(this.sprWordTable[i] == undefined)
            {
                return;
            }
            for (var j = 0; j < 5; j++) {

                if(this.sprWordTable[i][j].state == Enum.WORD_STATE.strike)
                {
                    var sprFrameName = this.sprWordTable[i][j]._frame.name;
                    var sprNumber = parseInt(sprFrameName.substr(sprFrameName.length-5,1));
                    //this.sprWordTable[i][j].txt.addColor(0xffffff, 0, 1);
                    var spriteName = "Game_Box_C_"+this.mode+"_"+sprNumber+".png";
                    this.sprWordTable[i][j].loadTexture ( 'atlasImage',spriteName );
                    this.sprWordTable[i][j].tint = 0xffffff;
                }
                else if(this.sprWordTable[i][j].state != Enum.WORD_STATE.out )
                {
                    this.sprWordTable[i][j].tint = (this.mode =="Dark")?0x6c7278:0x8d8e8f;
                }



                if(this.parent.row <= i)
                {
                    this.sprWordTable[i][j].txt.addColor(this.textColor, 0, 1);
                }


            }
        }

    },
    currentRow : function (row)
    {
        for(var i=0; i < 5; i++)
        {
            this.sprWordTable[row][i].alpha = 1;
        }
    },
    addRow : function (row)
    {
        this.grpPanel.y = -64;//행추가시

        for(var i=0; i < 5; i++)
        {
            if(i == 0 || i == 4)
            {
                if(this.sprWordTable[row-1][i].state == Enum.WORD_STATE.strike)
                {

                    this.sprWordTable[row-1][i].loadTexture ( 'atlasImage',"Game_Box_C_"+this.mode+"_0.png" );
                }
                else
                {
                    this.sprWordTable[row-1][i].loadTexture ( 'atlasImage',"Game_Box_A_0.png" );
                }
            }
            this.sprWordTable[row][i].visible = true;
            this.sprWordTable[row][i].alpha = 1;
        }

    },
    hintCorrectWord : function (row, column, cWord, cb)
    {
        var panelY = this.grpPanel.y;

        var spriteName = "";
        var sprFrameName = this.sprWordTable[row][column]._frame.name;
        var sprNumber = parseInt(sprFrameName.substr(sprFrameName.length-5,1));


        this.sprWordTable[row][column].txt.setText(cWord);

        this.sprWordTable[row][column].state = Enum.WORD_STATE.strike;
        this.sprWordTable[row][column].txt.addColor("#ffffff", 0, 1);

        spriteName = "Game_Box_C_"+this.mode+"_"+sprNumber+".png";
        this.sprWordTable[row][column].tint = 0xffffff;
        this.sprWordTable[row][column].loadTexture( 'atlasImage',spriteName);
        this.sprWordTable[row][column].visible = false;
        this.sprWordTable[row][column].txt.visible = false;
        var spineName = 'spineBox_'+this.mode+"_"+sprNumber;

        // if(sprNumber > 0)
        // {
        //     spineName = 'spineBox_'+this.mode+"_LT";
        // }
        MG.PlayAudio('04_SE_Letter');
        var spine_Word = this.game.add.spine(this.sprWordTable[row][column].x, this.sprWordTable[row][column].y+panelY, spineName);
        var skeletonName = "Hint";
        spine_Word.setAnimationByName ( 0, skeletonName, false);
        var sprineParent = spine_Word.children[spine_Word.skeleton.findSlotIndex("Text")];
        var textWord = MG.AddText(sprineParent, 0, 5, this.sprWordTable[row][column].txt.text, {font: "58px "+Define.fontStyle, fill: "#FFFFFF", fontWeight:'bold'});

        // if(sprNumber == 2)
        // {
        //     spine_Word.scale.setTo(-1,1);
        //     textWord.scale.setTo(-1,1);
        // }
        // else if(sprNumber == 3)
        // {
        //     spine_Word.scale.setTo(1,-1);
        //     textWord.scale.setTo(1,-1);
        //     textWord.y = -5;
        // }
        // else if(sprNumber == 4)
        // {
        //     spine_Word.scale.setTo(-1,-1);
        //     textWord.scale.setTo(-1,-1);
        //     textWord.y = -5;
        // }

        spine_Word.state.onComplete = function () {

            textWord.destroy();
            textWord = null;

            this.sprWordTable[row][column].txt.visible = true;
            this.sprWordTable[row][column].visible = true;
            spine_Word.state.clearTracks();
            spine_Word.parent.removeChild( spine_Word);
            spine_Word = null;

            if(cb)cb();



        }.bind(this);

    },
    checkStrike : function (column)
    {
        for(var i=0;i<7;i++){
            if(this.sprWordTable[i][column].state == Enum.WORD_STATE.strike)
            {
                return this.sprWordTable[i][column].txt.text;
            }
        }
        return "";
    },
    textInput : function (row, column, word)
    {

        if(this.sprWordTable[row][column].state == Enum.WORD_STATE.strike)
        {
            for(var i=column+1; i < 5; i++)
            {
                if(this.sprWordTable[row][i].state != Enum.WORD_STATE.strike)
                {
                    column = i;
                    break;
                }
            }
        }

        var panelY = this.grpPanel.y;
        var localColumn = column;

        var sprFrameName = this.sprWordTable[row][column]._frame.name;
        var sprNumber = parseInt(sprFrameName.substr(sprFrameName.length-5,1));
        var spineName = 'spineBox_'+this.mode+"_"+sprNumber;





        this.sprWordTable[row][column].visible = false;
        this.sprWordTable[row][column].txt.visible = false;
        this.sprWordTable[row][column].txt.setText(word);
        console.log("=== "+word);
        console.log("=== "+this.rowText(row));

        this.sprWordTable[row][column].spine = this.game.add.spine(this.sprWordTable[row][column].x, this.sprWordTable[row][column].y+panelY, spineName);
        this.sprWordTable[row][column].spine.setAnimationByName ( 0, "Input", false);
        var sprineParent = this.sprWordTable[row][column].spine.children[this.sprWordTable[row][column].spine.skeleton.findSlotIndex("Text")];
        this.sprWordTable[row][column].textWord = MG.AddText(sprineParent, 0, 5, this.sprWordTable[row][column].txt.text, {font: "58px "+Define.fontStyle, fill: this.mode == "Dark"?"#ffffff":"#8d8e8f", fontWeight:'bold'});



        // if(sprNumber == 2)
        // {
        //     this.sprWordTable[row][column].spine.scale.setTo(-1,1);
        //     this.sprWordTable[row][column].textWord.scale.setTo(-1,1);
        // }
        // else if(sprNumber == 3)
        // {
        //     this.sprWordTable[row][column].spine.scale.setTo(1,-1);
        //     this.sprWordTable[row][column].textWord.scale.setTo(1,-1);
        //     this.sprWordTable[row][column].textWord.y = -5;
        // }
        // else if(sprNumber == 4)
        // {
        //     this.sprWordTable[row][column].spine.scale.setTo(-1,-1);
        //     this.sprWordTable[row][column].textWord.scale.setTo(-1,-1);
        //     this.sprWordTable[row][column].textWord.y = -5;
        // }


        this.sprWordTable[row][column].spine.state.onComplete = function () {

            this.sprWordTable[row][localColumn].txt.visible = true;
            this.sprWordTable[row][localColumn].visible = true;

            if(this.sprWordTable[row][localColumn].spine)
            {
                this.sprWordTable[row][localColumn].textWord.destroy();
                this.sprWordTable[row][localColumn].textWord = null;
                this.sprWordTable[row][localColumn].spine.state.clearTracks();
                this.sprWordTable[row][localColumn].spine.parent.removeChild( this.sprWordTable[row][localColumn].spine);
                this.sprWordTable[row][localColumn].spine = null;
            }


        }.bind(this);


        return ++column;
    },
    columnCorrectWord : function (row)
    {
        var retText = "";
        for(var i=0; i < 5; i++)
        {
            if(this.sprWordTable[row][i].txt.visible)
                retText+=this.sprWordTable[row][i].txt.text;
        }
        return retText;
    },
    rowText : function (row)
    {
        var retText = "";
        for(var i=0; i < 5; i++)
        {
            //if(this.sprWordTable[row][i].txt.visible)
            retText+=this.sprWordTable[row][i].txt.text;
        }
        return retText;
    },
    wrongWords : function (row)
    {
        MG.PlayAudio('05_SE_Wrong');
        var orgX = [];
        for(var i=0; i < 5; i++)
        {
            var orgX = 126+(i*117);
            var orgY = this.sprWordTable[row][i].y;
            var tween = this.game.add.tween(this.sprWordTable[row][i]);
            tween.to({ x: [orgX-8, orgX+8, orgX-8, orgX+8,orgX-8,orgX+8,orgX], y: [orgY, orgY, orgY, orgY,orgY,orgY,orgY] }, 500, "Linear");
            tween.start();

            var tween_text = this.game.add.tween(this.sprWordTable[row][i].txt);
            tween_text.to({ x: [orgX-8, orgX+8, orgX-8, orgX+8,orgX-8,orgX+8,orgX], y: [orgY+5, orgY+5, orgY+5, orgY+5,orgY+5,orgY+5,orgY+5] }, 500, "Linear");
            tween_text.start();
        }
    },
    inputResultAnimation : function (row, column, state, cb_end)
    {
        var panelY = this.grpPanel.y;
        this.game.time.events.add(column*500, function () {
            var spriteName = "";
            var sprFrameName = this.sprWordTable[row][column]._frame.name;
            var sprNumber = parseInt(sprFrameName.substr(sprFrameName.length-5,1));

            this.sprWordTable[row][column].state = state;
            this.sprWordTable[row][column].txt.addColor("#ffffff", 0, 1);
            if(state == Enum.WORD_STATE.strike)
            {
                spriteName = "Game_Box_C_"+this.mode+"_"+sprNumber+".png";
                this.sprWordTable[row][column].tint = 0xffffff;
            }
            else
            {
                spriteName = "Game_Box_A_"+sprNumber+".png";
                if(state == Enum.WORD_STATE.out)
                {
                    this.sprWordTable[row][column].tint = 0xffc53b;
                }
                else
                {
                    this.sprWordTable[row][column].tint = this.mode == "Dark"?0x6c7278:0x8d8e8f;
                }
            }
            this.sprWordTable[row][column].loadTexture( 'atlasImage',spriteName);
            this.sprWordTable[row][column].visible = false;
            this.sprWordTable[row][column].txt.visible = false;
            var spineName = 'spineBox_'+this.mode+"_"+sprNumber;

            MG.PlayAudio('04_SE_Letter');
            var spine_Word = this.game.add.spine(this.sprWordTable[row][column].x, this.sprWordTable[row][column].y+panelY, spineName);
            var skeletonName = "";

            if(state == Enum.WORD_STATE.strike)
            {
                skeletonName = "Strike";
            }
            else if(state == Enum.WORD_STATE.out)
            {
                skeletonName = "Out";
            }
            else
            {
                skeletonName = "Fail";
            }

            spine_Word.setAnimationByName ( 0, skeletonName, false);
            var sprineParent = spine_Word.children[spine_Word.skeleton.findSlotIndex("Text")];
            var textWord = MG.AddText(sprineParent, 0, 5, this.sprWordTable[row][column].txt.text, {font: "58px "+Define.fontStyle, fill: "#FFFFFF", fontWeight:'bold'});

            // if(sprNumber == 2)
            // {
            //     spine_Word.scale.setTo(-1,1);
            //     textWord.scale.setTo(-1,1);
            // }
            // else if(sprNumber == 3)
            // {
            //     spine_Word.scale.setTo(1,-1);
            //     textWord.scale.setTo(1,-1);
            //     textWord.y = -5;
            // }
            // else if(sprNumber == 4)
            // {
            //     spine_Word.scale.setTo(-1,-1);
            //     textWord.scale.setTo(-1,-1);
            //     textWord.y = -5;
            // }

            spine_Word.state.onComplete = function () {

                textWord.destroy();
                textWord = null;

                this.sprWordTable[row][column].txt.visible = true;
                this.sprWordTable[row][column].visible = true;
                spine_Word.state.clearTracks();
                spine_Word.parent.removeChild( spine_Word);
                spine_Word = null;

                if(cb_end)cb_end(column);



            }.bind(this);

        }.bind(this), this);




    },
    deleteTextInput : function (row, column)
    {

        if(this.sprWordTable[row][column].state == Enum.WORD_STATE.strike)
        {
            if(column > 0)
            {
                var nStrikeIdx = column;
                for (var i = column-1; i >= 0; i--) {
                    if (this.sprWordTable[row][i].state != Enum.WORD_STATE.strike) {
                        nStrikeIdx = i;
                        break;
                    }
                }
                if(nStrikeIdx == column)
                {
                    return column++;
                }
                else
                {
                    column = nStrikeIdx;
                }
            }
            else
            {
                return 1;
            }

        }
        var panelY = this.grpPanel.y;
        var sprFrameName = this.sprWordTable[row][column]._frame.name;
        var sprNumber = parseInt(sprFrameName.substr(sprFrameName.length-5,1));
        var spineName = 'spineBox_'+this.mode+"_"+sprNumber;


        if(this.sprWordTable[row][column].spine)
        {
            this.sprWordTable[row][column].textWord.destroy();
            this.sprWordTable[row][column].textWord = null;
            this.sprWordTable[row][column].spine.state.clearTracks();
            this.sprWordTable[row][column].spine.parent.removeChild( this.sprWordTable[row][column].spine);
            this.sprWordTable[row][column].spine = null;
        }


        var spine_Delete = this.game.add.spine(this.sprWordTable[row][column].x, this.sprWordTable[row][column].y+panelY, spineName);
        spine_Delete.setAnimationByName ( 0, "Delete", false);
        var sprineParent = spine_Delete.children[spine_Delete.skeleton.findSlotIndex("Text")];
        var textWord = MG.AddText(sprineParent, 0, 5, this.sprWordTable[row][column].txt.text, {font: "58px "+Define.fontStyle, fill: this.mode == "Dark"?"#ffffff":"#8d8e8f", fontWeight:'bold'});

        this.sprWordTable[row][column].visible = false;
        this.sprWordTable[row][column].txt.visible = false;


        spine_Delete.state.onComplete = function () {

            textWord.destroy();
            textWord = null;
            this.sprWordTable[row][column].visible = true;
            spine_Delete.state.clearTracks();
            spine_Delete.parent.removeChild( spine_Delete);
            spine_Delete = null;

        }.bind(this);

        return column;

    },
    refresh : function ()
    {
    },
    update: function () {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {

        }
    },
    destroy : function () {
    },
};
window[''] = window[''] || {};
window[''].GamePanel = GamePanel;

Define.LANDSCAPE = false;
var _GameManager = null;

window.onload = function () {
    var game, mg = window[''];

    if(Define.LANDSCAPE === true)
        game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game',undefined,false, true);//,false,false);
    else
        game = new Phaser.Game(720, 1280, Phaser.AUTO, 'game',undefined,false, true);

    game.state.add('boot', mg.Boot);
    game.state.add('preloader', mg.Preloader);
    _GameManager = game.state.add('game', mg.Game);

    game.state.start('boot');
};
