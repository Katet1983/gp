import {
  CONSTATNTS,
  FONT_STYLES,
  SCENES,
  DUABSCORE,
  SCORE_TYPE,
  TICKET,
  BINGO_SCORE,
  PERCENT_DAUB,
  POWER_UPS,
  OBJECT_DEPTHS,
  SFX_IDS,
  SFX_KEYS,
} from "./Constants.js";
import GameOver from "./gamePlay/GameOver.js";
import GameController from "./gamePlay/GameController.js";
import GoldenPannel from "./gamePlay/GoldenPannel.js";
import logAnalytics from "./firebase.js";

let sceneScope = null;


/**
 * This scene is responsible for all the gameplay related
 * UI and core gameplay
 */
export default class Gameplay extends Phaser.Scene {
  bgImage; // bingo background image
  timerHandler; // timer handler instance from gameController
  ticketCreation; // ticket creation instance from gameController
  bingoBall; // bingo ball instance from gameController
  tickets;
  dummyBingoBall;
  ballTimerTween; // ball Timer Tween  holds the main BingoBall timer tween

  /** daub aniamtion objects  and  daubCount values*/
  duabText = null;
  duabScoreText = null;
  daubDisplayImg = null;
  goldenPannelInstance = null;
  previousBingoBall = null;
  daubCount = {
    perfectDaubCount: 0,
    goodDaubCount: 0,
    correctDaubCount: 0,
    penaltyCount: 0,
  };
  isGameOver = null; // GameOver condition
  is2xPowerUpActive = null; // bool maintained to check the ststus of 2xPowerUp
  freeDaubCount = 0; // hold the no.of free daubs for star powerUp
  score = 0;  /**total game score*/
  fullText = null; /**full text on powerUp filling Bar */
  currentDaubAnim = -1; /** we are using this variable to stop the penality anim on the same button */
  powerUpButtons = []; /** storing the generated powerup Buttons */
  isFullHouse = false; /** bool mainted to check for full house bingo */
  mainBallPlacement = 0; /** we are caluclating the ball displacement */
  firstBallPlacement = 0; /** caluclating the space between bingo ball and main ball */
  previousMainBingoBall = null
  constructor() {
    super(SCENES.GAMEPLAY);

    
  }

  preload() {
    sceneScope = this;
    this.showAddRef = null;
    this.width = this.game.screenBaseSize.width;
    this.height = this.game.screenBaseSize.height;
    let bootScene = this.scene.get(SCENES.BOOT);
    this.soundManager = this.scene.get(SCENES.SOUND_MANAGER);
    bootScene.setLayoutSize(this);
    // defining default variable in construction
    this.bgImage; // bingo background image
    this.timerHandler; // timer handler instance from gameController
    this.ticketCreation; // ticket creation instance from gameController
    this.bingoBall; // bingo ball instance from gameController
    this.tickets;
    this.dummyBingoBall;
    this.ballTimerTween; // ball Timer Tween  holds the main BingoBall timer tween
  
    /** daub aniamtion objects  and  daubCount values*/
    this.duabText = null;
    this.duabScoreText = null;
    this.daubDisplayImg = null;
    this.goldenPannelInstance = null;
    this.previousBingoBall = null;
    this.daubCount = {
      perfectDaubCount: 0,
      goodDaubCount: 0,
      correctDaubCount: 0,
      penaltyCount: 0,
    };
    this.isGameOver = null; // GameOver condition
    this.is2xPowerUpActive = null; // bool maintained to check the ststus of 2xPowerUp
    this.freeDaubCount = 0; // hold the no.of free daubs for star powerUp
    this.score = 0;  /**total game score*/
    this.fullText = null; /**full text on powerUp filling Bar */
    this.currentDaubAnim = -1; /** we are using this variable to stop the penality anim on the same button */
    this.powerUpButtons = []; /** storing the generated powerup Buttons */
    this.isFullHouse = false; /** bool mainted to check for full house bingo */
    this.mainBallPlacement = 0; /** we are caluclating the ball displacement */
    this.firstBallPlacement = 0; /** caluclating the space between bingo ball and main ball */
    this.previousMainBingoBall = null
  }

  create() {
    if (CONSTATNTS.IS_SANDBOX) {
      // Border for base resolution. Remove in production
    }

    /**encrypt plugin and password */
    this.encryptPlugin = this.plugins.get('rexxorplugin');
    this.password = "abcdefgbjvbdjhbjvdbjvbdjbhvjdhbvj";

    GameController.getInstance().setEncryptData = this.encryptPlugin;
    GameController.getInstance().setPassWord = this.password;

    this.bg = this.add.image(this.width / 2, this.height / 2, "guide");
    this.backGround = this.add.image(this.bg.x, this.bg.y, "BingoBg");
    this.backGround.displayWidth = this.bg.displayWidth;
    this.backGround.displayHeight = this.bg.displayHeight;

    this.duabBg = this.add.sprite(
      this.width / 2.2,
      this.backGround.y - this.backGround.displayHeight / 2.3,
      "bingoAssets",
      "Score_Strip_05.png"
    ).setVisible(false);

    // Timer BG SetUp
    this.timerBg = this.add
      .sprite(this.width / 1.16, this.height / 16,
        "bingoAssets", "Score-Close-Button Box.png")
      .setOrigin(0.5);

    // 2X PowerUpTimer Text
    this.powerUpTimerText = this.add.text(
      this.timerBg.x - this.timerBg.displayWidth / 2,
      this.timerBg.y + this.timerBg.displayHeight / 2,
      "", {
      fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
      fontSize: FONT_STYLES.FS26,
      align: FONT_STYLES.ALIGN_CENTER,
    }
    );

    // Score BG SetUp
    this.scoreBg = this.add
      .sprite(this.timerBg.displayWidth / 2, this.timerBg.y, "bingoAssets", "Bingo_Hud_Timer.png")
      .setOrigin(0.5);

    // Score Text is created
    this.scoreText = this.add
      .text(this.scoreBg.x - 10, this.scoreBg.y - 10, "0", {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS30,
        align: FONT_STYLES.ALIGN_CENTER,
      })
      .setOrigin(0.5);

    this.dummyBingoBall = this.add
      .sprite(0, 0, "bingoAssets", "Ball_05.png")
      .setScale(0.7)
      .setVisible(false);

    this.scoreText.setTint(FONT_STYLES.WHITE_COLOR);

    // create all instances from gameController
    GameController.getInstance().setTimerHandler = this;
    GameController.getInstance().setBingoBall = this;
    GameController.getInstance().setTicketCreation = this;
    GameController.getInstance().bingoPatternAnimations(this);

    this.timerHandler = GameController.getInstance().getTimerHandler;
    this.timerHandler.init(this);

    this.bingoBall = GameController.getInstance().getBingoBall;
    this.bingoBall.init(this);

    this.ticketCreation = GameController.getInstance().getTicketCreation;
    this.ticketCreation.init();

    // this.bingoTicket = GameController.getInstance().getBingoTicket;
    this.powerUpsController =
      GameController.getInstance().getPowerUpsController;
    this.startGame();
    this.buttonUi();

    // creating timer text
    this.timerText = this.add
      .text(
        this.timerBg.x + this.timerBg.displayWidth / 2.8,
        this.timerBg.y - 10,
        "", {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS30,
        align: FONT_STYLES.ALIGN_CENTER,
      }
      )
      .setOrigin(1, 0.5);

    this.timerText.setTint(FONT_STYLES.WHITE_COLOR);

    /**
     * Warning Timer bg for remaining 10 sec
     */
    this.warnTimerBg = this.add
      .image(this.bg.x, this.bg.y, "WarnTimerBG")
      .setAlpha(0.5);
    this.warnTimerBg.displayHeight = this.backGround.displayHeight;
    this.warnTimerBg.displayWidth = this.backGround.displayWidth;
    this.warnTimerBg.setVisible(false);

    GameController.getInstance().setMaxPowerUpCount = 0;
    this.logAnalyticEvent("game_started", {});

       // Register lifecycle event handlers.
      GameSnacks.game.onPause(() => {
        sceneScope.soundManager.getInstance().isEffectsMuted = true;
      });
      GameSnacks.game.onResume(() => {
        sceneScope.soundManager.getInstance().isEffectsMuted = false;
      });

      this.adsTimerEvent = this.time.addEvent({
        delay: 12000,
        callback: this.preloadAds,
        callbackScope: this,
        loop: true,
      });

      this.preloadAds();
  }

  preloadAds() {
    GameSnacks.ad.break({
        // adBreak({
        type: "next", // The type of this placement
        name: "interstitial", // A descriptive name for this placement
        beforeAd: () => {}, // Prepare for the ad. Mute and pause the game flow
        afterAd: () => {}, // Resume the game and re-enable sound
        beforeReward: (showAdFn) => {
          sceneScope.beforeReward(showAdFn);
        }, // Show reward prompt (call showAdFn() if clicked)
        adDismissed:  () => {
          sceneScope.adDismissed// Player dismissed the ad before completion

        },
        
        
        adViewed: () => {
          sceneScope.adComplete // Ad was viewed and closed
        } ,
        adBreakDone: (placementInfo) => {}, // Always called (if provided) even if an ad didn't show
      });
}

beforeReward (showAdFn) {
     {
    sceneScope.showAddRef = showAdFn;
    sceneScope.adsTimerEvent.paused = true;
  }
}

adDismissed () {
  console.log("<<< adDismissed >>>");
  sceneScope.adsTimerEvent.paused = false;
}

adComplete () {
  console.log("<<<< adComplete >>>>");
  sceneScope.adsTimerEvent.paused = false;
}

showInterstitial() {
  console.log("in show interstitial");
  if (sceneScope.showAddRef != null) {
      console.log("showing the interstitial");
      sceneScope.logAnalyticEvent("interstitial_shown", {});
      sceneScope.showAddRef();
      sceneScope.showAddRef = null;
  }
}

  logAnalyticEvent(name, params) {
    console.log("EventName, Parameter: ", name, ",", params);

    logAnalytics(name, params);

    // window.parent.postMessage({
    //   type: 'logEvent',
    //   log: { "name": name, "params": params }

    // }, '*');
  }

  /**start Game */
  startGame() {
    this.mainBallPlacement =
      (this.backGround.x + (
        this.backGround.displayWidth / 2)) - (CONSTATNTS.FIRST_BALL_GAP / 1.6);

    this.firstBallPlacement = this.mainBallPlacement - CONSTATNTS.FIRST_BALL_GAP

    GameController.getInstance().setNoOfPerfectDaubs = 0;
    GameController.getInstance().setNoOfGoodDaubs = 0;
    GameController.getInstance().setNoOfCorrectDaubs = 0;
    GameController.getInstance().setPerfectDaubScore = 0;
    GameController.getInstance().setGoodDaubScore = 0;
    GameController.getInstance().setCorrectDaubScore = 0;
    GameController.getInstance().setBingoNumber = 0;
    GameController.getInstance().setBingoScore = 0;
    GameController.getInstance().setComboScore = 0;
    GameController.getInstance().setBonusScore = 0;
    GameController.getInstance().setIsGoldenBallExist = 0;
    GameController.getInstance().setFullHouseScore = 0;
    GameController.getInstance().setPenaltyScore = 0;
    GameController.getInstance().setCurrentScore = 0;
    GameController.getInstance().setIsStarActive = 0

    // // //Start Game Timer
    this.timerHandler.setTimerON(false, 0);

    // //Instance of BingoBallGeneration
    this.bingoBall.initializeToDefaultVal();
    this.bingoBall.generateBingoBallNumber("from GamePlay");

    this.is2xPowerUpActive = GameController.getInstance().getEncryptedValue(0);
    this.isGameOver = GameController.getInstance().getEncryptedValue(0);

  }

  /*** Calculate the score
   * @param {Score of duab ie., perfect / good/ incorrect/ correct} daubScore
   * @returns total score*/
  scoreValue(daubScore, scoreType) {

    /**If duab is other than incorrect daub */
    if (scoreType != SCORE_TYPE.INCORRECT_DAUB) {
      /** setting score value 2times the daubScore	
         when powerUp is in active state */

      if (parseInt(GameController.getInstance().getDecryptedValues(this.is2xPowerUpActive))) {
        this.score += 2 * daubScore;
        /**updating the bonus score for gameover screen */
        GameController.getInstance().setBonusScore = daubScore;
      } else {
        /* adding the daub score when powerup not active */
        this.score += daubScore;
      }
    } else {
      /* called when incorrect daub for updating penalty */
      this.scoreUpdateForPenalty(daubScore);
    }
    if (this.isFullHouse) {
      this.powerUpButtons.forEach((element, index) => {
        element.disableInteractive();
      })
    }
    GameController.getInstance().setCurrentScore = this.score;
    // updating score text
    this.updateScoreText();


    return this.score;
  }

  /**
   * updates penalty score and reduce penalty score from current score
   * @param {daubScore i.e., score of incorrectDaub} daubScore*/
  scoreUpdateForPenalty(daubScore) {
    /**
     * deduct the score only when the current score is > 0
     */
    if (this.score > 0) {
      /* doubles the penalty on powerup active state */
      if (parseInt(GameController.getInstance().getDecryptedValues(this.is2xPowerUpActive))) {
        daubScore = 2 * daubScore;
      }
      /* penalty added to current score */
      this.score += daubScore;
      /** if penalty is greater than the current score only deduct
       *  upto current score = 0*/
      if (this.score < 0) {
        // updating the penalty score
        GameController.getInstance().setPenaltyScore = (daubScore - this.score) * (-1);
        this.score = 0;
      } else {

        GameController.getInstance().setPenaltyScore = (daubScore) * (-1);
      }

    }
  }

  /*** Daub description display based on type of duabing
    @param { type of daub} scoreType
    @param { score of daub type} score
   */
  updateScoreInfo(scoreType, score, has2X, currentTappedBlock) {
    if (parseInt(GameController.getInstance().getDecryptedValues(this.isGameOver))) {
      return;
    }

    if (this.daubDisplayImg != null) {
      if (scoreType == SCORE_TYPE.INCORRECT_DAUB) {
        if (currentTappedBlock == this.currentDaubAnim) {
          this.powerUpBarFunctionality(PERCENT_DAUB.IncorrectDaub);
          return;
        } else {
          this.currentDaubAnim = currentTappedBlock;
        }
      }
      this.hideDaubTweens();
    }

    let daubObject = {
      text: "",
      score: 0,
      daubType: -1,
    };

    daubObject.daubType = scoreType;

    if (scoreType == SCORE_TYPE.INCORRECT_DAUB) {
      daubObject.score = score;
    } else {
      daubObject.score = "+" + score;
    }

    let currentDaubPercernt = 0;
    if (scoreType == SCORE_TYPE.PERFECT_DAUB) {
      currentDaubPercernt = PERCENT_DAUB.PerfectDaub;
      daubObject.text = "PERFECT DAUB!!";
    } else if (scoreType == SCORE_TYPE.GOOD_DAUB) {
      currentDaubPercernt = PERCENT_DAUB.GoodDaub;
      daubObject.text = "GOOD DAUB!!";
    } else if (scoreType == SCORE_TYPE.CORRECT_DAUB) {
      currentDaubPercernt = PERCENT_DAUB.CorrectDaub;
      daubObject.text = "CORRECT DAUB!!";
    } else if (scoreType == SCORE_TYPE.INCORRECT_DAUB) {
      if (this.currentDaubAnim == -1) {
        this.currentDaubAnim = currentTappedBlock;
      }
      currentDaubPercernt = PERCENT_DAUB.IncorrectDaub;
      daubObject.text = "PENALTY";
    }

    this.createDaubText(daubObject, this.width / 2 + 50);

    if (currentDaubPercernt != 0) {
      this.powerUpBarFunctionality(currentDaubPercernt);
    }
  }

  /**
   * Update score Text
   */
  updateScoreText() {
    let updatedScoreText = GameController.getInstance().getCurrentScore;
    this.scoreText.setText(updatedScoreText.toString());
    this.scoreText.setPosition(this.scoreBg.x - 10, this.scoreBg.y - 10);
  }

  /** creating daub strip*/
  createDaubText(daubObject, textPosition) {
    /** set score color on daub */
    let scoreColor = FONT_STYLES.BINGO_TIMER_COLOR;
    if (daubObject.daubType == SCORE_TYPE.INCORRECT_DAUB) {
      scoreColor = FONT_STYLES.RED_COLOR;
    }

    /** daub strip image */
    let dummyDaubDisplayImg = this.add
      .sprite(
        this.width / 2,
        (this.timerBg.y + this.timerBg.displayHeight / 2),
        "bingoAssets",
        "Bingo-Perfect-Daub-Box.png"
      ).setVisible(false);
    dummyDaubDisplayImg.displayWidth = this.width;
    /**DaubTextDisplay Strip image */
    this.daubDisplayImg = this.add
      .sprite(
        this.width / 2,
        (this.timerBg.y + this.timerBg.displayHeight / 1.6),
        "bingoAssets",
        "Bingo-Perfect-Daub-Box.png"
      )
      .setScale(0.5);

    /**added mask to the daub text and score  */
    this.mask = dummyDaubDisplayImg.createBitmapMask();

    this.daubDisplayImg.setMask(this.mask);

    /**daub type text to display on top hud */
    this.duabText = this.add
      .text(
        this.daubDisplayImg.x - this.daubDisplayImg.displayWidth / 1.8,
        this.daubDisplayImg.y,
        daubObject.text,
        {
          fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
          fontSize: FONT_STYLES.FS30,
          align: FONT_STYLES.ALIGN_CENTER,
        }
      )
      .setOrigin(1, 0.5)
      .setDepth(1)
      .setVisible(false);
    this.duabText.setTint(FONT_STYLES.WHITE_COLOR);
    this.duabText.setMask(this.mask);

    /**ScoreText display for every daub */
    this.duabScoreText = this.add
      .text(
        this.daubDisplayImg.x + this.daubDisplayImg.displayWidth,
        this.daubDisplayImg.y,
        daubObject.score,
        {
          fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
          fontSize: FONT_STYLES.FS36,
          align: FONT_STYLES.ALIGN_CENTER,
        }
      )
      .setOrigin(1, 0.5)
      .setDepth(1)
      .setVisible(false);

    this.duabScoreText.setTint(scoreColor);
    this.duabScoreText.setMask(this.mask);

    this.animateDaubText(textPosition);
  }

  /**
   * Animating od Duab Text
   */
  animateDaubText(textPosition) {
    if (parseInt(GameController.getInstance().getDecryptedValues(this.isGameOver))) {
      return;
    }
    this.daubImageTween = this.tweens.add({
      targets: this.daubDisplayImg,
      duration: 500,
      scale: 1,
      ease: "linear",
      onStart: () => {
        /** daub text animation */
        this.daubTextTween = this.tweens.add({
          targets: this.duabText,
          x: textPosition,
          duration: 500,
          delay: 300,
          ease: "linear",
          onStart: () => {
            this.daubDisplayImg.setVisible(true);
            this.duabText.setVisible(true);
            this.duabScoreText.setVisible(true);
          },
          onComplete: () => {
            this.scaleDownTween(textPosition, scorePosition);
          },
        });

        let scorePosition = this.width / 2 + 150;
        this.daubScoreTween = this.tweens.add({
          targets: this.duabScoreText,
          x: scorePosition,
          duration: 500,
          delay: 300,
          ease: "linear",
        });
      },
    });
  }

  /**onComplete of daubText animation set to false */
  scaleDownTween(textPosition, scorePosition) {
    this.isAnimCompleted = false;
    let dummyDaubImageWidth = this.daubDisplayImg.displayWidth;
    let scaleDownTween = this.tweens.add({
      targets: [this.daubDisplayImg, this.duabScoreText, this.duabText],
      scale: 0.3,
      duration: 600,
      ease: "linear",
      delay: 500,
      onUpdate: () => {
        if (!this.isAnimCompleted) {
          this.daubDisplayImg.x = this.width / 2;
          textPosition =
            this.daubDisplayImg.x + this.daubDisplayImg.displayWidth / 8;
          scorePosition = textPosition + this.daubDisplayImg.displayWidth / 6;
          this.duabText.x = textPosition;
          this.duabScoreText.x = scorePosition;
        }
      },
      onComplete: () => {
        if (!this.isAnimCompleted) {
          this.hideDaubTweens();
        }
      },
    });
  }


  /**hide text and destroy daub tweens */
  hideDaubTweens() {
    this.isAnimCompleted = true;
    this.daubDisplayImg.destroy();
    this.duabText.destroy();
    this.duabScoreText.destroy();

    this.daubImageTween.stop();
    this.daubTextTween.stop();
    this.daubScoreTween.stop();

    /**make to null */
    this.duabText = null;
    this.duabScoreText = null;
    this.daubDisplayImg = null;
    this.currentDaubAnim = -1;
  }


  /******************************FOOTER ********************** */

  /**selected Golden Ball */
  selectedGoldenBall(arg) {
    /**pass true as arguments to make the bingoBall visible in the middle of screen */
    if (!parseInt(GameController.getInstance().getDecryptedValues(this.isGameOver)
    )
    ) {
      this.bingoBall.createMainBall(arg, 1, "goldebBall");
    }
  }

  /**
   * Bingo bottom footer UI
   */
  buttonUi() {
    this.powereUpButton = this.add.sprite(
      this.backGround.x,
      this.backGround.y + this.backGround.displayHeight / 2.3,
      "bingoAssets",
      "Power-up_centerGameplay.png"
    );

    // ** power up filling bar is added
    this.powerUpFillBarBg = this.add.sprite(
      this.backGround.x - this.backGround.displayWidth / 3.3,
      this.powereUpButton.y,
      "bingoAssets",
      "Bingo-Fill-Bar-Bg.png"
    );
    // bingo button glow is added for bingo glow tween on bingo pattern found
    this.bingoButtonGlow = this.add
      .sprite(
        this.backGround.x + this.backGround.displayWidth / 3.3,
        this.powereUpButton.y,
        "bingoAssets",
        "Bingo_BingoButtonGlow.png"
      )
      .setAlpha(0.5)
      .setVisible(false);

    // adding bingo button
    this.bingoButton = this.add.sprite(
      this.bingoButtonGlow.x,
      this.bingoButtonGlow.y,
      "bingoAssets",
      "Bingo_BingoButtonWithoutGlow.png"
    );
    this.bingoButton.setInteractive().setAlpha(0.3);
    /** on click of bingo up button */
    this.bingoButton.on("pointerdown", () => {
    
      this.pauseBingoPatternAnim();
      this.bingoValidation();
      if (this.bingoButtonTween != undefined) {
        this.bingoButtonTween.pause();
        this.bingoButton.setAlpha(0.3);
      }
      this.bingoButtonGlow.setVisible(false);

      if (this.isFullHouse) {
        this.scoreValue(DUABSCORE.FULL_HOUSE);
        this.isGameOver = GameController.getInstance().getEncryptedValue(1);
        this.gameOver(this.isFullHouse);
      }
    });

    this.progressBarUi();
  }

  /**progress bar UI */
  progressBarUi() {
    this.powerUpFillBar = this.add.rexLineProgress(
      this.powerUpFillBarBg.x,
      this.powerUpFillBarBg.y - 2,
      this.powerUpFillBarBg.displayWidth,
      this.powerUpFillBarBg.displayHeight * 0.9,
      {
        barColor: FONT_STYLES.BINGO_TIMER_COLOR,
        skewX: 0,
        value: 0,
        rtl: false,
      }
    );
    const maskGraphics = this.add
      .graphics()
      .fillRoundedRect(
        this.powerUpFillBarBg.x - this.powerUpFillBarBg.displayWidth / 2,
        this.powerUpFillBarBg.y - this.powerUpFillBarBg.displayHeight / 2,
        this.powerUpFillBarBg.displayWidth,
        this.powerUpFillBarBg.displayHeight * 0.9,
        15
      );

    // Create the geometry mask
    const mask = new Phaser.Display.Masks.GeometryMask(this, maskGraphics);
    this.powerUpFillBar.setMask(mask);
  }

  /**powerUpBar Functionality */
  powerUpBarFunctionality(currentDaubPercernt) {
    if (
      GameController.getInstance().getPowerUpCount == CONSTATNTS.MAX_POWER_UPS
    ) {
      return;
    }
    let generatePowerUp = false;
    let noOfPix = this.powerUpFillBar.getValue();
    let totalCurrentValue = currentDaubPercernt + noOfPix;

    if (totalCurrentValue >= 1 && !this.isFullHouse) {
      generatePowerUp = true;
    } {
      this.tweens.add({
        targets: { value: noOfPix },
        value: totalCurrentValue,
        duration: 200,
        onUpdate: (tween) => {
          // Update the line progress value during each tween update
          this.powerUpFillBar.setValue(tween.targets[0].value);
        },
        onComplete: () => {
          if (generatePowerUp) {
            this.generatePowerUp();
          }
        }
      });
    }
  }

  /**generate PowerUp  as the powerUpFill*/
  generatePowerUp() {
    /** check the noOf powerUps In the stack */
    /** generate random  powerUp */
    let randomPowerUp = Math.round(Math.random() * 5);
    let powerUp = null;
    let PowerUpImageKey = null;
    this.soundManager.playSfx(
      SFX_IDS.POWER_UP_GENERATION,
      false,
      SFX_KEYS.POWER_UP_GENERATION
    );
    // randomPowerUp = 1;
    switch (randomPowerUp) {
      case POWER_UPS.STAR_POWER_UP:
        PowerUpImageKey = "Powerup_01.png";
        let starPowerUP = this.add.sprite(
          this.powerUpFillBarBg.x - 4,
          this.powerUpFillBarBg.y + 8,
          "bingoAssets",
          PowerUpImageKey
        );
        starPowerUP.setData({ freeDaubCount: 1 });

        this.addPowerUpButtonAnim(starPowerUP);
        starPowerUP.on("pointerdown", () => {
          this.soundManager.playSfx(
            SFX_IDS.POWER_UP_CLAIM,
            false,
            SFX_KEYS.POWER_UP_CLAIM
          );
          this.animateStarPattern();
          this.freeDaubCount = starPowerUP.data.list.freeDaubCount;
          starPowerUP.destroy();
          this.timerHandler.setStarPowerUpTimerOn(CONSTATNTS.POWERUPTIMER);
        });
        break;

      case POWER_UPS.GOLDEN_BALL:
        PowerUpImageKey = "Powerup_02.png";
        let goldenBAll = this.add.sprite(
          this.powerUpFillBarBg.x - 4,
          this.powerUpFillBarBg.y + 8,
          "bingoAssets",
          PowerUpImageKey
        );
        this.addPowerUpButtonAnim(goldenBAll);
        goldenBAll.on("pointerdown", () => {
          /** creating golden Ball Instance */
          this.soundManager.playSfx(
            SFX_IDS.POWER_UP_CLAIM,
            false,
            SFX_KEYS.POWER_UP_CLAIM
          );
          GameController.getInstance().setIsGoldenBallExist = 1;
          goldenBAll.destroy();
          this.powerUpButtons.pop();
          if (this.powerUpButtons.length > 0) {
            this.powerUpButtons.forEach((element, index) => {
              element.setVisible(false);
            });
          }
          this.goldenPannelInstance = new GoldenPannel(this);
          this.goldenPannelInstance.init();
        });
        break;

      case POWER_UPS.POWER_2X:
        PowerUpImageKey = "Powerup_05.png";
        let power2X = this.add.sprite(
          this.powerUpFillBarBg.x - 4,
          this.powerUpFillBarBg.y + 10,
          "bingoAssets",
          PowerUpImageKey
        );
        this.addPowerUpButtonAnim(power2X);
        power2X.on("pointerdown", () => {
          this.soundManager.playSfx(
            SFX_IDS.POWER_UP_CLAIM,
            false,
            SFX_KEYS.POWER_UP_CLAIM
          );
          power2X.destroy();
          let powerUpAlreadyEnabled = false;
          if (parseInt(GameController.getInstance().getDecryptedValues(this.is2xPowerUpActive))) {
            powerUpAlreadyEnabled = true;
          } else {
            this.is2xPowerUpActive = GameController.getInstance().getEncryptedValue(1);
            powerUpAlreadyEnabled = false;
          }

          let noOfPowers = GameController.getInstance().getPowerUpCount;
          if (noOfPowers > 0) {
            noOfPowers--;
          }
          GameController.getInstance().setMaxPowerUpCount = noOfPowers;

          this.timerHandler.set2XPowerUpTimerOn(powerUpAlreadyEnabled);
        });

        break;

      case POWER_UPS.FREE_2DAUBS:
        PowerUpImageKey = "Powerup_04.png";
        let free2Daub = this.add.sprite(
          this.powerUpFillBarBg.x - 4,
          this.powerUpFillBarBg.y + 8,
          "bingoAssets",
          PowerUpImageKey
        );
        free2Daub.setData({ freeDaubCount: 2 });
        this.addPowerUpButtonAnim(free2Daub);

        free2Daub.on("pointerdown", () => {
          this.soundManager.playSfx(
            SFX_IDS.POWER_UP_CLAIM,
            false,
            SFX_KEYS.POWER_UP_CLAIM
          );
          this.soundManager.playSfx(
            SFX_IDS.POWER_UP_CLAIM,
            false,
            SFX_KEYS.POWER_UP_CLAIM
          );
          this.animateStarPattern();
          this.freeDaubCount = free2Daub.data.list.freeDaubCount;
          free2Daub.destroy();
          this.timerHandler.setStarPowerUpTimerOn(CONSTATNTS.POWERUPTIMER);
        });

        break;

      case POWER_UPS.FREE_3DAUBS:
        PowerUpImageKey = "Powerup_03.png";
        let free3Daub = this.add.sprite(
          this.powerUpFillBarBg.x - 4,
          this.powerUpFillBarBg.y + 8,
          "bingoAssets",
          PowerUpImageKey
        );
        free3Daub.setData({ freeDaubCount: 3 });
        this.addPowerUpButtonAnim(free3Daub);

        free3Daub.on("pointerdown", () => {
          this.soundManager.playSfx(
            SFX_IDS.POWER_UP_CLAIM,
            false,
            SFX_KEYS.POWER_UP_CLAIM
          );
          this.animateStarPattern();
          this.freeDaubCount = free3Daub.data.list.freeDaubCount;
          free3Daub.destroy();
          this.timerHandler.setStarPowerUpTimerOn(CONSTATNTS.POWERUPTIMER);
        });

        break;
      case POWER_UPS.BONUS_TIME:
        PowerUpImageKey = "BonusTimer";
        let bonusTime = this.add
          .image(
            this.powerUpFillBarBg.x - 4,
            this.powerUpFillBarBg.y + 8,
            PowerUpImageKey
          )
          .setScale(0.5);
        this.addPowerUpButtonAnim(bonusTime);

        bonusTime.on("pointerdown", () => {
          this.soundManager.playSfx(
            SFX_IDS.BONUS_TIME_ADDING,
            false,
            SFX_KEYS.BONUS_TIME_ADDING
          );
          this.timerHandler.timerSec += CONSTATNTS.POWERUPTIMER;
          GameController.getInstance().setCurrentGameTime = this.timerHandler.timerSec;
          bonusTime.destroy();
          let noOfPowers = GameController.getInstance().getPowerUpCount;
          if (noOfPowers > 0) {
            noOfPowers--;
          }
          if (
            noOfPowers < CONSTATNTS.MAX_POWER_UPS
          ) {
            if (this.fullText != null) {
              this.fullText.destroy();
              this.fullText = null;
            }
          }
          GameController.getInstance().setMaxPowerUpCount = noOfPowers;
        });

        break;
    }
  }

  /** after generating the random powerUp  we need to add image and animtion on
   *  complete return image and add funtionality  regarding that powerUp */
  addPowerUpButtonAnim(powerUpImage) {
    this.powerUpButtons.push(powerUpImage);
    let noOfPowers = GameController.getInstance().getPowerUpCount;
    noOfPowers++;
    GameController.getInstance().setMaxPowerUpCount = noOfPowers;
    // adding animation sprite to play animation when powerUp clicked
    let claimAnimSprite = this.add
      .sprite(
        this.powereUpButton.x,
        this.powereUpButton.y - 20,
        "powerUpClaim",
        "powerUp_01.png"
      )
      .setVisible(true);
    // seeting the animation sprite in powerup button data
    powerUpImage.setData({ claimAnim: claimAnimSprite });

    let buttonTween = this.tweens.add({
      targets: powerUpImage,
      x: this.powereUpButton.x,
      alpha: 1,
      duration: 300,
      ease: "Power0",
      onComplete: () => {
        powerUpImage.setInteractive();
        powerUpImage.data.list.claimAnim.play("powerUpClaimAnim");
        /**after generating random powerUp  we need to clear the powerUp bar*/
        this.clearPowerUpBar();
      },
    });
    if (
      GameController.getInstance().getPowerUpCount == CONSTATNTS.MAX_POWER_UPS
    ) {
      if (this.fullText == null) {
        this.fullText = this.add.text(
          this.powerUpFillBar.x,
          this.powerUpFillBar.y,
          "FULL",
          {
            fontFamily: FONT_STYLES.FONT_FAMILY_BOLD,
            fontSize: FONT_STYLES.FS30,
            align: FONT_STYLES.ALIGN_CENTER,
          }
        );
        this.fullText.setOrigin(0.5);
        this.fullText.setTint(FONT_STYLES.WHITE_COLOR);
      }
      return;
    }
  }

  /** on complete of generating powerUp animation we need to clear the powerUp fill bar */
  clearPowerUpBar() {
    let fillValue = this.powerUpFillBar.getValue().toFixed(1);
    this.tweens.add({
      targets: { value: 1 },
      value: 0,
      duration: 200,
      onUpdate: (tween) => {
        // Update the line progress value during each tween update
        this.powerUpFillBar.setValue(tween.targets[0].value);
      },
    });
  }

  /** Bingo button blinking animation
   */
  bingoButtonAnimation() {
    this.bingoButtonTween = this.tweens.add({
      targets: this.bingoButtonGlow,
      alpha: 1,
      duration: 200,
      ease: "linear",
      yoyo: true,
      onstart: () => {
        this.bingoButtonGlow.setVisible(true);
      },
      repeat: -1,
    });
  }

  /**bingo Validationon click */
  bingoValidation() {
    let noOfCombos = 0;
    let currentBingoPatterns = [];
    let bingoTicket = [];
    let patterns = GameController.getInstance().getBingoPatterns;
    currentBingoPatterns = patterns ? [...patterns] : [];

    for (let index = 0; index < currentBingoPatterns.length; index++) {
      if (!currentBingoPatterns[index].isBingoCompleted) {
        noOfCombos++;
        bingoTicket = [
          ...bingoTicket,
          ...this.ticketCreation.bingoTicketInstance.getCurrentPatternGameObjects(
            currentBingoPatterns[index].id,
            currentBingoPatterns[index].isisBingoCompleted
          ),
        ];
        currentBingoPatterns[index].isBingoCompleted = true;
      }
    }

    if (bingoTicket.length > 0) {
      for (let index = 0; index < bingoTicket.length; index++) {
        bingoTicket[index].data.list.status = TICKET.VALIDBINGO;

        if (
          bingoTicket[index].data.list.TicketBlockItem.blockIndex !=
          12
        ) {
          if (!bingoTicket[index].data.list.isStarPowerUpDaub) {
            bingoTicket[index].setFrame("numbers_Selection_bg_02.png");
          }
          bingoTicket[
            index
          ].data.list.TicketBlockItem.ticketNumberText.setVisible(
            false
          );
          if (!bingoTicket[index].data.list.isStarPowerUpDaub) {
            let dollarBg = this.add
              .sprite(
                bingoTicket[index].x,
                bingoTicket[index].y,
                "bingoAssets",
                "Shell.png"
              )
              .setScale(0.2);
            dollarBg.setVisible(false);
            this.bingoDollarAnimation(dollarBg);
          }
        }
      }
      this.bingoComboScore(noOfCombos);
      this.logAnalyticEvent("bingo_validation", {});
      this.soundManager.playSfx(
        SFX_IDS.BINGO_TAPPING,
        false,
        SFX_KEYS.BINGO_TAPPING
      );
    } else {
      return;
    }
  }

  /*** Bingo combo score Calculation */
  bingoComboScore(noOfCombos) {
    let bingoPatternScore;
    let comboBonusScore;

    if (noOfCombos == 1) {
      // adding sfx for 1 bingo
      this.soundManager.playSfx(SFX_IDS.BINGO, false, SFX_KEYS.BINGO);
    } else if (noOfCombos == 2) {
      // adding sfx for 2 bingos
      this.soundManager.playSfx(
        SFX_IDS.DOUBLE_BINGO,
        false,
        SFX_KEYS.DOUBLE_BINGO
      );
    } else if (noOfCombos == 3) {
      // adding sfx for 3 bingos
      this.soundManager.playSfx(
        SFX_IDS.TRIPLE_BINGO,
        false,
        SFX_KEYS.TRIPLE_BINGO
      );
    } else if (noOfCombos > 3) {
      // adding sfx for more than 3 bingos
      this.soundManager.playSfx(SFX_IDS.EPIC_BINGO, false, SFX_KEYS.EPIC_BINGO);
    }
    // if 2xPower is enabled then double the combo score
    if (parseInt(GameController.getInstance().getDecryptedValues(this.is2xPowerUpActive))) {
      bingoPatternScore = BINGO_SCORE.BingoScore * 2 * noOfCombos;
      comboBonusScore = BINGO_SCORE.ComboScore * 2 * (noOfCombos - 1);
      GameController.getInstance().setBonusScore =
        BINGO_SCORE.BingoScore * noOfCombos +
        BINGO_SCORE.ComboScore * (noOfCombos - 1);
    } else {
      bingoPatternScore = BINGO_SCORE.BingoScore * noOfCombos;
      comboBonusScore = BINGO_SCORE.ComboScore * (noOfCombos - 1);
    }
    // setting the no.of combos
    GameController.getInstance().setBingoNumber = noOfCombos;
    GameController.getInstance().setBingoScore =
      (BINGO_SCORE.BingoScore * noOfCombos);
    GameController.getInstance().setComboScore =
      (BINGO_SCORE.ComboScore * (noOfCombos - 1));
    this.score += bingoPatternScore + comboBonusScore;
    GameController.getInstance().setCurrentScore = this.score;

    let msg = "Bingo";
    if (noOfCombos == 2) msg = "Double Bingo";
    if (noOfCombos == 3) msg = "Triple Bingo";
    if (noOfCombos == 4) msg = "Epic Bingo";
    if (noOfCombos == 5) msg = "Quintuple Bingo";
    if (noOfCombos == 6) msg = "Sextuple Bingo";
    if (noOfCombos == 7) msg = "Septuple Bingo";
    if (noOfCombos == 8) msg = "Octuple Bingo";
    if (noOfCombos == 9) msg = "Nonuple Bingo";
    if (noOfCombos == 10) msg = "Decuple Bingo";
    if (noOfCombos == 11) msg = "Undecuple Bingo";
    if (noOfCombos == 12) msg = "Duodecuple Bingo";
    if (noOfCombos == 13) msg = "Tredecuple Bingo";
    if (this.isFullHouse) {
      msg = "Full House";
    }
    if (this.duabText == null) {
      let daubObject = {
        text: "",
        score: "",
        daubType: -2,
      };

      //setting the text to diaplay on top to show the no. of bingos
      daubObject.text = msg;
      this.createDaubText(daubObject, this.width / 2 + 75);
    } else {
      this.duabText.setText(msg);
      this.duabScoreText.setText("");
    }
    // updating score text
    this.updateScoreText();
  }

  /**on click of bingo Button pause all pattern aminations */
  pauseBingoPatternAnim() {
    let tickets = this.ticketCreation.tickets[0].ticketBlockItem;
    for (let index = 0; index < tickets.length; index++) {
      let patternAnim = tickets[index].data.list.animPattern;
      if (patternAnim != undefined) {
        if (patternAnim.anims.isPlaying) {
          patternAnim.setVisible(false);
          patternAnim.anims.pause();
        }
      }
    }
  }

  /*** Dollar animation on bingo blocks
   * @param {Dollar sprite} dollarBg*/
  bingoDollarAnimation(dollarBg) {
    dollarBg.setVisible(true);
    this.tweens.add({
      targets: dollarBg,
      scale: 1,
      duration: 300,
      ease: "linear",
    });
  }

  /*** Timer Warning blinking animation */
  timerBgBlinkingAnimation(target) {
    target.setVisible(true);
    this.timerBlinkingBgAnim = this.tweens.add({
      targets: target,
      alpha: 1,
      duration: 300,
      ease: "linear",
      yoyo: true,
      onstart: () => {
        target.setVisible(true);
      },
      repeat: -1,
    });
  }

  /** adding timer for every generated bingo ball */
  bingoBallTimer(positions, timerValue, timerDuration) {
    this.circularProgress = this.add
      .rexCircularProgress({
        x: positions.x,
        y: positions.y - 10,
        radius: this.dummyBingoBall.displayWidth * 2,
        barColor: FONT_STYLES.BINGO_TIMER_COLOR,
        value: timerValue,
      })
      .setVisible(false);
    this.circularProgress.setDepth(OBJECT_DEPTHS.CIRCULAR_PROGRESS_DEPTH);

    this.ballTimerTween = this.tweens.add({
      targets: this.circularProgress,
      value: 1,
      duration: timerDuration,
      ease: "Linear",
      onComplete: () => {
        if (this.circularProgress != null) {
          this.circularProgress.setValue(0);
          this.circularProgress.destroy();
          this.circularProgress = null;
        }
        if (GameController.getInstance().getIsGoldenBallExist || this.freeDaubCount > 0) {
          GameController.getInstance().setIsGeneratingNew = 1;
          if (GameController.getInstance().getIsGoldenBallExist) {
            this.visibleBingoBall("gamePlay");
          }
        } else {
          // GameController.getInstance().setIsGeneratingNew = 0;
        }
      },
    });
  }

  /**after golden Bingo ball timer end up are setting vsible all the bingo balls and score tags */
  visibleBingoBall(functionName) {
    this.generateNewBingoBall();

    if (this.powerUpButtons.length > 0) {
      this.powerUpButtons.forEach((element, index) => {
        element.setVisible(true);
      });
    }

    this.bingoBall.ballsOnUItoAnimate.forEach((element, index) => {
      element.setVisible(true);
      this.bingoBall.ballsOnUItoAnimate[index].data.list.text.setVisible(true);
    });
    this.bingoBall.mainBingoball.setVisible(true);
    this.bingoBall.mainBingoball.data.list.text.setVisible(true);

    this.scoreBg.setVisible(true);
    this.timerText.setVisible(true);
    this.scoreText.setVisible(true);
    this.timerBg.setVisible(true);
    this.duabBg.setVisible(true);
    this.powerUpTimerText.setVisible(true);

    /** making the goldenBall Instance to null */
    this.goldenPannelInstance = null;
    GameController.getInstance().setPauseBallTimer = 0;
  }

  /** we are generating new bingo ball if daub bingo ball is correct else  resuming the timer*/
  generateNewBingoBall() {
    if (GameController.getInstance().getIsGoldenBallExist) {
      this.bingoBall.mainBingoball.data.list.text.destroy();
      this.bingoBall.mainBingoball.destroy();
      this.bingoBall.mainBingoball = null;

      if (this.circularProgress != null) {
        this.circularProgress.setValue(0);
        this.circularProgress.setVisible(false);
      }

      let mainBallData = Object.assign({}, this.previousMainBingoBall.data.list);
      let mainBallFrame = this.previousMainBingoBall.frame.name;
      this.previousMainBingoBall.data.list.text.destroy();
      this.previousMainBingoBall.destroy();
      this.previousMainBingoBall = null;

      this.bingoBall.mainBingoball = this.add.sprite(this.mainBallPlacement, this.height / 4.3, "bingoAssets", mainBallFrame).setVisible(false);
      let bingoNotext = this.add.text(this.bingoBall.mainBingoball.x, this.bingoBall.mainBingoball.y, mainBallData.ballNo, {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS40,
        align: FONT_STYLES.ALIGN_CENTER,
      })
        .setOrigin(0.5)
        .setTint(FONT_STYLES.BINGO_BALL_COLOR);

      this.bingoBall.mainBingoball.setData({
        ballNo: mainBallData.ballNo,
        isScaleDown: mainBallData.isScaleDown,
        text: bingoNotext
      })

      if (!GameController.getInstance().getIsGeneratingNew) {
        if (!this.bingoBall.mainBingoball.data.list.isScaleDown) {
          this.bingoBall.mainBingoball.setScale(1);
          this.bingoBall.mainBingoball.x = (this.mainBallPlacement - this.dummyBingoBall.displayWidth / 2.5);
          this.bingoBall.mainBingoball.data.list.text.x = this.bingoBall.mainBingoball.x;
        }

        if (this.ballTimerTween != null) {
          this.ballTimerTween.remove();
          this.ballTimerTween = null;
        }

        this.adjustDisplacment();

        this.timerHandler.ballTimerCounter = 0;
        GameController.getInstance().setCurrentBallTime = 0;
        GameController.getInstance().setIsGoldenBallExist = 0;
        GameController.getInstance().setResumeTimer = 0;
        this.timerHandler.resetBallTimer(true, "new");
      } else {
        GameController.getInstance().setIsGeneratingNew = 0;
        this.resumeTimerOnMainBingoBall()
      }
    }

  }

  adjustDisplacment() {
    for (let i = (this.bingoBall.ballsOnUItoAnimate.length - 1); i >= 0; i--) {

      if (i == this.bingoBall.ballsOnUItoAnimate.length - 1) {
        this.bingoBall.ballsOnUItoAnimate[i].x = this.firstBallPlacement;
      } else {
        this.bingoBall.ballsOnUItoAnimate[i].x = (this.bingoBall.ballsOnUItoAnimate[i + 1].x - CONSTATNTS.GAP_BETWEEN_BALL);
      }
    }
  }

  /** on resume the mainBingoBall from golden ball screen  we need to resume timer */
  resumeTimerOnMainBingoBall(functionName) {
    if (!parseInt(GameController.getInstance().getDecryptedValues(this.isGameOver))) {
      GameController.getInstance().setPauseBallTimer = 0;

      if (this.bingoBall.mainBingoball != null) {
        if (!this.bingoBall.mainBingoball.data.list.isScaleDown) {
          this.bingoBall.mainBingoball.setScale(1);
        }
      }

      let positions = {
        x: this.bingoBall.mainBingoball.x,
        y: this.bingoBall.mainBingoball.y,
      };
      this.timerHandler.ballTimerCounter = GameController.getInstance().getResumeTimer;

      GameController.getInstance().setCurrentBallTime = this.timerHandler.ballTimerCounter;

      if (GameController.getInstance().getIsGoldenBallExist == 1) {
        GameController.getInstance().setIsGoldenBallExist = 0;
      }

      let resumeProgressValue = GameController.getInstance().getResumeCircularProgressValue / 100;

      this.bingoBallTimer(
        positions,
        resumeProgressValue,
        CONSTATNTS.BALL_TIMER - this.timerHandler.ballTimerCounter
      );

      this.circularProgress.setVisible(true)

      this.circularProgress.setRadius(
        this.bingoBall.mainBingoball.displayWidth / 1.7
      );

      if (GameController.getInstance().getIsGoldenBallExist == 1) {
        GameController.getInstance().setIsGoldenBallExist = 0;
      }
    }
  }

  /**pausing all gameplay tweens that are playing
   *  when clicked on star powerup to claim */
  pausePowerUpTweens() {
    //getting powerUp number count and decrementing by 1 on clicking
    GameController.getInstance().setPauseBallTimer = 1;

    let noOfPowers = GameController.getInstance().getPowerUpCount;
    if (noOfPowers > 0) {
      noOfPowers--;
    }
    GameController.getInstance().setMaxPowerUpCount = noOfPowers;

    // if there are 3 powerUps first then decremented by 1
    // on clicking the last powerUp destroying the text that display full on max powerUps
    if (
      GameController.getInstance().getPowerUpCount < CONSTATNTS.MAX_POWER_UPS
    ) {
      if (this.fullText != null) {
        this.fullText.destroy();
        this.fullText = null;
      }
    }

    // // set all the generted bingoballs to visible false
    this.bingoBall.ballsOnUItoAnimate.forEach((element, index) => {
      element.data.list.text.setVisible(false);
      element.setVisible(false);
    });

    this.bingoBall.mainBingoball.data.list.text.setVisible(false);
    this.bingoBall.mainBingoball.setVisible(false);

    let displacement = 0;

    // pausing ball timer circular progress tween
    if (this.ballTimerTween != null) {
      if (this.ballTimerTween.isPlaying()) {
        this.ballTimerTween.pause();

      }
    }

    // pausing ball movement tween (movement of balls to left side on creation of new main ball)
    if (this.bingoBall.ballMovementTween != null) {
      if (this.bingoBall.ballMovementTween.isPlaying()) {
        this.bingoBall.ballMovementTween.pause();
        displacement = this.bingoBall.ballsOnUItoAnimate[this.bingoBall.ballsOnUItoAnimate.length - 1].x - this.firstBallPlacement;
        GameController.getInstance().setDisplacement = displacement;
      }
    }

    if (this.bingoBall.lastBallPlacement != null) {
      if (this.bingoBall.lastBallPlacement.isPlaying()) {
        this.bingoBall.lastBallPlacement.pause();
        if (!this.bingoBall.mainBingoball.data.list.isScaleDown) {
          let frame = this.bingoBall.mainBingoball.frame.name.split(".")[0] + `_s.png`;
          this.bingoBall.mainBingoball.setFrame(frame);

        }
      }
    }


    if (this.bingoBall.mainBallTween != null) {
      let X_Axis = this.mainBallPlacement - this.bingoBall.mainBingoball.x;
      if (this.bingoBall.mainBallTween.isPlaying()) {
        if (!this.bingoBall.mainBingoball.data.list.isScaleDown) {
          this.bingoBall.mainBingoball.setScale(1);
          this.bingoBall.mainBingoball.x -= X_Axis;
        }
        this.bingoBall.mainBallTween.pause();
      }
    }

    GameController.getInstance().setIsCreatingNewBingoBall = 0;


  }

  /**resuming the tweens in gameplay
   * * that are paused on claiming star powerUp */
  resumePowerUpTweens() {
    if (this.ballTimerTween != null) {
      if (this.ballTimerTween.isPaused()) {
        this.ballTimerTween.remove();
        this.ballTimerTween = null;
      }
    }

    if (this.freeDaubCount > 0) {
      if (this.circularProgress != null) {
        if (this.circularProgress.getValue() > 0) {
          this.circularProgress.setValue(0);
          this.circularProgress.setVisible(false)
          this.timerHandler.ballTimerCounter = 0;
          GameController.getInstance().setCurrentBallTime = this.timerHandler.ballTimerCounter;
        }
      }
    }

    this.bingoBall.mainBingoball.x = this.mainBallPlacement - this.dummyBingoBall.displayWidth / 2.5;
    this.bingoBall.mainBingoball.data.list.text.x = this.bingoBall.mainBingoball.x;
    this.adjustDisplacment();

    // set all the generted bingoballs to visible true
    this.bingoBall.mainBingoball.data.list.text.setVisible(true);
    this.bingoBall.mainBingoball.setVisible(true);

    this.bingoBall.ballsOnUItoAnimate.forEach((element, index) => {
      element.data.list.text.setVisible(true);
      element.setVisible(true);
    });

    if (this.freeDaubCount > 0) {
      this.resumeTimerOnMainBingoBall();
    }
    GameController.getInstance().setPauseBallTimer = 0;
  }

  /** * Animating pattern for check */
  animateStarPattern() {
    GameController.getInstance().setIsGeneratingNew = 0;
    GameController.getInstance().setIsStarActive = 1;
    // getting already daubbed indexes
    let matchedArrayIndexes =
      this.ticketCreation.bingoTicketInstance.matchedDaubListIndex;
    let allBlocksArr = [];
    // storing all block indexes
    this.ticketCreation.bingoTicketInstance.ticketBlockItem.forEach(
      (element) => {
        allBlocksArr.push(
          element.data.list.TicketBlockItem.blockIndex
        );
      }
    );
    // sorting the undaubbed indexes from daubed indexes
    let powerUpPatternArr = allBlocksArr.filter((element) =>
      matchedArrayIndexes.every((currentElement) => element != currentElement)
    );

    // checking the undaubed indexes and playing the green glow anim
    for (let index = 0; index < powerUpPatternArr.length; index++) {
      {
        let elementIndex = powerUpPatternArr[index];
        //setting anim sprite true

        this.ticketCreation.bingoTicketInstance.ticketBlockItem[
          elementIndex
        ].data.list.freeDaubPattern.setVisible(true);

        // playing animation
        this.ticketCreation.bingoTicketInstance.ticketBlockItem[
          elementIndex
        ].data.list.freeDaubPattern.play("freeDaubAnim");
      }
    }
  }
  /** * Pausing Star powerUp Animation*/
  pauseStarPowerUpAnim() {
    // pausing star power up animation for what ever the green glow anim sprite is active
    this.ticketCreation.bingoTicketInstance.ticketBlockItem.forEach(
      (element) => {
        let patternAnim = element.data.list.freeDaubPattern;
        if (patternAnim != undefined) {
          if (patternAnim.anims.isPlaying) {
            //setting green glow anim sprite is inactive
            patternAnim.setVisible(false);
            patternAnim.anims.pause();
          }
        }
      }
    );
  }

  /*** on gameOver*/
  gameOver(gameOverOnFullHouse) {
    this.stopAllTweens();
    if (this.goldenPannelInstance != null) {
      this.goldenPannelInstance.timer.remove();
    }
    let newScreen = new GameOver({ scene: this });
    newScreen.init(gameOverOnFullHouse);
  }

  /** Stopping all the tweens on gameover  */
  stopAllTweens() {
    this.bingoButton.disableInteractive();
    this.powerUpButtons.forEach((element, index) => {
      element.disableInteractive();
    })
    
    // Disable all ticket block interactions
    if (this.ticketCreation && this.ticketCreation.tickets[0]) {
      this.ticketCreation.tickets[0].ticketBlockItem.forEach(block => {
        block.disableInteractive();
      });
    }

    this.pausePowerUpTweens();
    this.timerHandler.enableCountDown = false;
    this.timerHandler.enableBallCountDown = false;
    this.warnTimerBg.setVisible(false);

    // Clean up circular progress timer
    if (this.circularProgress != null) {
      if (this.ballTimerTween) {
        this.ballTimerTween.remove();
        this.ballTimerTween = null;
      }
      this.circularProgress.setValue(0);
      this.circularProgress.setVisible(false);
      this.circularProgress.destroy();
      this.circularProgress = null;
    }

    if (this.timerBlinkingBgAnim != undefined) {
      this.timerBlinkingBgAnim.stop();
    }
    this.bingoButton.setAlpha(0.1);
    if (this.bingoButtonGlow._visible) {
      this.bingoButtonTween.stop();
      this.bingoButtonGlow.setVisible(false);
    }
    this.pauseBingoPatternAnim();
  }
}
