import {
  CONSTATNTS,
  SCORE_TYPE,
  DUABSCORE,
  FONT_STYLES,
  SFX_IDS,
  SFX_KEYS,
} from "../Constants.js";
import GameController from "./GameController.js";
import GoldenPannel from "./GoldenPannel.js";

let sceneScope;
export default class TimerHandler extends Phaser.Physics.Arcade.Sprite {
  gameManager; /* scope of the parent class */
  timerText; /*  timerSec text that is being displayed on the gameboard */
  timedEvent; /* holds the scope of this timeEvent */
  enableCountDown; /**on the start of inital game timer we set to true */
  enableBallCountDown; /* boolean mainted to know that the current ball timer is active or not */
  ballTimerCounter; /**ball counter will be updated for every one second  */
  timerSec; /** as we make the timer in millisec  we take another varible to caluclate and display in sec */
  gameTimer;
  powerUpTimeCounter = 0;
  secImageTween = null;
  constructor(data) {
    sceneScope = data.scene;
    super(sceneScope, 0, 0, "");
  }

  init(manager) {
    //temp
    this.powerUpObjects = [];

    this.gameManager = manager;
    this.enableCountDown = false;
    this.enableBallCountDown = false;
    this.timerSec = CONSTATNTS.GAMETIMER;
    this.ballTimerCounter = 100;
    this.dummyCounter = 0;
    // this.timerSec = CONSTATNTS.GAMETIMER;
    GameController.getInstance().setCurrentGameTime = this.timerSec;
    // Example usage: Update the bar with a percentage
    this.percentage = 15; // Update this value as needed

    this.balltimerText = sceneScope.add
      .text(sceneScope.width / 2, sceneScope.height / 7, "")
      .setFontSize(40)
      .setOrigin(0.5)
      .setVisible(false);

    this.ballTimerEvent = sceneScope.time.addEvent({
      delay: 100,
      callback: this.balltimedEvent,
      callbackScope: this,
      loop: true,
    });

    this.timedEvent = sceneScope.time.addEvent({
      delay: 100,
      callback: this.timerUpdate,
      callbackScope: this,
      loop: true,
    });

    this.ballTimerEvent.paused = false;
  }

  /**
   *  this function  will set the timer for ball at the time of ball creation  else it will start the gameplay time
   */
  setTimerON(isBallTimer = false, ballTime, functionName) {
    if (!isBallTimer) {
      GameController.getInstance().setCurrentGameTime = this.timerSec;
      this.enableCountDown = true;
      this.enableBallCountDown = true;
    } else {
      this.ballTimerCounter = ballTime;
      GameController.getInstance().setCurrentBallTime = this.ballTimerCounter;
      this.enableBallCountDown = true;
    }
  }

  /**
   * Calculating Time in minutes and seconds
   */
  calculateTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let partInseconds = Math.floor(seconds % 60);
    let timerText =
      minutes.toString().padStart(1, "0") +
      " : " +
      partInseconds.toString().padStart(2, "0");
    return timerText;
  }

  /**
   * Timer Update Event called after every one second to t update the timerSec
   */
  timerUpdate() {
    if (this.enableCountDown) {
      /**  game timer completed for 5 minutes */

      if (GameController.getInstance().getCurrentGameTime == 0) {
        this.timedEvent.destroy();
      } else {
        /** updating time after every one second */

        this.timerSec -= 0.1; // 100 ms
        GameController.getInstance().setCurrentGameTime = this.timerSec;
        let timerTextDisplay = this.calculateTime(
          GameController.getInstance().getCurrentGameTime
        ).toString();
        this.gameTimer = GameController.getInstance().getCurrentGameTime;
        sceneScope.timerText.setText(timerTextDisplay);
        //if bonus timer is added in 10 sec below then timer may increase above 10 sec
        // then make warnTimer setActive false;
        if (
          sceneScope.timerBlinkingBgAnim != undefined &&
          sceneScope.timerBlinkingBgAnim.isPlaying() &&
          this.gameTimer > CONSTATNTS.GAME_LAST_TEN_SEC
        ) {
          sceneScope.timerBlinkingBgAnim.pause();
          sceneScope.warnTimerBg.setVisible(false);
        }
      }

      // GameController.getInstance().setCurrentGameTime = this.timerSec;

      if (GameController.getInstance().getCurrentGameTime > 0) {
        let pauseBallTimer = GameController.getInstance().getPauseBallTimer;
        
        /**last 30 seconds of game */
        if (
          this.gameTimer == CONSTATNTS.GAME_TIMER_WARNING &&
          !pauseBallTimer && this.secImageTween == null) {
          sceneScope.soundManager.bgMusic.stop();
          let textObject = sceneScope.add.sprite(
            sceneScope.width / 2,
            sceneScope.height / 2,
            "bingoAssets",
            "Last-30-Sec.png"
          );
          this.warnTextTween(textObject);
          sceneScope.soundManager.playSfx(
            SFX_IDS.LAST_30_SEC_MUSIC,
            true,
            SFX_KEYS.LAST_30_SEC_MUSIC
          );

          // if (sceneScope.timerBlinkingBgAnim == undefined) {
          //   sceneScope.timerBgBlinkingAnimation(sceneScope.warnTimerBg);
          // } else {
          //   sceneScope.timerBlinkingBgAnim.resume();
          // }
        } /** last 10 seconds of game */ else if (
          this.gameTimer == CONSTATNTS.GAME_LAST_TEN_SEC && !pauseBallTimer &&
          this.secImageTween == null) {
          let textObject = sceneScope.add.sprite(
            sceneScope.width / 2,
            sceneScope.height / 2,
            "bingoAssets",
            "Last-10-Sec.png"
          );
          this.warnTextTween(textObject);
          sceneScope.soundManager.playSfx(
            SFX_IDS.LAST_10_SEC_INDICATOR,
            false,
            SFX_KEYS.LAST_10_SEC_INDICATOR
          );
          if (sceneScope.timerBlinkingBgAnim == undefined) {
            sceneScope.timerBgBlinkingAnimation(sceneScope.warnTimerBg);
          }  else {
            sceneScope.timerBlinkingBgAnim.resume();
          }
        }
      } else {
        //timerSec completed
        this.enableCountDown = false;
        //reset the timer again
        this.showTimeUp();
      }

      /**check if BallCountDown is enabled or not*/
      if (this.enableBallCountDown) {
        if (this.ballTimerCounter >= CONSTATNTS.BALL_TIMER) {
          if (
            GameController.getInstance().getPauseBallTimer == 0 ||
            !GameController.getInstance().getIsGeneratingNew
          ) {
            this.enableBallCountDown = false;
            this.showTimeUp(true, "timerHandler");
          }
        }
      }
    }
  }

  /**waring text tween */
  warnTextTween(gameObject) {
    this.secImageTween = sceneScope.tweens.add({
      targets: gameObject,
      scale: 2,
      duration: 600,
      ease: "linear",
      onComplete: () => {
        sceneScope.tweens.add({
          targets: gameObject,
          scale: 1,
          duration: 600,
          delay: 300,
          ease: "linear",
          onComplete: () => {
            gameObject.destroy();
            this.secImageTween = null;
          },
        });
      },
    });
  }

  /**
   * Time event for Ball Timer
   */
  balltimedEvent() {
    if (GameController.getInstance().getPauseBallTimer) {
      if (!this.ballTimerEvent) {
        this.ballTimerEvent.paused = false;
      }
      return;
    }

    this.dummyCounter++;
    if (this.ballTimerCounter < CONSTATNTS.BALL_TIMER) {
      this.ballTimerCounter += 100;
    }

    this.balltimerText.setText(this.ballTimerCounter.toString());
  }

  /**checks if timerSec is completed  or ball timer is completed  */
  showTimeUp(isBallTimer = false, functionName) {
    if (!isBallTimer) {
      //GameOver
      console.log("***Game Over***");
      console.log("TIME'S UP");
      sceneScope.isGameOver = GameController.getInstance().getEncryptedValue(
        sceneScope.isGameOver
      );
      sceneScope.gameOver(false);
      if (sceneScope.blinkingTween != undefined) {
        sceneScope.blinkingTween.stop();
      }
      this.ballTimerEvent.remove();
      if (this.twoXPowerTimerEvent != undefined) {
        this.twoXPowerTimerEvent.remove();
      }
    }

    this.resetBallTimer(isBallTimer, "timerHandler");
  }

  /* call after every  3 seconds and generate Bingo ball */
  resetBallTimer(isBallTimer, functionName) {
    if (!isBallTimer) {
      this.enableCountDown = false;
    } else {
      GameController.getInstance().setIsCreatingNewBingoBall = 1;
      if (sceneScope.circularProgress != null) {
        if (sceneScope.circularProgress.getValue() > 0) {
          sceneScope.circularProgress.setValue(0);
          sceneScope.circularProgress.setVisible(false);
          // this.destroyTweens();
        }
      }
      this.ballTimerCounter = 0;
      this.enableBallCountDown = false;
      this.gameManager.bingoBall.generateBingoBallNumber("from TimerHandler");
    }
  }

  destroyTweens() {
    if (sceneScope.ballTimerTween != null) {
      sceneScope.ballTimerTween.remove();
      sceneScope.ballTimerTween = null;
    }

    if (sceneScope.bingoBall.ballMovementTween != null) {
      if (!sceneScope.bingoBall.ballMovementTween.isPlaying()) {
        sceneScope.bingoBall.ballMovementTween.remove();
        sceneScope.bingoBall.ballMovementTween = null;
      }
    }

    if (sceneScope.bingoBall.lastBallPlacement != null) {
      if (!sceneScope.bingoBall.lastBallPlacement.isPlaying()) {
        sceneScope.bingoBall.lastBallPlacement.remove();
        sceneScope.bingoBall.lastBallPlacement = null;
      }
    }

    if (sceneScope.bingoBall.mainBallTween != null) {
      if (!sceneScope.bingoBall.mainBallTween.isPlaying()) {
        sceneScope.bingoBall.mainBallTween.remove();
        sceneScope.bingoBall.mainBallTween = null;
      }
    }
  }

  /**
   * To calculate ball remaining timer
   */
  getRemainingBallTimer() {
    return CONSTATNTS.BALL_TIMER - this.ballTimerCounter > 0 ? true : false;
  }

  /**
   * Get score based on daub type timer
   * @returns score type to add for perfect duab and good daub
   */
  getScoreTypeOnDaub() {
    // for perfect duab
    if (this.ballTimerCounter <= CONSTATNTS.PERFECT_DAUB_TIMER) {
      return SCORE_TYPE.PERFECT_DAUB;
    }
    // for good duab
    else if (this.ballTimerCounter <= CONSTATNTS.GOOD_DAUB_TIMER) {
      return SCORE_TYPE.GOOD_DAUB;
    } else {
      // for correct daub
      return SCORE_TYPE.CORRECT_DAUB;
    }
  }

  getScoreOnDaub() {
    let score = 0;
    if (this.ballTimerCounter <= CONSTATNTS.PERFECT_DAUB_TIMER) {
      score = this.gameManager.scoreValue(
        DUABSCORE.PerfectDaub,
        SCORE_TYPE.PERFECT_DAUB
      );
    } else if (this.ballTimerCounter <= CONSTATNTS.GOOD_DAUB_TIMER) {
      score = this.gameManager.scoreValue(
        DUABSCORE.GoodDaub,
        SCORE_TYPE.GOOD_DAUB
      );
    } else {
      score = this.gameManager.scoreValue(
        DUABSCORE.CorrectDaub,
        SCORE_TYPE.CORRECT_DAUB
      );
    }
    return score;
  }

  /**
   * Adding 2x powerup timer
   * @param {if already one 2x power up timer is exist} powerUpAlreadyUnabled
   */
  set2XPowerUpTimerOn(powerUpAlreadyUnabled) {
    /**if already powerUp exists the we add the extra powerUp time */
    if (powerUpAlreadyUnabled) {
      this.powerUpTimeCounter += CONSTATNTS.POWERUPTIMER;
    } else {
      /** else we are adding 2xpowerup time */
      this.powerUpTimeCounter = CONSTATNTS.POWERUPTIMER;
      /** timer event for 2xPowerTimer */
      this.twoXPowerTimerEvent = sceneScope.time.addEvent({
        delay: 1000,
        callback: this.twoXpowerTimerUpdate,
        callbackScope: this,
        loop: true,
      });
      this.twoXPowerTimerEvent.paused = true;
    }
    this.twoXPowerTimerEvent.paused = false;
  }
  /**
   * twoX power Timer decreasing for every second
   */
  twoXpowerTimerUpdate() {
    if (
      GameController.getInstance().getPowerUpCount < CONSTATNTS.MAX_POWER_UPS
    ) {
      if (sceneScope.fullText != null) {
        sceneScope.fullText.destroy();
        sceneScope.fullText = null;
      }
    }

    /** if powerTimer is 0 then we update the status of powerup */
    if (this.powerUpTimeCounter == 0) {
      sceneScope.is2xPowerUpActive =
        GameController.getInstance().getEncryptedValue(0);
      sceneScope.powerUpTimerText.setText("");
      this.twoXPowerTimerEvent.remove();
    } else {
      this.powerUpTimeCounter--;
      let timerTextDisplay = this.calculateTime(
        this.powerUpTimeCounter
      ).toString();
      sceneScope.powerUpTimerText.setText("2 X " + timerTextDisplay);
    }
  }

  /**
   * setting powerUp Timer for Freedaub star powerUp
   */
  setStarPowerUpTimerOn(time) {
    GameController.getInstance().setPauseBallTimer = 1;

    let timerData = {
      timerValue: 0,
      timerDutation: 0,
    };

    if (sceneScope.circularProgress != null) {
      timerData.timerValue = sceneScope.circularProgress.getValue();
    }

    timerData.timerDutation = this.ballTimerCounter;
    GameController.getInstance().setCurrentBallTime = this.ballTimerCounter;

    GameController.getInstance().setResumeTimer =
      sceneScope.timerHandler.ballTimerCounter;

    if (sceneScope.circularProgress != null) {
      GameController.getInstance().setResumeCircularProgressValue =
        sceneScope.circularProgress.getValue();
      sceneScope.circularProgress.setValue(0);
    } else {
      GameController.getInstance().setResumeCircularProgressValue = 0;
    }

    sceneScope.pausePowerUpTweens("from star powerUp");

    //adding text on click of powerUp
    let text;
    if (sceneScope.freeDaubCount == 1) {
      text = "DAUB ANY NUMBER ON CARD";
    } else {
      text = "DAUB ANY " + sceneScope.freeDaubCount + " NUMBERS ON CARD";
    }
    // if previously any star power up is clicked then removing that power up text and timer
    if (this.powerUpObjects.length != 0) {
      this.powerUpObjects[0].destroy();
      this.powerUpObjects[1].remove();
      this.powerUpObjects = [];
    }
    this.freeDaubText = sceneScope.add
      .text(sceneScope.width / 10, sceneScope.height / 5, text, {
        fontFamily: FONT_STYLES.FONT_FAMILY_REGULAR,
        fontSize: FONT_STYLES.FS36,
        align: FONT_STYLES.ALIGN_CENTER,
      })
      .setWordWrapWidth(sceneScope.bg.width / 1.1);
    //temp
    this.powerUpObjects.push(this.freeDaubText);

    /** */
    this.starTimer = sceneScope.time.addEvent({
      delay: 1000,
      callback: () => {
        time -= 1;
        if (GameController.getInstance().getIsGoldenBallExist == 1) {
          this.freeDaubText.setVisible(false);
        } else {
          this.freeDaubText.setVisible(true);
        }

        //  GameController.getInstance().setPauseBallTimer = 1;
        /** when time is up or daubing is completed we remove timer and daubcount made 0 */
        if (
          time == 0 ||
          (sceneScope.freeDaubCount == 0 &&
            GameController.getInstance().getIsStarActive) ||
          parseInt(
            GameController.getInstance().getDecryptedValues(this.isGameOver)
          )
        ) {
          this.destroyStarTimer();
        }
      },
      callbackScope: sceneScope,
      loop: true,
    });
    // storing the star powerup Timer  and also power up text
    this.powerUpObjects.push(this.starTimer);
  }

  destroyStarTimer() {
    GameController.getInstance().setPauseBallTimer = 0;
    GameController.getInstance().setIsStarActive = 0;
    sceneScope.resumePowerUpTweens();
    sceneScope.pauseStarPowerUpAnim();
    this.freeDaubText.destroy();
    this.starTimer.remove();
    sceneScope.freeDaubCount = 0;
  }
}
