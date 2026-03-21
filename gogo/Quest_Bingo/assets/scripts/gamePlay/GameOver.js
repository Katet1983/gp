import {
  CONSTATNTS,
  SCORE_TYPE,
  DUABSCORE,
  BINGO_SCORE,
  FONT_STYLES,
  SCENES,
} from "../Constants.js";
import GameController from "./GameController.js";

let sceneScope;
let isReplayDown = false;
export default class GameOver extends Phaser.Physics.Arcade.Sprite {
  totalScore = 0; // total score to display
  scoreBgList = [];
  constructor(data) {
    sceneScope = data.scene;
    super(sceneScope, 0, 0, "");
  }

  init(gameOverOnFullHouse) {
    if (sceneScope.daubDisplayImg != null) {
      sceneScope.hideDaubTweens();
    }
    
    this.scoreCalculation = [
      {
        count: GameController.getInstance().getNoOfPerfectDaubs,
        text: "PERFECT DAUB",
        score: GameController.getInstance().getPerfectDaubScore,
      },
      {
        count: GameController.getInstance().getNoOfGoodDaubs,
        text: "GOOD DAUB",
        score: GameController.getInstance().getGoodDaubScore,
      },
      {
        count: GameController.getInstance().getNoOfCorrectDaubs,
        text: "CORRECT DAUB",
        score: GameController.getInstance().getCorrectDaubScore,
      },
      {
        count: GameController.getInstance().getBingoNumber,
        text: "BINGOS",
        score:
          GameController.getInstance().getBingoScore,
      },
      {
        count: null,
        text: "COMBO BINGOS",
        score: GameController.getInstance().getComboScore,
      },
      {
        count: null,
        text: "2X BONUS SCORE",
        score: GameController.getInstance().getBonusScore,
      },
      {
        count: null,
        text: "FULL HOUSE",
        score: gameOverOnFullHouse ? DUABSCORE.FULL_HOUSE : 0,
      },
      {
        count: null,
        text: "PENALTY",
        score: GameController.getInstance().getPenaltyScore > 0 ? '-' + GameController.getInstance().getPenaltyScore : 0,
      },
    ];

    this.textFontStyle = {
      fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
      fontSize: FONT_STYLES.FS22,
      align: FONT_STYLES.ALIGN_CENTER,
    };
    /**ScoreTitle of GameOver Screen */
    let gameOverBg = sceneScope.add.image(
      sceneScope.width / 2,
      sceneScope.height / 2,
      "BingoBg"
    );
    this.scoreTitleBg = sceneScope.add.sprite(
      gameOverBg.x,
      gameOverBg.y - gameOverBg.displayHeight / 2.6,
      "bingoAssets",
      "ScoreHeaderBox.png"
    );

    let scoreTitleText = sceneScope.add
      .text(this.scoreTitleBg.x, this.scoreTitleBg.y, "SCORE", {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS38,
        align: FONT_STYLES.ALIGN_CENTER,
      })
      .setOrigin(0.5);
    this.generateScoreText();
    this.animateGameOver();
    //total score Bg

    this.totalScoreContainer = sceneScope.add
      .container(gameOverBg.x, gameOverBg.y + gameOverBg.displayHeight / 6)
      .setVisible(false);

    let totalScoreBg = sceneScope.add.sprite(
      0,
      0,
      "bingoAssets",
      "TotalBG.png"
    );

    this.totalScoreContainer.add(totalScoreBg);
    /** total score title text added */
    let totalScoreTitle = sceneScope.add.text(
      totalScoreBg.x - totalScoreBg.displayWidth / 2.5,
      totalScoreBg.y - totalScoreBg.displayHeight / 3,
      "TOTAL SCORE",
      {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS36,
        align: FONT_STYLES.ALIGN_CENTER,
      }
    );
    this.totalScoreContainer.add(totalScoreTitle);
    let scoreText = GameController.getInstance().getCurrentScore;
    scoreText = scoreText.toLocaleString("en-IN");
    let scoreValueText = sceneScope.add
      .text(
        totalScoreBg.x + totalScoreBg.displayWidth / 3.5,
        totalScoreBg.y,
        scoreText.toString(),
        {
          fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
          fontSize: FONT_STYLES.FS36,
          align: FONT_STYLES.ALIGN_CENTER,
        }
      )
      .setOrigin(0.5);
    this.totalScoreContainer.add(scoreValueText);
    sceneScope.logAnalyticEvent("game_over", {score : GameController.getInstance().getCurrentScore});
  }

  // reloadGame() {
  //   parent.location.reload();
  // }

  /**
   * score submitting function
   */
  submitScore() {
    fetch("https://telegram-games.yesgnome.com/api/v1/score/addScore/", {
      method: "POST",
      body: JSON.stringify({
        gameId: "64786655bf4d2af51ee0b0c0",
        userId: sceneScope.game.userId,
        matchId: sceneScope.game.matchId,
        chatId: sceneScope.game.chatId,
        firstName: sceneScope.game.firstName,
        score: GameController.getInstance().getCurrentScore,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }


  submitScoreForTournament() {
    console.log('submitScoreForTournament', JSON.stringify({
      score: GameController.getInstance().getCurrentScore,
      _id: sceneScope.game.userId,
      instanceId: sceneScope.game.tournamentId
    }));
    fetch("https://telegram-games.yesgnome.com/api/v1/tournament/addPlayerScore", {
      method: "PUT",
      body: JSON.stringify({
        score: GameController.getInstance().getCurrentScore,
        playerId: sceneScope.game.userId,
        instanceId: sceneScope.game.tournamentId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  /**
   * Generating the caluculated separate scores to display
   * in gameover screen
   *
   */
  generateScoreText() {
    //Position for scoreType Bgs
    let scoreBGsPos = {
      x: this.scoreTitleBg.x,
      y: this.scoreTitleBg.y + this.scoreTitleBg.displayHeight * 2,
    };
    /** getting the values of scoreTypes and scores based on types number */
    for (let index = 0; index < this.scoreCalculation.length; index++) {
      // scoreType bg added
      let scoreContainer = sceneScope.add
        .container(scoreBGsPos.x, scoreBGsPos.y)
        .setVisible(false);
      let scoreBg;

      scoreBg = sceneScope.add.sprite(
        0,
        0,
        "bingoAssets",
        "scoreboard_scoreSection.png"
      );

      if (index == this.scoreCalculation.length - 1) {
        scoreBg.setFrame("PenaltyBg.png");
      }

      scoreContainer.add(scoreBg);
      scoreContainer.setSize(scoreBg.displayWidth, scoreBg.displayHeight);
      this.scoreBgList.push(scoreContainer);

      if (this.scoreCalculation[index].count != null) {
        let scoreCount = sceneScope.add.text(
          scoreBg.x - scoreBg.displayWidth / 2.8,
          scoreBg.y - scoreBg.displayHeight / 3,
          this.scoreCalculation[index].count,
          this.textFontStyle
        );
        scoreCount.setPosition(
          scoreCount.x - scoreCount.displayWidth / 2,
          scoreCount.y
        );
        scoreCount.setTint(FONT_STYLES.GAME_OVER_COUNT_COLOR);
        scoreContainer.add(scoreCount);
      }
      /** score type title text added */
      let scoreTypeTitle = sceneScope.add.text(
        scoreBg.x - scoreBg.displayWidth / 3.3,
        scoreBg.y - scoreBg.displayHeight / 3,
        this.scoreCalculation[index].text,
        this.textFontStyle
      );
      scoreContainer.add(scoreTypeTitle);
      // scoreTypeTitle.setOrigin(0.5)

      let scoreValueText = sceneScope.add
        .text(
          scoreBg.x + scoreBg.displayWidth / 4,
          scoreBg.y,
          this.scoreCalculation[index].score.toString(),
          this.textFontStyle
        )
        .setOrigin(0.5);

      scoreContainer.add(scoreValueText);
      if (index == this.scoreCalculation.length - 1) {
        scoreValueText.setTint(FONT_STYLES.WHITE_COLOR);
      } else {
        scoreValueText.setTint(FONT_STYLES.GAME_OVER_SCORE_COLOR);
      }
      scoreBGsPos.y =
        this.scoreBgList[this.scoreBgList.length - 1].y +
        1.15 * this.scoreBgList[0].displayHeight;

    }
  }

  onClickContinueFunctionality() {
    let continueBg = sceneScope.add.sprite(sceneScope.width / 2, sceneScope.height - 150, 'startAndContinueUI','continue_button_01.png');
    continueBg.setInteractive();
    let continueText = sceneScope.add.text(continueBg.x, continueBg.y-10, "Play Again",
      {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS36,
        align: FONT_STYLES.ALIGN_CENTER,
        color: "#ffffff"
      }
      ).setOrigin(0.5);
    continueText.setDepth(1000);
    // let barfill = sceneScope.add.sprite(continueBg.x, continueBg.y-10, 'startAndContinueUI','continue_progress.png');
    // barfill.setDepth(1000);
    // barfill.mask = new Phaser.Display.Masks.BitmapMask(
    //   sceneScope,
    //   continueBg
    // );
    // sceneScope.tweens.add({
    //   targets: barfill,
    //   x: continueBg.x - continueBg.displayWidth,
    //   duration: 1500,
    //   ease: 'linear',
    //   onComplete() {
    //     sceneScope.time.delayedCall(200, () => { parent.location.reload() });
    //   }
    // });
    continueBg.on('pointerdown', function () {
      continueBg.setFrame("continue_button_02.png");
      isReplayDown = true;
    })
    continueBg.on('pointerup', function () {
      continueBg.setFrame("continue_button_03.png");
      if (isReplayDown) {
        continueBg.disableInteractive();
        sceneScope.time.delayedCall(200, () => {
           sceneScope.scene.start(SCENES.MAIN_MENU);
           GameController.Instance = null;
          });
      }
    })
    // }
  }

  animateGameOver() {
    // Pause all sounds
    sceneScope.sound.pauseAll();
    
    // Play background music if enabled
    let soundManager = sceneScope.scene.get(SCENES.SOUND_MANAGER);
    if (soundManager) {
      soundManager.resumeAudioContext();
    }
    
    GameController.getInstance().setPauseBallTimer = 1;

    if (sceneScope.circularProgress != null) {
      sceneScope.circularProgress.setValue(0);
      sceneScope.circularProgress.setVisible(false);
    }

    let index = 0;
    this.scoreBgList[index].setVisible(true);
    sceneScope.time.addEvent({
      delay: 300,
      callback: () => {
        if (index == this.scoreBgList.length - 1) {
          this.onClickContinueFunctionality()
          this.totalScoreContainer.setVisible(true);
          // this.submitScore();
          if (sceneScope.game.tournamentId === 0) {
            // this.submitScore();
          } else {
            // this.submitScoreForTournament();
          }
        }
        if (index == this.scoreBgList.length - 1) {
          this.confitteEmitter(this.totalScoreContainer.x, this.totalScoreContainer.y);
        }
        if (index <= this.scoreBgList.length - 1) {
          this.scoreBgList[index].setVisible(true);
          if (index == 2) {
            this.confitteEmitter(this.scoreBgList[2].x - sceneScope.width / 4, this.scoreBgList[2].y);
          }
          if (index == 4) {
            this.confitteEmitter(this.scoreBgList[5].x + sceneScope.width / 4, this.scoreBgList[5].y);
          }
          index++;
        }

      },
      callbackScope: this,
      loop: true,
    });

    GameSnacks.score.update(parseInt(GameController.getInstance().getCurrentScore));
    console.log("score is>", parseInt(GameController.getInstance().getCurrentScore));
    GameSnacks.game.gameOver();
   // GameSnacks.game.levelComplete(1);
    sceneScope.showInterstitial();
  }
  /**
  * Confitee animation for celebrating win movement.
  */
  confitteEmitter(xPos, yPos) {
    let config = {
      key: "confettiParticles"
    }

    // let emitZone = new Phaser.Geom.Rectangle(x, y, width, height);
    let particles = sceneScope.add.particles("gameOverParticles").createEmitter({
      // let confitteEmitter = particles.createEmitter({
      frame: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png"],
      x: xPos,
      y: yPos,
      angle: { min: 45, max: 360 },
      radial: true,
      lifespan: 1500,
      speed: { min: 100, max: 300 },
      scale: 1,
      gravityY: 200,
      rotate: { min: 0, max: 360 },
      blendMode: 'ADD',
    });
    particles.explode(25);
  }
}
