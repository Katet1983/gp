function CMenu() {
	var _pStartPosAudio
	var _pStartPosPlay
	var _pStartPosInfo
	var _pStartPosFullscreen
	var _pStartPosDelete

	var _iIdTimeout

	var _oBg
	var _oButLocal
	var _oButMultiplayer
	var _oButDeleteSavings
	var _oAreYouSurePanel
	var _oFade
	var _oAudioToggle
	var _oButFullscreen
	var _fRequestFullScreen = null
	var _fCancelFullScreen = null

	this._init = function () {
		_oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"))
		s_oStage.addChild(_oBg)

		var oSprite = s_oSpriteLibrary.getSprite("but_local")
		_oButLocal = new CGfxButton(
			CANVAS_WIDTH / 2,
			CANVAS_HEIGHT - 80,
			oSprite,
			s_oStage,
		)
		_oButLocal.addEventListener(ON_MOUSE_UP, this._onButLocalRelease, this)

		// var oSprite = s_oSpriteLibrary.getSprite('but_multiplayer');
		// _oButMultiplayer = new CGfxButton((CANVAS_WIDTH/2) + 450,CANVAS_HEIGHT -100,oSprite, s_oStage);
		// _oButMultiplayer.addEventListener(ON_MOUSE_UP, this._onButMultiplayerRelease, this);

		if (typeof GameSnacks !== "undefined" && GameSnacks.audio?.subscribe) {
			Howler.mute(!GameSnacks.audio.isEnabled())

			GameSnacks.audio.subscribe((isEnabled) => {
				Howler.mute(!isEnabled)
			})
		}

		if (
			(DISABLE_SOUND_MOBILE === false || s_bMobile === false) &&
			typeof GameSnacks === "undefined"
		) {
			var oSprite = s_oSpriteLibrary.getSprite("audio_icon")
			_pStartPosAudio = {
				x: CANVAS_WIDTH - oSprite.height / 2 - 10,
				y: oSprite.height / 2 + 10,
			}
			_oAudioToggle = new CToggle(
				_pStartPosAudio.x,
				_pStartPosAudio.y,
				oSprite,
				s_bAudioActive,
			)
			_oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this)
		}

		var doc = window.document
		var docEl = doc.documentElement
		_fRequestFullScreen =
			docEl.requestFullscreen ||
			docEl.mozRequestFullScreen ||
			docEl.webkitRequestFullScreen ||
			docEl.msRequestFullscreen
		_fCancelFullScreen =
			doc.exitFullscreen ||
			doc.mozCancelFullScreen ||
			doc.webkitExitFullscreen ||
			doc.msExitFullscreen

		if (ENABLE_FULLSCREEN === false) {
			_fRequestFullScreen = false
		}

		if (_fRequestFullScreen && screenfull.enabled) {
			oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
			_pStartPosFullscreen = {
				x: oSprite.height / 2 + 10,
				y: oSprite.height / 2 + 10,
			}

			_oButFullscreen = new CToggle(
				_pStartPosFullscreen.x,
				_pStartPosFullscreen.y,
				oSprite,
				s_bFullscreen,
				s_oStage,
			)
			_oButFullscreen.addEventListener(
				ON_MOUSE_UP,
				this._onFullscreenRelease,
				this,
			)
		}

		var oSprite = s_oSpriteLibrary.getSprite("but_delete_savings")
		_pStartPosDelete = {
			x: oSprite.width / 2 + 10,
			y: CANVAS_HEIGHT - oSprite.height / 2 - 10,
		}
		_oButDeleteSavings = new CGfxButton(
			_pStartPosDelete.x,
			_pStartPosDelete.y,
			oSprite,
			s_oStage,
		)
		_oButDeleteSavings.addEventListener(
			ON_MOUSE_UP,
			this._onDeleteSavings,
			this,
		)
		if (s_oMain.getStoredTeamSelected() === null) {
			_oButDeleteSavings.setVisible(false)
		}

		_oAreYouSurePanel = new CAreYouSurePanel(s_oStage)
		_oAreYouSurePanel.addEventListener(
			ON_BUT_YES_DOWN,
			this._onConfirmDelete,
			this,
		)

		_oFade = new createjs.Shape()
		_oFade.graphics
			.beginFill("black")
			.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

		s_oStage.addChild(_oFade)

		createjs.Tween.get(_oFade)
			.to({ alpha: 0 }, 1000)
			.call(function () {
				_oFade.visible = false
			})

		if (!s_bStorageAvailable) {
			new CMsgBox(TEXT_ERR_LS, s_oStage)
		}

		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	}

	this.refreshButtonPos = function (iNewX, iNewY) {
		if (_oAudioToggle) {
			_oAudioToggle.setPosition(
				_pStartPosAudio.x - iNewX,
				iNewY + _pStartPosAudio.y,
			)
		}
		if (_fRequestFullScreen && screenfull.enabled) {
			_oButFullscreen.setPosition(
				_pStartPosFullscreen.x + iNewX,
				_pStartPosFullscreen.y + iNewY,
			)
		}
		_oButDeleteSavings.setPosition(
			_pStartPosDelete.x + iNewX,
			_pStartPosDelete.y - iNewY,
		)
	}

	this.unload = function () {
		_oButLocal.unload()
		_oButLocal = null

		if (_oAudioToggle) {
			_oAudioToggle.unload()
			_oAudioToggle = null
		}

		if (_fRequestFullScreen && screenfull.enabled) {
			_oButFullscreen.unload()
		}

		_oButDeleteSavings.unload()
		_oAreYouSurePanel.unload()
		s_oStage.removeAllChildren()

		s_oMenu = null
	}

	this._onAudioToggle = function () {
		Howler.mute(s_bAudioActive)
		s_bAudioActive = !s_bAudioActive
	}

	this._onButInfoRelease = function () {
		new CCreditsPanel()
	}

	this.resetFullscreenBut = function () {
		if (_fRequestFullScreen && screenfull.enabled) {
			_oButFullscreen.setActive(s_bFullscreen)
		}
	}

	this._onFullscreenRelease = function () {
		if (s_bFullscreen) {
			_fCancelFullScreen.call(window.document)
		} else {
			_fRequestFullScreen.call(window.document.documentElement)
		}

		sizeHandler()
	}

	this._onDeleteSavings = function () {
		_oAreYouSurePanel.show(TEXT_CONFIRM_DELETE)
	}

	this._onConfirmDelete = function () {
		s_iLastLevel = 1
		clearAllItem()
		_oButDeleteSavings.setVisible(false)
	}

	this._onButLocalRelease = function () {
		if (typeof GameSnacks !== "undefined" && GameSnacks.audio?.isEnabled()) {
			Howler.mute(false)
		}
		// this.reset();

		s_bMultiplayer = false
		s_bPlayWithBot = false

		$(s_oMain).trigger("start_session")

		this.unload()

		/*
        if(s_oMain.getStoredTeamSelected() === null){
            s_oMain.gotoSelectTeam();
        }else{
            s_iTeamSelected = s_oMain.getStoredTeamSelected();
            s_iLastLevel = s_oMain.getLastLevel();
            
            s_oMain.gotoLevelPanel();
        }
        */
		s_iTeamSelected = DEFAULT_TEAM_1
		var iDifficultyLevel = 7

		s_aMatches = new Array()
		s_aMatches[iDifficultyLevel - 1] = DEFAULT_TEAM_2

		s_oMain.gotoGame(iDifficultyLevel)
	}

	this._onButMultiplayerRelease = function () {
		$(s_oMain).trigger("start_session")

		s_bMultiplayer = true
		s_bPlayWithBot = false

		s_oNetworkManager.addEventListener(
			ON_GAMEROOM_CONNECTION_SUCCESS,
			this._onGameStart,
		)
		s_oNetworkManager.addEventListener(
			ON_MATCHMAKING_CONNECTION_SUCCESS,
			this._onMatchmakingConnected,
		)
		s_oNetworkManager.addEventListener(ON_BACK_FROM_A_ROOM, this.clearBotCheck)
		s_oNetworkManager.connectToSystem()
	}

	this._onGameStart = function () {
		s_oMenu.clearBotCheck()

		s_bMultiplayer = true
		s_bPlayWithBot = false

		s_oMenu.unload()

		//s_oMain.gotoSelectTeamMulti();

		s_aMatches = new Array()
		if (s_oNetworkManager.isUserA()) {
			s_iTeamSelected = DEFAULT_TEAM_1
			s_aMatches.push(DEFAULT_TEAM_2)
		} else {
			s_iTeamSelected = DEFAULT_TEAM_2
			s_aMatches.push(DEFAULT_TEAM_1)
		}

		s_oMain.gotoGameMulti()
	}

	this._onMatchmakingConnected = function () {
		g_oCTLMultiplayer.closeAllDialog()
		g_oCTLMultiplayer.showLoading(
			TEXT_FIND_OPPONENT,
			"s_oNetworkManager._onDisconnectFromARoom",
		)

		//s_oMenu._checkMatchWithBot();
	}

	this._checkMatchWithBot = function () {
		var iTime = randomFloatBetween(18000, 26000)
		_iIdTimeout = setTimeout(function () {
			s_bMultiplayer = true
			s_bPlayWithBot = true

			g_oCTLMultiplayer.closeAllDialog()

			s_oNetworkManager.disconnect()

			s_oNetworkManager.generateRandomName()

			s_oMenu.unload()
			s_oMain.gotoGameWithBot()
		}, iTime)
	}

	this.clearBotCheck = function () {
		clearTimeout(_iIdTimeout)
	}

	s_oMenu = this

	this._init()
}

var s_oMenu = null
