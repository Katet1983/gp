var Define = function () {};
var Enum = function () {};

Define.txtVer = "ver.1.0.25"; //버젼

Enum.DEVICE_STATE = {
    PC : 0,
    IOS : 1,
    ANDROID : 2
};

Define.SAVE_KEY = "com.gamePop.ZombieGun";
Define.bLocalHost = (document.location.href.indexOf("localhost") !== -1 );

Define.GAME_CODE = 123;
Define.iADCnt = 0;
Define.tbLang = ["kr", "en"];
//Define.LANG = MSSDK.getParameterByName('lang') == "en" ? Define.tbLang[1] :Define.tbLang[0];
Define.LANG = 'en';
Define.PID = MSSDK.getParameterByName('id');
Define.GameName = 'ZombieGun';

//==================================================================================================
// 픽시 라이브러리 확장..
/**
 * The arc method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @method arc
 * @param cx {Number} The x-coordinate of the center of the circle
 * @param cy {Number} The y-coordinate of the center of the circle
 * @param radius {Number} The radius of the circle
 * @param startAngle {Number} The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param endAngle {Number} The ending angle, in radians
 * @param anticlockwise {Boolean} Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
 * @param segments {Number} Optional. The number of segments to use when calculating the arc. The default is 40. If you need more fidelity use a higher number.
 * @return {Graphics}
 */
PIXI.Graphics.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise, segments)
{
	//  If we do this we can never draw a full circle
	if (startAngle === endAngle)
	{
		return this;
	}

	if (anticlockwise === undefined) { anticlockwise = false; }
	if (segments === undefined) { segments = 40; }

	if (!anticlockwise && endAngle <= startAngle)
	{
		endAngle += Math.PI * 2;
	}
	else if (anticlockwise && startAngle <= endAngle)
	{
		startAngle += Math.PI * 2;
	}

	var sweep = anticlockwise ? (startAngle - endAngle) * -1 : (endAngle - startAngle);
	var segs =  Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * segments;

	//  Sweep check - moved here because we don't want to do the moveTo below if the arc fails
	if (sweep === 0)
	{
		return this;
	}

	var startX = cx + Math.cos(startAngle) * radius;
	var startY = cy + Math.sin(startAngle) * radius;

	if (anticlockwise && this.filling)
	{
		this.moveTo(cx, cy);
	}
	else
	{
		this.moveTo(startX, startY);
	}

	//  currentPath will always exist after calling a moveTo
	var points = this.currentPath.shape.points;

	var theta = sweep / (segs * 2);
	var theta2 = theta * 2;

	var cTheta = Math.cos(theta);
	var sTheta = Math.sin(theta);

	var segMinus = segs - 1;

	var remainder = (segMinus % 1) / segMinus;

	for (var i = 0; i <= segMinus; i++)
	{
		var real =  i + remainder * i;

		var angle = ((theta) + startAngle + (theta2 * real));

		var c = Math.cos(angle);
		var s = -Math.sin(angle);

		points.push(( (cTheta *  c) + (sTheta * s) ) * radius + cx,
			( (cTheta * -s) + (sTheta * c) ) * radius + cy);
	}

//	this.dirty = true;
//	this._boundsDirty = true;

	return this;
};

// 임시 rozy
/*
var PopconGame ={
	SdkLoader:{
		onLoad:function(cb){
			if (cb) cb();
		}
	},
	Sdk:{
		Ads:{
			show:function(_action, _position, cb){
				if (cb) cb();
			}
		},
		ResponseCode: {
			SUCCESS:undefined,
			ADS_CLOSE:undefined,
		},
		Player: {
			get:function (cb) {
				var res = {
					player_locale: "ko-KR"
				};
				if (cb) cb(res);
			}
		},
		AppData: {
			get:function (a, cb) {
				if (cb) cb();
			},
			put:function (a, cb) {
				if (cb) cb();
			}
		},
		MyScore: {
			put:function (a, cb) {
				if (cb) cb();
			}
		},
		GameReward: {
			get:function (cb) {
				var res = {
					code: PopconGame.Sdk.ResponseCode.SUCCESS,
					popconbox: {
						reward: true,
						popcon_token: "41324as",
						reward_popcon: "40",
						today_popcon: "59"
					}
				};
				if (cb) cb(res);
			},
			put:function (a, cb) {
				var res = {
					code: PopconGame.Sdk.ResponseCode.SUCCESS
				};
				if (cb) cb(res);
			}
		}
	}
};
*/
// ~임시

/**
 * Created by ggumak on 2017-03-07.
 */
var GAME = GAME || {};

GAME.bMobile = false;
GAME.viewContainer = undefined;
GAME.gunData = undefined;

GAME.fontName = {
    kr:"HYSUPM",
    en:"HYSUPM",
    jp:"BOKUTACHI"
};

//////////table 정리//////////////////
GAME.table_modalMsg = undefined;
GAME.table_language = undefined;

GAME.iMSX = 720;
GAME.iMSY = 1280;

GAME.iCSX = GAME.iMSX/2;
GAME.iCSY = GAME.iMSY/2;

GAME.state = {
    STATE_NONE : 0,
    STATE_TITLE : 100,
    STATE_GAME : 101,
    STATE_PAUSE : 102,
    STATE_OVER : 103,
    STATE_REPLAY : 104,
    STATE_TUTO : 105
};

GAME.gameState = {
    STATE_NONE : 0,
    STATE_PLAY : 201,
    STATE_UPSTAIR : 202,
    STATE_SPEEDUP : 203
};

GAME.bPushKeyboard = false;//keyboard 연속 눌림 방지
GAME.bPushKeyboard_left = false;
GAME.bPushKeyboard_right = false;
GAME.bGetButton = false;//ui버튼이 먼저 동작하게 하기 위한 변수

GAME.bShop = false;//사격장에서 총 쏘기 위한 변수
GAME.bChangeGun = false;

GAME.gunShopContainer = undefined;

GAME.showAdTerm = 900;//게임오버창에서 광고를 볼 수 있는 시간 쿨타임//단위 : 초
GAME.view = undefined;

GAME.curServerTime = 0;


//////////flag 종류 모음/////////
GAME.bPushKeyboard = false;//keyboard 연속 눌림 방지
GAME.bPushKeyboard_left = false;
GAME.bPushKeyboard_right = false;
GAME.bGetButton = false;//ui버튼이 먼저 동작하게 하기 위한 변수

GAME.bShop = false;//사격장인지 아닌지(총쏘기 위함)
GAME.bChangeGun = false;//총바꾸는 동안 총을 쏘지 못하게 하는 변수.
GAME.bContinue = false;//이어하기인지 아닌지....맵효과 뿌리기 용..
GAME.bPrevMapEff = false;//이어하기 전에 mapEff가
GAME.iPrevMapEff = -1;//이어하기 전 맵 효과 번호

GAME.bGetAll = false;
GAME.iNextGetGunNum = 0;//다음에 획득할 수 있는 총의 번호.1)최초게임시작/2)새로운 총 획득/3)총 구입 시 번호 갱신.
GAME.data_getNextGun = undefined;
GAME.prev_gunIdx = 0;
GAME.iAdGunIdx = -1;
GAME.bOnAdGun = false;

GAME.arr_loingBonus = [500, 1000, 2000];

function onAdGun () {
    GAME.bOnAdGun = true;
    GAME.view.bShowUseOnceMorePop = true;
    GAME.view.shop_gunSlots[GAME.iAdGunIdx].setState(GAME.view.checkBuyRecords(GAME.iAdGunIdx));
    GAME.view.shop_gunSlots[GAME.iAdGunIdx].setEquip();

    GAME.view.currentOnceMoreFreeCallback();
}

function offAdGun () {
    GAME.bOnAdGun = false;
    GAME.view.shop_gunSlots[GAME.prev_gunIdx].setState(GAME.view.checkBuyRecords(GAME.prev_gunIdx));
    GAME.view.shop_gunSlots[GAME.prev_gunIdx].setEquip();
}

function checkNextGunSlot() {
    // console.log("checkNextGunSlot");
    var i; var getCount = 0;
    for(i=0;i<kData.arrBuyRecords.length;++i){
        if(kData.arrBuyRecords[i]){
            ++getCount;
            if(getCount===kData.arrBuyRecords.length)
                GAME.bGetAll = true;
            continue;
        }
        GAME.iNextGetGunNum = i;
        GAME.data_getNextGun = GAME.gunData[i];
        break;
    }
}

function setUnlockGunData() {
    if(GAME.bGetAll) return;
    GAME.view.txt_buff_single.visible = false;
    GAME.view.txt_buff_0.visible = false;
    GAME.view.txt_buff_1.visible = false;

    var descNum = 0;
    var value = 0;
    GAME.view.txt_unlock_name.text = GAME.table_language[GAME.data_getNextGun.name][Define.LANG];

    GAME.view.spr_gun.texture = PIXI.Texture.fromFrame("gun_shop_slot_"+(GAME.iNextGetGunNum+1).toString()+".png");

    for(i=0;i<2;++i){
        type = GAME.data_getNextGun["skill"+(i+1).toString()];
        if(type === -1) break;
        ++descNum;
    }

    switch (descNum){
        case 1:
            value = GAME.data_getNextGun.value1;
            GAME.view.txt_buff_single.text = GAME.table_language["gunbuff"+GAME.data_getNextGun.skill1.toString()][Define.LANG];
            GAME.view.txt_buff_single.text = GAME.view.txt_buff_single.text.replace("{0}", value.toString());
            GAME.view.txt_buff_single.visible = true;

            switch(GAME.data_getNextGun.skill1){
                case 100://돈 획득량 증가.
                    GAME.view.txt_buff_single.style.fill = "#99CC00";
                    break;
                case 101://층 이동 요금 할인.
                    GAME.view.txt_buff_single.style.fill = "#FFCC00";
                    break;
                case 102://라이프 증가.
                    GAME.view.txt_buff_single.style.fill = "#0066FF";
                    break;
                case 103://라이프 감소.
                    GAME.view.txt_buff_single.style.fill = "#FF0000";
                    break;
            }
            break;
        case 2:
            value = GAME.data_getNextGun.value1;
            GAME.view.txt_buff_0.text = GAME.table_language["gunbuff"+GAME.data_getNextGun.skill1.toString()][Define.LANG];
            GAME.view.txt_buff_0.text = GAME.view.txt_buff_0.text.replace("{0}", value.toString());
            GAME.view.txt_buff_0.visible = true;

            switch(GAME.data_getNextGun.skill1){
                case 100://돈 획득량 증가.
                    GAME.view.txt_buff_0.style.fill = "#99CC00";
                    break;
                case 101://층 이동 요금 할인.
                    GAME.view.txt_buff_0.style.fill = "#FFCC00";
                    break;
                case 102://라이프 증가.
                    GAME.view.txt_buff_0.style.fill = "#0066FF";
                    break;
                case 103://라이프 감소.
                    GAME.view.txt_buff_0.style.fill = "#FF0000";
                    break;
            }

            value = GAME.data_getNextGun.value2;
            GAME.view.txt_buff_1.text = GAME.table_language["gunbuff"+GAME.data_getNextGun.skill2.toString()][Define.LANG];
            GAME.view.txt_buff_1.text = GAME.view.txt_buff_1.text.replace("{0}", value.toString());
            GAME.view.txt_buff_1.visible = true;

            switch(GAME.data_getNextGun.skill2){
                case 100://돈 획득량 증가.
                    GAME.view.txt_buff_1.style.fill = "#99CC00";
                    break;
                case 101://층 이동 요금 할인.
                    GAME.view.txt_buff_1.style.fill = "#FFCC00";
                    break;
                case 102://라이프 증가.
                    GAME.view.txt_buff_1.style.fill = "#0066FF";
                    break;
                case 103://라이프 감소.
                    GAME.view.txt_buff_1.style.fill = "#FF0000";
                    break;
            }
            break;
    }
}
function sound_googlesnack(onoff){ //게임스낵// 모든 사운드 버튼 업데이트
//GAME.view.pause_btnSound.visible = false;
    if(onoff)
    {
        kData.bSoundBGM = kData.bSoundSE = true;
        if (GAME.engineInst.state === GAME.state.STATE_TITLE && kData.bSoundBGM) {
            BGMSoundPlay(BGM_BG, true);
        }
        GAME.view.pause_btnSound.sprite.texture = GAME.view.pause_texSoundOn;
    }else{
        kData.bSoundBGM = kData.bSoundSE = false;
        SoundPause();
        GAME.view.pause_btnSound.sprite.texture = GAME.view.pause_texSoundOff;
    }
}


// function userGetNextGun() {
//     // kData.arrBuyRecords[GAME.iNextGetGunNum] = true;
//     checkNextGunSlot();
//     // setUnlockGunData();
// }

GAME.basic_heartCnt = 2;
GAME.flag_life = 2;
GAME.cur_life = 0;
GAME.max_hearCount = 5;

function Heart(parent){
	this.heartContainer = new PIXI.Container();
	this.heartContainer.position.set(iMSX-100, iCSY+80);
	parent.addChild(this.heartContainer);
	this.arr_hearts = [];
	var hearts = undefined;
	var startY = 50;
	var intervalY = -100;
	for(var i=0;i<GAME.max_hearCount;++i){
		hearts = new PIXI.spine.Spine(spines.heart);
		hearts.scale.set(0.8, 0.8);
		this.arr_hearts.push(hearts);
		this.heartContainer.addChild(hearts);
		// SpinePlay(hearts, 50, startY, "heart_idle", 0, true);
        hearts.position.set(50, startY);
		startY += intervalY;
	}
}

Heart.constructor = Heart;

Heart.prototype.showHeart = function(){
	this.heartContainer.visible = true;
};

Heart.prototype.hideHeart = function(){
	this.heartContainer.visible = false;
};

Heart.prototype.brokenHeart = function(brokenIdx){
    if(brokenIdx<0){
        return;
    }
	SESoundPlay(SE_LifeDown);
	GAME.playSpine(this.arr_hearts[brokenIdx], "heart_broken_ani", false, 0);
	GAME.playSpine(GAME.view.L_hand, "gun_1_hit");
	GAME.playSpine(GAME.view.R_hand, "gun_1_hit");
};

Heart.prototype.initHeart = function(){
    // console.log("initHeart");
	var heart = undefined;
	for(var i=0;i<GAME.max_hearCount;++i){
		heart = this.arr_hearts[i];
		SpinePlay(heart, heart.position.x, heart.position.y, "heart_idle", 0, true);
		heart.visible = false;
	}

	for(var i=0;i<GAME.flag_life;++i){
		this.arr_hearts[i].visible = true;
	}

	GAME.cur_life = GAME.flag_life;
};

// /**
//   * @param {number} currentFloor
//  * @returns {number}
//  */
// Heart.prototype.GetCashWalkHeart = function (currentFloor) {
//    if(currentFloor >= 1 && currentFloor <= 59)
//    {
// 	   GAME.view.select_txtUseHeartCount.setText("2");
// 	   return 2;
//    }
//    if(currentFloor >= 60 && currentFloor <= 119)
//    {
// 	   GAME.view.select_txtUseHeartCount.setText("3");
// 	   return 3;
//    }
//    if(currentFloor >= 120)
//    {
// 	   GAME.view.select_txtUseHeartCount.setText("4");
// 	   return 4;
//    }
//
//    GAME.view.select_txtUseHeartCount.setText("1");
//    return 1;
// };
GAME.playSpine = function(spine, animName, loop, trackIndex, clear, timeScale){
	if(loop === undefined) loop = false;
	if(trackIndex === undefined) trackIndex = 0;
	if(clear === undefined) clear = false;
	if(timeScale === undefined) timeScale = 1;

	spine.visible = true;
	spine.alpha = 1;

	spine.state.timeScale = timeScale;

	if(clear)
		spine.state.clearTracks();

	spine.state.setAnimation(trackIndex, animName, loop);
};

GAME.getMoneyBuff_pct = 0;
GAME.bPlusMoney = false;
GAME.discount_floorMove = 0;
GAME.bBuff_elevator = false;

GAME.setGunBuff = function (gunIndex) {
	if(GAME.bOnAdGun) gunIndex = GAME.iAdGunIdx;

	GAME.getMoneyBuff_pct = 0;
	GAME.discount_floorMove = 0;
	GAME.flag_life = GAME.basic_heartCnt;

	GAME.bPlusMoney = false;
	GAME.bReceivedDoubleReward = false;
	GAME.bBuff_elevator = false;

	var gunData = GAME.gunData[gunIndex];
	var i = 0;
	var value = 0;
	var type = 0;
	for (i = 0; i < 2; ++i) {
		type = gunData["skill" + (i + 1).toString()];
		if (type === -1) break;

		switch (type) {
			case 100:
				GAME.bPlusMoney = true;
				GAME.getMoneyBuff_pct = gunData["value" + (i + 1).toString()] * 0.01;
				break;
			case 101:
				GAME.bBuff_elevator = true;
				GAME.discount_floorMove = gunData["value" + (i + 1).toString()] * 0.01;
				break;
			case 102:
				GAME.flag_life = GAME.basic_heartCnt + gunData["value" + (i + 1).toString()];
				break;
			case 103:
				GAME.flag_life = GAME.basic_heartCnt - gunData["value" + (i + 1).toString()];
				break;
		}
	}
};

GAME.engine = function(){
	this.stageManager = new GAME.stageManager(this);
	//GSInstant.logEvent("Home", "string", "");
	this.state = GAME.state.STATE_TITLE;
	this.gameState = GAME.gameState.STATE_NONE;

	this.stageManager = new GAME.stageManager(this);
	GAME.view = new GAME.view(this);

	stage.addChild(this.stageManager.floorContainer);
	stage.addChild(GAME.view.viewContainer);
	// stage.addChild(sTopContainer);//MG.NM에서 쓸 최상단 container

	this.gunFire();
};

GAME.engine.constructor = GAME.engine;
GAME.engineInst = undefined;

GAME.engine.prototype.init = function(){
	this.stageManager.init();
};

GAME.engine.prototype.update = function(){
	var length = 0; var i = 0;
	switch(this.state){
		case GAME.state.STATE_TITLE:
			break;
		case GAME.state.STATE_GAME:
			switch(this.gameState){
				case GAME.gameState.STATE_NONE:
					break;
				case GAME.gameState.STATE_PLAY:
					this.stageManager.insertZombie();
					this.stageManager.update();
					if(this.stageManager.allDeath()){
						GAME.view.blueSiren();
					}
					break;
				case GAME.gameState.STATE_UPSTAIR:
					break;
			}
			break;
		case GAME.state.STATE_PAUSE:
			i = 0;
			length = GAME.view.pause_Spines.length;
			for(i=0;i<length;++i){
				GAME.view.pause_Spines[i].state.timeScale = 0;
			}
			break;
		case GAME.state.STATE_OVER:
			if(GAME.view.bStopCntFlag)
				GAME.view.countFloor();
			i = 0;
			length = GAME.view.pause_Spines.length;
			for(i=0;i<length;++i){
				GAME.view.pause_Spines[i].state.timeScale = 0;
			}
			break;
	}

	// if(GAME.ui_shop_gold.spr_bg.visible)
	// 	GAME.ui_shop_gold.update();
};

GAME.engine.prototype.gunFire = function () {
	var self = this;
	//left : 0, right : 1
	document.addEventListener('keydown', function(event){
		var THIS = self;
		if(THIS.state === GAME.state.STATE_GAME || GAME.bShop){
			if(GAME.bChangeGun || THIS.gameState === GAME.gameState.STATE_UPSTAIR) return;

			switch(event.which){
				case 37:
					event.preventDefault();
					if(!GAME.bPushKeyboard_left){
						if(!GAME.bShop){//스테이지 진행.
							if(kData.bFirstPlay) return;
							GAME.view.fire(0);
							THIS.stageManager.hit(0);
						}else{//상점에서 총 쏘는 경우.
							GAME.view.fire(0);
							GAME.view.shotTarget(0);
						}
					}
					GAME.bPushKeyboard_left = true;
					break;
				case 39:
					event.preventDefault();
					if(!GAME.bPushKeyboard_right){
						if(!GAME.bShop){
							if(kData.bFirstPlay) return;
							GAME.view.fire(1);
							THIS.stageManager.hit(1);
						}else{
							GAME.view.fire(1);
							GAME.view.shotTarget(1);
						}
					}
					GAME.bPushKeyboard_right = true;
					break;
			}
		}
	});

	document.addEventListener('keydown', function(event){///space key pause
		var THIS = self;
		if(kData.bFirstPlay || THIS.state === GAME.state.STATE_OVER || THIS.state === GAME.state.STATE_TITLE) return;
		if(32 === event.which){
			var view = GAME.view;
			view.pause_bPopOn = (!view.pause_bPopOn) ? true:false;

			if(view.pause_bPopOn){
				event.preventDefault();
				view.showPausePop();
			} else {
				event.preventDefault();
				view.hidePausePop();
			}
		}
	});

	document.addEventListener('keyup', function(event){
		switch(event.which){
			case 37:
				GAME.bPushKeyboard_left = false;
				break;
			case 39:
				GAME.bPushKeyboard_right = false;
				break;
		}
	});

	document.addEventListener("mousedown", function(event){
		var THIS = self;
		if(THIS.state === GAME.state.STATE_GAME || GAME.bShop){
			if(GAME.bChangeGun || GAME.bGetButton || THIS.gameState === GAME.gameState.STATE_UPSTAIR) return;

			var screenWidth = window.innerWidth;
			var halfScreenWidth = screenWidth/2;
			var mouseX = event.clientX;


			if(mouseX <= halfScreenWidth){
				if(!GAME.bShop){
					if(kData.bFirstPlay) return;
					GAME.view.fire(0);
					THIS.stageManager.hit(0);
				}
				else{
					GAME.view.fire(0);
					GAME.view.shotTarget(0);
				}

			} else {
				if(!GAME.bShop){
					if(kData.bFirstPlay) return;
					GAME.view.fire(1);
					THIS.stageManager.hit(1);
				}
				else {
					GAME.view.fire(1);
					GAME.view.shotTarget(1);
				}
			}
		}
	});

	document.addEventListener("click", function(){
		GAME.bGetButton = false;
	});

	touch_area_left.on("touchstart", function(){
		var THIS = self;
		if(THIS.state === GAME.state.STATE_GAME || GAME.bShop){
			if(GAME.bChangeGun||GAME.bGetButton || THIS.gameState === GAME.gameState.STATE_UPSTAIR) return;

			if(!GAME.bShop){
				if(kData.bFirstPlay) return;
				GAME.view.fire(0);
				THIS.stageManager.hit(0);
			} else {
				GAME.view.fire(0);
				GAME.view.shotTarget(0);
			}
		}
	});

	touch_area_right.on("touchstart", function(){
		var THIS = self;
		if(THIS.state === GAME.state.STATE_GAME || GAME.bShop){
			if(GAME.bChangeGun||GAME.bGetButton || THIS.gameState === GAME.gameState.STATE_UPSTAIR) return;

			if(!GAME.bShop){
				if(kData.bFirstPlay) return;
				GAME.view.fire(1);
				THIS.stageManager.hit(1);
			} else {
				GAME.view.fire(1);
				GAME.view.shotTarget(1);
			}
		}
	});

	document.body.addEventListener("touchend", function(e){
		GAME.bGetButton = false;
	});

	window.focus();	// 포커스를 잃는경우가 생겨 한번 셋팅해준다.
};

GAME.engine.prototype.replay = function(){
	SESoundPlay(SE_BUTTON);
	GAME.view.cont_Count = 0;
	GAME.view.bSelfOver = false;
	GAME.view.bNewScore = false;

	GAME.view.spine_gunUnlock.visible = false;

	GAME.view.setUserGun(kData.iUserOwnGun);

	gameResultMoney = 0;
	SESoundStop(SE_GAMEOVER);
	this.state = GAME.state.STATE_GAME;
	this.gameState = GAME.gameState.STATE_NONE;

	GAME.view.replay();
	this.stageManager.init();
	this.stageManager.createStage();
	GAME.view.redSiren();

	GAME.accStageGold = 0;
	MG.NM.start();
	//MG.NM.SendGamePlay(3);
};

GAME.engine.prototype.goTitle = function(){
	console.log('goTitle()');
	//GSInstant.logEvent("Home", "string", "");
	SESoundPlay(SE_BUTTON);
	SESoundStop(SE_GAMEOVER);
	GAME.view.bSkip = false;

	gameResultMoney = 0;

	this.state = GAME.state.STATE_TITLE;
	this.gameState = GAME.gameState.STATE_NONE;

	GAME.view.cont_Count = 0;
	GAME.view.bSelfOver = false;
	GAME.view.bNewScore = false;
	GAME.view.showTitle();
	GAME.view.replay();
	GAME.view.outHand();
	GAME.view.pause_btnPause.sprite.visible = false;
	GAME.view.spine_gunUnlock.visible = false;
	// GAME.view.btn_showRank.sprite.visible = false;
	GAME.view.heart.hideHeart();

	this.stageManager.init();
	this.stageManager.createStage();

	GAME.accStageGold = 0;

	GAME.view.bPause_out = false;
};

GAME.engine.prototype.continue = function(){
	SESoundStop(SE_GAMEOVER);
	this.state = GAME.state.STATE_GAME;
	this.gameState = GAME.gameState.STATE_NONE;

	GAME.view.replay();
	this.stageManager.createStage();
	GAME.view.redSiren();
};

var lg = true;
GAME.view = function(engine){
	MSSDK.ready(); //게임스낵 ready
	MSSDK.audioSubscribe(function (onoff){  //게임스낵 오디오콜백
		if(MG) {
			sound_googlesnack(onoff);
		}
	});

	this.currentGameOverType = "";
	this.engine = engine;
	this.viewContainer = new PIXI.Container();
	GAME.viewContainer = this.viewContainer;
	this.blackLayer = new PIXI.DisplayGroup(0, false);
	this.popUpLayer = new PIXI.DisplayGroup(1, false);

	this.fakeY = {x:0, y:0};
	this.bStopCntFlag = false;
	this.newBestSpine_over = undefined;
	/////////////////

	///userOwnGun///
	this.gunSoundIndexes = [];
	////////////////

	///shop///
	this.leftTargetFall = false;
	this.rightTargetFall = false;

	// this.gunData;
	this.maxGunIdx = 0;
	this.curShowNum = 0;
	//////////

	///shop_2///
	this.shop_gunSlots = [];
	////////////

	// ///pause key && popup///
	this.pause_bPopOn = false;
	this.pause_Spines = [];
	// //add things
	// this.bPause_out = false;
	// /////////////////////////

	// ///continue pop///
	this.cont_Count = 0;
	// //////////////////

	// ///select Floor pop///
	this.select_needGold = 0;
	this.bSkip = false;
	// //////////////////////

	////depth sort start////
	this.elevatorInit();
	this.rifleRangeInit();
	this.shopInit();
	this.gunInit();
	this.sirenInit();

	this.heart = new Heart(GAME.viewContainer);
	this.heart.initHeart();
	this.heart.hideHeart();

	this.initUnlockSpine();

	this.gameOverInit();
	this.tutorialInit();
	this.loadingPageInit();
	this.gameOverPopInit();
	this.pausePopInit();
	this.contPopInit();
//	this.doubleRewardAdPopInit();
	this.titleInit();
	/////////////////////
	this.selectPopInit();
	this.exitPopInit();
	this.confirmPopInit();
	this.useOnceMoreAdGunPopInit();

	GAME.buttonShield = new PIXI.Graphics();
	this.viewContainer.addChild(GAME.buttonShield);//최상단 건테이너에 붙임...
	GAME.buttonShield.beginFill(0xffff00, 0);
	GAME.buttonShield.drawRect(0, 0, iMSX, iMSY);

	GAME.buttonShield.endFill();
	GAME.buttonShield.interactive = true;
	GAME.buttonShield.visible = false;

	// GAME.ui_shop_gold = new UI_goldShop(this.viewContainer);
	// GAME.ui_shop_gold.spr_bg.displayGroup = this.popUpLayer;
	// GAME.ui_shop_gold.popupShield.displayGroup = this.blackLayer;

	// GAME.ui_ranking = new UI_ranking(this.viewContainer);
	// this.btn_showRank = new GUMA.button(this.elevator, "btn_rank.png", 300, -450);
	// this.btn_showRank.setOriginScale(0.6, 0.6);
	// this.btn_showRank.setCallback(/*GAME.ui_ranking.checkRanking*/);

	// this.btn_showRank.setDownAction(function(){
	// GAME.bGetButton = true;
	// });

	// this.elevator.addChild(this.btn_showRank.sprite);

//	GAME.ui_message = new UI_message(this.viewContainer);
	this.bNewScore = false;

	//////////////////
	////depth sort end//////
	this.detectDevice();

	////////////////////////////
	//CashWalk Heart
//	this.txt_iHeartCount;
//	this.select_txtUseHeartCount;
//	this.select_txtGameOverHeartCount;
	///////////////////////////

	this.bExitUIPath = false;	// 게임 나가기 UI를 통해 첫 화면으로 왔는가? 행운의 팝콘 관련. rozy

	if (!kData.isTutorialFinished)
		this.showTutorial();
};

GAME.view.constructor = GAME.view;

GAME.view.prototype.setUserGun = function (gunNumber) {
	if(GAME.bOnAdGun){
		this.L_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_9");
		this.R_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_9");
	}
	else {
		switch (gunNumber) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				this.L_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_"+(gunNumber+1));
				this.R_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_"+(gunNumber+1));
				break;
			case 7:
				this.L_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_8_2");
				this.R_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_8_1");
				break;
		}
	}

	this.L_hand.scale.x = -1;
};

GAME.view.prototype.setRifleRangeUserGun = function (gunNumber) {
	switch (gunNumber) {
		case 7:
			this.L_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_8_2");
			this.R_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_8_1");
			break;
		default:
			this.L_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_"+(gunNumber+1));
			this.R_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_"+(gunNumber+1));
			break;
	}

	this.L_hand.scale.x = -1;
};

GAME.view.prototype.setRangeGun = function (gunNumber) {
	switch (gunNumber) {
		case 7:
			this.L_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_8_2");
			this.R_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_8_1");
			break;
		default:
			this.L_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_"+(gunNumber+1));
			this.R_hand.skeleton.setAttachment("hand_gun_1", "hand_gun_"+(gunNumber+1));
			break;
	}

	this.L_hand.scale.x = -1;
};

GAME.view.prototype.gunInit = function(){
	this.L_hand = new PIXI.spine.Spine(spines.gun_1);
	this.R_hand = new PIXI.spine.Spine(spines.gun_1);

	this.gunSoundIndexes[0] = SE_GUN_0;
	this.gunSoundIndexes[1] = SE_GUN_1;
	this.gunSoundIndexes[2] = SE_GUN_2;
	this.gunSoundIndexes[3] = SE_GUN_3;
	this.gunSoundIndexes[4] = SE_GUN_4;
	this.gunSoundIndexes[5] = SE_GUN_5;
	this.gunSoundIndexes[6] = SE_GUN_6;
	this.gunSoundIndexes[7] = SE_GUN_7_1;
	this.gunSoundIndexes[8] = SE_GUN_7_2;
	this.gunSoundIndexes[9] = SE_GUN_8;

	this.pause_Spines[2] = this.L_hand;
	this.pause_Spines[3] = this.R_hand;

	this.viewContainer.addChild(this.L_hand);
	this.viewContainer.addChild(this.R_hand);

	this.L_hand.position.set(iCSX-350, iCSY+610);
	this.R_hand.position.set(iCSX+350, iCSY+610);

	this.setUserGun(kData.iUserOwnGun);

	var self = this;
	// gunAnimation Numbering: 0-idle, 1-attack, 2-out, 3-in, 4-hit
	this.L_hand.state.addListener({
		complete:function(_e) {
			var view = self;
			if(!view.L_hand.visible) return;

			switch(_e.animation.name){
				case "gun_1_out":
					if(GAME.bShop){
						view.setRifleRangeUserGun(view.curShowNum);
						GAME.bChangeGun = false;
						view.showHand();
					}
					break;
				case "gun_1_in":
				case "gun_1_attack":
				case "gun_1_hit":
					GAME.playSpine(view.L_hand, "gun_1_idle", true);
					break;
			}
		}
	});

	this.R_hand.state.addListener({
		complete:function(_e) {
			var view = self;
			if(!view.R_hand.visible) return;

			switch(_e.animation.name){
				case "gun_1_out":
					if(GAME.bShop){
						view.setRifleRangeUserGun(view.curShowNum);
						GAME.bChangeGun = false;
						view.showHand();
					}
					break;
				case "gun_1_in":
				case "gun_1_attack":
				case "gun_1_hit":
					GAME.playSpine(view.R_hand, "gun_1_idle", true);
					break;
			}
		}
	});

	this.L_hand.visible = false;
	this.R_hand.visible = false;
};

GAME.view.prototype.fire = function(direction){
	if(direction === 0){//left
		if(!GAME.bShop){
			switch(kData.iUserOwnGun){
				default:
					if (kData.iUserOwnGun < 7) SESoundPlay(this.gunSoundIndexes[kData.iUserOwnGun]);
					else SESoundPlay(this.gunSoundIndexes[kData.iUserOwnGun + 1]);
					break;
				case 7:
					SESoundPlay(this.gunSoundIndexes[8]);
					break;
			}
		} else {
			switch(this.curShowNum){
				default:
					if (this.curShowNum < 7) SESoundPlay(this.gunSoundIndexes[this.curShowNum]);
					else SESoundPlay(this.gunSoundIndexes[this.curShowNum + 1]);
					break;
				case 7:
					SESoundPlay(this.gunSoundIndexes[8]);
					break;
			}
		}
		GAME.playSpine(this.L_hand, "gun_1_attack"/*, false, 1*/);
	} else {//right
		if(!GAME.bShop){
			switch(kData.iUserOwnGun){
				default:
					if (kData.iUserOwnGun < 7) SESoundPlay(this.gunSoundIndexes[kData.iUserOwnGun]);
					else SESoundPlay(this.gunSoundIndexes[kData.iUserOwnGun + 1]);
					break;
				case 7:
					SESoundPlay(this.gunSoundIndexes[7]);
					break;
			}
		} else {
			switch(this.curShowNum){
				default:
					if (this.curShowNum < 7) SESoundPlay(this.gunSoundIndexes[this.curShowNum]);
					else SESoundPlay(this.gunSoundIndexes[this.curShowNum + 1]);
					break;
				case 7:
					SESoundPlay(this.gunSoundIndexes[7]);
					break;
			}
		}
		GAME.playSpine(this.R_hand, "gun_1_attack"/*, false, 1*/);
	}
};

GAME.view.prototype.outHand = function(){
	GAME.playSpine(this.L_hand, "gun_1_out"/*, false, 2*/);
	GAME.playSpine(this.R_hand, "gun_1_out"/*, false, 2*/);
};

GAME.view.prototype.showHand = function(){
	GAME.playSpine(this.L_hand, "gun_1_in"/*, false, 3*/);
	GAME.playSpine(this.R_hand, "gun_1_in", false, 0, false, 0.8);
};

/*GAME.view.prototype.SetCashWalkHeart = function() {
//	console.log("=== Enter SetCashWalkHeart ===");
	if(GAME.txt_iHeartCount !== undefined) GAME.txt_iHeartCount.text = kData.iHeart.toString();
	if(GAME.select_txtGameOverHeartCount !== undefined) GAME.select_txtGameOverHeartCount.text = kData.iHeart.toString();
	if(GAME.view.txt_userGold !== undefined) GAME.view.txt_userGold.text = kData.iHeart.toString();
	/!*setTimeout(this.SetCashWalkHeart, 2000);
	setTimeout(this.SetCashWalkHeart, 4000);*!/
};*/

GAME.view.prototype.titleInit = function() {
	this.onClicked_StartGameButton = false;
	this.title_title = new PIXI.spine.Spine(spines.title);
	this.title_title.interactive = true;
	this.viewContainer.addChild(this.title_title);
	this.title_title.position.set(GAME.iCSX, GAME.iCSY);
	this.best_title = SpriteLoad(this.title_title, "title_floor.png", 0, 0);
	this.txtBest_title = FontLoad(this.best_title, GAME.table_language["etc01"][Define.LANG]+" "+kData.iBestFloor.toString()+"F", 0, 30,
		{fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});
	this.txtBest_title.rotation = -5 * (Math.PI / 180);

	var iExitX = 50;
	if (MSSDK.getBackButton() == true) {
		var btnExit = new GUMA.button(this.title_title, "assets/img/btn_exit.png", -360+iExitX, -580);
		btnExit.setCallback(function () {
			MSSDK.gameExit(true);
		}.bind(this));
		iExitX += 90;
	}else{
		iExitX = 60;
	}
	//----------------------------구글스낵배경//버튼필요
	var btnBG = SpriteLoad(this.title_title, "btn_tuto.png", 0, 0);
	btnBG.interactive = true;
	btnBG.buttonMode = true;
	btnBG.scale.set(15, 15);
	btnBG.alpha = 0;
	// btnBG.on('tap', function(){
	// 	console.log('btnTuto tab');
	// 	MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
	// 		BGMSoundPlay(BGM_BG, true);
	// 	});
	// }.bind(this));
	// btnBG.on('click',  function(){
	// 	console.log('btnTuto click');
	// 	MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
	// 		BGMSoundPlay(BGM_BG, true);
	// 	});
	// }.bind(this));
	//---------
	btnBG.on("mousedown", function(){
		MSSDK.audioIsEnabled(function (onoff){BGMSoundPlay(BGM_BG, true); });//게임스낵 사운드체크
	});
	btnBG.on("mouseup", function(e){
		MSSDK.audioIsEnabled(function (onoff){BGMSoundPlay(BGM_BG, true); });//게임스낵 사운드체크
	});
	btnBG.on("touchstart", function(){
		MSSDK.audioIsEnabled(function (onoff){BGMSoundPlay(BGM_BG, true); });//게임스낵 사운드체크
	});
	btnBG.on("touchend", function(e){
		MSSDK.audioIsEnabled(function (onoff){BGMSoundPlay(BGM_BG, true); });//게임스낵 사운드체크
	});
	//---------
	//----------------------------구글스낵배경//버튼필요

	// 튜토리얼 버튼
	var btnTuto = SpriteLoad(this.title_title, "btn_tuto.png", -360+iExitX, -580);
	btnTuto.interactive = true;
	btnTuto.buttonMode = true;
	btnTuto.on('tap', function(){
		console.log('btnTuto tab');
		SESoundPlay(SE_BUTTON);
		this.showTutorial();
	}.bind(this));
	btnTuto.on('click',  function(){
		console.log('btnTuto click');
		SESoundPlay(SE_BUTTON);
		this.showTutorial();
	}.bind(this));

	// 전체이용가
	var sprGrade = SpriteLoad(this.title_title, "assets/img/all.png", 285, -562);
	if(Define.LANG == Define.tbLang[0]) {
		var sprViolence = SpriteLoad(this.title_title, "assets/img/grade_violence.png", 175, -565);
		//sprGrade.scale.set(1);
		sprViolence.scale.set(0.8);
	}

	var btnStart = new GUMA.button(this.title_title, "btn_start.png", -180, 340);
	btnStart.setCallback(function(){
		console.log('btnStart');
		if(this.bFirstShowUseOnceMorePop == false && !GAME.bOnAdGun && kData.iBestFloor > 0){
			this.bFirstShowUseOnceMorePop = true;
			this.showUseOnceMoreAdGunPop(function () {
				if(kData.iBestFloor>10){
					SESoundPlay(SE_BUTTON);
					if(this.onClicked_StartGameButton) return;
					GAME.setGunBuff(kData.iUserOwnGun);
					this.showSelectPop();
				}else{
					GAME.view.GameStartInit(true);
					//	GAME.view.StartGame_CallBack();
				}
			}, function(){
				if(kData.iBestFloor>10){
					SESoundPlay(SE_BUTTON);
					if(this.onClicked_StartGameButton) return;
					GAME.setGunBuff(kData.iUserOwnGun);
					this.showSelectPop();
				}else{
					GAME.view.GameStartInit(true);
					//	GAME.view.StartGame_CallBack();
				}
			});
		}else{
			if(kData.iBestFloor>10){
				SESoundPlay(SE_BUTTON);
				if(this.onClicked_StartGameButton) return;
				GAME.setGunBuff(kData.iUserOwnGun);
				this.showSelectPop();
			}else{
				GAME.view.GameStartInit(true);
				//	GAME.view.StartGame_CallBack();
			}
		}
	}, this);

//	this.spr_icon2 = SpriteLoad(this.title_title, "heart.png", 150, 200);
	var btnShop = new GUMA.button(this.title_title, "btn_shop.png", 180, 350);
	btnShop.setCallback(function(){
		console.log('btnShop');
		SESoundPlay(SE_BUTTON);

		if(this.onClicked_StartGameButton) return;

		this.hideTitle();
		this.showShop();
		this.setUserGun(kData.iUserOwnGun);
	}, this);
	this.alert_title = SpriteLoad(btnShop.sprite, "new_icon.png", 150, -50);
	this.alert_title.scale.set(0.8, 0.8);

//	this.skip_title = new GUMA.button(this.title_title, "title_floor_btn.png", 25, 350);
//	this.skip_title.sprite.visible = false;

//	if(kData.iBestFloor>10){
//		this.skip_title.sprite.visible = true;
//		this.shop_title.position.y = 500;
//	}

	/*this.sound_title = new GUMA.button(this.title_title, "title_sound_btn.png", 300, 550);
	this.sound_title.setOriginScale(0.7, 0.7);*/

	/*this.soundOn_title = SpriteLoad(this.sound_title.sprite, "title_sound_on.png", 0, 0);
	this.soundOff_title = SpriteLoad(this.sound_title.sprite, "title_sound_off.png", 0, 0);
	this.soundOn_title.visible = false;
	this.soundOff_title.visible = false;*/

	/*this.skip_title.setCallback(function(){
		SESoundPlay(SE_BUTTON);

		if(this.onClicked_StartGameButton) return;

		GAME.setGunBuff(kData.iUserOwnGun);
		self.showSelectPop();
	}.bind(this));*/

	/**
	 * sprJPSound
	 * */
	/*this.sound_title.setCallback(function(){
		var view = self;
		SESoundPlay(SE_BUTTON);
		// console.log("sound_title");

		if(kData.bSoundBGM){
			BGMSoundStop();
			kData.bSoundBGM = false;
			kData.bSoundSE = false;
			view.soundOn_title.visible = false;
			view.soundOff_title.visible = true;
		} else {
			kData.bSoundBGM = true;
			kData.bSoundSE = true;
			BGMSoundPlay(BGM_BG, true);
			view.soundOn_title.visible = true;
			view.soundOff_title.visible = false;
		}
		MG.NM.LocalSave(kData);

		// SaveDataInClient();
	});*/
	/**
	 * sprJPSound
	 * */

	//게임스낵 FontLoad(this.title_title, "Ⓒ MoviSoft Co.,Ltd. All Rights Reserved.", 0, 620, {fontFamily:"Arial", fontSize:"20px", fill:"#ffffff", stroke:"#000000", strokeThickness:3, wordWrap:true, wordWrapWidth:iMSX});
	FontLoad(this.title_title, Define.txtVer, -350, 1261/2, { fontFamily:'Arial', fontSize:"15px", fill: '#A0A0FF' }, 0, 0.5);

	// this.hideTitle();
	this.title_title.visible = false;
};

// 하트 체크하고 게임 시작...
// GAME.view.prototype.StartGame_Enable = function () {
//     this.onClicked_StartGameButton = false;
// };

// GAME.view.prototype.SetFalse_StartGameButton = function () {
//     this.onClicked_StartGameButton = false;
// };

/*GAME.view.prototype.StartGame_CallBack = function (data) {
	SESoundPlay(SE_BUTTON);
	GAME.view.setUserGun(kData.iUserOwnGun);
	GAME.setGunBuff(kData.iUserOwnGun);
	GAME.view.heart.initHeart();		// 게임 진입하면 기본으로 주는 Stage용 하트
	GAME.view.heart.showHeart();
	GAME.view.hideTitle();
	GAME.engineInst.state = GAME.state.STATE_GAME;
	GAME.view.conElevator();
	GAME.view.pause_btnPause.sprite.visible = true;
	// view.btn_showRank.sprite.visible = true;
	BGMSoundStop();
	SESoundPlay(SE_SPEEDUP);
	GAME.startFloor = kData.iClimbFloor;
	MG.NM.SendGamePlay(1);
	GSInstant.logEvent("Start", "string", "");
	//PopconGame.Sdk.log("2");
	this.onClicked_StartGameButton = false;
};*/

GAME.view.prototype.showTitle = function(){
	BGMSoundPlay(BGM_BG, true);
	GAME.playSpine(this.title_title, "title_ani_in");
	/*if (kData.iBestFloor > 10) {
		this.skip_title.sprite.visible = true;
		this.shop_title.position.y = 500;
	}*/

	if(kData.iBestFloor > 0)	this.txtBest_title.text = GAME.table_language["etc01"][Define.LANG] + " " + kData.iBestFloor.toString() + "F";
	else						this.txtBest_title.text = "No Record";

	/*if (kData.bSoundBGM) {
		this.soundOn_title.visible = true;
		this.soundOff_title.visible = false;
	} else {
		this.soundOn_title.visible = false;
		this.soundOff_title.visible = true;
	}*/

	this.checkAlert(this.alert_title);

	if (this.bShowUseOnceMorePop && !GAME.bOnAdGun)
		this.showUseOnceMoreAdGunPop();
	/**
	 *  아래 param에 몇일차 접속인지 값 넣어줘야 함.
	 * */
//	if(bNeedNewScoreEvent && bFacebookContextSelected){
//		showRankingPage();
//	}
};

GAME.view.prototype.checkAlert = function(alertSprite){
	var i = 0;
	var length = this.gunData.length;
	for(i=0;i<length;++i){
		if(this.buyRecords[i] === undefined || this.buyRecords[i] === null){//안 산건데~~
			if(kData.iBestFloor < this.gunData[i].floor) break;
			if(kData.iUserOwnGold >= this.gunData[i].price
				&& kData.iBestFloor >= this.gunData[i].floor){
				alertSprite.visible = true;
				return;
			}
		}
	}
	alertSprite.visible = false;
};

GAME.view.prototype.hideTitle = function(){
	this.title_title.visible = false;
};

GAME.view.prototype.gameOverInit = function(){
	var self = this;
	this.msg_over = new PIXI.spine.Spine(spines.txtGameOver);
	this.bloodAnim_over = new PIXI.spine.Spine(spines.bloodEffect);
	this.msgSpeed_over = new PIXI.spine.Spine(spines.txtSpeedUp);

	this.msgSpeed_over.state.addListener({
		complete:function (_entry) {
			switch(_entry.animation.name){
				case "text_speedup":
					setTimeout(function () {
						SpinePlay_1(self.elevator, "elevator_up_end");
					}, 500);
			}
		}
	});

	this.viewContainer.addChild(this.bloodAnim_over);
	this.viewContainer.addChild(this.msg_over);
	this.viewContainer.addChild(this.msgSpeed_over);

	this.bloodAnim_over.state.addListener({
		complete:function(){
			if(GAME.cur_life !== 0) self.bloodAnim_over.visible = false;
		}
	});

	this.msg_over.state.addListener({
		complete: function () {
			var view = self;
			if (GAME.view.currentGameOverType != "self" && GAME.view.cont_Count == 0) {
				GAME.view.showContPop();
			} else {
				if((++Define.iADCnt)%3 == 1)
					ShowAD("basic", 'result');
				console.log('call gameOverSave2');
				gameOverSave(function () {
					var showOverPop = view.showOverPop.bind(view);
					setTimeout(showOverPop, 800);
				});
			}
		}
	});

	this.msg_over.position.set(GAME.iCSX, GAME.iCSY);
	this.bloodAnim_over.position.set(GAME.iCSX, GAME.iCSY);
	this.msgSpeed_over.position.set(GAME.iCSX, GAME.iCSY);

	this.msg_over.visible = false;
	this.bloodAnim_over.visible = false;
	this.msgSpeed_over.visible = false;
};
//
// function doesConnectionExist() {
//     var xhr = new XMLHttpRequest();
//     var file = "https://www.kirupa.com/blank.png";
//     var randomNum = Math.round(Math.random() * 10000);
//
//     xhr.open('HEAD', file + "?rand=" + randomNum, true);
//     xhr.send();
//
//     xhr.addEventListener("readystatechange", processRequest, false);
//
//     function processRequest(e) {
//         if (xhr.readyState == 4) {
//             if (xhr.status >= 200 && xhr.status < 304) {
//                 alert("connection exists!");
//             } else {
//                 alert("connection doesn't exist!");
//             }
//         }
//     }
// }


var gameResultMoney = 0;
function gameOverSave (_callBack) {

	console.log("===== gameOverSave() =======");
	/*if ((GAME.stageFloor - GAME.startFloor) > 10) {
		MG.NM.SendGamePlay(101);
	}*/

	if(++GAME.gameOverCount >= 2)
	{
		GAME.gameOverCoun = 0;
		//	MG.NM.SendGamePlay(102);
	}

	kData.iClimbFloor = GAME.stageFloor;
	GAME.view.bNewScore = false;
	if(GAME.stageFloor>kData.iBestFloor) {
		kData.iBestFloor = GAME.stageFloor;
		GAME.view.bNewScore = true;
	}

	var lvData = undefined;
	var levelData = GAME.engineInst.stageManager.levelData;
	var remains = GAME.stageFloor%5;
	var tempStageLevel = 0;

	GAME.view.newBestSpine_over.skeleton.setToSetupPose();

	/*if (navigator.onLine == false){
		alert("현재 네트워크에 연결되어 있지 않습니다.");
		return;
	}*/

	/**
	 * 올라간 층에 대한 보상금 계산
	 * */
	if(GAME.stageFloor<=125){//테이블로 표현된 최대 층 수 : 125
		if(remains!==0){
			tempStageLevel = ((GAME.stageFloor/5)|0);
			if(tempStageLevel>24) lvData = levelData[levelData.length-1];
			else{
				for(i=0;i<levelData.length;++i){
					if(i===tempStageLevel){
						lvData = levelData[i];
						break;
					}
				}
			}

			GAME.accStageGold = lvData.gold + (lvData.add*(remains-1));
		}else{//5, 10층 등 각 레벨 끝 층..
			tempStageLevel = ((GAME.stageFloor/5)|0)-1;
			if(tempStageLevel>24) lvData = levelData[levelData.length-1];
			else{
				for(i=0;i<levelData.length;++i){
					if(i===tempStageLevel){
						lvData = levelData[i];
						break;
					}
				}
			}

			GAME.accStageGold = lvData.gold + (lvData.add*4);
		}
	}else{
		lvData = levelData[levelData.length-1];
		GAME.accStageGold = (lvData.gold + (lvData.add*4)) + ((GAME.stageFloor-125)*lvData.add);
	}

	var plusGold = Math.ceil(GAME.accStageGold*GAME.getMoneyBuff_pct);
	GAME.view.txt_buffGold.text = "+$ "+plusGold.formatMoney(0);
	gameResultMoney = GAME.accStageGold+plusGold;
	kData.iUserOwnGold += gameResultMoney;
	/**
	 * 올라간 층에 대한 보상금 계산 end
	 * */
	/**
	 * 저장 처리
	 * */
	//MG.NM.RankingAdd(kData.iBestFloor);
	MG.NM.end({type:'gameover'});
	
	//PopconGame.Sdk.regResultScore(GAME.stageFloor, "1", "floor");//현재점수쏘기
	
	MG.NM.LocalSave();
	if(_callBack!==undefined) _callBack();
}

GAME.view.prototype.gameOver = function(blood){
	this.pause_btnPause.sprite.visible = false;
	this.currentGameOverType = blood;
	if(blood === "blood"){
		// console.log("hit");
		GAME.playSpine(this.bloodAnim_over, "elevator_dead");
		GAME.playSpine(this.L_hand, "gun_1_hit"/*, false, 4*/);
		GAME.playSpine(this.R_hand, "gun_1_hit"/*, false, 4*/);
	}

	GAME.playSpine(GAME.view.msg_over, "game_over");
	SESoundPlay(SE_GAMEOVER);


	this.engine.state = GAME.state.STATE_OVER;
	this.engine.gameState = GAME.gameState.STATE_NONE;

	//죽은 상태 게임오버아님 //MSSDK.gameOver(); //게임스낵 게임오버
	// MG.NM.SaveData();//게임 오버 때 서버에 정보 저장
	// MG.NM.ForcedSaveData(true);
};

GAME.view.prototype.hideGameOver = function(){
	this.msg_over.visible = false;
	this.bloodAnim_over.visible = false;
};

GAME.view.prototype.elevatorInit = function(){
	var self = this;
	this.graphic_black = new PIXI.Graphics();
	this.viewContainer.addChild(this.graphic_black);
	this.graphic_black.beginFill(0x000000, 35/255);
	this.graphic_black.drawRect(0, 0, iMSX, iMSY);
	this.graphic_black.endFill();
	this.graphic_black.visible = false;

	this.spr_red = SpriteLoad(this.viewContainer, "back_red_light_2.png", iCSX, iCSY);
	this.spr_red.scale.set(4, 4);
	TweenMax.fromTo(this.spr_red, 0.5, {alpha:140/255}, {alpha:74/255, repeat:-1, yoyo:true});
	this.spr_red.visible = false;
	this.spr_black = SpriteLoad(this.viewContainer, "back_black_light.png", iCSX, iCSY);
	this.spr_black.scale.set(4, 4);
	this.spr_black.visible = false;

	this.spine_line = new PIXI.spine.Spine(spines.line);
	this.viewContainer.addChild(this.spine_line);
	this.spine_line.position.set(180, 130);
	GAME.playSpine(this.spine_line, "back_eff_type_1_electric", true, 0);
	this.spine_line.visible = false;

	this.arr_stageEffects = [];
	this.arr_stageEffects[0] = this.spine_line;
	this.arr_stageEffects[1] = this.spr_red;
	this.arr_stageEffects[2] = this.spr_black;

	this.elevator = new PIXI.spine.Spine(spines.elevator);
	this.viewContainer.addChild(this.elevator);
	this.elevator.position.set(iCSX, iCSY);
	this.elevator_bitTxt = createBitmapFont("65px NumFont", "0000", {x:iCSX-350, y:-600}, "center");//엘리베이터 상단의 녹색 비트맵 폰트
	this.elevator.addChild(this.elevator_bitTxt);
	this.elevator_bitTxt.visible = false;

	this.moveFloor_bitTxt = createBitmapFont("80px FloorFont", "00000", {x:iCSX, y:iCSY}, "center");//엘리베이터 올라갈 때 나오는 비트맵 폰트
	this.viewContainer.addChild(this.moveFloor_bitTxt);
	this.moveFloor_bitTxt.visible = false;

	this.pause_Spines[4] = this.elevator;

	//animation track set~
	this.elevator.state.addListener({
		complete:function(entry){
			var view = self;
			// switch(entry.trackIndex){
			// 	case 0://open
			//        view.engine.gameState = GAME.gameState.STATE_PLAY;
			// 		break;
			//    case 1://close
			//        view.upstair();
			//        break;
			//    case 2://upstair
			//        view.redSiren();
			//        break;
			// }
			switch(entry.animation.name){
				case "elevator_door_open":
					view.engine.gameState = GAME.gameState.STATE_PLAY;
					break;
				case "elevator_door_close":
					view.upstair();
					break;
				case "elevator_up_start":
					// console.log("elevator_idle");
					GAME.playSpine(view.elevator, "elevator_up_idle", true, 0, false);
					view.moveFloor_bitTxt.text = GAME.stageFloor.toString()+"f"; //층수//타이틀 크기
					view.moveFloor_bitTxt.visible = true;
					TweenLite.fromTo(view.moveFloor_bitTxt, 0.5, {x:iCSX, y:iCSY-640}, {x:iCSX, y:iCSY, ease:Elastic.easeOut
						, onComplete:function(){
							setTimeout(function(){
								var view = self;
								TweenLite.to(view.moveFloor_bitTxt, 0.1, {x:iCSX, y:iCSY+640, ease:Power0.easeNone, onComplete:function(){
										view.moveFloor_bitTxt.visible = false;

										// if(GAME.stageFloor % 5 === 1 && GAME.stageFloor > 5){//default
										//     GAME.playSpine(view.msgSpeed_over, "text_speedup");
										//     SESoundPlay(SE_SPEEDUP);
										// } else {
										//     setTimeout(function () {
										//         SpinePlay_1(view.elevator, "elevator_up_end");
										//     }, 500);
										// }//default

										// if(true){//test
										//     GAME.playSpine(view.msgSpeed_over, "text_speedup");
										//     SESoundPlay(SE_SPEEDUP);
										// } else {
										//     setTimeout(function () {
										//         SpinePlay_1(view.elevator, "elevator_up_end");
										//     }, 500);
										// }//test
										if(!GAME.bGetAll){
											if(GAME.stageFloor === GAME.data_getNextGun.floor){//새로운 총 해금
												// console.log("gun_unlock");
												SpinePlay_1(self.spine_gunUnlock, "gun_unlock_ani_in");
												checkNextGunSlot();
											} else {
												if(GAME.stageFloor % 5 === 1 && GAME.stageFloor > 5){//default
													GAME.playSpine(view.msgSpeed_over, "text_speedup");
													SESoundPlay(SE_SPEEDUP);
												} else {
													setTimeout(function () {
														SpinePlay_1(view.elevator, "elevator_up_end");
													}, 500);
												}//default
											}//default//unlock
										} else {
											setTimeout(function () {
												SpinePlay_1(view.elevator, "elevator_up_end");
											}, 500);
										}
									}});
							}, 300);
						}});
					break;
				case "elevator_up_end":
					view.redSiren();
					// SESoundStop(SE_ELEVATOR_MOVE)
					break;
			}
		},

		event:function (entry, event) {
			var name = event.data.name;
			if(name === "closeup"){
				self.elevator_bitTxt.visible = true;
				self.elevator_bitTxt.text = GAME.stageFloor.toString() + "F"; //층수//엘리베이터 표시

				if(kData.iBestFloor<GAME.stageFloor){
					MSSDK.scoreUpdate(GAME.stageFloor); //게임스낵점수
				}
			} else if(name === "door_open"){
				SESoundPlay(SE_ELEVATOR_OPEN);
			} else if(name === "door_close"){
				SESoundPlay(SE_ELEVATOR_CLOSE);
			} else if(name === "arrive"){
				SESoundPlay(SE_ELEVATOR_ARRIVE);
			}
		}
	});


};

GAME.view.prototype.initUnlockSpine = function () {
	var self = this;
	this.spine_gunUnlock = new PIXI.spine.Spine(spines.gunUnlock);
	this.viewContainer.addChild(this.spine_gunUnlock);
	this.spine_gunUnlock.position.set(iCSX, iCSY);

	this.spine_gunUnlock.state.addListener({
		complete:function (_entry) {
			switch(_entry.animation.name){
				case "gun_unlock_ani_in":
					// console.log("unlock_in");
					SpinePlay_1(self.spine_gunUnlock, "gun_lock_ani_idle", 0, true);
					setTimeout(function () {
						// console.log("unlock_timeout");
						SpinePlay_1(self.spine_gunUnlock, "gun_unlock_ani_out");
					}, 1000);
					break;
				case "gun_unlock_ani_out":
					if(GAME.stageFloor % 5 === 1 && GAME.stageFloor > 5){//default
						GAME.playSpine(self.msgSpeed_over, "text_speedup");
						SESoundPlay(SE_SPEEDUP);
					} else {
						SpinePlay_1(self.elevator, "elevator_up_end");
					}
					break;
			}
		}
	});

	this.spr_gun = SpriteLoad(this.spine_gunUnlock.children[this.spine_gunUnlock.skeleton.findSlotIndex("gun_shop_slot")], "gun_shop_slot_1.png", 0, 0);
	this.spr_gun.rotation = 3.14;
	this.spr_gun.scale.set(-0.8, 0.8);
	this.spr_gun.position.y = 10;

	this.txt_unlock_name = FontLoad(this.spine_gunUnlock.children[this.spine_gunUnlock.skeleton.findSlotIndex("text_gun_name")], "name", 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"65px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});
	this.txt_unlock_name.scale.x = -1;
	this.txt_unlock_name.rotation = 3.14;

	this.txt_buff_single = FontLoad(this.spine_gunUnlock.children[this.spine_gunUnlock.skeleton.findSlotIndex("text_gun_option_single")], "name", 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});
	this.txt_buff_0 = FontLoad(this.spine_gunUnlock.children[this.spine_gunUnlock.skeleton.findSlotIndex("text_gun_option_double_1")], "name", 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});
	this.txt_buff_1 = FontLoad(this.spine_gunUnlock.children[this.spine_gunUnlock.skeleton.findSlotIndex("text_gun_option_double_2")], "name", 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});

	this.txt_desc = FontLoad(this.spine_gunUnlock.children[this.spine_gunUnlock.skeleton.findSlotIndex("text_info")], GAME.table_language["newgun"][Define.LANG], 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});

	this.txt_buff_single.scale.x = -1;
	this.txt_buff_single.rotation = 3.14;
	this.txt_buff_single.position.y = 20;
	this.txt_buff_0.scale.x = -1;
	this.txt_buff_0.rotation = 3.14;
	this.txt_buff_0.position.y = 10;
	this.txt_buff_1.scale.x = -1;
	this.txt_buff_1.rotation = 3.14;
	this.txt_buff_1.position.y = 5;

	this.txt_desc.scale.x = -1;
	this.txt_desc.rotation = 3.14;

	this.pause_Spines.push(this.spine_gunUnlock);
};

GAME.view.prototype.hideElevator = function(){
	this.elevator.visible = false;
};

/*GAME.view.prototype.conElevator = function(){
	if(this.engine.state !== GAME.state.STATE_GAME) return;

	var self = this;

	if(kData.bFirstPlay){
		//to do : tutorial
		var view = self;
		this.showHand();
		GAME.playSpine(view.elevator, "elevator_door_open", false, 0, false, 1.2);
		this.showTutorial();
	} else {
		this.redSiren();
	}
};*/
GAME.view.prototype.conElevator = function () {
	if (this.engine.state !== GAME.state.STATE_GAME) return;
	this.redSiren();
};

GAME.view.prototype.showMapEffect = function(max_number){
	for(i=0;i<3;++i){
		this.arr_stageEffects[i].visible = false;
	}
	this.graphic_black.visible = false;

	if(Math.random()<=0.4){//맵효과가 나올 확률 40%
		switch(GAME.iPrevMapEff = randRangeFromInt(0, max_number)){//randRangeFromInt(0, max_number)
			case 0://깜박이는 복도...
				this.arr_stageEffects[0].visible = true;
				// this.arr_stageEffects[randRangeFromInt(0, max_number)].visible = true;
				break;
			case 1://붉은 복도...
				this.graphic_black.visible = true;
				this.graphic_black.alpha = 85/255;
				this.arr_stageEffects[0].visible = true;
				this.arr_stageEffects[1].visible = true;
				break;
			case 2://어두운 복도...
				this.graphic_black.visible = true;
				this.graphic_black.alpha = 35/255;
				this.arr_stageEffects[0].visible = true;
				this.arr_stageEffects[2].visible = true;
				break;
		}
		GAME.bPrevMapEff = true;
		// console.log("iPrevMapEff:"+GAME.iPrevMapEff);
	}
};

GAME.view.prototype.setPrevMapEffect = function(mapEffectNum){//이전 맵 효과 세팅 함수...
	for(i=0;i<3;++i){
		this.arr_stageEffects[i].visible = false;
	}
	this.graphic_black.visible = false;

	switch(mapEffectNum){
		case 0://깜박이는 복도...
			this.arr_stageEffects[0].visible = true;
			// this.arr_stageEffects[randRangeFromInt(0, max_number)].visible = true;
			break;
		case 1://붉은 복도...
			this.graphic_black.visible = true;
			this.graphic_black.alpha = 85/255;
			this.arr_stageEffects[0].visible = true;
			this.arr_stageEffects[1].visible = true;
			break;
		case 2://어두운 복도...
			this.graphic_black.visible = true;
			this.graphic_black.alpha = 35/255;
			this.arr_stageEffects[0].visible = true;
			this.arr_stageEffects[2].visible = true;
			break;
	}
};

GAME.view.prototype.redSiren = function(){//game start trigger
	var self = this;
	this.elevator_bitTxt.visible = false;
	GAME.playSpine(this.sirenRed, "elevator_siren_red", true);
	SESoundPlay(SE_SIREN_RED);
	this.heart.showHeart();
	this.showHand();

	if (GAME.bPrevMapEff && GAME.bContinue) {
		this.setPrevMapEffect(GAME.iPrevMapEff);
		GAME.bPrevMapEff = false;
		GAME.bContinue = false;
	} else {
		if (GAME.stageFloor > 5 && GAME.stageFloor < 11)
			this.showMapEffect(0);
		else if (GAME.stageFloor > 10 && GAME.stageFloor < 16)
			this.showMapEffect(1);
		else if (GAME.stageFloor > 15)
			this.showMapEffect(2);
	}

	this.elevator.state.clearTracks();

	setTimeout(function () {
		var view = self;
		view.sirenRed.visible = false;
		GAME.playSpine(view.elevator, "elevator_door_open", false, 0, false, 1.2);
	}, 1000);
};

GAME.view.prototype.blueSiren = function(){//stage end trigger
	// console.log("blue siren");
	var self = this;
	this.engine.gameState = GAME.gameState.STATE_UPSTAIR;
	GAME.playSpine(this.sirenBlue, "elevator_siren_blue");
	SESoundPlay(SE_SIREN_BLUE);
	++GAME.stageFloor;

	/**
	 * 새로운 총기 획득 저장.
	 * */
	if(!GAME.bGetAll){
		if(GAME.stageFloor === GAME.data_getNextGun.floor){
			kData.arrBuyRecords[GAME.iNextGetGunNum] = true;
			MG.NM.LocalSave();
			setUnlockGunData();
		}//default//unlock
	}//default

	if(GAME.stageFloor % 5 === 1 && GAME.stageFloor > 5)
		++GAME.stageLevel;

	setTimeout(function(){
		GAME.playSpine(self.elevator, "elevator_door_close", false, 0, false/*, 1.2*/);//elevator_door_close
	}, 1500);
};

GAME.view.prototype.upstair = function(){
	// console.log("upstair");
	var self = this;
	GAME.playSpine(this.elevator, "elevator_up_start", false, 0, false/*, 2.5*/);//default

	// this.moveFloor_bitTxt.text = GAME.stageFloor.toString()+"f";
	// this.moveFloor_bitTxt.visible = true;
	// TweenLite.fromTo(this.moveFloor_bitTxt, 0.5, {x:iCSX, y:iCSY-640}, {x:iCSX, y:iCSY, ease:Elastic.easeOut
	// 	, onComplete:function(){
	// 		setTimeout(function(){
	// 			var view = self;
	// 			TweenLite.to(view.moveFloor_bitTxt, 0.1, {x:iCSX, y:iCSY+640, ease:Power0.easeNone, onComplete:function(){
	// 				view.moveFloor_bitTxt.visible = false;
	// 				if(GAME.stageFloor % 5 === 1 && GAME.stageFloor > 5){
	// 					GAME.playSpine(view.msgSpeed_over, "text_speedup");
	// 					SESoundPlay(SE_SPEEDUP);
	// 				}
	//
	//                // GAME.iNextGetGunNum = GAME.stageFloor;//test
	//                // if(GAME.stageFloor === GAME.iNextGetGunNum){//새로운 총 해금
	//                //     SpinePlay_1(view.spine_gunUnlock, "gun_unlock_ani_in");
	//                // }
	// 			}});
	// 		}, 300);
	// 	}});
	SESoundPlay(SE_ELEVATOR_MOVE);

	this.outHand();
	this.engine.stageManager.createStage();
};

GAME.view.prototype.sirenInit = function(){
	this.sirenBlue = new PIXI.spine.Spine(spines.blueSiren);
	this.sirenRed = new PIXI.spine.Spine(spines.redSiren);

	this.pause_Spines[0] = this.sirenBlue;
	this.pause_Spines[1] = this.sirenRed;

	this.viewContainer.addChild(this.sirenBlue);
	this.viewContainer.addChild(this.sirenRed);

	var self = this;

	this.sirenBlue.state.addListener({
		complete:function(){
			self.elevator_bitTxt.visible = false;
		}
	});

	this.sirenBlue.visible = false;
	this.sirenRed.visible = false;
};

// 게임 오버 Blooming
GAME.view.prototype.gameOverPopInit = function(){

	this.popBG_over = SpriteLoad(this.viewContainer, "popup_ui_3.png", iCSX, iCSY);

	// 캐시워크하트 보이고 추가버튼 Blooming
	/*this.spr_userGoldBG = SpriteLoad(this.popBG_over, "gold_ui.png", -125, -430);
	this.spr_userGoldBG.scale.set(0.8, 0.8);
	this.spr_icon = SpriteLoad(this.spr_userGoldBG, "heart.png", -150, 0);
	this.cont_btnPlusHeart = new GUMA.button(this.spr_userGoldBG, "btn_plus.png", 150, 0);
	//this.btn_showShop.sprite.visible = false;
	GAME.select_txtGameOverHeartCount = FontLoad(this.spr_userGoldBG, kData.iHeart.toString(), 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:4});
	this.cont_btnPlusHeart.setCallback(function(){
		//console.log("==== Press gameOverPopInit Plus Heart Button Blooming ====");
		//인게임에서 상점호출
		Define.HeartShop();
	});*/

	this.txtTitle_over = FontLoad(this.popBG_over, GAME.table_language["popup02"][Define.LANG], 0, -345
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"}, 0.5, 0.5, 500);
	this.floorBG_over = SpriteLoad(this.popBG_over, "game_over_popup_slot_1.png", 95.5, -130);
	this.floorTitle_over = SpriteLoad(this.floorBG_over, "game_over_floor.png", -210, 0, 0, 0.5);
	this.txtUserFloor_over = FontLoad(this.floorBG_over, "0F", 195, 2
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"}, 1, 0.5);
	this.bestBG_over = SpriteLoad(this.popBG_over, "game_over_popup_slot_2.png", 110, 15);
	this.bestTitle_over = SpriteLoad(this.bestBG_over, "game_over_best.png", -200, 0, 0, 0.5);
	this.txtUserBest_over = FontLoad(this.bestBG_over, "0F", 180, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"}, 1, 0.5);
	this.rewardBG_over = SpriteLoad(this.popBG_over, "game_over_popup_slot_2.png", 110, 120);
	this.rewardTitle_over = SpriteLoad(this.rewardBG_over, "game_over_reward.png", -200, 0, 0, 0.5);
	this.txtUserReward_over = FontLoad(this.rewardBG_over, "$0", 180, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"}, 1, 0.5);

	/*this.spr_RankGrade = SpriteLoad(this.bestBG_over, "img/SILVER.png", -100, 0);
	this.spr_RankGrade.scale.set(0);
	this.spr_RankGrade.visible = false;*/
	//this.spr_RankGrade.visible = MG.NM.bNaverLogin;

	// 하트 소비하고 이어하기
	var engine = this.engine;
	this.replay_over = new GUMA.button(this.popBG_over, "game_over_replay_btn.png", 30, 275);
	//this.replay_over.setOriginScale(0.73);
	//if(kData.iHeart <= 0) this.replay_over.buttonMode = false;
	this.replay_over.setCallback(function () {
		console.log('replay_over'); //리스타트
		/*if (GAME.view.bShowUseOnceMorePop && !GAME.bOnAdGun) {
			GAME.view.showUseOnceMoreAdGunPop(function () {
				GAME.view.currentOnceMoreFreeCallback = function () {};
				GAME.view.closeUseOnceMoreAdGunPop();
				engine.replay();
			});
		}else{
			engine.replay();
		}*/
		SESoundPlay(SE_BUTTON);
		if (GAME.view.bShowUseOnceMorePop && !GAME.bOnAdGun){
			GAME.view.showUseOnceMoreAdGunPop(function () {
				if(kData.iBestFloor>10){
					GAME.setGunBuff(kData.iUserOwnGun);
					this.showSelectPop();
				}else{
					GAME.view.GameStartInit(true);
				}
			}.bind(this), function(){
				if(kData.iBestFloor>10){
					GAME.setGunBuff(kData.iUserOwnGun);
					this.showSelectPop();
				}else{
					GAME.view.GameStartInit(true);
				}
			}.bind(this));
		}else{
			if(kData.iBestFloor>10){
				GAME.setGunBuff(kData.iUserOwnGun);
				this.showSelectPop();
			}else{
				GAME.view.GameStartInit(true);
				//	GAME.view.StartGame_CallBack();
			}
		}
	}.bind(this));

	this.goTitle_over = new GUMA.button(this.popBG_over, "home_btn.png", 200, 275);
	this.goTitle_over.setOriginScale(0.73);
	this.goTitle_over.setCallback(engine.goTitle, engine);

	this.alert_over = SpriteLoad(this.goTitle_over.sprite, "new_icon.png", 70, -70);

	this.tower_over = SpriteLoad(this.popBG_over, "popup_tower.png", -230, 37);
	this.bestFloor_over = SpriteLoad(this.tower_over, "tower_best_floor_ui.png", 0, -100);
	this.curFloor_over = SpriteLoad(this.tower_over, "tower_now_floor_ui.png", 0, -230);

	this.txtBestFloor_over = FontLoad(this.bestFloor_over, GAME.table_language["etc01"][Define.LANG]+"\n"+kData.iBestFloor.toString()+"Fs", -20, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"25px", fill:"#0DD4F2", stroke:"#000000", strokeThickness:4, align:"center"}, 1, 0.5);//#0DD4F2
	this.txtCurFloor_over = FontLoad(this.curFloor_over, GAME.stageFloor.toString()+"F", 20, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"30px", fill:"#FFE400", stroke:"#000000", strokeThickness:4}, 0, 0.5);//#FFE400
	this.txt100_over = FontLoad(this.tower_over, "100F", 0, -260
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"25px", fill:"#FF0000", stroke:"#000000", strokeThickness:4});


	this.newBestSpine_over = new PIXI.spine.Spine(spines.newBest);
	this.popBG_over.addChild(this.newBestSpine_over);

	this.newBestSpine_over.state.addListener({
		complete:function(entry){
			switch(entry.animation.name){
				case "animation_in"://in
					setTimeout(function(){
						// if(GAME.view.bNewScore) GAME.ui_ranking.checkRanking();
						GAME.playSpine(GAME.view.newBestSpine_over, "animation_out", false, 0);
					}, 1000);
					break;
				case "animation_out"://out
					if (GAME.bPlusMoney && GAME.accStageGold !== 0) {
						GAME.view.spr_gunBuff.visible = true;
						GAME.view.txt_buffGold.visible = true;
						TweenMax.fromTo(GAME.view.txt_buffGold, 1, {y: 0, alpha: 1}, {
							y: -35, alpha: 0, onComplete: function () {
								if (!GAME.view.popBG_over.visible) return;
								SpinePlay_1(GAME.view.spine_gunBuff, "popup_eff", 0, true);
								GAME.buttonShield.visible = false;
								if (GAME.bOnAdGun) offAdGun();
							}
						});
					} else if (GAME.bReceivedDoubleReward && GAME.accStageGold > 0) {
						GAME.view.txt_buffGold.visible = true;
						TweenMax.fromTo(GAME.view.txt_buffGold, 1, {y: 0, alpha: 1}, {
							y: -35, alpha: 0, onComplete: function () {
								if (!GAME.view.popBG_over.visible) return;
								GAME.buttonShield.visible = false;
								if (GAME.bOnAdGun) offAdGun();
							}
						});
					} else {
						GAME.buttonShield.visible = false;
						if (GAME.bOnAdGun) offAdGun();
					}
					break;
			}
		}
	});

	/*this.btn_elevator = new GUMA.button(this.popBG_over, "elevator_btn.png", -100, 275);
	this.btn_elevator.setOriginScale(0.73);
	this.btn_elevator.setCallback(function () {
		if (GAME.view.bShowUseOnceMorePop && !GAME.bOnAdGun){
			GAME.view.showUseOnceMoreAdGunPop(function () {
				GAME.view.currentOnceMoreFreeCallback = function () {};
				GAME.view.closeUseOnceMoreAdGunPop();
				GAME.view.showSelectPop();
			});
		}else{
			GAME.view.showSelectPop();
		}
	});*/

	this.spine_gunBuff = new PIXI.spine.Spine(spines.sparkle);
	this.rewardBG_over.addChild(this.spine_gunBuff);

	this.spr_gunBuff = SpriteLoad(this.rewardBG_over, "gun_bonus_icon.png", -200, -20);
	this.txt_buffGold = FontLoad(this.rewardBG_over, "buffGold", 180, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#7cd268", stroke:"#000000", strokeThickness:4, fontWeight:"bold"}, 1, 0.5);
	this.txt_buffGold.visible = false;

	this.popBG_over.visible = false;
};

GAME.view.prototype.showOverPop = function(){

	//this.SetCashWalkHeart();       // Blooming : 초기화면의 캐시워크 하트 카운트 업데이트
	this.bStopCntFlag = true;
	this.popBG_over.visible = true;
	this.spine_gunBuff.visible = false;

	kData.iClimbFloor = GAME.stageFloor;

	// var lvData = undefined;
	// var levelData = GAME.engineInst.stageManager.levelData;
	// var remains = GAME.stageFloor%5;
	// var tempStageLevel = 0;

	this.newBestSpine_over.skeleton.setToSetupPose();

	// /**
	//  * 올라간 층에 대한 보상금 계산
	//  * */
	// if(GAME.stageFloor<=125){//테이블로 표현된 최대 층 수 : 125
	//    if(remains!==0){
	//        tempStageLevel = ((GAME.stageFloor/5)|0);
	//        if(tempStageLevel>24) lvData = levelData[levelData.length-1];
	//        else{
	//            for(i=0;i<levelData.length;++i){
	//                if(i===tempStageLevel){
	//                    lvData = levelData[i];
	//                    break;
	//                }
	//            }
	//        }
	//
	//        GAME.accStageGold = lvData.gold + (lvData.add*(remains-1));
	//    }else{//5, 10층 등 각 레벨 끝 층..
	//        tempStageLevel = ((GAME.stageFloor/5)|0)-1;
	//        if(tempStageLevel>24) lvData = levelData[levelData.length-1];
	//        else{
	//            for(i=0;i<levelData.length;++i){
	//                if(i===tempStageLevel){
	//                    lvData = levelData[i];
	//                    break;
	//                }
	//            }
	//        }
	//
	//        GAME.accStageGold = lvData.gold + (lvData.add*4);
	//    }
	// }else{
	//     lvData = levelData[levelData.length-1];
	//    GAME.accStageGold = (lvData.gold + (lvData.add*4)) + ((GAME.stageFloor-125)*lvData.add);
	// }
	//
	var plusGold = Math.ceil(GAME.accStageGold*GAME.getMoneyBuff_pct);
	// var reward = Math.round((GAME.accStageGold + (GAME.accStageGold*GAME.getMoneyBuff_pct)));
	// var reward = GAME.accStageGold+plusGold;
	// // /**
	// //  * 올라간 층에 대한 보상금 계산 end
	// //  * */

	this.txtUserReward_over.text = "$" + gameResultMoney.formatMoney(0);

	// console.log("reward: "+reward);
	// kData.iUserOwnGold += gameResultMoney;
	gameResultMoney = 0;
	// SaveDataInClient();

	this.checkAlert(this.alert_over);

	// this.bNewScore = false;
	// if(GAME.stageFloor > kData.iBestFloor){//신기록을 새웠을 때....
	//     this.bNewScore = true;//신기록 여부 구분...
	// // kData.iBestFloor = GAME.stageFloor;
	// // SaveDataInClient();
	// }

	GAME.buttonShield.visible = true;
	this.setOverPopEff();

	// if(loginTF === 1) MG.NM.SaveRaking();
	// else {
	//     if(MG.NM.networkState!==NET_STATE.LOCALHOST)
	//         MG.NM.ModalCall(MODAL_BUTTON_TYPE.OKCANCEL, GAME.table_language["ranking05"][Define.LANG], MG.NM.JoinMember, null);
	// }

	this.bStopCntFlag = true;
	this.popBG_over.visible = true;
	this.txtUserFloor_over.text = GAME.stageFloor.toString() + "F";
	this.txtUserBest_over.text = kData.iBestFloor.toString() + "F";

	//this.spr_RankGrade.position.x = (-(this.txtUserBest_over.width)-(this.spr_RankGrade.width*0.5)-15)+this.txtUserBest_over.position.x;

	this.txtUserFloor_over.visible =false;
	this.txtUserBest_over.visible = false;
	this.txtUserReward_over.visible = false;
//	this.spr_RankGrade.visible = false;

	this.txt_buffGold.visible = false;
//	this.btn_elevator.sprite.visible = (kData.iBestFloor>10);			// 층 선택 창 버튼 : Blooming
	if(GAME.bPlusMoney&&GAME.accStageGold!==0){
		// this.spr_gunBuff.visible = true;
		this.txt_buffGold.text = "+$ "+plusGold.formatMoney(0);
		// TweenMax.fromTo(this.txt_buffGold, 1, {y:0, alpha:1}, {y:-35, alpha:0});
		// SpinePlay_1(this.spine_gunBuff, "popup_eff", 0, true);
	} else {
		this.spr_gunBuff.visible = false;
		// this.txt_buffGold.visible = false;
		this.spine_gunBuff.visible = false;
	}

//	if(this.btn_elevator.sprite.visible){
//		this.btn_elevator.sprite.position.x = -50;
//		this.replay_over.sprite.position.x = 100;
//		this.goTitle_over.sprite.position.x = 250;
//	} else {
//		this.replay_over.sprite.position.x = 30;
//		this.goTitle_over.sprite.position.x = 200;
//	}

	// MG.NM.SaveRaking();

	//MG.NM.LocalSave();//skip처리할지 고민 //gameOverSave (_callBack) 에서 저장하고 있으므로
};

GAME.view.prototype.setOverPopEff = function(){         //게임 오버 창 연출 함수...
	var destY = 305 - (5.35 * (GAME.stageFloor-1));
	var fakeY = destY;
	var self = this;
	if(destY <=  -230) destY = -230;
	TweenLite.fromTo(this.curFloor_over, 0.5, {y:305}, {y:destY, ease:Power0.easeNon, delay: 0.5});
	TweenLite.fromTo(this.fakeY, 0.5, {y:305}, {y:fakeY, ease:Power0.easeNone, onComplete:function(){
			var view = self;
			if(!view.popBG_over.visible) return;

			view.txtCurFloor_over.text = GAME.stageFloor.toString()+"F";
			view.txtUserFloor_over.visible =true;
			//	view.spr_RankGrade.visible = true;
			view.txtUserBest_over.visible = true;
			view.txtUserReward_over.visible = true;
			view.bStopCntFlag = false;
			// GAME.buttonShield.visible = false;

			MSSDK.scoreUpdate(GAME.stageFloor); //게임스낵 타임어텍 점수

			// if(GAME.bPlusMoney&&GAME.accStageGold!==0){
			//     GAME.view.txt_buffGold.visible = true;
			//     TweenMax.fromTo(GAME.view.txt_buffGold, 1, {y:0, alpha:1}, {y:-35, alpha:0, onComplete:function () {
			//         if(!GAME.view.popBG_over.visible) return;
			//         if(loginTF === 1) {
			//             // MG.NM.SaveRaking();
			//             GAME.ui_ranking.cb_setRankingPop();
			//         } else {
			//             if(MG.NM.networkState!==NET_STATE.LOCALHOST)
			//                 MG.NM.ModalCall(MODAL_BUTTON_TYPE.OKCANCEL, GAME.table_language["ranking05"][Define.LANG], MG.NM.JoinMember, null);
			//         }
			//     }});
			//     SpinePlay_1(GAME.view.spine_gunBuff, "popup_eff", 0, true);
			// }
			//
			// if(view.bNewScore)
			// 	GAME.playSpine(view.newBestSpine_over, "animation_in", false, 0);

			if (!view.bNewScore) {
				if (GAME.bPlusMoney && GAME.accStageGold !== 0) {
					GAME.view.spr_gunBuff.visible = true;
					GAME.view.txt_buffGold.visible = true;
					TweenMax.fromTo(GAME.view.txt_buffGold, 1, {y: 0, alpha: 1}, {
						y: -35, alpha: 0, onComplete: function () {
							if (!GAME.view.popBG_over.visible) return;
							SpinePlay_1(GAME.view.spine_gunBuff, "popup_eff", 0, true);

							GAME.buttonShield.visible = false;
							if (GAME.bOnAdGun) offAdGun();
						}
					});
				} else if (GAME.bReceivedDoubleReward && GAME.accStageGold !== 0) {
					GAME.view.txt_buffGold.visible = true;
					TweenMax.fromTo(GAME.view.txt_buffGold, 1, {y: 0, alpha: 1}, {
						y: -35, alpha: 0, onComplete: function () {
							if (!GAME.view.popBG_over.visible) return;
							GAME.buttonShield.visible = false;
							if (GAME.bOnAdGun) offAdGun();
						}
					});

				} else {
					GAME.buttonShield.visible = false;
					if (GAME.bOnAdGun) offAdGun();
				}
			} else {
				GAME.playSpine(view.newBestSpine_over, "animation_in", false, 0);
				//	sendScoreInfoToServer(myFacebookID,kData.iBestFloorRealTime);
				bNeedNewScoreEvent = true;
			}
		}, delay: 0.5});

	var floor = kData.iBestFloor;
	if(floor>100) floor = 100;
	this.bestFloor_over.position.y = 294 - (5.35 * floor);
	this.txtBestFloor_over.text = GAME.table_language["etc01"][Define.LANG]+"\n"+kData.iBestFloor.toString()+"F";
};

GAME.view.prototype.countFloor = function(){
	var floor = Math.abs(Math.ceil((305-this.fakeY.y) / 5.35));
	if(floor < 1) floor = 1;
	this.txtCurFloor_over.text = floor.toString()+"F";
};

GAME.view.prototype.replay = function(){
	// console.log("replay");
	this.bStopCntFlag = false;
	this.newBestSpine_over.visible = false;
	this.pause_btnPause.sprite.visible = true;
	// this.btn_showRank.sprite.visible = true;
	this.popBG_over.visible = false;

	this.sirenRed.skeleton.setToSetupPose();
	this.sirenRed.state.clearTracks();
	this.sirenBlue.skeleton.setToSetupPose();
	this.sirenBlue.state.clearTracks();
	this.elevator.skeleton.setToSetupPose();
	this.elevator.state.clearTracks();

	this.msg_over.visible = false;
	this.bloodAnim_over.visible = false;

	GAME.engineInst.stageManager.arr_banIndex.length = 0;
	GAME.engineInst.stageManager.banCount = 2;

	for(i=0;i<3;++i){
		this.arr_stageEffects[i].visible = false;
	}

	this.heart.initHeart();		// 게임 진입하면 기본으로 주는 Stage용 하트
	this.elevator.skeleton.setToSetupPose();
	// GAME.ui_ranking.bFlag_showAgain = false;//랭크 업 연출 한 번 보기 초기화 flag
};

GAME.view.prototype.shotTarget = function(direction){//shop에서 타겟을 쏘는 함수
	var self = this;
	if(direction === 0){//left
		if(!this.leftTargetFall){
			GAME.playSpine(this.leftTarget_shop, "target_hit", false);
			this.leftTargetFall = true;

			setTimeout(function(){
				self.leftTargetFall = false;
				if(self.leftTarget_shop.visible === false) return;
				GAME.playSpine(self.leftTarget_shop, "target_rise", false);
			}, 500);
		}
	} else {
		if(!this.rightTargetFall){
			GAME.playSpine(this.rightTarget_shop, "target_hit", false);
			this.rightTargetFall = true;

			setTimeout(function(){
				self.rightTargetFall = false;
				if(self.rightTarget_shop.visible === false) return;
				GAME.playSpine(self.rightTarget_shop, "target_rise", false);
			}, 500);
		}
	}
};

GAME.view.prototype.loadingPageInit = function () {
//	var tutorialResources = PIXI.loader.resources["assets/atlas/tutorial_atlas.json"].textures;
	var idForLoadingImage = 4;
	var loadingSprite = SpriteLoad(this.tutorialContainer, "loading.png", 0, 0);
	loadingSprite.anchor.x = 0.5;
	loadingSprite.anchor.y = 0.5;
	loadingSprite.position.x = renderer.width / 2;
	loadingSprite.position.y = renderer.height / 2;
	this.loadingContainer = new PIXI.Container();
	this.loadingContainer.alpha = 0.8;
	this.loadingContainer.addChild(loadingSprite);
	animate();
	function animate() {
		requestAnimationFrame(animate);
		loadingSprite.rotation += 0.1;
	}
};

GAME.view.prototype.showLoadingPage = function () {
	GAME.view.viewContainer.addChild(GAME.view.loadingContainer);
};

GAME.view.prototype.hideLoadingPage = function () {
	GAME.view.viewContainer.removeChild(GAME.view.loadingContainer);
};

GAME.view.prototype.tutorialInit = function(){
	//if(kData.isTutorialFinished) return;
//	var originWidth, originHeight;
	this.tutorialContainer = new PIXI.Container();
//	this.tutorialResources = PIXI.loader.resources["assets/atlas/tutorial_atlas.json"].textures;
	this.tutorialPage1 = SpriteLoad(this.tutorialContainer, "assets/img_"+Define.LANG+"/tuto_1.jpg", iCSX, iCSY);
	this.tutorialPage1.interactive = true;

	this.tutorialPage2 = SpriteLoad(this.tutorialContainer, "assets/img_"+Define.LANG+"/tuto_2.jpg", iCSX, iCSY);
	this.tutorialPage2.interactive = true;
	this.tutorialPage2.visible = false;

	this.tutorialPage3 = SpriteLoad(this.tutorialContainer, "assets/img_"+Define.LANG+"/tuto_3.jpg", iCSX, iCSY);
	this.tutorialPage3.interactive = true;
	this.tutorialPage3.visible = false;

	this.tutorialPage4 = SpriteLoad(this.tutorialContainer, "assets/img_"+Define.LANG+"/tuto_4.jpg", iCSX, iCSY);
	this.tutorialPage4.interactive = true;
	this.tutorialPage4.visible = false;


	this.tutorialLeftButton = SpriteLoad(this.tutorialContainer, "btn_left_arrow.png", iCSX-200, iCSY+540);
	this.tutorialLeftButton.interactive = true;
	this.tutorialLeftButton.buttonMode = true;
	this.tutorialLeftButton.on('tap', this.showLeftPageOnTutorial);
	this.tutorialLeftButton.on('click', this.showLeftPageOnTutorial);

	this.tutorialRightButton = SpriteLoad(this.tutorialContainer, "btn_right_arrow.png", iCSX+200, iCSY+540);
	this.tutorialRightButton.interactive = true;
	this.tutorialRightButton.buttonMode = true;
	this.tutorialRightButton.on('tap', this.showRightPageOnTutorial);
	this.tutorialRightButton.on('click', this.showRightPageOnTutorial);


	this.tutorialCloseButton = SpriteLoad(this.tutorialContainer, "home_btn.png", iCSX+200, iCSY+540);
	this.tutorialCloseButton.scale.set(0.75);
	this.tutorialCloseButton.interactive = true;
	this.tutorialCloseButton.buttonMode = true;
	this.tutorialCloseButton.on('tap', function(){
		console.log('tutorialCloseButton tap');
		SESoundPlay(SE_BUTTON);
		this.hideTutorial();
	}.bind(this));
	this.tutorialCloseButton.on('click',  function(){
		console.log('tutorialCloseButton click');
		SESoundPlay(SE_BUTTON);
		this.hideTutorial();
	}.bind(this));

	this.hideTutorial();
};

GAME.view.prototype.showTutorial = function(){
	kData.isTutorialFinished = true;
	MG.NM.LocalSave();
	this.tutorialPage1.visible = true;
	this.tutorialPage2.visible = false;
	this.tutorialPage3.visible = false;
	this.tutorialPage4.visible = false;
	this.tutorialLeftButton.visible = false;
	this.tutorialRightButton.visible = true;
	this.tutorialCloseButton.visible = false;
	this.currentTutorialPageNum = 1;
	this.viewContainer.addChild(this.tutorialContainer);
};

GAME.view.prototype.hideTutorial = function(){
	this.tutorialPage1.visible = true;
	this.tutorialPage2.visible = false;
	this.tutorialPage3.visible = false;
	this.tutorialPage4.visible = false;
	this.tutorialLeftButton.visible = false;
	this.tutorialRightButton.visible = true;
	this.currentTutorialPageNum = 1;
	this.tutorialCloseButton.visible = false;

	this.viewContainer.removeChild(this.tutorialContainer);
	if (this.isNeedToStartGameAfterTutorial) {
		this.isNeedToStartGameAfterTutorial = false;
	}
};

GAME.view.prototype.showLeftPageOnTutorial = function () {
	SESoundPlay(SE_BUTTON);
	if (GAME.view.currentTutorialPageNum > 1) {
		GAME.view.loadTutorialPage(GAME.view.currentTutorialPageNum - 1)
	}
};

GAME.view.prototype.showRightPageOnTutorial = function () {
	SESoundPlay(SE_BUTTON);
	if (GAME.view.currentTutorialPageNum < 4) {
		GAME.view.loadTutorialPage(GAME.view.currentTutorialPageNum + 1)
	}
};

GAME.view.prototype.loadTutorialPage = function (pageNum) {
	GAME.view.currentTutorialPageNum = pageNum;
	switch (pageNum) {
		case 1:
			GAME.view.tutorialPage1.visible = true;
			GAME.view.tutorialPage2.visible = false;
			GAME.view.tutorialPage3.visible = false;
			GAME.view.tutorialPage4.visible = false;

			GAME.view.tutorialLeftButton.visible = false;
			GAME.view.tutorialRightButton.visible = true;
			GAME.view.tutorialCloseButton.visible = false;

			return;
		case 2:
			GAME.view.tutorialPage1.visible = false;
			GAME.view.tutorialPage2.visible = true;
			GAME.view.tutorialPage3.visible = false;
			GAME.view.tutorialPage4.visible = false;
			GAME.view.tutorialLeftButton.visible = true;
			GAME.view.tutorialRightButton.visible = true;
			GAME.view.tutorialCloseButton.visible = false;

			return;
		case 3:
			GAME.view.tutorialPage1.visible = false;
			GAME.view.tutorialPage2.visible = false;
			GAME.view.tutorialPage3.visible = true;
			GAME.view.tutorialPage4.visible = false;
			GAME.view.tutorialLeftButton.visible = true;
			GAME.view.tutorialRightButton.visible = true;
			GAME.view.tutorialCloseButton.visible = false;

			return;

		case 4:
			GAME.view.tutorialPage1.visible = false;
			GAME.view.tutorialPage2.visible = false;
			GAME.view.tutorialPage3.visible = true;
			GAME.view.tutorialPage4.visible = true;
			GAME.view.tutorialLeftButton.visible = true;
			GAME.view.tutorialRightButton.visible = false;
			GAME.view.tutorialCloseButton.visible = true;

			return
	}
};

GAME.view.prototype.shotTuto = function(dir){
	var self = this;
	var stageManager = this.engine.stageManager;
	if (GAME.bMobile) {
		switch (dir) {
			case 0:
				TweenLite.to(this.mobile_l_hand, 0.5, {
					scaleY: 0.8, onComplete: function () {
						self.fire(dir);
						stageManager.hit(dir);
						TweenLite.to(self.mobile_l_hand, 0.5, {scaleY: 1});
					}
				});
				break;
			case 1:
				TweenLite.to(this.mobile_r_hand, 0.5, {
					scaleY: 0.8, onComplete: function () {
						self.fire(dir);
						stageManager.hit(dir);
						TweenLite.to(self.mobile_r_hand, 0.5, {scaleY: 1});
					}
				});
				break;
		}
	} else {
		switch (dir) {
			case 0:
				GAME.playSpine(this.tuto_leftKey, "btn_arrow_2_click");
				this.tuto_leftKey.state.addListener({
					complete: function () {
						self.tuto_leftKey.state.clearListeners();
						self.fire(dir);
						stageManager.hit(dir);
						GAME.playSpine(self.tuto_leftKey, "btn_arrow_2_idle");
					}
				});
				break;
			case 1:
				GAME.playSpine(this.tuto_rightKey, "btn_arrow_1_click");
				this.tuto_rightKey.state.addListener({
					complete: function () {
						self.tuto_rightKey.state.clearListeners();
						self.fire(dir);
						stageManager.hit(dir);
						GAME.playSpine(self.tuto_rightKey, "btn_arrow_1_idle");
					}
				});
				break;
			case 2:
				GAME.playSpine(this.tuto_spaceKey, "btn_space_click");
				this.tuto_spaceKey.state.addListener({
					complete: function () {
						self.tuto_spaceKey.state.clearListeners();
						GAME.playSpine(self.tuto_spaceKey, "btn_space_idle");

						self.showPausePop();
						setTimeout(hidePauseTuto, 1000);

						function hidePauseTuto() {
							self.pause_bg.visible = false;
							self.engine.state = GAME.state.STATE_GAME;
							self.tl.resume();
							self.pause_bPopOn = false;
						}
					}
				});
				break;
		}
	}
};

GAME.view.prototype.detectDevice = function(){
	var filter = "win16|win32|win64|mac";
	this.bMobile = (filter.indexOf(navigator.platform.toLowerCase())<0);
};

GAME.view.prototype.pausePopInit = function(){
	//this.pause_bg = SpriteLoad(this.viewContainer, "popup_ui_1.png", iCSX, iCSY);
	this.pause_bg = SpriteSliceLoad(this.viewContainer, "popup.png", iCSX, iCSY, 690, 430, 322, 199, 147, 74);
	var _yoff = -2000; //게임스낵예외처리
	this.pause_btnSound = new GUMA.button(this.pause_bg, "popup_sound_on_btn.png", -200, 30+_yoff);

	//this.pause_btnResume = new GUMA.button(this.pause_bg, "retry_btn.png", 0, 30);
	this.pause_btnResume = new GUMA.button(this.pause_bg, "retry_btn.png", -200, 30);

	this.pause_btnTitle = new GUMA.button(this.pause_bg, "home_btn.png", 200, 30);

	this.pause_texSoundOn = new PIXI.Texture.fromFrame("popup_sound_on_btn.png");
	this.pause_texSoundOff = new PIXI.Texture.fromFrame("popup_sound_off_btn.png");

	this.pause_txtTitle = FontLoad(this.pause_bg, GAME.table_language["popup04"][Define.LANG], 0, -180
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:4}, 0.5, 0.5, 500);

	var self = this;
	function getButton(){
		GAME.bGetButton = true;
	}

	this.pause_btnPause = new GUMA.button(this.viewContainer, "pause_btn.png", iCSX, iCSY+525);
	this.pause_btnPause.setOriginScale(0.75, 0.75);
	this.pause_btnPause.setCallback(function(){
		console.log('pause_btnPause');
		SESoundPlay(SE_BUTTON);
		var view = self;
		if(kData.bFirstPlay || view.engine.state === GAME.state.STATE_OVER) return;
		view.pause_bPopOn = !view.pause_bPopOn;
		if(view.pause_bPopOn){
			view.showPausePop();
		} else {
			view.hidePausePop();
		}
	});
	this.pause_btnPause.setDownAction(getButton);

	this.pause_btnResume.setCallback(function(){
		console.log('pause_btnResume');
		SESoundPlay(SE_BUTTON);
		if(kData.bFirstPlay) return;
		self.hidePausePop();
	});
	this.pause_btnResume.setDownAction(getButton);

	this.pause_btnTitle.setCallback(function(){
		console.log('pause_btnTitle');
		SESoundPlay(SE_BUTTON);
		var view = self;
		if(kData.bFirstPlay) return;
		// view.hidePausePop();
		// view.gameOver("self");
		// view.bPause_out = true;
		// view.bSelfOver = true;
		view.showExitPop();
	});
	this.pause_btnTitle.setDownAction(getButton);

	this.pause_btnSound.setCallback(function(){
		console.log('pause_btnSound');
		SESoundPlay(SE_BUTTON);
		if(kData.bFirstPlay) return;
		kData.bSoundBGM = !kData.bSoundBGM;
		kData.bSoundSE = !kData.bSoundSE;
		// SaveDataInClient();
		MG.NM.LocalSave();

		if(kData.bSoundSE){
			self.pause_btnSound.sprite.texture = self.pause_texSoundOn;
		} else {
			self.pause_btnSound.sprite.texture = self.pause_texSoundOff;
		}
	});
	this.pause_btnSound.setDownAction(getButton);

	this.pause_bg.visible = false;
	this.pause_btnPause.sprite.visible = false;
	this.bSelfOver = false;//일시정지에서 스스로 게임오버 됐는지 확인하는 변수....
};

GAME.view.prototype.showPausePop = function(){
	this.pause_bg.visible = true;
	this.pause_bPopOn = true;
	this.pauseGame();
};

GAME.view.prototype.pauseGame = function(){
	// console.log("pauseGAME");
	this.engine.state = GAME.state.STATE_PAUSE;
	this.tl = TimelineLite.exportRoot();
	this.tl.pause();
	this.pause_btnPause.timeLine.resume();

	var i = 0;
	var length = this.pause_Spines.length;
	for(i=0;i<length;++i){
		this.pause_Spines[i].state.timeScale = 0;
	}

	if(kData.bSoundSE){
		this.pause_btnSound.sprite.texture = this.pause_texSoundOn;
	} else {
		this.pause_btnSound.sprite.texture = this.pause_texSoundOff;
	}
};

GAME.view.prototype.hidePausePop = function(){
	this.pause_bg.visible = false;
	this.pause_bPopOn = false;
	this.resumeGame();
};

GAME.view.prototype.resumeGame = function(){
	// console.log("resumeGAME");
	this.engine.state = GAME.state.STATE_GAME;
	this.tl.resume();

	var i = 0;
	var length = this.pause_Spines.length;
	for(i=0;i<length;++i){
		this.pause_Spines[i].state.timeScale = 1;
	}
};

GAME.view.prototype.confirmPopInit = function () {
	this.currentConfirmPopYesFunction = function () {
	};
	this.currentConfirmPopNoFunction = function () {
	};

	this.confirmPopUpContainer = new PIXI.Container();
//	var confirmPopUpBg = SpriteLoad(this.confirmPopUpContainer, "popup_ui_1.png", iCSX, iCSY);
	var confirmPopUpBg = SpriteSliceLoad(this.confirmPopUpContainer, "popup.png", iCSX, iCSY, 690, 430, 322, 199, 147, 74);
	FontLoad(confirmPopUpBg, "Confirm", 0, -180
		, {
			fontFamily: GAME.fontName[Define.LANG],
			fontSize: "50px",
			fill: "#ffffff",
			stroke: "#000000",
			strokeThickness: 4
		});
	this.confirmPopupText = FontLoad(confirmPopUpBg, "", 20, -30
		, {
			fontFamily: GAME.fontName[Define.LANG],
			fontSize: "40px",
			fill: "#ffffff",
			stroke: "#000000",
			strokeThickness: 4
		});


	var btn_confirmPopYes = new GUMA.button(confirmPopUpBg, "btn_shop_ok.png", 160, 100);
	FontLoad(btn_confirmPopYes.sprite, GAME.table_language["button01"][Define.LANG], 0, 0
		, {
			fontFamily: GAME.fontName[Define.LANG],
			fontSize: "35px",
			fill: "#ffffff",
			stroke: "#000000",
			strokeThickness: 4
		});

	var btn_confirmPopNo = new GUMA.button(confirmPopUpBg, "btn_shop_no.png", -160, 100);
	FontLoad(btn_confirmPopNo.sprite, GAME.table_language["button02"][Define.LANG], 0, 0
		, {
			fontFamily: GAME.fontName[Define.LANG],
			fontSize: "35px",
			fill: "#ffffff",
			stroke: "#000000",
			strokeThickness: 4
		});

	btn_confirmPopYes.setCallback(function () {
		console.log('btn_confirmPopYes');
		GAME.view.closeConfirmPopWithReaction(true);
	});
	btn_confirmPopNo.setCallback(function () {
		console.log('btn_confirmPopNo');
		GAME.view.closeConfirmPopWithReaction(false);
	});
};

GAME.view.prototype.showConfirmPopup = function (text, yesCallback, noCallback) {
	this.confirmPopupText.text = text;
	this.currentConfirmPopYesFunction = yesCallback;
	this.currentConfirmPopNoFunction = noCallback;
	GAME.view.viewContainer.addChild(GAME.view.confirmPopUpContainer);
};

GAME.view.prototype.closeConfirmPopWithReaction = function (yesOrNo) {
	GAME.view.viewContainer.removeChild(this.confirmPopUpContainer);
	(yesOrNo == true) ?
		this.currentConfirmPopYesFunction() :
		this.currentConfirmPopNoFunction();
};

/*GAME.view.prototype.useOnceMoreAdGunPopInit = function () {
	this.currentOnceMoreFreeCallback = function () {};
	this.bFirstShowUseOnceMorePop = false;	// 최초에 한번만 나오게 한다.
	this.bShowUseOnceMorePop = false;

	this.useOnceMoreAdGunContainer = new PIXI.Container();
	var shield = SpriteLoad(this.useOnceMoreAdGunContainer, "white.png", iCSX, iCSY);
	shield.width = iMSX;
	shield.height = iMSY;
	shield.interactive = true;
	shield.tint = 0x000000;
	shield.alpha = 0.5;

//	var bg = SpriteLoad(this.useOnceMoreAdGunContainer, "popup_ui_1.png", iCSX, iCSY);
	var bg = SpriteSliceLoad(this.useOnceMoreAdGunContainer, "popup.png", iCSX, iCSY, 690, 900, 322, 199, 147, 74);
	var title = FontLoad(bg, GAME.table_language["popupPremiumGun"][Define.LANG], 0, -415,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "50px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});

	var question = FontLoad(bg, GAME.table_language["popupPremiumGunText"][Define.LANG], 0, -285,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "35px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4, align: "center"});

//	Define.LANG = "en";
	var sprSlotBG = SpriteLoad(bg, "gun_shop_slot_new_2.png", 0, 0);
	FontLoad(sprSlotBG, GAME.table_language["popupPremiumGun"][Define.LANG], 0, -188,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "35px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});
	FontLoad(sprSlotBG, GAME.table_language["gunbuff"+GAME.gunData[8].skill1][Define.LANG].replace("{0}", GAME.gunData[8].value1), 0, -120,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "22px", fill: "#0DD4F2", stroke: "#000000", strokeThickness: 4});
	FontLoad(sprSlotBG, GAME.table_language["gunbuff"+GAME.gunData[8].skill2][Define.LANG].replace("{0}", GAME.gunData[8].value2), 0, -70,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "22px", fill: "#99CC00", stroke: "#000000", strokeThickness: 4});
	SpriteLoad(sprSlotBG, GAME.gunData[8].image+".png", 1, 61);

	var btnCancel = new GUMA.button(bg, "btn_close.png", -110, 320);
	var txt = FontLoad(btnCancel.sprite, GAME.table_language["button02"][Define.LANG], 0, 0,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "40px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});
	if(Define.LANG == "en")
		txt.style.fontSize = "30px";
	btnCancel.setCallback(function(){
		SESoundPlay(SE_BUTTON);
		if(this.cbNo) this.cbNo();
		GAME.view.closeUseOnceMoreAdGunPop();
	}.bind(this));

	var btn_free = new GUMA.button(bg, "ad_view_btn_2.png", 110, 320);
	btn_free.setCallback(function(){
		SESoundPlay(SE_BUTTON);
		// todo : 콜백방식을 변경하는 작업중에 있다.
		ShowAD("reward", "shopADGun", function(){
			onAdGun();
			if(this.cbYes)	this.cbYes();
			GAME.view.closeUseOnceMoreAdGunPop();
		}, function(){
			ShowToast("warning", GAME.table_language["ad1"][Define.LANG]);
		});
	}.bind(this));
	FontLoad(btn_free.sprite, GAME.table_language["free"][Define.LANG], 0, 50,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "25px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});

	// todo : 치트키..
	/!*setTimeout(function(){
		this.showUseOnceMoreAdGunPop(function(){
			GAME.view.currentOnceMoreFreeCallback = function () {};
		});
	}.bind(this), 1000);*!/
};*/
GAME.view.prototype.useOnceMoreAdGunPopInit = function () {
	this.currentOnceMoreFreeCallback = function () {};
	this.bFirstShowUseOnceMorePop = false;	// 최초에 한번만 나오게 한다.
	this.bShowUseOnceMorePop = false;

	this.useOnceMoreAdGunContainer = new PIXI.Container();
	var shield = SpriteLoad(this.useOnceMoreAdGunContainer, "white.png", iCSX, iCSY);
	shield.width = iMSX;
	shield.height = iMSY;
	shield.interactive = true;
	shield.tint = 0x000000;
	shield.alpha = 0.5;

	var bg = SpriteLoad(this.useOnceMoreAdGunContainer, "popup_premium.png", iCSX, iCSY-80);

//	Define.LANG = "en";
	var question = FontLoad(bg, GAME.table_language["popupPremiumGunText"][Define.LANG], 0, -140,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "30px", fill: "#ffffff", align: "center"});


	FontLoad(bg, GAME.table_language["gunbuff"+GAME.gunData[8].skill1][Define.LANG].replace("{0}", GAME.gunData[8].value1), 0, -35,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "32px", fill: "#00fff6"});
	FontLoad(bg, GAME.table_language["gunbuff"+GAME.gunData[8].skill2][Define.LANG].replace("{0}", GAME.gunData[8].value2), 0, 5,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "32px", fill: "#00fff6"});

	var btnCancel = new GUMA.button(bg, "btn_close.png", -120, 520);
	var txt = FontLoad(btnCancel.sprite, GAME.table_language["button02"][Define.LANG], 0, 0,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "40px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});
	if(Define.LANG == "en")
		txt.style.fontSize = "30px";
	btnCancel.setCallback(function(){
		console.log('btnCancel');
		SESoundPlay(SE_BUTTON);
		if(this.cbNo) this.cbNo();
		GAME.view.closeUseOnceMoreAdGunPop();
	}.bind(this));

	var btn_free = new GUMA.button(bg, "ad_view_btn_2.png", 120, 520);
	btn_free.setCallback(function(){
		console.log('btn_free');
		SESoundPlay(SE_BUTTON);
		// todo : 콜백방식을 변경하는 작업중에 있다.
		BGMSoundPause();
		ShowAD("reward", "shopADGun", function(){ //프리미엄건
			MSSDK.audioIsEnabled(function (onoff){
				if(onoff) {
					BGMSoundPlay(BGM_BG, true);
				}
			});
			onAdGun();
			if(this.cbYes)	this.cbYes();
			GAME.view.closeUseOnceMoreAdGunPop();
		}, function(){
			MSSDK.audioIsEnabled(function (onoff){
				if(onoff) {
					BGMSoundPlay(BGM_BG, true);
				}
			});
			if(true) { //실패콜백
				MG.alert("", GAME.table_language["ad1"][Define.LANG]);
				//ShowToast("warning", GAME.table_language["ad1"][Define.LANG]);
			}
			// if(true){ //강제로 총구매 시도 //여긴 프리미엄건 아님 //공고를 보면, 프리미엄건으로, 라이프2개증가, 돈획득50%증가
			// 	onAdGun();
			// 	if(this.cbYes)	this.cbYes();
			// 	GAME.view.closeUseOnceMoreAdGunPop();
			// }
		}, false);
	}.bind(this));
	FontLoad(btn_free.sprite, GAME.table_language["free"][Define.LANG], 0, 50,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "25px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});
};

GAME.view.prototype.showUseOnceMoreAdGunPop = function (cbYes, cbNo) {
	this.viewContainer.addChild(this.useOnceMoreAdGunContainer);
	this.bShowUseOnceMorePop = false;

	this.cbYes = cbYes;
	this.cbNo = cbNo;
//	this.currentOnceMoreFreeCallback = callback;
//	this.onceMore_btnCancel.setCallback_once(callback);
};

GAME.view.prototype.closeUseOnceMoreAdGunPop = function () {
//	this.currentOnceMoreFreeCallback = function(){};
	this.cbYes = undefined;
	this.cbNo = undefined;
	this.viewContainer.removeChild(GAME.view.useOnceMoreAdGunContainer);
};

// 부활 Continue 창 (Blooming)
GAME.view.prototype.contPopInit = function(){
	var self = this;
	this.contPopContainer = new PIXI.Container();
	var cont_bg = SpriteSliceLoad(this.contPopContainer, "popup.png", iCSX, iCSY, 690, 450, 322, 199, 147, 74);
	FontLoad(cont_bg, GAME.table_language["popup01"][Define.LANG], 0, -190,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "50px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});

	var cont_btnAd = new GUMA.button(cont_bg, "ad_view_btn_2.png", 0, 75);
	FontLoad(cont_btnAd.sprite, "FREE", 0, 50,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "28px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});
	cont_btnAd.setCallback(function () {
		console.log('cont_btnAd');
		SESoundPlay(SE_BUTTON);
		ShowAD("reward", "continue", function(){
			var view = self;
			GAME.bContinue = true;
			GAME.view.closeContPop();
			GAME.engineInst.stageManager.curPattern = view.engine.stageManager.stagePattern;
			GAME.engineInst.stageManager.curMoveTime = view.engine.stageManager.revisionTime;
			GAME.engineInst.continue();
		}, function(){
			MG.alert("", GAME.table_language["ad1"][Define.LANG]);
		//	ShowToast("warning", GAME.table_language["ad1"][Define.LANG]);
		}, false);
		//	showAdForContinueGame();
	});

	this.cont_btnCont = new GUMA.button(cont_bg, "btn_continue.png", -220, 75);
	this.cont_btnCont.setCallback(function () {
		console.log('cont_btnCont');
		SESoundPlay(SE_BUTTON);
		var view = self;
		if (kData.iUserOwnGold < view.cont_needGold) {
			return;
		}
		kData.iUserOwnGold -= view.cont_needGold;
		GAME.bContinue = true;

		GAME.view.closeContPop();
		GAME.engineInst.stageManager.curPattern = view.engine.stageManager.stagePattern;
		GAME.engineInst.stageManager.curMoveTime = view.engine.stageManager.revisionTime;

		GAME.engineInst.continue();
	});

	var cont_btnClose = new GUMA.button(cont_bg, "close_btn.png", 220, 75);
	cont_btnClose.setCallback(function () {
		console.log('cont_btnClose');
		MSSDK.gameOver(); //게임스낵 게임오버

		SESoundPlay(SE_BUTTON);
		GAME.view.closeContPop();
		if((++Define.iADCnt)%3 == 1)
			ShowAD("basic", 'continue_close');
		console.log('call gameOverSave1');
		gameOverSave(function () {
			GAME.view.showOverPop();
		});
		//	GAME.view.showDoubleRewardAdPop();
	});

	this.spr_userGoldBG = SpriteLoad(cont_bg, "gold_ui.png", 0, -70);
	this.spr_goldIcon = SpriteLoad(this.spr_userGoldBG, "gold_icon.png", -210, 0);
	this.btn_showShop = new GUMA.button(this.spr_userGoldBG, "btn_plus.png", 210, 0);
	this.btn_showShop.sprite.visible = false;

	this.txt_userGold = FontLoad(this.spr_userGoldBG, "userGold", 0, 0,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "40px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});

	this.txt_needGold = FontLoad(this.cont_btnCont.sprite, "needGold", 0, 40,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "35px", fill: "#ff3000", stroke: "#000000", strokeThickness: 4});
	this.cont_needGold = 0;

	this.btn_showShop.setCallback(function () {
		console.log('btn_showShop');
		SESoundPlay(SE_BUTTON);
	});

	this.btn_showShop.setDownAction(function () {
		GAME.bGetButton = true;
	});

	FontLoad(cont_bg, GAME.table_language["continue"][Define.LANG], 0, 180,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "35px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4	}, 0.5, 0.5, 600);
};

GAME.view.prototype.showContPop = function () {
	GAME.view.viewContainer.addChild(GAME.view.contPopContainer);
	this.cont_Count = 1;
//	if (bInfiniteCont) this.cont_Count = 0;
	if (GAME.stageFloor >= 11 && GAME.stageFloor < 16) {
		this.cont_needGold = 50;
		this.txt_needGold.text = this.cont_needGold.formatMoney(0);
	} else if (GAME.stageFloor >= 101) {
		this.cont_needGold = 500;
		this.txt_needGold.text = this.cont_needGold.formatMoney(0);
	} else {
		this.cont_needGold = 50 + (Math.floor(((GAME.stageFloor - 10) / 5) | 0) * 25);
		this.txt_needGold.text = this.cont_needGold.formatMoney(0);
	}

	this.txt_userGold.text = kData.iUserOwnGold.formatMoney(0);
	this.setContAble();
};

GAME.view.prototype.setContAble = function () {
	if (kData.iUserOwnGold < this.cont_needGold) {
		this.cont_btnCont.setOriginTint(0x808080);
		this.txt_needGold.tint = 0x808080;
		this.txt_needGold.style.fill = "#ff3000";
	} else {
		this.cont_btnCont.setOriginTint(0xffffff);
		this.txt_needGold.tint = 0xffffff;
		this.txt_needGold.style.fill = "#ffffff";
	}
};

GAME.view.prototype.closeContPop = function () {
	GAME.view.viewContainer.removeChild(GAME.view.contPopContainer);
};


// 층 선택 창 Blooming
GAME.view.prototype.selectPopInit = function () {
	var self = this;

	this.select_shield = new PIXI.Graphics();
	this.viewContainer.addChild(this.select_shield);
	this.select_shield.beginFill(0x000000, 0.5);
	this.select_shield.drawRect(0, 0, 720, 1280);
	this.select_shield.endFill();
	this.select_shield.interactive = true;

//	this.select_bg = SpriteLoad(this.viewContainer, "popup_ui_2.png", iCSX, iCSY);
	this.select_bg = SpriteSliceLoad(this.viewContainer, "popup.png", iCSX, iCSY, 690, 865, 322, 199, 147, 74);
	this.select_bg.interactive = true;
	FontLoad(this.select_bg, GAME.table_language["selpoptitle"][Define.LANG], 0, -395,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "50px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4	}, 0.5, 0.5, 500);

	// 취소버튼
	this.select_btnCancel = new GUMA.button(this.select_bg, "close_btn.png", 295, -388, undefined, 0.5, 0.5, 0.6, 0.6);
//	this.select_btnCancel.sprite.width = 90;
//	this.select_btnCancel.sprite.height = 90;
	this.select_btnCancel.setCallback(function () {
		console.log('select_btnCancel');
		SESoundPlay(SE_BUTTON);
		//	var view = self;
		//	view.select_shield.visible = false;
		//	view.select_bg.visible = false;
		//	view.engine.stageManager.init();
		//	view.engine.stageManager.createStage();
		GAME.view.GameStartInit(true);
	});

	// 달러 표시
	this.select_userGoldBG = SpriteLoad(this.select_bg, "gold_ui.png", 0, -280);
	this.sprDaller = SpriteLoad(this.select_userGoldBG, "gold_icon.png", 0, 0);
	this.select_txtUserGold = FontLoad(this.select_userGoldBG, kData.iUserOwnGold.formatMoney(0), 50, 0	,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "45px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4	});


	//	층수 표시
	this.select_floorBG = SpriteLoad(this.select_bg, "select_floor_slot_1.png", -90, -70);
	this.select_txtFloor = FontLoad(this.select_floorBG, GAME.stageFloor.toString() + "F", 0, 0,
		{ fontFamily: GAME.fontName[Define.LANG], fontSize: "80px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});

	// 업버튼
	this.select_btnUp = new GUMA.button(this.select_bg, "select_floor_up_btn.png", 190, -145);
	this.select_btnUp.setCallback(function () {
		console.log('select_btnUp');
		SESoundPlay(SE_BUTTON);
		self.engine.stageManager.skipStage(GAME.up);
	});

	// 다운버튼
	this.select_btnDown = new GUMA.button(this.select_bg, "select_floor_down_btn.png", 190, 0);
	this.select_btnDown.setCallback(function () {
		console.log('select_btnDown');
		SESoundPlay(SE_BUTTON);
		self.engine.stageManager.skipStage(GAME.down);
	});

	var txtBG = SpriteSliceLoad(this.select_bg, "popup_in.png", 0, 150, 500, 120, 34, 34, 34, 34);
	FontLoad(txtBG, GAME.table_language["selpop1"][Define.LANG], 0, 0,
		{ fontFamily: GAME.fontName[Define.LANG], fontSize: "30px", fill: "#ffffff", align:"center", stroke: "#000000", strokeThickness: 4});

	/*// 1층부터 시작버튼.
	this.btnStart = new GUMA.button(this.select_bg, "btn_1f.png", -200, 310);
	this.btnStart.setCallback(function () {
		SESoundPlay(SE_BUTTON);
		GAME.view.GameStartInit(true);
	}.bind(this));*/
	this.select_btnFree = new GUMA.button(this.select_bg, "ad_view_btn_2.png", -110, 310);
	FontLoad(this.select_btnFree.sprite, GAME.table_language["free"][Define.LANG], 0, 50,
		{	fontFamily: GAME.fontName[Define.LANG], fontSize: "28px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});
	this.select_btnFree.setCallback(function(){
		console.log('select_btnFree');
		BGMSoundPause();
		ShowAD("reward", "floor", function(){ //스킵 플로어
			GAME.view.GameStartInit();
		}, function(){
			MG.alert("", GAME.table_language["ad1"][Define.LANG]);
		//	ShowToast("warning", GAME.table_language["ad1"][Define.LANG]);
		}, false);
	});

	// 달러 지불버튼
	this.select_btnSkip = new GUMA.button(this.select_bg, "btn_ok.png", 110, 310);
	this.select_needGoldBG = SpriteLoad(this.select_btnSkip.sprite, "gold_icon.png", 0, -25);
	this.select_txtNeedGold = FontLoad(this.select_btnSkip.sprite, "$0", 0, 40,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "35px", fill: "#ff3000", stroke: "#000000", strokeThickness: 4});
	this.select_btnSkip.setCallback(function () {
		console.log('select_btnSkip');
		SESoundPlay(SE_BUTTON);
		if (kData.iUserOwnGold < self.select_needGold) {
			return;
		}

		var view = self;
		kData.iUserOwnGold -= view.select_needGold;
		//	SaveDataInClient();
		MG.NM.LocalSave();

		GAME.view.GameStartInit();
	});

//	this.skipStage = 0;
	this.spr_selectGunBuff = SpriteLoad(this.select_needGoldBG, "gun_bonus_icon.png", -145, -20);

	this.select_shield.visible = false;
	this.select_bg.visible = false;
};

GAME.view.prototype.GameStartInit = function (bInit) {
	MG.NM.start();
	if(bInit == true){
		GAME.stageLevel = 1;
		GAME.stageFloor = 1;
		GAME.startFloor = 1;
	}

	GAME.view.hideGameOver();
	GAME.view.popBG_over.visible = false;

	GAME.view.sirenRed.skeleton.setToSetupPose();
	GAME.view.sirenRed.state.clearTracks();
	GAME.view.sirenBlue.skeleton.setToSetupPose();
	GAME.view.sirenBlue.state.clearTracks();
	GAME.view.elevator.skeleton.setToSetupPose();
	GAME.view.elevator.state.clearTracks();

	GAME.view.cont_Count = 0;
	GAME.view.bSelfOver = false;
	GAME.view.bNewScore = false;
	GAME.view.setUserGun(kData.iUserOwnGun);
	GAME.setGunBuff(kData.iUserOwnGun);
	GAME.view.heart.initHeart();
	GAME.view.heart.showHeart();

	GAME.view.bSkip = true;
	GAME.view.engine.stageManager.createStage();
	GAME.view.hideTitle();
	GAME.engineInst.state = GAME.state.STATE_GAME;
	GAME.view.conElevator();
	GAME.view.pause_btnPause.sprite.visible = true;
	GAME.view.select_shield.visible = false;
	GAME.view.select_bg.visible = false;
	BGMSoundStop();
};

GAME.view.prototype.showSelectPop = function () {
	console.log('showSelectPop');
	this.select_txtUserGold.text = kData.iUserOwnGold.formatMoney(0);
	this.sprDaller.position.set(-20-this.select_txtUserGold.width/2, 0);
	this.setSelectPopText();

	if (GAME.bBuff_elevator) {
		this.select_txtNeedGold.style.fill = "#ffae57";
		this.select_txtNeedGold.style.fontSize = "50px";
		this.spr_selectGunBuff.visible = true;
	} else {
		this.select_txtNeedGold.style.fill = "#ff3000";
		this.select_txtNeedGold.style.fontSize = "35px";
		this.spr_selectGunBuff.visible = false;
	}

	if (kData.iUserOwnGold < this.select_needGold) {
		this.select_btnSkip.setOriginTint(0x808080);
		this.select_needGoldBG.tint = 0x808080;
		this.select_txtNeedGold.tint = 0x808080;
		this.select_txtNeedGold.style.fill = "#ff3000";
	} else {
		this.select_btnSkip.setOriginTint(0xffffff);
		this.select_needGoldBG.tint = 0xffffff;
		this.select_txtNeedGold.tint = 0xffffff;
		this.select_txtNeedGold.style.fill = "#ffffff";
	}

	this.select_shield.visible = true;
	this.select_bg.visible = true;

	//--rb,.
	if(GAME.stageFloor == 11){
		GAME.view.select_floorBG.position.x = 0;
		GAME.view.select_btnUp.sprite.visible = false;
		GAME.view.select_btnDown.sprite.visible = false;
	}else{
		GAME.view.select_floorBG.position.x = -90;
		GAME.view.select_btnUp.sprite.visible = true;
		GAME.view.select_btnDown.sprite.visible = true;
	}
	//--
};

GAME.view.prototype.setSelectPopText = function () {
	var levelData = GAME.engineInst.stageManager.levelData;
	var length = levelData.length;
	for (var i = 0; i < length; ++i) {
		if (GAME.skipStageLevel === levelData[i].level) {
			if (GAME.skipStageFloor <= 121) {
				GAME.skipGold = levelData[i].gold;
				this.select_needGold = Math.round(levelData[i].skip - (levelData[i].skip * GAME.discount_floorMove));
			}
			else {
				GAME.skipGold = levelData[i].gold + (levelData[i].add * (GAME.skipStageFloor - 121));
				var temp_needGold = Math.floor((GAME.skipGold * 2.9) * 0.1) * 10;
				this.select_needGold = Math.round(temp_needGold - (temp_needGold * GAME.discount_floorMove));
			}
			break;
		}
	}

	this.select_txtNeedGold.text = this.select_needGold.formatMoney(0);
	this.select_txtFloor.text = GAME.skipStageFloor.toString() + "F";

	GAME.stageFloor = GAME.skipStageFloor;
	GAME.stageLevel = GAME.skipStageLevel;
};

GAME.view.prototype.shopInit = function(){
	GAME.gunShopContainer = new GUMA.scrollView(this.shopBGContainer_shop, 700, 1150, -355+iCSX, -500+iCSY, "vertical");
	var self = this;
	var length = GAME.gunData.length;
	var i;
	for (i = 0; i < length; ++i) {
		this.shop_gunSlots[i] = new GAME.gunShopSlot((GAME.gunData[i].name !== "gun09") ? "gun_shop_slot_new.png" : "gun_shop_slot_new_2.png", GAME.gunData[i].image + ".png"
			, GAME.table_language[GAME.gunData[i].name][Define.LANG], GAME.gunData[i].price, GAME.gunData[i].floor, i, (GAME.gunData[i].name === "gun09"));
		this.shop_gunSlots[i].idx = i;

		if (GAME.gunData[i].name !== "gun09" && i > 0) GAME.gunShopContainer.viewLists[i + 1] = this.shop_gunSlots[i].slotBG;
		if (i === 0) GAME.gunShopContainer.viewLists[0] = this.shop_gunSlots[i].slotBG;
		if (GAME.gunData[i].name === "gun09") {
			GAME.gunShopContainer.viewLists[1] = this.shop_gunSlots[i].slotBG;
			GAME.iAdGunIdx = i;
		}
	}
	GAME.gunShopContainer.setList(5, 0, 2);

	this.shop_userInfoBG = SpriteLoad(this.shopBGContainer_shop, "shooting_range_ui.png", iCSX, -575+iCSY);
	this.shop_GoldIcon = SpriteLoad(this.shop_userInfoBG, "gold_icon.png", -280, -5);
	this.shop_txtUserOwnGold = FontLoad(this.shop_userInfoBG, kData.iUserOwnGold.formatMoney(0), 30, -5,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "40px", fill: '#ffffff', stroke: "#000000", strokeThickness: 4	}, 1, 0.5);

	this.shop_btnRifleRange = new GUMA.button(this.shop_userInfoBG, "shooting_range_change_btn.png", 190, -5);
	this.shop_btnRifleRange.setOriginScale(0.6, 0.6);
	this.shop_btnRifleRange.setCallback(function () {
		console.log('shop_btnRifleRange');
		SESoundPlay(SE_BUTTON);
		self.showRifleRange();
	});
	this.shop_btnRifleRange.setDownAction(function () {
		GAME.bGetButton = true;
	});

	this.shop_btnTitle = new GUMA.button(this.shop_userInfoBG, "close_btn.png", 290, -5);
	this.shop_btnTitle.setOriginScale(0.44, 0.44);
	this.shop_btnTitle.setCallback(function () {
		console.log('shop_btnTitle');
		SESoundPlay(SE_BUTTON);
		var view = self;
		view.hideShop();
		view.showTitle();
	});
	this.shop_btnTitle.setDownAction(function () {
		GAME.bGetButton = true;
	});

	this.shop_btnBackShop = new GUMA.button(this.shop_userInfoBG, "shooting_range_back_btn.png", 290, -5);
	this.shop_btnBackShop.setOriginScale(0.6, 0.6);
	this.shop_btnBackShop.setCallback(function () {
		console.log('shop_btnBackShop');
		SESoundPlay(SE_BUTTON);
		var view = self;
		view.hideRifleRange();
		view.showShop();
	});
	this.shop_btnBackShop.setDownAction(function () {
		GAME.bGetButton = true;
	});

	this.shop_btnBackShop.sprite.visible = false;

	this.shopBGContainer_shop.visible = false;
	GAME.gunShopContainer.scrollContainer.visible = false;
	GAME.gunShopContainer.viewArea.visible = false;

	GAME.ui_gunBuyPop = new UI_buyGunPop();
	this.viewContainer.addChild(GAME.ui_gunBuyPop.con_pop);
};

GAME.view.prototype.showShop = function(){
	this.shopBGContainer_shop.visible = true;
	GAME.gunShopContainer.scrollContainer.visible = true;
	GAME.gunShopContainer.viewArea.visible = true;
	var length = GAME.gunData.length;
	for(var i=0;i<length;++i){
		this.shop_gunSlots[i].setState(this.checkBuyRecords(i));
	}
	this.shop_btnTitle.sprite.visible = true;
	this.shop_btnRifleRange.sprite.visible = true;
	this.shop_btnBackShop.sprite.visible = false;
	this.shop_txtUserOwnGold.text = kData.iUserOwnGold.formatMoney(0);
	this.L_hand.visible = false;
	this.R_hand.visible = false;
};

GAME.view.prototype.hideShop = function(){
	this.shopBGContainer_shop.visible = false;
	GAME.gunShopContainer.scrollContainer.visible = false;
	GAME.gunShopContainer.viewArea.visible = false;
};

GAME.view.prototype.hideSlotsAndBtn = function(){
	var length = GAME.gunData.length;
	for(var i=0;i<length;++i){
		this.shop_gunSlots[i].hideSlot();
	}
	this.shop_btnRifleRange.sprite.visible = false;
	this.shop_btnTitle.sprite.visible = false;
	this.shop_btnBackShop.sprite.visible = true;
};

GAME.view.prototype.checkBuyRecords = function(idx){
	return (kData.arrBuyRecords[idx] !== undefined && kData.arrBuyRecords[idx] !== null);
};

GAME.view.prototype.selectCancel = function(idx){
	console.log('selectCancel()',idx);
	var slot = this.shop_gunSlots[idx];
	slot.selectSlot.visible = false;
	slot.state = slot.STATE.EQUIP;
	slot.setButton();
};

GAME.view.prototype.setSlotState = function(){
	var i = 0;
	var length = this.shop_gunSlots.length;
	for(i=0;i<length;++i){
		this.shop_gunSlots[i].setState(this.checkBuyRecords(i));
	}
};

GAME.view.prototype.rifleRangeInit = function () {
	this.shopBGContainer_shop = new PIXI.Container();
	this.viewContainer.addChild(this.shopBGContainer_shop);
	var self = this;

	function getButton() {
		GAME.bGetButton = true;
	}

	this.shopBG_shop = SpriteLoad(this.shopBGContainer_shop, "assets/img/gun_range.jpg", iCSX, iCSY);
	this.shopBG_shop.width = iMSX;
	this.shopBG_shop.height = iMSY;


	this.leftTarget_shop = new PIXI.spine.Spine(spines.target);
	this.rightTarget_shop = new PIXI.spine.Spine(spines.target);

	this.shopBGContainer_shop.addChild(this.leftTarget_shop);
	this.shopBGContainer_shop.addChild(this.rightTarget_shop);

	this.leftTarget_shop.position.set(-120+iCSX, iCSY);
	this.leftTarget_shop.scale.x = -1;
	this.rightTarget_shop.position.set(120+iCSX, iCSY);

	this.leftChange_shop = new GUMA.button(this.shopBGContainer_shop, "select_arrow_btn.png", -80+iCSX, 500+iCSY);
	this.leftChange_shop.setOriginScale(0.8, 0.8);
	this.leftChange_shop.setCallback(function () {
		console.log('leftChange_shop');
		SESoundPlay(SE_BUTTON);
		var view = self;
		GAME.bChangeGun = true;
		view.curShowNum -= 1;
		if (view.curShowNum < 0) {
			view.curShowNum = view.maxGunIdx;
		}

		view.txtGunName.text = GAME.table_language["gun0" + (view.curShowNum + 1).toString()][Define.LANG];

		GAME.playSpine(view.L_hand, "gun_1_out"/*, false, 2*/);
		GAME.playSpine(view.R_hand, "gun_1_out"/*, false, 2*/);
	});
	this.leftChange_shop.setDownAction(getButton);

	this.rightChange_shop = new GUMA.button(this.shopBGContainer_shop, "select_arrow_btn.png", 80+iCSX, 500+iCSY);
	this.rightChange_shop.setOriginScale(-0.8, 0.8);
	this.rightChange_shop.setCallback(function () {
		console.log('rightChange_shop');
		SESoundPlay(SE_BUTTON);
		var view = self;
		GAME.bChangeGun = true;
		view.curShowNum += 1;
		if (view.curShowNum > view.maxGunIdx) {
			view.curShowNum = 0;
		}

		view.txtGunName.text = GAME.table_language["gun0" + (view.curShowNum + 1).toString()][Define.LANG];

		GAME.playSpine(view.L_hand, "gun_1_out"/*, false, 2*/);
		GAME.playSpine(view.R_hand, "gun_1_out"/*, false, 2*/);
	});
	this.rightChange_shop.setDownAction(getButton);

	this.txtGunName = FontLoad(this.shopBGContainer_shop, "Desert Eagle", iCSX, 250+iCSY,
		{	fontFamily: GAME.fontName[Define.LANG], fontSize: "40px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});

	this.txtGunName.visible = false;
	this.leftTarget_shop.visible = false;
	this.rightTarget_shop.visible = false;
	this.rightChange_shop.sprite.visible = false;
	this.leftChange_shop.sprite.visible = false;
};

GAME.view.prototype.showRifleRange = function(){
	GAME.bShop = true;
	GAME.gunShopContainer.scrollContainer.visible = false;
	GAME.gunShopContainer.viewArea.visible = false;

	this.leftTarget_shop.state.clearTracks();
	this.rightTarget_shop.state.clearTracks();
	this.leftTarget_shop.skeleton.setToSetupPose();
	this.rightTarget_shop.skeleton.setToSetupPose();

	GAME.playSpine(this.leftTarget_shop, "target_idle");
	GAME.playSpine(this.rightTarget_shop, "target_idle");
	this.curShowNum = (GAME.bOnAdGun)? GAME.iAdGunIdx:kData.iUserOwnGun;
	this.setRangeGun(this.curShowNum);
	this.txtGunName.text = GAME.table_language["gun0"+(this.curShowNum+1).toString()][Define.LANG];
	this.txtGunName.visible = true;
	this.shop_btnBackShop.sprite.visible = true;
	this.rightChange_shop.sprite.visible = true;
	this.leftChange_shop.sprite.visible = true;
	this.showHand();
};

GAME.view.prototype.hideRifleRange = function(){
	GAME.bShop = false;
	GAME.gunShopContainer.scrollContainer.visible = true;
	GAME.gunShopContainer.viewArea.visible = true;

	this.txtGunName.visible = false;
	this.leftTarget_shop.visible = false;
	this.rightTarget_shop.visible = false;
	this.shop_btnBackShop.sprite.visible = false;
	this.rightChange_shop.sprite.visible = false;
	this.leftChange_shop.sprite.visible = false;
	this.L_hand.visible = false;
	this.R_hand.visible = false;
};

GAME.view.prototype.exitPopInit = function () {
	this.con_exitPop = new PIXI.Container();
	this.spr_back = SpriteLoad(this.con_exitPop, "white.png", iCSX, iCSY);
	this.spr_back.tint = 0x000000;
	this.spr_back.alpha = 0.7;
	this.spr_back.interactive = true;
	this.spr_back.width = iMSX;
	this.spr_back.height = iMSY;
	//this.spr_exitBG = SpriteLoad(this.con_exitPop, "popup_message.png", iCSX, iCSY)
	this.spr_exitBG = SpriteSliceLoad(this.con_exitPop, "popup.png", iCSX, iCSY, 642, 499, 322, 199, 147, 74);
	/*this.txt_exitTitle = */FontLoad(this.spr_exitBG, GAME.table_language["popup07"][Define.LANG], 0, -210
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"}, 0.5, 0.5, 500);
	/*this.txt_exitMessage = */FontLoad(this.spr_exitBG, GAME.table_language["exitCheck"][Define.LANG], 0, -50
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"}, 0.5, 0.5, 600);

	this.btn_exitNO = new GUMA.button(this.spr_exitBG, "btn_shop_no.png", -155, 120);
	this.btn_exitNO.setCallback(function () {
		console.log('btn_exitNO');
		SESoundPlay(SE_BUTTON);
		GAME.view.con_exitPop.visible = false;
	});
	FontLoad(this.btn_exitNO.sprite, GAME.table_language["button02"][Define.LANG], 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"30px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});

	this.btn_exitYES = new GUMA.button(this.spr_exitBG, "btn_shop_ok.png", 155, 120);
	this.btn_exitYES.setCallback(function () {
		console.log('btn_exitYES');
		SESoundPlay(SE_BUTTON);
		GAME.view.con_exitPop.visible = false;
		GAME.view.hidePausePop();
		GAME.view.gameOver("self");
		GAME.view.bPause_out = true;
		GAME.view.bSelfOver = true;

		GAME.view.bExitUIPath = true;	// rozy

		MSSDK.gameOver(); //게임스낵 게임오버
	});

	FontLoad(this.btn_exitYES.sprite, GAME.table_language["button01"][Define.LANG], 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"30px", fill:"#ffffff", stroke:"#000000", strokeThickness:4, fontWeight:"bold"});

	this.viewContainer.addChild(this.con_exitPop);
	this.con_exitPop.visible = false;
};

GAME.view.prototype.showExitPop = function () {
	this.con_exitPop.visible = true;
};

/*
GAME.view.prototype.closeDoubleRewardAdPop = function () {
	GAME.view.viewContainer.removeChild(this.doubleRewardAdContainer);
};

GAME.view.prototype.showDoubleRewardAdPop = function () {
	GAME.view.viewContainer.addChild(this.doubleRewardAdContainer);
};

GAME.view.prototype.doubleRewardAdPopInit = function () {
	this.doubleRewardAdContainer = new PIXI.Container();
	var bg = SpriteSliceLoad(this.doubleRewardAdContainer, "popup.png", iCSX, iCSY, 690, 430, 322, 199, 147, 74);
	FontLoad(bg, "Reward", 0, -180,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "50px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4});
	var doubleBtnAd = new GUMA.button(bg, "ad_view_btn_2.png", -110, 75);
	FontLoad(doubleBtnAd.sprite, "REWARD X2", 0, 50,
		{fontFamily: GAME.fontName[Define.LANG], fontSize: "20px", fill: "#ffffff", stroke: "#000000", strokeThickness: 4	});

	var btnClose = new GUMA.button(bg, "close_btn.png", 110, 75);
	var self = this;
	doubleBtnAd.setCallback(function () {
		SESoundPlay(SE_BUTTON);
	//	showAdForDoubleReward();
		ShowAD("reward", "daller2x", function(){
            GAME.view.closeDoubleRewardAdPop();
			gameOverSave(function () {
				GAME.view.showOverPop();
			}, true);
		}, function(){
			ShowToast("warning", GAME.table_language["ad1"][Define.LANG]);
		});
	});

	btnClose.setCallback(function () {
		SESoundPlay(SE_BUTTON);
		gameOverSave(function () {
			self.closeDoubleRewardAdPop();
			self.showOverPop();
		});
	});


	var spr_userGoldBG = SpriteLoad(bg, "gold_ui.png", 0, -70);
	this.txt_userRewardForPlaying = FontLoad(bg, "double chance", 0, -70
		, {
			fontFamily: GAME.fontName[Define.LANG],
			fontSize: "30px",
			fill: "#ffffff",
			stroke: "#000000",
			strokeThickness: 4
		});

	var spr_goldIcon = SpriteLoad(bg, "gold_icon.png", -270, -70);
};*/

GAME.stageLevel = 1;
GAME.stageFloor = 1;
GAME.startFloor = 1;
GAME.bestFloor = 1;
GAME.stageGold = 0;//한 stage당 획득하는 골드
GAME.accStageGold = 0;//gameOver 전 스테이지까지 획득한 총 골드의 양
GAME.skipGold = 0;//skip한 층을 클리어했을 시 받을 골드의 양.
GAME.skipStageFloor = 11;//floorSelect시에 설정한 stageFloor
GAME.skipStageLevel = 3;
GAME.gameOverCount = 0;
GAME.zombiesZOrder = 0;

GAME.left = 0;
GAME.right = 1;
GAME.center = 2;
//add things;
GAME.up = 3;
GAME.down = 4;

GAME.zombieType = {
		normal : 1,
		jump : 2,
		enhance : 3,
		hulk : 4,
		human : 5
};

//add things
GAME.insertTime = 0.25;
GAME.jumpSpeed_revision = 0;//점프 좀비 애니메이션속도 보정치.

GAME.stageManager = function(engine){
	this.engine = engine;
	this.patterns = undefined;
	this.levelData = undefined;
	
	this.accTime = GAME.insertTime;
	this.flagTime = GAME.insertTime;
	
	this.zombies = [];
	
	this.leftEnemies = [];
	this.rightEnemies = [];
	
	this.jumpZombies = [];
	
	this.stagePattern = undefined;
	this.stageEndCnt = 0;
	
	this.floorContainer = new PIXI.Container();
	this.floorContainer.displayList = new PIXI.DisplayList();
	
	this.backLayer = new PIXI.DisplayGroup(0, false);
	this.corriderLayer = new PIXI.DisplayGroup(1, false);
	this.zombieLayer = new PIXI.DisplayGroup(2, true);
	// this.elevatorLayer = new PIXI.DisplayGroup(3, false);
	
	this.sprBack = SpriteLoad(this.floorContainer, "assets/img/back_2.jpg", iCSX+3, iCSY-315);
	this.sprBack.displayGroup = this.backLayer;
	this.sprBack.zOrder = 1000;
	this.sprCorrider = SpriteLoad(this.floorContainer, "assets/img/back.png", iCSX, iCSY);
	this.sprCorrider.displayGroup = this.corriderLayer;
	
	this.revisionTime = 0;
	
	this.delayedCnt = 2;
	
	this.leftDelayCnt = 0;
	this.rightDelayCnt = 0;
	
	this.leftSequence = 0;
	this.rightSequence = 0;

	this.curPattern = undefined;
	this.curMoveTime = 0;

    this.banCount = 2;
    // this.banIndex = -1;//2층 동안 나오지 못할 패턴의 인덱스
	this.arr_banIndex = [];

	this.people = [];
};
GAME.stageManager.constructor = GAME.stageManager;

GAME.stageManager.prototype.init = function(){
	GAME.stageLevel = 1;
	if(!kData.bFirstPlay)
		GAME.stageFloor = 1;
	else
		GAME.stageFloor = 0;

	GAME.jumpSpeed_revision = 0;
};

// var testPattern = [1, 0, 1, 0];//test

GAME.stageManager.prototype.createStage = function(){
	var length = this.zombies.length;
	for(var i=0;i<length;++i){
		this.zombies[i].init();
	}
	
	GAME.zombiesZOrder = 0;
	
	this.leftEnemies.length = 0;
	this.rightEnemies.length = 0;
	this.jumpZombies.length = 0;
	this.people.length = 0;

	this.leftDelayCnt = 0;
	this.rightDelayCnt = 0;
	this.leftSequence = 0;
	this.rightSequence = 0;
	
	this.accTime = 0.5;

    length = this.patterns.length;
    var availablePatterns = [];
    for(var i=0;i<length;++i){
        if(this.patterns[i].level <= GAME.stageLevel){
            if(GAME.stageLevel>=3 && this.patterns[i].level === 1) continue;
            availablePatterns.push(this.patterns[i]);
        }
    }

    var lvData = undefined;
    length = this.levelData.length;

    if(GAME.stageLevel > length)
        GAME.stageLevel = length;

    for(var i=0;i<this.levelData.length;++i){
        if(this.levelData[i].level === GAME.stageLevel){
            lvData = this.levelData[i];
        }
    }
    GAME.jumpSpeed_revision = 1 - lvData.time;

	//ban index setting start
	var randIdx = 0;
	var flag = true;

	if(this.arr_banIndex.length!=0){
		while(flag){
            randIdx = ((Math.random()*availablePatterns.length)|0);
            for(var i=0;i<this.arr_banIndex.length;++i){
                if(randIdx === this.arr_banIndex[i]) break;
                if(i===this.arr_banIndex.length-1){
                    if(this.banCount===0) this.arr_banIndex.shift();
                	if(this.arr_banIndex.length!=2) this.arr_banIndex.push(randIdx);
                    flag = false;
                }
            }
		}
	}else{//최초등록
        randIdx = ((Math.random()*availablePatterns.length)|0);
        this.arr_banIndex.push(randIdx);
	}
    //ban index setting start

    // console.log("randIdx: "+randIdx);
    // console.log("banIndex0: "+this.arr_banIndex[0]);
    // console.log("banIndex1: "+this.arr_banIndex[1]);
    // console.log("banIndex2: "+this.arr_banIndex[2]);
    // console.log("banCount: "+this.banCount);
    // console.log("=======================");

    if(this.curPattern === undefined){
        this.revisionTime = lvData.time * availablePatterns[randIdx].speed;
        this.stagePattern = availablePatterns[randIdx].pattern;

        //left, right swap
		if(Math.random()<0.5){
			length = this.stagePattern.length;
			var tempPattern = this.stagePattern;
			for(var i=0;i<length;++i){

				if(tempPattern[i] === -1) continue;

				if(tempPattern[i] === 1) tempPattern[i] = 6;
                else if(tempPattern[i] === 2) tempPattern[i] = 7;
                else if(tempPattern[i] === 3) tempPattern[i] = 8;
                else if(tempPattern[i] === 6) tempPattern[i] = 1;
                else if(tempPattern[i] === 7) tempPattern[i] = 2;
                else if(tempPattern[i] === 8) tempPattern[i] = 3;

                else if(tempPattern[i] >= 100 && tempPattern[i] < 200){
					tempPattern[i] = 200 + (tempPattern[i]-100);
				}

                else if(tempPattern[i] >= 200 && tempPattern[i] < 300){
                    tempPattern[i] = 100 + (tempPattern[i]-200);
				}
			}

			this.stagePattern = tempPattern;
		}

		--this.banCount;
		if(this.banCount<0) this.banCount = 2;

    }else{//이어 하기 상태~
        this.stagePattern = this.curPattern;
        this.revisionTime = this.curMoveTime;
    }

	if(kData.bFirstPlay){
		this.stagePattern = [1, 6, 1, 6, 3, 8];
		this.revisionTime = 3;
		this.flagTime = 0.5;
		this.accTime = this.flagTime;
	}else{
        this.flagTime = lvData.time * GAME.insertTime;
        this.accTime = this.flagTime;

        // this.stagePattern = testPattern;
    }

	length = this.stagePattern.length;
	for(var i=0;i<length;++i){
		var zombie = this.stagePattern[i];
		if(zombie === 1){
			this.zombies[i].setZombie(GAME.zombieType.normal, this.revisionTime, GAME.zombiesZOrder++, GAME.left);
			this.leftEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
		} else if(zombie === 2) {
			this.zombies[i].setZombie(GAME.zombieType.jump, this.revisionTime, GAME.zombiesZOrder++, GAME.left);
			this.leftEnemies[i] = this.zombies[i];
			this.rightEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
			this.floorContainer.addChild(this.zombies[i].cloneSpine);
		} else if(zombie === 3) {
			this.zombies[i].setZombie(GAME.zombieType.human, this.revisionTime, GAME.zombiesZOrder++, GAME.left);
			this.leftEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
			this.people.push(this.zombies[i]);
			this.zombies[i].arrIdx = i;
		} else if(zombie === 6) {
			this.zombies[i].setZombie(GAME.zombieType.normal, this.revisionTime, GAME.zombiesZOrder++, GAME.right);
			this.rightEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
		} else if(zombie === 7) {
			this.zombies[i].setZombie(GAME.zombieType.jump, this.revisionTime, GAME.zombiesZOrder++, GAME.right);
			this.leftEnemies[i] = this.zombies[i];
			this.rightEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
			this.floorContainer.addChild(this.zombies[i].cloneSpine);
		} else if(zombie === 8) {
			this.zombies[i].setZombie(GAME.zombieType.human, this.revisionTime, GAME.zombiesZOrder++, GAME.right);
			this.rightEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
			this.people.push(this.zombies[i]);
			this.zombies[i].arrIdx = i;
		} else if(zombie >= 10 && zombie <= 99) {
			this.zombies[i].setZombie(GAME.zombieType.hulk, this.revisionTime, GAME.zombiesZOrder++, GAME.center, zombie);
			this.leftEnemies[i] = this.zombies[i];
			this.rightEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
		} else if(zombie >= 100 && zombie < 200) {
			this.zombies[i].setZombie(GAME.zombieType.enhance, this.revisionTime, GAME.zombiesZOrder++, GAME.left, zombie - 100);
			this.leftEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
		} else if(zombie >= 200 && zombie < 300) {
			this.zombies[i].setZombie(GAME.zombieType.enhance, this.revisionTime, GAME.zombiesZOrder++, GAME.right, zombie - 200);
			this.rightEnemies[i] = this.zombies[i];
			this.floorContainer.addChild(this.zombies[i].spine);
		}
	}
	this.stageEndCnt = (this.leftEnemies.length < this.rightEnemies.length) ? this.rightEnemies.length :this.leftEnemies.length;

	this.curPattern = undefined;
};

GAME.stageManager.prototype.createPool = function(length){
	var i = 0;
	for(var i=0;i<length;++i){
		this.zombies[i] = new GAME.zombie();
	}
};

GAME.stageManager.prototype.insertZombie = function(){
	this.accTime += deltaTime;
	if(this.accTime < this.flagTime) return;

	var endSequence = (this.leftSequence>this.rightSequence) ? this.leftSequence : this.rightSequence;
	if(endSequence >= this.stageEndCnt){/*this.stageEndCnt*/
		return;
	}
	
	var leftEnemy = undefined;
	if(this.leftDelayCnt === 0) leftEnemy = this.leftEnemies[this.leftSequence++];
	if(this.leftDelayCnt>0) --leftDelayCnt;
	
	var rightEnemy = undefined;
	if(this.rightDelayCnt === 0) rightEnemy = this.rightEnemies[this.rightSequence++];
	if(this.rightDelayCnt>0) --rightDelayCnt;
	
	var i = 0;
	while(i<2){
		if(i===0){
			if(leftEnemy != undefined){
				leftEnemy.comeOut();
				if(leftEnemy.type === GAME.zombieType.Human) this.leftDelayCnt = this.delayedCnt;
				break;
			}
		} else {
			if(rightEnemy != undefined){
				rightEnemy.comeOut();
				if(rightEnemy.type === GAME.zombieType.Human) this.rightDelayCnt = this.delayedCnt;
				break;
			}
		}
		++i;
	}
	this.accTime = 0;
};


GAME.stageManager.prototype.update = function(){
	var i = 0;
	var length = this.jumpZombies.length;

	for(var i=0;i<length;++i){
		this.jumpZombies[i].jumpUpdate(deltaTime);
	}

	if(kData.bFirstPlay) return;

	length = this.people.length;
	for(var i=0;i<length;++i){
		this.checkFront(this.people[i], this.people[i].arrIdx);
	}
};

GAME.stageManager.prototype.hit = function(direction){
	// var i = 0;
	// var length = 0;
	// var zombie = undefined;
	if(direction === 0){//left
		for(var i=0;i<this.leftEnemies.length;++i){
			if(this.leftEnemies[i] === undefined || this.leftEnemies[i].death || !this.leftEnemies[i].bCanShot) continue;
			if(this.leftEnemies[i].spine.visible || this.leftEnemies[i].cloneSpine.visible){
				if(this.leftEnemies[i].position === GAME.left || this.leftEnemies[i].position === GAME.center){
                    this.leftEnemies[i].hit();
					break;
				}
			}
		}
	} else { //right
		// var length = this.rightEnemies.length;
		// var zombie = undefined;
		for(var i=0;i<this.rightEnemies.length;++i){
			// zombie = this.rightEnemies[i];
			if(this.rightEnemies[i] === undefined || this.rightEnemies[i].death || !this.rightEnemies[i].bCanShot) continue;
			if(this.rightEnemies[i].spine.visible || this.rightEnemies[i].cloneSpine.visible){
				if(this.rightEnemies[i].position === GAME.right || this.rightEnemies[i].position === GAME.center){
                    this.rightEnemies[i].hit();
					break;
				}
			}
		}
	}
};

var death_leftLength = 0; var death_rightLength = 0; var death_i = 0;
GAME.stageManager.prototype.allDeath = function(){
	death_leftLength = this.leftEnemies.length;
	death_rightLength = this.rightEnemies.length;
	
	for(death_i=0;death_i<death_leftLength;++death_i){
		if(this.leftEnemies[death_i] !== undefined){
			if(!this.leftEnemies[death_i].death) return false;
		}
	}
	
	for(death_i=0;death_i<death_rightLength;++death_i){
		if(this.rightEnemies[death_i] !== undefined){
			if(!this.rightEnemies[death_i].death) return false;
		}
	}
	
	if(kData.bFirstPlay){
		GAME.view.hideTutorial();
		kData.bFirstPlay = false;
		// SaveDataInClient();
        /**
         * 네이버 튜토 플레이 저장.
         * */
        MG.NM.AppDataPut(kData);
	}
	return true;
};

GAME.stageManager.prototype.checkFront = function(woman, index){
	if(woman.position === GAME.left){
		for(var i=index-1;i>=0;--i){
			if(this.leftEnemies[i] === undefined) continue;
			if(!this.leftEnemies[i].death) return;
		}
	} else {
		for(var i=index-1;i>=0;--i){
			if(this.rightEnemies[i] === undefined) continue;
			if(!this.rightEnemies[i].death) return;
		}
	}
	
	woman.changeTween();
};

GAME.stageManager.prototype.skipStage = function(upDown){
	var length = this.levelData.length;

	if(GAME.skipStageFloor !== 1){
		GAME.skipStageLevel = (GAME.skipStageFloor+4) * 0.2;
	}

	switch(upDown){
		case GAME.up:
			// ++GAME.skipStageLevel;//stage level 값
            GAME.skipStageLevel += 2;
			GAME.stageFloor = GAME.skipStageLevel * 5 - 4;

			// 최고점수 층 안 넘어가게 Blooming
			if(GAME.stageFloor > kData.iBestFloor){
				// --GAME.skipStageLevel;
                GAME.skipStageLevel -= 2;
				GAME.stageFloor = GAME.skipStageLevel * 5 - 4;
			}//default//local&&test sever에선 주석처리//실서버에서만 적용...

			// //101층 안 넘어가게
			// if(GAME.stageFloor>71){
             //    GAME.skipStageLevel-=2;//stage level 값
             //    GAME.stageFloor = 71;
			// }

            if(GAME.skipStageLevel >= this.levelData[length-1].level)
                GAME.skipStageLevel = this.levelData[length-1].level;
		break;
		case GAME.down:
			GAME.skipStageLevel-=2;
			if(GAME.skipStageLevel < 3){
				GAME.skipStageLevel = 3;
			}
			GAME.stageFloor = GAME.skipStageLevel * 5 - 4;
		break;
	}

    GAME.skipStageFloor = GAME.stageFloor;
	GAME.stageLevel = GAME.skipStageLevel;
	GAME.view.setSelectPopText();
};//cancel 하면 init(), skip하면 createStage->redsiren
GAME.jumpPoint1 = 0;
GAME.jumpPoint2 = 0;

GAME.changeMoveTime = 0.5;
GAME.inTime = 0.2;

GAME.zombie = function(){
	this.stageManager = GAME.engineInst.stageManager;
	this.spine  = new PIXI.spine.Spine(spines.walkers);
	this.cloneSpine = new PIXI.spine.Spine(spines.walkers);//for jump zombie
	this.spine_beShot = new PIXI.spine.Spine(spines.beShot);
	this.clone_beShot = new PIXI.spine.Spine(spines.beShot);
	
	this.spine.addChild(this.spine_beShot);
	this.cloneSpine.addChild(this.clone_beShot);
	
	this.spine_beShot.position.y = -300;
	this.clone_beShot.position.y = -300;

	this.type = 0;//일반, 점프, 강화, 덩치, 사람
	this.position = -1;//left: 0, right: 1
	this.hitCnt = 0;
	
	this.startPos = {x:0, y:0};
	this.destPos = {x:0, y:0};
	this.layerChangePos = {x:0, y:0};
	
	this.cloneStartPos = {x:0, y:0};
	this.cloneDestPos = {x:0, y:0};
	this.cloneLayerChangePos = {x:0, y:0};
	
	this.startScale = {x:0, y:0};
	this.destScale = {x:0, y:0};
	
	this.startLayer = undefined;
	this.changeLayer = undefined;
	
	this.moveTime = undefined;

	this.txtHitCnt = FontLoad(this.spine, this.hitCnt.toString(), 0, -500
			, {fontFamily:GAME.fontName[Define.LANG], fontSize:"70px", fill:'#ffffff', dropShadow:true, dropShadowColor:'#000000', dropShadowDistance:4});
	this.txtHitCnt.visible = false;

	this.bJump1 = false;
	this.bJump2 = false;
	
	this.bCanShot = false;
	this.death = false;
	
	this.tween = undefined;
	this.cloneTween = undefined;

	this.arrIdx = 0;
	this.alive = false;

	this.bApproach = false;
	this.jumpFlag = 0;//점프 포인트와 비교해 점프 타이밍을 체크하기 위한 변수.
	this.jumpSpeed = 1.2;//default:1.2

    var self = this;
};

GAME.zombie.constructor = GAME.zombie;

GAME.zombie.prototype.comeOut = function(){
	var self = this;
	
	switch(this.type){
	case GAME.zombieType.normal:
		GAME.playSpine(this.spine, "zombie_1_idle");
		break;
	case GAME.zombieType.jump:
		GAME.playSpine(this.spine, "zombie_3_idle");
		break;
	case GAME.zombieType.enhance:
		GAME.playSpine(this.spine, "zombie_2_idle");
		break;
	case GAME.zombieType.hulk:
		GAME.playSpine(this.spine, "zombie_4_in");
		this.spine.state.addListener({
			complete:function(){
                GAME.playSpine(self.spine, "zombie_4_idle");
                self.approach();
                self.spine.state.clearListeners();
			}
		});
		break;
	case GAME.zombieType.human:
		GAME.playSpine(this.spine, "human_idle");
		break;
	}
	
	if(this.type !== GAME.zombieType.hulk){
		TweenMax.to(this.spine, GAME.inTime, {x:this.layerChangePos.x, y:this.layerChangePos.y, ease:Power0.easeNone, onComplete:function(){
			self.approach();
		}});
		
		if(this.type === GAME.zombieType.jump){
            TweenMax.to(this.cloneSpine, GAME.inTime, {x:this.cloneLayerChangePos.x, y:this.cloneLayerChangePos.y, ease:Power0.easeNone, onComplete:function(){
				self.approach();
			}});
		}
	}
};

GAME.zombie.prototype.approach = function(){
	if(this.type === GAME.zombieType.jump){
		this.cloneSpine.displayGroup = this.changeLayer;
		this.cloneTween = TweenMax.to(this.cloneSpine, this.moveTime, {x:this.cloneDestPos.x, y:this.cloneDestPos.y, scaleX:this.destScale.x, scaleY:this.destScale.y, ease:Power1.easeIn
			/*,onCompleteParams:[this], onComplete:this.killYou*/});
	}
	
	this.bCanShot = true;
	this.spine.displayGroup = this.changeLayer;

	this.tween = TweenMax.to(this.spine, this.moveTime, {x:this.destPos.x, y:this.destPos.y, scaleX:this.destScale.x, scaleY:this.destScale.y, ease:Power1.easeIn
		,onCompleteParams:[this], onComplete:this.killYou});
	this.bApproach = true;
};

GAME.zombie.prototype.killYou = function(THIS){
	if(GAME.engineInst.gameState !== GAME.gameState.STATE_PLAY) return;

	if(THIS.type === GAME.zombieType.human){
		THIS.death = true;
		THIS.spine.visible = false;
		return;
	}
	SESoundPlay(SE_ZOMBIE_WIN);
	
	//heart system start//
	THIS.init();
	THIS.death = true;

	// --GAME.cur_life;
	// if(GAME.cur_life<0) GAME.cur_life = 0;
	GAME.view.heart.brokenHeart(--GAME.cur_life);
	// console.log("cur_life_zombie:"+GAME.cur_life);
    GAME.playSpine(GAME.view.bloodAnim_over, "elevator_dead");

	if(GAME.cur_life<=0){
		TweenMax.killAll();
		GAME.engineInst.state = GAME.state.STATE_OVER;
		GAME.engineInst.gameState = GAME.gameState.STATE_NONE;
		GAME.view.gameOver("blood");
	}
	//heart system end//
};

GAME.zombie.prototype.setZombie = function(type, moveTime, zOrder, position, hitCnt){
	if(hitCnt === undefined) hitCnt = 1;

	var rand = Math.random();
	
	this.type = type;
	this.position = position;
	this.moveTime = moveTime;
	
	switch(this.position){
	case GAME.left:
		this.startPos.x = this.pos_scale.leftStartX;
		this.startPos.y = this.pos_scale.startY;
		this.destPos.x = this.pos_scale.leftStartX;
		this.destPos.y = this.pos_scale.destY;
		this.layerChangePos.x = this.pos_scale.leftChangeX;
		this.layerChangePos.y = this.pos_scale.startY;
		
		this.cloneStartPos.x = this.pos_scale.rightStartX;
		this.cloneStartPos.y = this.pos_scale.startY;
		this.cloneDestPos.x = this.pos_scale.rightStartX;
		this.cloneDestPos.y = this.pos_scale.destY;
		this.cloneLayerChangePos.x = this.pos_scale.rightChangeX;
		this.cloneLayerChangePos.y = this.pos_scale.startY;
		break;
	case GAME.right:
		this.startPos.x = this.pos_scale.rightStartX;
		this.startPos.y = this.pos_scale.startY;
		this.destPos.x = this.pos_scale.rightStartX;
		this.destPos.y = this.pos_scale.destY;
		this.layerChangePos.x = this.pos_scale.rightChangeX;
		this.layerChangePos.y = this.pos_scale.startY;
		
		this.cloneStartPos.x = this.pos_scale.leftStartX;
		this.cloneStartPos.y = this.pos_scale.startY;
		this.cloneDestPos.x = this.pos_scale.leftStartX;
		this.cloneDestPos.y = this.pos_scale.destY;
		this.cloneLayerChangePos.x = this.pos_scale.leftChangeX;
		this.cloneLayerChangePos.y = this.pos_scale.startY;
		break;
	case GAME.center:
		this.startPos.x = GAME.iCSX;
		this.startPos.y = this.pos_scale.startY;
		this.destPos.x = GAME.iCSX;
		this.destPos.y = this.pos_scale.destY;
		break;
	}
	
	this.destScale.x = this.pos_scale.destScale.x;
	this.destScale.y = this.pos_scale.destScale.y;
	
	this.hitCnt = hitCnt;
	
	switch(this.type){
	case GAME.zombieType.jump:
		this.cloneSpine.position.set(this.cloneStartPos.x, this.cloneStartPos.y);
		this.cloneSpine.scale.x = this.pos_scale.startScale.x;
		this.cloneSpine.scale.y = this.pos_scale.startScale.y;
		this.cloneSpine.displayGroup = this.stageManager.backLayer;
		this.cloneSpine.zOrder = zOrder;

		GAME.jumpPoint1 = this.moveTime * 0.25;
		GAME.jumpPoint2 = this.moveTime * 0.5;

		if(rand < 0.5){
			this.cloneSpine.scale.x *= -1;
		}

		this.stageManager.jumpZombies.push(this);
		break;
	case GAME.zombieType.enhance:
	case GAME.zombieType.hulk:
		this.txtHitCnt.visible = true;
		this.txtHitCnt.text = this.hitCnt;
		break;
	}

	this.changeLayer = this.stageManager.zombieLayer;

	this.spine.position.set(this.startPos.x, this.startPos.y);
	this.spine.scale.x = this.pos_scale.startScale.x;
	this.spine.scale.y = this.pos_scale.startScale.y;
	this.spine.displayGroup = this.stageManager.backLayer;
	this.spine.zOrder = zOrder;
	
	if(rand < 0.5){
		this.spine.scale.x *= -1;
		this.destScale.x *= -1;
		this.txtHitCnt.scale.x = -1;
	}
};

GAME.zombie.prototype.pos_scale = {
	leftStartX : GAME.iCSX-100,
	rightStartX : GAME.iCSX+100,
		
	leftChangeX : GAME.iCSX-30,
	rightChangeX : GAME.iCSX+30,

	startY : GAME.iCSY-230,
	destY : GAME.iCSY+500,
		
	startScale : {x:0.3, y:0.3},
	destScale : {x:1.2, y:1.2}
};

GAME.zombie.prototype.jump = function(){
	var self = this;
	var animSpine = (this.spine.visible === true) ? this.spine : this.cloneSpine;
	var visibleSpine = (animSpine === this.spine) ? this.cloneSpine : this.spine;
	// console.log("zombie_jump_up");
	GAME.playSpine(animSpine, "zombie_3_jump_1", false, 0, false, this.jumpSpeed + GAME.jumpSpeed_revision);//up
    animSpine.state.clearListeners();
	animSpine.state.addListener({
		complete:function(){
			var zombie = self;
            animSpine.visible = false;
            zombie.position = (zombie.position === GAME.left) ? GAME.right : GAME.left;

			if(zombie.death){
				visibleSpine.visible = false;
				return;
			}
			GAME.playSpine(visibleSpine, "zombie_3_jump_2");//down
            animSpine.state.clearListeners();
		}
	});
};

GAME.zombie.prototype.hit = function(){
	var self = this;
	--this.hitCnt;
    this.spine.state.clearListeners();
    this.cloneSpine.state.clearListeners();
	//to do : hit point setting
	if(this.hitCnt > 0){
		this.txtHitCnt.text = this.hitCnt;
		switch(this.type){
		case GAME.zombieType.enhance:
			GAME.playSpine(this.spine, "zombie_2_hit");
			this.shotEffect(this.spine_beShot);
			this.spine.state.addListener({
				complete:function(){
                    var zombie = self;
                    GAME.playSpine(zombie.spine, "zombie_2_idle");
                    zombie.spine.state.clearListeners();
				}
			});
			break;
		case GAME.zombieType.hulk:
			GAME.playSpine(this.spine, "zombie_4_hit");
			this.shotEffect(this.spine_beShot);
            this.spine.state.addListener({
                complete:function(){
                    var zombie = self;
                    GAME.playSpine(zombie.spine, "zombie_4_idle");
                    zombie.spine.state.clearListeners();
                }
            });
			break;
		}
	} else {
		// this.tween.kill({x:true, y:true, scaleX:true, scaleY:true}, this.spine);
		this.tween.kill(null, this.spine);
        // TweenMax.killTweensOf(this);
        // this.death = true;
		switch(this.type){
		case GAME.zombieType.normal:
            this.death = true;
			GAME.playSpine(this.spine, "zombie_1_hit");
			SESoundPlay(SE_ZOMBIE_DIE_1);
			this.shotEffect(this.spine_beShot);
            this.spine.state.addListener({
                complete:function(){
                    var zombie = self;
                    zombie.spine.visible = false;
                    zombie.spine.state.clearListeners();
                }
            });
			break;
		case GAME.zombieType.jump:
            this.death = true;
			var animSpine = (this.spine.visible === true) ? this.spine : this.cloneSpine;
			var shotSpine = (animSpine === this.spine) ? this.spine_beShot : this.clone_beShot;
			this.cloneTween.kill({x:true, y:true, scaleX:true, scaleY:true}, this.cloneSpine);
            // console.log("jumpZombie_hit_start");
			GAME.playSpine(animSpine, "zombie_3_hit");
			SESoundPlay(SE_ZOMBIE_DIE_4);
			this.shotEffect(shotSpine);
            animSpine.state.addListener({
                complete:function(){
                	// console.log("jumpZombie_hit_end");
                    var zombie = self;
                    zombie.spine.visible = false;
                    zombie.cloneSpine.visible = false;
                    zombie.spine.state.clearListeners();
                }
            });
			break;
		case GAME.zombieType.enhance:
            this.death = true;
			GAME.playSpine(this.spine, "zombie_2_hit");
			SESoundPlay(SE_ZOMBIE_DIE_3);
			this.shotEffect(this.spine_beShot);
            this.spine.state.addListener({
                complete:function(){
                    var zombie = self;
                    zombie.spine.visible = false;
                    zombie.spine.state.clearListeners();
                }
            });
			break;
		case GAME.zombieType.hulk:
            this.death = true;
			GAME.playSpine(this.spine, "zombie_4_hit");
			SESoundPlay(SE_ZOMBIE_DIE_2);
			this.shotEffect(this.spine_beShot);
            this.spine.state.addListener({
                complete:function(){
                    var zombie = self;
                    zombie.spine.visible = false;
                    zombie.spine.state.clearListeners();
                }
            });
			break;
		case GAME.zombieType.human:
		    this.death = true;
		    if(GAME.cur_life<=0) return;
            SESoundPlay(SE_HUMAN_DIE);
            this.shotEffect(this.spine_beShot);
            GAME.view.heart.brokenHeart(--GAME.cur_life);
            // console.log("cur_life: "+GAME.cur_life);
            GAME.playSpine(this.spine, "human_hit");

            if(GAME.cur_life<=0){
                TweenMax.killAll();
                GAME.engineInst.state = GAME.state.STATE_OVER;
                GAME.engineInst.gameState = GAME.gameState.STATE_NONE;
            }

            this.spine.state.addListener({
               complete:function(){
                   var zombie = self;
                   if(GAME.cur_life>0){
                       // zombie.death = true;
                       zombie.spine.visible = false;
                   }else{//gameover
					   GAME.playSpine(zombie.spine, "human_dead");
                       zombie.spine.state.clearListeners();
					   zombie.spine.state.addListener({
						   complete:function(){
                               zombie.spine.state.clearListeners();
							   zombie.spine.visible = false;

                               GAME.view.gameOver();
						   }
					   });

                       // TweenMax.killAll();
                       // GAME.engineInst.state = GAME.state.STATE_OVER;
                       // GAME.engineInst.gameState = GAME.gameState.STATE_NONE;
				   }
               }
            });
			break;
		}
	}
};

GAME.zombie.prototype.init = function(){
	this.type = 0;
	this.position = -1;
	this.hitCnt = 0;
	
	this.txtHitCnt.visible = false;
	this.txtHitCnt.scale.x = 1;
	
	this.bJump1 = false;
	this.bJump2 = false;
	
	this.bCanShot = false;
	this.death = false;

	this.startPos = {x:0, y:0};
	this.destPos = {x:0, y:0};
	this.layerChangePos = {x:0, y:0};
	
	this.cloneStartPos = {x:0, y:0};
	this.cloneDestPos = {x:0, y:0};
	this.cloneLayerChangePos = {x:0, y:0};
	
	this.startScale = {x:0, y:0};
	this.destScale = {x:0, y:0};
	
	if(this.tween !== undefined)
		this.tween.kill(null, this.spine);

	if(this.cloneTween !== undefined)
		this.cloneTween.kill(null, this.cloneSpine);

	this.tween = undefined;
	this.cloneTween = undefined;

	//spine Init
	this.spine.skeleton.setToSetupPose();
	this.cloneSpine.skeleton.setToSetupPose();

    this.spine.state.clearTrack(0);
    this.cloneSpine.state.clearTrack(0);
    this.spine.state.clearListeners();
    this.cloneSpine.state.clearListeners();

	this.spine.visible = false;
	this.cloneSpine.visible = false;
	this.spine_beShot.visible = false;

	this.arrIdx = 0;
	this.alive = false;

	this.bApproach = false;
	this.jumpFlag = 0;
};

GAME.zombie.prototype.shotEffect = function(spine){
	var randText = (1+((Math.random() * 3)|0)).toString();
	var effectTxt = "hit_eff_"+randText;
	GAME.playSpine(spine, effectTxt);
};

GAME.zombie.prototype.changeTween = function(){
	if(this.alive)return;
	if(this.tween === undefined)
		this.moveTime = GAME.changeMoveTime;
	else{
		this.tween = TweenMax.to(this.spine, GAME.changeMoveTime, {x:this.destPos.x, y:this.destPos.y, scaleX:this.destScale.x, scaleY:this.destScale.y, ease:Circ.easeIn
		,onCompleteParams:[this], onComplete:this.killYou});
	}
	this.alive = true;
};

GAME.zombie.prototype.jumpUpdate = function(deltaTime){
	// console.log("zombie_jump_1");
	if(!this.bApproach || this.death) return;
    // console.log("zombie_jump_2");
	this.jumpFlag += deltaTime;
	if(this.jumpFlag >= GAME.jumpPoint2){
		if(this.bJump2) return;
		this.jump();
		this.bJump2 = true;
	} else if(this.jumpFlag >= GAME.jumpPoint1){
		if(this.bJump1) return;
		this.jump();
		this.bJump1 = true;
	}
};
GAME.gunShopSlot = function(bgURL, gunImgURL, gunName, gunPrice, lockFloor, gunIdx, bAdGun){
	var self = this;
	this.bAdGun = bAdGun;
	this.idx = -99;

	this.slotBG = SpriteLoad(GAME.gunShopContainer.scrollContainer, bgURL, 0, 0);

	if(!bAdGun) this.spr_gunImg = SpriteLoad(this.slotBG, gunImgURL, 0, 95);
	else this.spr_gunImg = SpriteLoad(this.slotBG, gunImgURL, 0, 61);

	this.txtGunName = FontLoad(this.slotBG, gunName, 0, -(this.slotBG.height/2|0)+45
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"30px", fill:'#ffffff', stroke:"#000000", strokeThickness:5});
	this.button = new GUMA.button(this.slotBG, "gun_shop_price_2_btn.png", 0, 150);

	if(this.bAdGun){
		this.adContainer = new PIXI.Container();
		var adIcon = SpriteLoad(this.adContainer, "icon_ad_view.png", -55, 0);
		var adText = FontLoad(this.adContainer, GAME.table_language["oncePremiumGun"][Define.LANG], -25, 0,
			{fontFamily: GAME.fontName[Define.LANG], fontSize: "23px", fill: '#ffffff', stroke: "#000000", strokeThickness: 5	}, 0, 0.5);

		this.button.sprite.addChild(this.adContainer);
	}

	this.texBuy = new PIXI.Texture.fromFrame("gun_shop_price_1_2_btn.png");
	this.texNone = new PIXI.Texture.fromFrame("gun_shop_price_2_2_btn.png");
	this.texEquip = new PIXI.Texture.fromFrame("gun_shop_equip_btn.png");
	this.texUse = new PIXI.Texture.fromFrame("gun_shop_use_btn.png");

	this.txtButton = FontLoad(this.button.sprite, "$"+gunPrice.formatMoney(0), 0, 0
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"30px", fill:'#ffffff', stroke:"#000000", strokeThickness:5});
	this.txt_test = FontLoad(this.button.sprite, GAME.table_language["buyNow"][Define.LANG], 0, -25
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"20px", fill:'#ffffff', stroke:"#000000", strokeThickness:5});
	this.txt_test.visible = false;


	this.log_state = function (_old, _new, a) {
		// let nm_old = '_';
		// let nm_new = '_';
		// if (this.state !== undefined) {
		// 	let arr = Object.keys(this.STATE);
		// 	if(_old !== undefined) nm_old = arr[_old];
		// 	if(_new !== undefined) nm_new = arr[_new];
		// }
		// console.log('log_state()', nm_old, '-->', nm_new, a); //강제로
		// if(a === 13){
		// 	var aa = 1;
		// }
	}
	this.log_btn_state = function (_state, _bAdGun) {
		// let nm = '_';
		// if (this.state !== undefined) {
		// 	nm = Object.keys(this.STATE)[_state];
		// }
		// console.log('log_btn_state()', nm, '  bAdGun:', _bAdGun); //강제로
		// if(nm === 'EQUIP'){
		// 	var aa = 1;
		// }
		// if(nm === 'USE'){
		// 	var aa = 1;
		// }
		// if(_bAdGun === true){
		// 	var aa = 1;
		// }
	}

	this.setEquip = function () {
		GAME.setGunBuff(this.index); //새로 장착할 총(예:광고총:8 --> '사용중'으로 변경
		GAME.view.selectCancel(kData.iUserOwnGun); //기존 장착하고 있던 총(예:기본총:0 --> '장착가능'으로 변경
		if(kData.iUserOwnGun!==GAME.iAdGunIdx) GAME.prev_gunIdx = kData.iUserOwnGun; //일반총일때만 GAME.prev_gunIdx 저장
		if(this.index!==GAME.iAdGunIdx) kData.iUserOwnGun = this.index;              //일반총일때만 kData.iUserOwnGun 저장
		//	SaveDataInClient();

		// //강제로 정보 출력하기
		// let log = '강제로출력 setEquip';
		// log += '\nkData.iUserOwnGun:'+ kData.iUserOwnGun;
		// log += '\nGAME.prev_gunIdx:'+ GAME.prev_gunIdx;
		// log += '\nthis.index:'+ this.index;
		// //테이블이여서 주석처리 log += '\nGAME.gunData:'+ GAME.gunData.toString();
		// console.log(log);
		// //강제로 정보 출력하기

		MG.NM.LocalSave();

		this.log_state(this.state, this.STATE.USE, 11);
		this.state = this.STATE.USE;
		this.setButton();
	};

	this.button.setCallback(function(){
		console.log('setCallback()', self.state, Object.keys(self.STATE)[self.state]);
		SESoundPlay(SE_BUTTON);
		var gunSlot = self;
		switch(gunSlot.state){
			case gunSlot.STATE.NONE:

				break;
			case gunSlot.STATE.EQUIP:
				//if(GAME.bOnAdGun) break; //광고시청후 장착시 //원본 //강제로 고정되게 함
				if(GAME.bOnAdGun){ //강제로// 변경시--->프리미엄총 사라지게
					GAME.view.shop_gunSlots[GAME.iAdGunIdx].state = GAME.view.shop_gunSlots[GAME.iAdGunIdx].STATE.AdGun;
					GAME.view.shop_gunSlots[GAME.iAdGunIdx].setButton()

					offAdGun();
				}
				gunSlot.setEquip();
				break;
			case gunSlot.STATE.BUY:
				GAME.ui_gunBuyPop.show(gunSlot.index, gunSlot.gunPrice, gunSlot.gunName);
				break;
			case gunSlot.STATE.USE:
				break;
			case gunSlot.STATE.LOCKED:
				break;
			case gunSlot.STATE.AdGun:
				//	showAdforGetAdGun();
				BGMSoundPause();
				ShowAD("reward", "shopADGun", function(){
					BGMSoundPlay(BGM_BG, true);
					onAdGun();
				}, function(){
					BGMSoundPlay(BGM_BG, true);
					//if(false) { //실패콜백
						MG.alert("", GAME.table_language["ad1"][Define.LANG]);
					//}
					//ShowToast("warning", GAME.table_language["ad1"][Define.LANG]);

					// if(true){ //강제로 광고실패시, 총구매 성공하게 하려고//프리미엄건
					// 	onAdGun();
					// }
				}, false);
				break;
		}
	});
	this.button.setDownAction(function(){
		GAME.bGetButton = true;
	});

	this.index = gunIdx;
	this.gunName = gunName;
	this.gunPrice = gunPrice;
	this.lockFloor = lockFloor;

	this.txt_skill_desc_0 = FontLoad(this.slotBG, "text1", 0, -(this.slotBG.height/2)+90
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"20px", fill:"#ffffff", stroke:"#000000", strokeThickness:5}, 0.5, 0.5, 250);
	this.txt_skill_desc_1 = FontLoad(this.slotBG, "text2", 0, -(this.slotBG.height/2)+140
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"20px", fill:"#ffffff", stroke:"#000000", strokeThickness:5}, 0.5, 0.5, 250);

	this.txt_skill_desc_0.visible = false;
	this.txt_skill_desc_1.visible = false;
	this.setGunSkillDesc();


	var txt = GAME.table_language["breakLock"][Define.LANG];
	this.txtLockFloor = FontLoad(this.slotBG, txt.replace("{0}", lockFloor.toString()), 0, -45
		, {fontFamily:GAME.fontName[Define.LANG], fontSize:"20px", fill:'#ffffff', stroke:"#000000", strokeThickness:5, padding:3}, 0.5, 0.5);
	this.lockBG = SpriteLoad(this.txtLockFloor, "gun_shop_slot_lock_new.png", -(this.txtLockFloor.width*0.5), 0, 1, 0.5);
	fontLimited(this.txtLockFloor, this.txtLockFloor.text, 250);


	this.selectSlot = SpriteLoad(this.slotBG, "gun_shop_slot_equip_new.png", 0, 0);
	this.selectSlot.visible = false;

	this.log_state(this.state, this.STATE.STATE_NONE, 12);
	this.state = this.STATE.STATE_NONE;
	this.setButton();
};

GAME.gunShopSlot.constructor = GAME.gunShopSlot;

GAME.gunShopSlot.prototype.setState = function(bBuy){
	if(this.bAdGun){
		if(GAME.bOnAdGun){
			this.log_state(this.state, this.STATE.USE, 13);
			this.state = this.STATE.USE;
		} else {
			this.log_state(this.state, this.STATE.AdGun, 14);
			this.state = this.STATE.AdGun;
		}

		this.setButton();
		return;
	}

	if(bBuy){
		if(kData.iUserOwnGun === this.index){
			if(GAME.bOnAdGun) {
				this.log_state(this.state, this.STATE.EQUIP, 15);
				this.state = this.STATE.EQUIP;
			}
			else {
				this.log_state(this.state, this.STATE.USE, 16);
				this.state = this.STATE.USE;
			}
		}
		else {
			this.log_state(this.state, this.STATE.EQUIP, 17);
			this.state = this.STATE.EQUIP;
		}
	} else {
		if(kData.iUserOwnGold < this.gunPrice){
			this.log_state(this.state, this.STATE.NONE, 18);
			this.state = this.STATE.NONE;
		} else {
			this.log_state(this.state, this.STATE.BUY, 19);
			this.state = this.STATE.BUY;
		}
	}

	this.setButton();
};

GAME.gunShopSlot.prototype.setButton = function(){
	console.log('setButton()');
	this.log_btn_state(this.state, this.bAdGun);

	if(this.bAdGun) {
		this.adContainer.visible = false;
		this.txtButton.visible = true;
	}

	switch(this.state){
		case this.STATE.NONE:
			this.button.sprite.texture = this.texNone;
			this.button.sprite.interactive = true;
			this.txtButton.style.fill = "#ff7200";
			this.txtButton.position.y = 25;
			this.txt_test.visible = true;
			if(this.txt_skill_desc_0.visible&&!this.txt_skill_desc_1.visible) this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+130;
			else if(this.txt_skill_desc_0.visible&&this.txt_skill_desc_1.visible) {
				this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+90;
				this.txt_skill_desc_1.position.y = -(this.slotBG.height/2)+140;
			}
			break;
		case this.STATE.EQUIP://'장착 가능'
			this.txtButton.text = GAME.table_language["button04"][Define.LANG];
			this.txtButton.position.y = 0;
			this.txtButton.style.fill = "#ffffff";
			this.button.sprite.texture = this.texEquip;
			this.button.sprite.interactive = true;
			this.txtLockFloor.visible = false;
			if(this.txt_skill_desc_0.visible&&!this.txt_skill_desc_1.visible) this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+140;
			else if(this.txt_skill_desc_0.visible&&this.txt_skill_desc_1.visible) {
				this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+120;
				this.txt_skill_desc_1.position.y = -(this.slotBG.height/2)+160;
			}
			this.txt_test.visible = false;
			break;
		case this.STATE.BUY:
			this.button.sprite.texture = this.texBuy;
			this.button.sprite.interactive = true;
			this.txtButton.style.fill = "#ffffff";
			this.txtButton.position.y = 25;
			this.txt_test.visible = true;
			if(this.txt_skill_desc_0.visible&&!this.txt_skill_desc_1.visible) this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+130;
			else if(this.txt_skill_desc_0.visible&&this.txt_skill_desc_1.visible) {
				this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+90;
				this.txt_skill_desc_1.position.y = -(this.slotBG.height/2)+140;
			}
			break;
		case this.STATE.USE: //'사용중'
			this.txtButton.text = GAME.table_language["button03"][Define.LANG];
			this.txtButton.style.fill = "#ffffff";
			this.txtButton.position.y = 0;
			this.button.sprite.texture = this.texUse;
			this.button.sprite.interactive = true;
			this.selectSlot.visible = true;
			this.txtLockFloor.visible = false;
			if(this.txt_skill_desc_0.visible&&!this.txt_skill_desc_1.visible) this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+140;
			else if(this.txt_skill_desc_0.visible&&this.txt_skill_desc_1.visible) {
				this.txt_skill_desc_0.position.y = -(this.slotBG.height/2)+120;
				this.txt_skill_desc_1.position.y = -(this.slotBG.height/2)+160;
			}
			this.txt_test.visible = false;
			break;
		case this.STATE.AdGun: //'광고용 총' 구매전
			this.button.sprite.texture = this.texUse;
			this.adContainer.visible = true;
			this.txtButton.visible = false;
			this.selectSlot.visible = false;
			break;
	}
};

GAME.gunShopSlot.prototype.STATE = {
	NONE : 0,
	EQUIP : 1,
	BUY : 2,
	USE : 3,
	LOCKED : 4,
	AdGun: 5
};

GAME.gunShopSlot.prototype.setGunSkillDesc = function(){
	var gunData = GAME.gunData[this.index];
	var i = 0; var value = 0; var type = 0; var pixiFont = undefined;
	for(i=0;i<2;++i){
		type = gunData["skill"+(i+1).toString()];
		if(type === -1) break;
		value = gunData["value"+(i+1).toString()];
		pixiFont = this["txt_skill_desc_"+i.toString()];
		pixiFont.text = GAME.table_language["gunbuff"+type.toString()][Define.LANG];
		pixiFont.text = pixiFont.text.replace("{0}", value.toString());
		pixiFont.visible = true;

		fontLimited(pixiFont, pixiFont.text, 280);

		switch(type){
			case 100:
				pixiFont.style.fill = "#7cd268";
				break;
			case 101:
				pixiFont.style.fill = "#ffae57";
				break;
			case 102:
				pixiFont.style.fill = "#00b4ff";
				break;
			case 103:
				pixiFont.style.fill = "#f34213";
				break;
		}
	}
};
/*
function UI_ranking(parent){
    /!**
     * 게임 내 메시지를 처리해주는 팝업.
     * 모비게임 서비스에서만 사용중입니다.
     * *!/
    this.popupShield = new PIXI.Graphics();
    parent.addChild(this.popupShield);
    this.popupShield.beginFill(0x000000, 0.5);
    this.popupShield.drawRect(0, 0, iMSX, iMSY);
    this.popupShield.endFill();
    this.popupShield.interactive = true;

    this.spr_bg = SpriteSliceLoad(this.popupShield, "popup.png", iCSX, iCSY, 642, 1145, 100, 100, 200, 500);
    this.slice_confirm = SpriteSliceLoad(this.spr_bg, "btn_back.png", 0, 0, 262, 97);
    // this.btn_confirm = new Button(this.spr_bg, "btn_back.png", 0, 470, "none", 1, 1, 0.5, 0.5, this.slice_confirm);
    this.btn_confirm = new Button(this.spr_bg, this.slice_confirm, 0, 470, "none", 1, 1, 0.5, 0.5);
    this.btn_confirm.setCallback(this.closePop);

    this.txt_confirm = FontLoad(this.slice_confirm, GAME.table_language["button01"][Define.LANG], 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"35px", fill:"#ffffff", stroke:"#000000", strokeThickness:3});

    this.txt_title = FontLoad(this.spr_bg, GAME.table_language["ranking01"][Define.LANG], 0, -535
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:7});

    this.dailyContainer = new PIXI.Container();
    this.totalContainer = new PIXI.Container();
    this.dailyContainer.position.y = -305;
    this.totalContainer.position.y = -305;

    this.spr_bg.addChild(this.dailyContainer);
    this.spr_bg.addChild(this.totalContainer);

    this.slice_daily = SpriteSliceLoad(this.spr_bg, "tab.png", -130, -410, 316, 85);
    this.slice_total = SpriteSliceLoad(this.spr_bg, "tab.png", 130, -410, 316, 85);

    this.txt_daily = FontLoad(this.slice_daily, GAME.table_language["ranking02"][Define.LANG], 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#616947", stroke:"#000000", strokeThickness:3});
    this.txt_total = FontLoad(this.slice_total, GAME.table_language["ranking03"][Define.LANG], 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#616947", stroke:"#000000", strokeThickness:3});

    this.slice_daily.interactive = true;
    this.slice_total.interactive = true;

    this.slice_daily.on("click", this.showDaily);
    this.slice_daily.on("tap", this.showDaily);

    this.slice_total.on("click", this.showTotal);
    this.slice_total.on("tap", this.showTotal);

    this.slice_onDaily = SpriteSliceLoad(this.spr_bg, "btn_tab.png", -130, -410, 322, 93);
    this.slice_onTotal = SpriteSliceLoad(this.spr_bg, "btn_tab.png", 130, -410, 322, 93);
    this.slice_onDaily.interactive = true;
    this.slice_onTotal.interactive = true;

    this.txt_onDaily = FontLoad(this.slice_onDaily, GAME.table_language["ranking02"][Define.LANG], 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:3});
    this.txt_onTotal = FontLoad(this.slice_onTotal, GAME.table_language["ranking03"][Define.LANG], 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:3});

    this.slice_onDaily.visible = false;
    this.slice_onTotal.visible = false;

    //make RankUp Container
    this.user_rank = 0;//daily/total 통합. 일일/종합 보여주는 함수에서 rankingPopupData의 newRank/newCuRank로 setting
    this.rankUpContainer = new PIXI.Container();

    // this.rankUpShield = new PIXI.Graphics();//랭크업 이미지 강재로 보게 하기 위한 그래픽스....
    // this.rankUpContainer.addChild(this.rankUpShield);
    // this.rankUpShield.beginFill(0xff00ff, 0);
    // this.rankUpShield.drawRect(-iCSX, -iCSY, iMSX, iMSY-200);
    // this.rankUpShield.endFill();
    // this.rankUpShield.interactive = true;
    // this.rankUpShield.visible = false;

    this.spr_bg.addChild(this.rankUpContainer);
    this.rankUpContainer.position.y = 100;

    this.spine_rankUp = new PIXI.spine.Spine(spines.rankUp);
    this.rankUpContainer.addChild(this.spine_rankUp);
    this.spine_rankUp.position.set(0, -190);
    this.spine_rankUp.state.addListener({
        complete:function(entry, event){
            if(entry.animation.name==="rank_up_eff_in"){
                setTimeout(function(){
                    var spine = GAME.ui_ranking.spine_rankUp;
                    SpinePlay(spine, spine.position.x, spine.position.y, "rank_up_eff_out", 0, false);
                    TweenMax.to(GAME.ui_ranking.spr_arrow, 1, {alpha:0});
                }, 500);
            }

            if(entry.animation.name==="rank_up_eff_out"){
                if(GAME.ui_ranking.user_rank>3){
                    GAME.ui_ranking.rankUpContainer.visible = false;
                    GAME.ui_ranking.spr_effectShielder.visible = false;
                }else{
                    var ui_ranking = GAME.ui_ranking;
                    if(ui_ranking.user_rank>0) ui_ranking.spr_Medal.texture = ui_ranking["tex_Medal_"+ui_ranking.user_rank.toString()];
                    GAME.ui_ranking.spr_Medal.visible = true;
                    ui_ranking.spr_Medal.scale.set(1.3, 1.3);
                    TweenMax.to(ui_ranking.spr_Medal, 0.5, {scaleX:1, scaleY:1, onComplete:function(){
                        setTimeout(function(){
                            GAME.ui_ranking.spr_Medal.visible = false;
                            GAME.ui_ranking.rankUpContainer.visible = false;
                            GAME.ui_ranking.spr_effectShielder.visible = false;
                        }, 500);
                    }});
                }
            }
        }
    });

    this.spr_arrow = SpriteLoad(this.rankUpContainer, "rank_arrow.png", 50, 0);
    this.bit_oldRank = createBitmapFont("50px RankNum", "456", {x:-50, y:-10}, "right");
    this.bit_newRank = createBitmapFont("50px RankNum", "123", {x:50, y:-10}, "left");
    this.spr_arrow.addChild(this.bit_oldRank);
    this.spr_arrow.addChild(this.bit_newRank);

    this.rankUpContainer.visible = false;

    this.tex_me = new PIXI.Texture.fromFrame("panel_me.png");
    this.tex_empty = new PIXI.Texture.fromFrame("panel_empty.png");
    this.tex_first = new PIXI.Texture.fromFrame("panel_top.png");
    this.tex_other = new PIXI.Texture.fromFrame("panel_other.png");

    this.spr_Medal = SpriteLoad(this.spr_bg, "medal_1.png", 0, 0);
    this.tex_Medal_1 = new PIXI.Texture.fromFrame("medal_1.png");
    this.tex_Medal_2 = new PIXI.Texture.fromFrame("medal_2.png");
    this.tex_Medal_3 = new PIXI.Texture.fromFrame("medal_3.png");
    this.spr_Medal.visible = false;

    this.tex_1 = new PIXI.Texture.fromFrame("medal_1_small.png");
    this.tex_2 = new PIXI.Texture.fromFrame("medal_2_small.png");
    this.tex_3 = new PIXI.Texture.fromFrame("medal_3_small.png");

    this.startY = 0;
    this.firstInterval = 142;
    this.interval = 125;

    this.arr_dailySlots = [];
    this.arr_totalSlots = [];
    this.arr_posY = [];

    this.bit_RankNumber = createBitmapFont("50px RankNum", "123", {x:0, y:0}, "center");
    this.bit_RankNumber.visible = false;

    this.makeSlots();

    this.bShowDailyEffect = false; //rankUp을 한 경우에만 true가 된다..
    this.bShowTotalEffect = false; //rankUp을 한 경우에만 true가 된다..
    this.bFlag_showAgain = false;

    this.dailyContainer.visible = false;
    this.totalContainer.visible = false;
    this.slice_onDaily.visible = false;
    this.slice_onTotal.visible = false;

    GAME.playSpine(this.spine_rankUp, "rank_up_eff_in", false, 0);
    this.popupShield.visible = false;
    // this.spr_bg.scale.y = 0;
    this.spr_effectShielder = SpriteLoad(this.spr_bg, "white.png", 0, 0);
    this.spr_effectShielder.width = iMSX;
    this.spr_effectShielder.height = iMSY;
    this.spr_effectShielder.interactive = true;
    this.spr_effectShielder.visible = false;
    this.spr_effectShielder.alpha = 0;
}

UI_ranking.constructor = UI_ranking;

UI_ranking.prototype.makeSlots = function(){
    var i = 0; var newSlot = undefined;

    this.startY = 0;

    for(var i=0;i<6;++i){//daily set
        newSlot = new UI_ranking_slot(this, this.dailyContainer, i);
        newSlot.spr_bg.position.y = this.startY;

        this.arr_posY[i] = this.startY;//daily, total 위치 같으니까 한번만...

        if(i !== 0)
            this.startY += this.interval;
        else
            this.startY += this.firstInterval;

        if(i === 0) {
            newSlot.spr_medal = SpriteLoad(newSlot.spr_bg, "medal_1_small.png", -225, 5);
            newSlot.spr_bg.texture = this.tex_first;
        }
        else if(i === 1)
            newSlot.spr_medal = SpriteLoad(newSlot.spr_bg, "medal_2_small.png", -225, 5);
        else if(i === 2)
            newSlot.spr_medal = SpriteLoad(newSlot.spr_bg, "medal_3_small.png", -225, 5);

        this.arr_dailySlots[i] = newSlot;
        this.dailyContainer.addChild(newSlot.spr_bg);
    }///set Daily

    this.daily_signUp = new UI_ranking_slot(this, this.dailyContainer, -1);
    this.daily_signUp.spr_bg.visible = false;

    this.startY = 0;
    for(var i=0;i<6;++i){//total set
        newSlot = new UI_ranking_slot(this, this.totalContainer, i);
        newSlot.spr_bg.position.y = this.startY;

        if(i !== 0)
            this.startY += this.interval;
        else
            this.startY += this.firstInterval;

        if(i === 0) {
            newSlot.spr_medal = SpriteLoad(newSlot.spr_bg, "medal_1_small.png", -225, 5);
            newSlot.spr_bg.texture = this.tex_first;
        }
        else if(i === 1)
            newSlot.spr_medal = SpriteLoad(newSlot.spr_bg, "medal_2_small.png", -225, 5);
        else if(i === 2)
            newSlot.spr_medal = SpriteLoad(newSlot.spr_bg, "medal_3_small.png", -225, 5);

        this.arr_totalSlots[i] = newSlot;
        this.totalContainer.addChild(newSlot.spr_bg);
    }//set Total

    this.total_signUp = new UI_ranking_slot(this, this.totalContainer, -1);
    this.total_signUp.spr_bg.visible = false;
};

UI_ranking.prototype.setInit = function(){
    this.spr_Medal.visible = false;//medal 이미지 visible 초기화
    this.rankUpContainer.visible = false;//rankUp container visible 초기화
    this.spine_rankUp.skeleton.setToSetupPose();
    this.spine_rankUp.state.clearTrack(0);
};

UI_ranking.prototype.showDaily = function(){
    var ui_ranking = GAME.ui_ranking;
    SpinePlay(ui_ranking.spine_rankUp, ui_ranking.spine_rankUp.position.x, ui_ranking.spine_rankUp.position.y, "empty", 0, false);
    ui_ranking.setInit();

    ui_ranking.dailyContainer.visible = true;
    ui_ranking.totalContainer.visible = false;
    ui_ranking.slice_onDaily.visible = true;
    ui_ranking.slice_onTotal.visible = false;

    if(rankingPopupData!=null)
        ui_ranking.user_rank = rankingPopupData.newRank;

    // ui_ranking.bShowDailyEffect = true;//test
    if(!ui_ranking.bShowDailyEffect) return;

    // GAME.buttonShield.visible = true;

    ui_ranking.arr_dailySlots[0].spr_bg.visible = false;
    ui_ranking.showRankUpEffect("daily");
};

UI_ranking.prototype.showTotal = function () {
    var ui_ranking = GAME.ui_ranking;
    SpinePlay(ui_ranking.spine_rankUp, ui_ranking.spine_rankUp.position.x, ui_ranking.spine_rankUp.position.y, "empty", 0, false);
    ui_ranking.setInit();

    ui_ranking.dailyContainer.visible = false;
    ui_ranking.totalContainer.visible = true;
    ui_ranking.slice_onDaily.visible = false;
    ui_ranking.slice_onTotal.visible = true;

    if(rankingPopupData!=null)
        ui_ranking.user_rank = rankingPopupData.newCuRank;

    // ui_ranking.bShowTotalEffect = true;//test
    if(!ui_ranking.bShowTotalEffect) return;

    // GAME.buttonShield.visible = true;

    ui_ranking.arr_totalSlots[0].spr_bg.visible = false;
    ui_ranking.showRankUpEffect("total");
};

UI_ranking.prototype.update = function(){
    for(this.i=0;this.i<this.length;++this.i){
        this.arr_slots[this.i].update(deltaTime);
    }
};

UI_ranking.prototype.checkRanking = function(){
    // console.log("checkServerRanking");
    //if(kData.bFirstPlay) return;
    //MG.NM.LoadRanking(GAME.ui_ranking.cb_setRankingPop);
};

UI_ranking.prototype.showPop = function(){
    SESoundPlay(SE_BUTTON);
    if(GAME.engineInst.state !== GAME.state.STATE_OVER
    && !GAME.view.pause_bg.visible)
        GAME.view.pauseGame();

    GAME.ui_ranking.arr_dailySlots[0].spr_bg.visible = true;
    GAME.ui_ranking.arr_totalSlots[0].spr_bg.visible = true;

    if(rankingPopupData !== null && rankingPopupData !== undefined){
        if(GAME.ui_ranking.bShowDailyEffect && rankingPopupData.newRank == 1) GAME.ui_ranking.arr_dailySlots[0].spr_bg.visible = false;
        if(GAME.ui_ranking.bShowTotalEffect && rankingPopupData.newCuRank == 1) GAME.ui_ranking.arr_totalSlots[0].spr_bg.visible = false;
    }

    GAME.ui_ranking.popupShield.visible = true;
    GAME.ui_ranking.showDaily();
};

UI_ranking.prototype.closePop = function(){
    SESoundPlay(SE_BUTTON);
    if(GAME.engineInst.state !== GAME.state.STATE_OVER
    && !GAME.view.pause_bg.visible)
        GAME.view.resumeGame();

    var ui_ranking = GAME.ui_ranking;

    // ui_ranking.spr_bg.scale.y = 0;
    ui_ranking.popupShield.visible = false;
    // GAME.buttonShield.visible = false;
    ui_ranking.spine_rankUp.skeleton.setToSetupPose();

    ui_ranking.bShowDailyEffect = false;
    ui_ranking.bShowTotalEffect = false;

    ui_ranking.arr_dailySlots[0].spr_bg.visible = true;
    ui_ranking.arr_totalSlots[0].spr_bg.visible = true;//tween이 끝나기 전에 창을 닫을 수 있어

    ui_ranking.dailyContainer.visible = true;
    ui_ranking.totalContainer.visible = false;
    ui_ranking.slice_onDaily.visible = true;
    ui_ranking.slice_onTotal.visible = false;
};

//랭킹 팝업 보여주기 전 선행작업 netBase.js 의 getRankingList 이후 call...
UI_ranking.prototype.cb_setRankingPop = function(){//NetworkManager.js의 rankingData...
    var day_length = rankingData.day.length;
    var total_length = rankingData.all.length;
    var dummy = undefined; var dummy1 = undefined; var idx = 0;

    for(var i=0;i<GAME.ui_ranking.arr_dailySlots.length;++i){
        dummy = GAME.ui_ranking.arr_dailySlots[i];
        dummy1 = GAME.ui_ranking.arr_totalSlots[i];
        dummy.spr_bg.visible = false;
        dummy1.spr_bg.visible = false;

        if(dummy.spr_medal !== undefined)
            dummy.spr_medal.visible = false;
        if(dummy1.spr_medal !== undefined)
           dummy1.spr_medal.visible = false;
    }

    GAME.ui_ranking.daily_signUp.spr_bg.visible = false;
    GAME.ui_ranking.total_signUp.spr_bg.visible = false;
    //checkLoginState start
    if(loginTF === 0){//logout 상태
        //set Daily
        if(day_length!==0){//다른 기록이 있을 경우//1~5위까지 출력 6자리에 회원가입...
            for(var i=0;i<day_length;++i){
                dummy = GAME.ui_ranking.arr_dailySlots[i];
                dummy.spr_bg.visible = true;
                dummy1 = rankingData.day[i];
                dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score);
            }
            if(day_length>5) day_length = 5;
            GAME.ui_ranking.daily_signUp.spr_bg.position.y = GAME.ui_ranking.arr_posY[day_length];
            GAME.ui_ranking.daily_signUp.spr_bg.visible = true;
        }else{//다른 기록이 없는 경우
            GAME.ui_ranking.arr_dailySlots[0].setSlot(1);
            GAME.ui_ranking.daily_signUp.spr_bg.position.y = GAME.ui_ranking.arr_posY[1];
            GAME.ui_ranking.daily_signUp.spr_bg.visible = true;
        }
        //set total
        if(total_length!==0){//다른 기록이 있을 경우//있는대로 출력하고 마지막칸에 출력
            for(var i=0;i<total_length;++i){
                dummy = GAME.ui_ranking.arr_totalSlots[i];
                dummy.spr_bg.visible = true;
                dummy1 = rankingData.all[i];
                dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score);
            }
            if(total_length>5) total_length = 5;
            GAME.ui_ranking.total_signUp.spr_bg.position.y = GAME.ui_ranking.arr_posY[total_length];
            GAME.ui_ranking.total_signUp.spr_bg.visible = true;
        }else{//다른 기록이 없는 경우
            GAME.ui_ranking.arr_totalSlots[0].setSlot(1);
            GAME.ui_ranking.total_signUp.spr_bg.position.y = GAME.ui_ranking.arr_posY[1];
            GAME.ui_ranking.total_signUp.spr_bg.visible = true;
        }
    }else{//greap login 상태
        //자신의 데이터 유무 체크...
        var bEmpty_daily = true; var bEmpty_total = true;//해당 값이 false라면 해당 카테고리에 내 정보가 없다.
        for(var i=0;i<total_length;++i){
            if(rankingData.myid !== rankingData.all[i].user_id) continue;
            if(rankingData.my_all_score === 0) break;
            bEmpty_total = false;
            break;
        }

        if(!bEmpty_total){
            for(var i=0;i<day_length;++i){
                if(rankingData.myid !== rankingData.day[i].user_id) continue;
                if(rankingData.my_day_score === 0) break;//점수가 빵이면 그 카테고리에 대해 해당 유저는 미등록 상태...
                bEmpty_daily = false;
                break;
            }
        }
        //내 기록이 있는 경우...total
        if(!bEmpty_total){
            for(var i=0;i<total_length;++i){
                dummy = GAME.ui_ranking.arr_totalSlots[i];
                dummy1 = rankingData.all[i];
                if(dummy1.user_id !== rankingData.myid){
                    dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score);
                }else{
                    dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score, true);
                }
            }
        }else{//내 기록이 없는 경우....
            if(total_length!==0){
                for(var i=0;i<total_length;++i){
                    dummy = GAME.ui_ranking.arr_totalSlots[i];
                    dummy.spr_bg.visible = true;
                    dummy1 = rankingData.all[i];
                    dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score);
                }
                idx = total_length;
                if(idx >= GAME.ui_ranking.arr_totalSlots.length) idx = GAME.ui_ranking.arr_totalSlots.length-1;
                GAME.ui_ranking.arr_totalSlots[idx].setSlot(undefined, rankingData.myid, undefined, false, true);//마지막에 자기 슬롯 출력...
            }else{//어떤 기록도 없는 경우
                GAME.ui_ranking.arr_totalSlots[0].setSlot(1);
                GAME.ui_ranking.arr_totalSlots[1].setSlot(undefined, rankingData.myid, undefined, false, true);
            }
        }

        if(!bEmpty_daily){
            for(var i=0;i<day_length;++i){
                dummy = GAME.ui_ranking.arr_dailySlots[i];
                dummy1 = rankingData.day[i];
                if(dummy1.user_id !== rankingData.myid){
                    dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score);
                }else{
                    dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score, true);
                }
            }
        }else{
            if(day_length !== 0){
                for(var i=0;i<day_length;++i){
                    dummy = GAME.ui_ranking.arr_dailySlots[i];
                    dummy.spr_bg.visible = true;
                    dummy1 = rankingData.day[i];
                    dummy.setSlot(dummy1.rank, dummy1.user_id, dummy1.score);
                }
                idx = day_length;
                if(idx >= GAME.ui_ranking.arr_dailySlots.length) idx = GAME.ui_ranking.arr_dailySlots.length-1;
                GAME.ui_ranking.arr_dailySlots[idx].setSlot(undefined, rankingData.myid, undefined, false, true);//마지막에 자기 슬롯 출력...
            }else{//어떤 기록도 없는 경우
                GAME.ui_ranking.arr_dailySlots[0].setSlot(1);
                GAME.ui_ranking.arr_dailySlots[1].setSlot(undefined, rankingData.myid, undefined, false, true);
            }

        }
    }


    /!**
     * test
     * *!/
    // rankingPopupData = {oldRank:5, newRank:1, oldCuRank:10, newCuRank:2, oldScore:20, newScore:20};
    /!**
     * test end
     * *!/

    /!**
     * check rankUp
     * *!/
    if(rankingPopupData !== null && !GAME.ui_ranking.bFlag_showAgain){

        if(rankingPopupData.oldScore !== 0){//oldScore가 0이면 최초 등록...
            if(rankingPopupData.oldRank !== rankingPopupData.newRank){
                GAME.ui_ranking.bShowDailyEffect = true;
            }
        }

        if(rankingPopupData.oldCuScore !== 0){
            if(rankingPopupData.oldCuRank !== rankingPopupData.newCuRank){
                GAME.ui_ranking.bShowTotalEffect = true;
            }
        }

        if(GAME.ui_ranking.bShowDailyEffect||GAME.ui_ranking.bShowTotalEffect)
            GAME.ui_ranking.bFlag_showAgain = true;//false로 초기화는 view.replay()에서..
    }

    GAME.ui_ranking.showPop();
};

UI_ranking.prototype.showRankUpEffect = function(_type){
    this.spr_arrow.alpha = 1;
    this.rankUpContainer.visible = true;
    this.spr_effectShielder.visible = true;
    if(_type==="daily"){
        this.bit_oldRank.text = rankingPopupData.oldRank.toString();
        this.bit_newRank.text = rankingPopupData.newRank.toString();
        this.bShowDailyEffect = false;
        if(this.user_rank != 1){
            // console.log("no 1");
            this.arr_dailySlots[0].spr_bg.visible = true;
            // this.rankUpContainer.visible = true;
            SpinePlay(this.spine_rankUp, this.spine_rankUp.position.x, this.spine_rankUp.position.y,"rank_up_eff_in", 0, false);
        }else{
            // console.log("no 2");
            this.arr_dailySlots[0].spr_bg.scale.set(1.2, 1.2);
            setTimeout(function () {
                GAME.ui_ranking.arr_dailySlots[0].spr_bg.visible = true;
                TweenMax.to(GAME.ui_ranking.arr_dailySlots[0].spr_bg, 0.5, {
                    scaleX: 1, scaleY: 1, onComplete: function () {
                        // console.log("no2-1");
                        // GAME.ui_ranking.rankUpContainer.visible = true;
                        SpinePlay(GAME.ui_ranking.spine_rankUp, GAME.ui_ranking.spine_rankUp.position.x, GAME.ui_ranking.spine_rankUp.position.y
                            , "rank_up_eff_in", 0, false);
                    }
                });
            }, 100);
        }
    }else{
        this.bit_oldRank.text = rankingPopupData.oldCuRank.toString();
        this.bit_newRank.text = rankingPopupData.newCuRank.toString();
        this.bShowTotalEffect = false;
        if(this.user_rank != 1){
            // console.log("no 3");
            this.arr_totalSlots[0].spr_bg.visible = true;
            // this.rankUpContainer.visible = true;
            SpinePlay(this.spine_rankUp, this.spine_rankUp.position.x, this.spine_rankUp.position.y,"rank_up_eff_in", 0, false);
        }else {
            // console.log("no 4");
            this.arr_totalSlots[0].spr_bg.scale.set(1.2, 1.2);
            setTimeout(function () {
                GAME.ui_ranking.arr_totalSlots[0].spr_bg.visible = true;
                TweenMax.to(GAME.ui_ranking.arr_totalSlots[0].spr_bg, 0.5, {
                    scaleX: 1, scaleY: 1, onComplete: function () {
                        GAME.ui_ranking.arr_totalSlots[0].spr_bg.visible = true;
                        SpinePlay(GAME.ui_ranking.spine_rankUp, GAME.ui_ranking.spine_rankUp.position.x, GAME.ui_ranking.spine_rankUp.position.y
                            , "rank_up_eff_in", 0, false);
                    }
                });
            }, 100);
        }
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function UI_ranking_slot(parentObject, parent, _slotNum){
    this.parentObject = parentObject;

    if(_slotNum>=0){
        this.slotNum = _slotNum;
        this.spr_bg = SpriteLoad(parent, "panel_empty.png", 0, 0);

        this.txt_userRank = FontLoad(this.spr_bg, "userRank", -225, 0
            , {fontFamily:GAME.fontName[Define.LANG], fontSize:"35px", fill:"#fff799", stroke:"#000000", strokeThickness:5});

        this.txt_userName = FontLoad(this.spr_bg, "userName", 0, 0
            , {fontFamily:"Arial", fontSize:"35px", fill:"#ffffff", stroke:"#000000", strokeThickness:5}, 0.5, 0.5, 300);

        this.txt_userRecord = FontLoad(this.spr_bg, "userRecord", 250, 0
            , {fontFamily:GAME.fontName[Define.LANG], fontSize:"35px", fill:"#fff799", stroke:"#000000", strokeThickness:5}, 1, 0.5, 110);

        this.slice_edge = SpriteSliceLoad(this.spr_bg, "panel_effect.png", 0, 0, 604, 134, 38, 38, 38, 38);
        this.slice_edge.visible = false;
    }else{//회원 가입 버튼 만들 경우...
        this.slotNum = _slotNum;
        this.spr_bg = SpriteSliceLoad(parent, "btn_sign.png", 0, 0, 586, 114, 30, 30, 30, 30);
        // this.btn_confirm = new Button(parent, "btn_sign.png", 0, 0, "none", 1, 1, 0.5, 0.5, this.spr_bg);
        this.btn_confirm = new Button(parent, this.spr_bg, 0, 0, "none", 1, 1, 0.5, 0.5);
        this.btn_confirm.setCallback(function(){
            // MG.NM.ModalCall(MODAL_BUTTON_TYPE.OKCANCEL, GAME.table_modalMsg["signup"][Define.LANG]
            //     , MG.NM.JoinMember, null);
            // GAME.ui_message.showPop(GAME.flag_msgState.recommand_login);
        });

        this.slice_edge = SpriteSliceLoad(this.spr_bg, "panel_effect_sign.png", 0, 0, 604, 134, 38, 38, 38, 38);
        this.txt_signUp = FontLoad(this.spr_bg, GAME.table_language["shop05"][Define.LANG], 80, 0
            , {fontFamily:GAME.fontName[Define.LANG], fontSize:"40px", fill:"#ffffff", stroke:"#000000", strokeThickness:5}, 1, 0.5);
    }
}

UI_ranking_slot.constructor = UI_ranking_slot;

UI_ranking_slot.prototype.setSlot = function(rank, name, record, bMe, bEmpty){
    this.spr_bg.visible = true;
    this.slice_edge.visible = false;

    if(bMe === undefined) bMe = false;
    if(bEmpty === undefined) bEmpty = false;

    if(rank!==undefined) {
        switch(rank){
            case 1:
                this.spr_medal.visible = true;
                this.txt_userRank.visible = false;
                break;
            case 2:
                this.spr_medal.texture = this.parentObject.tex_2;
                this.spr_medal.visible = true;
                this.txt_userRank.visible = false;
                break;
            case 3:
                this.spr_medal.texture = this.parentObject.tex_3;
                this.spr_medal.visible = true;
                this.txt_userRank.visible = false;
                break;
            default:
                //this.spr_medal.visible = false;
                this.txt_userRank.visible = true;
                this.txt_userRank.text = rank.toString();
                break;
        }
    }else{
        this.txt_userRank.text = "***";
    }


    if(name!==undefined)
        this.txt_userName.text = name;
    else
        this.txt_userName.text = "No Data";

    fontLimited(this.txt_userName, this.txt_userName.text, 300);

    if(record!==undefined)
        this.txt_userRecord.text = record.toString();
    else
        this.txt_userRecord.text = "No Data";

    fontLimited(this.txt_userRecord, this.txt_userRecord.text, 110);

    //edge setting
    this.slice_edge.visible = bMe;

    //set Texture
    if(this.slotNum === 0) return;//1등 칸은 텍스쳐 고정

    if(bMe){
        this.spr_bg.texture = this.parentObject.tex_me;
        this.slice_edge.visible = true;
    } else if (bEmpty){
        this.spr_bg.texture = this.parentObject.tex_empty;
    } else
        this.spr_bg.texture = this.parentObject.tex_other;
};


/////////////////////////////////make new rank up effect/////////////
*/

/**
 * Created by ggumak on 2017-06-30.
 */
"use strict";

function UI_buyGunPop (){
    this.con_pop = new PIXI.Container();
    this.con_pop.interactive = true;
    // GAME.view.addChild(this.con_pop);
    this.spr_blackBG = SpriteLoad(this.con_pop, "white.png", iCSX, iCSY);
    this.spr_blackBG.tint = 0x000000;
    this.spr_blackBG.width = iMSX;
    this.spr_blackBG.height = iMSY;
    this.spr_blackBG.alpha = 0.8;

    //this.spr_bg = SpriteLoad(this.con_pop, "popup_ui_2.png", iCSX, iCSY);
	this.spr_bg = SpriteSliceLoad(this.con_pop, "popup.png", iCSX, iCSY, 690, 765, 322, 199, 147, 74);
    this.spr_gunImg = SpriteLoad(this.spr_bg, "gun_shop_slot_1.png", 0, -140);
    this.spr_priceBG = SpriteLoad(this.spr_bg, "game_over_popup_slot_1.png", 0, 170);
    this.btn_cancle = new Button(this.spr_bg, "btn_shop_no.png", -150, 300);
    this.btn_cancle.setCallback(this.close, this);
    this.btn_confirm = new Button(this.spr_bg, "btn_shop_ok.png", 150, 300);
    this.btn_confirm.setCallback(this.cb_confirm, this);

    FontLoad(this.btn_cancle.sprite, GAME.table_language["button02"][Define.LANG], 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"35px", fill:"#ffffff", stroke:"#000000", strokeThickness:4});//btn_cancle text
    FontLoad(this.btn_confirm.sprite, GAME.table_language["button01"][Define.LANG], 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"35px", fill:"#ffffff", stroke:"#000000", strokeThickness:4});//btn_confirm text

    FontLoad(this.spr_bg, GAME.table_language["popup06"][Define.LANG], 0, -345
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#ffffff", stroke:"#000000", strokeThickness:4});//title text

    this.txt_gunName = FontLoad(this.spr_gunImg, "name", 0, -(this.spr_gunImg.height/2)+42
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"30px", fill:"#ffffff", stroke:"#000000", strokeThickness:4});
    this.txt_buff_0 = FontLoad(this.spr_bg, "buff_0", 0, 30
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"35px", fill:"#ffffff", stroke:"#000000", strokeThickness:4}, 0.5, 0.5, 600);
    this.txt_buff_1 = FontLoad(this.spr_bg, "buff_1", 0, 70
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"35px", fill:"#ffffff", stroke:"#000000", strokeThickness:4}, 0.5, 0.5, 600);

    this.txt_price = FontLoad(this.spr_priceBG, "Price", 0, 0
        , {fontFamily:GAME.fontName[Define.LANG], fontSize:"55px", fill:"#ffffff", stroke:"#000000", strokeThickness:4});

    this.gunPrice = 0;
    this.slotID = 0;
    this.con_pop.visible = false;
}

UI_buyGunPop.prototype.show = function (_slot_id, _price, _name) {
    this.slotID = _slot_id;
    this.gunPrice = _price;
    this.txt_price.text = "$"+_price.formatMoney(0);
    this.txt_gunName.text = _name;

    this.con_pop.visible = true;
    this.spr_gunImg.texture = PIXI.Texture.fromFrame("gun_shop_slot_"+(_slot_id+1).toString()+".png");

    this.txt_buff_0.visible = false;
    this.txt_buff_1.visible = false;
    this.setGunSkillDesc();
};

UI_buyGunPop.prototype.close = function () {
    this.con_pop.visible = false;
};

UI_buyGunPop.prototype.cb_confirm = function () {
    kData.iUserOwnGold -= this.gunPrice;
    kData.arrBuyRecords[this.slotID] = true;

    /**
     * 네이버 총기 구매 처리
     * */
    function cb_network() {
        GAME.view.shop_txtUserOwnGold.text = kData.iUserOwnGold.formatMoney(0);
        GAME.view.setSlotState();
        GAME.view.shop_gunSlots[GAME.ui_gunBuyPop.slotID].state = GAME.view.shop_gunSlots[GAME.ui_gunBuyPop.slotID].STATE.EQUIP;
        GAME.view.shop_gunSlots[GAME.ui_gunBuyPop.slotID].setButton();
        checkNextGunSlot();
        setUnlockGunData();
        GAME.ui_gunBuyPop.close();
    }

    MG.NM.AppDataPut(kData, cb_network);
};

UI_buyGunPop.prototype.setGunSkillDesc = function(){
    var gunData = GAME.gunData[this.slotID];
    var i = 0; var value = 0; var type = 0; var pixiFont = undefined;
    for(var i=0;i<2;++i){
        type = gunData["skill"+(i+1).toString()];
        if(type === -1) break;
        value = gunData["value"+(i+1).toString()];
        pixiFont = this["txt_buff_"+i.toString()];
        pixiFont.text = GAME.table_language["gunbuff"+type.toString()][Define.LANG];
        pixiFont.text = pixiFont.text.replace("{0}", value.toString());
        pixiFont.visible = true;

        switch(type){
            case 100://돈 획득량 증가.
                pixiFont.style.fill = "#7cd268";
                break;
            case 101://층 이동 요금 할인.
                pixiFont.style.fill = "#ffae57";
                break;
            case 102://라이프 증가.
                pixiFont.style.fill = "#00b4ff";
                break;
            case 103://라이프 감소.
                pixiFont.style.fill = "#f34213";
                break;
        }
    }
};
"use strict";

var MoviGame = function(){
	this.iMSW = 720;
	this.iMSH = 1280;
	this.iCSX = this.iMSW/2;
	this.iCSY = this.iMSH/2;
	this.NM = new NetworkManager();
};
MoviGame.prototype = {
	Initialize : function(){
		// 디바이스 구분.
		if (/Android/i.test(navigator.userAgent))
			Define.DEVICE = Enum.DEVICE_STATE.ANDROID;
		else if (/iPhone|iPad|iPod/i.test(navigator.userAgent))
			Define.DEVICE = Enum.DEVICE_STATE.IOS;
		else
			Define.DEVICE = Enum.DEVICE_STATE.PC;
	},
	/*gameExit : function (bDirect) {
		if(bDirect)history.back();
		var strExit = MSSDK.getParameterByName('lang') == "en" ? "Do you want to exit?" : "게임을 종료하시겠습니까?";
		MG.confirm("", strExit, "YES", "NO", function () {
			PopconGame.Sdk.exitGame();
		}, function () {
			history.pushState(null, document.title, location.href);
		});
	},*/
	alert:function (title, comment, cb) {
		Swal.fire({
			title: title,
			width: 400,
			html: "<br>"+comment.replace(/\n/gi, '<br>')+"<br><br>",
			allowOutsideClick: false,
		}).then(function(result){
			if (result.value) {
				if(cb) cb();
			}
		});
	},
	confirm:function (title, comment, btnYes, btnNo, cb, fcb) {
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
			cancelButtonText: btnNo,
		}).then(function(result){
			if (result.value) {
				if(cb) cb();
			}else{
				if(fcb) fcb();
			}
		});
	},
	STR2BIN:function (str) {
		var compressData = str.split('').map(function(e) {
			return e.charCodeAt(0);
		});
		var inflate = new Zlib.Deflate(compressData);
		var output = inflate.compress();
		var binstr = Array.prototype.map.call(output, function (ch) {
			return String.fromCharCode(ch);
		}).join('');
		return btoa(binstr);
	},
	BIN2STR:function (binstr) {
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
	}
};
var MG = new MoviGame();
MG.Initialize();
var iMSX = 720;
var iMSY = 1280;

var iCSX = iMSX/2;
var iCSY = iMSY/2;

var isChrome = false;
var isIE11 = false;
var isIE = false;

var user_id = undefined;
detectBrowser();

function detectBrowser(){
	var userAgent = navigator.userAgent.toLowerCase();
	
	if(userAgent.indexOf("msie ") != -1)
		isIE = true;
	else if(userAgent.indexOf("chrome") != -1)
		isChrome = true;
	else if(userAgent.indexOf("trident") != -1)
		isIE11 = true;
}

var renderer = PIXI.autoDetectRenderer(iMSX, iMSY);
renderer.backgroundColor = 0xffffff;//0x2e85ed(파랑)

// var objDiv;
// if(yahooIN !== undefined){
//     objDiv = document.getElementById("game_area");
//     objDiv.appendChild(renderer.view);
//     $("#game_mask").css("background-image", "url(\"https://movigame.jp/img/Gameplaybg_0007.gif\")");
// }

$(window).resize(resize);
window.onorientationchange = resize;

document.body.appendChild(renderer.view);
resize();


function resize()
{
	var w, h, per;	// modifier : kook : 일본대응. : yahooIN
	w = window.innerWidth;
	h = window.innerHeight;

	if(w * iMSY <= h * iMSX){
		renderer.view.style.position = "absolute";	// "absolute"가 셋팅되어 있으면 가운데 정렬이 되지 않는다.
		renderer.view.style.width = "100%";
		renderer.view.style.height = "100%";
		renderer.view.style.left = "0px";
		renderer.view.style.top = "0px";
	}else{ // 게임 사이즈보다 세로가 더 클경우 자동확대되는것을 방지한다.
		if(((h * iMSX) / (w * iMSY)*100) >= 80){
			renderer.view.style.position = "absolute"; // 이 옵션을 사용할경우 윈도우 사이즈에 맞게 스케일링이 되어 버린다.
			renderer.view.style.width = "100%";
			renderer.view.style.height = "100%";
			renderer.view.style.left = "0px";
			renderer.view.style.top = "0px";
		}else{
			per = (h * iMSX) / (w * iMSY);
			renderer.view.style.position = "absolute";
			renderer.view.style.width = (per*100) + "%";
			renderer.view.style.height = "100%";
			renderer.view.style.left = "0px";//(1-per) * w / 2 + "px";
			renderer.view.style.top = "0px";
		}
	}
}

function SpriteLoad(parent, url, px, py, ax, ay)
{
	if(ax === undefined) ax = 0.5;
	if(ay === undefined) ay = 0.5;
	var spr = new PIXI.Sprite.fromFrame(url);
	spr.position.x = px;
	spr.position.y = py;
	spr.anchor.x = ax;
	spr.anchor.y = ay;
	
	parent.addChild(spr);
	
	return spr;
}

function SpriteSliceLoad(parent, url, px, py, w, h, lc, rc, tc, bc, ax, ay)
{
	var main = new PIXI.Container();
	var tex = new PIXI.Texture.fromFrame(url);
	var bw = tex.width;
	var bh = tex.height;

	if(lc===undefined) lc = ((bw/2)|0)-1;
	if(rc===undefined) rc = ((bw/2)|0)-1;
	if(tc===undefined) tc = ((bh/2)|0)-1;
	if(bc===undefined) bc = ((bh/2)|0)-1;
	if(ax===undefined) ax = 0.5;
	if(ay===undefined) ay = 0.5;

	var TL = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x, tex.frame.y, lc, tc)));
	TL.position.set((-w*ax), (-h*ay));
	var TC = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x+lc, tex.frame.y, bw-lc-rc, tc)));
	TC.position.set((-w*ax)+lc, (-h*ay));
	TC.scale.set((w-lc-rc)/(bw-lc-rc), 1);
	var TR = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x+(bw-rc), tex.frame.y, rc, tc)));
	TR.position.set((-w*ax)+w-rc, (-h*ay));
	var CL = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x, tex.frame.y+tc, lc, bh-tc-bc)));
	CL.position.set((-w*ax), (-h*ay)+tc);
	CL.scale.set(1, (h-tc-bc)/(bh-tc-bc));
	var CC = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x+lc, tex.frame.y+tc, bw-lc-rc, bh-tc-bc)));
	CC.position.set((-w*ax)+lc, (-h*ay)+tc);
	CC.scale.set((w-lc-rc)/(bw-lc-rc), (h-tc-bc)/(bh-tc-bc));
	var CR = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x+(bw-rc), tex.frame.y+tc, rc, bh-tc-bc)));
	CR.position.set((-w*ax)+w-rc, (-h*ay)+tc);
	CR.scale.set(1, (h-tc-bc)/(bh-tc-bc));
	var BL = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x, tex.frame.y+(bh-bc), lc, bc)));
	BL.position.set((-w*ax), (-h*ay)+h-bc);
	var BC = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x+lc, tex.frame.y+(bh-bc), bw-lc-rc, bc)));
	BC.position.set((-w*ax)+lc, (-h*ay)+h-bc);
	BC.scale.set((w-lc-rc)/(bw-lc-rc), 1);
	var BR = new PIXI.Sprite(new PIXI.Texture(tex.baseTexture, new PIXI.Rectangle(tex.frame.x+(bw-rc), tex.frame.y+(bh-bc), rc, bc)));
	BR.position.set((-w*ax)+w-rc, (-h*ay)+h-bc);

	main.addChild(TL);
	main.addChild(TC);
	main.addChild(TR);
	main.addChild(CL);
	main.addChild(CC);
	main.addChild(CR);
	main.addChild(BL);
	main.addChild(BC);
	main.addChild(BR);
	main.position.set(px, py);
	parent.addChild(main);
	return main;
}

function SlicedSpriteChangeTexture(_spr,_textureURL) {
	var tex = new PIXI.Texture.fromFrame(_textureURL);

	for(var i=0,imax = 9;i<imax;++i){
		_spr.children[i].texture = new PIXI.Texture(tex, _spr.children[i]._texture._frame);
	}
}

function SlicedSpriteChangeTexture_01(_sliceSpr, _texture){
	for(var i=0,imax = 9;i<imax;++i){
		_sliceSpr.children[i].texture = new PIXI.Texture(_texture, _sliceSpr.children[i]._texture._frame);
	}
}

function SpinePlay(spine, x, y, aniName, trackIndex, loop)
{
	if(trackIndex === undefined) trackIndex = 0;
	if(loop === undefined) loop = false;
	spine.visible = true;
	spine.alpha = 1;
	if(x != null) spine.position.x = x;
	if(y != null) spine.position.y = y;
	// spine.state.clearTracks();				//
	spine.state.setAnimation(trackIndex, aniName, loop);
}

function SpinePlay_1(spine, aniName, trackIndex, loop){
	if(trackIndex === undefined) trackIndex = 0;
	if(loop === undefined) loop = false;
	spine.visible = true;
	spine.alpha = 1;
	spine.state.timeScale = 1;

	spine.state.setAnimation(trackIndex, aniName, loop);
}
////////////////////////FONT////////////////////////////////////////
function FontLoad(parent, str, x, y, style, ax, ay, limitWidth)
{
	if(limitWidth === undefined) limitWidth = 0;
	if(ax === undefined) ax = 0.5;
	if(ay === undefined) ay = 0.5;
	var txt = new PIXI.Text(str, style);
	parent.addChild(txt);
	txt.anchor.set(ax, ay);
	txt.position.x = x;
	txt.position.y = y;
	
	if(limitWidth > 0 && txt.width > limitWidth) //
		txt.scale.set(limitWidth/txt.width);

	return txt;
}

function fontLimited(_pixiTextObj, _text, _limitWidth){
	_pixiTextObj.scale.set(1);
	_pixiTextObj.text = _text;
	if(_limitWidth>0 && _pixiTextObj.width>_limitWidth){
		_pixiTextObj.scale.set(_limitWidth/_pixiTextObj.width);
	}
}
//////save && load///////
var SAVE_VER = 1;
var kData = new Data();
function Data(){
	this.iVer = SAVE_VER;
	this.bSoundSE = true;
	this.bSoundBGM = true;
	this.bFirstPlay = false;
	this.iUserOwnGun = 0;
	this.iUserOwnGold = 0;
	this.iBestFloorRealTime = 1;
	this.iBestFloor = 0 ;
	this.iClearFloor = 0;
	this.arrBuyRecords = [true];
	this.isTutorialFinished = false;
	this.continueRewardedTimeStamp = 0;
	this.bGetLoginBonus = false;
	this.iNthLoginDay = 1;
	this.previousLoginBonusDate = 0;
	this.isConnected = false;
}

/*function InitData()
{
	console.log("=== InitData() ===");

	kData.iVer = 1;
	kData.bSoundSE = true;
	kData.bSoundBGM = true;
	kData.bFirstPlay = true;
	kData.iUserOwnGun = 0;
	kData.iUserOwnGold = 0;
	// kData.iShowAdTime = 0;
	kData.iBestFloor = 0;
	kData.iClearFloor = 0;

	kData.arrBuyRecords = [true];//배열 초기화
	kData.iHeart = 0;
	// kData.userRank = undefined;

	// kData.gold_ad_time_1 = 0;
	// kData.gold_ad_time_2 = 0;
	// kData.gold_ad_time_3 = 0;

	//SaveDataInClient();
}*/

/*function SaveDataInClient()
{
	var strJson = JSON.stringify(kData);
	localStorage.setItem("Neo_ZombieGun.gamegrape.co.kr", strJson);
}

function LoadDataInClient()
{
	var strJson = localStorage.getItem("Neo_ZombieGun.gamegrape.co.kr");
	if (strJson != null) {
		kData = JSON.parse(strJson);
		if (kData.iVer === undefined || kData.iVer != SAVE_VER) //
			InitData();
	}
	else
		InitData();
}*/
/////////////////////////

/////////sound///////////
var arrBGM = [];
var arrSE = [];

var BGM_BG = 0;
var SE_BUTTON = 0;
var SE_ZOMBIE_DIE_1 = 1;
var SE_ZOMBIE_DIE_2 = 2;
var SE_HUMAN_DIE = 3;
var SE_ELEVATOR_MOVE = 4;
var SE_ELEVATOR_ARRIVE = 5;
var SE_ELEVATOR_OPEN = 6;
var SE_ELEVATOR_CLOSE = 7;
var SE_SIREN_RED = 8;
var SE_SIREN_BLUE = 9;
var SE_SPEEDUP = 10;
var SE_ZOMBIE_WIN = 11;
var SE_GAMEOVER = 12;
var SE_GUN_0 = 13;
var SE_GUN_1 = 14;
var SE_GUN_2 = 15;
var SE_GUN_3 = 16;
var SE_GUN_4 = 17;
var SE_GUN_5 = 18;
var SE_GUN_6 = 19;
var SE_GUN_7_1 = 20;
var SE_GUN_7_2 = 21;
var SE_ZOMBIE_DIE_3 = 22;
var SE_ZOMBIE_DIE_4 = 23;
var SE_LifeDown = 24;
var SE_GUN_8 = 25;

var iBGMCurrent = -1;
// var iBGMOld = -1;

// var soundCtrl = [];
// var bgm_title;

function BGMSoundPlay(index, loop)
{
	if(kData.bSoundBGM == false) return;
	if(loop === undefined) loop = true;
	if(arrBGM[index].playing()) return;

	arrBGM[index]._loop = loop;
	arrBGM[index].play();
	iBGMCurrent = index;
}

function BGMSoundStop()
{
	if(kData.bSoundBGM == false) return;
	if(iBGMCurrent == -1) return;
	arrBGM[iBGMCurrent].stop();
}

function BGMSoundPause()
{
	if(iBGMCurrent == -1) return;
	if(iBGMCurrent != -1)
		arrBGM[iBGMCurrent].pause();
}

function SESoundPlay(index, loop)
{
	if(!kData.bSoundSE) return;
	if(loop === undefined) loop = false;

	arrSE[index]._loop = loop;
	arrSE[index].play();
}

function SESoundStop(index)
{
	// for(var i=0;i<arrSE.length;++i) {
	//     arrSE[i].stop();
	// }
	arrSE[index].stop();
}

function SESoundPause()
{
	for(var i=0;i<arrSE.length;++i) {
		arrSE[i].pause();
	}
}

function SESoundResume()
{
	if(kData.bSoundSE == true) {
		for(var i=0;i<arrSE.length;++i) {
			arrSE[i].play();
		}
	}
}

function SoundPause()
{
	BGMSoundPause();
	SESoundPause();
}

/////////////////////////

///////////////////////////////////
///////////need data///////////////
///////////////////////////////////
var tbImgGame = [
	"assets/img/back_2.jpg",
	"assets/img/back.png",
	"assets/img/gun_range.jpg",
	"assets/img/touch_area.png",
	"assets/img/all.png",
	"assets/img/grade_violence.png",
	"assets/img/btn_exit.png",
	////ui_atlas////////
	"assets/atlas/atlas-0.json",
	"assets/atlas/atlas-1.json",
];
//////////////////////test browser active//////////////////////////
var bPrev_bgmOnOff = false;
var bPrev_SEOnOff = false;

window.addEventListener('beforeunload', function(eventObject) {
	var returnValue = undefined;
	// if (! inFormOrLink) {
	//     returnValue = "Do you really want to close?";
	// }
	// eventObject.returnValue = returnValue;

	// loadFullAD();//광고호출

	//MG.storage.set(Define.SAVE_DATA,MG.CurrentUser.AllSaveBytes() );
	//console.log('F5=================================================');

	return returnValue;
});

window.addEventListener('focus', function() {
	// console.log("focus event");
	// if(GAME && GAME.engineInst && GAME.engineInst.state) {
	// 	if (GAME.engineInst.state === GAME.state.STATE_TITLE && kData.bSoundBGM) {
	// 		BGMSoundPlay(BGM_BG, true);
	// 	}
	// }
	// kData.bSoundBGM = bPrev_bgmOnOff;
	// kData.bSoundSE = bPrev_SEOnOff;

	MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
		if(GAME && GAME.engineInst && GAME.engineInst.state) {
			if (GAME.engineInst.state === GAME.state.STATE_TITLE && kData.bSoundBGM) {
				BGMSoundPlay(BGM_BG, true);
			}
		}
	});
}, false);

//윈도우창을 닫을때 이벤트.
window.addEventListener('blur', function() {
	// console.log("blur");
	SoundPause();
	// bPrev_bgmOnOff = kData.bSoundBGM;
	// bPrev_SEOnOff = kData.bSoundSE;
	// kData.bSoundBGM = false;
	// kData.bSoundSE = false;

}, false);

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
	if (document[hidden]) {
		SoundPause();
	} else {
		if(GAME.engineInst.state === GAME.state.STATE_TITLE && kData.bSoundBGM)
			BGMSoundPlay(BGM_BG, true);
	}
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);//success~~~~!!!!!
/////////////////////////////////////////////////////////////////////////////////////////////////////
function Timer(parent, fontStyle, coolTime, px, py, ax, ay){//coolTime : seconds
	if(px === undefined) px = 0;
	if(py === undefined) py = 0;
	if(ax === undefined) ax = 0.5;
	if(ay === undefined) ay = 0.5;

	this.txt_coolTime = FontLoad(parent, "00:00", px, py
		, fontStyle, ax, ay);

	// this.coolEndTime = 0;
	this.coolTime = coolTime;
	this.remainTime = 0;
	this.curTime = 0;
	this.days = 0;
	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;
	this.remainTime = undefined;

	this.cb_ableFunction = undefined;

	this.bEndCool = false;

	this.txt_coolTime.visible = false;
}

Timer.constructor = Timer;

Timer.prototype.update = function(){
	if(this.remainTime > 0){
		this.minutes = (this.remainTime/60) | 0;
		this.hours = (this.minutes/60) | 0;
		this.days = (this.hours/60) | 0;
		this.seconds = (this.remainTime % 60) | 0;

		if(this.days>0){
			this.txt_coolTime.text = this.days.toString()+"D";
		} else if(this.hours>0){
			this.txt_coolTime.text = this.hours.toString()+"H";
		} else {
			if(this.minutes < 10)
				this.minutes = "0" + this.minutes.toString();
			else
				this.minutes = this.minutes.toString();
			if(this.seconds < 10)
				this.seconds = "0" + this.seconds.toString();
			else
				this.seconds = this.seconds.toString();
			this.txt_coolTime.text =  this.minutes + ":" + this.seconds;
		}
	}
};

Timer.prototype.checkRemainTime = function(_this){
	if(this.remainTime<=0){
		this.remainTime = 0;
		if(this.cb_ableFunction === undefined) return;
		this.cb_ableFunction(_this);
	}
};
var STATE_NONE = 0;
var STATE_LOAD = 10000;
var STATE_GAME = 20000;

var state = STATE_NONE;

//var testInit = undefined;
//var addUserGold = undefined;
//var infiniteContinue = undefined;
var bInfiniteCont = false;//debug

var deltaTime = 0;
var curTime = Date.now();
var lastTime = Date.now();

function checkDeltaTime(){
	curTime = Date.now();
	deltaTime = (curTime - lastTime) * 0.001;
	lastTime = curTime;
}

var touch_area_left = undefined;
var touch_area_right = undefined;

var dataloader = GUMA.txtJsonConverter;
var loader = PIXI.loader;
var stage = new PIXI.Container();
var engine;
var spines = {};

///set loading bar start///
var sLoading = new PIXI.Container();

var loadingcount=0;           //로딩    카운트
var loadingcountmax = 75;      //로딩맥스 카운트

/*var loadingscalemax = 223;    //스케일 480보다 1많게 //이수치는 건드리지말것
var sprLogo = undefined;
var sprLogoBg = undefined;
var sprLogoProg = undefined;
var sprLogoMask = undefined;*/
var txtLoading = undefined;
//var dummyFont = undefined;
///set loading bar end///

window.addEventListener("load", function() {
	MSSDK.initializeAsync({}, function(){   // {isBanner:true}광고 결제로 인해 광고가 안보여야 할경우 isBanner:false로 설정해준다.
		MG.NM.LocalLoad(function(){
			adsInit({isBanner:true});
			if(kData.iVer < Define.SAVE_VER){
				// todo : 마이그레이션 작업
			}

			MSSDK.audioIsEnabled(function (onoff){  //게임스낵 사운드체크
				kData.bSoundBGM = kData.bSoundSE = onoff;
			});

			//MSSDK.scoreUpdate(kData.iBestFloor);//GameSnacks

			update();
		}.bind(this));
	}.bind(this));

	// 3G환경에서 속도가 느리고 이미지가 캐싱되어 있을경우 세이브데이터보다 UI가 먼저 셋팅되어 이렇게 처리힘..
	// loader.add("assets/img/pop.png", "assets/img/pop.png");
	// loader.add("assets/img/movi.png", "assets/img/movi.png");

	loader.add('assets/img/load/logo_movisoft_0.png', 'assets/img/load/logo_movisoft_0.png');
	loader.once("complete", temp);
	loader.load();

});

var converter = GUMA.txtJsonConverter;

function temp() {
	converter.add("levelData", "assets/dataFile/levelData.txt");
	converter.add("patternData", "assets/dataFile/patternData.txt");
	converter.add("gunData", "assets/dataFile/gunData.txt");
	converter.add("languageData", "assets/dataFile/languageData.txt");
	converter.add("modalMsgData", "assets/dataFile/modal_msgData.txt");

	converter.once(loadResource);
	converter.load();
}

var gLoadArc;
var txtLoading;
function loadResource(){
    tbImgGame.push("assets/img_"+Define.LANG+"/tuto_1.jpg");
    tbImgGame.push("assets/img_"+Define.LANG+"/tuto_2.jpg");
    tbImgGame.push("assets/img_"+Define.LANG+"/tuto_3.jpg");
    tbImgGame.push("assets/img_"+Define.LANG+"/tuto_4.jpg");
    loader.add(tbImgGame);
    var tSP = "assets/spine/";
    loader.add("beShot", tSP+"beShot/gun_hit_eff.json");
    loader.add("bloodEffect", tSP+"bloodEffect/bood_eff.json");
    loader.add("elevator", tSP+"elevator/elevator_animation.json");
    loader.add("gun_1", tSP+"gun/gun_1_action.json");
    loader.add("title", tSP+"title/title_ani.json");
    loader.add("txtGameOver", tSP+"textGameOver/text_game_over.json");
    loader.add("txtSpeedUp", tSP+"textSpeedUp/text_speedup.json");
    loader.add("target", tSP+"target/target.json");
    loader.add("walkers", tSP+"walkers/enemy_human_all.json");
    loader.add("blueSiren", tSP+"siren_blue/elevator_siren_blue.json");
    loader.add("redSiren", tSP+"siren_red/elevator_siren_red.json");
    //loader.add("tutoKeyboard", tSP+"tutoKeyboard/tutorial_key_board.json");
    loader.add("sparkle", tSP+"sparkle/popup_eff.json");
    loader.add("newBest", tSP+"newBest/new_best_eff.json");
    loader.add("heart", tSP+"heart/heart_life.json");
    loader.add("use_heart", tSP+"cashwalk_heart/cashwork_heart.json");
    loader.add("line", tSP+"electronicLine/back_ground_eff.json");
    //loader.add("rankUp", tSP+"rankUp/rank_up_eff.json");
    loader.add("gunUnlock", tSP+"gun_unlock_ani.json");



    // if(lang==="ja"){
    //     Define.LANG = "jp";
    // }else{
    //     if(lang==="ko") Define.LANG = "kr";
    //     else if(lang==="en") Define.LANG = lang;
    // }

    // Define.LANG = "en";//test
    /**
     * 언어 대응 엔드
     * */

	loader.add("bitmapNum", "assets/font/floor_number_export.xml");
	loader.add("FloorFont", "assets/font/floor_number_2_export.xml");
	loader.add("shopBitFont", "assets/font/shop_no_export.xml");
	loader.add("rankNum", "assets/font/rankNum.xml");

    GAME.table_language = converter.jsonObjects.languageData;
    GAME.table_modalMsg = converter.jsonObjects.modalMsgData;

    // kMGMenu = new MGMenu(MGM_VERTICAL, GAME.table_language["MGM_Title"][Define.LANG], GAME.table_language["MGM_Contents"][Define.LANG], ["DAILY", "TOTAL"], 4, 'greappoint');
    // kMGMenu.load(user_id);

	//renderer.backgroundColor = 0xffcc3c; // 백그라운드 컬러를 변경한다.//예전
	renderer.backgroundColor = 0xffffff; // 백그라운드 컬러를 변경한다.
	// var arc = new PIXI.Graphics();
	// arc.beginFill(0xe7eaf0, 1);
	// arc.arc(iCSX, 520, 250, 0, Math.PI*2);
	// sLoading.addChild(arc);
	// gLoadArc = new PIXI.Graphics();
	// gLoadArc.beginFill(0xfe7234, 1);
	// gLoadArc.arc(0, 0, 250, (Math.PI/180)*(-90), (Math.PI/180)*(360-90-0), true, 360);
	// gLoadArc.position.set(iCSX, 520);
	// sLoading.addChild(gLoadArc);
	// SpriteLoad(sLoading, "assets/img/pop.png", iCSX, 520);
	// SpriteLoad(sLoading, "assets/img/movi.png", iCSX, 836);

	//SpriteLoad(sLoading, "assets/img/load/logo_movisoft_0.png", iCSX, MG.iCSY - 100);
	//txtLoading = FontLoad(sLoading, "0%", iCSX, MG.iCSY + 135, {fontFamily:'Arial', fontSize:'32px', fill:"#636363"});
	txtLoading = FontLoad(sLoading, "0%", iCSX, MG.iCSY, {fontFamily:'Arial', fontSize:'32px', fill:"#636363"});
	stage.addChild(sLoading);

	//로딩바작동
	loader.on("progress", function (loader, resources){
		loadingcount+=1;
		var progbias=loadingcount/loadingcountmax;
		var prog = progbias*100;
		var progcrop = prog<1?1:prog>100?100:prog;
		txtLoading.text = Math.floor(progcrop)+"%";
		//gLoadArc.arc(0, 0, 250, (Math.PI/180)*(-90), (Math.PI/180)*(270-(3.5999*progcrop)), true, 360);
	});
	loader.once("complete", loadTextData);
	state = STATE_LOAD;
	// update();
}

function loadTextData(loader, res){
	spines.beShot = res.beShot.spineData;
	spines.bloodEffect = res.bloodEffect.spineData;
	spines.elevator = res.elevator.spineData;
	spines.gun_1 = res.gun_1.spineData;
	spines.title = res.title.spineData;
	spines.txtGameOver = res.txtGameOver.spineData;
	spines.txtSpeedUp = res.txtSpeedUp.spineData;
	spines.target = res.target.spineData;
	spines.walkers = res.walkers.spineData;
	spines.blueSiren = res.blueSiren.spineData;
	spines.redSiren = res.redSiren.spineData;
//	spines.tutoKeyboard = res.tutoKeyboard.spineData;
	spines.sparkle = res.sparkle.spineData;
	spines.newBest = res.newBest.spineData;
    spines.heart = res.heart.spineData;
    spines.use_heart = res.use_heart.spineData;
	spines.line = res.line.spineData;
//	spines.rankUp = res.rankUp.spineData;
	spines.gunUnlock = res.gunUnlock.spineData;

    //howler
	var tSO = "assets/sound/";
    arrBGM.push(new Howl({src:[tSO+"BGM.mp3", tSO+"BGM.ogg"]}));
    arrSE[SE_BUTTON] = new Howl({src:[tSO+"Click.mp3", tSO+"Click.ogg"]});
    arrSE[SE_ZOMBIE_DIE_1] = new Howl({src:[tSO+"ZombieDie1.mp3", tSO+"ZombieDie1.ogg"]});
    arrSE[SE_ZOMBIE_DIE_2] = new Howl({src:[tSO+"ZombieDie2.mp3", tSO+"ZombieDie2.ogg"]});
    arrSE[SE_HUMAN_DIE] = new Howl({src:[tSO+"HumanDie.mp3", tSO+"HumanDie.ogg"]});
    arrSE[SE_ELEVATOR_MOVE] = new Howl({src:[tSO+"ElevatorMove.mp3", tSO+"ElevatorMove.ogg"]});
    arrSE[SE_ELEVATOR_ARRIVE] = new Howl({src:[tSO+"ElevatorStop.mp3", tSO+"ElevatorStop.ogg"]});
    arrSE[SE_ELEVATOR_OPEN] = new Howl({src:[tSO+"ElevatorOpen.mp3", tSO+"ElevatorOpen.ogg"]});
    arrSE[SE_ELEVATOR_CLOSE] = new Howl({src:[tSO+"ElevatorClose.mp3", tSO+"ElevatorClose.ogg"]});
    arrSE[SE_SIREN_RED] = new Howl({src:[tSO+"RedSiren.mp3", tSO+"RedSiren.ogg"]});
    arrSE[SE_SIREN_BLUE] = new Howl({src:[tSO+"BlueSiren.mp3", tSO+"BlueSiren.ogg"]});
    arrSE[SE_SPEEDUP] = new Howl({src:[tSO+"SpeedUp.mp3", tSO+"SpeedUp.ogg"]});
    arrSE[SE_ZOMBIE_WIN] = new Howl({src:[tSO+"ZombieWin.mp3", tSO+"ZombieWin.ogg"]});
    arrSE[SE_GAMEOVER] = new Howl({src:[tSO+"GameOver.mp3", tSO+"GameOver.ogg"]});
    arrSE[SE_GUN_0] = new Howl({src:[tSO+"Gun001.mp3", tSO+"Gun001.ogg"]});
    arrSE[SE_GUN_1] = new Howl({src:[tSO+"Gun002.mp3", tSO+"Gun002.ogg"]});
    arrSE[SE_GUN_2] = new Howl({src:[tSO+"Gun003.mp3", tSO+"Gun003.ogg"]});
    arrSE[SE_GUN_3] = new Howl({src:[tSO+"Gun004.mp3", tSO+"Gun004.ogg"]});
    arrSE[SE_GUN_4] = new Howl({src:[tSO+"Gun005.mp3", tSO+"Gun005.ogg"]});
    arrSE[SE_GUN_5] = new Howl({src:[tSO+"Gun006.mp3", tSO+"Gun006.ogg"]});
    arrSE[SE_GUN_6] = new Howl({src:[tSO+"Gun007.mp3", tSO+"Gun007.ogg"]});
    arrSE[SE_GUN_7_1] = new Howl({src:[tSO+"Gun008.mp3", tSO+"Gun008.ogg"]});
    arrSE[SE_GUN_7_2] = new Howl({src:[tSO+"Gun008_2.mp3", tSO+"Gun008_2.ogg"]});
    arrSE[SE_ZOMBIE_DIE_3] = new Howl({src:[tSO+"ZombieDie3.mp3", tSO+"ZombieDie3.ogg"]});
    arrSE[SE_ZOMBIE_DIE_4] = new Howl({src:[tSO+"ZombieDie4.mp3", tSO+"ZombieDie4.ogg"]});
    arrSE[SE_LifeDown] = new Howl({src:[tSO+"LifeDown.mp3", tSO+"LifeDown.ogg"]});
	arrSE[SE_GUN_8] = new Howl({src:[tSO+"Gun001.mp3", tSO+"Gun001.ogg"]}); //없어서 추가//체험실에만 사용하는// 스페셜건 사운드

	touch_area_left = SpriteLoad(stage, "assets/img/touch_area.png", 0, 0, 0, 0);
	touch_area_right = SpriteLoad(stage, "assets/img/touch_area.png", 360, 0, 0, 0);

	touch_area_left.alpha = 0;
	touch_area_right.alpha = 0;

	touch_area_left.interactive = true;
	touch_area_right.interactive = true;

    loadComplete();
}
var dummySecondFont = undefined;
function loadComplete(){
	var converter = GUMA.txtJsonConverter;
//	if(Define.bLocalHost == false){
//		adsInit({isBanner:true}, function(){});
//	}

    GAME.gunData = converter.jsonObjects.gunData;

    dummySecondFont = FontLoad(stage, "dummy", -100, -100,
        {fontFamily:GAME.fontName[Define.LANG], fontSize:"50px", fill:"#09eef6", stroke:"#000000", strokeThickness:5});

	GAME.engineInst = new GAME.engine();
	engine = GAME.engineInst;
	var stageManager = engine.stageManager;
	stageManager.patterns = converter.jsonObjects.patternData;
	stageManager.levelData = converter.jsonObjects.levelData;
	stageManager.createPool(30);
	
	var view = GAME.view;
	view.gunData = converter.jsonObjects.gunData;
	view.maxGunIdx = view.gunData.length-1;
	view.curShowNum = kData.iUserOwnGun;
	view.buyRecords = kData.arrBuyRecords;

    //common
    // kMGMenu = new MGMenu(MGM_VERTICAL, GAME.table_language["MGM_Title"][Define.LANG], GAME.table_language["MGM_Contents"][Define.LANG], ["DAILY", "TOTAL"], 4, 'greappoint');
    // kMGMenu.load(user_id);
    // stage.addChild(kMGMenu.main);

    // if(yahooIN===undefined) kMGMenu.HideMenu();
    //common

    /**
     * 화면 로테이션
     * */
    // var sprRotation_bg = new PIXI.Graphics();
    // sprRotation_bg.beginFill(0x2e85ed);
    // sprRotation_bg.drawRect(0, 0, iMSX, iMSY);
    // sprRotation_bg.endFill();
    // sprRotation_bg.interactive = true;
    // sRotation.addChild(sprRotation_bg);
    //
    // FontLoad(sRotation, "화면을 회전시켜 주세요.", iCSX, iCSY - 190,
    //     {fontFamily: 'Arial', fontSize: '48px', fontWeight: 'bold', fill: '#ffffff', align: "center"});
    // SpriteLoad(sRotation, "phone_rotate_2.png", iCSX, iCSY);
    // sRotation.visible = false;
    //////////////////////

	stage.removeChild(sLoading);
	stage.removeChild(dummySecondFont);

	engine.stageManager.init();
	engine.stageManager.createStage();

	GAME.view.showTitle();
	//test start
	// testInit = FontLoad(stage, "세이브초기화", 10, 60
	// 		, {fontFamily:'HYSUPM', fontSize:"20px", fill:'#ffffff', fontWeight:"bold"}, 0, 0);
	// testInit.interactive = true;
	// testInit.on("click", InitData);
	// testInit.on("tap", InitData);
    //
    // addUserGold = FontLoad(stage, "유저골드1000추가", 10, 90
    //     , {fontFamily:'HYSUPM', fontSize:"20px", fill:'#ffffff', fontWeight:"bold"}, 0, 0);
    // addUserGold.interactive = true;
    // addUserGold.on("click", addGold);
    // addUserGold.on("tap", addGold);
    // function addGold(){
    //     kData.iUserOwnGold += 1000;
    // }
    //
    // infiniteContinue = FontLoad(stage, "이어하기창 계속띄우기: false", 10, 120
     //    , {fontFamily:'HYSUPM', fontSize:"20px", fill:'#ffffff', fontWeight:"bold"}, 0, 0);
    // infiniteContinue.interactive = true;
    // infiniteContinue.on("click", infiniteCont);
    // infiniteContinue.on("tap", infiniteCont);
    //
    // function infiniteCont(){
	// 	bInfiniteCont = !bInfiniteCont;
	// 	if(bInfiniteCont)
	// 		infiniteContinue.text = "이어하기창 계속띄우기: true";
	// 	else
     //        infiniteContinue.text = "이어하기창 계속띄우기: false";
    // }
    //test End

    kData.arrBuyRecords.length = GAME.gunData.length;

    //플레이어의 최고층 검수 및 총기 해금
    for(var i=0;i<kData.arrBuyRecords.length;++i){
        if(GAME.gunData[i].floor<=kData.iBestFloor){
            kData.arrBuyRecords[i] = true;
        }
    }

    checkNextGunSlot();
    setUnlockGunData();
    state = STATE_GAME;

    //MG.NM.SendGamePlay(0);
    //MG.NM.SendGamePlay(100);
}

function update(){
	checkDeltaTime();
	
	switch(state){
	case STATE_NONE:
		break;
	case STATE_LOAD:
		break;
	case STATE_GAME:
		engine.update();
		break;
	}

    if(document.body.scrollTop !== 0) // yahooIN : 모바일페이지에서 화면이 올라가는증상을 해결함.
        document.body.scrollTop = 0;

	renderer.render(stage);
	requestAnimationFrame(update);
}