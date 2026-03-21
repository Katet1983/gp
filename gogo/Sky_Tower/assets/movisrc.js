var Define = function () {};
var Enum = function () {};

Define.txtVer = "ver.1.0.34"; // 버젼

// 파라미터 기능 삭제 해야함 /////////////////////////////
//var gBuild = "dev";
// var gBuild = "live";
// 파라미터 기능 삭제 해야함 /////////////////////////////


//var gIsStandAlone = true;       // 서버 기능 사용 유무 (삼성에 공유시 스텐드얼론 버전으로)

Enum.DEVICE_STATE = {
	PC : 0,
	IOS : 1,
	ANDROID : 2
};

Enum.LANGUAGE = {
	KR : 0,
	JP : 1,
	EN : 2,
};

Define.GAME_CODE = 164;    // 게임코드 추가
Define.GameName = 'skytower';    // 게임네임 추가
Define.SAVE_KEY = "com.movisoft.skytower";
Define.BaseKey = "com.gameHs.moviTower.";	// 기존 세이브에서 사용했던것이라 세이브 마이그레이션을 한다.

Define.SAVE_VER = 1;    // 세이브버젼
Define.IMG_VER = 1;     // 이미지 버젼
Define.SND_VER = 1;     // 사운드 버젼
Define.SPINE_VER = 1;	// 스파인 버젼
Define.DEVICE = Enum.DEVICE_STATE.PC;
Define.LANGUAGE = Enum.LANGUAGE.EN;
Define.GOOGLE_SHEETS_DATA = true;
Define.bLocalHost = (document.location.href.indexOf("localhost") !== -1 );

Define.tbLang = [Enum.LANGUAGE.KR, Enum.LANGUAGE.EN];
// Define.LANG = MSSDK.getParameterByName('lang') == "en" ? Define.tbLang[1] :Define.tbLang[0];
Define.LANG = Define.tbLang[1];
Define.PID = MSSDK.getParameterByName('id');

Define.iADCnt = 0;
Define.iTimeStemp = 0;
Define.RANKING_GAME = false;
//Define.GOOGLE_SPREADSHEET_ID = "1EuCUI5_Yr-GHXl8l2uoXSthQL_dXQUQlZcKTrLCXK2U";
//Define.SHEET_LOCAL_STRING = 'json: {"debug":false,"PlayTime":60,"FeverTime":100,"NoteCreate":[40,60,80,100],"InSul":[{"Index":0,"Max":50,"AddTime":10,"Cnt":10},{"Index":1,"Max":55,"AddTime":11,"Cnt":11},{"Index":2,"Max":60,"AddTime":12,"Cnt":12},{"Index":3,"Max":65,"AddTime":13,"Cnt":13},{"Index":4,"Max":70,"AddTime":14,"Cnt":14},{"Index":5,"Max":80,"AddTime":16,"Cnt":16},{"Index":6,"Max":90,"AddTime":18,"Cnt":18},{"Index":7,"Max":100,"AddTime":20,"Cnt":20},{"Index":8,"Max":120,"AddTime":24,"Cnt":24},{"Index":9,"Max":150,"AddTime":30,"Cnt":30}]}';

var gDebug = false;
var gFontFace = "SamsungOne700";        // SamsungOne700 : 삼성 기본 폰트   Myanmar : 미얀마 뱅골어
var BASE_TILE_WIDTH = 400;
var BASE_TILE_LEFT_POS = 0;
// var gSwingTime = 0;     // Debug... 좌우 이동속도 검증용 변수
var gBaseData = {"KEY":null, "LANGCODE":null, "COCODE":null, "TNC":null, "SSO":null};           // KEY:회원별고유키, y:언어코드, z:법인코드, s:SSo연동 구분값 'f'면 로그인창 열기, t:T&C 동의필요여부 (0:미해당, 1:해당법인)
var gPlayData = {"score":0, "quiz_count":0, "good_answer":0, "get_coin":0, "floor_count":0};    // 획득스코어, 퀴즈출현횟수, 정답횟수, 획득코인수, 최종 층수
var gSkipFloor = {"index":0, "count":0};                                                        // 앨리베니터사용유무
var gBaseScore = 10;                    // 1층 당 기본 점수
var gTileAddScore = [1, 1.2, 1.5, 2];   // (타일1:10, 타일2:10*1.2, 타일3:10*1.5, 타일4:10*2)
// var gLogTock = null;            // 로그인 로그토큰
// var gMoveLogTock = null;        // 리워드 로그토큰
// var gLobbyData = null;
// var gTowerData = null;
// var gCurrentLang = "";          // 지금 사용하는 언어코드
// var gCurrentLangName = "";      // 지금 사용하는 언어 이름
var quizList = [];              // 사지선다 퀴즈 리스트 (로그인시 서버에서 받는다)
var languageSet = [];
// var gLanguageSupportSet = [];
var gStep = 1;          // 25층마다 1단계 +
var gTILE_HEIGHT = 70;      // 타일간 높이 간격
var STEP_COUNT = 20;
var QUIZ_COUNT = 20;    // 퀴즈 출현 빈도 (url 파라미터로 지정 하면 그걸 우선순위로 적용)
var PERPECT_COUNT = 5;
var PLAY_DELAY_PENALTY_TIME = 5000;
var GOODANSWER_SIZEUP = 20;
var COMBO_SIZEUP = 20;
var COIN_COOLTIME = 300;
// var isSfx = true;
// var isBGM = true;
var gTileSkin = 1;         // 타일 스킨
var gSwingSpeedStartValue = 700;        // 스윙스피드 공식 시작값
var gSwingSpeedDownValue = 500;         // 스윙스피드 공식 목표하락값
var isPlayingSuperSkip = false;         // 슈퍼스킵중인가? (평소 200인 드롭스피드를 30으로 줄이자)
var isPlayingGoldReward = false;         // 골드 리워드 중인가?
var isPlayingDiamondReward = false;         // 다이아몬드 리워드 중인가?
// var gYouTubeDiv = null;
// var gYouTubeIFrame = null;
var gIsNowPlayingMovie = false;         // 광고동영상 플레이중인지 여부 (플레이중이면 포커스 관련 작업 중지)
var gRewardName = "";
var gIsGetReward = false;               // 광고동영상 다 보고 리워드를 받았는지 (동영상 닫기 버튼 중복으로 누루면 버그 나서)
var gStartViewMovieTime = null;             // 광고 보기 시작한 시간
var gHistoryEnterCounter = 1;         // 백버튼 커운트
var gMovieIndex = 0;                    // 현재 시청중인 리워드 종류 (1~3:코인, 4:부활)
var gStartTime = null;             // 게임 시작 시간 저장 (쉼터에 도착하면 서버에 경과시간 전송)
// var giGimmicCount = 0;                      // 코인 기믹 출현 횟수 (로그전송)
var gTouchPos = [];                     // 최근 터치 지점 3군데 저장 (쉼터에 도착하면 서버에 전송)
var gMovieUrl1 = [];                     // 코인상점의 동영상 3종류 url 분류
var gMovieUrl2 = [];                     // 코인상점의 동영상 3종류 url 분류
var gMovieUrl3 = [];                     // 코인상점의 동영상 3종류 url 분류
//var gIsOpenLobbyTnC = true;             // 로그인창이 뜨는 법인인 경우 false로 처리해서 로비에서 TnC창이 안나오도록 처리한다.
var gIsArabic = false;
// var gIsMyanmar = false;                 // 버마어 위아래 폰트 짤림
// var gIsBengal = false;                 // 뱅골어 위아래 폰트 짤림
var gIsRevival = false;             // 4번째 맵은 1회 환생권이 있다.
var gWatchingAdCount = 0;           // 게임중 광고 본 횟수 기록 (다이아타일 생성조건 때문에)
var gCrypto = null;
var gAutoDropFloorCount = 0;
var gAutoDropFloorEvent = null;
// var gFps = null;
//===============================================================================
// Phaser Text 기능 확장.
//===============================================================================
Phaser.Text.prototype.ReSize = function(txt, limit_width, limit_height){
	if(txt !== undefined)	this.text = txt;
	this.scale.set(1);
	if(this.width > limit_width) {
		if(limit_height === undefined)
			this.scale.set(limit_width/this.width);
		else if(limit_width/this.width <= limit_height/this.height)
			this.scale.set(limit_width/this.width);
	}
	if(limit_height !== undefined && this.height > limit_height) {
		if(limit_width/this.width > limit_height/this.height)
			this.scale.set(limit_height/this.height);
	}
}

// 지정한 크기를 넘어가면, ... 처리
Phaser.Text.prototype.ReSize2 = function(txt, limit_width){
	if(txt !== undefined) this.text = txt;
	this.scale.set(1);
	if(this.width > limit_width) {
		while(this.width > limit_width){
			if(this.text[this.text.length-1] === "…") {
				this.text = this.text.substring(0, this.text.length - 2);
				this.text += "…";
			}else {
				this.text = this.text.substring(0, this.text.length - 1);
				this.text += "…";
			}
		}
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

var	Random = function(){};
if (!Random.Range) {
	Random.Range = function(min, max) {
		return MG.game.rnd.integerInRange(min, max-1);
	};

	Random.RangeFloat = function(min, max) {
		return MG.game.rnd.realInRange(min, max-0.00001);
	};
}

/**
 * @return {string}
 */
var InsertComma = function(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var RemoveComma = function(x) {
	return parseInt(x.toString().replace(/,/g, ''));
};

var Shuffle = function (a) {
	var j, x, i;
	for(i=a.length; i; i-=1){
		j = Math.floor(Math.random() * i);
		x = a[i-1];
		a[i-1] = a[j];
		a[j] = x;
	}
};

// 2자리수로 맞추기
var Pad = function(i){
	var _i = "0" + i;
	_i = _i.slice(-2);
	return _i;
};

// 00:00 포멧으로 만들기
var CreateTimeFormat = function(seconds){
	var min = parseInt((seconds % 3600) / 60);
	var sec = seconds % 60;
	min = Pad(min);
	sec = Pad(sec);
	return {"m":min, "s":sec};
};
var kData = new Data();

function Data() {
	this.iVer = Define.SAVE_VER;
	this.isMigration = false;    // 기존세이브를 신규세이브로 마이그레이션 작업 여부.
	this.isAudio = true;
	this.cc = 0;                  // 보유 코인 카운트
	this.bs = 0;                  // 최고 점수
	this.bf = 0;                  // 최고 층수
	this.istut = false;           // 최초 실행 시 튜토리얼 강제 뷰
	this.t0 = "1";                // 타워 보유 현황 (1:적용중, 0:보유중, -1:미보유)
	this.t1 = "-1";               // 타워 보유 현황 (1:적용중, 0:보유중, -1:미보유)
	this.t2 = "-1";               // 타워 보유 현황 (1:적용중, 0:보유중, -1:미보유)
	this.t3 = "-1";               // 타워 보유 현황 (1:적용중, 0:보유중, -1:미보유)
	this.st0 = 0;                 // 샵의 상품 1 동영상 시청 타임스템프
	this.st1 = 0;                 // 샵의 상품 2 동영상 시청 타임스템프
	this.st2 = 0;                 // 샵의 상품 3 동영상 시청 타임스템프
	this.userName = "";           // 유저네임
}

function DataMigration() {
	if(LoadData("isAudio")){
		if(LoadData("isAudio") == "true")
		    kData.isAudio = true;
		else
		    kData.isAudio = false;
	}

	if(LoadData("cc")){
		// kData.cc = 900000;        // debug : 돈많이
		kData.cc = parseInt(LoadData("cc"));
	}
	if(LoadData("bs")){
		kData.bs = parseInt(LoadData("bs"));
	}
	if(LoadData("bf")){
		kData.bf = parseInt(LoadData("bf"));
	}
	if(LoadData("istut")){
		kData.istut = LoadData("istut");
	}
	if(LoadData("t0")){
		kData.t0 = LoadData("t0");
	}
	if(LoadData("t1")){
		kData.t1 = LoadData("t1");
	}
	if(LoadData("t2")){
		kData.t2 = LoadData("t2");
	}
	if(LoadData("t3")){
		kData.t3 = LoadData("t3");
	}
	if(LoadData("st0")){
		kData.st0 = parseInt(LoadData("st0"));
	}
	if(LoadData("st1")){
		kData.st1 = parseInt(LoadData("st1"));
	}
	if(LoadData("st2")){
		kData.st2 = parseInt(LoadData("st2"));
	}
	if(LoadData("userName")){
		kData.userName = LoadData("userName");
	}
}

function LoadData(key) {
	try {
		var td = localStorage.getItem(Define.BaseKey + key);
		if(td === null) return null;
		var _bytes = CryptoJS.AES.decrypt(td, Define.BaseKey);

		return JSON.parse(_bytes.toString(CryptoJS.enc.Utf8));
	}catch(e){
		console.error("error : LocalLoad : " + e);
		return undefined;
	}
}

/*function LoadDataFirst(cb) {
	if(LoadData("isAudio") === null){
		LocalSaveEx("isAudio", kData.isAudio);
	}else{
		if(LoadData("isAudio") == "true"){
			kData.isAudio = true;
		}else{
			kData.isAudio = false;
		}
	}

	if(LoadData("cc") === null){
		LocalSaveEx("cc", kData.cc);
	}else{
		// kData.cc = 900000;        // debug : 돈많이
		kData.cc = parseInt(LoadData("cc"));
	}
	if(LoadData("bs") === null){
		LocalSaveEx("bs", kData.bs);
	}else{
		kData.bs = parseInt(LoadData("bs"));
	}
	if(LoadData("bf") === null){
		LocalSaveEx("bf", kData.bf);
	}else{
		kData.bf = parseInt(LoadData("bf"));
	}
	if(LoadData("istut") === null){
		LocalSaveEx("istut", kData.istut);
	}else{
		kData.istut = LoadData("istut");
	}
	if(LoadData("t0") === null){
		LocalSaveEx("t0", kData.t0);
	}else{
		kData.t0 = LoadData("t0");
	}
	if(LoadData("t1") === null){
		LocalSaveEx("t1", kData.t1);
	}else{
		kData.t1 = LoadData("t1");
	}
	if(LoadData("t2") === null){
		LocalSaveEx("t2", kData.t2);
	}else{
		kData.t2 = LoadData("t2");
	}
	if(LoadData("t3") === null){
		LocalSaveEx("t3", kData.t3);
	}else{
		kData.t3 = LoadData("t3");
	}
	if(LoadData("st0") === null){
		LocalSaveEx("st0", kData.st0);
	}else{
		kData.st0 = parseInt(LoadData("st0"));
	}
	if(LoadData("st1") === null){
		LocalSaveEx("st1", kData.st1);
	}else{
		kData.st1 = parseInt(LoadData("st1"));
	}
	if(LoadData("st2") === null){
		LocalSaveEx("st2", kData.st2);
	}else{
		kData.st2 = parseInt(LoadData("st2"));
	}
	if(LoadData("userName") === null){
		LocalSaveEx("userName", kData.userName);
	}else{
		kData.userName = LoadData("userName");
	}

	if(cb) cb();
}

function SaveData() {
	console.log(":::::::::::::: SaveData :::::::::::::::::::");
	LocalSaveEx("isAudio", kData.isAudio);
	if(LoadData("cc") !== kData.cc.toString()) LocalSaveEx("cc", kData.cc);
	if(LoadData("bs") < parseInt(kData.bs.toString())) LocalSaveEx("bs", kData.bs);
	if(LoadData("bf") < parseInt(kData.bf.toString())) LocalSaveEx("bf", kData.bf);
	if(LoadData("istut") !== kData.istut) LocalSaveEx("istut", kData.istut);
	if(LoadData("t0") !== kData.t0.toString()) LocalSaveEx("t0", kData.t0);
	if(LoadData("t1") !== kData.t1.toString()) LocalSaveEx("t1", kData.t1);
	if(LoadData("t2") !== kData.t2.toString()) LocalSaveEx("t2", kData.t2);
	if(LoadData("t3") !== kData.t3.toString()) LocalSaveEx("t3", kData.t3);
	if(LoadData("st0") !== kData.st0.toString()) LocalSaveEx("st0", kData.st0);
	if(LoadData("st1") !== kData.st1.toString()) LocalSaveEx("st1", kData.st1);
	if(LoadData("st2") !== kData.st2.toString()) LocalSaveEx("st2", kData.st2);
	if(LoadData("userName") !== kData.userName) LocalSaveEx("userName", kData.userName);
}

function LocalSaveEx(key, value){
	try {
		localStorage.setItem(Define.BaseKey + key, CryptoJS.AES.encrypt(JSON.stringify(value.toString()), Define.BaseKey).toString());
	}catch(e){
		console.error("error : LocalSave : " + e);
	}
};
*/



ResourcesManager = function (game) {
    this.game = game;
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
                //this.game.load.crossOrigin = 'anonymous';

                loader && loader.apply(this.game.load, args);
            }, this);
        }
    }
};

ResourcesManager.MoviLoad ={
    'image': [
        // ['preloaderLogoMono', 'assets/img/load/movi_01.png?v='+Define.IMG_VER],
        // ['preloaderLogoColor', 'assets/img/load/movi_02.png?v='+Define.IMG_VER],
        // ['preloaderLogoText', 'assets/img/load/movi_03.png?v='+Define.IMG_VER],

        // ['pop.png', 'assets/img/load/pop.png?v='+Define.IMG_VER],
        // ['movi.png', 'assets/img/load/movi.png?v='+Define.IMG_VER]

        //['logo_movisoft_0.png', 'assets/atlas/load/logo_movisoft_0.png?v='+Define.IMG_VER],
    ]
};
//
ResourcesManager.Preloader = {
    'image': [
        ['grade', 'assets/img/load/all.png?v='+Define.IMG_VER],        // 등급표시
        ['copyright', 'assets/img/load/movi_co.png?v='+Define.IMG_VER],        // 저작권
        ['base1', 'assets/img/base1.png?v='+Define.IMG_VER],
        ['bg1-1', 'assets/img/bg1-1.png?v='+Define.IMG_VER],
        ['bg1-2', 'assets/img/bg1-2.png?v='+Define.IMG_VER],
        ['base2', 'assets/img/base2.png?v='+Define.IMG_VER],
        ['bg2-1', 'assets/img/bg2-1.png?v='+Define.IMG_VER],
        ['bg2-2', 'assets/img/bg2-2.png?v='+Define.IMG_VER],
        ['base3', 'assets/img/base3.png?v='+Define.IMG_VER],
        ['bg3-1', 'assets/img/bg3-1.png?v='+Define.IMG_VER],
        ['bg3-2', 'assets/img/bg3-2.png?v='+Define.IMG_VER],
        ['base4', 'assets/img/base4.png?v='+Define.IMG_VER],
        ['bg4-1', 'assets/img/bg4-1.png?v='+Define.IMG_VER],
        ['bg4-2', 'assets/img/bg4-2.png?v='+Define.IMG_VER],
        ['title', 'assets/img/title.png?v='+Define.IMG_VER]
    ],
    'atlas': [
        ['UI_0', 'assets/atlas/ui_0.png?v='+Define.IMG_VER, 'assets/atlas/ui_0.json?v='+Define.IMG_VER, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY],
        ['UI_map', 'assets/atlas/ui_map.png?v='+Define.IMG_VER, 'assets/atlas/ui_map.json?v='+Define.IMG_VER, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY],
    ],
    'spine': [
        // ['spTitle', 'assets/spine/TowerPlus_Title.json?v='+Define.IMG_VER],
        ['spResurrect', 'assets/spine/Repair.json?v='+Define.IMG_VER],//['spResurrect', 'assets/spine/TowerPlus_Resurrect.json?v='+Define.IMG_VER],
        ['spEventTile', 'assets/spine/Event_Block.json?v='+Define.IMG_VER],
        ['spRevival', 'assets/spine/Resurrection.json?v='+Define.IMG_VER],          // 무효권 이펙스
        ['spBestScore', 'assets/spine/BestScore.json?v='+Define.IMG_VER]//['spBestScore', 'assets/spine/TowerPlus_BestScore.json?v='+Define.IMG_VER]
    ],
    'audio': [
        ['click', [
            'assets/sound/02_SE_Click.mp3?v='+Define.SND_VER,
            'assets/sound/02_SE_Click.ogg?v='+Define.SND_VER]],
        ['down1', [
            'assets/sound/04_SE_B_Down_01.mp3?v='+Define.SND_VER,
            'assets/sound/04_SE_B_Down_01.ogg?v='+Define.SND_VER]],
        ['down2', [
            'assets/sound/05_SE_B_Down_02.mp3?v='+Define.SND_VER,
            'assets/sound/05_SE_B_Down_02.ogg?v='+Define.SND_VER]],
        ['down3', [
            'assets/sound/06_SE_B_Down_03.mp3?v='+Define.SND_VER,
            'assets/sound/06_SE_B_Down_03.ogg?v='+Define.SND_VER]],
        ['down4', [
            'assets/sound/07_SE_B_Down_04.mp3?v='+Define.SND_VER,
            'assets/sound/07_SE_B_Down_04.ogg?v='+Define.SND_VER]],
        ['cut1', [
            'assets/sound/08_SE_B_Cut_1.mp3?v='+Define.SND_VER,
            'assets/sound/08_SE_B_Cut_1.ogg?v='+Define.SND_VER]],
        ['cut2', [
            'assets/sound/09_SE_B_Cut_2.mp3?v='+Define.SND_VER,
            'assets/sound/09_SE_B_Cut_2.ogg?v='+Define.SND_VER]],
        ['cut3', [
            'assets/sound/10_SE_B_Cut_3.mp3?v='+Define.SND_VER,
            'assets/sound/10_SE_B_Cut_3.ogg?v='+Define.SND_VER]],
        ['cut4', [
            'assets/sound/11_SE_B_Cut_4.mp3?v='+Define.SND_VER,
            'assets/sound/11_SE_B_Cut_4.ogg?v='+Define.SND_VER]],
        ['perfect01', [
            'assets/sound/12_SE_Perfect_01.mp3?v='+Define.SND_VER,
            'assets/sound/12_SE_Perfect_01.ogg?v='+Define.SND_VER]],
        ['perfect02', [
            'assets/sound/13_SE_Perfect_02.mp3?v='+Define.SND_VER,
            'assets/sound/13_SE_Perfect_02.ogg?v='+Define.SND_VER]],
        ['perfect03', [
            'assets/sound/14_SE_Perfect_03.mp3?v='+Define.SND_VER,
            'assets/sound/14_SE_Perfect_03.ogg?v='+Define.SND_VER]],
        ['perfect04', [
            'assets/sound/15_SE_Perfect_04.mp3?v='+Define.SND_VER,
            'assets/sound/15_SE_Perfect_04.ogg?v='+Define.SND_VER]],
        ['perfect05', [
            'assets/sound/16_SE_Perfect_05.mp3?v='+Define.SND_VER,
            'assets/sound/16_SE_Perfect_05.ogg?v='+Define.SND_VER]],
        ['goodAnswer', [
            'assets/sound/SE_Correct.mp3?v='+Define.SND_VER,
            'assets/sound/SE_Correct.ogg?v='+Define.SND_VER]],
        ['badAnswer', [
            'assets/sound/SE_Wrong.mp3?v='+Define.SND_VER,
            'assets/sound/SE_Wrong.ogg?v='+Define.SND_VER]],
        ['getCoin', [
            'assets/sound/17_SE_GetCoin.mp3?v='+Define.SND_VER,
            'assets/sound/17_SE_GetCoin.ogg?v='+Define.SND_VER]],
        ['resurrect', [
            'assets/sound/18_SE_Resurrect.mp3?v='+Define.SND_VER,
            'assets/sound/18_SE_Resurrect.ogg?v='+Define.SND_VER]],
        ['special_tile_effect', [
            'assets/sound/SE_GoodThings.mp3?v='+Define.SND_VER,
            'assets/sound/SE_GoodThings.ogg?v='+Define.SND_VER]],
        ['add_goldtile', [
            'assets/sound/SE_Charge.mp3?v='+Define.SND_VER,
            'assets/sound/SE_Charge.ogg?v='+Define.SND_VER]],
        ['add_diatile', [
            'assets/sound/SE_Charge2.mp3?v='+Define.SND_VER,
            'assets/sound/SE_Charge2.ogg?v='+Define.SND_VER]],
        ['create_goldtile', [
            'assets/sound/SE_Block_Gold.mp3?v='+Define.SND_VER,
            'assets/sound/SE_Block_Gold.ogg?v='+Define.SND_VER]],
        ['create_diatile', [
            'assets/sound/SE_Block_Dia.mp3?v='+Define.SND_VER,
            'assets/sound/SE_Block_Dia.ogg?v='+Define.SND_VER]],
        ['revival', [
            'assets/sound/SE_salvation.mp3?v='+Define.SND_VER,
            'assets/sound/SE_salvation.ogg?v='+Define.SND_VER]],
        ['gameOver', [
            'assets/sound/19_SE_GameOver.mp3?v='+Define.SND_VER,
            'assets/sound/19_SE_GameOver.ogg?v='+Define.SND_VER]],
        ['lobby_bgm', [
            'assets/sound/01_BGM_Lobby.mp3?v='+Define.SND_VER,
            'assets/sound/01_BGM_Lobby.ogg?v='+Define.SND_VER],'bgm'],
        ['game_bgm', [
            'assets/sound/03_BGM_Game.mp3?v='+Define.SND_VER,
            'assets/sound/03_BGM_Game.ogg?v='+Define.SND_VER],'bgm']
    ]
    //'bitmapFont':[
       // ['number1', 'assets/font/Game_Number-export.png?v='+Define.IMG_VER, 'assets/font/Game_Number-export.xml?v='+Define.IMG_VER]
    //]
};

ResourcesManager.MenuLoader ={

};

ResourcesManager.GameLoader ={

};


window[''] = window[''] || {};
window[''].ResourcesManager = ResourcesManager;




'use strict';

function LocalizingManager(){
    this.strT = {};
    this.Init();
}

LocalizingManager.prototype = {
    Init:function(cb){
        var xhr = new XMLHttpRequest();

        if(Define.LANG === Enum.LANGUAGE.EN)
        {
            xhr.open("GET", "assets/json/Localizing_en.txt", true);
        }
        else
        {
            xhr.open("GET", "assets/json/Localizing_kr.txt", true);
        }

        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status != 404){
                this.strT = JSON.parse(xhr.responseText);
                if(cb) cb();
            }
            else{
                throw alert(kData.lang + ' not file');
            }
        }.bind(this);
    },
    Get:function(key) {
        if(this.strT[key] === undefined)
            return key+" : null";

        var args = Array.prototype.slice.call(arguments, 1);
        if(args.length === 0) {
            return this.strT[key];
        }
        else{
            //this.strT[key].replace(/{E}/gi, "\n");
            return this.strT[key].replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] !== 'undefined' ?
                    args[number]
                    :
                    match;
            });
        }
    }
};
'use strict';

function MoviGame() {
	var args = Array.prototype.slice.call(arguments);// arguments을 배열로 바꾼다.
	var callback = args.pop();// 마지막 인자는 콜백 함수
	var modules = (args[0] && typeof args[0] === "string") ? args : args[0];// 모듈은 배열로 전달될 수도있고 개별 인자로 전달 될 수도 있습니다.
	// 함수가 생성자로 호출되도록 보장(new를 강제하지 않는 패턴)
	if (!(this instanceof MoviGame)) return new MoviGame(modules, callback);
	// "this객체에 모듈을 추가" : 모듈이 없거나 "*"(전부)이면 사용 가능한 모든 모듈을 사용한다는 의미입니다.
	if (!modules || modules === '*' || modules[0] === '*') {
		modules = [];
		for (var i in MoviGame.Modules) {
			if (MoviGame.modules.hasOwnProperty(i)) {
				modules.push(i);
			}
		}
	}
	// 필요한 모듈들을 초기화
	for (var i=0, m_length=modules.length; i<m_length; i+=1) {
		MoviGame.modules[modules[i]](this);
	}
	// 콜백 함수 호출
	callback(this);
	//==================================================================================
	// 여기서 부터 변수선언..
	//==================================================================================
    // Phaser
    this.game = null;
    this.resourcesManager = null;
    //this.MG.NM = null;
    this.version = Define.VERSION;
    //this.storage = null;

    this._sound = null;
    this._bgm = null;

    /*this.firstPortrait = false;
    this.firstLandScape = false;
    this.callReSize = null;
    this.gameSheetsData = null;*/

    this.iHeart = 0;
    this.iExp = 0;
    this.iScore = 0;
    this.svcevtidx = 0;
    this.iMSW = 720;
    this.iMSH = 1280;
    this.iCSX = this.iMSW/2;
    this.iCSY = this.iMSH/2;

    this.innerWidthOld = 0;
    this.innerHeightOld = 0;
}

// 필요한 프로토타입 프로퍼티들을 추가
MoviGame.prototype = {
    name: "Sky Tower",//

    getName: function () {
        return this.name;
    },
    getKeyString: function () {
        return this.getServiceString() +'_'+Define.GIDX+'_';
    },
    Initialize : function(game){
        // 디바이스 구분.
        if (/Android/i.test(navigator.userAgent))
            Define.DEVICE = Enum.DEVICE_STATE.ANDROID;
        else if (/iPhone|iPad|iPod/i.test(navigator.userAgent))
            Define.DEVICE = Enum.DEVICE_STATE.IOS;
        else
            Define.DEVICE = Enum.DEVICE_STATE.PC;

        // 언어셋 관리자
        this.LM = new LocalizingManager();
        game.add.text(9990, 9990, ".", {font:"1px SamsungOne700", fill:"#FFFFFF"});

        this.game = game;
        // Prevent certain keys from propagating to the browser:
        var arrPreventedKeys = [
            Phaser.Keyboard.SPACEBAR,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT
        ];
        this.game.input.keyboard.addKeyCapture(arrPreventedKeys);

        this.resourcesManager = game.plugins.add(ResourcesManager);
        this.game.plugins.add(PhaserSpine.SpinePlugin);
        this.NM = new NetworkManager();
        //this.storage = game.plugins.add(StorageManager);

        this.regstWindowEvents();
        this.initScreenSize();

        // 프레임설정을 해줘야 120hz, 144hz모니터에서 제대로 작동하게 된다.
        this.game.time._desiredFps = 144;
        this.game.time.advancedTiming = true;
    },
    regstWindowEvents: function() {
        window.addEventListener("focus", function(event)
        {
            //if(gIsNowPlayingMovie) return;
            console.log("*focus** window has focus");

            if(MG && MG.game) {
                // var _gm = MG.game.state.states['game'];
                // _gm.sound_googlesnack(true);
                MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
                    kData.isAudio = onoff;
                    if(kData.isAudio) {
                        MG.SetBgmVolume('game_bgm', 0.5);
                        MG.SetBgmVolume('lobby_bgm', 1);
                    }
                });
            }

            // if(Define.PID == "100010" || Define.PID == "100026"){
            //     // 캐시워크다
            //     switch(gRewardName){
            //         case "basic":
            //             gRewardName = "";
            //             MG.uiGameOver.ShowAD();
            //             break;
            //
            //         case "coin":
            //             gRewardName = "";
            //             MG.uiShop.RewardCoin();
            //             break;
            //
            //         case "extend":
            //             gRewardName = "";
            //             MG.playGameController.RewardExtend();
            //             break;
            //
            //         case "revive":
            //             gRewardName = "";
            //             MG.playGameController.RewardResurrect();
            //             break;
            //
            //         case "dia":
            //             gRewardName = "";
            //             MG.playGameController.RewardDiamond();
            //             break;
            //     }
            // }
        }, false);
        window.addEventListener("blur", function(event)
        {
            //if(gIsNowPlayingMovie) return;
            // console.log("*blur** window lost focus");
            if(kData.isAudio) {
                MG.SetBgmVolume('game_bgm', 0);
                MG.SetBgmVolume('lobby_bgm', 0);
            }
        }, false);
        window.addEventListener("pageshow", function()
        {
            //if(gIsNowPlayingMovie) return;
            console.log("*pageshow** window has focus");
            // if(kData.isAudio) {
            //     MG.SetBgmVolume('game_bgm', 0.5);
            //     MG.SetBgmVolume('lobby_bgm', 1);
            // }

            if(MG && MG.game) {
                // var _gm = MG.game.state.states['game'];
                // _gm.sound_googlesnack(true);
                MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
                    kData.isAudio = onoff;
                    if(kData.isAudio) {
                        MG.SetBgmVolume('game_bgm', 0.5);
                        MG.SetBgmVolume('lobby_bgm', 1);
                    }
                });
            }

            // if(Define.PID == "100010" || Define.PID == "100026"){
            //     // 캐시워크다
            //     switch(gRewardName){
            //         case "basic":
            //             gRewardName = "";
            //             MG.uiGameOver.ShowAD();
            //             break;
            //
            //         case "coin":
            //             gRewardName = "";
            //             MG.uiShop.RewardCoin();
            //             break;
            //
            //         case "extend":
            //             gRewardName = "";
            //             MG.playGameController.RewardExtend();
            //             break;
            //
            //         case "revive":
            //             gRewardName = "";
            //             MG.playGameController.RewardResurrect();
            //             break;
            //
            //         case "dia":
            //             gRewardName = "";
            //             MG.playGameController.RewardDiamond();
            //             break;
            //     }
            // }
        }, false);
        window.addEventListener("pagehide", function()
        {
            //if(gIsNowPlayingMovie) return;
            console.log("*pagehide** window lost focus");
            if(kData.isAudio) {
                MG.SetBgmVolume('game_bgm', 0);
                MG.SetBgmVolume('lobby_bgm', 0);
            }
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
                //if(gIsNowPlayingMovie) return;
                console.log("*** window lost focus (handleVisibilityChange)");
                if(kData.isAudio) {
                    MG.SetBgmVolume('game_bgm', 0);
                    MG.SetBgmVolume('lobby_bgm', 0);
                }
            } else {
                //if(gIsNowPlayingMovie) return;
                console.log("*** window has focus (handleVisibilityChange)");
                if(kData.isAudio) {
                    MG.SetBgmVolume('game_bgm', 0.5);
                    MG.SetBgmVolume('lobby_bgm', 1);
                }

                if(Define.PID == "100010" || Define.PID == "100026"){
                    // 캐시워크다
                    switch(gRewardName){
                        case "basic":
                            gRewardName = "";
                            MG.uiGameOver.ShowAD();
                            break;

                        case "coin":
                            gRewardName = "";
                            MG.uiShop.RewardCoin();
                            break;

                        case "extend":
                            gRewardName = "";
                            MG.playGameController.RewardExtend();
                            break;

                        case "revive":
                            gRewardName = "";
                            MG.playGameController.RewardResurrect();
                            break;

                        case "dia":
                            gRewardName = "";
                            MG.playGameController.RewardDiamond();
                            break;
                    }
                }
            }
        }

        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    },
    initScreenSize: function(){
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.pageAlignHorizontally = false;
        this.game.pageAlignVertically = false;
        this.game.scale.parentIsWindow = true;//지우니간 폭만 맞고 길이가 길어지는 화면이 됨
        window.addEventListener("resize", function() {
            this.reScreenSize();
        }.bind(this));
        // this.game.scale.setResizeCallback(function(scale, parentBounds) {
        //     this.reScreenSize();
        // }.bind(this));
        this.game.scale.setShowAll();
        this.reScreenSize();
    },
    // reScreenSize_old : function () {
    //     if(this.innerWidthOld == window.innerWidth && this.innerHeightOld == window.innerHeight)
    //         return;
    //
    //     this.innerWidthOld = window.innerWidth;
    //     this.innerHeightOld = window.innerHeight;
    //
    //     var per = (window.innerWidth*MG.iMSH) / (window.innerHeight*MG.iMSW);
    //     //	console.log("per "+per);
    //     if(per >= 0.85 && per <= 1.15)
    //         this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    //     else
    //         this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //
    //     if(window.innerWidth < window.innerHeight){
    //         var width = Math.min(window.innerWidth, window.outerWidth);
    //         var height = Math.min(window.innerHeight, window.outerHeight);
    //
    //         this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    //
    //         var ratio_w = parseFloat(width / this.game.width);
    //         var ratio_h = parseFloat(height/ this.game.height);
    //         this.game.scale.setUserScale(ratio_w>1? 1: ratio_w, ratio_h);
    //     }
    //     this.game.scale.refresh();
    // },
    reScreenSize : function () {
        var per = (window.innerWidth * MG.iMSH) / (window.innerHeight * MG.iMSW);
        if (per >= 0.85 && per <= 1.15)
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        else
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


        if (window.innerWidth < window.innerHeight && /Android/i.test(navigator.userAgent)) {
            var width = Math.min(window.innerWidth, window.outerWidth);
            var height = Math.min(window.innerHeight, window.outerHeight);
            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            var ratio_w = parseFloat(width / this.game.width);
            var ratio_h = parseFloat(height / this.game.height);
            this.game.scale.setUserScale(ratio_w > 1 ? 1 : ratio_w, ratio_h);
        }


        this.game.scale.refresh();
    },

    faltBuffersLoad : function (bytes) {
        var buffer = new flatbuffers.ByteBuffer(bytes);

        console.log(bytes+'buffer  = '+buffer);
        console.log(buffer);

        if(bytes == null)
        {
            buffer = new flatbuffers.ByteBuffer(this.faltBuffersSave());
        }
        var flatAll = FlatData.Flat_All_Data.getRootAsFlat_All_Data(buffer, null);

        this.iHeart = flatAll.iHeart();
        this.iExp = flatAll.iExp();
        this.iScore = flatAll.iScore();
        this.svcevtidx = flatAll.svcevtidx();

        console.log('this.iHeart = '+this.iHeart);
        console.log('this.iExp = '+this.iExp);
        console.log('this.iScore = '+this.iScore);
        console.log('this.svcevtidx = '+this.svcevtidx);


    },

    faltBuffersSave : function () {
        var builder = new flatbuffers.Builder(1024);

        // flatBuffer  시작
        FlatData.Flat_All_Data.startFlat_All_Data(builder);

        // add
        FlatData.Flat_All_Data.addIHeart(builder, this.iHeart);
        FlatData.Flat_All_Data.addIExp(builder, this.iExp);
        FlatData.Flat_All_Data.addIScore(builder, this.iScore);
        FlatData.Flat_All_Data.addSvcevtidx(builder, this.svcevtidx);
        //FlatData.Flat_All_Data.addSvcevtidx1(builder, 1);


        // flatBuffer End
        var offset = FlatData.Flat_All_Data.endFlat_All_Data(builder);
        builder.finish(offset);

        var bytes =  builder.asUint8Array();
        var hexString = "> ";
        for(var i = 0; i < bytes.length; i++){
            hexString += bytes[i].toString(16);
        }
        console.log(hexString);
        console.log(bytes.length);

        return builder.asUint8Array();
    },

};

MoviGame.modules = {
    utils : function (box) {
        box.Init = function() {
            console.log("  utils  ==");
        };
        /*box.gameExit = function (bDirect) {
            if(bDirect)history.back();
            var strExit = MSSDK.getParameterByName('lang') == "en" ? "Do you want to exit?" : "게임을 종료하시겠습니까?";
            MG.confirm("", strExit, "YES", "NO", function () {
                PopconGame.Sdk.exitGame();
            }, function () {
                history.pushState(null, document.title, location.href);
            });
        };*/
        box.alert = function (title, comment, cb) {
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
        };
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
        box.GetSecondsToTimeString = function(s) {
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
        // box.AddSpriteCrop = function(parent, x, y, atlas, imgName, offsetX, offsetY, txW, txH, sizeW, sizeH, color, alpha, ax, ay, width, height) {
        //     var spr = this.game.add.sprite(x, y, atlas, imgName);
        //     if(offsetX != undefined) spr.texture.crop.x += offsetX;
        //     if(offsetY != undefined) spr.texture.crop.y += offsetY;
        //     if(txW != undefined) spr.texture.crop.width = txW;
        //     if(txH != undefined) spr.texture.crop.height = txH;
        //     if(sizeW != undefined) {
        //         spr.width = sizeW;
        //         spr.texture.frame.width = sizeW;
        //         spr.texture.frame.halfWidth = sizeW * 0.5;
        //         // spr._frame.sourceSizeW = sizeW;
        //         // spr._frame.spriteSourceSizeW = sizeW;
        //     }
        //     if(sizeH != undefined) {
        //         spr._frame.height = sizeH;
        //         spr._frame.sourceSizeH = sizeH;
        //         spr._frame.spriteSourceSizeH = sizeH;
        //     }
        //
        //     if(color != undefined) spr.tint = color;
        //     if(alpha != undefined) spr.alpha = alpha;
        //     if(ax == undefined) 	spr.anchor.x = 0.5;
        //     else					spr.anchor.x = ax;
        //     if(ay == undefined) 	spr.anchor.y = 0.5;
        //     else					spr.anchor.y = ay;
        //     if(width != undefined)	spr.width = width;
        //     if(height != undefined)	spr.height = height;
        //     parent.addChild(spr);
        //     return spr;
        // };
        box.AddSpriteButton = function(parent, x, y, atlas, imgName, sound, color, alpha, ax, ay, width, height){
            var btn = MG.AddSprite(parent, x, y, atlas, imgName, color, alpha, ax, ay, width, height);
            btn.inputEnabled = true;
            btn.baseTint = btn.tint;
            if(sound)	btn.sound = sound;
            else		btn.sound = "click";
            btn.events.onInputDown.add(function(){
                MG.PlayAudio(btn.sound);
                btn.tint = 0x808080;
                for(var i=0;i<btn.children.length;++i)
                    btn.getChildAt(i).tint = 0x808080;
            });
            btn.events.onInputUp.add(function(){
                btn.tint = btn.baseTint;
                for(var i=0;i<btn.children.length;++i)
                    btn.getChildAt(i).tint = btn.baseTint;
            });
            return btn;
        };
        box.AddSpriteButtonScale = function(parent, x, y, atlas, imgName, sound, scale, color, alpha, ax, ay, width, height){
            var btn = MG.AddSprite(parent, x, y, atlas, imgName, color, alpha, ax, ay, width, height);
            if(scale == undefined) scale = 1;
            btn.scale.set(scale);
            btn.baseScale = scale;
            btn.inputEnabled = true;
            if(sound)	btn.sound = sound;
            else		btn.sound = "click";
            btn.events.onInputDown.add(function(){
                MG.PlayAudio(btn.sound);
                btn.scale.set(btn.baseScale*0.95);
            });
            btn.events.onInputUp.add(function(){
                MG.game.add.tween(btn.scale).to({x:btn.baseScale, y:btn.baseScale}, 300, Phaser.Easing.ElasticEx.Out, true);
            });
            return btn;
        };
        box.AddSpriteButtonScroll = function(parent, x, y, atlas, imgName, color, alpha, ax, ay, width, height){
            var btn = MG.AddSprite(parent, x, y, atlas, imgName, color, alpha, ax, ay, width, height);
            btn.inputEnabled = true;
            btn.baseTint = btn.tint;
            btn.events.onInputDown.add(function(){
                btn.tint = 0x808080;
                for(var i=0;i<btn.children.length;++i)
                    btn.getChildAt(i).tint = 0x808080;
            });
            btn.events.onInputUp.add(function(){
                btn.tint = btn.baseTint;
                for(var i=0;i<btn.children.length;++i)
                    btn.getChildAt(i).tint = btn.baseTint;
            });
            btn.onInputUpCallBack = function(){// 버튼의 경우 down시 색상이 변하게 설정되어 있는데 up시 이벤트가 발생하지 않았을때 다시 원상태의 색상으로 바꾸기 위해 설정한다.
                btn.tint = btn.baseTint;
                for(var i=0;i<btn.children.length;++i)
                    btn.getChildAt(i).tint = btn.baseTint;
            };
            return btn;
        };
        box.AddSpriteButtonNoEffect = function(parent, x, y, atlas, imgName, color, alpha, ax, ay, width, height){
            var btn = MG.AddSprite(parent, x, y, atlas, imgName, color, alpha, ax, ay, width, height);
            btn.inputEnabled = true;
            return btn;
        };
		box.AddSpriteNine = function(parent, x, y, atlas, imgName, w, h, style, ax, ay, color){
            var main = MG.game.add.group();
            main.style = style;

            if(ax===undefined) ax = 0.5;
            if(ay===undefined) ay = 0.5;

            var lc = style.left;
            var rc = style.right;
            var tc = style.top;
            var bc = style.bottom;
            var bw, bh;
            var tw = -w*ax;
            var th = -h*ay;

            var TL = MG.AddSprite(main, tw, th, atlas, imgName, undefined, undefined, 0, 0);
            bw = TL.width;
            bh = TL.height;
            TL.crop(new Phaser.Rectangle(0, 0, lc, tc));
            var TC = MG.AddSprite(main, tw+lc, th, atlas, imgName, undefined, undefined, 0, 0);
            TC.crop(new Phaser.Rectangle(lc, 0, bw-lc-rc, tc));
            TC.width = w-lc-rc;
            var TR = MG.AddSprite(main, tw+w-rc, th, atlas, imgName, undefined, undefined, 0, 0);
            TR.crop(new Phaser.Rectangle(bw-rc, 0, rc, tc));
            var CL = MG.AddSprite(main, tw, th+tc, atlas, imgName, undefined, undefined, 0, 0);
            CL.crop(new Phaser.Rectangle(0, tc, lc, bh-tc-bc));
            CL.height = h-tc-bc;
            var CC = MG.AddSprite(main, tw+lc, th+tc, atlas, imgName, undefined, undefined, 0, 0);
            CC.crop(new Phaser.Rectangle(lc, tc, bw-lc-rc, bh-tc-bc));
            CC.width = w-lc-rc;
            CC.height = h-tc-bc;
            var CR = MG.AddSprite(main, tw+w-rc, th+tc, atlas, imgName, undefined, undefined, 0, 0);
            CR.crop(new Phaser.Rectangle(bw-rc, tc, rc, bh-tc-bc));
            CR.height = h-tc-bc;
            var BL = MG.AddSprite(main, tw, th+h-bc, atlas, imgName, undefined, undefined, 0, 0);
            BL.crop(new Phaser.Rectangle(0, bh-bc, lc, bc));
            var BC = MG.AddSprite(main, tw+lc, th+h-bc, atlas, imgName, undefined, undefined, 0, 0);
            BC.crop(new Phaser.Rectangle(lc, bh-bc, bw-lc-rc, bc));
            BC.width = w-lc-rc;
            var BR = MG.AddSprite(main, tw+w-rc, th+h-bc, atlas, imgName, undefined, undefined, 0, 0);
            BR.crop(new Phaser.Rectangle(bw-rc, bh-bc, rc, bc));

            main.position.set(x, y);
            parent.addChild(main);
            return main;
		};
		box.AddText = function(parent, x, y, txt, fontStyle, ax, ay) {
            var txt = MG.game.add.text(x, y, txt, fontStyle);
            if(ax == undefined) ax = 0.5;
            if(ay == undefined) ay = 0.5;
            txt.anchor.set(ax, ay);
            parent.addChild(txt);
            return txt;
		};
        box.AddBitmapText = function(parent, x, y, font, txt, size, ax, ay) {
            var txt = MG.game.add.bitmapText(x, y, font, txt, size);
            if(ax == undefined) ax = 0.5;
            if(ay == undefined) ay = 0.5;
            txt.anchor.set(ax, ay);
            txt.update();
            parent.addChild(txt);
            return txt;
        };
        box.AddTextButton = function(parent, x, y, txt, fontStyle, ax, ay) {
            var btn = this.AddText(parent, x, y, txt, fontStyle, ax, ay);
            btn.inputEnabled = true;
            btn.baseTint = btn.tint;
            btn.events.onInputDown.add(function(){
                MG.PlayAudio("click");
                btn.tint = 0x808080;
                for(var i=0;i<btn.children.length;++i)
                    btn.getChildAt(i).tint = 0x808080;
            });
            btn.events.onInputUp.add(function(){
                btn.tint = btn.baseTint;
                for(var i=0;i<btn.children.length;++i)
                    btn.getChildAt(i).tint = btn.baseTint;
            });

            return btn;
        };
        box.textNumberCounting = function(text, cur_number, add_number, aniTime){
            var nFrameTime = 10;
            var nAdd = 0;
            var isEnd = false;
            var nFrame = parseInt(aniTime/nFra0meTime);
            var totalNum = cur_number + add_number;
            var increase_time;
            text.setText(MG.GetSecondsToTimeString(cur_number));

            increase_time = this.game.time.events.loop(10, function(){
                nAdd += (add_number / nFrame);

                if(nAdd+cur_number < totalNum)
                {
                    text.setText((cur_number +nAdd).toLocaleString());
                }
                else {
                    text.setText(totalNum.toLocaleString());
                    this.game.time.events.remove(increase_time);
                }

            }, this);
        };
        box.ConvertArabic = function (str) {    // 아랍어의 영문이 포함될경우 특수문자 넣어준다.
            var i = 0;
            var ii = 0;
            var tmpStr = "";

            //"ما هي سعة البطارية (نموذجية) لـ Note20 و Note20 Ultra؟"
            //str = "؟"+"\u202C"+"Note20 Ultra"+"\u202A"+" و "+"\u202C"+"Note20"+"\u202A"+"ما هي سعة البطارية (نموذجية) لـ";
            //str = "الأسود (Note20 Ultra)";

            //str = "البرونز (Note20 & Note20 Ultra)";
            // LEFT-TO-RIGHT : U+202A :
            // RIGHT-TO-LEFT : U+202B :
            // 아랍어 + "\u202A" + 영어 + "\u202C" + 아랍어
            str = str.replace(/\\n/, "");

            if(str.indexOf("ما هي سعة البطارية") >= 0) {
                var regType = /[A-Za-z0-9\{\}\/\&\.\,\:\-]/;// 영문소,대문자, 숫자
            } else {
                var regType = /[A-Za-z0-9\{\}\/\(\)\&\.\,\:\-]/;// 영문소,대문자, 숫자
            }
            // var regType = /[A-Za-z0-9\{\}\/\&\.\,\:\-]/;// 영문소,대문자, 숫자
            //var regType = /[\(\)]/;// 영문소,대문자, 숫자
            //var regType = /^[A-Za-z0-9\@\-\.\_+]*$/; // 영문소,대문자, 숫자, 특수문자4개(@-._) 허용가능한 정규식..

            if (regType.test(str) === true) { // 영문, 숫자 포함일때 처리..
                var bEng = false;

                if (regType.test(str[0])) {
                    bEng = false;
                } else {
                    bEng = true;
                }

                for(i = 0; i < str.length; ++i) {
                    if(str[i] === " ") {
                        tmpStr += " ";
                    } else if(regType.test(str[i]) === true) {
                        if(bEng === false) {
                            bEng = true;
                            if(str[i] === "(") {
                                tmpStr += String.fromCharCode(0x202A) + str[i];
                            } else {
                                tmpStr += String.fromCharCode(0x202B) + str[i];
                            }
                        } else {
                            tmpStr += str[i];
                        }
                    } else if(regType.test(str[i]) === false) {
                        if(bEng) {
                            bEng = false;
                            tmpStr += String.fromCharCode(0x202C) + str[i];
                        } else {
                            tmpStr += str[i];
                        }
                    }

                    if(i === str.length - 1) tmpStr = " " + tmpStr + "  ";
                }
            } else {
                tmpStr = str;
            }

            return tmpStr;
        };
        //자체제작 라인 슬라이스-------------------------------------------------------------------------------<<<
        //box.AddSpriteNine에서 생성한후에, 리사이즈만한다
        box.SetSizeSpriteNine = function(grp9, w9, h9, cl, ax, ay){
            //grp9=나인패치루트, w9=원하는 폭, h9=원하는 높이,
            //c1=클리핑{top:1, bottom:1, left:1, right:1}, ax,ay앵커포인트
            if(ax===undefined) ax=0.5;
            if(ay===undefined) ay=0.5;
            if(cl===undefined) cl = grp9.style;
            grp9.style = cl;

            var wPixel = grp9.children[0].animations.currentFrame.sourceSizeW;//원본텍스쳐 픽셀크기
            var hPixel = grp9.children[0].animations.currentFrame.sourceSizeH;//원본텍스쳐 픽셀크기
            var midPixelX= wPixel - cl.left - cl.right; //중간스케일되는 픽셀수
            var midPixelY= hPixel - cl.top - cl.bottom; //중간스케일되는 픽셀수

            var midscalex = (w9 - (cl.left + cl.right)) / midPixelX;
            var midscaley = (h9 - (cl.top + cl.bottom)) / midPixelY;

            var posxL = -(w9 * ax);
            var posxM = -(w9 * ax) + cl.left;
            var posxR = -(w9 * ax) + cl.left + (midscalex*midPixelX);

            var posyT = -(h9 * ay);
            var posyM = -(h9 * ay) + cl.top;
            var posyB = -(h9 * ay) + cl.top + (midscaley*midPixelY);

            grp9.children[0].scale.setTo(1);                  //TL
            grp9.children[0].position.setTo(posxL, posyT);
            grp9.children[1].scale.setTo(midscalex, 1 );     //TM
            grp9.children[1].position.setTo(posxM, posyT);
            grp9.children[2].scale.setTo(1);                  //TR
            grp9.children[2].position.setTo(posxR, posyT);
            grp9.children[3].scale.setTo(1, midscaley);      //ML
            grp9.children[3].position.setTo(posxL,posyM);
            grp9.children[4].scale.setTo(midscalex, midscaley);//MM
            grp9.children[4].position.setTo(posxM, posyM);
            grp9.children[5].scale.setTo(1, midscaley);       //MR
            grp9.children[5].position.setTo(posxR, posyM);
            grp9.children[6].scale.setTo(1);                   //BL
            grp9.children[6].position.setTo(posxL, posyB);
            grp9.children[7].scale.setTo(midscalex, 1);        //BM
            grp9.children[7].position.setTo(posxM, posyB);
            grp9.children[8].scale.setTo(1);                   //BR
            grp9.children[8].position.setTo(posxR, posyB);
        };
        box.AddSpriteNineButton = function(parent, x, y, atlas, imgName, w, h, style, ax, ay, color){
            var spr = new PhaserNineSlice.NineSlice(MG.game, x, y, atlas, imgName, w, h, style);
            spr.anchor.x = 0.5;
            spr.anchor.y = 0.5;
            if(ax)spr.anchor.x = ax;
            if(ay)spr.anchor.y = ay;
            if(color != undefined) spr.tint = color;
            parent.addChild(spr);

            spr.inputEnabled = true;
            spr.baseTint = spr.tint;
            spr.events.onInputDown.add(function(){
                MG.PlayAudio("click");
                if(color != undefined){
                    spr.tint = 0x808080;
                    for(var i=0;i<spr.children.length;++i)
                        spr.getChildAt(i).tint = 0x808080;

                }
            });
            spr.events.onInputUp.add(function(){
                if(color != undefined){
                    spr.tint = spr.baseTint;
                    for(var i=0;i<spr.children.length;++i)
                        spr.getChildAt(i).tint = spr.baseTint;
                }
            });

            return spr;
        };
        box.AddSpriteNineButtonScale = function(parent, x, y, atlas, imgName, w, h, style, ax, ay, color){
            var spr = new PhaserNineSlice.NineSlice(MG.game, x, y, atlas, imgName, w, h, style);
            spr.anchor.x = 0.5;
            spr.anchor.y = 0.5;
            if(ax)spr.anchor.x = ax;
            if(ay)spr.anchor.y = ay;
            if(color != undefined) spr.tint = color;
            parent.addChild(spr);

            spr.inputEnabled = true;
            spr.events.onInputDown.add(function(){
                MG.PlayAudio("click");
                spr.scale.set(0.95);
            });
            spr.events.onInputUp.add(function(){
                MG.game.add.tween(spr.scale).to({x:1, y:1}, 300, Phaser.Easing.ElasticEx.Out, true);
            });
            return spr;
        };
        box.AddSpriteNineW = function(parent, x, y, atlas, imgName, w, h, style, ax, ay, color){
            var main = MG.game.add.group();

            if(ax===undefined) ax = 0.5;
            if(ay===undefined) ay = 0.5;

            var lc = style.left;
            var rc = style.right;
            var bw, bh;
            var tw = -w*ax;
            var th = -h*ay;

            var CL = MG.AddSprite(main, tw, th, atlas, imgName, undefined, undefined, 0, 0);
            bw = CL.width;
            bh = CL.height;
            CL.crop(new Phaser.Rectangle(0, 0, lc, bh));
            var CC = MG.AddSprite(main, tw+lc, th, atlas, imgName, undefined, undefined, 0, 0);
            CC.crop(new Phaser.Rectangle(lc, 0, bw-lc-rc, bh));
            CC.width = w-lc-rc;
            var CR = MG.AddSprite(main, tw+w-rc, th, atlas, imgName, undefined, undefined, 0, 0);
            CR.crop(new Phaser.Rectangle(bw-rc, 0, rc, bh));

            main.position.set(x, y);
            parent.addChild(main);
            return main;
        };
        box.DrawRect = function(parent, x, y, w, h, color, alpha, input){
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
        box.googleSheetsToData = function(sheetData)
        {

            var dicData = sheetData.substring(6); // json: ==> 제거
            console.log(dicData);
            //JSON.stringify(dicData);
            return JSON.parse(dicData);

        };
        // box.loadGameSheetsData = function(sheet, google, callback)
        // {
        //     var that = this;
        //     //this.gameSheetsData = [];
        //     //google = false;
        //     if(google === false)
        //     {
        //         that.gameSheetsData = that.googleSheetsToData(Define.SHEET_LOCAL_STRING);
        //         if(callback !== undefined)
        //         {
        //             callback(null);
        //         }
        //         return;
        //     }
        //
        //     // var url = "https://docs.google.com/spreadsheets/d/1q85maihsyXmRhBENeXgkBW5BbMwXMRmFYBRrAJzq2xk/edit#gid=0";
        //     var url = "https://spreadsheets.google.com/feeds/list/" +
        //         Define.GOOGLE_SPREADSHEET_ID + "/" +sheet+
        //         "/public/basic?alt=json";
        //     jQuery(function($){
        //         $.ajax({
        //             type: "GET",
        //             url: url,
        //             dataType:"jsonp"
        //         }).done(function ( response ) {
        //
        //
        //             var jsonString = JSON.stringify(response);
        //             var tbString = JSON.parse(jsonString);
        //             var strSheet = tbString.feed.entry[0].content.$t;
        //
        //             that.gameSheetsData = that.googleSheetsToData(strSheet);
        //             if(callback !== undefined)
        //             {
        //                 callback(response);
        //             }
        //             console.log(that.gameSheetsData);
        //         }).fail(function () {
        //             that.gameSheetsData = that.googleSheetsToData(Define.SHEET_LOCAL_STRING);
        //             if(callback !== undefined)
        //             {
        //                 callback(response);
        //             }
        //         });
        //     });
        // };
    },
    audio: function (box) {
        // isSfx = false;
        // isBGM = false;

        box.Init = function() {

        };
        box.AudioInit = function() {
            this._sound = [];
            this._bgm = [];

            var audioList = ResourcesManager.Preloader['audio'];
            audioList.forEach(function(args) {
                if(args[2] === 'bgm')
                {
                    this._bgm[args[0]] = this.game.add.audio(args[0],1,true);
                }
                else
                {
                    this._sound[args[0]] = this.game.add.audio(args[0]);
                }
            }, this);

            // 아이폰 사운드 오프상태에서 홈버튼으로 나갔다가 돌아오면, 사운드(온/오프)해도 사운드가 안나오는 문제
            this.game.input.onDown.addOnce(function() {
                try {
                    this.game.sound.context.resume();
                } catch (e) {}
            });
        };

        box.AudioSwitch = function(on) {
            // isSfx = !on;
            // isBGM = !on;
            //this.storage.set('isSfx', isSfx );
            //this.storage.set('isBGM', isBGM );
        };

        box.PlayAudio = function(sound) {
            if(kData.isAudio){
                if(this._sound && this._sound[sound]) {
                    this._sound[sound].play();
                }
                // 아이폰 사운드 오프상태에서 홈버튼으로 나갔다가 돌아오면, 사운드(온/오프)해도 사운드가 안나오는 문제
                try {
                    this.game.sound.context.resume();
                } catch (e) {}
            }
        };
        box.PlayAudioDelay = function(sound, delay) {
            if(kData.isAudio)
            {
                setTimeout(function() { MG.PlayAudio(sound); }, delay);
            }
        };
        box.StopAudio  = function(sound) {
            this._sound[sound].stop();
        };
        box.SetBgmVolume = function(bgm, v){
            if(this._bgm === null) return;
            this._bgm[bgm].volume = v;
        };
        box.PlayBgm  = function(bgm, loop) {
            if(kData.isAudio){
                if(this._bgm && this._bgm[bgm]) {
                    if(loop === undefined)
                        loop = false;
                    // play: function (marker, position, volume, loop, forceRestart)
                    this._bgm[bgm].play('',0,1,loop);
                }
                // 아이폰 사운드 오프상태에서 홈버튼으로 나갔다가 돌아오면, 사운드(온/오프)해도 사운드가 안나오는 문제
                try {
                    this.game.sound.context.resume();
                } catch (e) {}
            }
        };
        box.StopBgm  = function(bgm) {
            this._bgm[bgm].stop();
        };
        box.PauseBgm  = function(bgm) {
            if(kData.isAudio === false) return;
            this._bgm[bgm].pause();
        };
        box.ResumeBgm  = function(bgm) {
            if(kData.isAudio === false) return;
            this._bgm[bgm].resume();
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
        MG.resourcesManager.loader(ResourcesManager.MoviLoad);
    },
    create: function () {
        // MSSDK를 초기화를 해준다. 이안에 adsInit가 들어있다.
        MSSDK.initializeAsync({}, function(){   // {isBanner:true}광고 결제로 인해 광고가 안보여야 할경우 isBanner:false로 설정해준다.
            MG.NM.LocalLoad(function(){
                adsInit({isBanner:true});
                //Define.LANG = (MSSDK.LANG=="ko"?Define.tbLang[0]:Define.tbLang[1]);
                //Define.LANG = Define.tbLang[1];
                // if(kData.isMigration == false){// todo : 기존세이브 마이그레이션 작업
                //     kData.isMigration = true;
                //     DataMigration();
                //     MG.NM.LocalSave();
                // }

                if(kData.iVer < Define.SAVE_VER){
                    // todo : 마이그레이션 작업
                }

                MSSDK.audioIsEnabled(function (onoff){ //게임스낵 사운드체크
                    kData.isAudio = onoff;
                });

                //MSSDK.scoreUpdate(kData.bs);//GameSnacks

                this.game.state.start('preloader');
            }.bind(this));
        }.bind(this));
    }
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
        //this.stage.backgroundColor = '#fece1a';
        // this.grpLoad = this.game.add.group();
        // this.grpLoad.x = this.game.width/2;
        // this.grpLoad.y = this.game.height/2-120;
        this.stage.backgroundColor = '#FFFFFF';

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
        //
        // this.loadingText = this.add.text(iCSX, 675, "0%", { font: "32px Arial", fill: "#636363", align: "center" });
        // this.loadingText.anchor.setTo(0.5, 0.5);

        this.load.onFileComplete.add(this.onFileComplete, this);
        this.load.onLoadComplete.add(this.onLoadComplete, this);


        // // Phaser.Loader.crossOrigin = true;
        // this.sprLoad[0] = this.add.sprite(0, 0, 'preloaderLogoMono');
        // this.sprLoad[0].anchor.setTo(0.5, 0.5);
        //
        // this.sprLoad[1] = this.add.sprite(-115, 0, 'preloaderLogoColor'); //마스크적용-위치
        // this.sprLoad[1].anchor.setTo(0, 0.5);                                      //마스크적용-피봇
        // this.load.setPreloadSprite(this.sprLoad[1]);
        //
        // //this.sprLoad[2] = this.add.sprite(0, 170, 'preloaderLogoText');
        // //this.sprLoad[2].anchor.setTo(0.5, 0.5);
        //
        // this.loadingText = this.add.text(0, 250, "99%", { font: "23px Arial", fill: "#2E85ED", align: "center" });
        // this.loadingText.anchor.setTo(0.5, 0.5);
        //
        // this.load.onLoadStart.add(this.onLoadStart, this);                       //game.load도 동일
        // this.load.onFileComplete.add(this.onFileComplete, this);
        // this.load.onLoadComplete.add(this.onLoadComplete, this);
        //
        //
        // this.grpLoad.addChild(this.sprLoad[0]);
        // this.grpLoad.addChild(this.sprLoad[1]);
        // //this.grpLoad.addChild(this.sprLoad[2]);
        // this.grpLoad.addChild(this.loadingText);

        //MG.stateThis = this;
        // 이미지 로드
        MG.resourcesManager.loader(ResourcesManager.Preloader);

    },

    onLoadStart: function() {
        this.loadingText.setText("0%");
        //console.log("loading_start ");
    },
    onFileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        // this.sprLoad[1].beginFill(0xfe7234);
        // this.sprLoad[1].arc(0, 0, 250, this.math.degToRad(-90), this.math.degToRad(270-(3.59999*progress)), true, 360);
        // this.sprLoad[1].endFill();
        this.loadingText.setText(progress + "%");
    },

    onLoadComplete: function () {
        // 리소스 로드 완료후 오디오 셋팅
        MG.AudioInit();
        if(Define.bLocalHost == false){
            adsInit({isBanner:true}, function(){});
        }
        this.game.state.start('game');
        this.destroy();
    },

    create: function () {
        //this.sprLoad[1].cropEnabled = false;
    },


    update: function () {
        this.loadingText.setText("100%");
        if (this.ready) {
           // console.log('Ready ===  ');
           // this.game.state.start('game');
        }
    },
    destroy :function () {
        console.log("  >>>>  destroy  <<<<");
        // this.sprLoad.forEach(function (t) {
        //     t.destroy();
        // });

        this.loadingText.destroy();
    }
};




window[''] = window[''] || {};
window[''].Preloader = Preloader;



'use strict';
Define.LANDSCAPE = false;
window.onload = function () {
    var game, mg = window[''];

    if(Define.LANDSCAPE === true)
        game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game');
    else
        game = new Phaser.Game(720, 1280, Phaser.CANVAS, 'game');

    game.state.add('boot', mg.Boot);
    game.state.add('preloader', mg.Preloader);
    game.state.add('game', mg.Game);

    game.state.start('boot');
};
'use strict';
function Keyboard (cb) {
	this.main = MG.game.add.group();
    this.main.position.set(0, 500);
    this.keyboard = this.main;
    this.main.visible = false;
    this.maxInputCount = 500;		// 커서 위치 값
	this.txtInput = "";				// 일반 입력값
	this.pwInput = null;				// 패스워드 입력창일때 실제 입력값 저장
    this.cb = cb;

    this.updateCb = {};

    // 키보드 생성

    this.rect = MG.DrawRect(this.keyboard, 0, 0, MG.iMSW, MG.iMSH, 0x000000, 0, true);
    this.rect.events.onInputUp.add(function () {
        this.Hide();
    }.bind(this));

	this.cursorTime = 0;
	this.cursor = MG.AddText(this.keyboard, MG.iCSX, MG.iCSY, "│", {font: "35px Arial", fill: "#000000"});
	this.cursor.visible = false;

	MG.DrawRect(this.keyboard, 0, MG.iMSH-500, MG.iMSW, 500, 0xb0b0b0, 1, true);
	var spr;
	var tb1 = ["1","2","3","4","5","6","7","8","9","0"];
	var tb2 = ["q","w","e","r","t","y","u","i","o","p"];
	var tb3 = ["a","s","d","f","g","h","j","k","l"];
	var tb4 = ["z","x","c","v","b","n","m"];
	this.skey = [];	// 시프트키 변환시 사용..
	this.bShift = false;
	this.bShiftLock = false;

	for(var i=0;i<10;++i){
		spr = MG.AddSpriteButton(this.keyboard, 44+(i*70), MG.iCSY+190, "UI_0", "btn_pad01.png");
		spr.txt = MG.AddText(spr, 0, 3, tb1[i], {font: "35px Arial", fill: "#000000"});
		spr.events.onInputDown.add(this.keyPress, this);

		this.skey[i] = MG.AddSpriteButton(this.keyboard, 44+(i*70), MG.iCSY+280, "UI_0", "btn_pad02.png");
		this.skey[i].txt = MG.AddText(this.skey[i], 0, 3, tb2[i], {font: "35px Arial", fill: "#000000"});
		this.skey[i].events.onInputDown.add(this.keyPress, this);

		if(i < 9) {
			this.skey[10+i] = MG.AddSpriteButton(this.keyboard, 44+35+(i*70), MG.iCSY+380, "UI_0", "btn_pad02.png");
			this.skey[10+i].txt = MG.AddText(this.skey[10+i], 0, 3, tb3[i], {font: "35px Arial", fill: "#000000"});
			this.skey[10+i].events.onInputDown.add(this.keyPress, this);
		}

		if(i < 7) {
			this.skey[19+i] = MG.AddSpriteButton(this.keyboard, 44+105+(i*70), MG.iCSY+480, "UI_0", "btn_pad02.png");
			this.skey[19+i].txt = MG.AddText(this.skey[19+i], 0, 3, tb4[i], {font: "35px Arial", fill: "#000000"});
			this.skey[19+i].events.onInputDown.add(this.keyPress, this);
		}
	}

	// 시프트..
	spr = MG.AddSpriteButton(this.keyboard, 116, MG.iCSY+580, "UI_0", "btn_pad03.png");
	spr.txt = {};
	spr.txt.text = "e1";
	spr.events.onInputDown.add(this.keyPress, this);

	// @
	spr = MG.AddSpriteButton(this.keyboard, 120 + 80, MG.iCSY+580, "UI_0", "btn_pad02.png");
	spr.txt = MG.AddText(spr, 0, 3, "@", {font: "35px Arial", fill: "#000000"});
	spr.events.onInputDown.add(this.keyPress, this);

	// -
	spr = MG.AddSpriteButton(this.keyboard, 120 + 150, MG.iCSY+580, "UI_0", "btn_pad02.png");
	spr.txt = MG.AddText(spr, 0, 3, "-", {font: "35px Arial", fill: "#000000"});
	spr.events.onInputDown.add(this.keyPress, this);

	// _
	spr = MG.AddSpriteButton(this.keyboard, 120 + 220, MG.iCSY+580, "UI_0", "btn_pad02.png");
	spr.txt = MG.AddText(spr, 0, 3, "_", {font: "35px Arial", fill: "#000000"});
	spr.events.onInputDown.add(this.keyPress, this);

	// .
	spr = MG.AddSpriteButton(this.keyboard, 120 + 290, MG.iCSY+580, "UI_0", "btn_pad02.png");
	spr.txt = MG.AddText(spr, 0, 3, ".", {font: "35px Arial", fill: "#000000"});
	spr.events.onInputDown.add(this.keyPress, this);

	// 백스페이스
	spr = MG.AddSpriteButton(this.keyboard, 120 + 373, MG.iCSY+580, "UI_0", "btn_pad04.png");
	spr.txt = {};
	spr.txt.text = "e2";
	spr.events.onInputDown.add(this.keyPress, this);
	spr.events.onInputUp.add(this.keyUp, this);

	// 엔터
	spr = MG.AddSpriteButton(this.keyboard, 120 + 475, MG.iCSY+580, "UI_0", "btn_pad05.png");
	spr.txt = {};
	spr.txt.text = "e4";
	spr.events.onInputDown.add(this.keyPress, this);




	// // ,
	// spr = MG.AddSpriteButton(this.keyboard, 44+210, MG.iCSY+580, "UI_0", "btn_pad02.png");
	// spr.txt = MG.AddText(spr, 0, 3, ",", {font: "35px Arial", fill: "#000000"});
	// spr.events.onInputDown.add(this.keyPress, this);

	// // 스페이스
	// spr = MG.AddSpriteButton(this.keyboard, 44+210+155, MG.iCSY+580, "UI_0", "btn_pad06.png");
	// spr.txt = {};
	// spr.txt.text = "e3";
	// spr.events.onInputDown.add(this.keyPress, this);





	if(cb) cb(this);
    return this;
}

Keyboard.prototype = {
	keyPress: function (spr) {
		switch(spr.txt.text) {
			case "e1":	// 시프트 처리
				if(this.bShift === false){
					this.bShift = true;
					for(var i=0;i<this.skey.length;++i)
						this.skey[i].txt.text = this.skey[i].txt.text.toUpperCase();
				}else{
					if(this.bShiftLock === false) {
						this.bShiftLock = true;
					} else {
                        this.bShift = false;
                        this.bShiftLock = false;

                        for(var i=0;i<this.skey.length;++i)
                            this.skey[i].txt.text = this.skey[i].txt.text.toLowerCase();
					}
				}
				break;
			case "e2":	// 백스페이스
				this.txtInput.text = this.txtInput.text.substring(0, this.txtInput.text.length-1);
				if(this.pwInput !== null) this.pwInput.text = this.pwInput.text.substring(0, this.pwInput.text.length-1);
                this.e2 = setTimeout(function(){ this.updateCb["e2"] = true; }.bind(this), 250);
				break;
			case "e3":	// 스페이스 : 현재 아무짓도 안한다.
				break;
			case "e4": // 엔터 : 키보드를 내린다.
				MG.game.add.tween(this.keyboard).to({y:500}, 300, Phaser.Easing.Quartic.Out, true).onComplete.addOnce(function(){
					this.Hide();
				}.bind(this), this);
				break;
			case ",":	// 아무 반응하지 않는다.
				break;
			default:
				if(this.cursor.x >= this.maxInputCount) return;
				if(this.pwInput !== null) {
					this.pwInput.text += spr.txt.text;
					this.txtInput.text += "*";
				} else {
					this.txtInput.text += spr.txt.text;
				}

                if(this.bShift && !this.bShiftLock) {
                    this.bShift = false;
                    for(var i=0;i<this.skey.length;++i) {
                        this.skey[i].txt.text = this.skey[i].txt.text.toLowerCase();
                    }
                }
				break;
		}
	},
	keyUp: function (spr) {
        switch(spr.txt.text){
            case "e2":	// 백스페이스
                if(this.e2) {
                    clearTimeout(this.e2);
                    delete this.updateCb["e2"];
                    this.e2 = null;
                }
                break;
        }
    },

	keyUpdate:function () {
		for(var element in this.updateCb) {
			switch (element)
			{
				case "e2":
                    this.txtInput.text = this.txtInput.text.substring(0, this.txtInput.text.length-1);
					if(this.pwInput !== null) this.pwInput.text = this.pwInput.text.substring(0, this.pwInput.text.length-1);
					break;
			}
		}
    },

	cursorUpdate:function () {
		// console.log('update');

		this.cursorTime += MG.game.time.elapsed;

		if(this.cursorTime > 500) {
            this.cursorTime = 0;
            this.cursor.visible = !this.cursor.visible;
		}
		// console.log('this.cursor.x = ' + this.cursor.x);
		this.cursor.x = this.cursor.dx + this.txtInput.width;
    },

	GetInputString: function () {
		return this.txtInput.text;
    },

	Init: function () {
		this.cursorTime = 0;
		this.cursor.style.font = this.txtInput.style.font;
		this.cursor.dx = this.txtInput.world.x;
        this.cursor.y = this.txtInput.world.y;
        this.cursor.x = this.cursor.dx + this.txtInput.width;
        this.cursor.visible = true;
    },

	Show: function (txt, pwtxt) {
		this.txtInput = txt;
		if(pwtxt !== undefined) {
			this.pwInput = pwtxt;
		} else {
			this.pwInput = null;
		}
        this.keyboard.visible = true;
        this.rect.visible = true;

        console.log('show');

        this.oTween = MG.game.add.tween(this.keyboard).to({y:0}, 300, Phaser.Easing.Quartic.Out, true);
        this.oTween.onComplete.addOnce(function(){
            this.Init();
            this.TE_Update1 = MG.game.time.events.loop(100, this.keyUpdate, this);
            this.TE_Update2 = MG.game.time.events.loop(1000 / 60, this.cursorUpdate, this);
        }.bind(this), this);
	},

	Hide: function () {
		if(this.oTween.isRunning) this.oTween.stop();
		//this.pwInput = null;

        MG.game.time.events.remove(this.TE_Update1);
        MG.game.time.events.remove(this.TE_Update2);
        this.cursor.visible = false;
        this.rect.visible = false;

        console.log('hide');

        MG.game.add.tween(this.keyboard).to({y:500}, 300, Phaser.Easing.Quartic.Out, true).onComplete.addOnce(function(){
            this.keyboard.visible = false;
        }.bind(this), this);
	},
}
// MG.game.world.centerX
// MG.game.width    // MG.game.height

'use strict';

function UI_Game(parent) {
    this.main = MG.game.add.group();
    this.uiGroup = MG.game.add.group();     // ui 전용 그룹
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.uiPause = new UI_Pause(MG.gPause);     // 일시정지창
    this.isOver = false;
    this.TILE_TOTAL_COUNT = 15;
    this.AIRBALLOON_DEFAULT_Y = 150;
    //this.TILE_HEIGHT = 70;      // 타일 높이
    this.DROP_HEIGHT = 70;           // 타겟타일과 최종 안착 타일 간 높이간격
    this.PERFECT_GAP = 20;         // 이정도는 그냥 퍼펙트로 해주자.
    this.END_GAP = 10;           // 이 width 이하면 게임 오버
    this.iterTile = 0;
    this.iterTexture = 1;       // 3개 텍스쳐 순환
    //this.tileWidth = 400;
    //this.startYpos = 700;
    this.coinBarXpos = 0;
    this.endYpos = 840;
    this.lastTileInfo = {x:MG.game.world.centerX - 200, y:840, w:BASE_TILE_WIDTH};
    this.isPerfectBenefit = false;
    this.addCoinCount = -10;          // 코인을 대량으로 획득 시 카운트 올라가는 애니랑함께 적립해주자.
    this.tiles = [];
    this.nowTile = null;
    this.sliceTile = MG.AddSprite(this.main, 0, 0, 'UI_map', 'gold_tile.png');
    this.sliceTile.anchor.setTo(0, 0.5);
    this.sliceTile.visible = false;
    this.tileAreaMin = MG.game.world.centerX - (Math.round(BASE_TILE_WIDTH * 0.5));
    this.tileAreaMax = MG.game.world.centerX + (Math.round(BASE_TILE_WIDTH * 0.5));
    this.cloud = [];
    this.gold_reward = [];
    this.gold_reward_text = [];
    this.bgGimmick = [];
    this.gimmickIter = 0;
    this.coinBarEvent = null;
    this.isSpawnCoinBar = false;
    this.staretCoinCount = 0;          // 동전 올라가는 애니에서 시작 동전값이다.
    this.dropSoundPlayGap = 0;
    this.bg2 = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "bg" + gTileSkin + "-2");
    this.bg2.anchor.setTo(0.5, 1);
    this.bg2.scale.setTo(720, 2);
    // 배경 타일 스프라이트
    // this.bg2 = MG.game.add.tileSprite((MG.game.height - 1542), 0, MG.game.width, 1542, "bg" + gTileSkin + "-2");
    // this.bg2.anchor.setTo(0, 0);
    // this.main.addChild(this.bg2);
    // 이 배경은 아주 천천히 아래로 내려가도록 한다.
    this.bg1 = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "bg" + gTileSkin + "-1");
    this.bg1.anchor.setTo(0.5, 1);
    //this.bg1.scale.setTo(0);    // debug :

    //////////////////////////////////////////////
    ///// 배경과 타일들 사이에 기믹 객체들 배치해야 한다.
    ///// 댑스때문에 객체는 여기 있지만, 조정은 BackgroundManager에서 한다.
    //////////////////////////////////////////////
    for(var i=0; i<10; ++i){
        this.bgGimmick[i] = MG.AddSprite(this.main, 9999, 9999, "UI_0", "blank_dot.png");
        this.bgGimmick[i].visible = false;
    }

    this.road = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "base"+gTileSkin);
    this.road.anchor.setTo(0.5, 1);
    this.baseTower = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height - 150, "UI_map", "baseFloor" + gTileSkin +".png");
    this.baseTower.anchor.setTo(0.5, 1);

    // /////////////////////////////////////////////////////
    // // debug : 임시 배경 화면
    // this.mockup_bg = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "mockup");
    // this.mockup_bg.anchor.setTo(0.5, 1);
    // this.mockup_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "mockup_gradient");
    // this.mockup_gradient.anchor.setTo(0.5, 1);
    // this.mockup_gradient.scale.setTo(720, 4);
    // //////////////////////////////////////////////////////



    // 구름
    // this.cloud[0] = MG.AddSprite(this.main, 9999, 150, "UI_map", "cloud_left" + gTileSkin +".png");
    // this.cloud[0].anchor.setTo(0, 0.5);
    // this.cloud[1] = MG.AddSprite(this.main, 9999, 50, "UI_map", "cloud_center" + gTileSkin +".png");
    // this.cloud[1].anchor.setTo(0.5, 0.5);
    // this.cloud[2] = MG.AddSprite(this.main, 9999, 150, "UI_map", "cloud_right" + gTileSkin +".png");
    // this.cloud[2].anchor.setTo(1, 0.5);
    this.cloud[0] = MG.AddSprite(this.main, 0, 150, "UI_map", "cloud_left" + gTileSkin +".png");
    this.cloud[0].anchor.setTo(0, 0.5);
    this.cloud[1] = MG.AddSprite(this.main, MG.game.world.centerX, 50, "UI_map", "cloud_center" + gTileSkin +".png");
    this.cloud[1].anchor.setTo(0.5, 0.5);
    this.cloud[2] = MG.AddSprite(this.main, MG.game.width, 150, "UI_map", "cloud_right" + gTileSkin +".png");
    this.cloud[2].anchor.setTo(1, 0.5);
    // 열기구
    this.hotAirBalloon = MG.AddSprite(this.main, MG.game.world.centerX + 100, this.AIRBALLOON_DEFAULT_Y, "UI_map", "balloon_" + gTileSkin +".png");
    this.hotAirBalloon.anchor.setTo(0.5, 1);
    this.hotAirBalloon.scale.set(0);
    // 열기구 하단의 광고 전광판
    this.adBoard = MG.AddSprite(this.hotAirBalloon, 0, 0, "UI_map", "ad0.png");
    this.adBoard.anchor.setTo(0.5, 0);
    this.adBoard.scale.set(0);//this.adBoard.scale.set(1, 0);
    // 퍼펙트 이미지
    this.perfect = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, 9999, "UI_0", "Game_Perfect.png");
    this.perfect.scale.setTo(1.3);
    // 게임 UI ///////////////////////////////
    this.topBar = MG.AddSpriteNine(MG.gUiFixed, MG.game.world.centerX, 50, "UI_0", "Game_TopBar.png", MG.game.width, 100, {top:6, bottom:6, left:6, right:6});
    // this.topBar = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, 65, "UI_0", "Game_TopBar.png");
    // 일시정지 버튼  (parent, x, y, atlas, imgName, sound, scale, color, alpha, ax, ay, width, height)
    this.btnPause = MG.AddSpriteButtonScale(this.topBar, 300, 0, "UI_0", "Btn_Game_Pause.png");
    this.btnPause.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        if(MG.playGameController.GetInput() === false) return;
        this.uiPause.Show();
    }, this);
    this.btnPause.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnPause.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    // 스코어
    // MG.AddText(this.topBar, 20, -20, 'HIGH SCORE', {font:"20px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"center"});
    this.txtScore = MG.AddText(this.topBar, 0, 25, '0', {font:"50px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"center"});
    // this.txtScore = MG.AddBitmapText(this.topBar, 20, -25, "number1",  "0", 110, 0.5, 0.5);
    //this.txtScore = MG.AddText(this.topBar, 20, 0, '0', {font:"70px " + gFontFace, fill:"#FFFFFF", fontWeight: 700, align:"center"});
    // 최고 점수
    this.txtBestScore = MG.AddText(this.topBar, 20, -25, kData.bs, {font:"28px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"center"});
    this.txtBestScore.anchor.setTo(0.5);
    this.iconBestScore = MG.AddSprite(this.txtBestScore, -(parseFloat(this.txtBestScore.width * 0.5) + 25), -6, "UI_0", "Game_Icon_Highscore.png");// this.iconBestScore = MG.AddSprite(this.topBar, -310, -20, "UI_0", "Game_Icon_Highscore.png");
    // 층수 표시
    if(MSSDK.getBackButton() == true) {
        this.txtFloor = MG.AddText(this.topBar, -(MG.game.world.centerX - 130), 25, '0F', {font:"31px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"center"});//this.txtFloor = MG.AddText(this.topBar, this.iconBestScore.x + ((this.txtBestScore.width * 0.5) + 25), 25, '0F', {font:"25px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"center"});
    }else{
        this.txtFloor = MG.AddText(this.topBar, -(MG.game.world.centerX - 80), 25, '0F', {font:"31px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"center"});//this.txtFloor = MG.AddText(this.topBar, this.iconBestScore.x + ((this.txtBestScore.width * 0.5) + 25), 25, '0F', {font:"25px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"center"});
    }
    // 콤보 카운트 표시
    // this.txtCombo = MG.AddText(MG.gUiFixed, MG.game.world.centerX, 250, '0', {font:"1px " + gFontFace, fill:"#FF0000"/*, stroke:"#202251", strokeThickness:6*/});
    // this.txtCombo.visible = false;
    // 코인 배경
    // this.coinBg = MG.AddSpriteNine(this.topBar, -300, -60, "UI_0", "Popup_BuyTower_CoinFrame.png", 140, 56, {top:0, bottom:0, left:54, right:54});
    if(kData.cc < 1000){
        this.coinBarXpos = -260;
        this.coinBg = MG.AddSpriteNine(this.topBar, this.coinBarXpos * 3, 100, "UI_0", "Game_CoinBar.png", 160, 56, {top:0, bottom:0, left:28, right:28});
        this.coinIcon = MG.AddSprite(this.coinBg, -35, 0, "UI_0", "Game_CoinBar_Coin.png");        // 코인 아이콘
    }else if(kData.cc >= 1000 && kData.cc < 10000){
        this.coinBarXpos = -255;
        this.coinBg = MG.AddSpriteNine(this.topBar, this.coinBarXpos * 3, 100, "UI_0", "Game_CoinBar.png", 160, 56, {top:0, bottom:0, left:28, right:28});
        this.coinIcon = MG.AddSprite(this.coinBg, -40, 0, "UI_0", "Game_CoinBar_Coin.png");        // 코인 아이콘
    }else if(kData.cc >= 10000 && kData.cc < 100000){
        this.coinBarXpos = -240;
        this.coinBg = MG.AddSpriteNine(this.topBar, this.coinBarXpos * 3, 100, "UI_0", "Game_CoinBar.png", 180, 56, {top:0, bottom:0, left:28, right:28});
        this.coinIcon = MG.AddSprite(this.coinBg, -55, 0, "UI_0", "Game_CoinBar_Coin.png");        // 코인 아이콘
    }else if(kData.cc >= 100000 && kData.cc < 1000000){
        this.coinBarXpos = -225;
        this.coinBg = MG.AddSpriteNine(this.topBar, this.coinBarXpos * 3, 100, "UI_0", "Game_CoinBar.png", 200, 56, {top:0, bottom:0, left:28, right:28});
        this.coinIcon = MG.AddSprite(this.coinBg, -60, 0, "UI_0", "Game_CoinBar_Coin.png");        // 코인 아이콘
    }else if(kData.cc >= 1000000){
        this.coinBarXpos = -210;
        this.coinBg = MG.AddSpriteNine(this.topBar, this.coinBarXpos * 3, 100, "UI_0", "Game_CoinBar.png", 240, 56, {top:0, bottom:0, left:28, right:28});
        this.coinIcon = MG.AddSprite(this.coinBg, -75, 0, "UI_0", "Game_CoinBar_Coin.png");        // 코인 아이콘
    }


    this.txtCoin = MG.AddText(this.coinIcon, 30, 3, '0', {font:"26px " + gFontFace, fill:"#798499", fontWeight: "normal",  align:"left"});
    this.txtCoin.anchor.setTo(0, 0.5);

    // 무효권 연출 스파인
    this.spRevival = MG.game.add.spine(MG.game.width - 55, 150, 'spRevival');
    this.spRevival.visible = false;
    this.spRevival.timeScale = 0;

    // 황금타일 리워드 표시 이미지들
    this.gold_reward[0] = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "gold_tile_reward_1.png");
    this.gold_reward[0].anchor.setTo(0.5);
    this.gold_reward[0].visible = false;
    this.gold_reward_text[0] = MG.AddText(MG.gUiFixed, 0, 80, MG.LM.Get('gold_reward1', 5), {font:"35px " + gFontFace, fill:"#578fd7", fontWeight: "bold",  align:"center"});
    this.gold_reward[0].addChild(this.gold_reward_text[0]);
    this.gold_reward[1] = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "gold_tile_reward_2.png");
    this.gold_reward[1].anchor.setTo(0.5);
    this.gold_reward[1].visible = false;
    this.gold_reward_text[1] = MG.AddText(MG.gUiFixed, 0, 80, MG.LM.Get('gold_reward1', 10), {font:"35px " + gFontFace, fill:"#578fd7", fontWeight: "bold",  align:"center"});
    this.gold_reward[1].addChild(this.gold_reward_text[1]);
    this.gold_reward[2] = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "gold_tile_reward_3.png");
    this.gold_reward[2].anchor.setTo(0.5);
    this.gold_reward[2].visible = false;
    this.gold_reward_text[2] = MG.AddText(MG.gUiFixed, 0, 80, MG.LM.Get('gold_reward2', 300), {font:"35px " + gFontFace, fill:"#578fd7", fontWeight: "bold",  align:"center"});
    this.gold_reward[2].addChild(this.gold_reward_text[2]);
    this.gold_reward[3] = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "gold_tile_reward_4.png");
    this.gold_reward[3].anchor.setTo(0.5);
    this.gold_reward[3].visible = false;
    this.gold_reward_text[3] = MG.AddText(MG.gUiFixed, 0, 80, MG.LM.Get('gold_reward2', 500), {font:"35px " + gFontFace, fill:"#578fd7", fontWeight: "bold",  align:"center"});
    this.gold_reward[3].addChild(this.gold_reward_text[3]);
    this.gold_reward[4] = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "gold_tile_reward_5.png");
    this.gold_reward[4].anchor.setTo(0.5);
    this.gold_reward[4].visible = false;
    this.gold_reward_text[4] = MG.AddText(MG.gUiFixed, 0, 80, MG.LM.Get('gold_reward2', 1000), {font:"35px " + gFontFace, fill:"#578fd7", fontWeight: "bold",  align:"center"});
    this.gold_reward[4].addChild(this.gold_reward_text[4]);

    // 다이아타일 리워드 표시 이미지
    this.dia_reward = MG.AddSprite(MG.gUiFixed, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "gold_tile_reward_2.png");
    this.dia_reward.anchor.setTo(0.5);
    this.dia_reward.visible = false;
    this.dia_reward_text = MG.AddText(MG.gUiFixed, 0, 80, MG.LM.Get('gold_reward1', 30), {font:"35px " + gFontFace, fill:"#578fd7", fontWeight: "bold",  align:"center"});
    this.dia_reward.addChild(this.dia_reward_text);

    // // 광고보고 칸늘리기 아이콘 게이지
    // this.arcGauge = [];
    //
    // this.arcGauge[0] = MG.AddSprite(MG.gUiFixed, 80, 250, "UI_0", "Game_Btn_AD_BG.png");
    // this.arcGauge[0].anchor.setTo(0.5);
    //
    // this.arcGauge[1] = MG.game.add.graphics(0, 0);
    // this.arcGauge[1].beginFill(0xfe7234);
    // this.arcGauge[1].arc(80, 250, 50, 0, Math.PI*2);
    // this.arcGauge[1].endFill();
    //
    // this.arcGauge[2] = MG.game.add.graphics(0, 0);
    // this.arcGauge[2].beginFill(0xFFFFFF);
    //
    // this.arcGauge[2].arc(80, 250, 50, MG.game.math.degToRad(-90), MG.game.math.degToRad(360-90+0), true, 360);
    // this.arcGauge[2].endFill();
    //
    // this.arcGauge[3] = MG.game.add.sprite(80, 250, "UI_0", "Game_Btn_AD.png");
    // this.arcGauge[3].anchor.setTo(0.5, 0.5);
    // this.arcGauge[3].events.onInputUp.add(function () {
    //     if(!arguments[3]) return;
    //     MG.playGameController.ShowExtendPupup();
    // }, this);


    // // 광고보고 칸늘리기 아이콘
    // this.extendIcon = MG.AddSpriteButton(MG.gUiFixed, 80, 250, "UI_0", "Game_Btn_AD.png");
    // this.extendIcon.anchor.setTo(0.5);
    // this.extendIcon.events.onInputUp.add(function () {
    //     if(!arguments[2]) return;
    //     MG.playGameController.ShowExtendPupup();
    // }, this);


    // 황금타일, 다이아타일 연출 시 뒷 검은 배경
    // this.drSpecialTileBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height * 2, 0x000000, 0.7, true);
    // this.drSpecialTileBG.events.onInputDown.add(function () {}, this);
    // this.drSpecialTileBG.visible = false;

    // 자식 등록
    for(var i=0; i<this.TILE_TOTAL_COUNT;++i){
        this.tiles[i] = new Tile(this.main, i);
    }

    this.main.visible = false;
    MG.gUiFixed.visible = false;
}

UI_Game.prototype = {
    Init:function(){
        this.iterTile = 0;
        this.iterTexture = 1;       // 3개 텍스쳐 순환
        gIsRevival = false;
        this.endYpos = 840;
        this.main.position.setTo(0);
        this.bg1.position.y = MG.game.height;
        this.cloud[0].position.y = 150;
        this.cloud[1].position.y = 50;
        this.cloud[2].position.y = 150;
        this.hotAirBalloon.position.y = this.AIRBALLOON_DEFAULT_Y;
        this.lastTileInfo = {x:MG.game.world.centerX - 200, y:840, w:BASE_TILE_WIDTH};
        this.txtScore.text = "0";
        this.txtFloor.text = "0F";
        // this.txtCombo.text = "0";
        this.txtCoin.text = kData.cc;
        // this.txtCoin.ReSize(kData.cc, 150);
        this.gimmickIter = 0;
        // this.txtCombo.visible = false;

        for(var i=0; i<this.tiles.length; ++i){
            this.tiles[i].Init();
        }

        for(i=0; i<this.bgGimmick.length; ++i){
            this.bgGimmick[i].visible = false;
        }
    },
    // ShowSpecialTileBG:function(b){
        // this.drSpecialTileBG.position.setTo(0, this.lastTileInfo.y + 70);
        // this.drSpecialTileBG.visible = b;
    // },
    GetThis:function(){
        return this;
    },
    GetGroup:function(){
        return this.main;       // 층수 올라갈때 아래로 내려가는 오브젝트들은 여기 등록
    },
    GetCoinIconPosition:function(){
        return {x:this.coinIcon.position.x, y:this.coinIcon.position.y - this.main.position.y - (this.main.position.y === 0 ? 0 : 65)};
    },
    GetCenterPosition:function(){
        return {x:MG.game.world.centerX, y:MG.game.world.centerX - this.main.position.y + 150};
    },
    GetNowTile:function(){
        return this.nowTile;
    },
    // StartGame:function(){
    //     this.spRevival.visible = true;
    //     this.spRevival.timeScale = 1;
    //     this.spRevival.setAnimationByName(0, "Idle", true);
    // },
    Show:function(type){
        this.main.visible = true;
        this.txtBestScore.text = InsertComma(kData.bs);
        this.iconBestScore.position.x = -(parseFloat(this.txtBestScore.width * 0.5) + 25);
        this.SetBackgroundColor();
        this.UpdateAdBoard();
        this.UpdateCoin(kData.cc);   // StartGame() 함수에서 갱신해주고 있음


        // var progress = 150;
        // this.arcGauge[2].beginFill(0xfe7234);
        // this.arcGauge[2].arc(80, 250, 47, Phaser.Math.degToRad(-90), Phaser.Math.degToRad(270-(3.59999 * progress)), true, 360);
        // this.arcGauge[2].endFill();
        //
        // MG.gUiFixed.bringToTop(this.arcGauge[3]);


        switch(type){
            case "lobby":
                MG.StopBgm('game_bgm');
                MG.PlayBgm('lobby_bgm', true);
                MG.SetBgmVolume('lobby_bgm', 0.5);
                this.SetZoom("lobby");
                MG.gUiFixed.visible = false;
                //this.mockup_gradient.visible = true;
                //this.mockup_bg.visible = true;

                if(gTileSkin === 4){
                    this.spRevival.visible = false;
                    this.spRevival.timeScale = 0;
                }
                break;

            case "game":
                MG.StopBgm('lobby_bgm');
                MG.PlayBgm('game_bgm', true);
                MG.SetBgmVolume('game_bgm', 0.5);
                MG.gUiFixed.visible = true;
                //this.mockup_gradient.visible = false;
                //this.mockup_bg.visible = false;

                if(gTileSkin === 4){
                    this.spRevival.position.setTo(MG.game.width - 55, 150);
                    this.spRevival.visible = true;
                    this.spRevival.timeScale = 1;
                    this.spRevival.setAnimationByName(0, "Idle", true);
                }
                break;
        }
    },
    Hide:function(){
        this.main.visible = false;
        MG.gUiFixed.visible = false;
        if(gTileSkin === 4){
            this.spRevival.visible = false;
            this.spRevival.timeScale = 0;
        }
    },
    Refresh:function(){
        this.bg2.loadTexture("bg" + gTileSkin + "-2");
        this.bg1.loadTexture("bg" + gTileSkin + "-1");
        this.road.loadTexture("base"+gTileSkin);
        this.hotAirBalloon.loadTexture("UI_map", "balloon_" + gTileSkin +".png");
        this.baseTower.loadTexture("UI_map", "baseFloor" + gTileSkin +".png");
        switch(gTileSkin){
            case 1:
                this.baseTower.position.x = MG.game.world.centerX + 13;
                this.baseTower.position.y = MG.game.height - 163;
                break;

            case 2:
                this.baseTower.position.x = MG.game.world.centerX;
                this.baseTower.position.y = MG.game.height - 160;
                break;

            case 3:
                this.baseTower.position.x = MG.game.world.centerX;
                this.baseTower.position.y = MG.game.height - 170;//145;
                break;

            case 4:
                this.baseTower.position.x = MG.game.world.centerX;
                this.baseTower.position.y = MG.game.height - 161;
                break;
        }

        this.cloud[0].loadTexture("UI_map", "cloud_left" + gTileSkin +".png");
        this.cloud[1].loadTexture("UI_map", "cloud_center" + gTileSkin +".png");
        this.cloud[2].loadTexture("UI_map", "cloud_right" + gTileSkin +".png");
        this.SetBackgroundColor();

        for(var i=0; i<this.tiles.length; ++i){
            this.tiles[i].Refresh();
        }
    },
    UpdateAdBoard:function(){
        this.adBoard.loadTexture("UI_map", "ad" + Random.Range(0, 5) + ".png");
        this.adBoard.scale.set(0);//this.adBoard.scale.set(1, 0);

        // 애드벨룬 위치값 설정
        if(Random.Range(0, 2) === 0){
            // 왼쪽 위치로 셋팅
            this.hotAirBalloon.position.x = Random.Range(160, 210);
        } else {
            // 오른쪽 위치로 셋팅
            //this.hotAirBalloon = MG.AddSprite(this.main, MG.game.world.centerX + 100, 220
            this.hotAirBalloon.position.x = Random.Range(MG.game.width - 210, MG.game.width - 160);
        }
    },
    SetBackgroundColor:function(){
        switch (gTileSkin) {
            case 1:     // debug :
                MG.game.stage.backgroundColor = 0x12123f;//MG.game.stage.backgroundColor = 0x5de3f1;//MG.game.stage.backgroundColor = 0x202251;
                break;

            case 2:
                MG.game.stage.backgroundColor = 0x2b1920;//MG.game.stage.backgroundColor = 0x0a120c;
                break;

            case 3:
                MG.game.stage.backgroundColor = 0x251e36;//MG.game.stage.backgroundColor = 0x152f42;
                break;

            case 4:
                MG.game.stage.backgroundColor = 0x261931;//MG.game.stage.backgroundColor = 0x0a120c;
                break;
        }
    },
    SetBackgroundGimmick:function(x, y, scaleX, tx){
        this.bgGimmick[this.gimmickIter].position.setTo(x, y);
        this.bgGimmick[this.gimmickIter].scale.setTo(scaleX, 1);
        this.bgGimmick[this.gimmickIter].loadTexture("UI_map", tx);
        this.bgGimmick[this.gimmickIter].visible = true;

        if(++this.gimmickIter >= this.bgGimmick.length) this.gimmickIter = 0;
    },
    // 무효권 아이콘인데 부활팝업, 일시정지, 다이아타일 광고팝업 등에서 최상위에 표시 되어서 잠시 꺼두기 위해...
    SetRevivalIcon:function(b){
        if(gTileSkin === 4) this.spRevival.visible = b;
    },
    UpdateScore:function(num){
        this.txtScore.text = InsertComma(num);
        if(num > kData.bs) {
            this.UpdateBestScore(num);
            MSSDK.scoreUpdate(num); //게임스낵 타임어텍 점수
        }
    },
    UpdateBestScore:function(num){
        this.txtBestScore.text = InsertComma(parseInt(num));
        this.iconBestScore.position.x = -(parseFloat(this.txtBestScore.width * 0.5) + 25);
    },
    UpdateCoin:function(num){
        if(num === undefined) num = kData.cc;
        this.txtCoin.text = InsertComma(num);
        // this.txtCoin.ReSize(InsertComma(num), 150);
    },
    AddCoin:function(){
        //console.log(":::::::::: AddCoin ::::::::::::");
        this.txtCoin.text = InsertComma(this.staretCoinCount += 10);
        //this.txtCoin.ReSize(InsertComma(kData.cc += 10), 150);
    },
    StartCoinWithAnimation:function(num){
        if(this.addCoinCount >= 0){
            this.addCoinCount += num;
        }else{
            this.staretCoinCount = kData.cc + gPlayData.get_coin;
            this.addCoinCount = num;
            this.UpdateCoinWithAnimation();
        }
        gPlayData.get_coin += num;
    },
    UpdateCoinWithAnimation:function(){
        this.addCoinCount -= 10;
        if(this.addCoinCount >= 0) {
            this.AddCoin();
            setTimeout(function(){
                this.UpdateCoinWithAnimation();
            }.bind(this), 25);
        }
    },
    UpdateFloor:function(num){
        // this.txtFloor.text = InsertComma(num) + "F";
        this.txtFloor.ReSize(InsertComma(num) + "F", 100);
    },
    // UpdateCombo:function(num){
    //     if(num <= 1){
    //         this.txtCombo.visible = false;
    //     }else{
    //         this.txtCombo.visible = true;
    //         this.txtCombo.text = num + " Combo";
    //     }
    // },
    // 스텐드얼론 전용 함수
    /**
     * @return {number}
     */
    GetCoinText:function(num){
        return parseInt(RemoveComma(this.txtCoin.text));
    },
    // 타일 배치
    Spawn:function(){
        this.nowTile = this.tiles[this.iterTile];
        this.nowTile.GetSprite().visible = true;
        var _dir = "";
        var _tileState = "";

        _tileState = MG.specialTileManager.isApplySpecialTile();

        if(Random.Range(0, 2) === 0){
            _dir = "left";
        }else{
            _dir = "right";
        }
        //if(_tileState === "dia") _dir = "center";

        // if(_tileState === "dia"){
        //     // 가운데 생성해주자
        //     this.nowTile.Show(this.main, _dir, _tileState, MG.game.world.centerX, (this.endYpos - this.DROP_HEIGHT), this.lastTileInfo.w, gTILE_HEIGHT, ("floor" + gTileSkin + "-" + this.iterTexture + ".png"), this.endYpos);
        // }else{
            if(_dir === "left"){
                // 왼쪽에서 등장
                this.nowTile.Show(this.main, 'left', _tileState, (Random.Range(0, 20)), (this.endYpos - this.DROP_HEIGHT), this.lastTileInfo.w, gTILE_HEIGHT, ("floor" + gTileSkin + "-" + this.iterTexture + ".png"), this.endYpos);
            }else{
                // 오른쪽에서 등장
                this.nowTile.Show(this.main, 'right', _tileState, ((MG.game.width - this.lastTileInfo.w) - (Random.Range(0, 20))), (this.endYpos - this.DROP_HEIGHT), this.lastTileInfo.w, gTILE_HEIGHT, ("floor" + gTileSkin + "-" + this.iterTexture + ".png"), this.endYpos);
            }
        // }

        // 황금타일 or 다이아타일 연출 스파인
        if(_tileState !== "normal"){
            //this.ShowSpecialTileBG(true);
            MG.playGameController.SetInput(false);
            MG.playGameController.SetSpecialTile(_dir, this.nowTile.GetCenter(), this.nowTile.GetSprite().y, this.lastTileInfo.w);
        }
        if(++this.iterTile >= this.tiles.length) this.iterTile = 0;
        if(++this.iterTexture > 3) this.iterTexture = 1;
        if(_tileState !== "dia") this.endYpos -= gTILE_HEIGHT;

        // 구름 배치
        //if(Random.Range(0, 10) === 0) this.RandomSpawnCloud();
    },
    // 부활 한다. (기존 70% 재생에서 100% 재생으로 변경)
    SpawnResurrect:function(){
        MG.specialTileManager.init();
        this.nowTile = this.tiles[this.iterTile];
        this.nowTile.GetSprite().visible = true;
        // var _x = MG.game.world.centerX;
        // var _w = Math.round(BASE_TILE_WIDTH);//var _w = Math.round(BASE_TILE_WIDTH * 0.7);
        // var _min = Math.round(_x - (Math.round(_w * 0.5)));     // 최소 허용 범위
        // var _max = Math.round(_x + (Math.round(_w * 0.5)));     // 최대 허용 범위
        // var _lastMin = Math.round(this.lastTileInfo.x);
        // var _lastMax = Math.round(this.lastTileInfo.x + Math.round(this.lastTileInfo.w));
        //
        // if(_min > _lastMax){
        //     this.lastTileInfo.x = Math.round(_x - (_min - _lastMax));//Math.round(this.tileAreaMin + (Math.round(this.lastTileInfo.w * 0.5)));
        // } else if(_max < _lastMin){
        //     this.lastTileInfo.x = Math.round(_x + (_lastMin - _max));//Math.round(this.tileAreaMax - (Math.round(this.lastTileInfo.w * 0.5)));
        // } else {
        //     this.lastTileInfo.x = _x;
        // }


        this.lastTileInfo.x = MG.game.world.centerX - 200;
        this.lastTileInfo.w = Math.round(BASE_TILE_WIDTH);  // 100% 넓이로 부활

        this.nowTile.Show(this.main, 'center', 'gold', this.lastTileInfo.x, (this.endYpos + gTILE_HEIGHT), this.lastTileInfo.w, gTILE_HEIGHT, "bonus.png", (this.endYpos + gTILE_HEIGHT));
        //this.nowTile.GetSprite().loadTexture('UI_map', "bonus.png");
        if(++this.iterTile >= this.tiles.length) this.iterTile = 0;
        //if(++this.iterTexture > 3) this.iterTexture = 1;
        setTimeout(function(){ this.Drop(); }.bind(this), 300);
    },
    // 확장 한다. (70%, 80%, 90% 중 랜덤)
    SpawnExtend:function(){
        MG.specialTileManager.init();
        this.nowTile = this.tiles[this.iterTile];
        this.nowTile.GetSprite().visible = true;
        var _x = MG.game.world.centerX;
        var _wRatio = (10 * Random.Range(7, 10)) * 0.01;
        var _w = Math.round(BASE_TILE_WIDTH * _wRatio);//var _w = Math.round(BASE_TILE_WIDTH * 0.7);
        var _min = Math.round(_x - (Math.round(BASE_TILE_WIDTH * 0.5)));     // 최소 허용 범위
        var _max = Math.round(_x + (Math.round(BASE_TILE_WIDTH * 0.5)));     // 최대 허용 범위
        var _lastMin = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) - (Math.round(_w * 0.5)));
        var _lastMax = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) + (Math.round(_w * 0.5)));

        if(_min > _lastMin){
            this.lastTileInfo.x = _min;
        } else if(_max < _lastMax){
            this.lastTileInfo.x = Math.round(_max - _w);
        } else {
            this.lastTileInfo.x = (this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) - (_w * 0.5);
        }
        this.lastTileInfo.w = _w;
        var _tex = this.iterTexture - 1;
        if(_tex <= 0) _tex= 3;
        this.nowTile.Show(this.main, 'superSkip', 'normal', this.lastTileInfo.x, (this.endYpos + gTILE_HEIGHT), this.lastTileInfo.w, gTILE_HEIGHT, ("floor" + gTileSkin + "-" + _tex + ".png"), (this.endYpos + gTILE_HEIGHT));
        //this.nowTile.GetSprite().loadTexture('UI_map', "bonus.png");
        if(++this.iterTile >= this.tiles.length) this.iterTile = 0;
        //if(++this.iterTexture > 3) this.iterTexture = 1;
        setTimeout(function(){ this.Drop(); }.bind(this), 300);
    },

    // 황금타일 받기 실행 중...
    GoodAnswerBenefit:function(rewardType){
        var _sizeUp = 0;

        // 떨어뜨리기전에 미리 사이즈업 해주자
        _sizeUp = Math.round(this.lastTileInfo.w + COMBO_SIZEUP);

        if(_sizeUp >= BASE_TILE_WIDTH){
            this.lastTileInfo.w = BASE_TILE_WIDTH;
            this.lastTileInfo.x = MG.game.world.centerX - (this.lastTileInfo.w * 0.5);
        } else {
            var _min = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) - (Math.round(_sizeUp * 0.5)));
            var _max = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) + (Math.round(_sizeUp * 0.5)));

            if(_min < this.tileAreaMin){
                //_sizeUp -= Math.round(this.tileAreaMin - _min);
                this.lastTileInfo.w = _sizeUp;
                this.lastTileInfo.x = this.tileAreaMin;//Math.round(this.tileAreaMin + (Math.round(this.lastTileInfo.w * 0.5)));
            } else if(_max > this.tileAreaMax){
                //_sizeUp -= Math.round(_max - this.tileAreaMax);
                this.lastTileInfo.w = _sizeUp;
                this.lastTileInfo.x = Math.round(this.tileAreaMax - (Math.round(this.lastTileInfo.w)));
            } else {
                this.lastTileInfo.w = _sizeUp;
                this.lastTileInfo.x -= (COMBO_SIZEUP * 0.5);
            }
        }

        var _tx = "";
        if(rewardType !== undefined){
            _tx = rewardType;
        }else{
            _tx = MG.specialTileManager.getCurrentTileState();
        }

        this.nowTile = this.tiles[this.iterTile];
        this.nowTile.GetSprite().visible = true;
        this.nowTile.Show(this.main, 'center', _tx, this.lastTileInfo.x, (this.endYpos/* - this.DROP_HEIGHT*/), this.lastTileInfo.w, gTILE_HEIGHT, "bonus.png", this.endYpos);
        if(++this.iterTile >= this.tiles.length) this.iterTile = 0;
        if(++this.iterTexture > 3) this.iterTexture = 1;
        this.endYpos -= gTILE_HEIGHT;
        this.nowTile.DropFake();//this.Drop();// setTimeout(function() { MG.uiGame.Drop() }, 100);
    },
    DiaTileBenefit:function(){
        if(--gAutoDropFloorCount < 0) {
            MG.playGameController.EndDiamondTileEffect();
            return;
        }

        var _sizeUp = 0;

        // 떨어뜨리기전에 미리 사이즈업 해주자
        _sizeUp = Math.round(this.lastTileInfo.w + COMBO_SIZEUP);

        if(_sizeUp >= BASE_TILE_WIDTH){
            this.lastTileInfo.w = BASE_TILE_WIDTH;
            this.lastTileInfo.x = MG.game.world.centerX - (this.lastTileInfo.w * 0.5);
        } else {
            var _min = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) - (Math.round(_sizeUp * 0.5)));
            var _max = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) + (Math.round(_sizeUp * 0.5)));

            if(_min < this.tileAreaMin){
                //_sizeUp -= Math.round(this.tileAreaMin - _min);
                this.lastTileInfo.w = _sizeUp;
                this.lastTileInfo.x = this.tileAreaMin;//Math.round(this.tileAreaMin + (Math.round(this.lastTileInfo.w * 0.5)));
            } else if(_max > this.tileAreaMax){
                //_sizeUp -= Math.round(_max - this.tileAreaMax);
                this.lastTileInfo.w = _sizeUp;
                this.lastTileInfo.x = Math.round(this.tileAreaMax - (Math.round(this.lastTileInfo.w)));
            } else {
                this.lastTileInfo.w = _sizeUp;
                this.lastTileInfo.x -= (COMBO_SIZEUP * 0.5);
            }
        }

        // var _tx = "dia";
        // if(rewardType !== undefined){
        //     _tx = rewardType;
        // }else{
        //     _tx = MG.specialTileManager.getCurrentTileState();
        // }

        this.nowTile = this.tiles[this.iterTile];
        this.nowTile.GetSprite().visible = true;
        this.nowTile.Show(this.main, 'center', "dia", this.lastTileInfo.x, (this.endYpos/* - this.DROP_HEIGHT*/), this.lastTileInfo.w, gTILE_HEIGHT, "bonus.png", this.endYpos);
        if(++this.iterTile >= this.tiles.length) this.iterTile = 0;
        if(++this.iterTexture > 3) this.iterTexture = 1;
        this.endYpos -= gTILE_HEIGHT;
        this.nowTile.DropFake();//this.Drop();// setTimeout(function() { MG.uiGame.Drop() }, 100);
    },
    SuperSkip:function(){
        if(--gAutoDropFloorCount < 0) {
            MG.playGameController.EndSuperSkipLoop();
            return;
        }
        this.nowTile = this.tiles[this.iterTile];
        this.nowTile.GetSprite().visible = true;
        this.nowTile.Show(this.main, 'superSkip', 'normal', this.lastTileInfo.x, (this.endYpos/* - this.DROP_HEIGHT*/), this.lastTileInfo.w, gTILE_HEIGHT, ("floor" + gTileSkin + "-" + this.iterTexture + ".png"), this.endYpos);
        if(++this.iterTile >= this.tiles.length) this.iterTile = 0;
        if(++this.iterTexture > 3) this.iterTexture = 1;
        this.endYpos -= gTILE_HEIGHT;
        this.nowTile.SuperSkipDrop();
        this.DropBackground();      // 맵 아래로 이동 (카메라 이동 효과)
    },
    // 연속 퍼펙트 시 사이즈 업
    PerfectBenefit:function(){
        this.isPerfectBenefit = true;
    },
    PerfectEffect:function(){
        //this.perfect
        if(gPlayData.floor_count < 5) {
            this.perfect.position.setTo(this.nowTile.GetCenter(), MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT);//this.perfect.position.setTo(MG.uiGame.GetLastTile().x, MG.uiGame.GetLastYposResurrect());
        } else {
            this.perfect.position.setTo(this.nowTile.GetCenter(), MG.uiGame.GetLastYposResurrect());//this.perfect.position.setTo(MG.uiGame.GetLastTile().x, MG.uiGame.GetLastYposResurrect() + gTILE_HEIGHT);
        }
        // this.perfect.position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
        MG.game.add.tween(this.perfect).to({alpha:0}, 200, Phaser.Easing.Linear.None, true, 50);
        MG.game.add.tween(this.perfect).to({y:"-150"}, 300, Phaser.Easing.Quintic.In, true).onComplete.addOnce(function(){
            this.perfect.alpha = 1;
            this.perfect.position.y = 9999;
        }.bind(this));
    },
    Drop:function(){
        // 퍼펙트 이면 x좌표를 정렬해주자.
        var _gap = this.nowTile.GetSprite().position.x - this.lastTileInfo.x;
        if(Math.abs(_gap) > this.PERFECT_GAP){
            this.nowTile.Drop(undefined);
        }else{
            this.nowTile.Drop(this.lastTileInfo.x);
        }
    },
    GetTiles:function(){
        return this.tiles;
    },
    // // 타일 출현 y값을 이전으로 돌린다. 다이아몬드타일 광고보고 리워드 연출때문에.
    Undo1StepEndYpos:function(){
        this.endYpos -= gTILE_HEIGHT;
    },
    GetUiPause:function(){
        return this.uiPause;
    },
    GetLastTile:function(){
        return this.lastTileInfo;
    },
    // 부활 시 연출 spine 위치 잡기 위해 사용
    GetLastYposResurrect:function(){
        return this.endYpos + this.main.position.y + gTILE_HEIGHT;
    },
    GetLastYpos:function(){
        return this.endYpos;
    },
    // 황금타일 당첨 리워드 보여주자
    ShowGoldReward:function(inx){
        MG.PlayAudio('special_tile_effect');
        this.gold_reward[inx].scale.setTo(0);
        this.gold_reward[inx].alpha = 1;
        this.gold_reward[inx].visible = true;
        MG.game.add.tween(this.gold_reward[inx].scale).to({x:1, y:1}, 300, Phaser.Easing.Linear.None, true);
        //MG.game.add.tween(this.gold_reward[inx].scale).to({x:2, y:2}, 300, Phaser.Easing.Linear.None, true, 700);
        MG.game.add.tween(this.gold_reward[inx]).to({alpha:0}, 400, Phaser.Easing.Linear.None, true, 750);
        if(inx > 1) MG.coinManager.GoldTileReward();    // 황금타일 코인 리워드 일때 코인 날아가는 연출
    },
    // 다이아타일 당첨 리워드 보여주자
    ShowDiaReward:function(){
        MG.PlayAudio('special_tile_effect');
        this.dia_reward.scale.setTo(0);
        this.dia_reward.alpha = 1;
        this.dia_reward.visible = true;
        MG.game.add.tween(this.dia_reward.scale).to({x:1, y:1}, 300, Phaser.Easing.Linear.None, true);
        MG.game.add.tween(this.dia_reward).to({alpha:0}, 400, Phaser.Easing.Linear.None, true, 750);
    },
    SetZoom:function(state, isSpawn){
        switch (state) {
            case "base":
                this.main.scale.setTo(1.5);
                this.main.position.setTo(-185, -550);
                break;
            case "lobby":       // 상점 확대 (로비모드)
                MG.game.add.tween(this.main.scale).to({x:1.5, y:1.5}, 600, Phaser.Easing.Quintic.In, true);
                MG.game.add.tween(this.main).to({x:-185, y:-550}, 600, Phaser.Easing.Quintic.In, true).onComplete.addOnce(function(){
                    if(isSpawn) this.Spawn();
                }.bind(this));
                break;

            case "game":        // 상점 정상 (게임모드)
                //MG.game.add.tween(this.adBoard.scale).to({y:1}, 300, Phaser.Easing.ElasticEx.Out, true, 650);       // 전광판 보이게
                MG.game.add.tween(this.main.scale).to({x:1, y:1}, 600, Phaser.Easing.Quintic.Out, true);
                MG.game.add.tween(this.main).to({x:0, y:0}, 600, Phaser.Easing.Quintic.Out, true).onComplete.addOnce(function(){
                   if(isSpawn) this.Spawn();
                }.bind(this));
                break;

            // case "superSkip":
            //     MG.game.add.tween(this.main.scale).to({x:1, y:1}, 600, Phaser.Easing.Quintic.Out, true);
            //     MG.game.add.tween(this.main).to({x:0, y:0}, 600, Phaser.Easing.Quintic.Out, true).onComplete.addOnce(function(){
            //         MG.playGameController.uiSuperSkip.Show();       // 슈퍼스킵 창 열기
            //         //if(isSpawn) this.Spawn();
            //     }.bind(this));
            //     break;
        }
    },
    Arrive:function(){

        // 도형 짤라야 하나?
        var _gap = this.nowTile.GetSprite().position.x - this.lastTileInfo.x;
        var _dir = _gap > 0 ? "right" : "left";
        var _tx = this.nowTile.GetArriveTexture();
        var _iterTile = this.iterTile - 1;      // 이전 iter로 해야 한다. (이미 ++ 했기 때문)
        if(_iterTile < 0) _iterTile = this.tiles.length - 1;

        // 기믹 배경 객체 처리
        for(var i=0; i<this.bgGimmick.length; ++i){
            if(this.bgGimmick[i].visible && ((this.bgGimmick[i].position.y - this.endYpos) >= 860))  this.bgGimmick[i].visible = false;
        }

        // today :
        // if(gDebug) {
        //     this.DropBackground();      // 맵 아래로 이동 (카메라 이동 효과)
        //     MG.playGameController.AddFloor();           // 층수 카운트 +
        //     MG.playGameController.AddPoint();           // 점수 카운트 +
        //     this.tiles[_iterTile].ArriveComplete(this.main, this.tiles[_iterTile].GetSprite().position.x, this.tiles[_iterTile].GetSprite().position.y, this.lastTileInfo.w, gTILE_HEIGHT, _tx, false, true);
        //     MG.playGameController.Arrive();
        //     return;
        // }

        // 게임 오버다.
        if(Math.abs(_gap) >= this.lastTileInfo.w || (this.lastTileInfo.w - Math.abs(_gap)) <= this.END_GAP) {
            MG.playGameController.SetInput(false);      // 터치 막자
            MG.game.add.tween(this.nowTile.GetSprite()).to({alpha:0}, 150, Phaser.Easing.Linear.None, true, 0);
            MG.game.add.tween(this.nowTile.GetSprite()).to({y:"+150"}, 150, Phaser.Easing.Linear.None, true, 0);
            MG.game.add.tween(this.nowTile.GetSprite()).to( { angle: -90 }, 170, Phaser.Easing.Linear.None, true, 0).onComplete.addOnce(function(){
                if(gTileSkin === 4 && gIsRevival === false){
                    this.UseRevival();
                }else{
                    this.nowTile.GetSprite().alpha = 1;
                    this.nowTile.GetSprite().angle = 0;
                    this.nowTile.GetSprite().visible = false;
                    ////////////// 게임오버 처리 ///////////////////////////////
                    MG.playGameController.GameOver();
                }

            }.bind(this));

            return;
        }

        MG.playGameController.AddFloor();           // 층수 카운트 +
        MG.playGameController.AddPoint();           // 점수 카운트 +

        if((MG.game.time.time - this.dropSoundPlayGap) >= 400 ){
            this.dropSoundPlayGap = MG.game.time.time;
            MG.PlayAudio('down' + gTileSkin);
        }

        if(_dir === "right") this.lastTileInfo.x = this.nowTile.GetSprite().position.x;
        //_dir === "right" ? this.lastTileInfo.x -= (Math.abs(_gap) * 0.5) : this.lastTileInfo.x += (Math.abs(_gap) * 0.5);
        this.lastTileInfo.y = this.nowTile.GetSprite().position.y;

        var _isPerfact = false;

        if(Math.abs(_gap) > this.PERFECT_GAP){

            // test : 210320 : 정렬이 잘 안되는듯하여 잠시 주석처리함
            // 정렬 문제 처리됨.
            // // 10 단위로 잘려야 해서 타일의 위치를 1 자릿수 반올림 처리해줌
            // this.nowTile.GetSprite().position.x = Math.round(this.nowTile.GetSprite().position.x);
            // this.nowTile.GetSprite().position.x = Math.round(this.nowTile.GetSprite().position.x/10) * 10;

            // 짤라야 한다.
            this.isPerfectBenefit = false;
            MG.PlayAudioDelay('cut' + gTileSkin, 300);
            MG.playGameController.ResetPerfectPoint();

            // if(gDebug) {
            //     this.lastTileInfo.w = BASE_TILE_WIDTH;
            // }else{
                this.lastTileInfo.w -= Math.abs(_gap);
            // }

            // 액션 타일 width & 위치 조정
            this.tiles[_iterTile].ArriveComplete(this.main, _dir, Math.abs(_gap), this.lastTileInfo.x, this.lastTileInfo.y, this.lastTileInfo.w, gTILE_HEIGHT, _tx, true, true);

            // 슬라이스 타일 만들기
            this.sliceTile.visible = true;
            this.sliceTile.alpha = 1;
            this.sliceTile.angle = 0;
            this.main.bringToTop(this.sliceTile);
            this.sliceTile.loadTexture('UI_map', _tx);
            this.sliceTile.texture.crop.width = Math.abs(_gap);

            if(_dir === "right"){
                this.sliceTile.position.setTo(this.tiles[_iterTile].GetSprite().position.x + this.tiles[_iterTile].GetWidth(), this.lastTileInfo.y);
                this.sliceTile.anchor.setTo(0, 0.5);
                // 슬라이스 타일 떨구기
                MG.game.add.tween(this.sliceTile).to({alpha:0}, 250, Phaser.Easing.Linear.None, true, 0);
                MG.game.add.tween(this.sliceTile).to({y:"+150"}, 250, Phaser.Easing.Linear.None, true, 0);
                MG.game.add.tween(this.sliceTile).to( { angle: 90 }, 270, Phaser.Easing.Linear.None, true, 0);
            } else {
                this.sliceTile.position.setTo(this.tiles[_iterTile].GetSprite().position.x, this.lastTileInfo.y);
                this.sliceTile.anchor.setTo((Math.abs(_gap) / BASE_TILE_WIDTH), 0.5);
                // 슬라이스 타일 떨구기
                MG.game.add.tween(this.sliceTile).to({alpha:0}, 250, Phaser.Easing.Linear.None, true, 0);
                MG.game.add.tween(this.sliceTile).to({y:"+150"}, 250, Phaser.Easing.Linear.None, true, 0);
                MG.game.add.tween(this.sliceTile).to( { angle: -90 }, 270, Phaser.Easing.Linear.None, true, 0);
            }
        } else {
            // (퍼펙트) 안짤라도 된다. 퍼펙트 점수 더 주자.
            _isPerfact = true;

            // 도형 사이즈업
            var _sizeUp = 0;
            var _x = 0;

            // 도형의 크기, 위치 조절 (min ~ max 사이에 있어야 한다)
            if(this.isPerfectBenefit){
                this.isPerfectBenefit = false;
                _sizeUp = Math.round(this.lastTileInfo.w + COMBO_SIZEUP);

                if(_sizeUp >= BASE_TILE_WIDTH){
                    console.log("::::::: 퍼펙트 사이즈업이지만 이미 다 커서 더 못큰다. :::::::");
                    this.lastTileInfo.w = BASE_TILE_WIDTH;
                    this.lastTileInfo.x = MG.game.world.centerX - (this.lastTileInfo.w * 0.5);
                } else {
                    console.log("::::::: 퍼펙트 사이즈업 키워주자 :::::::");
                    var _min = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) - (Math.round(_sizeUp * 0.5)));
                    var _max = Math.round((this.lastTileInfo.x + (this.lastTileInfo.w * 0.5)) + (Math.round(_sizeUp * 0.5)));

                    if(_min < this.tileAreaMin){        // 우측으로 자란다.
                        //_sizeUp -= Math.round(this.tileAreaMin - _min);
                        this.lastTileInfo.w = _sizeUp;
                        this.lastTileInfo.x = this.tileAreaMin;//Math.round(this.tileAreaMin + (Math.round(this.lastTileInfo.w)));
                    } else if(_max > this.tileAreaMax){     // 좌측으로 자란다.
                        //_sizeUp -= Math.round(_max - this.tileAreaMax);
                        this.lastTileInfo.w = _sizeUp;
                        this.lastTileInfo.x = Math.round(this.tileAreaMax - (Math.round(this.lastTileInfo.w)));
                    } else {
                        this.lastTileInfo.w = _sizeUp;
                        this.lastTileInfo.x -= (COMBO_SIZEUP * 0.5);
                    }
                }
            }

            // 특수타일일때는 'perfect' 효과 안보이도록
            if(MG.specialTileManager.getCurrentTileState() === 'normal' && this.nowTile.IsSpecial() === false) this.PerfectEffect();


            this.tiles[_iterTile].ArriveComplete(this.main, _dir, Math.abs(_gap), this.lastTileInfo.x, this.tiles[_iterTile].GetSprite().position.y, this.lastTileInfo.w, gTILE_HEIGHT, _tx, false, true);
            // this.tiles[_iterTile].ArriveComplete(this.main, this.tiles[_iterTile].GetSprite().position.x, this.tiles[_iterTile].GetSprite().position.y, this.lastTileInfo.w, gTILE_HEIGHT, _tx, false);
            MG.playGameController.AddPerfectPoint();
            //this.lastTileInfo.x = this.nowTile.GetSprite().position.x;
            this.lastTileInfo.w = this.nowTile.GetWidth();
        }


        this.DropBackground();      // 맵 아래로 이동 (카메라 이동 효과)

        // 황금타일일때 퍼펙트 했따.
        if(_isPerfact && MG.specialTileManager.getCurrentTileState() === "gold"){
            MG.playGameController.Arrive("goldReward");
        }else{
            MG.playGameController.Arrive();
        }

    },
    // 무효권 사용 (부활)
    UseRevival:function(){
        MG.uiGame.GetNowTile().InitNormal();
        gIsRevival = true;
        MG.game.add.tween(this.nowTile.GetSprite()).to({alpha:1}, 300, Phaser.Easing.Linear.None, true, 0);

        // 우상단 idle 상태의 스파인 위치를 타일과 동일하게
        MG.game.add.tween(this.spRevival).to({x:this.nowTile.GetSprite().x, y:MG.uiGame.GetLastYposResurrect() + gTILE_HEIGHT + 75}, 500, Phaser.Easing.Quintic.Out, true, 0).onComplete.addOnce(function(){
            // Resurrection 애니메이션 시작
            this.spRevival.setAnimationByName(0, "Resurrection", false);
            this.spRevival.onEvent.addOnce(function (i,e) {
                // 이벤트 지점에서 블럭 되살아나기
                MG.PlayAudio('revival');
                MG.game.add.tween(this.nowTile.GetSprite()).to( { angle: 0 }, 500, Phaser.Easing.Linear.None, true, 0);
                MG.game.add.tween(this.nowTile.GetSprite()).to({x:(this.lastTileInfo.w * 0.5), y:this.endYpos}, 660, Phaser.Easing.Quintic.Out, true, 0).onComplete.addOnce(function(){
                    this.nowTile.MoveX("right");
                    MG.playGameController.SetInput(true);
                }.bind(this));
            }.bind(this));
            this.spRevival.onComplete.addOnce(function (trackIndex, count) {
                switch (trackIndex) {
                    case 0:
                        this.spRevival.visible = false;
                        this.spRevival.timeScale = 0;
                        break;
                }
            }, this);
        }.bind(this));
    },
    DropBackground:function(){
        // 맵 아래로 이동 (카메라 이동 효과)
        if(this.endYpos < 500) {
            // console.log(":::::: this.endYpos = " + this.endYpos);
            // console.log(":::::: this.main.position.y = " + this.main.position.y);
            var _dis = (500 - this.main.position.y) - this.endYpos;
            MG.game.add.tween(this.main).to({y:"+" + _dis.toString()}, MG.playGameController.GetMapDownSpeed(), Phaser.Easing.Linear.None, true, 0);
            MG.game.add.tween(this.bg1).to({y:"-" + Math.round(_dis * 0.905).toString()}, MG.playGameController.GetMapDownSpeed(), Phaser.Easing.Linear.None, true, 0);
            MG.game.add.tween(this.hotAirBalloon).to({y:"-" + Math.round(_dis * 0.905).toString()}, MG.playGameController.GetMapDownSpeed(), Phaser.Easing.Linear.None, true, 0);
            MG.game.add.tween(this.cloud[0]).to({y:"-" + Math.round(_dis * 0.905).toString()}, MG.playGameController.GetMapDownSpeed(), Phaser.Easing.Linear.None, true, 0);
            MG.game.add.tween(this.cloud[1]).to({y:"-" + Math.round(_dis * 0.905).toString()}, MG.playGameController.GetMapDownSpeed(), Phaser.Easing.Linear.None, true, 0);
            MG.game.add.tween(this.cloud[2]).to({y:"-" + Math.round(_dis * 0.905).toString()}, MG.playGameController.GetMapDownSpeed(), Phaser.Easing.Linear.None, true, 0);
            for(var i=0; i<this.bgGimmick.length; ++i){
                if(this.bgGimmick[i].visible) MG.game.add.tween(this.bgGimmick[i]).to({y:"-" + Math.round(_dis * 0.905).toString()}, MG.playGameController.GetMapDownSpeed(), Phaser.Easing.Linear.None, true, 0);
            }
        }
    },
    MoveCoinBar:function(action){
        if(action === "in" && this.isSpawnCoinBar) return;
        switch (action) {
            case "in":
                this.isSpawnCoinBar = true;
                this.coinBarEvent = MG.game.add.tween(this.coinBg).to({x:this.coinBarXpos}, 100, Phaser.Easing.Linear.None, true, 0);
                break;

            case "out":
                this.coinBarEvent = MG.game.add.tween(this.coinBg).to({x:this.coinBarXpos * 3}, 100, Phaser.Easing.Linear.None, true, 0);
                this.coinBarEvent.onComplete.addOnce(function(){
                    this.isSpawnCoinBar = false;
                }.bind(this));
                break;
        }
    },
    IsSpawnCoinBar:function(){
        return this.isSpawnCoinBar;
    }
};
'use strict';

function UI_Lobby(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.isOver = false;
    this.timer = 0;
    this.timerEvent = null;
    // this.uiOption = new UI_Option(MG.gPopup);     // 옵션창
    this.uiTutorial = new UI_Tutorial(MG.gPopup); // 게임방법창
    this.uiMap = new UI_Map(MG.gPopup);           // 맵창

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Lobby_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 2);

    this.xPos = 0;
    if(MSSDK.getBackButton() == true) {
        this.xPos = 130;
    }else{
        this.xPos = 50;
    }

    // 아이폰용 나가기 버튼
    if(MSSDK.getBackButton() == true) {
        this.btnIosExit = MG.AddSpriteButtonScale(this.main, 50, 50, "UI_0", "Btn_IphonExit.png");
        this.btnIosExit.events.onInputUp.add(function () {
            if(this.isOver) {
                this.isOver = false;
                return;
            }

            MSSDK.gameExit(true);
        }, this);
    }

    // 사운드 on / off 버튼      parent, x, y, atlas, imgName, sound, scale, color, alpha, ax, ay, width, height
    this.btnSoundOn = MG.AddSpriteButtonScale(this.main, this.xPos, 50, "UI_0", "Lobby_Icon_Sound_On.png");
    this.btnSoundOn.visible = kData.isAudio;
    this.btnSoundOn.y = -5000;//게임스낵예외처리
    this.btnSoundOn.alpha = 0;//게임스낵예외처리
    this.btnSoundOn.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        //return; //게임스낵 오디오 못 건드리게 막기
        
        kData.isAudio = !kData.isAudio;

        if(kData.isAudio){
            //kData.isAudio = true;
            this.btnSoundOn.visible = true;
            this.btnSoundOff.visible = false;
            MG.PlayBgm('lobby_bgm', true);
            MG.SetBgmVolume('lobby_bgm', 0.5);
            console.log('MG.PlayBgm(lobby_bgm, true);');
        }else{
            this.btnSoundOn.visible = false;
            this.btnSoundOff.visible = true;
            //kData.isAudio = false;
            MG.StopBgm('lobby_bgm');
            console.log('MG.StopBgm(lobby_bgm);');
        }

        MG.NM.LocalSave();
    }, this);
    this.btnSoundOn.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnSoundOn.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.btnSoundOff = MG.AddSpriteButtonScale(this.main, this.xPos, 50, "UI_0", "Lobby_Icon_Sound_Off.png");
    this.btnSoundOff.visible = !kData.isAudio;
    this.btnSoundOff.y = -5000;//게임스낵예외처리
    this.btnSoundOff.alpha = 0;//게임스낵예외처리
    this.btnSoundOff.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        
        //return; //게임스낵 오디오 못 건드리게 막기
        
        kData.isAudio = !kData.isAudio;

        if(kData.isAudio){
            //kData.isAudio = true;
            this.btnSoundOn.visible = true;
            this.btnSoundOff.visible = false;
            MG.PlayBgm('lobby_bgm', true);
            MG.SetBgmVolume('lobby_bgm', 0.5);
            console.log('MG.PlayBgm(lobby_bgm), true)');
        }else{
            this.btnSoundOn.visible = false;
            this.btnSoundOff.visible = true;
            //kData.isAudio = false;
            MG.StopBgm('lobby_bgm');
            console.log('MG.StopBgm(lobby_bgm)');

        }
        MG.NM.LocalSave();
    }, this);
    this.btnSoundOff.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnSoundOff.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);

    // 튜토리얼 버튼 ///////////////////////////////////////////////////////////////////
    this.btnTutorial = MG.AddSpriteButton(this.main, this.xPos + 96, 50, 'UI_0', 'Lobby_Icon_Help.png');
    this.btnTutorial.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        // Test...Blooming
        // this.uiDiamondReward = new UI_DiaRewardPopup(MG.gPopup);     // 다이아몬드타일 리워드 창
        // this.uiDiamondReward.Show();
        this.uiTutorial.Show();
    }, this);
    this.btnTutorial.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnTutorial.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);

    // 타이틀
    this.title = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.world.centerY - 278, 'UI_0', 'Lobby_Title.png');

    // setTimeout(function(){
    //     this.title.texture.crop.width = 200;
    // }.bind(this), 2000);
    //
    // setTimeout(function(){
    //     this.title.loadTexture('UI_map', 'floor2-2.png');
    // }.bind(this), 4000);
    //
    // setTimeout(function(){
    //     this.title.width = 200;
    // }.bind(this), 6000);
    //
    // setTimeout(function(){
    //     this.title.loadTexture('UI_map', 'gold_tile.png');
    // }.bind(this), 8000);
    //
    // setTimeout(function(){
    //
    // }.bind(this), 10000);



    // 게임 시작 버튼 ////////////////////////////////////////////////////////////////////
    // this.txtStart = MG.AddText(this.main, MG.game.world.centerX, MG.game.world.centerY + 30, 'START', {font:"50px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.btnStart = MG.AddSpriteNineButtonScale(this.main, MG.game.world.centerX, MG.game.world.centerY + 20, "UI_0", "Lobby_Btn_Start.png", 480, 100, {top:0, bottom:0, left:50, right:50});
    this.btnStart.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        console.log('btnStart01');
        MG.playGameController.uiSuperSkip.Show();       // 슈퍼스킵 창 열기
        //this.Hide();
    }, this);
    this.txtStart = MG.AddText(this.btnStart, 0, 5, '', {font:"53px " + gFontFace, fill:"#ffffff", fontWeight: "normal"});
    // if(gIsMyanmar || gIsBengal) this.txtStart.lineSpacing = 10;
    this.txtStart.ReSize(MG.LM.Get('btn_start'), 460);

    // 'FREE COIN' 버튼 ///////////////////////////////////////////////////////////////////
    // this.btnShop = MG.AddSpriteButton(this.main, MG.game.world.centerX - 220, MG.game.height - 110, 'UI_0', 'Lobby_Icon_Shop.png');
    this.btnShop = MG.AddSpriteButton(this.main, MG.game.world.centerX - 140, MG.game.height - 144, 'UI_0', 'Lobby_Icon_Shop.png');
    this.btnShop.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        MG.uiShop.Show();
    }, this);
    this.txtShop = MG.AddText(this.btnShop, 0, 45, '', {font:"25px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal"});
    this.txtShop.ReSize(MG.LM.Get('pop_shop'), 195);
    this.btnShopDisable = MG.AddSpriteButton(this.btnShop, 0, 0, 'UI_0', 'Lobby_Icon_Shop_Disable.png');
    this.btnShopDisable.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        MG.uiShop.Show();
    }, this);
    this.btnShopDisable.visible = false;
    this.txtTimer = MG.AddText(this.btnShop, -60, -50, '04:10', {font:"20px " + gFontFace, fill:"#FFFC00", fontWeight: "normal"});

    // 'TOWER' 버튼 ///////////////////////////////////////////////////////////////////
    // this.btnMap = MG.AddSpriteButton(this.main, MG.game.world.centerX, MG.game.height - 110, 'UI_0', 'Lobby_Icon_Map.png');
    this.btnMap = MG.AddSpriteButton(this.main, MG.game.world.centerX + 140, MG.game.height - 144, 'UI_0', 'Lobby_Icon_Tower.png');
    this.btnMap.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        this.uiMap.Show();
    }, this);
    this.btnMap.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnMap.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.txtMap = MG.AddText(this.btnMap, 0, 45, '', {font:"25px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal"});
    // if(gIsMyanmar || gIsBengal) this.txtMap.lineSpacing = 10;
    this.txtMap.ReSize(MG.LM.Get('pop_map'), 195);

    // 버전 표시
    MG.AddText(this.main, 5, MG.game.height - 5, Define.txtVer, {font:"12px " + gFontFace, fill:"#FFFFFF", align:"left"/*, stroke:"#202251", strokeThickness:6*/}, 0, 1);
    var urlParams = Game.prototype.getUrlParams();
    if(urlParams.lang !== "en") MG.AddSprite(this.main, MG.game.width - 74, 85,  'grade');      // 등급 표시
    //게임스낵 MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height - 20,  'copyright');      // 저작권 표시

    // // 랭킹 버튼
    // this.btnRanking = MG.AddSpriteButton(this.main, MG.game.world.centerX + 220, MG.game.height - 110, 'UI_0', 'Lobby_Icon_Ranking.png');
    // this.btnRanking.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.uiRanking.Show();
    // }, this);
    // this.btnRanking.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    // this.btnRanking.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.txtRanking = MG.AddText(this.btnRanking, 0, 50, '', {font:"33px " + gFontFace, fill:"#656ba5", fontWeight: 600});
    // if(gIsMyanmar || gIsBengal) this.txtRanking.lineSpacing = 10;
    // this.txtRanking.ReSize(MG.LM.Get('pop_rank'), 195);

    // // 랭킹을 안보여주는 법인인 경우 처리 ///////////////////////////
    // if(gIsViewReaderBoard === 1 || gIsViewReaderBoard === "1") {
    //     this.btnShop.position.setTo(MG.game.world.centerX - 120, MG.game.height - 110);
    //     this.btnMap.position.setTo(MG.game.world.centerX + 120, MG.game.height - 110);
    //     this.btnRanking.visible = false;
    // }

    this.main.visible = false;
}

UI_Lobby.prototype = {
    Show:function(){
        //if(gIsStandAlone){
        //     this.txtBestScore.text = kData.bs;
        //     this.txtCoinCount.text = kData.cc;


            //this.btnSoundOn.visible = kData.isAudio;//게임스낵예외처리
            //this.btnSoundOff.visible = !kData.isAudio;//게임스낵예외처리
        MG.uiGame.SetRevivalIcon(false);
        this.StartTimer();

        //gLobbyData = {br:1, brt:50, bs:10000, cc:0, mf:0, pt:1, rv:0, tf:0};
            MG.playGameController.TileSkinRefresh(function(){
                this.main.visible = true;
                //MG.uiIntro.Hide();
                //MG.game.add.tween(this.spTitle).to({alpha:0}, 400, Phaser.Easing.Linear.None, true, 100);
            }.bind(this));

            if(MG.playGameController.uiSuperSkip.IsShow()){
                if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(false);
            }else{
                if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(true);
            }

            if(kData.istut === false) {
                kData.istut = true;
                MG.NM.LocalSave();
                this.uiTutorial.Show();

            }
        //}else{
            // MG.NM.LoadingLobbyData(true, function (data) {
            //     gLobbyData = data;
            //     gTileSkin = gLobbyData.pt;      // 현재 타일
            //     this.UpdateLobbyData();
            //     MG.uiGame.UpdateBestScore(gLobbyData.bs);       // 게임 안의 최고 점수 UI 업데이트 해준다.
            //     MG.playGameController.TileSkinRefresh(function(){
            //         this.main.visible = true;
            //         MG.uiIntro.Hide();
            //         //MG.game.add.tween(this.spTitle).to({alpha:0}, 400, Phaser.Easing.Linear.None, true, 100);
            //         // 동의 절차
            //         // 해당법인의 T&C 적용 유무 : 0 적용   1 비적용
            //         // 회원개인의 T&C 동의 유무 : 0 동의전  1 동의완료
            //         if(/*gIsOpenLobbyTnC &&*/ localStorage.getItem("TnC") !== "yes") {
            //         // if(gIsOpenLobbyTnC && gLobbyData.tf === 0 && gLobbyData.mf === 0) {
            //             this.OpenSSO();
            //         } else {
            //             //gIsOpenLobbyTnC = false;
            //         }
            //     }.bind(this));
            // }.bind(this));
        //}
    },
    Hide:function(){
        this.main.visible = false;
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(false);
        MG.game.time.events.remove(this.timerEvent);
    },
    // OpenSSO:function(){
    //     //gIsOpenLobbyTnC = false;        // 로비에서 TnC창 안뜨게 하려면 false
    //     this.uiSSO.Show();
    // },
    IsShow:function(){
        return this.main.visible;
    },
    UpdateLobbyData:function(){
        // this.txtBestScore.text = InsertComma(kData.bs);
        // this.txtCoinCount.text = InsertComma(kData.cc);
    },
    GetMapInstance:function(){
        return this.uiMap;
    },
    StartTimer:function(){
        MG.game.time.events.remove(this.timerEvent);

        var _gap = (MG.game.time.time - kData.st0) / 1000;
        var _t = parseInt(COIN_COOLTIME - _gap);
        var _f = {"m": null, "s": null};

        if(_t > 0){
            this.btnShopDisable.visible = true;
            this.txtTimer.visible = true;
            _f = CreateTimeFormat(_t);
            this.timer = _t;
            this.txtTimer.text = _f.m + ":" + _f.s;
            this.timerEvent = MG.game.time.events.loop(Phaser.Timer.SECOND, this.CheckTimer, this);
        }else{
            this.btnShopDisable.visible = false;
            this.txtTimer.visible = false;
        }
    },
    CheckTimer:function(){
        this.timer -= 1;
        if(this.timer <= 0){
            // 쿨타임 종료
            MG.game.time.events.remove(this.timerEvent);
            this.txtTimer.visible = false;
            this.btnShopDisable.visible = false;
        }else{
            var _f = {"m":null, "s":null};
            _f = CreateTimeFormat(this.timer);
            this.txtTimer.text = _f.m + ":" + _f.s;
        }
    },
};
'use strict';

function UI_GameOver(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.isOver = false;
    // this.isSuccessSendData = false;
    // this.sendCount = 0;
    this.sendEvent = [null, null];      // 게임데이터 서버에 저장 요청을 3번 시도 한다. 성공 시 뒤의 이벤트들은 모두 삭제해준다.
    this.bestTween = null;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {
    }, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 468, 447, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -350, "UI_0", "Popup_Gameover_Point_Frame.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -118.5, 'UI_0', 'Popup_Gameover_Line_Top.png');
    // this.line.anchor.setTo(0.5, 0);
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    this.txtTitle.ReSize(MG.LM.Get('gameover01'), 270);
    // // 닫기 버튼
    // this.btnExit = MG.AddSpriteButton(this.bg, 185, -175, "UI_0", "Btn_Popup_Exit.png");
    // this.btnExit.events.onInputUp.add(function () {
    //     MG.playGameController.GotoLobby();
    //     this.Hide();
    // }, this);
    //
    // 베스트스코어
    this.txtBestScore = MG.AddText(this.bg, 0, -77, '0', {font:"24px " + gFontFace, fill:"#798499"/*, stroke:"#202251", strokeThickness:6*/});
    // 베스트스코어 왕관 아이콘
    this.bestScoreCrown = MG.AddSprite(this.txtBestScore, 0, -6, "UI_0", "Game_Icon_Highscore.png");// 스코어 bg

    this.scoreBg = MG.AddSpriteNine(this.bg, 0, -3, "UI_0", "Popup_Gameover_Point_Frame.png", 388, 100, {top:0, bottom:0, left:50, right:50});
    // 스코어 text 부모
    this.scoreParent= MG.AddSprite(this.scoreBg, 0, 0, "UI_0", "blank_dot.png");
    // 스코어
    this.txtScore = MG.AddText(this.scoreBg, 0, 3, '0', {font:"50px " + gFontFace, fill:"#FFFFFF"/*, stroke:"#202251", strokeThickness:6*/});
    // // 최고기록 아이콘
    // this.highScoreIcon = MG.AddSprite(this.scoreBg, 240, -60, "UI_0", "Popup_BuyTower_CoinFrame.png");
    // this.highScoreIcon.angle = 25;
    // this.txtHighScoreIcon = MG.AddText(this.highScoreIcon, 0, -10, '', {font:"20px " + gFontFace, fill:"#FFFFFF", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // this.txtHighScoreIcon.ReSize(MG.LM.Get('rank_best'), 80);
    // this.highScoreIcon.visible = false;

    // 다시하기 버튼
    // this.btnReStartBg = MG.AddSpriteButtonScale(this.bg, 105, 180, "UI_0", "Icon_Popup_Home.png");
    // this.btnReStartBg.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     MG.playGameController.GameRestart();
    //     this.Hide();
    // }, this);
    // this.btnReStartBg.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnReStartBg.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);

    // 다시 시작 버튼 /////////////
    this.btnReStart = MG.AddSpriteButtonScale(this.bg, 84, 133.5, "UI_0", "Icon_Popup_Restart.png");
    this.btnReStart.events.onInputUp.add(function () {
        console.log('btnReStart01');
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        MG.playGameController.GameRestart();
        this.Hide();
    }, this);
    this.btnReStart.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnReStart.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);

    // 로비로 이동 버튼 ///////////////
    // this.btnLobbyBg = MG.AddSpriteNineButtonScale(this.bg, -105, 180, "UI_0", "Btn_Popup_Icon_Blue.png", 190, 166, {top:0, bottom:0, left:26, right:26});
    // this.btnLobbyBg.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     MG.playGameController.GotoLobby();
    //     this.Hide();
    // }, this);
    // this.btnLobbyBg.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnLobbyBg.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    this.btnGotoLobby = MG.AddSpriteButtonScale(this.bg, -84, 133.5, "UI_0", "Icon_Popup_Home.png");
    this.btnGotoLobby.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        MG.playGameController.GotoLobby();
        this.Hide();
    }, this);
    this.btnGotoLobby.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnGotoLobby.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);

    // 최고기록 효과
    this.spBestScore = MG.game.add.spine(MG.game.world.centerX, MG.game.world.centerY, 'spBestScore');
    this.spBestScore.visible = false;
    this.spBestScore.timeScale = 0;

    this.main.visible = false;
}

UI_GameOver.prototype = {
    ShowReady:function(){
        MG.StopBgm('game_bgm');

        // 일반광고 시청 유무
        if((++Define.iADCnt%3)==1 || ((new Date().getTime() - Define.iTimeStemp) >= 120000)){
            Define.iTimeStemp = new Date().getTime();
            gRewardName = "basic";

            ShowAD("basic", "result", function () {
                this.ShowAD();
            }.bind(this), function () {
                this.Show();
            }.bind(this));
        }else{
            this.Show();
        }
    },
    ShowAD:function(){
        gRewardName = "";
        this.Show();
    },
    Show:function(){
        MG.PlayAudio('gameOver');
        this.SendGameData();
        this.bestScoreCrown.position.x = -(this.txtBestScore.width * 0.5) - 15;
    },
    Hide:function(){
        MG.StopAudio('gameOver');
        //this.isSuccessSendData = false;
        //this.sendCount = 0;
        // this.highScoreIcon.visible = false;
        // this.highScoreIcon.scale.set(0.01);
        clearTimeout(this.sendEvent[0]);
        clearTimeout(this.sendEvent[1]);
        if(this.bestTween !== null) this.bestTween.pause();
        this.spBestScore.visible = false;
        this.spBestScore.timeScale = 0;
        this.main.visible = false;
    },
    SendGameData:function(){

        //if(gPlayData.score > kData.bs) kData.bs = gPlayData.score;
        this.txtScore.ReSize(InsertComma(gPlayData.score), 320);//this.txtScore.text = InsertComma(gPlayData.score);

        if(gPlayData.score > kData.bs){
            // 신기록 세웠다
            this.txtBestScore.text = InsertComma(kData.bs);
            // this.highScoreIcon.visible = true;
            // this.highScoreIcon.scale.set(0.01);
            if(this.bestTween === null){
                this.bestTween = MG.game.add.tween(this.scoreParent.scale).to({x:1.3, y:1.3}, 350, Phaser.Easing.ElasticEx.Out, true);
                this.bestTween.yoyo(true, 150);
                this.bestTween.loop(true);
            }else{
                this.bestTween.resume();
            }
            kData.bs = gPlayData.score;
            MG.uiGame.UpdateBestScore(kData.bs);
        }else{
            this.scoreParent.scale.set(1);
            // this.highScoreIcon.visible = false;
            MG.uiGame.UpdateBestScore(kData.bs);
        }

        this.txtBestScore.text = InsertComma(kData.bs);
        this.bg.scale.set(0.1);
        this.main.visible = true;

        if(gPlayData.floor_count > kData.bf) kData.bf = gPlayData.floor_count;
        kData.cc += gPlayData.get_coin;

        MG.NM.LocalSave();

        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true).onComplete.addOnce(
            function() {
                if(gPlayData.score === kData.bs) {
                    // 신기록 세웠다 (위의 등호가 같은건 gPlayData.score가 이미 업데이트가 되어 버렸기 때문이다.)
                    // this.highScoreIcon.visible = true;
                    // MG.game.add.tween(this.highScoreIcon.scale).to({x:1, y:1}, 350, Phaser.Easing.Bounce.Out, true);
                    this.spBestScore.visible = true;
                    this.spBestScore.timeScale = 1;
                    this.spBestScore.setAnimationByName(0, "BestScore", true);
                    // this.spBestScore.onComplete.addOnce(function (trackIndex, count) {
                    //     switch (trackIndex) {
                    //         case 0:
                    //             this.spBestScore.visible = false;
                    //             this.spBestScore.timeScale = 0;
                    //             break;
                    //     }
                    // }, this);
                }
            }.bind(this));






        // 핫쉐어 랭킹에 점수 보내기
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.regRanking(gPlayData.score, function () {
            setTimeout(function () {
                console.log("::::::::::::::::::::::::::::: 랭킹 저장 :::::::::::::::::::::::::::::::::");
                //this.regRankView = false;
            }.bind(this),200);
        }.bind(this));

        //
        // //this.sendCount++;
        //
        // // MG.NM.SaveGamePlay( function () {
        //     console.log("::::::::: 게임데이터 전송 성공 ::::::::::");
        //     //this.isSuccessSendData = true;
        //     this.txtScore.text = InsertComma(gPlayData.score);
        //     if(gPlayData.score > gLobbyData.bs){
        //         // 신기록 세웠다
        //         this.txtBestScore.text = InsertComma(gPlayData.score);
        //         this.highScoreIcon.visible = true;
        //         this.highScoreIcon.scale.set(0.01);
        //         if(this.bestTween === null){
        //             this.bestTween = MG.game.add.tween(this.scoreParent.scale).to({x:1.3, y:1.3}, 350, Phaser.Easing.ElasticEx.Out, true);
        //             this.bestTween.yoyo(true, 150)
        //             this.bestTween.loop(true);
        //         }else{
        //             this.bestTween.resume();
        //         }
        //         gLobbyData.bs = gPlayData.score;
        //         MG.uiGame.UpdateBestScore(gLobbyData.bs);
        //     }else{
        //         this.scoreParent.scale.set(1);
        //         this.highScoreIcon.visible = false;
        //         MG.uiGame.UpdateBestScore(gLobbyData.bs);
        //     }
        //     this.txtBestScore.text = InsertComma(gLobbyData.bs);
        //     this.bg.scale.set(0.1);
        //     this.main.visible = true;
        //     if(gLobbyData.bf < gPlayData.floor_count) gLobbyData.bf = gPlayData.floor_count;
        //     MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true).onComplete.addOnce(
        //         function() {
        //             if(gPlayData.score === gLobbyData.bs) {
        //                 // 신기록 세웠다 (위의 등호가 같은건 gPlayData.score가 이미 업데이트가 되어 버렸기 때문이다.)
        //                 this.highScoreIcon.visible = true;
        //                 MG.game.add.tween(this.highScoreIcon.scale).to({x:1, y:1}, 350, Phaser.Easing.Bounce.Out, true);
        //                 this.spBestScore.visible = true;
        //                 this.spBestScore.timeScale = 1;
        //                 this.spBestScore.setAnimationByName(0, "EFX_Star", false);
        //                 this.spBestScore.onComplete.add(function (trackIndex, count) {
        //                     switch (trackIndex) {
        //                         case 0:
        //                             this.spBestScore.visible = false;
        //                             this.spBestScore.timeScale = 0;
        //                             break;
        //                     }
        //                 }, this);
        //             }
        //         }.bind(this));
        // }.bind(this));



        // if(this.isSuccessSendData || ++this.sendCount > 3) {
        //     // 데이터 전송 성공, 결과창 오픈
        //
        // }else{
        //     // 데이터 전송 시도, 3번까지 전송 시도
        //     MG.NM.SaveGamePlay( function () {
        //         this.isSuccessSendData = true;
        //         this.txtScore.text = InsertComma(MG.playGameController.GetScore());
        //         this.bg.scale.set(0.1);
        //         this.main.visible = true;
        //         MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
        //     }.bind(this));
        // }
    }
};
'use strict';

function UI_Pause(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.isOver = false;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {
        this.Hide();
        MG.ResumeBgm("game_bgm");
        MG.playGameController.Resume();
    }, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 408, 384, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -285, "UI_0", "Frame_Popup_Title_Blue.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -87, 'UI_0', 'Popup_Pause_Line_Top.png');
    // this.line.anchor.setTo(0.5, 0);
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    this.txtTitle.ReSize(MG.LM.Get('pop_pause'), 270);


    // // 닫기 버튼 (게임 이어진행)
    // this.btnLobby = MG.AddSpriteButton(this.bg, 219, -210, "UI_0", "Btn_Popup_Exit.png");
    // this.btnLobby.events.onInputDown.add(function () {
    //     this.Hide();
    //     MG.ResumeBgm("game_bgm");
    //     MG.playGameController.Resume();
    // }, this);

    // 사운드 on / off 버튼      parent, x, y, atlas, imgName, sound, scale, color, alpha, ax, ay, width, height
    this.btnSoundOn = MG.AddSpriteButtonScale(this.bg, -84, -6, "UI_0", "Icon_Popup_Sound_On.png");
    this.btnSoundOn.visible = kData.isAudio;
    this.btnSoundOn.y = -5000;//게임스낵예외처리
    this.btnSoundOn.alpha = 0;//게임스낵예외처리
    this.btnSoundOn.events.onInputUp.add(function () {
        if(!arguments[2]) return;

        //return; //게임스낵 오디오 못 건드리게 막기
        
        if(this.btnSoundOn.visible){
            this.btnSoundOn.visible = false;
            this.btnSoundOff.visible = true;
            kData.isAudio = false;
            MG.StopBgm('game_bgm');
            console.log('MG.StopBgm(game_bgm)');
        }else{
            kData.isAudio = true;
            this.btnSoundOn.visible = true;
            this.btnSoundOff.visible = false;
            MG.PlayBgm('game_bgm', true);
            MG.SetBgmVolume('game_bgm', 0.5);
            console.log(' MG.PlayBgm(game_bgm, true);');
        }
        MG.NM.LocalSave();
    }, this);
    this.btnSoundOff = MG.AddSpriteButtonScale(this.bg, -84, -6, "UI_0", "Icon_Popup_Sound_Off.png");
    this.btnSoundOff.visible = !kData.isAudio;
    this.btnSoundOff.y = -5000;//게임스낵예외처리
    this.btnSoundOff.alpha = 0;//게임스낵예외처리
    this.btnSoundOff.events.onInputUp.add(function () {
        if(!arguments[2]) return;

        //return; //게임스낵 오디오 못 건드리게 막기
        
        if(this.btnSoundOn.visible){
            this.btnSoundOn.visible = false;
            this.btnSoundOff.visible = true;
            kData.isAudio = false;
            MG.StopBgm('game_bgm');
            console.log('MG.StopBgm(game_bgm);');
        }else{
            kData.isAudio = true;
            this.btnSoundOn.visible = true;
            this.btnSoundOff.visible = false;
            MG.PlayBgm('game_bgm', true);
            MG.SetBgmVolume('game_bgm', 0.5);
            console.log('MG.PlayBgm(game_bgm, true);');
        }
        MG.NM.LocalSave();
    }, this);

    // 로비로 이동 버튼
    // this.btnLobbyBg = MG.AddSpriteNineButtonScale(this.bg, 105, -95, "UI_0", "Btn_Popup_Icon_Blue.png", 190, 166, {top:0, bottom:0, left:26, right:26});
    // this.btnLobbyBg.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     MG.coinManager.Init();
    //     MG.playGameController.GotoLobby();
    //     MG.StopBgm('game_bgm');
    //     this.Hide();
    // }, this);
    // this.btnLobbyBg.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnLobbyBg.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    this.btnLobby = MG.AddSpriteButtonScale(this.bg, 84-84, -6, "UI_0", "Icon_Popup_Home.png");//게임스낵예외처리

    this.btnLobby.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        MG.NM.end({type:'home'});
        MG.coinManager.Init();
        MG.playGameController.GotoLobby();
        MG.StopBgm('game_bgm');
        this.Hide();
        MG.uiGame.SetRevivalIcon(false);
        //MSSDK.gameOver(); //게임스낵 게임오버
    }, this);


    // 재시작 버튼 (게임 새로진행)
    // this.btnReplayBg = MG.AddSpriteNineButtonScale(this.bg, -105, 95, "UI_0", "Btn_Popup_Icon_Blue.png", 190, 166, {top:0, bottom:0, left:26, right:26});
    // this.btnReplayBg.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     MG.uiGame.Init();
    //     MG.ResumeBgm("game_bgm");
    //     MG.coinManager.Init();
    //     MG.playGameController.Init();
    //     MG.playGameController.uiSuperSkip.Show();       // 슈퍼스킵 창 열기    //MG.playGameController.GameStart();
    //     if(MG.playGameController.uiSuperSkip.IsShow() === true) MG.uiLobby.Show();
    //     this.Hide();
    // }, this);
    // this.btnReplayBg.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnReplayBg.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    this.btnReplay = MG.AddSpriteButtonScale(this.bg, -84, 102, "UI_0", "Icon_Popup_Restart.png");
    this.btnReplay.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        console.log('btnReplay01 - 옵션창');
        //PopconGame.Sdk.log("2");//console.log(":::::::::::: 게임 재시작 :::::::::::::::::");
        MG.NM.end({type:'retry'});
        MSSDK.gameOver();//GameSnacks
        MG.uiGame.Init();
        MG.ResumeBgm("game_bgm");
        MG.coinManager.Init();
        MG.playGameController.Init();
        MG.playGameController.uiSuperSkip.Show();       // 슈퍼스킵 창 열기    //MG.playGameController.GameStart();
        if(MG.playGameController.uiSuperSkip.IsShow() === true) MG.uiLobby.Show();
        this.Hide();
    }, this);

    // 시작 버튼 (게임 이어진행)
    // this.btnContinueBg = MG.AddSpriteNineButtonScale(this.bg, 105, 95, "UI_0", "Btn_Popup_Icon_Blue.png", 190, 166, {top:0, bottom:0, left:26, right:26});
    // this.btnContinueBg.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.Hide();
    //     MG.ResumeBgm("game_bgm");
    //     MG.playGameController.Resume();
    // }, this);
    // this.btnContinueBg.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnContinueBg.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    this.btnContinue = MG.AddSpriteButtonScale(this.bg, 84, 102, "UI_0", "Icon_Popup_Resume.png");
    this.btnContinue.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        this.Hide();
        MG.ResumeBgm("game_bgm");
        MG.playGameController.Resume();
    }, this);

    this.main.visible = false;

}

UI_Pause.prototype = {
    Show:function(){
        MG.PauseBgm("game_bgm");
        MG.playGameController.Pause();
        if(gIsRevival === false) MG.uiGame.SetRevivalIcon(false);
        this.btnSoundOn.visible = kData.isAudio;
        this.btnSoundOff.visible = !kData.isAudio;
        if(MG.playGameController.GetExtendObject().IsEnabled()) MG.playGameController.GetExtendObject().Hide();

        this.bg.scale.set(0.1);
        this.main.visible = true;
        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
    },
    Hide:function(){
        //MG.ResumeBgm("game_bgm");
        if(MG.playGameController.GetExtendObject().IsEnabled()) MG.playGameController.GetExtendObject().Show();
        if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
        this.main.visible = false;
    },
    IsShow:function(){
        return this.main.visible;
    }
};

'use strict';

function UI_Option(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.isOver = false;

    // 반투명 전체 배경
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0.5, true);
    this.drBG.events.onInputDown.add(function () {}, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 534, 506, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 타이틀 틀
    this.titleBg = MG.AddSpriteNine(this.bg, 0, -285, "UI_0", "quiz_bg.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.txtTitle = MG.AddText(this.titleBg, 0, 8, '', {font:"40px " + gFontFace, fill:"#FFFFFF", fontWeight: 800/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.ReSize(MG.LM.Get('pop_setting'), 270);

    // 닫기 버튼 (로비로 이동)
    this.btnLobby = MG.AddSpriteButton(this.bg, 219, -210, "UI_0", "Btn_Popup_Exit.png");
    this.btnLobby.events.onInputUp.add(function () {
        console.log('btnLobby01');
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        this.Hide();
    }, this);
    this.btnLobby.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnLobby.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);

    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.bg, 219, -210, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        this.Hide();
    }, this);

    // this.txtsubTitle = MG.AddText(this.bg, 0, -170, '', {font:"35px " + gFontFace, fill:"#666666"/*, fontWeight: 800, stroke:"#202251", strokeThickness:6*/});
    // this.txtsubTitle.ReSize(MG.LM.Get('set_language'), 520);

    // // 언어 리스트 bg
    // this.langListBg = MG.AddSpriteNine(this.bg, 0, -100, "UI_0", "Popup_TextBox.png", 400, 90, {top:20, bottom:20, left:20, right:20});
    // // 현재 적용중인 언어명
    // this.txtLangName = MG.AddText(this.langListBg, -160, 3, '', {font:"35px " + gFontFace, fill:"#FFFFFF", align:"left"/*, fontWeight: 800, stroke:"#202251", strokeThickness:6*/});
    // this.txtLangName.anchor.setTo(0, 0.5);
    // // 언어 선택 버튼
    // this.btnOpenLangList = MG.AddSpriteButtonNoEffect(this.langListBg, 150, 0, "UI_0", "Btn_Popup_Dropdown.png");
    // this.btnOpenLangList.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.langList.Show();
    // }, this);
    // this.btnOpenLangList.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnOpenLangList.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);

    // 로그아웃 버튼
    this.btnLogoutBg = MG.AddSpriteNineButtonScale(this.bg, -105, 0, "UI_0", "Popup_BuyTower_CoinFrame.png", 190, 166, {top:0, bottom:0, left:26, right:26});
    this.btnLogoutBg.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        if(gBaseData.SSO !== "f") {
            window.open("https://samsung.sumtotal.host", '_self');
        } else {
            location.reload();
        }
        //location.reload();
    }, this);
    this.btnLogoutBg.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnLogoutBg.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.btnLogout = MG.AddSprite(this.btnLogoutBg, 0, -10, "UI_0", "Icon_Popup_Logout.png");

    // 사운드 on / off 버튼      parent, x, y, atlas, imgName, sound, scale, color, alpha, ax, ay, width, height
    this.btnSoundBg = MG.AddSpriteNineButtonScale(this.bg, 105, 0, "UI_0", "Popup_BuyTower_CoinFrame.png", 190, 166, {top:0, bottom:0, left:26, right:26});
    this.btnSoundBg.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }

        //return; //게임스낵 오디오 못 건드리게 막기
        
        if(this.btnSoundOn.visible){
            this.btnSoundOn.visible = false;
            this.btnSoundOff.visible = true;
            kData.isAudio = false;
            MG.StopBgm('lobby_bgm');
        }else{
            kData.isAudio = true;
            this.btnSoundOn.visible = true;
            this.btnSoundOff.visible = false;
            MG.PlayBgm('lobby_bgm', true);
            MG.SetBgmVolume('lobby_bgm', 0.5);
        }
        MG.NM.LocalSave();
    }, this);
    this.btnSoundBg.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnSoundBg.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.btnSoundOn = MG.AddSprite(this.btnSoundBg, 0, -10, "UI_0", "Icon_Popup_Sound_On.png");
    this.btnSoundOn.visible = kData.isAudio;
    this.btnSoundOn.y = -5000;//게임스낵예외처리
    this.btnSoundOn.alpha = 0;//게임스낵예외처리
    this.btnSoundOff = MG.AddSprite(this.btnSoundBg, 0, -10, "UI_0", "Icon_Popup_Sound_Off.png");
    this.btnSoundOff.visible = !kData.isAudio;
    this.btnSoundOff.y = -5000;//게임스낵예외처리
    this.btnSoundOff.alpha = 0;//게임스낵예외처리

    // this.langList = new UI_LanguageList(this.main);
    // this.langList.Hide();

    this.main.visible = false;
}

UI_Option.prototype = {
    Show:function(){
        this.btnSoundOn.visible = kData.isAudio;
        this.btnSoundOff.visible = !kData.isAudio;
        this.bg.scale.set(0.1);
        //this.txtLangName.text = gCurrentLangName;
        this.main.visible = true;
        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(false);
    },
    Hide:function(){
        this.main.visible = false;
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(true);
    },
    IsShow:function(){
        return this.main.visible;
    }
};

////////////////////////////////////////////////////////////////////////////////////////////
/// 언어 리스트
////////////////////////////////////////////////////////////////////////////////////////////
// function UI_LanguageList (parent){
//     this.lang = MG.game.add.group();
//     this.main = MG.game.add.group();
//     if(parent)
//         parent.addChild(this.main);
//     else
//         MG.game.world.addChild(this.main);
//
//     // 반투명 전체 배경
//     this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0.25, true);
//     this.drBG.events.onInputDown.add(function () { this.Hide(); }, this);
//     //// 언어 리스트 bg
//     //this.langListBg = MG.AddSpriteNine(this.main, MG.game.world.centerX, MG.game.world.centerY + 30, "UI_0", "Popup_TextBox.png", 400, 340, {top:20, bottom:20, left:20, right:20});
//     //// 리스트뷰 작성 //////////////////////////////////
//     //this.listView = new PhaserListView.ListView(MG.game, this.main, new Phaser.Rectangle(130, 505, 400, 330), {padding: 50, searchForClicks: 'true'});
//
// }
//
// UI_LanguageList.prototype = {
//     Show:function(){
//         this.SetListing();
//         this.main.visible = true;
//     },
//     Hide:function(){
//         this.main.visible = false;
//     },
//     IsShow:function(){
//         return this.main.visible;
//     },
//     SetListing:function(){
//         this.DestroyListing();
//
//         // 상단 공백 유지용 오브젝트
//         // var _space1 = new BlankListObject(this.bg);
//         // this.listView.add(_space1.GetSprite());
//
//         // for(var i=0; i<_arr.length; ++i){
//         //     var _obj = new Ranking(this.bg, _arr[i].uIdx, _arr[i].rNo, _arr[i].mId, _arr[i].uScore);
//         //     _obj.GetSprite().position.setTo(268, 0);
//         //     this.listView.add(_obj.GetSprite());
//         // }
//
//         var _space1 = new BlankListObject(this.main, 0.01);
//         this.listView.add(_space1.GetSprite());
//         for(var i=0; i<gLanguageSupportSet.length; ++i) {
//             var _obj = new LanguageObject(this.lang, gLanguageSupportSet[i].lanType, gLanguageSupportSet[i].lanTitle, gLanguageSupportSet[i].lanKey, gLanguageSupportSet[i].defFlag);
//             _obj.Show();
//             this.listView.add(_obj.GetSprite());
//         }
//     },
//     DestroyListing:function(){
//         this.listView.removeAll();
//     }
// };

////////////////////////////////////////////////////////////////////////////////////////////
/// 언어 리스트 오브젝트
////////////////////////////////////////////////////////////////////////////////////////////
// function LanguageObject (parent, type, title, key, flag){
//     this.main = MG.game.add.group();
//     if(parent)
//         parent.addChild(this.main);
//     else
//         MG.game.world.addChild(this.main);
//
//     this.type = type;
//     this.key = key;
//
//     // 기본 스프라이트
//     // this.baseSprite = MG.AddSprite(this.main, 0, 0, "UI_0", "blank_dot.png");
//     this.baseSprite = MG.AddSprite(this.main, 50, 1, "UI_0", "blank_dot.png");
//     // 현재 적용중인 언어명
//     if(type === gBaseData.LANGCODE){
//         // 사용중인 언어이면
//         this.txtLangName = MG.AddText(this.baseSprite, 0, 0, title, {font:"35px " + gFontFace, fill:"#888888", align:"left"/*, fontWeight: 800, stroke:"#202251", strokeThickness:6*/});
//     }else{
//         this.txtLangName = MG.AddText(this.baseSprite, 0, 0, title, {font:"35px " + gFontFace, fill:"#FFFFFF", align:"left"/*, fontWeight: 800, stroke:"#202251", strokeThickness:6*/});
//     }
//     this.txtLangName.anchor.setTo(0, 0.5);
//     // 투명 사각 클릭
//     this.touchRect = MG.AddSpriteButtonNoEffect(this.baseSprite, 150, 0, "UI_0", "blank_dot.png");
//     this.touchRect.scale.set(300, 45);
//     this.touchRect.events.onInputUp.add(function () {
//         if(this.type === gBaseData.LANGCODE) return;
//
//         MG.NM.UpdateLanguage(Number(this.type), function (data) {
//             // uiManager.Loading_FullScreen(true);
//             var url = document.location.href.replace("&y=" + gBaseData.LANGCODE, "&y=" + data.lastSetLangType);
//             window.location.href = url;
//         }.bind(this));
//     }.bind(this));
//
//     this.main.visible = false;
// }
//
// LanguageObject.prototype = {
//     Show:function(){
//         this.main.visible = true;
//     },
//     Hide:function(){
//         this.main.visible = false;
//     },
//     IsShow:function(){
//         return this.main.visible;
//     },
//     GetSprite:function(){
//         return this.baseSprite;
//     }
// };
//

'use strict';

function UI_Shop(parent) {
    this.main = MG.game.add.group();
    if (parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.GETCOIN_COUNT = 2000;      // 동영상 1회 시청시 지급받는 코인 카운트
    this.products = [];
    this.isOver = false;
    this.addCoinCount = -10;          // 코인을 대량으로 획득 시 카운트 올라가는 애니랑함께 적립해주자.
    this.coinAniIsUpScale = true;
    //this.clickBlock = false;
    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {
        this.Hide();
    }, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 400, 640, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 타이틀
    // this.leftRoof = MG.AddSprite(this.bg, 0, -490, "UI_0", "Shop_Roof.png");
    // this.leftRoof.anchor.setTo(1, 0.5);
    // this.rightRoof = MG.AddSprite(this.bg, 0, -490, "UI_0", "Shop_Roof.png");
    // this.rightRoof.anchor.setTo(1, 0.5);
    // this.rightRoof.scale.setTo(-1, 1);
    // this.titleDeco = MG.AddSprite(this.bg, 0, -650, "UI_0", "Shop_TopDesign_Coin.png");
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -570, "UI_0", "Frame_Shop_Title.png", 378, 92, {top:0, bottom:0, left:26, right:26});
    this.line = MG.AddSprite(this.bg, 0, -215, 'UI_0', 'Shop_Coin_Line_Top.png');
    // this.line.anchor.setTo(0.5, 0);
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    this.txtTitle.ReSize(MG.LM.Get('pop_shop'), 365);

    // 닫기 버튼
    this.btnExit = MG.AddSpriteButton(this.bg, 175, -295, "UI_0", "Btn_Popup_Exit.png");
    this.btnExit.events.onInputUp.add(function () {
        this.Hide();
    }, this);
    this.btnExit.anchor.setTo(1, 0);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnExit, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        this.Hide();
    }, this);

    // 코인 아이콘
    this.coinIcon = MG.AddSprite(this.bg, -183, -343, "UI_0", "Icon_Coin_White.png");
    this.txtCoin = MG.AddText(this.bg, -153, -338, '0', {font:"30px " + gFontFace, fill:"#ffffff", fontWeight: "normal",  align:"left"});
    this.txtCoin.anchor.setTo(0, 0.5);

    // '광고보기' 버튼
    this.btnEnd = MG.AddSpriteNineButton(this.bg, 0, 162.5, "UI_0", "Btn_Frame.png", 244, 70, {top:9, bottom:9, left:9, right:9});
    this.btnEnd.events.onInputUp.add(function () {
        //if(this.clickBlock) return;
        if(!arguments[2]) return;

        //this.clickBlock = true;
        this.OnClickWatchingMovie(1);

    }, this);
    this.txtEnd = MG.AddText(this.btnEnd, 0, 2, '', {font:"30px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtEnd.ReSize(MG.LM.Get('ad'), 320);

    // '게임 바로시작' 버튼
    this.btnStartGame = MG.AddSpriteNineButton(this.bg, 0, 250, "UI_0", "Btn_Frame.png", 244, 70, {top:9, bottom:9, left:9, right:9});
    this.btnStartGame.events.onInputUp.add(function () {
        this.Hide();
        if(MG.uiLobby.GetMapInstance().IsShow()) MG.uiLobby.GetMapInstance().Hide();
        MG.playGameController.uiSuperSkip.Show();       // 슈퍼스킵 창 열기
    }, this);

    this.txtStartGame = MG.AddText(this.btnStartGame, 0, 2, '', {font:"30px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtStartGame.ReSize(MG.LM.Get('btn_game_start'), 320);

    // 상품 1
    this.products[0] = MG.AddSprite(this.bg, 0, -90, "UI_0", "Shop_Coin_Billboard.png");
    // this.products[0].events.onInputUp.add(function () {
    //
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.OnClickWatchingMovie(1);
    // }, this);
    // this.products[0].events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.products[0].events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    // // this.products[0].name = MG.AddText(this.products[0], 0, 70, '', {font:"27px " + gFontFace, fill:"#222739", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // // if(gIsMyanmar || gIsBengal) this.products[0].name.lineSpacing = 10;
    // // this.products[0].name.ReSize(MG.LM.Get('shop_video1'), 600);
    // // MG.AddText(this.products[0], -210, 15, '+100', {font:"33px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal", align:"center", stroke:"#32406F", strokeThickness:6});
    this.products[0].blackBG = MG.AddSpriteNineButton(this.btnEnd, 0, 0, "UI_0", "Shop_Coin_BlackAlpha.png", 270, 90, {top:26, bottom:26, left:26, right:26});
    this.products[0].blackBG.alpha = 0;
    this.products[0].blackBG.events.onInputUp.add(function () {}, this);
    this.products[0].coolTimer = MG.AddText(this.products[0], 0, 0, '00:00', {font:"100px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[0].rewardCount = MG.AddText(this.products[0], 0, -40, '+2,000', {font:"50px " + gFontFace, fill:"#FFFFFF", fontWeight: "bold", align:"center"/*, stroke:"#FFFFFF", strokeThickness:4*/});
    this.products[0].blackBG.visible = false;
    this.products[0].coolTimer.visible = false;
    this.products[0].timer = 0;

    // // 상품 2
    // this.products[1] = MG.AddSpriteButtonScale(this.bg, 0, -55, "UI_0", "Shop_Coin_Sub2.png");
    // this.products[1].events.onInputUp.add(function () {
    //
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.OnClickWatchingMovie(2);
    // }, this);
    // this.products[1].events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.products[1].events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    // this.products[1].name = MG.AddText(this.products[1], 0, 70, '', {font:"27px " + gFontFace, fill:"#222739", fontWeight: 500, align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // if(gIsMyanmar || gIsBengal) this.products[1].name.lineSpacing = 10;
    // this.products[1].name.ReSize(MG.LM.Get('shop_video2'), 600);
    // MG.AddText(this.products[1], -210, 15, '+100', {font:"33px " + gFontFace, fill:"#FFFFFF", fontWeight: 600, align:"center", stroke:"#32406F", strokeThickness:6});
    // this.products[1].blackBG = MG.AddSpriteNineButton(this.products[1], 0, 0, "UI_0", "Shop_Coin_BlackAlpha.png", 566, 212, {top:26, bottom:26, left:26, right:26});
    // this.products[1].blackBG.events.onInputUp.add(function () {}, this);
    // this.products[1].coolTimer = MG.AddText(this.products[1], 0, 0, '00:00', {font:"100px " + gFontFace, fill:"#FFFFFF", fontWeight: 700, align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // this.products[1].blackBG.visible = false;
    // this.products[1].coolTimer.visible = false;
    // this.products[1].timer = 0;
    //
    // // 상품 3
    // this.products[2] = MG.AddSpriteButtonScale(this.bg, 0, 180, "UI_0", "Shop_Coin_Sub3.png");
    // this.products[2].events.onInputUp.add(function () {
    //
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.OnClickWatchingMovie(3);
    // }, this);
    // this.products[2].events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.products[2].events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);
    // this.products[2].name = MG.AddText(this.products[2], 0, 70, 'Galaxy S21 Series', {font:"27px " + gFontFace, fill:"#222739", fontWeight: 500, align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // if(gIsMyanmar || gIsBengal) this.products[2].name.lineSpacing = 10;
    // this.products[2].name.ReSize(MG.LM.Get('shop_video3'), 600);
    // MG.AddText(this.products[2], -210, 15, '+100', {font:"33px " + gFontFace, fill:"#FFFFFF", fontWeight: 600, align:"center", stroke:"#32406F", strokeThickness:6});
    // this.products[2].blackBG = MG.AddSpriteNineButton(this.products[2], 0, 0, "UI_0", "Shop_Coin_BlackAlpha.png", 566, 212, {top:26, bottom:26, left:26, right:26});
    // this.products[2].blackBG.events.onInputUp.add(function () {}, this);
    // this.products[2].coolTimer = MG.AddText(this.products[2], 0, 0, '00:00', {font:"100px " + gFontFace, fill:"#FFFFFF", fontWeight: 700, align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // this.products[2].blackBG.visible = false;
    // this.products[2].coolTimer.visible = false;
    // this.products[2].timer = 0;
    //
    // this.txtInfo = MG.AddText(this.bg, 0, 330, '', {font:"22px " + gFontFace, fill:"#222739", fontWeight: 500, align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // if(gIsMyanmar || gIsBengal) this.txtInfo.lineSpacing = 10;
    // this.txtInfo.ReSize(MG.LM.Get('video_text'), 600);


    this.txtInfo = MG.AddText(this.bg, 0, 70, '', {font:"24px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center", wrap:true, wordWrapWidth: 320});

    if(this.products[0].blackBG.visible){
        this.txtInfo.ReSize(MG.LM.Get('shop_info2'), 380);
    }else{
        this.txtInfo.ReSize(MG.LM.Get('shop_info'), 380);
    }


    // 과거 닫기 버튼으로 동작 할때
    // this.btnEnd.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.Hide();
    // }, this);
    // this.btnEnd.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnEnd.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);



    this.main.visible = false;
}

UI_Shop.prototype = {
    Show:function(){
        this.main.visible = true;
        this.txtCoin.text = InsertComma(kData.cc);
        this.coinIcon.scale.setTo(1);
        this.Update();              // 상품들 상태 셋팅
        // // 동전카운트가 잘 안보여서 반투명 BG 안보이도록 처리해줌
        // if(MG.playGameController.uiSuperSkip.IsShow() || MG.uiLobby.uiMap.IsShow()){
        //     this.drBG.visible = false;
        // }else{
        //     this.drBG.visible = true;
        // }

        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(false);
    },
    Hide:function(){
        MG.uiLobby.GetMapInstance().UpdateCoin();
        MG.game.time.events.remove(this.products[0].timerEvent);
        // MG.game.time.events.remove(this.products[1].timerEvent);
        // MG.game.time.events.remove(this.products[2].timerEvent);
        this.main.visible = false;
        if(MG.uiLobby.GetMapInstance().IsShow() === false && MG.playGameController.uiSuperSkip.IsShow() === false){
            if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(true);
        }
        MG.uiLobby.StartTimer();
    },
    IsShow:function(){
        return this.main.visible;
    },
    Update:function(){
        MG.game.time.events.remove(this.products[0].timerEvent);
        // MG.game.time.events.remove(this.products[1].timerEvent);
        // MG.game.time.events.remove(this.products[2].timerEvent);

        // MG.NM.GetRewardCondition(function (data) {
            var _gap = (MG.game.time.time - kData.st0) / 1000;
            var _t = parseInt(COIN_COOLTIME - _gap);
            // var _t = parseInt(COIN_COOLTIME - kData.st0);
            var _f = {"m": null, "s": null};
            if(kData.st0 < 0){
                // 어뷰징 처리
                this.SetButtons(0, "lock");
                this.txtEnd.text = "";//this.products[0].coolTimer.text = "";
            }else if(_t > 0){
                this.SetButtons(0, "lock");
                this.products[0].timer = _t;
                _f = CreateTimeFormat(this.products[0].timer);
                this.txtEnd.text = _f.m + ":" + _f.s;//this.products[0].coolTimer.text = _f.m + ":" + _f.s;
                this.products[0].timerEvent = MG.game.time.events.loop(Phaser.Timer.SECOND, this.CheckTimer1, this);
               //console.log("::::: [0] lock = " + this.products[0].timer);
            }else{
                this.SetButtons(0, "free");
                this.txtEnd.ReSize(MG.LM.Get('ad'), 320);
                //console.log("::::: [0] free = " + kData.st0);
            }


        if(this.products[0].blackBG.visible){
            this.txtInfo.ReSize(MG.LM.Get('shop_info2'), 400);
        }else{
            this.txtInfo.ReSize(MG.LM.Get('shop_info'), 400);
        }
        //this.txtCoin.text = InsertComma(kData.cc);

            //
            // _gap = (MG.game.time.time - kData.st1) / 1000;
            // _t = parseInt(COIN_COOLTIME - _gap);
            // // _t = parseInt(COIN_COOLTIME - kData.st1);
            // if(kData.st1 < 0){
            //     // 어뷰징 처리
            //     this.SetButtons(1, "lock");
            //     this.products[1].coolTimer.text = "";
            // }else if(_t > 0){
            //     this.SetButtons(1, "lock");
            //     this.products[1].timer = _t;
            //     _f = this.CreateTimeFormat(this.products[1].timer);
            //     this.products[1].coolTimer.text = _f.m + ":" + _f.s;
            //     this.products[1].timerEvent = MG.game.time.events.loop(Phaser.Timer.SECOND, this.CheckTimer2, this);
            //     //console.log("::::: [1] lock = " + this.products[1].timer);
            // }else{
            //     this.SetButtons(1, "free");
            //     //console.log("::::: [1] free = " + kData.st1);
            // }
            //
            // _gap = (MG.game.time.time - kData.st2) / 1000;
            // _t = parseInt(COIN_COOLTIME - _gap);
            // // _t = parseInt(kData.st2);
            // // _t = parseInt(COIN_COOLTIME - kData.st2);
            // if(kData.st2 < 0){
            //     // 어뷰징 처리
            //     this.SetButtons(2, "lock");
            //     this.products[2].coolTimer.text = "";
            // }else if(_t > 0){
            //     this.SetButtons(2, "lock");
            //     this.products[2].timer = _t;
            //     _f = this.CreateTimeFormat(this.products[2].timer);
            //     this.products[2].coolTimer.text = _f.m + ":" + _f.s;
            //     this.products[2].timerEvent = MG.game.time.events.loop(Phaser.Timer.SECOND, this.CheckTimer3, this);
            //     //console.log("::::: [2] lock = " + this.products[2].timer);
            // }else{
            //     this.SetButtons(2, "free");
            //     //console.log("::::: [2] free = " + kData.st2);
            // }
        // }.bind(this));
    },
    StartCoinWithAnimation:function(num){
        if(this.addCoinCount >= 0){
            this.addCoinCount += num;
        }else{
            this.addCoinCount = num;
            this.UpdateCoinWithAnimation();
        }
    },
    UpdateCoinWithAnimation:function(){
        this.addCoinCount -= 10;
        if(this.addCoinCount >= 0) {
            this.AddCoin();
            setTimeout(function(){
                this.UpdateCoinWithAnimation();
            }.bind(this), 10);
        }else{
            //kData.cc += this.GETCOIN_COUNT;             // 코인 지급 Blooming..
            MG.NM.LocalSave();
            MG.uiLobby.UpdateLobbyData();
            //this.Update();
        }
    },
    AddCoin:function(){
        this.txtCoin.text = InsertComma(kData.cc += 10);
        //this.txtCoin.ReSize(InsertComma(kData.cc += 10), 150);
    },
    StartCoinIconAnimation:function(){
        this.coinAniIsUpScale = true;
        this.CoinIconScaleUpDown();
    },
    CoinIconScaleUpDown:function(){
        if(this.addCoinCount >= 0){
            if(this.coinAniIsUpScale){
                MG.game.add.tween(this.coinIcon.scale).to({x:1.3, y:1.3}, 100, Phaser.Easing.ElasticEx.Out, true);
            }else{
                MG.game.add.tween(this.coinIcon.scale).to({x:1, y:1}, 100, Phaser.Easing.ElasticEx.In, true);
            }
            this.coinAniIsUpScale = !this.coinAniIsUpScale;

            setTimeout(function(){
                this.CoinIconScaleUpDown();
            }.bind(this), 102);
        }else{
            this.coinIcon.scale.setTo(1);
            this.coinAniIsUpScale = true;
        }
    },
    SetButtons:function(inx, state){
        switch (state){
            case "lock":
                this.products[inx].blackBG.visible = true;
                //this.products[inx].coolTimer.visible = true;
                this.products[inx].inputEnable = false;
                break;

            case "free":
                this.products[inx].blackBG.visible = false;
                //this.products[inx].coolTimer.visible = false;
                this.products[inx].inputEnable = true;
                this.products[inx].timer = 0;
                break;
        }
    },
    CheckTimer1:function(){
        this.products[0].timer -= 1;
        if(this.products[0].timer <= 0){
            // 쿨타임 종료
            MG.game.time.events.remove(this.products[0].timerEvent);
            this.SetButtons(0, "free");
            this.txtInfo.ReSize(MG.LM.Get('shop_info'), 400);
            this.txtEnd.ReSize(MG.LM.Get('ad'), 320);
        }else{
            var _f = {"m":null, "s":null};
            _f = CreateTimeFormat(this.products[0].timer);
            this.txtEnd.text = _f.m + ":" + _f.s;//this.products[0].coolTimer.text = _f.m + ":" + _f.s;
        }
    },
    // CheckTimer2:function(){
    //     this.products[1].timer -= 1;
    //     if(this.products[1].timer <= 0){
    //         // 쿨타임 종료
    //         MG.game.time.events.remove(this.products[1].timerEvent);
    //         this.SetButtons(1, "free");
    //     }else{
    //         var _f = {"m":null, "s":null};
    //         _f = this.CreateTimeFormat(this.products[1].timer);
    //         this.products[1].coolTimer.text = _f.m + ":" + _f.s;
    //     }
    // },
    // CheckTimer3:function(){
    //     this.products[2].timer -= 1;
    //     if(this.products[2].timer <= 0){
    //         // 쿨타임 종료
    //         MG.game.time.events.remove(this.products[2].timerEvent);
    //         this.SetButtons(2, "free");
    //     }else{
    //         var _f = {"m":null, "s":null};
    //         _f = this.CreateTimeFormat(this.products[2].timer);
    //         this.products[2].coolTimer.text = _f.m + ":" + _f.s;
    //     }
    // },
    // 00:00 포멧으로 만들기
    // CreateTimeFormat:function(seconds){
    //     var min = parseInt((seconds % 3600) / 60);
    //     var sec = seconds % 60;
    //     min = this.Pad(min);
    //     sec = this.Pad(sec);
    //     return {"m":min, "s":sec};
    // },
    // // 2자리수로 맞추기
    // Pad:function(i){
    //     var _i = "0" + i;
    //     _i = _i.slice(-2);
    //     return _i;
    // },
    OnClickWatchingMovie:function (num) {
        gMovieIndex = num;

        gIsGetReward = false;
        if(kData.isAudio) MG.StopBgm('lobby_bgm');
        gRewardName = "coin";

        ShowAD("reward", "coin", function () {
            this.RewardCoin();
            // if(gIsGetReward) return;
            // gIsGetReward = true;
            //
            // if(Define.PID == "100010" || Define.PID == "100026"){
            //     // 캐시워크다
            // }else{
            //     // 핫쉐어다
            //     this.RewardCoin();
            // }

        }.bind(this),function () {
            if(kData.isAudio) {
                MG.PlayBgm('lobby_bgm', true);
                MG.SetBgmVolume('lobby_bgm', 0.5);
            }

            MG.uiPopup.Show("YES", MG.LM.Get('ad'), "Popup_AD_Line_Top.png", MG.LM.Get('failAD'), function(){});
        }, false);
    },
    // 광고보고 코인 획득
    RewardCoin:function () {
        gRewardName = "";
        Define.iTimeStemp = new Date().getTime();

        switch(gMovieIndex){
            case 1:
                kData.st0 = MG.game.time.time;
                break;

            case 2:
                kData.st1 = MG.game.time.time;
                break;

            case 3:
                kData.st2 = MG.game.time.time;
                break;
        }

        //this.clickBlock = false;
        this.StartCoinWithAnimation(2000);
        this.StartCoinIconAnimation();
        this.Update();

        if(kData.isAudio) {
            MG.PlayBgm('lobby_bgm', true);
            MG.SetBgmVolume('lobby_bgm', 0.5);
        }

        setTimeout(function(){
            gIsGetReward = false;
        }, 1000);
    }
};
'use strict';

function UI_BuyTower(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.yesCallBack = undefined;
    this.noCallBack = undefined;
    this.isOver = false;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {}, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 410, 395, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 코인 아이콘
    this.coinIcon = MG.AddSprite(this.bg, -188, -220.5, "UI_0", "Icon_Coin_White.png");
    this.txtCoin = MG.AddText(this.coinIcon, 30, 3, '0', {font:"30px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal",  align:"left"});
    this.txtCoin.anchor.setTo(0, 0.5);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -240, "UI_0", "Frame_Popup_Title_Blue.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -92.5, 'UI_0', 'Shop_Tower_Line_Top.png');
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    // 타워 네임
    this.txtTowerName = MG.AddText(this.bg, 0, -45, '', {font:"27px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // 가격 bg
    this.priceBG = MG.AddSpriteNine(this.bg, 0, 0, "UI_0", "Popup_BuyTower_CoinFrame.png", 180, 54, {top:0, bottom:0, left:30, right:30});
    this.coinIcon = MG.AddSprite(this.priceBG, -60, 0, 'UI_0', 'Icon_Coin_White.png');
    this.txtPrice = MG.AddText(this.coinIcon, 25, 5, '', {font:"28px " + gFontFace, fill:"#FFFFFF", fontWeight: "bold", align:"left"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtPrice.anchor.setTo(0, 0.5);
    // 본문 내용
    this.txtDoc = MG.AddText(this.bg, 0, 55, '', {font:"27px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // 예, 확인 버튼
    this.btnYes = MG.AddSpriteNineButtonScale(this.bg, 84, 132.5, "UI_0", "Btn_Frame.png", 160, 70, {top:9, bottom:9, left:9, right:9});
    this.btnYes.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        if(this.yesCallBack !== undefined) this.yesCallBack();
        this.Hide();
    }, this);
    this.txtYes = MG.AddText(this.btnYes, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);

    // 아니오 버튼
    this.btnNo = MG.AddSpriteNineButtonScale(this.bg, -84, 132.5, "UI_0", "Btn_Frame.png", 160, 70, {top:9, bottom:9, left:9, right:9});
    this.btnNo.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    this.txtNo = MG.AddText(this.btnNo, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // this.txtNo.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);
    this.txtNo.ReSize(MG.LM.Get('btn_no'), 250);

    this.main.visible = false;
}

UI_BuyTower.prototype = {
    Show:function(name, price, type, title, line, doc, yesCallBack, noCallBack){
        // this.txtTitle.text = title;
        this.txtCoin.text = InsertComma(kData.cc);
        this.txtTowerName.ReSize(name, 270);
        this.txtTitle.ReSize(title, 270);
        this.txtPrice.ReSize(price, 220);
        // this.txtDoc.text = doc;
        this.txtDoc.ReSize(doc, 390, 50);
        if(line !== undefined) this.line.loadTexture("UI_0", line);
        if(yesCallBack !== undefined) this.yesCallBack = yesCallBack;
        if(noCallBack !== undefined) this.noCallBack = noCallBack;
        // switch(type){
        //     case "YES":
        //         this.btnYes.position.x = 0;
        //         this.txtYes.ReSize(MG.LM.Get('btn_ok'), 250);
        //         this.btnNo.visible = false;
        //         break;
        //
        //     case "YES_NO":
        //         this.btnNo.visible = true;
        //         this.btnNo.position.x = -90;
        //         this.btnYes.position.x = 90;
        //         this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);
        //         break;
        // }

        this.bg.scale.set(0.1);
        this.main.visible = true;
        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
    },
    Hide:function(){
        this.yesCallBack = undefined;
        this.noCallBack = undefined;
        this.main.visible = false;
    },
    IsShow:function(){
        return this.main.visible;
    }
};
'use strict';

function UI_ResurrectionPopup(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.yesCallBack = undefined;
    this.noCallBack = undefined;
    this.isOver = false;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {}, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 400, 524, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 닫기 버튼
    this.btnExit = MG.AddSpriteButton(this.bg, 175, -237, "UI_0", "Btn_Popup_Exit.png");
    this.btnExit.events.onInputUp.add(function () {
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    this.btnExit.anchor.setTo(1, 0);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnExit, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -240, "UI_0", "Frame_Popup_Title_Blue.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -157, 'UI_0', 'Popup_AD_Line_Top.png');
    // this.line.anchor.setTo(0.5, 0);
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    // 본문 이미지
    this.picDoc = MG.AddSprite(this.bg, 0, -20, 'UI_0', 'Shop_Resurrection_Billboard.png');
    // 본문 내용
    this.txtDoc = MG.AddText(this.bg, 0, 115, '', {font:"24px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center", wordWrap: true, wordWrapWidth: 380});
    // 예, 확인 버튼
    this.btnYes = MG.AddSpriteNineButtonScale(this.bg, 83, 187, "UI_0", "Btn_Frame.png", 155, 70, {top:9, bottom:9, left:9, right:9});
    this.btnYes.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        if(this.yesCallBack !== undefined) this.yesCallBack();
        this.Hide();
    }, this);
    this.btnYes.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnYes.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.txtYes = MG.AddText(this.btnYes, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);

    // 아니오 버튼
    this.btnNo = MG.AddSpriteNineButtonScale(this.bg, -83, 187, "UI_0", "Btn_Frame.png", 155, 70, {top:9, bottom:9, left:9, right:9});
    this.btnNo.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    this.btnNo.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnNo.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.txtNo = MG.AddText(this.btnNo, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // this.txtNo.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);
    this.txtNo.ReSize(MG.LM.Get('btn_no'), 250);

    this.main.visible = false;
}

UI_ResurrectionPopup.prototype = {
    Show:function(type, title, line, doc, yesCallBack, noCallBack){
        // this.txtTitle.text = title;
        this.txtTitle.ReSize(title, 270);
        // this.txtDoc.text = doc;
        this.txtDoc.ReSize(doc, 380, 100);
        if(line !== undefined) this.line.loadTexture("UI_0", line);
        if(yesCallBack !== undefined) this.yesCallBack = yesCallBack;
        if(noCallBack !== undefined) this.noCallBack = noCallBack;
        // switch(type){
        //     case "YES":
        //         this.btnYes.position.x = 0;
        //         this.txtYes.ReSize(MG.LM.Get('btn_ok'), 250);
        //         this.btnNo.visible = false;
        //         break;
        //
        //     case "YES_NO":
        //         this.btnNo.visible = true;
        //         this.btnNo.position.x = -90;
        //         this.btnYes.position.x = 90;
        //         this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);
        //         break;
        // }

        this.bg.scale.set(0.1);
        this.main.visible = true;
        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
    },
    Hide:function(){
        this.yesCallBack = undefined;
        this.noCallBack = undefined;
        this.main.visible = false;
    },
    IsShow:function(){
        return this.main.visible;
    }
};
'use strict';

function UI_DiaRewardPopup(parent) {
    this.main = MG.game.add.group();
    if (parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.yesCallBack = undefined;
    this.noCallBack = undefined;
    this.isOver = false;
    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 400, 524, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 타이틀
    // this.leftRoof = MG.AddSprite(this.bg, 0, -490, "UI_0", "Shop_Roof.png");
    // this.leftRoof.anchor.setTo(1, 0.5);
    // this.rightRoof = MG.AddSprite(this.bg, 0, -490, "UI_0", "Shop_Roof.png");
    // this.rightRoof.anchor.setTo(1, 0.5);
    // this.rightRoof.scale.setTo(-1, 1);
    // this.titleDeco = MG.AddSprite(this.bg, 0, -650, "UI_0", "Shop_TopDesign_Coin.png");
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -570, "UI_0", "Frame_Shop_Title.png", 378, 92, {top:0, bottom:0, left:26, right:26});
    this.line = MG.AddSprite(this.bg, 0, -157, 'UI_0', 'Popup_AD_Line_Top.png');
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"});
    this.txtTitle.anchor.setTo(0.5, 1);
    this.txtTitle.ReSize(MG.LM.Get('pop_diatile'), 365);

    // 닫기 버튼
    this.btnExit = MG.AddSpriteButton(this.bg, 175, -237, "UI_0", "Btn_Popup_Exit.png");
    this.btnExit.events.onInputUp.add(function () {
        this.Hide();
    }, this);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnExit, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);

    this.doc = MG.AddSprite(this.bg, 0, -35, "UI_0", "Shop_Diamond_Billboard.png");
    this.rewardCount = MG.AddText(this.doc, -75, -30, MG.LM.Get("diamond_reward_count"), {font:"50px " + gFontFace, fill:"#FFFFFF", fontWeight: "bold", align:"center"/*, stroke:"#FFFFFF", strokeThickness:4*/});
    this.txtInfo = MG.AddText(this.bg, 0, 107, '', {font:"27px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center", wordWrap: true, wordWrapWidth: 380});
    this.txtInfo.ReSize(MG.LM.Get('pop_diatile_reward'), 380);

    // 확인 버튼
    this.btnEnd = MG.AddSpriteNineButton(this.bg, 0, 187, "UI_0", "Btn_Frame.png", 244, 70, {top:9, bottom:9, left:9, right:9});
    this.btnEnd.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        if(this.yesCallBack !== undefined) this.yesCallBack();
        this.Hide();
    }, this);
    this.txtEnd = MG.AddText(this.btnEnd, 0, 2, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtEnd.ReSize(MG.LM.Get('btn_yes'), 320);


    // 과거 닫기 버튼으로 동작 할때
    // this.btnEnd.events.onInputUp.add(function () {
    //     if(this.isOver) {
    //         this.isOver = false;
    //         return;
    //     }
    //     this.Hide();
    // }, this);
    // this.btnEnd.events.onInputOut.add(function () {
    //     this.isOver = true;
    // }, this);
    // this.btnEnd.events.onInputDown.add(function () {
    //     this.isOver = false;
    // }, this);

    this.main.visible = false;
}

UI_DiaRewardPopup.prototype = {
    Show:function(type, title, line, doc, yesCallBack, noCallBack){
        this.main.visible = true;

        this.txtTitle.ReSize(title, 365);
        this.txtInfo.ReSize(doc, 380, 100);
        if(line !== undefined) this.line.loadTexture("UI_0", line);
        if(yesCallBack !== undefined) this.yesCallBack = yesCallBack;
        if(noCallBack !== undefined) this.noCallBack = noCallBack;
        // switch(type){
        //     case "YES":
        //         this.btnYes.position.x = 0;
        //         this.txtYes.ReSize(MG.LM.Get('btn_ok'), 250);
        //         this.btnNo.visible = false;
        //         break;
        //
        //     case "YES_NO":
        //         this.btnNo.visible = true;
        //         this.btnNo.position.x = -90;
        //         this.btnYes.position.x = 90;
        //         this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);
        //         break;
        // }

        // this.bg.scale.set(0.1);
        this.main.visible = true;
        // MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
    },
    Hide:function(){
        this.yesCallBack = undefined;
        this.noCallBack = undefined;
        this.main.visible = false;
    },
    IsShow:function(){
        return this.main.visible;
    },
};
'use strict';

function UI_ExtendPopup(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.yesCallBack = undefined;
    this.noCallBack = undefined;
    this.isOver = false;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {}, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 400, 524, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 닫기 버튼
    this.btnExit = MG.AddSpriteButton(this.bg, 175, -237, "UI_0", "Btn_Popup_Exit.png");
    this.btnExit.events.onInputUp.add(function () {
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    this.btnExit.anchor.setTo(1, 0);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnExit, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -240, "UI_0", "Frame_Popup_Title_Blue.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -157, 'UI_0', 'Popup_AD_Line_Top.png');
    // this.line.anchor.setTo(0.5, 0);
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    // 본문 이미지
    this.picDoc = MG.AddSprite(this.bg, 0, -20, 'UI_0', 'Shop_Extend_Billboard.png');
    // 본문 내용
    this.txtDoc = MG.AddText(this.bg, 0, 115, '', {font:"24px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center", wordWrap: true, wordWrapWidth: 380});
    // 예, 확인 버튼
    this.btnYes = MG.AddSpriteNineButtonScale(this.bg, 83, 187, "UI_0", "Btn_Frame.png", 155, 70, {top:9, bottom:9, left:9, right:9});
    this.btnYes.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        if(this.yesCallBack !== undefined) this.yesCallBack();
        this.Hide();
    }, this);
    this.txtYes = MG.AddText(this.btnYes, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);

    // 아니오 버튼
    this.btnNo = MG.AddSpriteNineButtonScale(this.bg, -83, 187, "UI_0", "Btn_Frame.png", 155, 70, {top:9, bottom:9, left:9, right:9});
    this.btnNo.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        if(this.noCallBack !== undefined) this.noCallBack();
        MG.timerManager.DelayListener();        // 플레이 지연 이벤트 시작
        this.Hide();
    }, this);
    this.txtNo = MG.AddText(this.btnNo, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtNo.ReSize(MG.LM.Get('btn_no'), 250);

    this.main.visible = false;
}

UI_ExtendPopup.prototype = {
    Show:function(type, title, line, doc, yesCallBack, noCallBack){
        MG.timerManager.StopDelayListener();    // 플레이 지연 이벤트 정지

        // this.txtTitle.text = title;
        this.txtTitle.ReSize(title, 270);
        // this.txtDoc.text = doc;
        this.txtDoc.ReSize(doc, 380, 100);
        if(line !== undefined) this.line.loadTexture("UI_0", line);
        if(yesCallBack !== undefined) this.yesCallBack = yesCallBack;
        if(noCallBack !== undefined) this.noCallBack = noCallBack;
        // switch(type){
        //     case "YES":
        //         this.btnYes.position.x = 0;
        //         this.txtYes.ReSize(MG.LM.Get('btn_ok'), 250);
        //         this.btnNo.visible = false;
        //         break;
        //
        //     case "YES_NO":
        //         this.btnNo.visible = true;
        //         this.btnNo.position.x = -90;
        //         this.btnYes.position.x = 90;
        //         this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);
        //         break;
        // }

        this.bg.scale.set(0.1);
        this.main.visible = true;
        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
    },
    Hide:function(){
        this.yesCallBack = undefined;
        this.noCallBack = undefined;
        this.main.visible = false;
    },
    IsShow:function(){
        return this.main.visible;
    }
};
'use strict';

function ExtendObject() {
    // 광고보고 칸늘리기 아이콘 게이지
    this.arcGaugeBG = MG.AddSprite(MG.gUiFixed, 80, 250, "UI_0", "Game_Btn_AD_BG.png");
    this.arcGaugeBG.anchor.setTo(0.5);
    this.arcGaugeBG.scale.setTo(0);

    this.arcGaugeIcon = MG.game.add.sprite(80, 250, "UI_0", "Game_Btn_AD.png");
    this.arcGaugeIcon.anchor.setTo(0.5, 0.5);
    this.arcGaugeIcon.inputEnabled = true;
    this.arcGaugeIcon.events.onInputUp.add( function () {this.onClick()}.bind(this) );

    this.txtTimer = MG.AddText(this.arcGaugeIcon, 0, 25, '0', {font:"20px " + gFontFace, fill:"rgba(255,57,0,0.96)", fontWeight: "normal",  align:"center"});
    this.loopEvent = null;
    this.SHOW_TIMER = 15;
    this.endTimer = 0;
    this.blockCount = 0;
    this.oldWidth = 0;
    this.isDoing = false;

    this.Hide();
}

ExtendObject.prototype = {
    Init:function(){
        this.txtTimer.text = '0';
        this.endTimer = 0;
        this.isDoing = false;
        this.oldWidth = 0;
        this.Hide();
    },
    Show:function(){
        this.txtTimer.visible = true;
        this.arcGaugeBG.visible = true;
        this.arcGaugeIcon.visible = true;
    },
    Hide:function(){
        this.txtTimer.visible = false;
        this.arcGaugeBG.visible = false;
        this.arcGaugeIcon.visible = false;
        this.txtTimer.text = '0';
    },
    // 확장 당첨 여부 조사
    isApply:function(){
        if(isPlayingSuperSkip || isPlayingDiamondReward || isPlayingGoldReward) return;
        if(gPlayData.floor_count <= 10) return;
        if(--this.blockCount > 0 || this.isDoing) return;
        var _w = parseInt((MG.uiGame.GetLastTile().w / BASE_TILE_WIDTH) * 100);

        // if(gPlayData.floor_count % 10 === 0){     // 넓이 30% 이하로 떨어지는 순간 1번 발동
        if(this.oldWidth >= 30 && _w < 30){     // 넓이 30% 이하로 떨어지는 순간 1번 발동
            console.log("::::::::::::::::: 확장 기능 뽑기 실행  ::::::: width = " + _w);
            if(Random.Range(0, 10) <= 2) {   // 30% 확률로 나온다.
                // 확장 기능 당첨
                this.Show();
                this.startTimer();
                this.oldWidth = 0;
            }else{
                this.oldWidth = _w;
            }
        }else{
            this.oldWidth = _w;
        }

    },
    startTimer:function(){
        this.isDoing = true;
        this.endTimer = this.SHOW_TIMER;
        this.txtTimer.text = this.endTimer;
        this.loopEvent = MG.game.time.events.add(1000, this.updateTimer, this);
    },
    updateTimer:function(){
        this.txtTimer.text = --this.endTimer;
        if(this.endTimer <= 0) {
            this.isDoing = false;
            if(this.loopEvent !== null) MG.game.time.events.remove(this.loopEvent);
            this.stopTimer();
        }else{
            this.loopEvent = MG.game.time.events.add(1000, this.updateTimer, this);
        }
    },
    stopTimer:function(){
        this.isDoing = false;
        if(this.loopEvent !== null) MG.game.time.events.remove(this.loopEvent);
        this.Init();
    },
    // 클릭 하였다.
    onClick:function(){
        this.blockCount = 30;       // 한번 나오면 30층 동안은 안나온다.
        this.stopTimer();
        MG.playGameController.ShowExtendPupup();
    },
    setBlockCount:function(count){
        this.blockCount = count;
    },
    IsEnabled:function(){
        return this.isDoing;
    },
    // instanceHidden:function(){
    //
    // },
    // instanceShow:function(){
    //
    // },
};























// old ver...
// 'use strict';
//
// function ExtendObject() {
//     // 광고보고 칸늘리기 아이콘 게이지
//     this.arcGauge = [];
//
//     this.arcGauge[0] = MG.AddSprite(MG.gUiFixed, 80, 250, "UI_0", "Game_Btn_AD_BG.png");
//     this.arcGauge[0].anchor.setTo(0.5);
//     this.arcGauge[0].scale.setTo(0);
//
//     // 3초 이하 남았을때 경고 게이지
//     this.arcGauge[1] = MG.game.add.graphics(0, 0);
//     this.arcGauge[1].beginFill(0xf03673);
//     this.arcGauge[1].arc(80, 250, 45, 0, Math.PI*2);
//     this.arcGauge[1].endFill();
//
//     // 일반 게이지
//     this.arcGauge[2] = MG.game.add.graphics(0, 0);
//     this.arcGauge[2].beginFill(0x23a2f3);
//     this.arcGauge[2].arc(80, 250, 45, 0, Math.PI*2);
//     this.arcGauge[2].endFill();
//
//     this.arcGauge[3] = MG.game.add.graphics(0, 0);
//     this.arcGauge[3].beginFill(0xFFFFFF);
//     this.arcGauge[3].arc(80, 250, 45, MG.game.math.degToRad(-90), MG.game.math.degToRad(360-90+0), true, 360);
//     this.arcGauge[3].endFill();
//
//     this.arcGauge[4] = MG.game.add.sprite(80, 250, "UI_0", "Game_Btn_AD.png");
//     this.arcGauge[4].anchor.setTo(0.5, 0.5);
//     this.arcGauge[4].inputEnabled = true;
//     this.arcGauge[4].events.onInputUp.add( function () {this.onClick()}.bind(this) );
//
//     this.progress = 0;
//     this.blockCount = 0;
//     this.isDoing = false;
//     this.startTimeStemp = 0;
//
//     this.Hide();
// }
//
// ExtendObject.prototype = {
//     Init:function(){
//         this.progress = 0;
//         this.isDoing = false;
//         this.oldWidth = 0;
//
//         /*// 허리업 게이지
//         this.arcGauge[1].destroy();
//         this.arcGauge[1] = null;
//         this.arcGauge[1] = MG.game.add.graphics(0, 0);
//         this.arcGauge[1].beginFill(0xf03673);
//         this.arcGauge[1].arc(80, 250, 45, 0, Math.PI*2);
//         this.arcGauge[1].endFill();
//
//         // 일반 게이지
//         this.arcGauge[2].destroy();
//         this.arcGauge[2] = null;
//         this.arcGauge[2] = MG.game.add.graphics(0, 0);
//         this.arcGauge[2].beginFill(0x23a2f3);
//         this.arcGauge[2].arc(80, 250, 45, 0, Math.PI*2);
//         this.arcGauge[2].endFill();
//
//         // 게이지 감소 마스크
//         this.arcGauge[3].destroy();
//         this.arcGauge[3] = null;
//         this.arcGauge[3] = MG.game.add.graphics(0, 0);
//         this.arcGauge[3].beginFill(0xFFFFFF);
//         this.arcGauge[3].arc(80, 250, 45, MG.game.math.degToRad(-90), MG.game.math.degToRad(360-90+0), true, 360);
//         this.arcGauge[3].endFill();
//
//         this.arcGauge[4].destroy();
//         this.arcGauge[4] = null;
//         this.arcGauge[4] = MG.game.add.sprite(80, 250, "UI_0", "Game_Btn_AD.png");
//         this.arcGauge[4].anchor.setTo(0.5, 0.5);
//         this.arcGauge[4].inputEnabled = true;
//         this.arcGauge[4].events.onInputUp.add( function () {this.onClick()}.bind(this) );*/
//
//         this.Hide();
//     },
//     Show:function(){
//         for(var i=0; i<this.arcGauge.length; i++){
//             this.arcGauge[i].visible = true;
//         }
//     },
//     Hide:function(){
//         for(var i=0; i<this.arcGauge.length; i++){
//             this.arcGauge[i].visible = false;
//         }
//     },
//     // 확장 당첨 여부 조사
//     isApply:function(){
//         if(isPlayingSuperSkip || isPlayingDiamondReward || isPlayingGoldReward) return;
//         if(gPlayData.floor_count <= 10) return;
//         if(--this.blockCount > 0 || this.isDoing) return;
//         var _w = parseInt((MG.uiGame.GetLastTile().w / BASE_TILE_WIDTH) * 100);
//
//         if(this.oldWidth >= 30 && _w < 30){     // 넓이 30% 이하로 떨어지는 순간 1번 발동
//             console.log("::::::::::::::::: 확장 기능 뽑기 실행  ::::::: width = " + _w);
//             if(Random.Range(0, 10) <= 2) {   // 30% 확률로 나온다.
//                 // 확장 기능 당첨
//                 this.Show();
//                 this.startTimer();
//                 this.isDoing = true;
//                 this.oldWidth = 0;
//             }else{
//                 this.oldWidth = _w;
//             }
//         }else{
//             this.oldWidth = _w;
//         }
//
//     },
//     startTimer:function(){
//         this.startTimeStemp = MG.game.time.time;
//     },
//     updateTimer:function(){
//         if(this.isDoing === false) return;
//         var _gap = (MG.game.time.time - this.startTimeStemp);
//         var _gapRatio = _gap / 15000;
//         this.progress = _gapRatio * 100;//parseInt(360 * _gapRatio);
//         this.arcGauge[3].clear();
//         this.arcGauge[3].beginFill(0xFFFFFF);
//         this.arcGauge[3].arc(80, 250, 45, Phaser.Math.degToRad(-90), Phaser.Math.degToRad(270 + (3.59999 * this.progress)), true, 360);
//         this.arcGauge[3].endFill();
//         if(this.progress >= 80) this.arcGauge[2].visible = false;
//         if(this.progress >= 100) this.stopTimer();
//     },
//     stopTimer:function(){
//         this.isDoing = false;
//         this.blockCount = 30;       // 한번 나오면 30층 동안은 안나온다.
//         this.Init();
//     },
//     // 클릭 하였다.
//     onClick:function(){
//         this.blockCount = 30;       // 한번 나오면 30층 동안은 안나온다.
//         this.stopTimer();
//         MG.playGameController.ShowExtendPupup();
//     },
//     setBlockCount:function(count){
//         this.blockCount = count;
//     },
//     IsEnabled:function(){
//         return this.isDoing;
//     },
//     // instanceHidden:function(){
//     //
//     // },
//     // instanceShow:function(){
//     //
//     // },
// };
'use strict';

function UI_Map(parent) {
    this.main = MG.game.add.group();
    if (parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.buyPopup = null;
    this.products = [];
    this.inx = [];
    this.prices = [0, 5000, 20000, 300000];
    this.isOver = false;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {
        this.Hide();
    }, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 560, 1080, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // // 타이틀
    // this.leftRoof = MG.AddSprite(this.bg, 0, -490, "UI_0", "Shop_Roof.png");
    // this.leftRoof.anchor.setTo(1, 0.5);
    // this.rightRoof = MG.AddSprite(this.bg, 0, -490, "UI_0", "Shop_Roof.png");
    // this.rightRoof.anchor.setTo(1, 0.5);
    // this.rightRoof.scale.setTo(-1, 1);
    // this.titleDeco = MG.AddSprite(this.bg, 0, -650, "UI_0", "Shop_TopDesign_Building.png");
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -570, "UI_0", "Frame_Shop_Title.png", 378, 92, {top:0, bottom:0, left:26, right:26});
    this.line = MG.AddSprite(this.bg, 0, -435, 'UI_0', 'Shop_Tower_Line_Top.png');
    // this.line.anchor.setTo(0.5, 0);
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    this.txtTitle.ReSize(MG.LM.Get('pop_map'), 365);

    // 코인 아이콘
    this.coinIcon = MG.AddSprite(this.bg, -263, -563, "UI_0", "Icon_Coin_White.png");
    this.txtCoin = MG.AddText(this.coinIcon, 30, 3, '0', {font:"30px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal",  align:"left"});
    this.txtCoin.anchor.setTo(0, 0.5);

    // 닫기 버튼
    this.btnExit = MG.AddSpriteButton(this.bg, 255, -515, "UI_0", "Btn_Popup_Exit.png");
    this.btnExit.events.onInputUp.add(function () {
        this.Hide();
    }, this);
    this.btnExit.anchor.setTo(1, 0);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnExit, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        this.Hide();
    }, this);

    // 상품 1 /////////////////////////////////////////////////////////////
    this.inx[0] = 0;
    this.products[0] = MG.AddSpriteButtonScale(this.bg, -122, -200, "UI_0", "Shop_Tower_Sub1.png");
    this.products[0].events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }

            this.ResetList();
            this.SetSkinmap(0);

    }, this);
    this.products[0].events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.products[0].events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.products[0].name = MG.AddText(this.products[0], 0, -162, '', {font:"28px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[0].name.ReSize(MG.LM.Get('map_name1'), 250);
    this.products[0].coin = MG.AddSprite(this.products[0], -240, 35, 'UI_0', 'Lobby_Coin.png');
    this.products[0].coin.scale.setTo(0.6);
    this.products[0].coinCount = MG.AddText(this.products[0], 10, -80, '', {font:"30px " + gFontFace, fill:"#ffc700", fontWeight: "normal", align:"left"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[0].coinCount.anchor.setTo(0, 0.5);

    // 상품 2 ////////////////////////////////////////////////////////////
    this.inx[1] = 0;
    this.products[1] = MG.AddSpriteButtonScale(this.bg, 122, -200, "UI_0", "Shop_Tower_Sub2.png");
    this.products[1].events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }

        if(kData.t1 === "-1"){
            // 미보유 중이다. 구매 처리해주자.
            if(this.prices[1] > kData.cc){
                // ver02.. 코인 모자르다. 코인 구매 안내창 오픈
                MG.uiShop.Show();
                // // ver01.. 코인 모자르다. 코인 구매 안내창 오픈
                // MG.uiPopup.Show("YES_NO", MG.LM.Get('nerr'), "Shop_Coin_Line_Top.png", MG.LM.Get('nerr3'),
                //     function(){
                //         MG.uiShop.Show();
                //     }.bind(this),
                //     function(){
                //     }.bind(this));
            }else{
                // 구매 시작...
                // 구매 확인 창 오픈
                if(this.buyPopup === null){
                    this.buyPopup = new UI_BuyTower(MG.gPopup);
                }

                // ver02 : 구매팝업창
                this.buyPopup.Show( MG.LM.Get('map_name2'), InsertComma(this.prices[1]), "YES_NO", MG.LM.Get('buy_popup'), "Popup_BuyTower_Line_Top.png", MG.LM.Get('buy_text_01'),
                    function(){
                        // Yes
                        // MG.NM.PurchaseTower(this.inx[1], function(data){
                        kData.cc -= this.prices[1];
                        MG.uiGame.UpdateCoin(kData.cc);
                        this.UpdateCoin(kData.cc);
                        MG.NM.LocalSave();
                        MG.uiPopup.Show("YES", MG.LM.Get('buy_popup'), "Popup_BuyTower_Line_Top.png", MG.LM.Get('buy_text_02'),
                            function(){
                            }.bind(this));
                        this.ResetList();
                        this.SetSkinmap(1);
                        // }.bind(this));
                    }.bind(this),
                    function(){
                        // No
                    }.bind(this));
            }
        }else{
            // 보유중이다. 타일 교체 해주자.
            this.SetSkinmap(1);
            // MG.NM.UseTower(this.inx[1], function(){
            //     gTileSkin = 2;
            //     this.SetUseEdge(1);
            //     MG.playGameController.TileSkinRefresh();
            // }.bind(this));
        }
    }, this);
    this.products[1].events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.products[1].events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.products[1].name = MG.AddText(this.products[1], 0, -167, '', {font:"28px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[1].name.ReSize(MG.LM.Get('map_name2'), 250);
    this.products[1].skill1 = MG.AddText(this.products[1], 0, -137, '', {font:"18px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[1].skill1.ReSize(MG.LM.Get('map2_skill1'), 250);
    this.products[1].coin = MG.AddSprite(this.products[1], -55, -97, 'UI_0', 'Icon_Coin_White.png');
    this.products[1].coin.scale.setTo(0.8);
    this.products[1].coinCount = MG.AddText(this.products[1], -35, -93, InsertComma(this.prices[1]), {font:"30px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"left"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[1].coinCount.anchor.setTo(0, 0.5);
    // 상품 3
    this.inx[2] = 0;
    this.products[2] = MG.AddSpriteButtonScale(this.bg, -122, 205, "UI_0", "Shop_Tower_Sub3.png");
    this.products[2].events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }

        if(kData.t2 === "-1"){
            // 미보유 중이다. 구매 처리해주자.
            if(this.prices[2] > kData.cc){
                // ver02.. 코인 모자르다. 코인 구매 안내창 오픈
                MG.uiShop.Show();
                // // ver01. 코인 모자르다.
                // MG.uiPopup.Show("YES_NO", MG.LM.Get('nerr'), "Shop_Coin_Line_Top.png", MG.LM.Get('nerr3'),
                //     function(){
                //         MG.uiShop.Show();
                //     }.bind(this),
                //     function(){
                //     }.bind(this));
            }else{
                // 구매 시작...
                // 구매 확인 창 오픈
                if(this.buyPopup === null){
                    this.buyPopup = new UI_BuyTower(MG.gPopup);
                }

                // ver2 : 구매확인창
                this.buyPopup.Show(MG.LM.Get('map_name3'), InsertComma(this.prices[2]), "YES_NO", MG.LM.Get('buy_popup'), "Popup_BuyTower_Line_Top.png", MG.LM.Get('buy_text_01'),
                    function(){
                        // Yes
                        // MG.NM.PurchaseTower(this.inx[2], function(data){
                        kData.cc -= this.prices[2];
                        MG.uiGame.UpdateCoin(kData.cc);
                        this.UpdateCoin(kData.cc);
                        MG.NM.LocalSave();
                        MG.uiPopup.Show("YES", MG.LM.Get('buy_popup'), "Popup_BuyTower_Line_Top.png", MG.LM.Get('buy_text_02'),
                            function(){
                            }.bind(this));
                        this.ResetList();
                        this.SetSkinmap(2);
                        // }.bind(this));
                    }.bind(this),
                    function(){
                        // No
                    }.bind(this));
            }
        }else{
            // 보유중이다. 타일 교체 해주자.
            this.SetSkinmap(2);
            // MG.NM.UseTower(this.inx[2], function(){
            //     gTileSkin = 3;
            //     this.SetUseEdge(2);
            //     MG.playGameController.TileSkinRefresh();
            // }.bind(this));
        }
    }, this);
    this.products[2].events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.products[2].events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.products[2].name = MG.AddText(this.products[2], 0, -170, '', {font:"28px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[2].name.ReSize(MG.LM.Get('map_name3'), 250);
    this.products[2].skill1 = MG.AddText(this.products[2], 0, -140, '', {font:"18px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[2].skill1.ReSize(MG.LM.Get('map3_skill1'), 250);
    this.products[2].skill2 = MG.AddText(this.products[2], 0, -110, '', {font:"18px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[2].skill2.ReSize(MG.LM.Get('map3_skill2'), 250);
    this.products[2].coin = MG.AddSprite(this.products[2], -55, -62, 'UI_0', 'Icon_Coin_White.png');
    this.products[2].coin.scale.setTo(0.8);
    this.products[2].coinCount = MG.AddText(this.products[2], -35, -58, InsertComma(this.prices[2]), {font:"30px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"left"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[2].coinCount.anchor.setTo(0, 0.5);
    // 상품 4
    this.inx[3] = 0;
    this.products[3] = MG.AddSpriteButtonScale(this.bg, 122, 205, "UI_0", "Shop_Tower_Sub4.png");
    this.products[3].events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }

        if(kData.t3 === "-1"){
            // 미보유 중이다. 구매 처리해주자.
            if(this.prices[3] > kData.cc){
                // ver02.. 코인 모자르다. 코인 구매 안내창 오픈
                MG.uiShop.Show();
                // // ver01. 코인 모자르다.
                // MG.uiPopup.Show("YES_NO", MG.LM.Get('nerr'), "Shop_Coin_Line_Top.png", MG.LM.Get('nerr3'),
                //     function(){
                //         MG.uiShop.Show();
                //     }.bind(this),
                //     function(){
                //     }.bind(this));
            }else{
                // 구매 시작...
                // 구매 확인 창 오픈
                if(this.buyPopup === null){
                    this.buyPopup = new UI_BuyTower(MG.gPopup);
                }

                // ver2 : 구매확인창
                this.buyPopup.Show(MG.LM.Get('map_name4'), InsertComma(this.prices[3]), "YES_NO", MG.LM.Get('buy_popup'), "Popup_BuyTower_Line_Top.png", MG.LM.Get('buy_text_01'),
                    function(){
                        // Yes
                        // MG.NM.PurchaseTower(this.inx[3], function(data){

                        kData.cc -= this.prices[3];
                        MG.uiGame.UpdateCoin(kData.cc);
                        this.UpdateCoin(kData.cc);
                        MG.NM.LocalSave();
                        MG.uiPopup.Show("YES", MG.LM.Get('buy_popup'), "Popup_BuyTower_Line_Top.png", MG.LM.Get('buy_text_02'),
                            function(){
                            }.bind(this));
                        this.ResetList();
                        this.SetSkinmap(3);
                        // }.bind(this));
                    }.bind(this),
                    function(){
                        // No
                    }.bind(this));
            }
        }else{
            // 보유중이다. 타일 교체 해주자.
            this.SetSkinmap(3);
            // MG.NM.UseTower(this.inx[3], function(){
            //     gTileSkin = 4;
            //     this.SetUseEdge(3);
            //     MG.playGameController.TileSkinRefresh();
            // }.bind(this));
        }
    }, this);
    this.products[3].events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.products[3].events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    this.products[3].name = MG.AddText(this.products[3], 0, -170, '', {font:"28px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[3].name.ReSize(MG.LM.Get('map_name4'), 250);
    this.products[3].skill1 = MG.AddText(this.products[3], 0, -140, '', {font:"18px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[3].skill1.ReSize(MG.LM.Get('map4_skill1'), 250);
    this.products[3].skill2 = MG.AddText(this.products[3], 0, -110, '', {font:"18px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[3].skill2.ReSize(MG.LM.Get('map4_skill2'), 250);
    this.products[3].coin = MG.AddSprite(this.products[3], -60, -62, 'UI_0', 'Icon_Coin_White.png');
    this.products[3].coin.scale.setTo(0.8);
    this.products[3].coinCount = MG.AddText(this.products[3], -35, -58, InsertComma(this.prices[3]), {font:"30px SamsungOne700", fill:"#FFFFFF", fontWeight: "normal", align:"left"/*, stroke:"#202251", strokeThickness:6*/});
    this.products[3].coinCount.anchor.setTo(0, 0.5);

    // // 사용중인 타일 테두리
    // this.useTile = MG.AddSpriteNine(this.bg, 0, 0, "UI_0", "Shop_Map_Use.png", 578, 180, {top:28, bottom:28, left:28, right:28});

    //MG.AddSprite(this.txtTitle, 0, MG.game.height - 150, 'UI_0', 'Shop_Map_Line_Bottom.png');


    // this.txtEnd.ReSize(MG.LM.Get('btn_ok'), 320);
    this.btnEnd = MG.AddSpriteNineButton(this.bg, 0, 471, "UI_0", "Btn_A.png", 244, 70, {top:7, bottom:7, left:7, right:7});
    this.btnEnd.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        this.Hide();
    }, this);

    // 확인 버튼
    this.txtEnd = MG.AddText(this.btnEnd, 0, 3, '', {font:"33px SamsungOne700", fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});

    this.main.visible = false;
}

UI_Map.prototype = {
    Show:function(){
        this.UpdateMap();
        this.UpdateCoin(kData.cc);
        this.main.visible = true;
        this.txtEnd.ReSize(MG.LM.Get('btn_ok'), 320);
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(false);

        // if(kData.t2 === "-1") kData.t2 = "0";    // debug : 미리보기위해 열어두다.

        // if(gIsStandAlone){
        //     this.main.visible = true;
        // }else{
        //     this.ResetList(function(){
        //          this.main.visible = true;
        //     }.bind(this));
        // }
    },
    Hide:function(){
        this.main.visible = false;
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(true);
    },
    IsShow:function(){
        return this.main.visible;
    },
    ResetList:function(){

        if(kData.t0 === "1") kData.t0 = "0";
        if(kData.t1 === "1") kData.t1 = "0";
        if(kData.t2 === "1") kData.t2 = "0";
        if(kData.t3 === "1") kData.t3 = "0";

        MG.NM.LocalSave();
    },
    UpdateCoin:function(num){
        if(num === undefined) num = kData.cc;
        this.txtCoin.text = InsertComma(num);
    },
    UpdateMap:function(){
        this.SetState(kData.t0, 0);
        this.SetState(kData.t1, 1);
        this.SetState(kData.t2, 2);
        this.SetState(kData.t3, 3);
    },
    SetState:function(state, inx){
        switch (state){
            case "0":
                // 보유 + 미사용
                this.products[inx].loadTexture("UI_0", "Shop_Tower_Sub" + (inx+1) + ".png");
                this.products[inx].coin.visible = false;
                this.products[inx].coinCount.visible = false;
                this.products[inx].inputEnable = true;
                break;

            case "1":
                // 보유 + 사용중
                this.products[inx].loadTexture("UI_0", "Shop_Tower_Sub" + (inx+1) + ".png");
                this.products[inx].coin.visible = false;
                this.products[inx].coinCount.visible = false;
                this.products[inx].inputEnable = false;
                this.SetUseEdge(inx);
                break;

            case "-1":
                // 미보유
                this.products[inx].loadTexture("UI_0", "Shop_Tower_Sub" + (inx+1) + "_Gray.png");
                this.products[inx].coin.visible = true;
                this.products[inx].coinCount.visible = true;
                this.products[inx].inputEnable = true;
                break;
        }
    },
    SetUseEdge:function(){
        if(kData.t0 === "0") this.products[0].alpha = 0.4;
        if(kData.t1 === "0") this.products[1].alpha = 0.4;
        if(kData.t2 === "0") this.products[2].alpha = 0.4;
        if(kData.t3 === "0") this.products[3].alpha = 0.4;
        if(kData.t0 === "1") this.products[0].alpha = 1;
        if(kData.t1 === "1") this.products[1].alpha = 1;
        if(kData.t2 === "1") this.products[2].alpha = 1;
        if(kData.t3 === "1") this.products[3].alpha = 1;
        //this.useTile.position.y = this.products[inx].position.y - 1;
    },
    SetSkinmap:function(inx){
        this.ResetList();
        //MG.NM.UseTower(this.inx[inx], function(){
        switch(inx){
            case 0:
                kData.t0 = "1";
                break;

            case 1:
                kData.t1 = "1";
                break;

            case 2:
                kData.t2 = "1";
                break;

            case 3:
                kData.t3 = "1";
                break;
        }

        gTileSkin = inx + 1;
        gBaseScore = parseInt(10 * gTileAddScore[inx]);
        this.SetUseEdge(inx);
        MG.playGameController.TileSkinRefresh();
        //}.bind(this));

        MG.NM.LocalSave();
        this.UpdateMap();
    }
};
'use strict';

function UI_Tutorial(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.isOver = false;
    this.iter = 1;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {
        this.Hide();
    }, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 560, 766, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -490, "UI_0", "quiz_bg.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -278, 'UI_0', 'Popup_Tutorial_Line_Top.png');
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.ReSize(MG.LM.Get('pop_tuto'), 270);
    this.txtTitle.anchor.setTo(0.5, 1);

    // 닫기 버튼 (로비로 이동)
    this.btnLobby = MG.AddSpriteButton(this.bg, 255, -358, "UI_0", "Btn_Popup_Exit.png");
    this.btnLobby.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        this.Hide();
    }, this);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnLobby, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        this.Hide();
    }, this);

    //// 제목
    //this.txtPicTitle = MG.AddText(this.bg, 0, -360, '', {font:"35px " + gFontFace, fill:"#66686F"});
    // 상단 창
    this.helpPic = MG.AddSprite(this.bg, 0, -99, "UI_0", "Popup_Help_Img_1.png");
    // 하단 창
    this.downSubBg = MG.AddSpriteNine(this.bg, 0, 153, "UI_0", "Popup_Tutorial_Text_Frame.png", 480, 200, {top:7, bottom:7, left:7, right:7});
    // 설명 글
    this.txtDoc = MG.AddText(this.downSubBg, 0, 0, '', {font:"27px " + gFontFace, fill:"#FFFFFF", wordWrap: true, wordWrapWidth: 470, align:"center"});
    // 이전 글로 이동 버튼
    this.btnLeft = MG.AddSpriteButton(this.bg, -90, 315, "UI_0", "Icon_Popup_Arrow.png");//MG.AddSpriteNineButtonScale(this.bg, -180, 330, "UI_0", "Popup_BuyTower_CoinFrame.png", 140, 129, {top:0, bottom:0, left:25, right:25});
    this.btnLeft.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        if(this.iter <= 1) return;
        this.Update(--this.iter);
    }, this);
    this.btnLeft.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnLeft.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);

    // 페이지 bg
    // this.pageBg = MG.AddSpriteNine(this.bg, 0, 325, "UI_0", "Popup_TextBox.png", 200, 109, {top:20, bottom:20, left:20, right:20});
    // this.pageBg.alpha = 0.5;
    this.txtPage = MG.AddText(this.bg, 0, 320, '1 / 5', {font:"30px " + gFontFace, fill:"#66686f", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    // 다음 글로 이동 버튼
    this.btnRight = MG.AddSpriteButton(this.bg, 90, 315, "UI_0", "Icon_Popup_Arrow.png");//MG.AddSpriteNineButtonScale(this.bg, 180, 330, "UI_0", "Popup_BuyTower_CoinFrame.png", 140, 129, {top:0, bottom:0, left:25, right:25});
    this.btnRight.scale.setTo(-1, 1);
    this.btnRight.events.onInputUp.add(function () {
        if(this.isOver) {
            this.isOver = false;
            return;
        }
        if(this.iter >= 5) return;
        this.Update(++this.iter);
    }, this);
    this.btnRight.events.onInputOut.add(function () {
        this.isOver = true;
    }, this);
    this.btnRight.events.onInputDown.add(function () {
        this.isOver = false;
    }, this);
    //MG.AddSprite(this.btnRight, 0, -5, "UI_0", "Icon_Popup_Arrow.png").scale.setTo(-1, 1);

    this.main.visible = false;
}

UI_Tutorial.prototype = {
    Init:function (){
        this.iter = 1;
        this.Update(this.iter);
    },
    Show:function(){
        this.bg.scale.set(0.1);
        this.Init();
        this.main.visible = true;
        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(false);
    },
    Hide:function(){
        this.main.visible = false;
        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(true);
    },
    IsShow:function(){
        return this.main.visible;
    },
    Update:function(iter){
        this.helpPic.loadTexture("UI_0", "Popup_Help_Img_" + iter + ".png");
        this.txtPage.text = iter + '/ 5';
        // this.txtPicTitle.ReSize(MG.LM.Get('tuto_name' + iter), 550);

        var _str = MG.LM.Get('tuto_text' + iter);
        var regType = /[0-9]/;
        var sUnicode = '0x202b';
        var sArab = String.fromCharCode(parseInt(sUnicode));

        if(gIsArabic) {
            if(_str.length <= 2 && regType.test(_str) === true) {
                this.txtDoc.text = "   " + sArab + "   " + _str;
            } else {
                this.txtDoc.ReSize(MG.ConvertArabic(_str), 580, 240);
            }
        } else {
            this.txtDoc.ReSize(_str.replace(/{E}/gi, "\n"), 580, 240);
        }
    }
};
'use strict';

function UI_Popup(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.yesCallBack = undefined;
    this.noCallBack = undefined;
    this.isOver = false;

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {}, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 410, 315, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 닫기 버튼
    this.btnExit = MG.AddSpriteButton(this.bg, 180, -132.5, "UI_0", "Btn_Popup_Exit.png");
    this.btnExit.events.onInputUp.add(function () {
        this.Hide();
    }, this);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnExit, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -240, "UI_0", "Frame_Popup_Title_Blue.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -52.5, 'UI_0', 'Shop_Tower_Line_Top.png');
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);

    // 본문 내용
    this.txtDoc = MG.AddText(this.bg, 0, 5, '', {font:"27px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // 예, 확인 버튼
    this.btnYes = MG.AddSpriteNineButtonScale(this.bg, -84, 82.5, "UI_0", "Btn_Frame.png", 160, 70, {top:9, bottom:9, left:9, right:9});
    this.btnYes.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        if(this.yesCallBack !== undefined) this.yesCallBack();
        this.Hide();
    }, this);
    this.txtYes = MG.AddText(this.btnYes, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    //this.txtYes.ReSize(MG.LM.Get('btn_yes'), 250);


    // 아니오 버튼
    this.btnNo = MG.AddSpriteNineButtonScale(this.bg, 84, 82.5, "UI_0", "Btn_Frame.png", 160, 70, {top:9, bottom:9, left:9, right:9});
    this.btnNo.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        if(this.noCallBack !== undefined) this.noCallBack();
        this.Hide();
    }, this);
    this.txtNo = MG.AddText(this.btnNo, 0, 3, '', {font:"33px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"/*, stroke:"#202251", strokeThickness:6*/});
    // this.txtNo.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);
    //this.txtNo.ReSize(MG.LM.Get('btn_no'), 250);

    this.main.visible = false;
}

UI_Popup.prototype = {
    Show:function(type, title, line, doc, yesCallBack, noCallBack){
        // this.txtTitle.text = title;
        this.txtTitle.ReSize(title, 270);
        // this.txtDoc.text = doc;
        this.txtDoc.ReSize(doc, 390, 80);
        this.txtYes.ReSize(MG.LM.Get('btn_yes'), 150);
        this.txtNo.ReSize(MG.LM.Get('btn_no'), 150);
        if(line !== undefined) this.line.loadTexture("UI_0", line);
        if(yesCallBack !== undefined) this.yesCallBack = yesCallBack;
        if(noCallBack !== undefined) this.noCallBack = noCallBack;
        switch(type){
            case "YES":
                this.btnYes.position.x = 0;
                this.txtYes.ReSize(MG.LM.Get('btn_ok'), 150);
                this.btnNo.visible = false;
                break;

            case "YES_NO":
                this.btnNo.visible = true;
                this.btnNo.position.x = -84;
                this.btnYes.position.x = 84;
                this.txtYes.ReSize(MG.LM.Get('btn_yes'), 150);
                break;
        }

        this.bg.scale.set(0.1);
        this.main.visible = true;
        MG.game.add.tween(this.bg.scale).to({x:1, y:1}, 500, Phaser.Easing.ElasticEx.Out, true);
    },
    Hide:function(){
        this.yesCallBack = undefined;
        this.noCallBack = undefined;
        this.main.visible = false;
    },
    IsShow:function(){
        return this.main.visible;
    }
};
'use strict';

function UI_SuperSkip(parent) {
    this.main = MG.game.add.group();
    if(parent)
        parent.addChild(this.main);
    else
        MG.game.world.addChild(this.main);

    this.isOver = false;
    this.bestFloor = [100, 200, 300];      // 돌파 층수 (오픈조건)
    this.jumpFloor = [50, 100, 200];      // 시작 층수 (자동쌓기)
    this.useCoin = [250, 500, 1000];      // 필요코인
    this.skipObject = [];
    for(var i=0; i<3; ++i){
        this.skipObject.push({bg:null, doc:null, btn:null, txtBtn:null, txtCondition:null, icon:null});
    }

    // 반투명 전체 배경
    this.bg_gradient = MG.AddSprite(this.main, MG.game.world.centerX, MG.game.height, "UI_0", "Popup_BG_Gradient.png");
    this.bg_gradient.anchor.setTo(0.5, 1);
    this.bg_gradient.scale.setTo(720, 4);
    this.drBG = MG.DrawRect(this.main, 0, 0, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.drBG.events.onInputDown.add(function () {
        MG.uiLobby.Hide();
        this.Hide();
        MG.playGameController.GameStart(0);      // 게임 시작
        MG.uiGame.Show("game");
    }, this);
    // 창틀
    this.bg = MG.AddSpriteNineButton(this.main, MG.game.world.centerX, MG.game.world.centerY, "UI_0", "Frame_Popup.png", 560, 572, {top:8, bottom:8, left:8, right:8});
    this.bg.events.onInputDown.add(function () {}, this);
    // 타이틀 틀
    // this.titleBg = MG.AddSpriteNine(this.bg, 0, -374, "UI_0", "Popup_Gameover_Point_Frame.png", 352, 84, {top:0, bottom:0, left:64, right:64});
    this.line = MG.AddSprite(this.bg, 0, -181, 'UI_0', 'Popup_Skip_Line_Top.png');
    // this.line.anchor.setTo(0.5, 0);
    this.txtTitle = MG.AddText(this.line, 0, -15, '', {font:"32px " + gFontFace, fill:"#798499", fontWeight: "normal"/*, stroke:"#202251", strokeThickness:6*/});
    this.txtTitle.anchor.setTo(0.5, 1);
    this.txtTitle.ReSize(MG.LM.Get('popup02'), 270);
    // '엘리베이터를 사용하시...'
    this.isUse = MG.AddText(this.line, 0, 65, '', {font:"27px " + gFontFace, fill:"#798499", fontWeight: "normal", align:"center"});
    this.isUse.ReSize(MG.LM.Get('popup03'), 600);

    // 닫기 버튼 (게임 이어진행)
    this.btnClose = MG.AddSpriteButton(this.bg, 255, -261, "UI_0", "Btn_Popup_Exit.png");
    this.btnClose.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        MG.uiLobby.Hide();
        this.Hide();
        MG.playGameController.GameStart(0);      // 게임 시작
        MG.uiGame.Show("game");
    }, this);
    this.btnClose.anchor.setTo(1, 0);
    // 닫기 버튼 (투명)
    this.btnExitT = MG.AddSpriteButton(this.btnClose, 0, 0, "UI_0", "blank_dot.png");
    this.btnExitT.scale.setTo(100);
    this.btnExitT.events.onInputUp.add(function () {
        MG.uiLobby.Hide();
        this.Hide();
        MG.playGameController.GameStart(0);      // 게임 시작
        MG.uiGame.Show("game");
    }, this);

    // 코인 아이콘
    this.coinIcon = MG.AddSprite(this.bg, -263, -309, "UI_0", "Icon_Coin_White.png");
    this.txtCoin = MG.AddText(this.coinIcon, 30, 3, '0', {font:"30px " + gFontFace, fill:"#ffffff", fontWeight: "normal",  align:"left"});
    this.txtCoin.anchor.setTo(0, 0.5);

    // 50층 스킵
    this.skipObject[0].bg = MG.AddSpriteNine(this.bg, 0, -30, "UI_0", "Popup_Skip_Frame_1.png", 480, 100, {top:8, bottom:8, left:8, right:8});
    MG.AddSprite(this.skipObject[0].bg, -190, 35, "UI_0", "Popup_Skip_Arrow_1.png");
    this.skipObject[0].doc = MG.AddText(this.skipObject[0].bg, -43, 3, '', {font:"26px " + gFontFace, fill:"#FFFFFF", align:"center"});
    this.skipObject[0].doc.ReSize(MG.LM.Get('popup04', this.jumpFloor[0]), 200);

    //this.skipObject[0].doc.addColor('#FFFFFF', 3);
    this.skipObject[0].btn = MG.AddSpriteNineButtonScale(this.skipObject[0].bg, 150, 2, "UI_0", "Btn_Skip_Frame1.png", 140, 60, {top:9, bottom:9, left:9, right:9});
    this.skipObject[0].txtBtn = MG.AddText(this.skipObject[0].btn, 15, 3, this.useCoin[0], {font:"27px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal", align:"center"});
    // this.skipObject[0].txtBtn.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);
    this.skipObject[0].txtCondition = MG.AddText(this.skipObject[0].doc, 0, 36, "", {font:"20px " + gFontFace, fill:"#FFFFFF", align:"center"});
    this.skipObject[0].txtCondition.ReSize(MG.LM.Get('popup06', this.bestFloor[0]), 130);
    // this.skipObject[0].txtCondition.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);
    this.skipObject[0].txtCondition.visible = false;
    this.skipObject[0].icon = MG.AddSprite(this.skipObject[0].txtBtn, (this.skipObject[0].txtBtn.position.x - ((this.skipObject[0].txtBtn.width * 0.5) + 30)), -3, 'UI_0', 'Popup_Skip_Coin.png');
    // this.skipObject[0].icon.scale.set(0.6); //동전 아이콘
    this.skipObject[0].btn.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        // if(gIsStandAlone){
        //     MG.playGameController.GameStart(25);      // 게임 시작
        //     MG.uiGame.Show("game");
        //     this.Hide();
        // }else{
            if(kData.cc < this.useCoin[0]){
                // MG.uiPopup.Show("YES", MG.LM.Get('nerr'), MG.LM.Get('nerr3'),
                //     function(){
                //     }.bind(this));
                MG.uiPopup.Show("YES_NO", MG.LM.Get('nerr'), "Shop_Coin_Line_Top.png", MG.LM.Get('nerr3'),
                    function(){
                        MG.uiShop.Show();
                        //this.Hide();
                    }.bind(this),
                    function(){
                    }.bind(this));
            }else{
                kData.cc -= this.useCoin[0];
                this.UpdateCoin();
                MG.NM.LocalSave();
                MG.playGameController.GameStart(this.jumpFloor[0]);      // 게임 시작
                MG.uiGame.Show("game");
                this.Hide();
                MG.uiLobby.Hide();
            }
        // }

    }, this);

    // 100층 스킵
    this.skipObject[1].bg = MG.AddSpriteNine(this.bg, 0, 78, "UI_0", "Popup_Skip_Frame_2.png", 480, 100, {top:8, bottom:8, left:8, right:8});
    MG.AddSprite(this.skipObject[1].bg, -190, 20, "UI_0", "Popup_Skip_Arrow_2.png");
    this.skipObject[1].doc = MG.AddText(this.skipObject[1].bg, -43, 3, '', {font:"26px " + gFontFace, fill:"#FFFFFF", align:"center"});
    this.skipObject[1].doc.ReSize(MG.LM.Get('popup04', this.jumpFloor[1]), 200);
    //this.skipObject[1].doc.addColor('#FFFFFF', 3);
    this.skipObject[1].btn = MG.AddSpriteNineButtonScale(this.skipObject[1].bg, 150, 2, "UI_0", "Btn_Skip_Frame2.png", 140, 60, {top:9, bottom:9, left:9, right:9});
    this.skipObject[1].txtBtn = MG.AddText(this.skipObject[1].btn, 15, 3, '100', {font:"27px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal", align:"center"});
    // this.skipObject[1].txtBtn.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);
    this.skipObject[1].txtCondition = MG.AddText(this.skipObject[1].doc, 0, 36, "", {font:"20px " + gFontFace, fill:"#FFFFFF", align:"center"});
    this.skipObject[1].txtCondition.ReSize(MG.LM.Get('popup06', this.bestFloor[1]), 130);
    // this.skipObject[1].txtCondition.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);
    this.skipObject[1].txtCondition.visible = false;
    this.skipObject[1].icon = MG.AddSprite(this.skipObject[1].txtBtn, (this.skipObject[1].txtBtn.position.x - ((this.skipObject[1].txtBtn.width * 0.5) + 30)), -3, 'UI_0', 'Popup_Skip_Coin.png');
    // this.skipObject[1].icon.scale.set(0.6); //동전 아이콘
    this.skipObject[1].btn.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        // if(gIsStandAlone){
        //     MG.playGameController.GameStart(50);      // 게임 시작
        //     MG.uiGame.Show("game");
        //     this.Hide();
        // }else{
            if(kData.cc < this.useCoin[1]){
                // MG.uiPopup.Show("YES", MG.LM.Get('nerr'), MG.LM.Get('nerr3'),
                //     function(){
                //     }.bind(this));
                MG.uiPopup.Show("YES_NO", MG.LM.Get('nerr'), "Shop_Coin_Line_Top.png", MG.LM.Get('nerr3'),
                    function(){
                        MG.uiShop.Show();
                        //this.Hide();
                    }.bind(this),
                    function(){
                    }.bind(this));
            }else{
                kData.cc -= this.useCoin[1];
                this.UpdateCoin();
                MG.NM.LocalSave();
                MG.playGameController.GameStart(this.jumpFloor[1]);      // 게임 시작
                MG.uiGame.Show("game");
                this.Hide();
                MG.uiLobby.Hide();
            }
        // }

    }, this);

    // 100층 스킵
    this.skipObject[2].bg = MG.AddSpriteNine(this.bg, 0, 186, "UI_0", "Popup_Skip_Frame_3.png", 480, 100, {top:8, bottom:8, left:8, right:8});
    MG.AddSprite(this.skipObject[2].bg, -190, 5, "UI_0", "Popup_Skip_Arrow_3.png");
    this.skipObject[2].doc = MG.AddText(this.skipObject[2].bg, -43, 3, '', {font:"26px " + gFontFace, fill:"#FFFFFF", align:"center"});
    this.skipObject[2].doc.ReSize(MG.LM.Get('popup04', this.jumpFloor[2]), 200);
    //this.skipObject[2].doc.addColor('#FFFFFF', 4);
    this.skipObject[2].btn = MG.AddSpriteNineButtonScale(this.skipObject[2].bg, 150, 2, "UI_0", "Btn_Skip_Frame3.png", 140, 60, {top:9, bottom:9, left:9, right:9});
    this.skipObject[2].txtBtn = MG.AddText(this.skipObject[2].btn, 15, 3, '200', {font:"27px " + gFontFace, fill:"#FFFFFF", fontWeight: "normal", align:"center"});
    // this.skipObject[2].txtBtn.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);
    this.skipObject[2].txtCondition = MG.AddText(this.skipObject[2].doc, 0, 36, "", {font:"20px " + gFontFace, fill:"#FFFFFF", align:"center"});
    this.skipObject[2].txtCondition.ReSize(MG.LM.Get('popup06', this.bestFloor[2]), 150);
    // this.skipObject[2].txtCondition.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);
    this.skipObject[2].txtCondition.visible = false;
    this.skipObject[2].icon = MG.AddSprite(this.skipObject[2].txtBtn, (this.skipObject[2].txtBtn.position.x - ((this.skipObject[2].txtBtn.width * 0.5) + 35)), -3, 'UI_0', 'Popup_Skip_Coin.png');
    //this.skipObject[2].icon.scale.set(0.6); //동전 아이콘
    this.skipObject[2].btn.events.onInputUp.add(function () {
        if(!arguments[2]) return;
        // if(gIsStandAlone){
        //     MG.playGameController.GameStart(100);      // 게임 시작
        //     MG.uiGame.Show("game");
        //     this.Hide();
        // }else{
            if(kData.cc < this.useCoin[2]){
                // MG.uiPopup.Show("YES", MG.LM.Get('nerr'), MG.LM.Get('nerr3'),
                //     function(){
                //     }.bind(this));
                MG.uiPopup.Show("YES_NO", MG.LM.Get('nerr'), "Shop_Coin_Line_Top.png", MG.LM.Get('nerr3'),
                    function(){
                        MG.uiShop.Show();
                        //this.Hide();
                    }.bind(this),
                    function(){
                        //this.Hide();
                    }.bind(this));
            }else{
                kData.cc -= this.useCoin[2];
                this.UpdateCoin();
                MG.NM.LocalSave();
                MG.playGameController.GameStart(this.jumpFloor[2]);      // 게임 시작
                MG.uiGame.Show("game");
                this.Hide();
                MG.uiLobby.Hide();
            }
        // }
    }, this);

    this.main.visible = false;
}

UI_SuperSkip.prototype = {
    Show:function(){
        //console.log("::::: 스퍼스킵.최고층수 = " + gLobbyData.bf);

        // if(gIsStandAlone){
        //     // 슈퍼스킵창 열기
        //     this.SetSkipButton();
        //     this.main.visible = true;
        // }else{

        this.UpdateCoin();

            if(kData.bf < this.bestFloor[0] /*|| gLobbyData.cc < 50*/){
                // 단 한개도 오픈하지못하였다. 바로 게임 시작
                MG.playGameController.GameStart(0);      // 게임 시작
                MG.uiGame.Show("game");
            }else{
                // 슈퍼스킵창 열기
                this.SetSkipButton();
                this.main.visible = true;
            }
        // }

        if(PopconGame.PhaserRanking && Define.RANKING_GAME) PopconGame.PhaserRanking.setRankIconVisible(false);

    },
    Hide:function(){
        this.main.visible = false;
    },
    IsShow:function(){
        return this.main.visible;
    },
    UpdateCoin:function(num){
        if(num === undefined) num = kData.cc;
        this.txtCoin.text = InsertComma(num);
    },
    SetSkipButton:function(){
        var _unlockCount = 0;
        var i=0;
        //var bestFloor = parseInt(gLobbyData.bf);
        //var coinCount = parseInt(gLobbyData.cc);
        // console.log("::::: 스퍼스킵.최고층수 = " + bestFloor);
        //console.log("::::: 스퍼스킵.코인카운트 = " + coinCount);

        // if(gIsStandAlone){
        //     // 버튼 락 풀어준다.
        //     for(i=0; i<_unlockCount; ++i){
        //         this.skipObject[i].btn.inputEnabled = true;
        //         this.skipObject[i].btn.alpha = 1;
        //         this.skipObject[i].icon.visible = true;
        //         this.skipObject[i].txtBtn.position.x = 25;
        //         this.skipObject[i].txtBtn.position.y = -5;
        //         this.skipObject[i].txtBtn.ReSize(this.useCoin[i], 150);
        //         this.skipObject[i].txtCondition.visible = false;
        //     }
        // }else{
            // 버튼 모두 잠가 준다.
            for(i=0; i<this.skipObject.length; ++i){
                this.skipObject[i].bg.alpha = 0.5;
                this.skipObject[i].btn.inputEnabled = false;
                this.skipObject[i].btn.alpha = 0.5;
                this.skipObject[i].icon.visible = false;
                this.skipObject[i].txtBtn.position.x = 0;
                this.skipObject[i].txtBtn.position.y = 3;
                this.skipObject[i].doc.position.y = -10;
                this.skipObject[i].txtCondition.visible = true;
                this.skipObject[i].txtBtn.ReSize(MG.LM.Get('popup05'), 150);
            }

            // 버튼 조건에 따라 풀기
            // 1. 최고 층수 조건
            if(kData.bf >= this.bestFloor[0] && kData.bf < this.bestFloor[1]) _unlockCount = 1;
            if(kData.bf >= this.bestFloor[1] && kData.bf < this.bestFloor[2]) _unlockCount = 2;
            if(kData.bf >= this.bestFloor[2]) _unlockCount = 3;


            // // 2. 코인 카운트 조건
            // if(coinCount >= 50 && bestFloor < 100 && coinCount >= 50) _unlockCount = 1;
            // if(bestFloor >= 100 && bestFloor < 200 && coinCount >= 100) _unlockCount = 2;
            // if(bestFloor >= 200 && coinCount >= 200) _unlockCount = 3;

            // if(gLobbyData.br >= this.useCoin[2]){
            //     _unlockCount = this.skipObject.length;
            // } else if(gLobbyData.br >= this.useCoin[1] && gLobbyData.br < this.useCoin[2]){
            //     _unlockCount = this.skipObject.length - 1;
            // } else if(gLobbyData.br >= this.useCoin[0] && gLobbyData.br < this.useCoin[1]){
            //     _unlockCount = this.skipObject.length - 2;
            // }

            // 버튼 락 풀어준다.
            for(i=0; i<_unlockCount; ++i){
                this.skipObject[i].bg.alpha = 1;
                this.skipObject[i].btn.inputEnabled = true;
                this.skipObject[i].btn.alpha = 1;
                this.skipObject[i].icon.visible = true;
                this.skipObject[i].doc.position.y = 3;
                this.skipObject[i].txtBtn.position.x = 10;
                this.skipObject[i].txtBtn.position.y = 3;
                this.skipObject[i].txtBtn.ReSize(this.useCoin[i], 150);
                this.skipObject[i].txtCondition.visible = false;
            }
        // }
    }
};
'use strict';

function PlayGameController() {
    this.isInput = false;
    this.swingSpeed = 1000;
    this.addSwingSpeed = 0;     // 오답 이거나 5초 이상 플레이 하지 않았을때 속도 패널티용
    this.dropSpeed = 50;
    this.mapDownSpeed = 200;
    //this.floorCount = 0;        // 현재 층수 이젠 전역변수 사용함.
    this.isAutoDrop = false;
    this.isResurrect = false;
    this.timerStemp = 0;
    this.rewardNumber = -1;
    this.resurrectionPopup = null;
    this.perfectSoundPlayGap = 0;
    this.tileScope = {min:0, max:0};
    this.tileScope.min = Math.round(MG.game.world.centerX - (Math.round(BASE_TILE_WIDTH * 0.5)));
    this.tileScope.max = Math.round(MG.game.world.centerX + (Math.round(BASE_TILE_WIDTH * 0.5)));
    //this.rewardDropSpeed = [700, 1260, 1708, 2066, 2353, 2582, 2766, ];
    this.skipEffect = [];
    this.skipEffect[0] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_1.png");
    this.skipEffect[0].alpha = 0;
    this.skipEffect[1] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_2.png");
    this.skipEffect[1].alpha = 0;
    this.skipEffect[2] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_3.png");
    this.skipEffect[2].alpha = 0;
    this.skipEffect[3] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_1.png");
    this.skipEffect[3].alpha = 0;
    this.skipEffect[4] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_2.png");
    this.skipEffect[4].alpha = 0;
    this.skipEffect[5] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_3.png");
    this.skipEffect[5].alpha = 0;
    this.skipEffect[6] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_1.png");
    this.skipEffect[6].alpha = 0;
    this.skipEffect[7] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_2.png");
    this.skipEffect[7].alpha = 0;
    this.skipEffect[8] = MG.AddSprite(MG.gPopup, 0, 0, "UI_0", "skip_3.png");
    this.skipEffect[8].alpha = 0;
    this.skipIndex = 0;
    this.perfectCount = 0;      // 연속 퍼펙트 카운트 (5회 이상 시 블록 사이즈 업)
    this.delayPenalty = {startTime:0, baseSpeed:0, targetSpeed:0};
    // 부활연출 스파인
    this.spResurrect = MG.game.add.spine(MG.game.world.centerX, MG.game.world.centerY , 'spResurrect');
    this.spResurrect.visible = false;
    this.spResurrect.timeScale = 0;
    // 특수타일 연출 스파인
    this.spEventTile = [];
    this.spEventTile[0] = MG.game.add.spine(MG.game.world.centerX, MG.game.world.centerY, 'spEventTile');
    this.spEventTile[0].visible = false;
    this.spEventTile[0].scale.setTo(2);
    this.spEventTile[0].timeScale = 0;
    this.spEventTile[1] = MG.game.add.spine(MG.game.world.centerX, MG.game.world.centerY, 'spEventTile');
    this.spEventTile[1].visible = false;
    this.spEventTile[1].scale.setTo(2);
    this.spEventTile[1].timeScale = 0;
    this.spEventTile[2] = MG.game.add.spine(MG.game.world.centerX, MG.game.world.centerY, 'spEventTile');
    this.spEventTile[2].visible = false;
    this.spEventTile[2].scale.setTo(2);
    this.spEventTile[2].timeScale = 0;
    this.spEventTile[3] = MG.game.add.spine(MG.game.world.centerX, MG.game.world.centerY, 'spEventTile');
    this.spEventTile[3].visible = false;
    this.spEventTile[3].scale.setTo(2);
    this.spEventTile[3].timeScale = 0;
    // 터치 입력 받는 투명 영역
    this.inputZone = MG.DrawRect(MG.gUiGame, 0, 150, MG.game.width, MG.game.height, 0x000000, 0, true);
    this.inputZone.events.onInputDown.add(function(){
        this.InputTouch();
    }, this);
    MG.game.input.onDown.add(this.InputTouchPosition, this);
    this.bgManager = new BackgroundManager();
    //this.movieController = new YoutubeRewardController();   // 유튜브 동영상 시청 리워드
    this.uiSuperSkip = new UI_SuperSkip(MG.gSuperSkipPopup);     // 슈퍼스킵 창
    this.uiDiamondReward = new UI_DiaRewardPopup(MG.gPopup);     // 다이아몬드타일 리워드 창
    this.extendRewardPopup = new UI_ExtendPopup(MG.gPopup);              // 광고보고 확장하기
    this.extendObject = new ExtendObject();                         // 광고보고 확장하기 아이콘
    //this.isExtend = false;
}

PlayGameController.prototype = {
    Init:function(){
        //gStartTime = new Date().getTime();
        this.bgManager.Init();
        gPlayData = {"score":0, "quiz_count":0, "good_answer":0, "get_coin":0, "floor_count":0};
        this.isInput = false;
        this.swingSpeed = 1000;
        this.addSwingSpeed = 0;
        this.dropSpeed = 50;
        this.mapDownSpeed = 200;
        this.score = 0;
        this.isAutoDrop = false;
        this.isResurrect = false;
        this.perfectCount = 0;
        this.skipIndex = 0;
        this.InitDelayPenalty();
        this.extendObject.Init();
        this.isExtend = false;
    },
    GetTilScope:function(){
       return this.tileScope;
    },
    UpdateTimer:function(){
        // Game.update() 함수에서 호출함.
        //this.extendObject.updateTimer();
        this.UpdateGoldTileBenefit();
    },
    // 타일스킨 교체
    TileSkinRefresh:function(cb){
        MG.uiGame.Refresh();
        this.bgManager.Refresh();
        if(cb !== undefined) cb();
    },
    // 게임 시작
    GameStart:function(f){
        MG.NM.start();
        MG.specialTileManager.init();
        MG.uiLobby.Hide();
        gSkipFloor.count = f;
        gSkipFloor.index = 0;
        gWatchingAdCount = 0;

        switch (f){
            case 50:
                gSkipFloor.index = 1;
                break;

            case 100:
                gSkipFloor.index = 2;
                break;

            case 200:
                gSkipFloor.index = 3;
                break;
        }

        //if(gIsStandAlone){
            /////////// 게임 시작 /////////////////////////
            if(gSkipFloor.index > 0){
                // 슈퍼스킵 발동
                MG.uiGame.SetZoom("game", false);        // this.Spawn(); 포함
                setTimeout(function(){ this.StartSuperSkip(); }.bind(this), 450);
            } else {
                // 일반모드
                MG.uiGame.SetZoom("game", true);        // this.Spawn(); 포함
                setTimeout(function(){ this.isInput = true; }.bind(this), 650);
                setTimeout(function() { MG.timerManager.DelayListener(); }, 600);
                //if(gDebug) MG.game.time.events.loop(Phaser.Timer.SECOND * 0.5, this.InputTouch, this);
            }
        // }else{
        //     MG.NM.StartGamePlay(gSkipFloor.index, function (data) {
        //         // uiManager.Loading_FullScreen(false);
        //         if (data.resultCode === "1") {
        //             gLogTock = data.logTock;
        //             gStartTime = new Date().getTime();
        //             MG.uiGame.UpdateCoin(data.oc);
        //
        //             /////////// 게임 시작 /////////////////////////
        //             if(gSkipFloor.index > 0){
        //                 // 슈퍼스킵 발동
        //                 MG.uiGame.SetZoom("game", false);        // this.Spawn(); 포함
        //                 setTimeout(function(){ this.StartSuperSkip(); }.bind(this), 450);
        //             } else {
        //                 // 일반모드
        //                 MG.uiGame.SetZoom("game", true);        // this.Spawn(); 포함
        //                 setTimeout(function(){ this.isInput = true; }.bind(this), 650);
        //                 setTimeout(function() { MG.timerManager.DelayListener(); }, 600);
        //                 //if(gDebug) MG.game.time.events.loop(Phaser.Timer.SECOND * 0.5, this.InputTouch, this);
        //             }
        //         } else {
        //             MG.NM.ShowMessage("error", "", "게임을 실행 할 수 없습니다.");
        //             MG.uiPopup.Show("YES", "에러", "게임을 실행 할 수 없습니다.",
        //                 function(){
        //                     // 로비로 돌아가자.
        //                     MG.uiGame.Show("lobby");
        //                     MG.uiLobby.Show();
        //                 }.bind(this));
        //         }
        //     }.bind(this));
        // }
    },
    // 로비로 이동
    GotoLobby:function(){
        MG.uiGame.Init();
        MG.coinManager.Init();
        MG.playGameController.Init();
        MG.uiGame.Show("lobby");
        MG.uiLobby.Show();
        console.log('gotolobby()');
        //MSSDK.gameOver(); //게임스낵 게임오버
    },
    // 게임 종료 오버
    GameOver:function(){
        //this.isInput = false;
        //Game.prototype.setTouchPosition();
        if(this.extendObject.IsEnabled()) this.extendObject.stopTimer();
        MG.timerManager.StopDelayListener();    // 플레이 지연 이벤트 정지
        if(this.isResurrect === false) {
            setTimeout(function(){ this.ShowResurrectPopup(); }.bind(this), 1000);
            return;
        }
        MSSDK.gameOver();//GameSnacks
        MG.NM.end({type:'gameover'});
        // MG.StopBgm('game_bgm');
        // MG.PlayAudio('gameOver');
        MG.coinManager.Init();
        setTimeout(function(){ MG.uiGameOver.ShowReady(); }, 1000);
    },
    // 게임 다시하기
    GameRestart:function(){
        MG.PlayBgm('game_bgm', true);
        MG.SetBgmVolume('game_bgm', 0.5);
        MG.uiGame.Init();
        MG.coinManager.Init();
        MG.playGameController.Init();
        MG.specialTileManager.init();
        MG.playGameController.uiSuperSkip.Show();       // 슈퍼스킵 창 열기    //MG.playGameController.GameStart();
        if(MG.playGameController.uiSuperSkip.IsShow() === true) MG.uiLobby.Show();
    },
    // 확장 할꺼니? (확장 팝업 오픈)
    ShowExtendPupup:function(){
        if(this.extendRewardPopup === null){
            this.extendRewardPopup = new UI_ExtendPopup(MG.gPopup);
        }

        this.extendRewardPopup.Show("YES_NO", MG.LM.Get('extend'), "Popup_AD_Line_Top.png", MG.LM.Get('extend_text'),
            function(){
                //if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                if(kData.isAudio) MG.StopBgm('game_bgm');
                gIsGetReward = false;
                gRewardName = "extend";

                ShowAD("reward", "extend", function () {
                    if(gIsGetReward) return;
                    gIsGetReward = true;

                    if(Define.PID == "100010" || Define.PID == "100026"){
                        // 캐시워크다
                    }else{
                        // 핫쉐어다
                        this.RewardExtend();
                    }
                }.bind(this),function () {
                    MG.uiPopup.Show("YES", MG.LM.Get('ad'), "Popup_AD_Line_Top.png", MG.LM.Get('failAD'), function(){
                        if(kData.isAudio) {
                            MG.PlayBgm('game_bgm', true);
                            MG.SetBgmVolume('game_bgm', 0.5);
                        }
                    }, function(){
                        if(kData.isAudio) {
                            MG.PlayBgm('game_bgm', true);
                            MG.SetBgmVolume('game_bgm', 0.5);
                        }
                    });
                }, false);
            }.bind(this),
            function(){
            }.bind(this));
    },
    RewardExtend:function(){
        console.log(":::: RewardExtend() :::");
        gRewardName = "";
        Define.iTimeStemp = new Date().getTime();
        if(kData.isAudio) {
            MG.PlayBgm('game_bgm', true);
            MG.SetBgmVolume('game_bgm', 0.5);
        }
        // 30칸 지나기전에는 안나온다. MG.specialTileManager.watchingAD();
        MG.uiGame.GetNowTile().Init();              // 기존 타일은 초기화 해주자.
        setTimeout(function(){
            MG.playGameController.SetExtend();       // 확장 리워드 실행
        }.bind(this), 500);

        setTimeout(function(){
            gIsGetReward = false;
        }, 1000);
    },
    SetExtend:function(){
        MG.PlayAudio('resurrect');
        this.spResurrect.visible = true;
        this.spResurrect.timeScale = 1;
        // var _h = MG.uiGame.GetLastTile().y;
        // if(this.score <= 4) _h -= 70;
        this.spResurrect.position.y = MG.uiGame.GetLastYposResurrect() + gTILE_HEIGHT;      // 한칸 위에 나와서 +해줌
        this.spResurrect.setAnimationByName(0, "Repair", false);
        this.spResurrect.onEvent.addOnce(function (i,e) {

            MG.uiGame.SpawnExtend();
            MG.timerManager.DelayListener();        // 플레이 지연 이벤트 시작
            if(kData.isAudio) {
                MG.PlayBgm('game_bgm', true);
                MG.SetBgmVolume('game_bgm', 0.5);
            }
        });
        // setTimeout(function(){ MG.uiGame.SpawnResurrect(); }, 2000);
        this.spResurrect.onComplete.addOnce(function (trackIndex, count) {
            switch (trackIndex) {
                case 0:
                    this.spResurrect.visible = false;
                    this.spResurrect.timeScale = 0;
                    break;
            }
        }, this);
    },
    // 부활 할꺼니? (부활 팝업 오픈)
    ShowResurrectPopup:function(){
        if(this.resurrectionPopup === null){
            this.resurrectionPopup = new UI_ResurrectionPopup(MG.gPopup);
        }
        this.isResurrect = true;
        if(gIsRevival === false) MG.uiGame.SetRevivalIcon(false);
        this.resurrectionPopup.Show("YES_NO", MG.LM.Get('pop_resurrection'), "Popup_Resurrection_Line_Top.png", MG.LM.Get('resurrection_text_02'),
            function(){
                if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                gMovieIndex = 4;        // 부활은 4
                if(kData.isAudio) MG.StopBgm('game_bgm');
                gIsGetReward = false;
                gRewardName = "revive";


                ShowAD("reward", "revive", function () {
                    if(gIsGetReward) return;
                    gIsGetReward = true;

                    if(Define.PID == "100010" || Define.PID == "100026"){
                        // 캐시워크다
                    }else{
                        // 핫쉐어다
                        this.RewardResurrect();
                    }

                }.bind(this),function () {
                    MG.uiPopup.Show("YES", MG.LM.Get('ad'), "Popup_AD_Line_Top.png", MG.LM.Get('failAD'), function(){
                        if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                        MG.playGameController.GameOver();
                    }.bind(this), function(){
                        if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                        MG.playGameController.GameOver();
                    }.bind(this));
                }.bind(this), false);
            }.bind(this),
            function(){
                if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                this.GameOver();
            }.bind(this));
    },
    RewardResurrect:function(){
        gRewardName = "";
        Define.iTimeStemp = new Date().getTime();
        if(kData.isAudio) {
            MG.PlayBgm('game_bgm', true);
            MG.SetBgmVolume('game_bgm', 0.5);
        }
        MG.specialTileManager.watchingAD();
        setTimeout(function(){
            MG.playGameController.SetResurrect();       // 부활 (이어하기) 리워드 실행
        }.bind(this), 500);

        setTimeout(function(){
            gIsGetReward = false;
        }, 1000);
    },
    // 부활 시작 연출 (이어하기 시작연출)
    SetResurrect:function(){
        //PopconGame.Sdk.log("2");//console.log(":::::::::::: 게임 부활 재시작 :::::::::::::::::");
        //MG.NM.start();
        MG.PlayAudio('resurrect');
        this.spResurrect.visible = true;
        this.spResurrect.timeScale = 1;
        // var _h = MG.uiGame.GetLastTile().y;
        // if(this.score <= 4) _h -= 70;
        this.spResurrect.position.y = MG.uiGame.GetLastYposResurrect() + gTILE_HEIGHT;      // 한칸 위에 나와서 +해줌
        this.spResurrect.setAnimationByName(0, "Repair", false);
        this.spResurrect.onEvent.addOnce(function (i,e) {
            //console.log('name=' + e.data.name + ' int=' + e.intValue + ' float=' + e.floatValue + ' string=' + e.stringValue);
            MG.uiGame.SpawnResurrect();
            MG.timerManager.DelayListener();        // 플레이 지연 이벤트 시작
            if(kData.isAudio) {
                MG.PlayBgm('game_bgm', true);
                MG.SetBgmVolume('game_bgm', 0.5);
            }
        });
        // setTimeout(function(){ MG.uiGame.SpawnResurrect(); }, 2000);
        this.spResurrect.onComplete.addOnce(function (trackIndex, count) {
            switch (trackIndex) {
                case 0:
                    this.spResurrect.visible = false;
                    this.spResurrect.timeScale = 0;
                    break;
            }
        }, this);
    },
    // 황금, 다이아타일 출현 연출
    SetSpecialTile:function(dir, x, y, width){
        //console.log(":::::: x = " + x + "   y = " + y + "   width = " + width);
        MG.timerManager.StopDelayListener();    // 플레이 지연 이벤트 정지

        // //MG.PlayAudio('resurrect');
        // // var _h = MG.uiGame.GetLastTile().y;
        // // if(this.score <= 4) _h -= 70;
        // var _count = 3;
        var i = 0;
        // var _widthRatio = parseInt(width) / BASE_TILE_WIDTH;
        // if(_widthRatio <= 0.3){
        //     _count = 1;
        // }else if(_widthRatio > 0.3 && _widthRatio <= 0.7){
        //     _count = 2;
        // }
        //
        // switch(_count){
        //     case 1:
        //         this.spEventTile[0].visible = true;
        //         this.spEventTile[0].timeScale = 1;
        //         this.spEventTile[0].position.x = x;
        //         this.spEventTile[0].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
        //         break;
        //
        //     case 2:
        //         this.spEventTile[0].visible = true;
        //         this.spEventTile[0].timeScale = 1;
        //         this.spEventTile[0].position.x = x - 50;
        //         this.spEventTile[0].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
        //         this.spEventTile[1].visible = true;
        //         this.spEventTile[1].timeScale = 1;
        //         this.spEventTile[1].position.x = x + 50;
        //         this.spEventTile[1].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
        //         break;
        //
        //     case 3:
        //         this.spEventTile[0].visible = true;
        //         this.spEventTile[0].timeScale = 1;
        //         this.spEventTile[0].position.x = x;
        //         this.spEventTile[0].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
        //         this.spEventTile[1].visible = true;
        //         this.spEventTile[1].timeScale = 1;
        //         this.spEventTile[1].position.x = x - 150;
        //         this.spEventTile[1].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
        //         this.spEventTile[2].visible = true;
        //         this.spEventTile[2].timeScale = 1;
        //         this.spEventTile[2].position.x = x + 150;
        //         this.spEventTile[2].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
        //         break;
        // }



        switch(MG.specialTileManager.getCurrentTileState()){
            case "gold":
                MG.PlayAudio('add_goldtile');
                this.spEventTile[0].visible = true;
                this.spEventTile[0].timeScale = 1;
                this.spEventTile[0].position.x = x;
                this.spEventTile[0].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
                this.spEventTile[0].setAnimationByName(0, "Gold_B", false);

                setTimeout(function(){
                    this.spEventTile[1].visible = true;
                    this.spEventTile[1].timeScale = 1;
                    this.spEventTile[1].position.x = x;
                    this.spEventTile[1].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
                    this.spEventTile[1].setAnimationByName(0, "Gold_A", false);
                }.bind(this), 370);

                // 골드타일로 변신
                this.spEventTile[1].onEvent.addOnce(function (i,e) {
                    // 이벤트 지점에서 특수 블럭으로 변신하기
                    MG.PlayAudio('create_goldtile');
                    MG.uiGame.GetNowTile().ChangeSpecialTile("gold");
                }.bind(this));

                this.spEventTile[1].onComplete.addOnce(function (trackIndex, count) {
                    // 골드타일 연출 완료되었다. ////////////////////////////////////////////
                    //MG.uiGame.ShowSpecialTileBG(false);     // 뒤에 검은 배경 안보이게 척리
                    this.spEventTile[0].visible = false;
                    this.spEventTile[0].timeScale = 0;
                    this.spEventTile[1].visible = false;
                    this.spEventTile[1].timeScale = 0;

                    MG.uiGame.GetNowTile().DestroyBlackBox();

                    switch (dir) {
                        case 'left':
                            MG.uiGame.GetNowTile().MoveX("right");
                            break;

                        case 'right':
                            MG.uiGame.GetNowTile().MoveX("left");
                            break;
                    }

                    MG.playGameController.SetInput(true);
                }.bind(this), this);

                // for(i=0; i<_count;++i){
                //     this.spEventTile[i].setAnimationByName(0, "Gold_A", false);
                // }
                break;

            case "dia":
                MG.PlayAudio('add_goldtile');
                this.spEventTile[0].visible = true;
                this.spEventTile[0].timeScale = 1;
                this.spEventTile[0].position.x = x;
                this.spEventTile[0].position.y = MG.uiGame.GetLastYposResurrect() - gTILE_HEIGHT;
                this.spEventTile[0].setAnimationByName(0, "Gold_B", false);

                setTimeout(function(){
                    this.spEventTile[1].visible = true;
                    this.spEventTile[1].timeScale = 1;
                    this.spEventTile[1].position.x = x;
                    this.spEventTile[1].position.y = MG.uiGame.GetLastYposResurrect() - (gTILE_HEIGHT * 2);
                    this.spEventTile[1].setAnimationByName(0, "Gold_A", false);
                }.bind(this), 370);

                // 골드타일로 변신
                this.spEventTile[1].onEvent.addOnce(function (i,e) {
                    // 이벤트 지점에서 특수 블럭으로 변신하기
                    MG.uiGame.GetNowTile().ChangeSpecialTile("gold");
                }.bind(this));

                setTimeout(function(){
                    MG.PlayAudio('add_diatile');
                    this.spEventTile[2].visible = true;
                    this.spEventTile[2].timeScale = 1;
                    this.spEventTile[2].position.x = x;
                    this.spEventTile[2].position.y = MG.uiGame.GetLastYposResurrect() - (gTILE_HEIGHT * 2);
                    this.spEventTile[2].setAnimationByName(0, "Diamond_B", false);
                }.bind(this), 1200);

                setTimeout(function(){
                    this.spEventTile[3].visible = true;
                    this.spEventTile[3].timeScale = 1;
                    this.spEventTile[3].position.x = x;
                    this.spEventTile[3].position.y = MG.uiGame.GetLastYposResurrect() - (gTILE_HEIGHT * 2);
                    this.spEventTile[3].setAnimationByName(0, "Diamond_A", false);
                }.bind(this), 1520);

                // 다이아타일로 변신
                this.spEventTile[3].onEvent.addOnce(function (i,e) {
                    // 이벤트 지점에서 특수 블럭으로 변신하기
                    MG.PlayAudio('create_diatile');
                    MG.uiGame.GetNowTile().ChangeSpecialTile("dia");
                }.bind(this));

                this.spEventTile[3].onComplete.addOnce(function (trackIndex, count) {
                    // 다이아타일 연출 완료되었다. //////////////////////////////////////////////
                    MG.uiGame.GetNowTile().DestroyBlackBox();
                    //MG.uiGame.ShowSpecialTileBG(false);     // 뒤에 검은 배경 안보이게 척리
                    this.spEventTile[0].visible = false;
                    this.spEventTile[0].timeScale = 0;
                    this.spEventTile[1].visible = false;
                    this.spEventTile[1].timeScale = 0;
                    this.spEventTile[2].visible = false;
                    this.spEventTile[2].timeScale = 0;
                    this.spEventTile[3].visible = false;
                    this.spEventTile[3].timeScale = 0;

                    if(gIsRevival === false) MG.uiGame.SetRevivalIcon(false);
                    // 다이아타일이다. 팝업 오픈 30칸 광고 리워드 안내창 오픈
                    this.uiDiamondReward.Show("YES_NO", MG.LM.Get('pop_diatile'), "Popup_AD_Line_Top.png", MG.LM.Get('pop_diatile_reward'),
                        function(){
                            if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                            gMovieIndex = 4;        // 부활은 4
                            if(kData.isAudio) MG.StopBgm('game_bgm');
                            gIsGetReward = false;
                            gRewardName = "dia";
                            MG.playGameController.SetInput(false);

                            ShowAD("reward", "dia", function () {
                                if(gIsGetReward) return;
                                gIsGetReward = true;

                                if(Define.PID == "100010" || Define.PID == "100026"){
                                    // 캐시워크다
                                }else{
                                    // 핫쉐어다
                                    this.RewardDiamond();
                                }

                            }.bind(this),function () {
                                MG.timerManager.DelayListener();
                                MG.playGameController.SetInput(true);
                                MG.uiGame.Undo1StepEndYpos();
                                MG.uiGame.GetNowTile().InitNormal();
                                if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                                MG.uiPopup.Show("YES", MG.LM.Get('ad'), "Popup_AD_Line_Top.png", MG.LM.Get('failAD'), function(){
                                    if(kData.isAudio) {
                                        MG.PlayBgm('game_bgm', true);
                                        MG.SetBgmVolume('game_bgm', 0.5);
                                    }
                                    switch (dir) {
                                        case 'left':MG.uiGame.GetNowTile().MoveX("right");break;
                                        case 'right':MG.uiGame.GetNowTile().MoveX("left");break;
                                    }
                                }.bind(this), function(){
                                    if(kData.isAudio) {
                                        MG.PlayBgm('game_bgm', true);
                                        MG.SetBgmVolume('game_bgm', 0.5);
                                    }
                                    switch (dir) {
                                        case 'left':MG.uiGame.GetNowTile().MoveX("right");break;
                                        case 'right':MG.uiGame.GetNowTile().MoveX("left");break;
                                    }
                                }.bind(this));
                            }, false);
                        }.bind(this),
                        function(){
                            switch (dir) {
                                case 'left':
                                    MG.uiGame.GetNowTile().MoveX("right");
                                    break;

                                case 'right':
                                    MG.uiGame.GetNowTile().MoveX("left");
                                    break;
                            }
                            MG.timerManager.DelayListener();
                            MG.playGameController.SetInput(true);
                            MG.uiGame.Undo1StepEndYpos();
                            MG.uiGame.GetNowTile().InitNormal();
                            if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
                        }.bind(this));

                    MG.playGameController.SetInput(true);

                    //// 광고 없을때를 대비하여 타일 움직이자.
                    // switch (dir) {
                    //     case 'left':
                    //         MG.uiGame.GetNowTile().MoveX("right");
                    //         break;
                    //
                    //     case 'right':
                    //         MG.uiGame.GetNowTile().MoveX("left");
                    //         break;
                    // }

                }.bind(this), this);

                // for(i=0; i<_count;++i){
                //     this.spEventTile[i].setAnimationByName(0, "Diamond_A", false);
                // }
                break;
        }


        // this.spEventTile[0].onComplete.addOnce(function (trackIndex, count) {
        //
        //     MG.uiGame.ShowSpecialTileBG(false);     // 뒤에 검은 배경 안보이게 척리
        //
        //     switch (trackIndex) {
        //         case 0:
        //             this.spEventTile[0].visible = false;
        //             this.spEventTile[0].timeScale = 0;
        //             this.spEventTile[1].visible = false;
        //             this.spEventTile[1].timeScale = 0;
        //             this.spEventTile[2].visible = false;
        //             this.spEventTile[2].timeScale = 0;
        //
        //
        //             if(MG.specialTileManager.getCurrentTileState() === "dia"){
        //                 if(gIsRevival === false) MG.uiGame.SetRevivalIcon(false);
        //                 // 다이아타일이다. 팝업 오픈 30칸 광고 리워드 안내창 오픈
        //                 MG.uiPopup.Show("YES_NO", MG.LM.Get('pop_diatile'), "Popup_Resurrection_Line_Top.png", MG.LM.Get('pop_diatile_reward'),
        //                     function(){
        //                         if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
        //                         gMovieIndex = 4;        // 부활은 4
        //                         if(kData.isAudio) MG.StopBgm('game_bgm');
        //                         ShowAD("reward", "revive", function () {
        //                             MG.specialTileManager.watchingAD();
        //                             // 30칸 리워드 실행
        //                             this.DiamondTileEffect();
        //                         }.bind(this),function () {
        //                             if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
        //                         });
        //                     }.bind(this),
        //                     function(){
        //                         switch (dir) {
        //                             case 'left':
        //                                 MG.uiGame.GetNowTile().MoveX("right");
        //                                 break;
        //
        //                             case 'right':
        //                                 MG.uiGame.GetNowTile().MoveX("left");
        //                                 break;
        //                         }
        //                         MG.timerManager.DelayListener();
        //                         MG.playGameController.SetInput(true);
        //                         MG.uiGame.Undo1StepEndYpos();
        //                         MG.uiGame.GetNowTile().InitNormal();
        //                         if(gIsRevival === false) MG.uiGame.SetRevivalIcon(true);
        //                     }.bind(this));
        //                 break;
        //             }else{
        //                 // 황금타일이면...
        //                 switch (dir) {
        //                     case 'left':
        //                         MG.uiGame.GetNowTile().MoveX("right");
        //                         break;
        //
        //                     case 'right':
        //                         MG.uiGame.GetNowTile().MoveX("left");
        //                         break;
        //                 }
        //             }
        //
        //             MG.playGameController.SetInput(true);
        //             break;
        //     }
        // }, this);
    },
    RewardDiamond:function(){
        gRewardName = "";
        Define.iTimeStemp = new Date().getTime();
        if(kData.isAudio) {
            MG.PlayBgm('game_bgm', true);
            MG.SetBgmVolume('game_bgm', 0.5);
        }
        MG.specialTileManager.watchingAD();
        MG.uiGame.ShowDiaReward();            // 해당 리워드 이미지 출력


        setTimeout(function(){
            // 다이아타일 30칸 리워드 실행
            this.DiamondTileEffect();
        }.bind(this), 500);
        setTimeout(function(){
            gIsGetReward = false;
        }, 1000);
    },
    Pause:function(){
        MG.uiGame.GetNowTile().Pause();
        MG.timerManager.StopDelayListener();    // 플레이 지연 이벤트 정지
    },
    Resume:function(){
        MG.uiGame.GetNowTile().Resume();
        MG.timerManager.DelayListener();        // 플레이 지연 이벤트 시작
    },
    /**
     * @return {number}
     */
    GetSwingSpeed:function(){
        if(gPlayData.floor_count >= 1000) {
            return 300 + this.addSwingSpeed;
        }

        this.GetDelayPenalty();

        // // ver02 :
        // gStep = parseInt(gPlayData.floor_count / STEP_COUNT);
        // if(gStep > 1) gStep -= 1;
        // this.swingSpeed = Math.round((gSwingSpeedStartValue - (Math.pow((gStep / 49), 0.3) * gSwingSpeedDownValue)), 0);
        // if(this.swingSpeed <= 50) this.swingSpeed = 50;
        // // 폭에 따른 스피드 조정값 적용
        // var tile_width_rate = 1 - (MG.uiGame.GetLastTile().w / BASE_TILE_WIDTH);
        // this.swingSpeed *= 1 + tile_width_rate;
        //
        // return this.swingSpeed - this.addSwingSpeed;


        // ver01 :
        gStep = parseInt(gPlayData.floor_count / STEP_COUNT);

        this.swingSpeed = Math.round((gSwingSpeedStartValue - (Math.pow((gStep / 49), 0.3) * gSwingSpeedDownValue)), 0);
        //console.log("::::: step = " + (gStep + 1) + "  ::::: swing speed = " + this.swingSpeed);
        return this.swingSpeed - this.addSwingSpeed;
    },
    GetDelayPenalty:function(){
        // 플레이 지연 패널티 스피드값 셋팅
        if(this.delayPenalty.startTime > 0){
            var _now = new Date().getTime();
            if(_now - this.delayPenalty.startTime >= 5000){
                // 패널티 시작후 5초가 지났다면, targetSpeed를 적용해주고 패널티 종료하자
                this.addSwingSpeed = this.swingSpeed - this.delayPenalty.targetSpeed;
                this.InitDelayPenalty();
                // console.log("::::: 1.지연 패널티 추가 speed = " + this.addSwingSpeed + " :::::");
                // console.log("::::: 지연 패널티 종료 :::::");
            }else{
                var _rate = (_now - this.delayPenalty.startTime) / 5000;
                this.addSwingSpeed = Math.round((this.delayPenalty.baseSpeed - this.delayPenalty.targetSpeed) * _rate);
                // console.log("::::: 2.지연 패널티 추가 speed = " + this.addSwingSpeed + " :::::");
            }
        }

    },
    /*GetMovieController:function(){
        return this.movieController;
    },*/
    InitDelayPenalty:function(){
        this.delayPenalty.startTime = 0;
        this.delayPenalty.baseSpeed = 0;
        this.delayPenalty.targetSpeed = 0;
    },
    /**
     * @return {number}
     */
    GetDropSpeed:function(){
        return this.dropSpeed;
    },
    /**
     * @return {number}
     */
    GetMapDownSpeed:function(){
        if(isPlayingSuperSkip) return 30;
        return this.mapDownSpeed;
    },
    GetExtendObject:function(){
        return this.extendObject;
    },
    // 터치 이벤트
    InputTouch:function(){
        if(MG.uiGame.GetUiPause().IsShow()) return;
        if(this.isInput) {
            MG.timerManager.Touch();
            this.isInput = false;
            this.InitDelayPenalty();
            MG.uiGame.Drop();
        }
    },
    // 터치 지점
    InputTouchPosition:function(event){
        //Game.prototype.setTouchPosition(event.x, event.y);
        //console.log("::::: event.x = " + event.x + "   event.y = " + event.y);
    },
    TileSpawn:function(){
        if(this.GetIsIgnorePerfectCount()) return;
        this.isInput = true;
        MG.uiGame.Spawn();           // 새로 떨어뜨릴 타일 배치
    },

    // uiGame.Arrive() 에서 옴
    Arrive:function(isGoldReward){
        this.extendObject.isApply();
        MG.coinManager.IsGetCoins(MG.uiGame.GetLastTile());     // 코인 획득 검사
        MG.coinManager.SpawnCoin(MG.uiGame.GetLastTile());      // 코인 배치
        this.bgManager.SpawnGimmick();

        // 점수 올려주고 다음 타일 배치
        this.addSwingSpeed = 0;

        if(isGoldReward === "goldReward"){
            MG.specialTileManager.setCurrentTileState();
            this.rewardNumber = MG.specialTileManager.getGoldReward();     // 확률에 근거하여 5가지 리워드 중 추첨
            //console.log("======================== reward = " + this.rewardNumber);
            MG.uiGame.ShowGoldReward(this.rewardNumber);            // 해당 리워드 이미지 출력

            setTimeout(function(){
                switch(this.rewardNumber){                 // 리워드 실행
                    case 0:
                        this.GoldTileBenefit(5);
                        break;

                    case 1:
                        this.GoldTileBenefit(10);
                        break;

                    case 2:
                        // 코인바 나오도록 처리
                        MG.PlayAudio('getCoin');
                        MG.uiGame.MoveCoinBar("in");
                        setTimeout(function(){
                            MG.uiGame.MoveCoinBar("out");
                        }, 1000);
                        MG.uiGame.StartCoinWithAnimation(300);
                        this.TileSpawn();
                        break;

                    case 3:
                        // 코인바 나오도록 처리
                        MG.PlayAudio('getCoin');
                        MG.uiGame.MoveCoinBar("in");
                        setTimeout(function(){
                            MG.uiGame.MoveCoinBar("out");
                        }, 1000);
                        MG.uiGame.StartCoinWithAnimation(500);
                        this.TileSpawn();
                        break;

                    case 4:
                        // 코인바 나오도록 처리
                        MG.PlayAudio('getCoin');
                        MG.uiGame.MoveCoinBar("in");
                        setTimeout(function(){
                            MG.uiGame.MoveCoinBar("out");
                        }, 1000);
                        MG.uiGame.StartCoinWithAnimation(1000);
                        this.TileSpawn();
                        break;
                }
                this.rewardNumber = -1;
            }.bind(this), 1000);

        } else {
            this.TileSpawn();
        }

    },
    SetInput:function(b){
        this.isInput = b;
    },
    GetInput:function(b){
        return this.isInput;
    },
    AddFloor:function(){
        gPlayData.floor_count += 1;
        MG.uiGame.UpdateFloor(gPlayData.floor_count);
        // if(isPlayingSuperSkip === false && gPlayData.floor_count >= 300){
        //     if(gPlayData.floor_count % 100 === 0){
        //         MG.NM.GamePlayLog();       // 로그 전송
        //     }
        // }
    },
    AddPoint:function(){
        switch(gTileSkin){
            case 1:
                gPlayData.score += (gPlayData.floor_count * 10);
                break;

            case 2:
                gPlayData.score += parseInt((gPlayData.floor_count * 10) * 1.2);
                break;

            case 3:
                gPlayData.score += parseInt((gPlayData.floor_count * 10) * 1.5);
                break;

            case 4:
                gPlayData.score += parseInt((gPlayData.floor_count * 10) * 2);
                break;
        }
        MG.uiGame.UpdateScore(gPlayData.score);
    },
    AddPerfectPoint:function(){
        this.AddPoint();
        //if(this.isAutoDrop) return;
        if(++this.perfectCount >= PERPECT_COUNT){
            MG.uiGame.PerfectBenefit();     // 사이즈 업
        }

        if((MG.game.time.time - this.perfectSoundPlayGap) >= 400 ){
            this.perfectSoundPlayGap = MG.game.time.time;

            if(this.perfectCount < 5){
                MG.PlayAudioDelay('perfect0' + this.perfectCount, 300);
            }else{
                MG.PlayAudioDelay('perfect05', 300);
            }
        }
    },
    ResetPerfectPoint:function(){
        this.perfectCount = 0;
        //MG.uiGame.UpdateCombo(this.perfectCount);
    },

    // 광고보고 다이아타일 효과 적용 (사이즈업)
    DiamondTileEffect:function(){
        MG.PlayAudio('special_tile_effect');
        this.SetIsIgnorePerfectCount(true);
        //MG.uiGame.Undo1StepEndYpos();
        MG.uiGame.GetNowTile().Init();
        isPlayingDiamondReward = true;
        gAutoDropFloorCount = 15;

        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 700);
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 1260);    // 560
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 1708);    // 358
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 2066);    // 287
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 2353);    // 229
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 2582);    // 이하 184 유지 하기
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 2766);   // 184
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 2913);   // 147
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 3030);   // 117
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 3147);
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 3264);
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 3381);
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 3498);
        setTimeout(function() { MG.uiGame.DiaTileBenefit(); }, 3615);
        setTimeout(function() {
            gAutoDropFloorCount = 30 - 14;
            gAutoDropFloorEvent = MG.game.time.events.loop(120, MG.uiGame.DiaTileBenefit, MG.uiGame.GetThis());//MG.game.time.events.repeat(117, 30 - 14, MG.uiGame.DiaTileBenefit, MG.uiGame.GetThis());
        }.bind(this), 3615);
    },
    // 광고보고 다이아타일 효과 끝
    EndDiamondTileEffect:function(){
        // 광고보고 다이아타일 효과 끝나고 처리
        MG.game.time.events.remove(gAutoDropFloorEvent);
        MG.uiGame.Spawn();
        MG.playGameController.SetIsIgnorePerfectCount(false);
        isPlayingDiamondReward = false;
        MG.playGameController.SetInput(true);
        MG.timerManager.DelayListener();
    }.bind(this),
    // 슈퍼스킵 시작
    StartSuperSkip:function(){
        /// Ver.2
        isPlayingSuperSkip = true;
        gAutoDropFloorCount = 15;
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 700);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 1260);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 1708);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 2066);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 2353);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 2582);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 2766);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 2913);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 3030);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 3124);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 3199);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 3259);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 3308);
        setTimeout(function() { MG.uiGame.SuperSkip(); }, 3346);

        // setTimeout(function() { MG.game.time.events.repeat(30, gSkipFloor.count - 14, MG.uiGame.SuperSkip, MG.uiGame.GetThis()); }, 3346);
        setTimeout(function() {
            gAutoDropFloorCount = gSkipFloor.count - 14;
            gAutoDropFloorEvent = MG.game.time.events.loop(60, MG.uiGame.SuperSkip, MG.uiGame.GetThis());
        }, 3346);

        // setTimeout(function() {
        //     // 슈퍼스킵 끝나고 처리
        //     MG.uiGame.Spawn();
        //     isPlayingSuperSkip = false;
        //     this.SetInput(true);
        //     //this.TileSpawn();
        // }.bind(this), (30 * (gSkipFloor.count - 13)) + 4000);

        this.SuperSkipEffect();
        // /// Ver.1
        // this.superSkipEvent = MG.game.time.events.repeat(30, gSkipFloor.count, MG.uiGame.SuperSkip, MG.uiGame.GetThis());
        // setTimeout(function() {
        //     // 슈퍼스킵 끝나고 처리
        //     MG.uiGame.Spawn();
        //     this.SetInput(true);
        // }.bind(this), (30 * (gSkipFloor.count+1)));
    },
    // 슈퍼스킵 끝
    EndSuperSkipLoop:function(){
        MG.game.time.events.remove(gAutoDropFloorEvent);
        MG.uiGame.Spawn();
        isPlayingSuperSkip = false;
        MG.playGameController.SetInput(true);
    }.bind(this),
    SuperSkipEffect:function (){
        if(isPlayingSuperSkip){
            if(gPlayData.floor_count > 6 && (gSkipFloor.count - gPlayData.floor_count) > 10){
                this.skipEffect[this.skipIndex].alpha = 0;
                this.skipEffect[this.skipIndex].scale.set(Random.RangeFloat(0.75, 1.25));
                this.skipEffect[this.skipIndex].position.setTo(Random.Range(30, MG.game.world.width - 30), Random.Range(300, 900));
                MG.game.add.tween(this.skipEffect[this.skipIndex]).to({alpha:1}, 200, Phaser.Easing.Linear.None, true, 0);
                MG.game.add.tween(this.skipEffect[this.skipIndex]).to({alpha:0}, 200, Phaser.Easing.Linear.None, true, 300);
                if(++this.skipIndex >= this.skipEffect.length) this.skipIndex = 0;
            }
            setTimeout(function() { MG.playGameController.SuperSkipEffect(); }, 100);
        }
    },
    // 황금타일 퍼펙트 리워드 (층쌓기)
    GoldTileBenefit:function(count){

        ////// ver.02 : setTimeout 함수를 사용하지 않는 걸로 다시 만들기
        isPlayingGoldReward = true;
        gAutoDropFloorCount = count;
        this.SetIsIgnorePerfectCount(true);
        MG.playGameController.SetInput(false);

        this.timerStemp = MG.game.time.time;
        MG.uiGame.GoodAnswerBenefit("gold");
        gAutoDropFloorCount--;
        //this.UpdateGoldTileBenefit();

        // ////// ver.01 :
        // isPlayingSuperSkip = true;
        // //gAutoDropFloorCount = count;
        // this.SetIsIgnorePerfectCount(true);
        // MG.playGameController.SetInput(false);
        //
        // setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 400);
        // setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 600);
        // setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 800);
        // setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 1000);
        // setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 1200);
        //
        // if(count === 10){
        //     setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 1400);
        //     setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 1600);
        //     setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 1800);
        //     setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 2000);
        //     setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, 2200);
        // }
        //
        // // for(var i=0; i<count; i++){
        // //     setTimeout(function() { MG.uiGame.GoodAnswerBenefit("gold"); }, (250 * i));
        // // }
        //
        // setTimeout(function() {
        //     // 골드 지급 완료 되었다.
        //     this.SetIsIgnorePerfectCount(false);
        //     MG.playGameController.SetInput(true);
        //     MG.timerManager.DelayListener();
        //     this.TileSpawn();
        //     isPlayingSuperSkip = false;
        // }.bind(this), (202 * (count+1)));
    },
    UpdateGoldTileBenefit:function(){
        if(isPlayingGoldReward === false) return;
        if((MG.game.time.time - this.timerStemp) >= 200){
            this.timerStemp = MG.game.time.time;
            MG.uiGame.GoodAnswerBenefit("gold");
            if(--gAutoDropFloorCount <= 0) {
                // 골드 지급 완료 되었다.
                this.SetIsIgnorePerfectCount(false);
                MG.playGameController.SetInput(true);
                MG.timerManager.DelayListener();
                this.TileSpawn();
                isPlayingGoldReward = false;
            }
        }
    },
    // 오답일때 속도 2배 패널티
    BadAnswerSpeedUp:function(){
        this.addSwingSpeed = Math.round(this.swingSpeed * 0.5);
    },
    // 플레이 지연 패널티
    DelayPenalty:function () {
        this.delayPenalty.startTime = new Date().getTime();
        this.delayPenalty.baseSpeed = this.swingSpeed;
        this.delayPenalty.targetSpeed = Math.round(this.swingSpeed * 0.7);
        console.log("::::: PlayGameController.DelayPenalty ::::: startTime = " + this.delayPenalty.startTime + "  baseSpeed = " + this.delayPenalty.baseSpeed + "  targetSpeed = " + this.delayPenalty.targetSpeed);
    },
    /**
     * @return {boolean}
     */
    GetIsIgnorePerfectCount:function(){
        return this.isAutoDrop;
    },
    SetIsIgnorePerfectCount:function(b){
        this.isAutoDrop = b;
    }
};

'use strict';

function TimerManager() {
    this.delayEvent = null;     // 플레이 지연 시 패널티 이벤트
}

TimerManager.prototype = {
    Init:function() {
        MG.game.time.events.remove(this.delayEvent);
        this.delayEvent = null;
    },
    Touch:function(){
        this.DelayListener();
    },
    DelayListener:function(){
        if(this.delayEvent !== null) MG.game.time.events.remove(this.delayEvent);
        this.delayEvent = MG.game.time.events.add(PLAY_DELAY_PENALTY_TIME, this.DelayPenalty, this);
    },
    StopDelayListener:function(){
        if(this.delayEvent !== null) MG.game.time.events.remove(this.delayEvent);
    },
    DelayPenalty:function () {
        //console.log("::::: DelayPenalty :::::");
        MG.playGameController.DelayPenalty();
    },
};
'use strict';

function CoinManager(){
    this.coins = [];
    this.iter = 0;
    this.Create();
    this.pos1 = [0.2, 0.5, 0.8];
    this.pos2 = [0.35, 0.65];
    this.isSpawnCoin = false;
}

CoinManager.prototype = {
    Create:function(){
        // 코인 생성
        for(var i=0; i<15; ++i){
            this.coins[i] = new Coin();
        }
    },
    Init:function(){
        this.iter = 0;
        this.isSpawnCoin = false;

        for(var i=0; i<this.coins.length; ++i){
            this.coins[i].Init();
        }
    },
    SpawnCoin:function (lastTileInfo) {
        if(MG.playGameController.GetIsIgnorePerfectCount()) return; // 콤보 베네핏 받는 중이다. 코인 안나오자
        if(MG.uiGame.IsSpawnCoinBar()) return;  // 코인바가 나타난 상황이다 버그를 줄이기위해 이때는 코인 지급하지말자.
        var i = 0;
        var _left = 0;
        var _rate = lastTileInfo.w / BASE_TILE_WIDTH;

        // giGimmicCount++;

        if(_rate >= 0.7){
            // 3개 나오는 조건 (10% 확률)
            if(Random.Range(0, 100) < 10){
                _left = (lastTileInfo.x + (lastTileInfo.w * 0.5)) - Math.round(BASE_TILE_WIDTH * 0.5);
                for(i=0; i<this.pos1.length; ++i){
                    this.coins[this.iter].Show(MG.uiGame.GetGroup(), (_left + (BASE_TILE_WIDTH * this.pos1[i])), lastTileInfo.y - 60);
                    //console.log("::::: 3개 조건 :: x = " + this.coins[this.iter].GetSprite().position.x);
                    if(++this.iter >= this.coins.length) this.iter = 0;
                    this.isSpawnCoin = true;
                }
            }
        } else if(_rate >= 0.5){
            // 2개 나오는 조건 (15% 확률)
            if(Random.Range(0, 100) < 15){
                _left = (lastTileInfo.x + (lastTileInfo.w * 0.5)) - Math.round(BASE_TILE_WIDTH * 0.5);
                for(i=0; i<this.pos2.length; ++i){
                    this.coins[this.iter].Show(MG.uiGame.GetGroup(), (_left + (BASE_TILE_WIDTH * this.pos2[i])), lastTileInfo.y - 60);
                    //console.log("::::: 2개 조건 :: x = " + this.coins[this.iter].GetSprite().position.x);
                    if(++this.iter >= this.coins.length) this.iter = 0;
                    this.isSpawnCoin = true;
                }
            }
        } else if(_rate >= 0.3){
            // 1개 나오는 조건 (20% 확률)
            if(Random.Range(0, 100) < 20){
                this.coins[this.iter].Show(MG.uiGame.GetGroup(), (lastTileInfo.x + (lastTileInfo.w * 0.5)), lastTileInfo.y - 60);
                //console.log("::::: 1개 조건 :: x = " + this.coins[this.iter].GetSprite().position.x);
                if(++this.iter >= this.coins.length) this.iter = 0;
                this.isSpawnCoin = true;
            }
        }
    },
    // 코인 획득하였으면 날리고 코인 카운트 올리자
    IsGetCoins:function(lastTileInfo){
        if(this.isSpawnCoin === false) return;
        //console.log(":::::: this.coins[0].GetSprite().width = " + this.coins[0].GetSprite().width);
        var _left = lastTileInfo.x - Math.round(this.coins[0].GetSprite().width * 0.3);
        var _right = lastTileInfo.x + Math.round(lastTileInfo.w) + Math.round(this.coins[0].GetSprite().width * 0.3);
        this.isSpawnCoin = false;
        var _isGetCoin = false;
        for(var i=0; i<this.coins.length; ++i){
            if(this.coins[i].GetSprite().visible && this.coins[i].GetSprite().position.x >= _left && this.coins[i].GetSprite().position.x <= _right && (this.coins[i].GetSprite().position.y - lastTileInfo.y) > 0 && (this.coins[i].GetSprite().position.y - lastTileInfo.y) < 60){
                this.coins[i].Fly();
                _isGetCoin = true;
            }
        }

        if(_isGetCoin) {
            MG.PlayAudio('getCoin');
            MG.uiGame.MoveCoinBar("in");
            setTimeout(function(){
                MG.uiGame.MoveCoinBar("out");
            }, 1000);
        }
    },
    GoldTileReward:function(){
        var _flyCoins = [];
        for(var i=0; i<=5; ++i){
            _flyCoins.push(this.coins[this.iter]);
            if(++this.iter >= this.coins.length) this.iter = 0;
        }


        setTimeout(function(){
            _flyCoins[0].Show(MG.uiGame.GetGroup(), MG.uiGame.GetCenterPosition().x, MG.uiGame.GetCenterPosition().y);
            _flyCoins[0].FlyNotAddCoinCount();
        }.bind(this), 1000);

        setTimeout(function(){
            _flyCoins[1].Show(MG.uiGame.GetGroup(), MG.uiGame.GetCenterPosition().x, MG.uiGame.GetCenterPosition().y);
            _flyCoins[1].FlyNotAddCoinCount();
        }.bind(this), 1100);

        setTimeout(function(){
            _flyCoins[2].Show(MG.uiGame.GetGroup(), MG.uiGame.GetCenterPosition().x, MG.uiGame.GetCenterPosition().y);
            _flyCoins[2].FlyNotAddCoinCount();
        }.bind(this), 1200);

        setTimeout(function(){
            _flyCoins[3].Show(MG.uiGame.GetGroup(), MG.uiGame.GetCenterPosition().x, MG.uiGame.GetCenterPosition().y);
            _flyCoins[3].FlyNotAddCoinCount();
        }.bind(this), 1300);

        setTimeout(function(){
            _flyCoins[4].Show(MG.uiGame.GetGroup(), MG.uiGame.GetCenterPosition().x, MG.uiGame.GetCenterPosition().y);
            _flyCoins[4].FlyNotAddCoinCount();
        }.bind(this), 1400);

        setTimeout(function(){
            _flyCoins[5].Show(MG.uiGame.GetGroup(), MG.uiGame.GetCenterPosition().x, MG.uiGame.GetCenterPosition().y);
            _flyCoins[5].FlyNotAddCoinCount();
        }.bind(this), 1500);

        setTimeout(function(){
            _flyCoins.length = 0;
        }.bind(this), 2100);
    },
    /**
     * @return {boolean}
     */
    GetIsSpawnCoin:function () {
        return this.isSpawnCoin;
    }
};
'use strict';

/*
게임 진행 시 배경에 랜덤하게 나타나는 기믹 환경들 구름, 우주객체 등
 */

function BackgroundManager(){
    this.cloud = [];
    this.space = [];
    this.spaceIter = 0;
    this.naverSpawn = 0;

    this.Create();
}

BackgroundManager.prototype = {
    Create:function(){
        // 구름
        this.cloud[0] = "cloud_left" + gTileSkin + ".png";
        this.cloud[1] = "cloud_center" + gTileSkin + ".png";
        this.cloud[2] = "cloud_right" + gTileSkin + ".png";

        // // 우주
        // for(var i=0; i<4; ++i){
        //     this.space[i] = "space" + i + ".png";
        //     this.space[i].visible = false;
        // }
        // for(i=4; i<8; ++i){
        //     this.space[i] = "space_ex.png";
        //     this.space[i].visible = false;
        // }
        // for(i=8; i<12; ++i){
        //     this.space[i] = "space_ex.png";
        //     this.space[i].visible = false;
        // }
    },
    Init:function(){
        this.spaceIter = 0;
        // giGimmicCount = 0;
    },
    Refresh:function(){
        this.cloud[0] = "cloud_left" + gTileSkin + ".png";
        this.cloud[1] = "cloud_center" + gTileSkin + ".png";
        this.cloud[2] = "cloud_right" + gTileSkin + ".png";
    },
    SpawnGimmick:function(){
        if(--this.naverSpawn > 0) return;
        if(gPlayData.floor_count <= 30) return;

        // if(gPlayData.floor_count >= 75 && gPlayData.floor_count < 250) {
        if(gPlayData.floor_count >= 100) {
            // 구름 노출
            if(Random.Range(0, 8) === 0) {
                //console.log("::::::::::::: 구름노출 :::::::::::::::::");
                // giGimmicCount++;
                var _rnd = Random.Range(0, 3);
                var _x = 0;
                switch(_rnd){
                    case 0:
                        // left
                        _x = Random.Range(-162, -191);
                        break;

                    case 1:
                        // center
                        _x = Random.Range(-50, 51);
                        break;

                    case 2:
                        // right
                        _x = Random.Range(155, 201);
                        break;
                }
                MG.uiGame.SetBackgroundGimmick(MG.game.world.centerX + _x, MG.uiGame.GetLastYpos() - 650, 1, this.cloud[_rnd]);
                this.naverSpawn = 25;
            }
        //}else if(gPlayData.floor_count >= 270) {
            // // 우주 노출
            // if(Random.Range(0, 5) === 0) {
            //     console.log("::::::::::::: 우주노출 :::::::::::::::::");
            //     // giGimmicCount++;
            //     if(this.spaceIter === 0) Shuffle(this.space);
            //     MG.uiGame.SetBackgroundGimmick(MG.game.world.centerX + (Random.Range(-99, 99)), MG.uiGame.GetLastYpos() - 650, (Random.Range(0, 2) === 0) ? 1 : -1, this.space[this.spaceIter]);
            //     if(++this.spaceIter >= this.space.length) this.spaceIter = 0;
            //     this.naverSpawn = 25;
            // }
        }
    }
};
'use strict';

function SpecialTileManager() {
    this.start_block_count = 10;     // 처음 9층까지는 안만들어준다.
    this.watchAD_block_count = 0;    // 광고 본적 없거나, 보고 50층까지는 다이아타일 못나온다. (0이면 안본거고 광고보면 50으로 셋팅 후 차감해간다)
    this.current_tile_state = "normal";        // 황금타일 또는 다이아타일이 뽑혔으면 기록해준다.   'gold':황금타일  'dia':다이아타일   'normal':일반타일
    this.prob = 0;                  // 당첨 확률 층수랑 타일 넓이에 따라 달라진다. (100%는 1000)
}

SpecialTileManager.prototype = {
    init:function() {
        this.start_block_count = 10;
        this.current_tile_state = "normal";
        this.prob = 0;
    },
    isApplySpecialTile:function(){

        if(MG.playGameController.GetExtendObject().IsEnabled()){
            this.current_tile_state = 'normal';
            return this.current_tile_state;
        }

        /////////// 특수 타일 나오도록 TEST ///////////////
        // this.current_tile_state = 'gold';
        // return this.current_tile_state;     // test :
        /////////// 특수 타일 나오도록 TEST ///////////////


        // 황금타일인지 조회 들어 온다.
        --this.watchAD_block_count;
        //console.log(":::::::::::::::::::: start_block_count = " + this.start_block_count);
        if(--this.start_block_count > 0) {
            this.current_tile_state = 'normal';
            return this.current_tile_state;
        }
        //this.prob += 10;        // debug : 아래 대신
        this.prob += this.getProbWidth();
        if(gTileSkin === 3) this.prob *= 2;     // 3번 타워일 경우 황금블록 등장확률 x2
        //console.log(":::::::::::::: 당첨확률 = " + (this.prob / 10) + "% ::::::::::::::");
        if(Random.Range(0, 1001) <= this.prob){
            //this.start_block_count = 1;
            this.prob = 0;
            // 황금타일 당첨 되었다, 다이아랑 확률대결 (광고본적없음, 봐도50층지나야 && 블록넓이 70%이하 && 50%랜덤 확률)
            // if(1){

            // // if(gDebug){
            // if(gBuild === "dev"){
            //     if((this.watchAD_block_count <= 0) && (Random.Range(0, 2) === 0)){
            //         // 다이아타일 당첨 확정
            //         this.start_block_count = 10;
            //         this.current_tile_state = 'dia';
            //         // console.log(":::::::::::::: 다이아타일 당첨!! ::::::::::::::::::");
            //         return this.current_tile_state;
            //     }else{
            //         // 황금타일 당첨 확정
            //         this.start_block_count = 10;
            //         this.current_tile_state = 'gold';
            //         // console.log(":::::::::::::: 골드타일 당첨!! ::::::::::::::::::");
            //         return this.current_tile_state;
            //     }
            // }else{
                if((this.watchAD_block_count <= 0) && (parseInt((MG.uiGame.GetLastTile().w / BASE_TILE_WIDTH) * 100) <= 70) && (Random.Range(0, 2) === 0)){
                    // 다이아타일 당첨 확정
                    this.start_block_count = 10;
                    this.current_tile_state = 'dia';
                    // console.log(":::::::::::::: 다이아타일 당첨!! ::::::::::::::::::");
                    return this.current_tile_state;
                }else{
                    // 황금타일 당첨 확정
                    this.start_block_count = 10;
                    this.current_tile_state = 'gold';
                    // console.log(":::::::::::::: 골드타일 당첨!! ::::::::::::::::::");
                    return this.current_tile_state;
                }
            // }



        }else{
            // 확률상 탈락일때 일반 타일 생성
            this.current_tile_state = 'normal';
            return this.current_tile_state;
        }
    },
    // 타일넓이에 따라 당첨 확률 조정
    // 30% 이하 +2
    // 30% ~ 50% +1.5
    // 50% ~ 70% +1.2
    getProbWidth:function(){
        var _w = parseInt((MG.uiGame.GetLastTile().w / BASE_TILE_WIDTH) * 100);
        if(_w <= 30) return 20;
        if(_w > 30 && _w <= 50) return 15;
        if(_w > 50 && _w <= 70) return 12;
        return 10;
    },
    getGoldReward:function(){
        var _r = 0;
        var _t = Random.Range(0, 101);
        if(_t <= 40){
            _r = 0;// 5층 쌓기 당첨
        } else if(_t > 40 && _t <= 60){
            _r = 1;// 10층 쌓기
        } else if(_t > 60 && _t <= 80){
            _r = 2;// 300 코인
        } else if(_t > 80 && _t <= 95){
            _r = 3;// 500 코인
        } else if(_t > 95){
            _r = 4;// 1000 코인
        }

        return _r;
    },
    watchingAD:function(){
        this.watchAD_block_count = 50;
    },
    getCurrentTileState:function(){
        return this.current_tile_state;
    },
    setCurrentTileState:function(){
        this.current_tile_state = "normal";
    }
};
'use strict';

function Tile(parent, inx) {
    this.myParent = parent;
    this.spTile = MG.AddSprite(this.myParent, 0, 0, 'UI_map', 'floor_moving' + gTileSkin + '.png');
    this.spTile.anchor.setTo(0, 0.5);
    this.spTile.visible = false;
    this.baseSize = {w:BASE_TILE_WIDTH, h:70};
    this.origCropX = this.spTile.texture.crop.x;
    this.index = inx;
    this.dir = "";
    this.arriveTexture = null;
    this.targetYpos = 0;
    this.tweenEvent = null;
    this.whitebox = MG.game.add.graphics(0, 0);
    this.blackbox = MG.game.add.graphics(0, 0);
    this.myParent.addChild(this.whitebox);
    this.myParent.addChild(this.blackbox);
    this.isDrop = false;        // 드롭 시작되면 true로 설정해서 혹시 moveX complete에서 수평이동 실행 안되도록 처리
    // this.isSpecial = false;
    this.type = "normal";               // normal:일반  gold:황금  dia:다이아타일
}

Tile.prototype = {
    Init:function(){
        this.spTile.visible = false;
        this.whitebox.visible = false;
        this.blackbox.visible = false;
        this.arriveTexture = null;
        this.targetYpos = 0;
        this.tweenEvent = null;
        // this.isSpecial = false;
        this.dir === "";
        this.type = "normal";
    },
    // 특수타일 -> 노멀타일로 수정
    InitNormal:function(){
        this.type = "normal";
        this.spTile.scale.setTo(1);
        this.spTile.loadTexture('UI_map', this.arriveTexture);
        this.origCropX = this.spTile.texture.crop.x;
        this.spTile.texture.crop.x = this.origCropX;
        this.spTile.texture.crop.width = this.baseSize.w;
    },
    Show:function(parent, dir, type, x, y, w, h, arriveTx, targetY){        // type:일반,황금,다이아
        this.baseSize.w = w;
        this.baseSize.h = h;
        this.type = type;
        this.spTile.scale.setTo(1);
        if(dir === "center"){
            this.spTile.loadTexture('UI_map', 'gold_tile.png');
        } else if(dir === "superSkip") {
            this.spTile.loadTexture('UI_map', arriveTx);
        } else {
            this.spTile.loadTexture('UI_map', arriveTx);
        }
        this.whitebox.visible = true;
        this.origCropX = this.spTile.texture.crop.x;
        this.spTile.position.setTo(x, y);
        ///// todo : 타일 사이즈 조정해줘야 한다.  this.spTile.scale.setTo((w / BASE_TILE_WIDTH), 1);
        this.SetSizeCrop();
        this.spTile.visible = true;

        // if(this.type === "gold"){
        //     this.spTile.width = this.baseSize.w;
        //     this.spTile.loadTexture('UI_map', 'gold_tile.png');
        // } else if(this.type === "dia"){
        //     this.spTile.width = this.baseSize.w;
        //     this.spTile.loadTexture('UI_map', 'dia_tile.png');
        // }

        if(dir === "center" && type !== "extend") {
            //this.sp2.visible = true;
        }else{
            //this.sp2.visible = false;
        }

        // 황금타일 또는 다이아타일 생성 시 배경 검게처리
        if((this.type === "gold" || this.type === "dia") && dir !== "center"){
            this.myParent.bringToTop(this.blackbox);
            this.myParent.bringToTop(this.spTile);
            this.blackbox.visible = true;
            this.blackbox.beginFill(0x000000);
            this.blackbox.drawRect(0, -(MG.uiGame.GetGroup().position.y + 100), MG.game.width, MG.game.height + 200);
            this.blackbox.alpha = 0.85;
            this.blackbox.endFill();
            //setTimeout(this.DestroyBlackBox.bind(this), 1000);
        }

        this.arriveTexture = arriveTx;  // 도착하고 변경해줄 텍스쳐
        this.targetYpos = targetY;      // 도착 y 위치

        if(this.type === "normal"){
            switch (dir) {
                case 'left':
                    this.MoveX("right");
                    break;

                case 'right':
                    this.MoveX("left");
                    break;

                case 'center':
                    // 정답 베네핏
                    break;
            }
        }
    },
    SetSizeCrop:function(){
        this.spTile.texture.crop.x = this.origCropX;
        this.spTile.texture.crop.width = this.baseSize.w;
    },
    IsSpecial:function(){
        if(this.type === "normal") return false;

        return true;
    },
    DestroyBlackBox:function(){
        this.blackbox.clear();
    },
    ChangeSpecialTile:function(_type){
        // 황금과 다이아타일 처음 생성되었을때는 일반타일로 보이다가 spine 이벤트때 해당 특수타일로 바뀌어야 한다.
        if(_type === undefined){
            //this.sp2.visible = true;
        }else{
            switch (_type) {
                case "gold":
                    this.type = _type;
                    this.spTile.scale.setTo((this.baseSize.w / BASE_TILE_WIDTH), 1);//this.spTile.width = this.baseSize.w;
                    this.spTile.loadTexture('UI_map', 'gold_tile.png');
                    this.origCropX = this.spTile.texture.crop.x;
                    break;

                case "dia":
                    this.type = _type;
                    this.spTile.scale.setTo((this.baseSize.w / BASE_TILE_WIDTH), 1);//this.spTile.width = this.baseSize.w;
                    this.spTile.loadTexture('UI_map', 'dia_tile.png');
                    this.origCropX = this.spTile.texture.crop.x;
                    break;
            }
        }
    },
    Hide:function(){
        this.spTile.visible = false;
        // this.spTile.destroy();
        // this.spTile = null;
    },
    Refresh:function(){
        this.spTile.loadTexture('UI_map', 'floor_moving' + gTileSkin + '.png');
        this.origCropX = this.spTile.texture.crop.x;
    },
    MoveX:function(dir){
        // Ver.03
        var tile_width_rate = 1 - (this.baseSize.w / BASE_TILE_WIDTH);
        //console.log(":::::::::: tile_width_rate ::::::::::::::: " + tile_width_rate);
        switch(dir){
            case "right":
                //if(this.dir === "right" || this.spTile.visible === false) return;
                //gSwingTime = new Date().getTime();
                this.tweenEvent = MG.game.add.tween(this.spTile).to({x:MG.game.width - this.baseSize.w}, MG.playGameController.GetSwingSpeed() * (1 + tile_width_rate), Phaser.Easing.Linear.None, true, 0);
                //this.dir = "right";
                this.tweenEvent.onComplete.addOnce(function() {
                    //console.log(":::::::::: moveX = right ::::::::::::::: " + this.isDrop + "   tile.y = " + this.spTile.position.y + "   target.y = " + this.targetYpos);
                    //console.log(":::::::::: ===> " + this.index);
                    //if(this.spTile.visible === false) return;
                    if(this.isDrop === false && this.spTile.visible) this.MoveX("left");
                }.bind(this));
                break;

            case "left":
                //if(this.dir === "left" || this.spTile.visible === false) return;
                //gSwingTime = new Date().getTime();
                this.tweenEvent = MG.game.add.tween(this.spTile).to({x:0}, MG.playGameController.GetSwingSpeed() * (1 + tile_width_rate), Phaser.Easing.Linear.None, true, 0);
                //this.dir = "left";
                this.tweenEvent.onComplete.addOnce(function() {
                    //console.log(":::::::::: moveX = left ::::::::::::::: " + this.isDrop + "   tile.y = " + this.spTile.position.y + "   target.y = " + this.targetYpos);
                    //console.log(":::::::::: 우 -> 좌 경과시간 = " + (new Date().getTime() - gSwingTime)) / 1000;
                    //console.log(":::::::::: <=== " + this.index);
                    //if(this.spTile.visible === false) return;
                    if(this.isDrop === false && this.spTile.visible) this.MoveX("right");
                }.bind(this));
                break;
        }

    },
    Drop:function(targetX){
        this.isDrop = true;
        this.DeleteTweenEvent();

        if(targetX !== undefined){
            this.tweenEvent = MG.game.add.tween(this.spTile).to({x:targetX, y:this.targetYpos}, MG.playGameController.GetDropSpeed(), Phaser.Easing.Linear.None, true, 0);
            this.tweenEvent.onComplete.addOnce(function() {
                this.Arrive();
            }.bind(this));
        }else{
            this.tweenEvent = MG.game.add.tween(this.spTile).to({y:this.targetYpos}, MG.playGameController.GetDropSpeed(), Phaser.Easing.Linear.None, true, 0);
            this.tweenEvent.onComplete.addOnce(function() {
                this.Arrive();
            }.bind(this));
        }
    },
    DropFake:function(){
        this.isDrop = true;
        this.DeleteTweenEvent();
        this.Arrive();
    },
    SuperSkipDrop:function(){
        this.DeleteTweenEvent();

        // this.tweenEvent = MG.game.add.tween(this.spTile).to({y:this.targetYpos}, MG.playGameController.GetDropSpeed(), Phaser.Easing.Linear.None, true, 0);
        //  this.tweenEvent.onComplete.addOnce(function() {
        if(gPlayData.floor_count % 3 === 0) MG.PlayAudio('down' + gTileSkin);
        MG.playGameController.AddFloor();
        this.ArriveComplete(this.myParent, this.spTile.position.x, this.spTile.position.y, BASE_TILE_WIDTH, gTILE_HEIGHT, this.arriveTexture, false, false);
        // }.bind(this));
    },
    Arrive:function(){
        this.isDrop = false;
        MG.uiGame.Arrive();
    },
    // isEffect : 하얀/노란 이펙트
    ArriveComplete:function(parent, dir, gap, x, y, w, h, arriveTx, isSplit, isEffect){

        this.DeleteTweenEvent();

        if(this.type === "gold" || this.type === "dia"){
            this.spTile.scale.setTo(1);
            switch(this.type){
                case "gold":
                    this.spTile.loadTexture('UI_map', 'gold_tile.png');
                    this.origCropX = this.spTile.texture.crop.x;
                    break;

                case "dia":
                    this.spTile.loadTexture('UI_map', 'dia_tile.png');
                    this.origCropX = this.spTile.texture.crop.x;
                    break;
            }
        }
        this.baseSize.w = w;
        this.baseSize.h = h;

        if(isEffect && this.type !== "gold" && this.type !== "dia") {
            this.myParent.bringToTop(this.whitebox);//this.myParent.swap(this.spTile, this.whitebox);
            this.ShowArriveEffect(parent, !isSplit, x, y, w, h);
        }

        switch(dir){
            case "right":
                //this.spTile.position.x -= gap;
                // crop.w 사이즈 조정
                if(this.type !== "gold" && this.type !== "dia") this.spTile.texture.crop.x = this.origCropX + (this.spTile.position.x - MG.playGameController.GetTilScope().min);
                this.spTile.texture.crop.width = this.baseSize.w;
                break;

            case "left":
                // spTile 위치 조정
                this.spTile.position.x = x;
                if(this.type !== "gold" && this.type !== "dia") this.spTile.texture.crop.x = this.origCropX + (this.spTile.position.x - MG.playGameController.GetTilScope().min);
                this.spTile.texture.crop.width = this.baseSize.w;
                // crop.w 사이즈 조정
                break;
        }

        if(this.type === "gold" || this.type === "dia"){
            this.spTile.texture.crop.width = 400;
            this.spTile.scale.setTo((w/BASE_TILE_WIDTH), 1);
        }

        /////////// todo : 잠시 주석처리
        // setTimeout(function(){
        //     this.spTile.loadTexture('UI_map', arriveTx);
        //     this.origCropX = this.spTile.texture.crop.x;
        //     this.SetSizeCrop();
        // }.bind(this),170);
    },
    GetCenter:function(){
        return parseFloat(this.spTile.position.x + (this.baseSize.w * 0.5));
    },
    // SetTexturePosition:function(){
    //     // ver.01 텍스쳐 위치 수정 (옵션)
    //     var _leftendpos = parseInt(this.spTile.position.x - (this.spTile.width * 0.5));
    //     //var _baseleftendpos = parseInt(MG.game.world.centerX - (BASE_TILE_WIDTH * 0.5));
    //     if(_leftendpos < BASE_TILE_LEFT_POS){
    //         this.spTile.tilePosition.x += BASE_TILE_LEFT_POS - _leftendpos;
    //     }else{
    //         this.spTile.tilePosition.x -= _leftendpos - BASE_TILE_LEFT_POS;
    //     }
    // },
    ShowArriveEffect:function(parent, isPerfect, x, y, w, h){

        this.whitebox.clear();

        if(isPerfect){
            this.whitebox.beginFill(0xFFFF00);
        }else{
            this.whitebox.beginFill(0xFFFFFF);
        }
        this.whitebox.drawRect(x, (y - (h*0.5)), w, h);
        // this.whitebox.drawRect((x - (w*0.5)), (y - (h*0.5)), w, h);
        this.whitebox.endFill();
        this.whitebox.alpha = 0;

        //console.log("::::::::::::::::::::: " + (this.spTile.world.x - (x - (w*0.5))));

        MG.game.add.tween(this.whitebox).to({alpha:1}, 200, Phaser.Easing.Linear.None, true, 0, 0, true).onComplete.addOnce(function(){
            this.whitebox.clear();
        }.bind(this));

    },
    /**
     * @return {null}
     */
    GetSprite:function(){
        return this.spTile;
    },
    GetTileSprite:function(){
        return this.spTile;
    },
    GetArriveTexture:function(){
        return this.arriveTexture;
    },
    GetWidth:function(){
        return this.baseSize.w;
    },
    Pause:function () {
        if(this.tweenEvent !== null) this.tweenEvent.pause();
    },
    Resume:function () {
        if(this.tweenEvent !== null) this.tweenEvent.resume();
    },
    DeleteTweenEvent:function(){
        if(this.tweenEvent !== null) {
            this.tweenEvent.stop();
            this.tweenEvent = null;
        }
    }
};

'use strict';

function Coin() {
    this.sprite = MG.game.add.sprite(0, 0, 'UI_0');//MG.game.add.sprite(0, 0, "UI_0", "Game_Coin.png");
    //this.sprite.scale.setTo(0.75);
    this.sprite.anchor.setTo(0.5);
    this.sprite.animations.add('spine', Phaser.Animation.generateFrameNames('Game_Coin_', 1, 12, '.png', 2), 20, true);
    this.sprite.visible = false;
    this.tweenEvent = null;
    this.myParent = null;
}

Coin.prototype = {
    Init:function(){
        this.sprite.animations.stop();
        this.sprite.visible = false;
        this.sprite.position.setTo(99999, 99999);
    },
    Show:function(parent, x, y){
        this.myParent = parent;
        this.myParent.addChild(this.sprite);
        this.sprite.alpha = 1;
        this.sprite.visible = true;
        //MG.game.add.tween(this.sprite).to({alpha:1}, 200, Phaser.Easing.Linear.None, true, 0);
        this.sprite.position.setTo(x, y);
        this.sprite.animations.play('spine');
    },
    Hide:function(){
        this.sprite.visible = false;
    },
    Fly:function () {
        //var _y = MG.uiGame.GetCoinIconPosition().y;
        //if(MG.uiGame.GetGroup().position.y > 0) _y -= (MG.uiGame.GetGroup().position.y + 60);
        MG.game.add.tween(this.sprite).to({alpha:0}, 350, Phaser.Easing.Linear.None, true, 200);
        this.tweenEvent = MG.game.add.tween(this.sprite).to({x:MG.uiGame.GetCoinIconPosition().x + 100, y:MG.uiGame.GetCoinIconPosition().y + 100}, 500, Phaser.Easing.Linear.None, true, 0);
        this.tweenEvent.onComplete.addOnce(function() {
            // if(gIsStandAlone){
            //     var _cnt = MG.uiGame.GetCoinText();
            //     MG.uiGame.UpdateCoin(++_cnt);
            // }else{
            // ++kData.cc;
            //gPlayData.get_coin += 10;
            MG.uiGame.StartCoinWithAnimation(10);//MG.uiGame.UpdateCoin(kData.cc + gPlayData.get_coin);
            // }
            this.Hide();
        }.bind(this));
    },
    FlyNotAddCoinCount:function () {
        MG.game.add.tween(this.sprite).to({alpha:0}, 350, Phaser.Easing.Linear.None, true, 200);
        this.tweenEvent = MG.game.add.tween(this.sprite).to({x:"-260", y:"-290"}, 500, Phaser.Easing.Linear.None, true, 0);
        this.tweenEvent.onComplete.addOnce(function() {
            //this.sprite.alpha = 1;
            this.Hide();
        }.bind(this));
    },
    GetSprite:function(){
        return this.sprite;
    }
};

'use strict';

function Game() {
    MG.Game = this;
    this.cb = null;
}

Game.prototype = {
    init: function() {
        MG.game.stage.backgroundColor = 0xFFFFFF;
        MG.game.input.maxPointers = 1;	// 마우스 및 터치입력을 한개만 받는다.

        // if(Define.PID == "100010" || Define.PID == "100026"){
        //     // 캐시워크다
        //     MG.game.stage.disableVisibilityChange = false;
        // }else{
            // 핫쉐어다
            MG.game.stage.disableVisibilityChange = true;
        // }

        // MG.game.time.forceSingleUpdate = true;
        MG.game.time.slowMotion = 1.0;

        //document.getElementById ( 'adContainer' ).style.display = 'none';
        BASE_TILE_LEFT_POS = MG.game.world.centerX - (BASE_TILE_WIDTH * 0.5);

        /////////////////////////////////////////
        //if(gBuild === "dev") this.setParams();
        ////////////////////////////////////////

        // if(gIsStandAlone){
        // }else{
            // MG.NM.Init();
            // this.languageSupportRequest();
        // }

        // 유튜브 동영상 관련 초기화
        // gYouTubeDiv = document.getElementById("youtubeP");
        // gYouTubeIFrame = document.getElementById("youtubeFrame");
    },
    preload: function () {

        //LoadDataFirst(function () {
            // 로컬 데이터 로딩이 끝났다. 데이터 기반 셋팅해주자
            //MG.NM.Init();
            if(kData.t0 === "1"){
                gTileSkin = 1;
                gBaseScore = parseInt(10 * gTileAddScore[0]);
            }
            if(kData.t1 === "1"){
                gTileSkin = 2;
                gBaseScore = parseInt(10 * gTileAddScore[1]);
            }
            if(kData.t2 === "1"){
                gTileSkin = 3;
                gBaseScore = parseInt(10 * gTileAddScore[2]);
            }
            if(kData.t3 === "1"){
                gTileSkin = 4;
                gBaseScore = parseInt(10 * gTileAddScore[3]);
            }
            console.log("::::::::::::::::::: gTileSkin = " + gTileSkin);
            console.log("::::::::::::::::::: gBaseScore = " + gBaseScore);
        //});

        MG.gUiGame = this.game.add.group();         // 로비 뒷배경 & 실제 게임 동작 시 노출되는 UI들, 게임에 필요한 객체들
        MG.gUiFixed = this.game.add.group();        // 카메라 고정 ui
        MG.gLobbyUI = this.game.add.group();        // 로비 UI 스타트버튼, 랭킹, 옵션, 상점 링크들 (게임 시작 시 사라진다)
        MG.gSuperSkipPopup = this.game.add.group(); // 슈퍼스킵 (게임보다는 위에, 코인상점보다는 아래에 있어야 한다.)
        MG.gCoinShop = this.game.add.group();       // 코인상점 (광고보고 코인 획득)
        MG.gTowerShop = this.game.add.group();      // 타워상점 (타워를 구매)
        //MG.gRank = this.game.add.group();           // 랭킹 보드
        //MG.gQuizUI = this.game.add.group();         // 퀴즈 UI
        MG.gGameOver = this.game.add.group();       // 게임 종료창
        MG.gTutorial = this.game.add.group();       // 도움말
        //MG.gOption = this.game.add.group();         // 옵션
        MG.gPause = this.game.add.group();          // 일시정지
        MG.gPopup = this.game.add.group();          // 공용 팝업창 (옵션, 상점, 맵, 랭킹)
        //MG.gLoading = this.game.add.group();        // 장면전환 효과
        MG.gIntro = this.game.add.group();          // 인트로 스플리쉬 화면 & 로그인창

        //MG.uiIntro = new UI_Intro(MG.gIntro);

        // Start...
        //// 인트로를 보여줄때
        //MG.uiIntro.Show();

        // 인트로를 안보여주고 바로 로비로 이동
        this.createCustom(function(){
            MG.uiGame.Show("lobby");
            MG.uiLobby.Show();
        }.bind(this));
    },
    create: function () {
        MSSDK.ready(); //게임스낵 ready
        MSSDK.audioSubscribe(function (onoff){//게임스낵 오디오콜백
            if(MG && MG.Game) {
                MG.Game.sound_googlesnack(onoff);
            }
        });

        // MG.NM.LoadingLobbyData(true, function (data) {
        //     gLobbyData = data;
        //     gTileSkin = gLobbyData.pt;      // 현재 타일
        //     }.bind(this));

        //MG.LM.Init(function(){
        //     MG.login = new UI_Login(MG.gPopup);
        //     MG.join = new UI_Join(MG.gPopup);
        //     MG.uiGame = new UI_Game(MG.gUiGame);                    // 게임 중 획득 점수, 이펙트 등
        //     MG.uiLobby = new UI_Lobby(MG.gLobbyUI);                 // 게임 화면 위에 게임 스타트, 랭킹, 옵션 등의 버튼 배치
        //     MG.uiGameOver = new UI_GameOver(MG.gGameOver);          // 게임 종료 창
        //     MG.uiShop = new UI_Shop(MG.gPopup);                     // 상점창
        //     MG.playGameController = new PlayGameController();       // 게임 플레이 콘트롤러 (필요한 UI는 MG.uiGame에서 받아 사용한다.)
        //     MG.quizManager = new QuizManager();                     // 퀴즈 관리자
        //     MG.timerManager = new TimerManager();                   // 타이머 관리자 (플레이 지연 측정)
        //     MG.coinManager = new CoinManager(MG.gUiGame);           // 코인 관리자
        //     MG.uiPopup = new UI_Popup(MG.gPopup);                   // 공용 팝업 창
        //});

    },
    createCustom: function (cb) {
        //MG.LM.Init(function(){
        // MG.login = new UI_Login(MG.gPopup);
        // MG.join = new UI_Join(MG.gPopup);
        MG.uiGame = new UI_Game(MG.gUiGame);                    // 게임 중 획득 점수, 이펙트 등
        MG.uiLobby = new UI_Lobby(MG.gLobbyUI);                 // 게임 화면 위에 게임 스타트, 랭킹, 옵션 등의 버튼 배치
        MG.uiGameOver = new UI_GameOver(MG.gGameOver);          // 게임 종료 창
        MG.uiShop = new UI_Shop(MG.gPopup);                     // 상점창
        MG.playGameController = new PlayGameController();       // 게임 플레이 콘트롤러 (필요한 UI는 MG.uiGame에서 받아 사용한다.)
        //MG.quizManager = new QuizManager();                     // 퀴즈 관리자
        MG.timerManager = new TimerManager();                   // 타이머 관리자 (플레이 지연 측정)
        MG.coinManager = new CoinManager(MG.gUiGame);           // 코인 관리자
        MG.uiPopup = new UI_Popup(MG.gPopup);                   // 공용 팝업 창
        MG.specialTileManager = new SpecialTileManager();       // 특수타일 전담 (황금, 다이아)
        //});
        //Game.prototype.setTouchPosition();
        BASE_TILE_LEFT_POS = parseInt(MG.game.world.centerX - (BASE_TILE_WIDTH * 0.5));

        // 핫쉐어 랭킹 실행
        if(Define.RANKING_GAME)
        {
            // setTimeout(function(){
                if(PopconGame.PhaserRanking) PopconGame.PhaserRanking.CreateIcon(MG.game, 20, MG.iCSY + 260);
            // }.bind(this), 500);
        }
        if ( Define.PID == "100064") PopconGame.Sdk.createAppMoreGame(MG.game,58,1140);

        if(cb !== undefined) cb();
    },
    render: function() {
        //gFps.text = MG.game.time.fps;
        // //MG.game.debug.text(MG.game.time.fps, 10, 10, {font:"35px Arial", fill:"#00ff00", fontWeight: "bold",  align:"center"});
    },
    getUrlParams: function () {
        var params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
        return params;
    },
    // 파라미터 세이브
    setParams:function(){
        var urlParams = this.getUrlParams();
        // // 기본 유저 정보
        // if(urlParams.x !== undefined) gBaseData.KEY = urlParams.x;
        // if(urlParams.z !== undefined) gBaseData.COCODE = urlParams.z;
        // if(urlParams.y !== undefined) gBaseData.LANGCODE = urlParams.y;
        // if(urlParams.t !== undefined) gBaseData.TNC = urlParams.t;
        // if(urlParams.s !== undefined) gBaseData.SSO = urlParams.s;
        // 게임 디버깅 기능
        if(urlParams.debug !== undefined && urlParams.debug === "true") gDebug = true;                          // 디버그 모드
        if(urlParams.quiz_count !== undefined) QUIZ_COUNT = parseInt(urlParams.quiz_count);                     // 퀴즈 출현 빈도 조절
        if(urlParams.tile_skin !== undefined) {
            gTileSkin = parseInt(urlParams.tile_skin);
            gBaseScore = parseInt(10 * gTileAddScore[gTileSkin - 1]);
        }                        // 타일 스킨 강제 설정 (1~4)
        if(urlParams.sw_start_value !== undefined) gSwingSpeedStartValue = parseInt(urlParams.sw_start_value);  // 스윙스피드 공식 시작값
        if(urlParams.sw_down_value !== undefined) gSwingSpeedDownValue = parseInt(urlParams.sw_down_value);     // 스윙스피드 공식 목표하락값
        if(urlParams.coin !== undefined) {
            kData.cc = parseInt(urlParams.coin);
            // this.UpdateCoin();
            MG.NM.LocalSave();
        }
        // 최고 층수
        if(urlParams.bf !== undefined) {
            kData.bf = parseInt(urlParams.bf);
            MG.NM.LocalSave();
        }
        // 최고 점수
        if(urlParams.bs !== undefined) {
            kData.bs = parseInt(urlParams.bs);
            MG.NM.LocalSave();
        }
        if(urlParams.clear_data !== undefined) localStorage.clear();

    },

    setTouchPosition: function (_x, _y) {
        if(_x === undefined || _y === undefined || gTouchPos.length < 3) {
            // 배열 초기화
            gTouchPos.length = 0;
            gTouchPos[0] = "0:0";
            gTouchPos[1] = "0:0";
            gTouchPos[2] = "0:0";
        } else {
            gTouchPos[0] = gTouchPos[1];
            gTouchPos[1] = gTouchPos[2];
            gTouchPos[2] = _x.toFixed(5) + ":" + _y.toFixed(5);
        }
    },
    update: function () {
        MG.playGameController.UpdateTimer();
    },
    sound_googlesnack(onoff){ //게임스낵// 모든 사운드 버튼 업데이트
        window.focus();
        //---------------
        kData.isAudio = onoff;
        if(onoff){
            //MG.PlayBgm('lobby_bgm', true);
            //MG.SetBgmVolume('lobby_bgm', 0.5);
            //console.log('MG.PlayBgm(lobby_bgm), true)');

            MG.SetBgmVolume('game_bgm', 0.5);
            MG.SetBgmVolume('lobby_bgm', 1);
            console.log('MG.SetBgmVolume(1))');
        }else{
            //MG.StopBgm('lobby_bgm');
            //console.log('MG.StopBgm(lobby_bgm)');

            MG.SetBgmVolume('game_bgm', 0);
            MG.SetBgmVolume('lobby_bgm', 0);
            console.log('MG.SetBgmVolume(0))');
        }

        if(MG && MG.uiLobby){
            // MG.uiLobby.btnSoundOn.visible = onoff;
            // MG.uiGame.uiPause.btnSoundOn.visible = onoff;
            // MG.uiLobby.btnSoundOff.visible = !onoff;
            // MG.uiGame.uiPause.btnSoundOff.visible = !onoff;
        }
    },
};

window[''] = window[''] || {};
window[''].Game = Game;