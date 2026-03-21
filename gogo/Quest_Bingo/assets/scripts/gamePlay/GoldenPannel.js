import { CONSTATNTS, FONT_STYLES, SFX_IDS, SFX_KEYS } from "../Constants.js";
import GameController from "./GameController.js";
let sceneScope;

export default class GoldenPannel extends Phaser.Physics.Arcade.Sprite {
  goldenTimer = CONSTATNTS.GOLDEN_BALL_TIMER;
  previousMainBallTween = null;
 
  constructor(scene) {
    sceneScope = scene;
    super(sceneScope, 0, 0, "");
  }

  init() {
    
    GameController.getInstance().setPauseBallTimer = 1
    this.uiElements = sceneScope.add.group();
    this.poosibleBallsArrays = this.getPossibleBalls();

    if (sceneScope.daubDisplayImg != null) {
      sceneScope.hideDaubTweens();
    }
        
    this.pauseTweens();
    this.bingoBallUi();
    
  }

  /** get possible bingo ball for bingo ball display  */
  getPossibleBalls() {

    // matched DaubList from bingo ticket
    let matchedDaubList = sceneScope.ticketCreation.bingoTicketInstance.matchedDaubList;
    let bingoBallUiList = [];
    sceneScope.bingoBall.ballsOnUItoAnimate.forEach((element) => { 
      bingoBallUiList.push(element.data.list.ballNo)
    })
    
    let possibleArrayBalls = [];
    let possibleArrayBallIndex = [];
    /** caluclating the max possible ball count */
    let maxPossibleBallsCount =
      sceneScope.ticketCreation.tickets[0].ticketBlockItem.length -
      matchedDaubList.length;
    if (maxPossibleBallsCount > CONSTATNTS.MAX_BALL_COUNT) {
      maxPossibleBallsCount = CONSTATNTS.MAX_BALL_COUNT;
    }
  
    /** generate the index no of elements that are not already daub */
    while (possibleArrayBalls.length < maxPossibleBallsCount) {
      let randomBallIndex =
        sceneScope.ticketCreation.bingoTicketInstance.ticketBlockItem[
          Phaser.Math.Between(0, 24)
        ].data.list.TicketBlockItem;

      let bingoTicketIndex;
      if (randomBallIndex != undefined) {
        if (randomBallIndex.blockIndex != 12) {
          bingoTicketIndex = randomBallIndex.blockNumber;

          let isElement = this.checkIfElementExist(
            bingoTicketIndex,
            matchedDaubList
          );
          if (!isElement) {
            if (possibleArrayBalls.length > 0) {
              isElement = this.checkIfElementExist(
                bingoTicketIndex,
                possibleArrayBallIndex
              );
            }
        
            if (!isElement) {
              possibleArrayBalls.push(randomBallIndex.blockNumber);
              possibleArrayBallIndex.push(bingoTicketIndex);
            }
          }
        }
      }
    }
    return possibleArrayBalls;
  }

  /** we are checking  wheather the element exist in the matched array or generated possibleList */
  checkIfElementExist(element, array) {
    let isExist = false;
    isExist = array.some(
      (currentELement, index) => currentELement == element
    );
    return isExist;
  }

  /**creating bingo pannel ui */
  bingoBallUi() {
    let isBingoBallSelected =  false;
    /** added backGroundBg*/
    this.uiElementsContainer = sceneScope.add.container(
      sceneScope.width / 2,
      sceneScope.height / 2
    );
    let backGroundBg = sceneScope.add.image(0, 0, "BingoBg").setInteractive();
    backGroundBg.displayWidth = sceneScope.width;
    backGroundBg.displayHeight = sceneScope.height;
    this.uiElementsContainer.add(backGroundBg);
    this.uiElementsContainer.setSize(
      backGroundBg.displayWidth,
      backGroundBg.displayHeight
    );

    /**adding golden strip  */
    let goldenBallStrip = sceneScope.add.image(
      backGroundBg.x,
      backGroundBg.y - backGroundBg.displayHeight / 2.5,
      "bingoAssets",
      "Bingo-Perfect-Daub-Box.png"
    );
    goldenBallStrip.setInteractive();
    this.uiElementsContainer.add(goldenBallStrip);

    let goldenStripText = sceneScope.add.text(
      goldenBallStrip.x,
      goldenBallStrip.y,
      "GOLDEN  BALL",
      {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS42,
        align: FONT_STYLES.ALIGN_CENTER,
      }
    );
    goldenStripText.setOrigin(0.5);
    goldenStripText.setTint(FONT_STYLES.WHITE_COLOR);
    // this.uiElements.add(goldenStripText);
    this.uiElementsContainer.add(goldenStripText);

    /** timer for the golden ballPannel*/
    let timerBg = sceneScope.add.sprite(
      goldenBallStrip.x,
      goldenBallStrip.y + goldenBallStrip.displayHeight * 1.8,
      "bingoAssets",
      "Powerup_Star_BG.png"
    );
    // this.uiElements.add(timerBg);
    this.uiElementsContainer.add(timerBg);

    this.timerText = sceneScope.add.text(
      timerBg.x,
      timerBg.y - 10,
      this.goldenTimer,
      {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS50,
        align: FONT_STYLES.ALIGN_CENTER,
      }
    );
    this.timerText.setOrigin(0.5);
    this.timerText.setTint(FONT_STYLES.WHITE_COLOR);
    //  this.uiElements.add(this.timerText);
    this.uiElementsContainer.add(this.timerText);

    let pannelBg = sceneScope.add.image(
      backGroundBg.x,
      backGroundBg.y + backGroundBg.displayHeight / 12,
      "BingoBoardBg"
    );
    // this.uiElements.add(pannelBg);
    this.uiElementsContainer.add(pannelBg);

    let selectBall = sceneScope.add.sprite(
      pannelBg.x,
      pannelBg.y - pannelBg.displayHeight / 2.4,
      "bingoAssets",
      "Bingo-Perfect-Daub-Box.png"
    );
    // this.uiElements.add(selectBall);
    this.uiElementsContainer.add(selectBall);

    let selectText = sceneScope.add.text(
      selectBall.x,
      selectBall.y,
      "SELECT ANY BALL",
      {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS30,
        align: FONT_STYLES.ALIGN_CENTER,
      }
    );
    selectText.setOrigin(0.5);
    selectText.setTint(FONT_STYLES.WHITE_COLOR);
    // this.uiElements.add(selectText);
    this.uiElementsContainer.add(selectText);

    let startPosition = {
      x: pannelBg.x - pannelBg.displayWidth / 4.7,
      y: pannelBg.y - pannelBg.displayHeight / 8,
    };

    this.poosibleBallsArrays.forEach((element, index) => {
      let imageFrame = "Ball_01.png";
      switch (element > 0) {
        case (element > 15 && element <= 30):
          imageFrame = "Ball_02.png";
          break;
        case (element > 30 && element <= 45):
          imageFrame = "Ball_03.png";
          break;
        case (element > 45 && element <= 60):
          imageFrame = "Ball_04.png";
          break;
        case (element > 60 && element <= 75):
          imageFrame = "Ball_05.png";
          break;
      }
   
  
      let ballUi = sceneScope.add.sprite(
        startPosition.x,
        startPosition.y,
        "bingoAssets",
        imageFrame
      );
      // this.uiElements.add(ballUi);
      this.uiElementsContainer.add(ballUi);
      ballUi.setInteractive();

      ballUi.on("pointerdown", () => {
        if(!isBingoBallSelected){
            isBingoBallSelected = true;
            this.getSelectedBallNo(ballUi.data.list.bingoNo);
            /** adding correct daub sfx */
            sceneScope.soundManager.playSfx(
              SFX_IDS.GOLDEN_POWER_UP_BALL,
              false,
              SFX_KEYS.GOLDEN_POWER_UP_BALL
            );
        }
      });

      let ballText = sceneScope.add.text(ballUi.x, ballUi.y + 5, element, {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS40,
        align: FONT_STYLES.ALIGN_CENTER,
      });
      ballUi.setData({ bingoNo: element });

      ballText.setOrigin(0.5);
      ballText.setTint(FONT_STYLES.BINGO_BALL_COLOR);
      // this.uiElements.add(ballText);
      this.uiElementsContainer.add(ballText);

      /**oddIndex change X-axis */
      if (index % 2 == 0) {
        startPosition.x = ballUi.x + ballUi.displayWidth * 1.25;
      } else {
        /**evenIndex change Y-axis */
        startPosition.y = ballUi.y + ballUi.displayHeight;
        startPosition.x = pannelBg.x - pannelBg.displayWidth / 5;
      }
    });

    this.runTimer();
  }

  runTimer() {
    this.timer = sceneScope.time.addEvent({
      delay: 1000,
      callback: () => {
        if(!parseInt(GameController.getInstance().getDecryptedValues(sceneScope.isGameOver))){
      
        this.goldenTimer -= 1;
        this.timerText.setText(this.goldenTimer);
        if (this.goldenTimer == 0) {
          this.getSelectedBallNo(null);
        }
      }
      },
      callbackScope: this,
      loop: true,
    });
    // this.timeEvent.paused = false;
  }

  getSelectedBallNo(value) {
    let selectedGoldenBall = value;
    if (selectedGoldenBall == null) {
      let random = Math.floor(Math.random() * this.poosibleBallsArrays.length);
      selectedGoldenBall = this.poosibleBallsArrays[random];
      GameController.getInstance().setIsGeneratingNew = 1;
    }

    GameController.getInstance().setGoldenBallData = selectedGoldenBall;
    this.timer.remove();
    this.goldenPannelScalingTween();
  }

  /** we are pausing the tweens of bingo ball */
  pauseTweens() {
    let displacement = 0;

    let noOfPowers = GameController.getInstance().getPowerUpCount;
    noOfPowers--;
    GameController.getInstance().setMaxPowerUpCount = noOfPowers;
    /**while pauseing the mainball  we are storing cirular peosess value and time as we need to resume that again */
    let timerData = {
      timerValue: 0,
      timerDutation: 0,
    };
  
    if(sceneScope.circularProgress != null){
       timerData.timerValue = sceneScope.circularProgress.getValue();
    }

    if (timerData.timerValue != 0) {
      timerData.timerDutation = sceneScope.timerHandler.ballTimerCounter;
      GameController.getInstance().setCurrentBallTime = sceneScope.timerHandler.ballTimerCounter;

    }
    GameController.getInstance().setResumeTimer = sceneScope.timerHandler.ballTimerCounter;

    if(sceneScope.circularProgress != null){
    GameController.getInstance().setResumeCircularProgressValue = sceneScope.circularProgress.getValue();
   
    sceneScope.circularProgress.setValue(0);
    }else{
      GameController.getInstance().setResumeCircularProgressValue = 0
    }

    GameController.getInstance().setPauseBallTimer = 1;

    if (
      GameController.getInstance().getPowerUpCount < CONSTATNTS.MAX_POWER_UPS
    ) {
      if (sceneScope.fullText != null) {
        sceneScope.fullText.destroy();
        sceneScope.fullText = null;
      }
    }

    if (sceneScope.ballTimerTween != undefined) {
      sceneScope.ballTimerTween.pause();
      
      if( sceneScope.circularProgress != null){
        sceneScope.circularProgress.setValue(0);
        sceneScope.circularProgress.setVisible(false);
      }
    }

    if (sceneScope.bingoBall.mainBallTween != null) {
        sceneScope.bingoBall.mainBallTween.stop();
        sceneScope.bingoBall.mainBallTween  = null
      
    }

    if (sceneScope.bingoBall.lastBallPlacement != null) {
      if (sceneScope.bingoBall.lastBallPlacement.isPlaying()) {
        sceneScope.bingoBall.lastBallPlacement.pause();
      }
    }

    if (sceneScope.bingoBall.ballMovementTween != null) {
      if (sceneScope.bingoBall.ballMovementTween.isPlaying()) {
        sceneScope.bingoBall.ballMovementTween.pause();
       displacement = sceneScope.firstBallPlacement - CONSTATNTS.GAP_BETWEEN_BALL;
       displacement = sceneScope.bingoBall.ballsOnUItoAnimate[sceneScope.bingoBall.ballsOnUItoAnimate.length -1].x - displacement;

      }
    }

    if (sceneScope.bingoBall.mainBingoball != null) {
      sceneScope.previousMainBingoBall = sceneScope.bingoBall.mainBingoball;
      sceneScope.bingoBall.mainBingoball.setVisible(false);
      sceneScope.bingoBall.mainBingoball.data.list.text.setVisible(false);
    }

    /**setVisible false all the bingo balls */
    if (sceneScope.bingoBall.ballsOnUItoAnimate.length > 0) {
      sceneScope.bingoBall.ballsOnUItoAnimate.forEach((element, index) => {
        element.setVisible(false);
        sceneScope.bingoBall.ballsOnUItoAnimate[
          index
        ].data.list.text.setVisible(false);
      });
    }

   
    sceneScope.scoreBg.setVisible(false);
    sceneScope.timerText.setVisible(false);
    sceneScope.scoreText.setVisible(false);
    sceneScope.timerBg.setVisible(false);
    sceneScope.duabBg.setVisible(false);
    sceneScope.powerUpTimerText.setVisible(false);
    GameController.getInstance().setDisplacement =  displacement;
  }


  /** we are resuming the tweens of bingo ball*/
  resumeTweens() {
    if(displacement > 0){
     sceneScope.ballsOnUItoAnimate.forEach((element)  => {
        element.x -= this.displacement
     })
    }else if(displacement < 0){
       element.x -= this.displacement
    }
    
  }
  /**
   * Tween for golden ball panel on selecting a golden ball or
   * time out to select a golden ball
   */
  goldenPannelScalingTween() {
    sceneScope.tweens.add({
      targets: this.uiElementsContainer,
      duration: 300,
      scale: 0,
      ease: "linear",
      onComplete: () => {
        this.uiElementsContainer.destroy(true);
        sceneScope.selectedGoldenBall(GameController.getInstance().getGoldenBallData);
      },
    });
  }
}
