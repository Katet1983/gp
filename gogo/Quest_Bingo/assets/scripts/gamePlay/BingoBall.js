import {
  CONSTATNTS,
  SCORE_TYPE,
  FONT_STYLES,
  SFX_IDS,
  SFX_KEYS,
  BALL_SFX_IDS,
  BALL_SFX_KEYS,
} from "../Constants.js";
import GameController from "./GameController.js";
import TicketCreation from "./TicketCreation.js";

let sceneScope;
export default class BingoBall extends Phaser.Physics.Arcade.Sprite {
  minVal = 0; // minimum value to generate bingo balls
  maxVal = 0; // maximum value till which number to generate bingo balls
  totalBallNumberOnUI; // numbers of balls on the UI ie. max 5 balls
  ticketNumberList; // all numbers on ticket are stored
  nonTicketNumberList; // numbers which are not on ticket are stored
  totalPercentageElements = 0; // how much % of balls should be genrated in game
  shuffledBalls; // all 75 shuffled balls
  gameManager; // gameManager instance
  ballsOnUItoAnimate = []; // ball gameobjects that on UI
  generatedBalls = []; // storing all generated bingo balls
  mainBingoball = null;
  ballSound = null;
  ballUiList = [];

  constructor(data) {
    sceneScope = data.scene;
    super(sceneScope, 0, 0, "");
  }
  /**
   * Loading min max bingo ball range from gameplay
   * @param {GamePlay Scene} manager
   */
  init(manager) {
    // sceneScope = manager;
    this.minVal = CONSTATNTS.MIN_BINGO_NO; // Min range to generate bingo ball is taken from GamePlay
    this.maxVal = CONSTATNTS.MAX_BINGO_NO; // Max range to generate bingo ball is taken from GamePlay
  }
  /**
   * Initializing all the values to null
   * UI of 4 balls in queue is added
   */
  initializeToDefaultVal() {
     // Numbers that are present on ticket
    this.shuffledBalls = [];
    this.ticketNumberList = sceneScope.ticketCreation.bingoTicketInstance.blockNumberQueue
    this.nonTicketNumberList = this.getNonTicketsNumbersList(); // numbers that are not present on ticket
    this.getPercentageBalls();
  }


  getPercentageBalls(){
    let ballList = [];
    let remainingBalls = [];
    let totalBallCount = Math.ceil(CONSTATNTS.GAMETIMER/3);
    if(totalBallCount > 75){
      totalBallCount = 75;
     }

    let maxBingoBallsCount = Math.floor(CONSTATNTS.BALL_PRIORITY *(totalBallCount)/100);
    let NonBingoBallsCount = totalBallCount -  maxBingoBallsCount;
    
    this.ticketNumberList =  this.shuffle(this.ticketNumberList);
    this.nonTicketNumberList = this.shuffle(this.nonTicketNumberList);
     
    if(maxBingoBallsCount > this.ticketNumberList.length){
      maxBingoBallsCount =  this.ticketNumberList.length;
    }
  
    if(maxBingoBallsCount ==  this.ticketNumberList.length){
        ballList = [...this.ticketNumberList];
    }else{
      while(ballList.length < maxBingoBallsCount){
        let randomIndex =  Math.floor(Math.random()*(this.ticketNumberList.length-1));
        if(ballList.length > 0){
          if(!ballList.includes(this.ticketNumberList[randomIndex])){
            ballList.push(this.ticketNumberList[randomIndex])
          }
        }else{
          ballList.push(this.ticketNumberList[randomIndex])
        }
      };
      remainingBalls =  [...this.getUniqueBingoBalls(ballList, this.ticketNumberList)];
    }
    
    this.shuffledBalls = [...this.prioritizeNumbersBasedOnPercentage(ballList,totalBallCount)];
    
    let noOfNonTicket = Math.floor(this.nonTicketNumberList.length*(30/100));

    remainingBalls = [...remainingBalls,...this.nonTicketNumberList.splice(0,noOfNonTicket)];
    let shuffledRemainingBalls = this.shuffle(remainingBalls);
    this.shuffledBalls = [...this.shuffledBalls,...shuffledRemainingBalls,...this.nonTicketNumberList];
    // this.shuffledBalls.push(shuffledRemainingBalls);
  }

  getUniqueBingoBalls(ballList,ticketNumbers){
    let remainingBalls  = [];

    ticketNumbers.forEach((element,index) => {
      if(!ballList.includes(element)){
        remainingBalls.push(element);
      }
    })
     
    return remainingBalls;
  }

  /**
   * Numbers that are not on the ticket
   */
  getNonTicketsNumbersList() {
    this.nonTicketNumberList = [];
    for (let i = this.minVal; i < this.maxVal; i++) {
      if (
        !this.nonTicketNumberList.includes(i) &&
        !this.ticketNumberList.includes(i)
      ) {
        // numbers that are not in the ticketNumbersList i.e, not present on the ticket
        this.nonTicketNumberList.push(i);
      }
    }
    return this.nonTicketNumberList;
  }
  /**
   * Shuffling the balls
   */
  shuffle(shuffleList) {
    // shuffling the balls by generating random index like
    // for 1 index we get random index 35
    // index 1 is shuffled with 35 index
    for (let i = 0; i < shuffleList.length; i++) {
      let temp = shuffleList[i];
      let randomIndex = Phaser.Math.Between(i, shuffleList.length - 1);

      shuffleList[i] = shuffleList[randomIndex];
      shuffleList[randomIndex] = temp;
    }

    return shuffleList;
  }

  // /**
  //  * prioritizing the ball generation
  //  * @param {shuffled balls list} ballsList
  //  * @param {*ticket numbersCount} ticketNumbersCount
  //  * @returns
  //  */

  prioritizeNumbersBasedOnPercentage(ballList,totalBallCount){
    let shuffledBallList = [];
    let firstHalfLength = Math.floor((totalBallCount*(50))/100);
  
    if(shuffledBallList.length < firstHalfLength){
       let tickNo =  Math.floor((firstHalfLength*(30))/100);
       let nonticketNo =  firstHalfLength - tickNo;
       let comboBalls = [...ballList.splice(0,tickNo),...this.nonTicketNumberList.splice(0,nonticketNo)];
       shuffledBallList = [...this.shuffle(comboBalls)];
    }

      let tickNo =  ballList.length;
      let nonticketNo =  firstHalfLength - tickNo;
      let comboBalls = [...ballList.splice(0,tickNo),...this.nonTicketNumberList.splice(0,nonticketNo)];
      shuffledBallList =  [...shuffledBallList,...this.shuffle(comboBalls)];
    
    // shuffledBallList = [...this.ticketNumberList];
    return shuffledBallList;
     
  }


  /**
   * Generating BingoBall
   * @returns
   */
  generateBingoBallNumber(arg) {
    if (GameController.getInstance().getPauseBallTimer && sceneScope.freeDaubCount == 0 ) {
      return true;
    }

    let mainBallNumber = 0;
    do {
      // first ball is taken from shuffled balls
      if (this.shuffledBalls.length > 0) {
        let index = 0;
        mainBallNumber = this.shuffledBalls[index];
        this.shuffledBalls.shift(index);
      }
      // if balls are completed then the game over
      else {
        console.log("*****GAME OVER *****");
        sceneScope.isGameOver = GameController.getInstance().getEncryptedValue(1);
        return;
      }
    } while (this.generatedBalls.includes(mainBallNumber));

    if (this.mainBingoball == null) {
      this.createMainBall(mainBallNumber, 0, "initial");
    } else {
      if (!GameController.getInstance().getIsGoldenBallExist) {
        this.animateBalls(mainBallNumber);
      }
    }
  }

  // /**
  //  * removing elements that are not present on UI from UI queue
  //  */
  removeBingoBall() {
    // removing the ball gameobject from list when it is more than five
    if (this.ballsOnUItoAnimate.length >= 4) {
      let ballThatexceedUI = this.ballsOnUItoAnimate.shift();
      ballThatexceedUI.data.list.text.destroy();
      ballThatexceedUI.destroy();
    } else {
      return;
    }
  }

  /*
   * Checking whether number is in still queue when duabed a number
   * @param {*} num is daubed number
   */
  checkNumberStillInQueue(num) {
    return this.ballUiList.includes(num);
  }
  /**
   * whether calling bingo ball is passed from queue or not
   * @param {*} num is daubed number
   * @returns
   */
  checkNumberIsPassed(num) {
    if (this.generatedBalls.length > 0) {
      return this.generatedBalls.includes(num);
    }
  }

  /**
   * Animating the balls on the top with negative x
   * @param {Main Ball number} mainBallNumber
   */
  animateBalls(mainBallNumber) {
    let animateArray = [];
    // for gap between two balls on UI
    if (
      !parseInt(
        GameController.getInstance().getDecryptedValues(sceneScope.isGameOver)
      )
    ) {
      let ballWidth = sceneScope.add
        .sprite(0, 0, "bingoAssets", "Ball_01.png")
        .setScale(0.63)
        .setVisible(false).displayWidth;
      /**animate ball movement */
      if (this.ballsOnUItoAnimate.length > 0) {
        this.ballMovementDisplayWidth = CONSTATNTS.GAP_BETWEEN_BALL;
        this.ballMovementTween = sceneScope.tweens.add({
          targets: this.ballsOnUItoAnimate,
          x: `-=${this.ballMovementDisplayWidth}`,
          ease: "Linear",
          duration: 50,
          onStart: () => {
            if (sceneScope.ticketCreation.mainBallJiggleLeftTween != null) {
              sceneScope.ticketCreation.mainBallJiggleLeftTween.remove();
              sceneScope.ticketCreation.mainBallJiggleLeftTween = null;
            }
            if (sceneScope.ticketCreation.mainBallJigglerightTween != null) {
              sceneScope.ticketCreation.mainBallJigglerightTween.stop();
              sceneScope.ticketCreation.mainBallJigglerightTween = null;
            }
            if (this.ballsOnUItoAnimate.length == 4) {
              this.ballsOnUItoAnimate[0].data.list.text.setVisible(false);
              this.ballsOnUItoAnimate[0].setVisible(false);
            }
          },
          onUpdate: (tween, target) => {
            target.data.list.text.x = target.x;
            target.data.list.text.y = target.y;
            // this.ballMovementDisplayWidth =  target.displayWidth;
            if (!target.data.list.isScaleDown) {
              this.ballMovementDisplayWidth = CONSTATNTS.FIRST_BALL_GAP;
            }
          },
          onComplete: (tween, target) => {
            this.ballMovementDisplayWidth = CONSTATNTS.FIRST_BALL_GAP;
            this.lastBallSpacing(mainBallNumber);
          },
        });
      } else {
        this.ballMovementDisplayWidth = CONSTATNTS.FIRST_BALL_GAP;
        this.lastBallSpacing(mainBallNumber);
      }
    }
  }

  lastBallSpacing(mainBallNumber) {
    let X_Axis = this.mainBingoball.x - sceneScope.firstBallPlacement;
    let count = 0;
    let isUpdated = false;
    this.lastBallPlacement = sceneScope.tweens.add({
      targets: this.mainBingoball,
      x: `-=${X_Axis}`,
      y: `+=${12}`,
      duration: 5,
      onStart: () => {
        if (this.ballsOnUItoAnimate.length != 0) {
          if (this.ballMovementTween != null) {
            this.ballMovementTween.remove();
            this.ballMovementTween = null;
          }
        }
        this.removeBingoBall();
        GameController.getInstance().setIsGeneratingNew = 1;
        if (!this.mainBingoball.data.list.isScaleDown) {
          let frame = this.mainBingoball.frame.name.split(".")[0] + `_s.png`;
          this.mainBingoball.setFrame(frame);
        }

        this.mainBingoball.data.list.isScaleDown = true;
      },
      onUpdate: () => {
        this.mainBingoball.data.list.text.x = this.mainBingoball.x;
        this.mainBingoball.data.list.text.y =
          this.mainBingoball.y + this.mainBingoball.displayHeight / 8;
        this.mainBingoball.data.list.text.setFontSize(FONT_STYLES.FS30);
        if (this.mainBingoball.data.list.isScaleDown && !isUpdated) {
          isUpdated = true;
          if (
            !parseInt(
              GameController.getInstance().getDecryptedValues(
                sceneScope.isGameOver
              )
            )
          ) {
            // setting timer on in timerHandler to start ball timer for every genrating ball
            sceneScope.timerHandler.setTimerON(true, 0, "lastBallSpacing");
            this.mainBingoball.setAngle(0);
            this.mainBingoball.data.list.text.setAngle(0);
            this.createMainBall(mainBallNumber, 0, "createBall");
          }
        }
      },
    });
  }
  /**
   * creating main tambola ball
   * @param {ball number} mainBallNumber
   */
  createMainBall(mainBallNumber, isGoldenBall, functionName) {
    if (GameController.getInstance().getIsGoldenBallExist && !isGoldenBall) {
      return;
    }

    // main bingo ball is created
    let startPosition = {
      x: sceneScope.width / 1.3,
      y: sceneScope.height / 4.3,
    };

    //  GameController.getInstance().setIsGoldenBallExist = isGoldenBall;
    if (isGoldenBall) {
      startPosition.x = sceneScope.width / 2;
    }

    // setting the ball sprite according to the ball number
    // if (mainBallNumber >= 1 && mainBallNumber <= 15) {
    let ballFrame = "Ball_01_gameplay.png";
    if (mainBallNumber > 15 && mainBallNumber <= 30) {
      ballFrame = "Ball_02_gameplay.png";
    } else if (mainBallNumber > 30 && mainBallNumber <= 45) {
      ballFrame = "Ball_03_gameplay.png";
    } else if (mainBallNumber > 45 && mainBallNumber <= 60) {
      ballFrame = "Ball_04_gameplay.png";
    } else if (mainBallNumber > 60 && mainBallNumber <= 75) {
      ballFrame = "Ball_05_gameplay.png";
    }
    if (this.mainBingoball != null) {
      if (
        this.mainBingoball.data.list.isScaleDown &&
        !GameController.getInstance().getIsGoldenBallExist
      ) {
        this.ballsOnUItoAnimate.push(this.mainBingoball);
      }
    }
    this.mainBingoball = sceneScope.add
      .sprite(startPosition.x, startPosition.y, "bingoAssets", ballFrame)
      .setScale(0.4)
      .setVisible(false);

    sceneScope.bingoBallTimer(startPosition, 0, CONSTATNTS.BALL_TIMER);
    // adding number text to the ball
    let ballText = sceneScope.add
      .text(this.mainBingoball.x, this.mainBingoball.y, mainBallNumber, {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS40,
        align: FONT_STYLES.ALIGN_CENTER,
      })
      .setOrigin(0.5)
      .setTint(FONT_STYLES.BINGO_BALL_COLOR)
      .setVisible(false);
    this.mainBingoball.setData({
      text: ballText,
      isScaleDown: false,
      ballNo: mainBallNumber,
    });

    if (this.ballsOnUItoAnimate.length > 1) {
      if (!isGoldenBall) {
        if (this.lastBallPlacement != null) {
          this.lastBallPlacement.remove();
          this.lastBallPlacement = null;
        }
      }
    }

    // adding ball object to the arrays for animation
    //  this.totalBallNumberOnUI.push(this.mainBingoball);
    let X_Axis = sceneScope.mainBallPlacement - this.mainBingoball.x;
    if (GameController.getInstance().getIsGoldenBallExist) {
      X_Axis = 0;
    }
    this.generatedBalls.push(mainBallNumber);

    this.mainBallTween = sceneScope.tweens.add({
      targets: [this.mainBingoball],
      duration: 80,
      scale: 1,
      x: `+= ${X_Axis}`,
      delay: 30,
      onStart: () => {
        this.ballUiList.push(mainBallNumber);
        GameController.getInstance().setIsGeneratingNew = 1;
        if (
          sceneScope.freeDaubCount == 0 &&
          !GameController.getInstance().getIsStarActive
        ) {
          GameController.getInstance().setIsGeneratingNew = 1;
          sceneScope.timerHandler.ballTimerCounter = 0;
          GameController.getInstance().setCurrentBallTime =
            sceneScope.timerHandler.ballTimerCounter;

          this.mainBingoball.setVisible(true);
          this.mainBingoball.data.list.text.setVisible(true);
          // adding main ball number to generated list that contains all the genrated numbers
          this.mainBingoball.setVisible(true);
          if (!GameController.getInstance().isGoldenBallExist) {
            GameController.getInstance().setPauseBallTimer = 0;
          }

          sceneScope.soundManager.playSfx(
            SFX_IDS.NEW_BALL_GENERATION,
            false,
            SFX_KEYS.NEW_BALL_GENERATION
          );
        } else if (
          GameController.getInstance().getIsStarActive &&
          sceneScope.freeDaubCount == 0
        ) {
          sceneScope.timerHandler.destroyStarTimer();
        } else {
          sceneScope.timerHandler.ballTimerCounter = 0;
          GameController.getInstance().setCurrentBallTime =
            sceneScope.timerHandler.ballTimerCounter;
          if (GameController.getInstance().getIsGoldenBallExist) {
            this.mainBingoball.setVisible(true);
            this.mainBingoball.data.list.text.setVisible(true);
          }
          // GameController.getInstance().setPauseBallTimer = 1;
        }
      },
      onUpdate: () => {
        if (
          sceneScope.freeDaubCount == 0 ||
          (sceneScope.freeDaubCount > 0 &&
            GameController.getInstance().getIsGoldenBallExist)
        ) {
          this.mainBingoball.data.list.text.x = this.mainBingoball.x;
          this.mainBingoball.data.list.text.setFontSize(FONT_STYLES.FS38);
          if (sceneScope.circularProgress != null) {
            sceneScope.circularProgress.x = this.mainBingoball.x;
            sceneScope.circularProgress.setVisible(true);
            sceneScope.circularProgress.setRadius(
              this.mainBingoball.displayWidth / 1.75
            );
          }
        }
      },
      onComplete: () => {
        GameController.getInstance().setIsGeneratingNew = 0;
        GameController.getInstance().setIsCreatingNewBingoBall = 0;
        GameController.getInstance().setPauseBallTimer = 0;
      },
    });
    let string = `sound_${mainBallNumber}`;

    if (sceneScope.freeDaubCount == 0) {
      if (this.ballSound != null && this.ballSound.isPlaying) {
        this.ballSound.isPlaying = false;
      }
      this.ballSound = sceneScope.soundManager.ballsSfxList[mainBallNumber - 1];
      sceneScope.soundManager.playBallSfx(mainBallNumber - 1, string);
    }
  }
}
