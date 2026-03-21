var CGameSingle = function (oData, iLevel) {
	CGameBase.call(this, oData, iLevel)
	this._init(iLevel)
}

CGameSingle.prototype = Object.create(CGameBase.prototype)

CGameSingle.prototype._init = function (iLevel) {
	CGameBase.prototype._init(iLevel)
	this._startGame()
}

// @DESC:  play ad after level complete
CGameSingle.prototype._playAd = function () {
	console.log("Attempting to show ad after level complete")

	if (typeof GameSnacks !== "undefined" && GameSnacks.ad) {
		GameSnacks.ad.showAd({
			type: "interstitial",
			name: "continue_game",
			beforeAd: () => {
				console.log("Ad is starting. Pausing game.")
				s_oMain.stopUpdate()
			},
			afterAd: () => {
				console.log("Ad completed. Resuming game.")
				s_oMain.startUpdate()
			},
			adDismissed: () => {
				console.log("⛔ Ad dismissed. Resuming game.")
				s_oMain.startUpdate()
			},
		})
	} else {
		console.warn("GameSnacks.ad not available.")
	}
}

CGameSingle.prototype._startGame = function () {
	this._oInterface = new CInterface(
		this._iCurLevel,
		this._iTotScore,
		this._oContainer,
	)

	/*
    s_iCurState = GOALKEEPER_MODE;
    refreshSettings(s_iCurState);
    if(this._iNumKicks > NUM_KICKS){
        this._bExtraPenalty = true;
        if(BALL_FORCE_Y[this._iCurLevel] < HIT_BALL_MAX_FORCE){
            BALL_FORCE_Y[this._iCurLevel] += 2;
        }
    }
    s_oGameKeeper = this._oCurScenario = new CGameGoalkeeperSingle(this._iCurLevel,BALL_FORCE_Y[this._iCurLevel-1],this._oContainerGame);
    */
	s_oGameStriker = this._oCurScenario = new CGameStrikerSingle(
		this._oContainerGame,
		this._iCurLevel,
	)

	this._oInterface.showVsPanel(s_aMatches[this._iCurLevel - 1], this._iCurLevel)
}

CGameSingle.prototype.changeScenario = function () {
	this._iNumKicks++

	if (
		s_iCurState === GOALKEEPER_MODE &&
		this._iNumKicks > NUM_KICKS &&
		this._iOpponentGoals !== this._iPlayerGoals
	) {
		//GAME OVER
		this._aResults.push({
			player: this._iPlayerGoals,
			cpu: this._iOpponentGoals,
		})

		var bGameOver = false
		if (this._iPlayerGoals < this._iOpponentGoals) {
			bGameOver = true
		}

		/*
        var bLastMatch = false;
        if(this._iCurLevel===NUM_MATCHES){
            bLastMatch = true;
        }else if(!bGameOver){
            s_oMain.saveLevel(this._iCurLevel+1);
        }
        */
		var bLastMatch = true

		setVolume("soundtrack", 1)
		stopSound("crowd")

		$(s_oMain).trigger("end_level", this._iCurLevel)
		this._oInterface.setFinalPanel()
		this._oInterface.showFinalPanel(
			this._iPlayerGoals + "-" + this._iOpponentGoals,
			this._iTotScore,
			this._iLevelScore,
			bGameOver,
			bLastMatch,
		)
		this._playAd()

		//s_oMain.saveMatch(this._iCurLevel,s_aMatches[this._iCurLevel-1],this._iPlayerGoals + "-" + this._iOpponentGoals,this._iLevelScore,this._iTotScore);
	} else {
		this._oCurScenario.unload()
		this._oCurScenario = null
		if (s_iCurState === STRIKER_MODE) {
			s_iCurState = GOALKEEPER_MODE
			refreshSettings(s_iCurState)

			if (this._iNumKicks > NUM_KICKS) {
				this._bExtraPenalty = true
				if (BALL_FORCE_Y[this._iCurLevel] < HIT_BALL_MAX_FORCE) {
					BALL_FORCE_Y[this._iCurLevel] += 2
				}
			}

			this._oInterface.refreshKicks(this._aHistoryOpponent)
			s_oGameKeeper = this._oCurScenario = new CGameGoalkeeperSingle(
				this._iCurLevel,
				BALL_FORCE_Y[this._iCurLevel - 1],
				this._oContainerGame,
			)
		} else {
			s_iCurState = STRIKER_MODE
			refreshSettings(s_iCurState)
			if (this._iNumKicks > NUM_KICKS) {
				this._bExtraPenalty = true
			}

			this._oInterface.refreshKicks(this._aHistoryPlayer)
			s_oGameStriker = this._oCurScenario = new CGameStrikerSingle(
				this._oContainerGame,
				this._iCurLevel,
			)
		}
		console.log("this is inumkicks", this._iNumKicks)
	}
}

// CGameSingle.prototype.retryLevel = function(){
//     this._iCurLevel--;
//     this.nextRound();
//     this.unload();

//     this._oInterface.refreshScore(0);

//     this._oInterface.hideFinalPanel();

//     $(s_oMain).trigger("restart_level", this._iCurLevel);
// };

// CGameSingle.prototype.retryLevel = function(){
//     this._iCurLevel--;
//     this.nextRound();

//     this._oInterface.hideFinalPanel();

//     $(s_oMain).trigger("restart_level", this._iCurLevel);
// };

CGameSingle.prototype.retryLevel = function () {
	s_bMultiplayer = false
	s_bPlayWithBot = false

	$(s_oMain).trigger("start_session")

	this.unload()
	this.reset()

	s_iTeamSelected = DEFAULT_TEAM_1
	var iDifficultyLevel = 7

	s_aMatches = new Array()
	s_aMatches[iDifficultyLevel - 1] = DEFAULT_TEAM_2

	s_oMain.gotoGame(iDifficultyLevel)
}

CGameSingle.prototype.onExit = function () {
	this.unload()

	$(s_oMain).trigger("show_interlevel_ad")
	$(s_oMain).trigger("end_session")
	setVolume("soundtrack", 1)
	s_oMain.gotoMenu()
}

CGameSingle.prototype.nextRound = function () {
	this._iCurLevel++
	this.reset()

	this._oInterface.reset(s_aMatches[this._iCurLevel - 1], this._iCurLevel)
	this._oInterface.hideFinalPanel()

	s_oGameStriker = this._oCurScenario = new CGameStrikerSingle(
		this._oContainerGame,
		this._iCurLevel,
	)
}
