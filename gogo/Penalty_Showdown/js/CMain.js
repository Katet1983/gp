function CMain(oData) {
	var _bUpdate
	var _iCurResource = 0
	var RESOURCE_TO_LOAD = 0
	var _iState = STATE_LOADING
	var _bGameReadyFired = false

	//
	var _oLanguage
	//

	var _oData
	var _oPreloader
	var _oMenu
	var _oHelp
	var _oLevelMenu
	var _oSelectMenu

	function saveItem(key, value) {
		if (typeof GameSnacks !== "undefined" && GameSnacks.storage) {
			GameSnacks.storage.setItem(key, value)
		}
	}

	function getItem(key) {
		if (typeof GameSnacks !== "undefined" && GameSnacks.storage) {
			return GameSnacks.storage.getItem(key)
		}
		return null
	}

	function removeItem(key) {
		if (typeof GameSnacks !== "undefined" && GameSnacks.storage) {
			GameSnacks.storage.removeItem(key)
		}
	}

	function clearStorage() {
		if (typeof GameSnacks !== "undefined" && GameSnacks.storage) {
			GameSnacks.storage.clear()
		}
	}

	this.initContainer = function () {
		s_oCanvas = document.getElementById("canvas")
		s_oStage = new createjs.Stage(canvas)
		createjs.Touch.enable(s_oStage)
		s_oStage.preventSelection = false

		s_bMobile = jQuery.browser.mobile
		if (s_bMobile === false) {
			s_oStage.enableMouseOver(20)
			$("body").on("contextmenu", "#canvas", function (e) {
				return false
			})
			FPS = FPS_DESKTOP
			FPS_TIME = 1 / FPS
			PHYSICS_STEP = 1 / (FPS * STEP_RATE)
			ROLL_BALL_RATE = 60 / FPS
		} else {
			BALL_VELOCITY_MULTIPLIER = 0.8
		}

		s_iPrevTime = new Date().getTime()

		createjs.Ticker.addEventListener("tick", this._update)
		createjs.Ticker.framerate = FPS

		if (navigator.userAgent.match(/Windows Phone/i)) {
			DISABLE_SOUND_MOBILE = true
		}

		s_oSpriteLibrary = new CSpriteLibrary()

		s_oNetworkManager = new CNetworkManager()

		//ADD PRELOADER
		_oPreloader = new CPreloader()

		var storedLanguage = getItem("selected_language")
		var languageToLoad = storedLanguage ? storedLanguage : "en"

		this.loadLanguage(languageToLoad)

		// @DESC: Integrate GameSnacks audio interface | Maintain Mute on tab switching in the game
		function syncAudioMuteState() {
			if (typeof GameSnacks !== "undefined" && GameSnacks.audio?.isEnabled) {
				const isEnabled = GameSnacks.audio.isEnabled()
				Howler.mute(!isEnabled)
			}
		}

		window.addEventListener("visibilitychange", syncAudioMuteState)

		if (
			typeof GameSnacks !== "undefined" &&
			GameSnacks.audio?.addEventListener
		) {
			GameSnacks.audio.addEventListener("volumechange", () => {
				const isEnabled = GameSnacks.audio.isEnabled()
				Howler.mute(!isEnabled)
				console.log("GameSnacks audio volumechange triggered:", isEnabled)
			})
		}

		_bUpdate = true

		// @DESC: Here we are calling the first frameready to render.
		if (
			typeof GameSnacks !== "undefined" &&
			GameSnacks.game &&
			GameSnacks.game.firstFrameReady
		) {
			GameSnacks.game.firstFrameReady()
		}
	}

	this.soundLoaded = function () {
		_iCurResource++
		var iPerc = Math.floor((_iCurResource / RESOURCE_TO_LOAD) * 100)
		_oPreloader.refreshLoader(iPerc)
	}

	this._initSounds = function () {
		var aSoundsInfo = new Array()
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "drop_bounce_grass",
			loop: false,
			volume: 1,
			ingamename: "drop_bounce_grass",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "click",
			loop: false,
			volume: 1,
			ingamename: "click",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "kick",
			loop: false,
			volume: 1,
			ingamename: "kick",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "ball_saved",
			loop: false,
			volume: 1,
			ingamename: "ball_saved",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "goal_keeper",
			loop: false,
			volume: 1,
			ingamename: "goal_keeper",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "goal_striker",
			loop: false,
			volume: 1,
			ingamename: "goal_striker",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "keep_ball",
			loop: false,
			volume: 1,
			ingamename: "keep_ball",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "pole",
			loop: false,
			volume: 1,
			ingamename: "pole",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "win",
			loop: false,
			volume: 1,
			ingamename: "win",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "soundtrack_prev",
			loop: true,
			volume: 1,
			ingamename: "soundtrack",
		})
		aSoundsInfo.push({
			path: "./sounds/",
			filename: "crowd",
			loop: true,
			volume: 1,
			ingamename: "crowd",
		})

		RESOURCE_TO_LOAD += aSoundsInfo.length

		s_aSounds = new Array()
		for (var i = 0; i < aSoundsInfo.length; i++) {
			s_aSounds[aSoundsInfo[i].ingamename] = new Howl({
				src: [aSoundsInfo[i].path + aSoundsInfo[i].filename + ".mp3"],
				autoplay: false,
				preload: true,
				loop: aSoundsInfo[i].loop,
				volume: aSoundsInfo[i].volume,
				onload: s_oMain.soundLoaded,
			})
		}
	}

	this._loadImages = function () {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this)

		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu_new.jpg")
		s_oSpriteLibrary.addSprite("but_local", "./sprites/play.png")
		s_oSpriteLibrary.addSprite(
			"but_multiplayer",
			"./sprites/but_multiplayer.png",
		)
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon_new.png")
		s_oSpriteLibrary.addSprite(
			"but_fullscreen",
			"./sprites/but_fullscreen_new.png",
		)
		s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png")
		s_oSpriteLibrary.addSprite("ball_shadow", "./sprites/ball_shadow.png")
		s_oSpriteLibrary.addSprite("start_ball", "./sprites/start_ball.png")
		s_oSpriteLibrary.addSprite("hand_touch", "./sprites/hand_touch.png")
		s_oSpriteLibrary.addSprite("cursor", "./sprites/cursor.png")
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png")
		s_oSpriteLibrary.addSprite("msg_box_small", "./sprites/msg_box_small.png")
		s_oSpriteLibrary.addSprite("bg_levelselect", "./sprites/bg_levelselect.jpg")
		s_oSpriteLibrary.addSprite("but_eng", " ./sprites/english.png")
		s_oSpriteLibrary.addSprite("but_fre", " ./sprites/francais.png")
		s_oSpriteLibrary.addSprite("but_lang", "./sprites/Language_Button.png")
		s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level_new.png")
		s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info_new.png")
		s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png")
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit_new.png")
		s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes_new.png")
		s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no_new.png")
		s_oSpriteLibrary.addSprite(
			"but_level_locked",
			"./sprites/but_level_locked_new.png",
		)
		s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next_new.png")
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart_new.png")
		s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home_new.png")
		s_oSpriteLibrary.addSprite(
			"but_delete_savings",
			"./sprites/but_delete_savings_new.png",
		)
		s_oSpriteLibrary.addSprite("ball_kick", "./sprites/ball_kick.png")
		s_oSpriteLibrary.addSprite("score_side_bg", "./sprites/score_side_bg.png")

		for (var k = 0; k < NUM_TEAMS; k++) {
			s_oSpriteLibrary.addSprite(
				"flag_" + k,
				"./sprites/flags/flag_" + k + ".png",
			)
		}

		//PENALTY KICKS
		s_oSpriteLibrary.addSprite(
			"bg_game_striker",
			"./sprites/striker/bg_game_striker_new.png",
		)
		s_oSpriteLibrary.addSprite("goal_0", "./sprites/striker/goal_0.png")

		for (var t = 0; t < 22; t++) {
			for (var s = 0; s < 31; s++) {
				s_oSpriteLibrary.addSprite(
					"player_" + t + "_" + s,
					"./sprites/striker/player/player_" + t + "_" + s + ".png",
				)
			}
		}

		for (var k = 0; k < 2; k++) {
			for (var i = 0; i < 24; i++) {
				s_oSpriteLibrary.addSprite(
					"gk_idle_" + k + "_" + i,
					"./sprites/striker/gk_idle_" + k + "_" + i + ".png",
				)
			}

			for (var i = 0; i < 51; i++) {
				s_oSpriteLibrary.addSprite(
					"gk_save_center_down_" + k + "_" + i,
					"./sprites/striker/gk_save_center_down_" + k + "_" + i + ".png",
				)
			}

			for (var i = 0; i < 25; i++) {
				s_oSpriteLibrary.addSprite(
					"gk_save_center_up_" + k + "_" + i,
					"./sprites/striker/gk_save_center_up_" + k + "_" + i + ".png",
				)
			}

			for (var i = 0; i < 34; i++) {
				s_oSpriteLibrary.addSprite(
					"gk_save_down_left_" + k + "_" + i,
					"./sprites/striker/gk_save_down_left_" + k + "_" + i + ".png",
				)
			}

			for (var i = 0; i < 34; i++) {
				s_oSpriteLibrary.addSprite(
					"gk_save_down_right_" + k + "_" + i,
					"./sprites/striker/gk_save_down_right_" + k + "_" + i + ".png",
				)
			}

			for (var i = 0; i < 42; i++) {
				s_oSpriteLibrary.addSprite(
					"gk_save_left_" + k + "_" + i,
					"./sprites/striker/gk_save_left_" + k + "_" + i + ".png",
				)
			}

			for (var i = 0; i < 42; i++) {
				s_oSpriteLibrary.addSprite(
					"gk_save_right_" + k + "_" + i,
					"./sprites/striker/gk_save_right_" + k + "_" + i + ".png",
				)
			}
		}

		//GOALKEEPER
		s_oSpriteLibrary.addSprite(
			"bg_game_gk",
			"./sprites/goalkeeper/bg_game_gk_new.jpg",
		)
		s_oSpriteLibrary.addSprite("gloves", "./sprites/goalkeeper/gloves.png")
		s_oSpriteLibrary.addSprite("goal_1", "./sprites/goalkeeper/goal_1.png")
		s_oSpriteLibrary.addSprite(
			"help_mouse",
			"./sprites/goalkeeper/help_mouse.png",
		)
		s_oSpriteLibrary.addSprite(
			"help_touch",
			"./sprites/goalkeeper/help_touch.png",
		)
		for (var k = 0; k < NUM_TEAMS; k++) {
			s_oSpriteLibrary.addSprite(
				"opponent_" + k,
				"./sprites/goalkeeper/opponent_" + k + ".png",
			)
		}

		RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites()

		s_oSpriteLibrary.loadSprites()
	}

	this._onImagesLoaded = function () {
		_iCurResource++
		var iPerc = Math.floor((_iCurResource / RESOURCE_TO_LOAD) * 100)
		_oPreloader.refreshLoader(iPerc)
	}

	this._onAllImagesLoaded = function () {}

	this.preloaderReady = function () {
		_iCurResource = 0

		if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
			this._initSounds()
		}

		this._loadImages()
		_bUpdate = true
	}

	this._onRemovePreloader = function () {
		_oPreloader.unload()

		try {
			saveItem("ls_available", "ok")
		} catch (evt) {
			// localStorage not defined
			// s_bStorageAvailable = false
		}

		this.gotoMenu()

		s_oSoundtrack = playSound("soundtrack", 1, true)
	}

	//

	this.loadLanguage = function (language) {
		var script = document.createElement("script")
		script.src = `js/CLang_${language}.js`
		script.onload = function () {
			// s_oLanguage.applyTranslations(window)
		}
		document.head.appendChild(script)
	}

	this._onChooseLang = function () {
		_oPreloader.unload()
		this.gotoChooseL()
	}

	this.gotoChooseL = function () {
		_oLanguage = new CLanguageCtlPanel()
	}

	this._fromlangchoice = function () {
		_oLanguage.unload()
		this.gotoPreload()
	}

	this.gotoPreload = function () {
		_oPreloader = new CPreloader()
	}
	//

	//////////////////LOCAL STORAGE/////////////////////////

	this.saveMatch = function (iMatch, iOpponent, szResult, iLevelScore, iScore) {
		saveItem(
			LOCALSTORAGE_STRING + "match_" + iMatch,
			JSON.stringify({
				opponent: iOpponent,
				result: szResult,
				score: iScore,
				level_score: iLevelScore,
			}),
		)

		// @DESC: saving the score in GameSnacks.
		if (typeof GameSnacks !== "undefined" && GameSnacks.score) {
			GameSnacks.score.update(iScore)
		}
	}

	this.saveTeam = function (iTeam) {
		s_iTeamSelected = iTeam
		saveItem(LOCALSTORAGE_STRING + "team", s_iTeamSelected)
	}

	this.saveLevel = function (iLevel) {
		s_iLastLevel = iLevel
		saveItem(LOCALSTORAGE_STRING + "level", s_iLastLevel)
	}

	this.getStoredTeamSelected = function () {
		return getItem(LOCALSTORAGE_STRING + "team")
	}

	this.getMatches = function () {
		if (getItem(LOCALSTORAGE_STRING + "match_1") === null) {
			return null
		} else {
			var aMatches = new Array()
			for (var i = 1; i < NUM_MATCHES + 1; i++) {
				aMatches.push(JSON.parse(getItem(LOCALSTORAGE_STRING + "match_" + i)))
			}

			return aMatches
		}
	}

	this.getLastLevel = function () {
		var iLevel = getItem(LOCALSTORAGE_STRING + "level")
		if (iLevel === null) {
			return 1
		} else {
			return iLevel
		}
	}

	this.getScoreMatch = function (iLevel) {
		var oItem = getItem(LOCALSTORAGE_STRING + "match_" + iLevel)
		return JSON.parse(oItem).level_score
	}

	this.getScoreTillLevel = function (iLevel) {
		if (!s_bStorageAvailable) {
			return 0
		}

		var iScore = 0
		for (var i = 0; i < iLevel - 1; i++) {
			iScore += this.getScoreMatch(i + 1)
		}

		return iScore
	}

	////////////////////////////////////////////////////////

	this.gotoMenu = function () {
		_oMenu = new CMenu()
		_iState = STATE_MENU

		// @DESC: Notifying GameSnacks that the game is ready to be played | user interaction.
		if (
			!_bGameReadyFired &&
			typeof GameSnacks !== "undefined" &&
			GameSnacks.game &&
			GameSnacks.game.ready
		) {
			GameSnacks.game.ready()
			_bGameReadyFired = true
		}
	}

	this.gotoLevelPanel = function () {
		_oLevelMenu = new CLevelMenu()
		_iState = STATE_CHOOSE_LEVEL
	}

	this.gotoSelectTeam = function () {
		_oSelectMenu = new CSelectTeamMenu()

		_iState = STATE_CHOOSE_TEAM
	}

	this.gotoSelectTeamMulti = function () {
		_oSelectMenu = new CSelectTeamMenu()

		_iState = STATE_CHOOSE_TEAM
	}

	this.gotoGame = function (iLevel) {
		s_oGame = new CGameSingle(_oData, iLevel)
		_iState = STATE_GAME
	}

	this.gotoGameMulti = function (iLevel) {
		s_oGame = new CGameMulti(_oData, 1)

		_iState = STATE_GAME
	}

	this.gotoHelp = function () {
		_oHelp = new CHelp()
		_iState = STATE_HELP
	}

	this.stopUpdateNoBlock = function () {
		_bUpdate = false
		createjs.Ticker.paused = true
	}

	this.startUpdateNoBlock = function () {
		s_iPrevTime = new Date().getTime()
		_bUpdate = true
		createjs.Ticker.paused = false
	}

	this.stopUpdate = function () {
		_bUpdate = false
		createjs.Ticker.paused = true
		$("#block_game").css("display", "block")

		if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
			Howler.mute(true)
		}
	}

	this.startUpdate = function () {
		s_iPrevTime = new Date().getTime()
		_bUpdate = true
		createjs.Ticker.paused = false
		$("#block_game").css("display", "none")

		if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
			if (s_bAudioActive) {
				Howler.mute(false)
			}
		}
	}

	this._update = function (event) {
		if (_bUpdate === false) {
			return
		}
		var iCurTime = new Date().getTime()
		s_iTimeElaps = iCurTime - s_iPrevTime
		s_iCntTime += s_iTimeElaps
		s_iCntFps++
		s_iPrevTime = iCurTime

		if (s_iCntTime >= 1000) {
			s_iCurFps = s_iCntFps
			s_iCntTime -= 1000
			s_iCntFps = 0
		}

		if (_iState === STATE_GAME) {
			s_oGame.update()
		}

		s_oStage.update(event)
	}

	s_oMain = this

	_oData = oData
	ENABLE_FULLSCREEN = oData.fullscreen
	ENABLE_CHECK_ORIENTATION = oData.check_orientation

	GOAL_SCORED = oData.score_goal
	GOAL_MISSED = oData.score_goal_missed
	GOAL_SAVED = oData.score_ball_saved
	GOAL_SUFFERED = oData.score_goal_opponent

	AREAS_INFO = oData.area_goal

	this.initContainer()
}
var s_bMobile
var s_bAudioActive = true
var s_bFullscreen = false
var s_iCntTime = 0
var s_iTimeElaps = 0
var s_iPrevTime = 0
var s_iCntFps = 0
var s_iCurFps = 0
var s_oPhysicsController
var s_iCanvasResizeHeight
var s_iCanvasResizeWidth
var s_iCanvasOffsetHeight
var s_iCanvasOffsetWidth

var s_oDrawLayer
var s_oStage
var s_oCanvas
var s_oMain
var s_oSpriteLibrary
var s_oSoundTrack = null

var s_iLastLevel = 1
var s_iTeamSelected
var s_aSounds
var s_bStorageAvailable = true

var s_oNetworkManager
var s_bMultiplayer
var s_bPlayWithBot
