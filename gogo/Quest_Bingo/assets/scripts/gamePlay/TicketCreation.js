import {
  CONSTATNTS,
  SCORE_TYPE,
  DUABSCORE,
  FONT_STYLES,
  TICKET,
  SFX_IDS,
  SFX_KEYS,
} from "../Constants.js";
import BingoTickets from "./BingTickets.js";
import GameController from "./GameController.js";


let sceneScope;
export default class TicketCreation extends Phaser.Physics.Arcade.Sprite {
  tickets = [];
  constructor(data) {
    sceneScope = data.scene;
    super(sceneScope, 0, 0, "");
  }
  /**
   * No. of Tickets to generate
   */
  init() {
    this.createNumberOfTickets()
  }

  /** * Create number of tickets */
  createNumberOfTickets() {
      this.tickets = []; /** we are pushing the instance of bingo tickes */
      // Instance of Ticket Creation
      /** will return tickets with nos and data */
      this.bingoTicketInstance = new BingoTickets({scene :  sceneScope});
      // this.bingoTicketInstance = new BingoTicket({ scene: sceneScope });
      this.bingoTicketInstance.init(5, 5, this);

      this.tickets.push(this.bingoTicketInstance);
  }


  /** * Gives TicketNumbers*/
  getTicketListRef() {
    return this.tickets;
  }

  /*** CalculatingScore */
  calculateScore(ticketBlock, tappedBlockInfo) {
    /**On star power up daubing any number on ticket */
    if (sceneScope.freeDaubCount > 0) {
      // changing the status and bingo pattern checking
      sceneScope.freeDaubCount--;
    
      this.changeTapStatusAndCheckForPattern(ticketBlock, tappedBlockInfo);
      let patternAnim = ticketBlock.data.list.freeDaubPattern;

      if (patternAnim != undefined) {
        if (patternAnim.anims.isPlaying) {
          patternAnim.setVisible(false);
          patternAnim.anims.pause();
        }
      }
      ticketBlock.setFrame("Bingo_YellowBingoBox.png");
      /** adding star daub sfx */
      sceneScope.soundManager.playSfx(
        SFX_IDS.STAR_POWER_UP_ABILITY_TAP,
        false,
        SFX_KEYS.STAR_POWER_UP_ABILITY_TAP
      );
      tappedBlockInfo.ticketNumberText.setVisible(false);
      let starBg = sceneScope.add.sprite(
        ticketBlock.x,
        ticketBlock.y,
        "bingoAssets",
        "Bingo-Star.png"
      );
      ticketBlock.data.list.isStarPowerUpDaub = true;
      // this.markedStatus.push("CORRECT_DAUB");
      let scoreType = SCORE_TYPE.CORRECT_DAUB;
    
      sceneScope.daubCount.correctDaubCount++;
      GameController.getInstance().setNoOfCorrectDaubs = sceneScope.daubCount.correctDaubCount;
      GameController.getInstance().setCorrectDaubScore = (sceneScope.daubCount.correctDaubCount*DUABSCORE.CorrectDaub);

      let totalScore = sceneScope.scoreValue(
        DUABSCORE.CorrectDaub,
        SCORE_TYPE.CORRECT_DAUB
      );

      sceneScope.updateScoreInfo( scoreType, DUABSCORE.CorrectDaub,tappedBlockInfo.blockIndex );
      
    }
    //check if daub nemuber is equal to main Ball number
    else if (
      GameController.getInstance().getTimerHandler.getRemainingBallTimer() &&
      sceneScope.bingoBall.mainBingoball.data.list.text._text ==
        tappedBlockInfo.blockNumber
    ) {
      ticketBlock.setFrame("Bingo_YellowBingoBox.png");
      /** adding correct daub sfx */
      sceneScope.soundManager.playSfx(
        SFX_IDS.CORRECT_DAUB,
        false,
        SFX_KEYS.CORRECT_DAUB
      );

      let scoreType = GameController.getInstance().getTimerHandler.getScoreTypeOnDaub();
      let totalScore = 0;

      if (scoreType == SCORE_TYPE.PERFECT_DAUB) {
        sceneScope.daubCount.perfectDaubCount++;
        GameController.getInstance().setNoOfPerfectDaubs = sceneScope.daubCount.perfectDaubCount;
        GameController.getInstance().setPerfectDaubScore = (sceneScope.daubCount.perfectDaubCount*DUABSCORE.PerfectDaub);

        totalScore = GameController.getInstance().getTimerHandler.getScoreOnDaub();
        sceneScope.updateScoreInfo(
          scoreType,
          DUABSCORE.PerfectDaub,
          tappedBlockInfo.blockIndex
        );
      } else if (scoreType == SCORE_TYPE.GOOD_DAUB) {

        sceneScope.daubCount.goodDaubCount++;
        GameController.getInstance().setNoOfGoodDaubs = sceneScope.daubCount.goodDaubCount;
        GameController.getInstance().setGoodDaubScore = (sceneScope.daubCount.goodDaubCount*DUABSCORE.GoodDaub);
        totalScore = GameController.getInstance().getTimerHandler.getScoreOnDaub();
        sceneScope.updateScoreInfo(
          scoreType,
          DUABSCORE.GoodDaub,
          tappedBlockInfo.blockIndex
        );
      } else {
        sceneScope.daubCount.correctDaubCount++;
        GameController.getInstance().setNoOfCorrectDaubs = sceneScope.daubCount.correctDaubCount;
        GameController.getInstance().setCorrectDaubScore = (sceneScope.daubCount.correctDaubCount*DUABSCORE.CorrectDaub);

        totalScore =
          GameController.getInstance().getTimerHandler.getScoreOnDaub();
        sceneScope.updateScoreInfo(
          scoreType,
          DUABSCORE.CorrectDaub,
          tappedBlockInfo.blockIndex
        );
      }
      this.changeTapStatusAndCheckForPattern(ticketBlock, tappedBlockInfo);
    
    }
    // check if the daub number is on UI sequence or already passed from queue
    //either way it is considered as correct daub
    else if (
      GameController.getInstance().getBingoBall.checkNumberStillInQueue(tappedBlockInfo.blockNumber) ||
      GameController.getInstance().getBingoBall.checkNumberIsPassed(tappedBlockInfo.blockNumber)
    ) {
      ticketBlock.setFrame("Bingo_YellowBingoBox.png");
      /** adding correct daub sfx */
      sceneScope.soundManager.playSfx(
        SFX_IDS.CORRECT_DAUB,
        false,
        SFX_KEYS.CORRECT_DAUB
      );

      let scoreType = SCORE_TYPE.CORRECT_DAUB;

      sceneScope.daubCount.correctDaubCount++;
      let totalScore = sceneScope.scoreValue(
        DUABSCORE.CorrectDaub,
        SCORE_TYPE.CORRECT_DAUB
      );

      sceneScope.updateScoreInfo(scoreType, DUABSCORE.CorrectDaub);
      this.changeTapStatusAndCheckForPattern(ticketBlock, tappedBlockInfo);

    } else {
      /**
       * if daubed num not in generated balls then it is considered as incorrect duab
       */
      sceneScope.soundManager.playSfx(
        SFX_IDS.WRONG_DAUB,
        false,
        SFX_KEYS.WRONG_DAUB
      );
      let totalScore = sceneScope.scoreValue(
        DUABSCORE.IncorrectDaub,
        SCORE_TYPE.INCORRECT_DAUB
      );

      let isScoreUpdated = sceneScope.updateScoreInfo(
        SCORE_TYPE.INCORRECT_DAUB,
        DUABSCORE.IncorrectDaub
      );
      //changing the frame of block when incorrect daub
      ticketBlock.setFrame(`RGlow.png`).setAlpha(0.4);
      ticketBlock.data.list.TicketBlockItem.ticketNumberText.setVisible(false);
      this.mainBallAnimationOnIncorrectDaub();
      this.changeFrameForIncorrectDaub(ticketBlock);
      this.changeTapStatus(false,ticketBlock);

    }
  }

  /*** changing the statu and checking for patterns*/
  changeTapStatusAndCheckForPattern(ticketBlock, tappedBlockInfo) {
    ticketBlock.data.list.status = TICKET.CORRECTDAUB;
    
    this.changeTapStatus(true, ticketBlock);

    if (GameController.getInstance().getIsGoldenBallExist == 1) {
       sceneScope.visibleBingoBall("tapStatus");
    } else {
      // debugger
      if (sceneScope.ballTimerTween != null) {
        // if (sceneScope.ballTimerTween.isPlaying()) {
        //   if( sceneScope.circularProgress != null){
        //      sceneScope.circularProgress.setValue(0);
        //   }
        //   sceneScope.ballTimerTween.remove();
        //   sceneScope.ballTimerTween = null;
        // }
      }
    }

    // this.numbersMarkedCorrect.push(tappedBlockInfo.blockNumber);
    // For checking the pattern is any Bingo pattern formed or not
    let patternFormation =
      this.tickets[tappedBlockInfo.ticketIndex].calculatePattern(
        tappedBlockInfo
      );

    // incrementing the daubed numbers count
    this.tickets[tappedBlockInfo.ticketIndex].incrementCountOfDaubbedNumber();

    // if (GameController.getInstance().getIsGoldenBallExist == 0) {
    //   sceneScope.timerHandler.ballTimerCounter = 0;
    //   GameController.getInstance().setCurrentBallTime = sceneScope.timerHandler.ballTimerCounter;
    //   GameController.getInstance().setPauseBallTimer = 0;
    // if(!GameController.getInstance().getIsCreatingNewBingoBall){
    //    sceneScope.timerHandler.showTimeUp(true,"tapStatus");
    // }
    // }
  }

  /**
   * Animation for incorrect duab
   */
  changeFrameForIncorrectDaub(incorrectTappedBlock) {
    if(GameController.getInstance().getIsGoldenBallExist == 1){
      sceneScope.timerHandler.ballTimerCounter = 0;
      GameController.getInstance().setCurrentBallTime = sceneScope.timerHandler.ballTimerCounter;
      sceneScope.timerHandler.showTimeUp(true,"CheckForPattern");
    }

    sceneScope.tweens.add({
      targets: incorrectTappedBlock,
      alpha: 1,
      duration: 200,
      ease: "linear",
      onComplete: () => {
        incorrectTappedBlock.setFrame("Bingo_NumberBox.png").setAlpha(1);
        incorrectTappedBlock.data.list.TicketBlockItem.ticketNumberText.setVisible(
          true
        );
        
        if(incorrectTappedBlock.data.list.TicketBlockItem.tapped){
          incorrectTappedBlock.setFrame("Bingo_YellowBingoBox.png").setAlpha(1);
      }
      },
    });
  }
  
  /**
   * Main ball animation on incorrect daub
   */
  mainBallAnimationOnIncorrectDaub() {
    let mainBall = null;
    mainBall = sceneScope.bingoBall.mainBingoball;
  let mainBallPosition = {
      x: sceneScope.width / 1.3 + sceneScope.width / 11,
      y: sceneScope.height / 4.3,
    };
    // Create the jiggle tween for main ball changing angle to left
    this.mainBallJiggleRightTween = sceneScope.tweens.add({
      targets: [mainBall, mainBall.data.list.text, sceneScope.circularProgress],
      angle: -30,
      yoyo: true,
      // repeat: -1,
      duration: 50,
      onComplete: () => {
        // Create the jiggle tween for main ball changing angle to right
        this.mainBallJiggleLeftTween = sceneScope.tweens.add({
          targets: [mainBall, mainBall.data.list.text, sceneScope.circularProgress],
          angle: 30,
          yoyo: true,
          // repeat: -1,
          duration: 50,
          onComplete: () => {
            // main ball changing angle to 0 after completion of tween
            if(sceneScope.circularProgress != null){
              sceneScope.circularProgress.angle = 0;
              mainBall.data.list.text.angle = 0;
              mainBall.angle = 0;
            }
          },
        });
      },
    });
  }

  /**
   * Changing the status of the block
   * @param {* tapped status} status
   * @param {* is Golden Number Power up} isGoldenNumber
   * @param {* is Star Number power up} isStarNumber
   * @param {* is in isComboPattern} isComboPattern
   * @param {* is in animation} isComboAnim
   */
  changeTapStatus(status,ticketBlock) {
    ticketBlock.data.list.TicketBlockItem.tapped = status;
    if (status) {
      ticketBlock.data.list.TicketBlockItem.ticketNumberText.setTint(FONT_STYLES.CORRECT_DAUB_COLOR);
    } else {
      ticketBlock.data.list.TicketBlockItem.ticketNumberText.setTint(FONT_STYLES.BINGO_FONTS_COLOR);
    }
  }
}
