class CPreloader {
	constructor() {
		var _iMaskWidth
		var _iMaskHeight
		var _oLoadingText
		var _oProgressBar
		var _oMaskPreloader
		var _oFade
		var _oIcon
		var _oIconMask
		var _oButStart
		var _oButLangChoice
		var _oContainer

		this._init = function () {
			// Initialize sprite library
			s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this)
			s_oSpriteLibrary.addSprite("progress_bar", "./sprites/loading_bar.png")
			s_oSpriteLibrary.addSprite("200x200", "./sprites/logo.png")
			s_oSpriteLibrary.addSprite("but_start", "./sprites/start.png")
			s_oSpriteLibrary.addSprite("but_lang", "./sprites/language.png")
			s_oSpriteLibrary.addSprite("but_lang_fr", "./sprites/langue.png")
			s_oSpriteLibrary.addSprite("but_start_de", "./sprites/demmarer.png")

			// Load all sprites
			s_oSpriteLibrary.loadSprites()

			// Create main container
			_oContainer = new createjs.Container()
			s_oStage.addChild(_oContainer)
		}

		this.unload = function () {
			_oContainer.removeAllChildren()
			if (_oButStart) _oButStart.unload()
			// if (_oButLangChoice) _oButLangChoice.unload()
		}

		this._onImagesLoaded = function () {}

		this._onAllImagesLoaded = function () {
			this.attachSprites()
			s_oMain.preloaderReady()
		}

		this.attachSprites = function () {
			// Set up the background
			var oBg = new createjs.Shape()
			oBg.graphics
				.beginFill("black")
				.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
			_oContainer.addChild(oBg)

			// Set up the game logo
			var oLogoSprite = s_oSpriteLibrary.getSprite("200x200")
			_oIcon = createBitmap(oLogoSprite)
			_oIcon.regX = oLogoSprite.width * 0.5
			_oIcon.regY = oLogoSprite.height * 0.5
			_oIcon.x = CANVAS_WIDTH / 2
			_oIcon.y = CANVAS_HEIGHT / 2 - 130
			_oIcon.scaleX = 0.7
			_oIcon.scaleY = 0.7
			_oContainer.addChild(_oIcon)

			// Set up the progress bar
			var oProgressBarSprite = s_oSpriteLibrary.getSprite("progress_bar")
			_oProgressBar = createBitmap(oProgressBarSprite)
			_oProgressBar.x = CANVAS_WIDTH / 2 - oProgressBarSprite.width / 2
			_oProgressBar.y = CANVAS_HEIGHT * 0.8
			_oContainer.addChild(_oProgressBar)

			_iMaskWidth = oProgressBarSprite.width
			_iMaskHeight = oProgressBarSprite.height
			_oMaskPreloader = new createjs.Shape()
			_oMaskPreloader.graphics
				.beginFill("rgba(0,0,0,0.01)")
				.drawRect(_oProgressBar.x, _oProgressBar.y, 1, _iMaskHeight)

			_oContainer.addChild(_oMaskPreloader)
			_oProgressBar.mask = _oMaskPreloader

			// Set up the loading text
			_oLoadingText = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff")
			_oLoadingText.x = CANVAS_WIDTH / 2
			_oLoadingText.y = CANVAS_HEIGHT / 2 + 100
			_oLoadingText.textBaseline = "alphabetic"
			_oLoadingText.textAlign = "center"
			_oContainer.addChild(_oLoadingText)

			// Set up fade effect
			_oFade = new createjs.Shape()
			_oFade.graphics
				.beginFill("black")
				.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
			_oContainer.addChild(_oFade)

			createjs.Tween.get(_oFade)
				.to({ alpha: 0 }, 500)
				.call(() => {
					createjs.Tween.removeTweens(_oFade)
					_oContainer.removeChild(_oFade)
				})

			// Initialize buttons
			this._initializeButtons()
		}

		this._initializeButtons = function () {
			const getStoredLanguage = () => {
				try {
					// Check for GameSnacks storage first
					if (typeof GameSnacks !== "undefined" && GameSnacks.storage) {
						const nickname = GameSnacks.storage.getItem("selected_language")
						return nickname || "en"
					} else {
						return localStorage.getItem("selected_language") || "en"
					}
				} catch (err) {
					console.warn("Failed to get language setting:", err)
					return "en"
				}
			}

			// Get the language (synchronously now)
			const lang = getStoredLanguage()

			let oSpriteStart, oSpriteLang

			if (lang === "fr") {
				oSpriteStart = s_oSpriteLibrary.getSprite("but_start_de")
				oSpriteLang = s_oSpriteLibrary.getSprite("but_lang_fr")
			} else {
				oSpriteStart = s_oSpriteLibrary.getSprite("but_start")
				oSpriteLang = s_oSpriteLibrary.getSprite("but_lang")
			}

			if (!oSpriteStart || !oSpriteLang) {
				console.error("Failed to load start or language button sprites.")
				return
			}

			// Create the buttons
			_oButStart = new CTextButton(
				CANVAS_WIDTH / 2,
				CANVAS_HEIGHT * 0.8,
				oSpriteStart,
				" ",
				"Arial",
				"#000",
				50,
				_oContainer,
			)

			// _oButLangChoice = new CTextButton(
			// 	CANVAS_WIDTH / 3.5,
			// 	CANVAS_HEIGHT * 0.8,
			// 	oSpriteLang,
			// 	" ",
			// 	"Arial",
			// 	"#000",
			// 	50,
			// 	_oContainer,
			// )

			// Correct context for event listeners
			const self = this
			_oButStart.addEventListener(ON_MOUSE_UP, function () {
				self._onButStartRelease()
			})
			// _oButLangChoice.addEventListener(ON_MOUSE_UP, function () {
			// 	self._onButChooseLang()
			// })

			// Hide buttons by default
			_oButStart.setVisible(false)
			// _oButLangChoice.setVisible(false)
		}

		this._onButStartRelease = function () {
			s_oMain._onRemovePreloader()
		}

		this._onButChooseLang = function () {
			s_oMain._onChooseLang()
		}

		this.refreshLoader = function (iPerc) {
			_oLoadingText.text = iPerc + "%"

			if (iPerc === 100) {
				if (_oButStart) _oButStart.setVisible(true)
				// if (_oButLangChoice) _oButLangChoice.setVisible(true)
				_oLoadingText.visible = false
				_oProgressBar.visible = false
			}

			_oMaskPreloader.graphics.clear()
			var iNewMaskWidth = Math.floor((iPerc * _iMaskWidth) / 100)
			_oMaskPreloader.graphics
				.beginFill("rgba(0,0,0,0.01)")
				.drawRect(_oProgressBar.x, _oProgressBar.y, iNewMaskWidth, _iMaskHeight)
		}

		this._init()
	}
}
