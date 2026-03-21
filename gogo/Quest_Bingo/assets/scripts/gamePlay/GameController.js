import { CONSTATNTS, SCORE_TYPE } from "../Constants.js";
import TicketCreation from "./TicketCreation.js";
import TimerHandler from "./TimerHandler.js";
import BingoBall from "./BingoBall.js";

export default class GameController {
  /**
   * Ticket creation class has the number of tickets created
   *with their instances and calucating the score on duabing  */
  ticketCreation; //  holds the instance of ticket creation
  /**
   * Timer handler class has the game time calculation and warnimg timer and also
   * ball Timer calculation for each generated bingp ball
   */
  timerHandler; //  holds the instance of timer handler
  /**
   * Bingo ball class generates the bingo ball,
   * holds the generated balls data and percentage of balls generation
   * data of balls on the UI
   */
  bingoBall; //  holds the instance of bingo ball
  Instance; //  holds the instance of gameController
  patterns; //  holds the blocks that formed bingo pattern
  currentScore = null; //  holds the current score of the gameplay
  currentGameTime = null; //  holds the current time of the gameplay

  bingoScore = null; // holds the bingos score in game
  comboScore = null; // holds the combos of bingo score in game
  bingoNumber = null; // holds the no.of bingos happened in game
  bingoNumberScore = null;
  penaltyScore = null; // holds the penalties score in the game
  twoXBonusScore = null;
  remainingUndaubbedNumbers = [];
  isBallTimerPaused = null;
  selectedGoldenBall = null; // we are storing the golden ball no from the golden pannel
  isGoldenBallExist = false;
  maxNoOfPowers = null; //will count the maxPowersUps in stack
  resumeTime = {};
  isPowerUpActive = false;
  generateNew = null;
  isStarUp = null;
  encryptPlugin = null;
  passWord = null;
  perfectDaubCount = null;
  perfectDaubScore = null;
  goodDaubCount = null;
  goodDaubScore = null;
  correctDaubCount = null;
  correctDaubScore = null;
  fullHouseScore = null;
  currentBallTime = null;
  circularProgressValue =  null;
  displacemnet = 0;
  // resumeStatus = null;

  constructor() {

    // defining variables in constructor
        /**
     * Ticket creation class has the number of tickets created
     *with their instances and calucating the score on duabing  */
    this.ticketCreation; //  holds the instance of ticket creation
    /**
     * Timer handler class has the game time calculation and warnimg timer and also
     * ball Timer calculation for each generated bingp ball
     */
    this.timerHandler; //  holds the instance of timer handler
    /**
     * Bingo ball class generates the bingo ball,
     * holds the generated balls data and percentage of balls generation
     * data of balls on the UI
     */
    this.bingoBall; //  holds the instance of bingo ball
    this.Instance; //  holds the instance of gameController
    this.patterns; //  holds the blocks that formed bingo pattern
    this.currentScore = null; //  holds the current score of the gameplay
    this.currentGameTime = null; //  holds the current time of the gameplay
  
    this.bingoScore = null; // holds the bingos score in game
    this.comboScore = null; // holds the combos of bingo score in game
    this.bingoNumber = null; // holds the no.of bingos happened in game
    this.bingoNumberScore = null;
    this.penaltyScore = null; // holds the penalties score in the game
    this.twoXBonusScore = null;
    this.remainingUndaubbedNumbers = [];
    this.isBallTimerPaused = null;
    this.selectedGoldenBall = null; // we are storing the golden ball no from the golden pannel
    this.isGoldenBallExist = false;
    this.maxNoOfPowers = null; //will count the maxPowersUps in stack
    this.resumeTime = {};
    this.isPowerUpActive = false;
    this.generateNew = null;
    this.isStarUp = null;
    this.encryptPlugin = null;
    this.passWord = null;
    this.perfectDaubCount = null;
    this.perfectDaubScore = null;
    this.goodDaubCount = null;
    this.goodDaubScore = null;
    this.correctDaubCount = null;
    this.correctDaubScore = null;
    this.fullHouseScore = null;
    this.currentBallTime = null;
    this.circularProgressValue =  null;
    this.displacemnet = 0;
    // resumeStatus = null;
    }
  /**
   * Creating the instance of the GameController
   * @returns Instance of the GameController
   */
  static getInstance() {
    if (GameController.Instance == null) {
      GameController.Instance = new GameController();
    }
    return GameController.Instance;
  }

  /**setting plugin to encrypt data*/
  set setEncryptData(value) {
    this.encryptPlugin = { ...value };
  }

  get getEncrptData() {
    return this.encryptPlugin;
  }

  /**setting password to encrypt data*/
  set setPassWord(value) {
    this.passWord = value;
  }

  get getPassWord() {
    return this.passWord;
  }

  /**To encrypt data we will pass value */
  getEncryptedValue(value) {
    // return this.encryptPlugin.pluginManager.plugins[2].plugin.Encrypt(
    //   value,
    //   this.passWord
    // );
    return value;
  }

  /**To decrypt data we will need to pass key */
  getDecryptedValues(data) {
    // return this.encryptPlugin.pluginManager.plugins[2].plugin.Decrypt(
    //   data,
    //   this.passWord
    // );
    return data;
  }

  /** setting the instance of the ticket creation */
  set setTicketCreation(sceneScope) {
    this.ticketCreation = new TicketCreation({ scene: sceneScope });
  }
  /**getting ticket creation instance */
  get getTicketCreation() {
    return this.ticketCreation;
  }

  /** setting the instance of the bingo ball */
  set setBingoBall(sceneScope) {
    this.bingoBall = new BingoBall({ scene: sceneScope });
  }
  /**getting bingo ball instance */
  get getBingoBall() {
    return this.bingoBall;
  }

  /** setting the instance of the timer handler */
  set setTimerHandler(sceneScope) {
    this.timerHandler = new TimerHandler({ scene: sceneScope });
  }
  /**getting Timer handler instance */
  get getTimerHandler() {
    return this.timerHandler;
  }

  /** setting current time of game */
  set setCurrentGameTime(currentTime) {
    // this.currentGameTime = currentTime;
    if (this.currentGameTime === null) {
     this.currentGameTime = this.getEncryptedValue(0);
    }
    this.currentGameTime = this.getEncryptedValue(currentTime);
  }
  get getCurrentGameTime() {
    return parseInt(this.getDecryptedValues(this.currentGameTime));
  }

   /** setting current time of ball */
   set setCurrentBallTime(currentBallTime) {
    // this.currentGameTime = currentTime;
    if (this.currentBallTime === null) {
     this.currentBallTime = this.getEncryptedValue(0);
    }
    this.currentBallTime = this.getEncryptedValue(currentBallTime);
   }
  
    get getCurrentBallTime() {
      return parseInt(this.getDecryptedValues(this.currentBallTime));
    }


  /**set bingoPatterns */
  set setBingoPatterns(data) {
    this.patterns = [];
    this.patterns = [...data];
  }
  get getBingoPatterns() {
    return this.patterns;
  }

  /** setting the score on duabing */
  set setCurrentScore(scoreValue) {
    if (GameController.getInstance().currentScore === null) {
      GameController.getInstance().currentScore = this.getEncryptedValue(0);
    }
    GameController.getInstance().currentScore = this.getEncryptedValue(scoreValue);
  }

  /** getting the current score to display */
  get getCurrentScore() {
    return parseInt(this.getDecryptedValues(GameController.getInstance().currentScore));
  }

  /**
   * setting score for the bingos made in Gameplay
   */
  set setBingoScore(bingoScoreValue) {
    if (this.bingoScore === null) {
      this.bingoScore = this.getEncryptedValue(0);
    }
    this.bingoScore = this.getEncryptedValue(
      parseInt(this.getDecryptedValues(this.bingoScore)) + bingoScoreValue
    );
  }
  /**
   * getting the score for bingos
   */
  get getBingoScore() {
    return parseInt(this.getDecryptedValues(this.bingoScore));
  }
  /**
   * setting score for combo bingos in gameplay
   */
  set setComboScore(comboScoreValue) {
    if (this.comboScore === null) {
      this.comboScore = this.getEncryptedValue(0);
    }
    this.comboScore = this.getEncryptedValue(
      parseInt(this.getDecryptedValues(this.comboScore))+ comboScoreValue
    );
  }
  
  /**
   * getting the score for combo bingos
   */
  get getComboScore() {
    return parseInt(this.getDecryptedValues(this.comboScore));
  }

  /**
   * setting score for penalty Score in gameplay
   */
  set setPenaltyScore(scoreValue) {
    if (this.penaltyScore === null) {
      this.penaltyScore = this.getEncryptedValue(0);
    }

    let x =  parseInt(this.getDecryptedValues(this.penaltyScore));
    x += scoreValue;
    this.penaltyScore = this.getEncryptedValue(parseInt(this.getDecryptedValues(this.penaltyScore))+ (scoreValue));
   
  }

  /**
   * getting the penaltyScore
   */
  get getPenaltyScore() {
    return parseInt(this.getDecryptedValues(this.penaltyScore));
  }

  /*** setting score for 2XBonus Score in gameplay*/
  set setBonusScore(scoreValue) {
    // this.twoXBonusScore += scoreValue;
    if (this.twoXBonusScore === null) {
      this.twoXBonusScore = this.getEncryptedValue(0);
    }
    this.twoXBonusScore = this.getEncryptedValue(
      parseInt(this.getDecryptedValues(this.twoXBonusScore)) + scoreValue
    );
  }
  /**
   * getting the 2XBonusScore
   */
  get getBonusScore() {
    return parseInt(this.getDecryptedValues(this.twoXBonusScore));
  }

  /**
   *setting no.of bingos done in game
   */
  set setBingoNumber(noOfBingos) {
    if (this.bingoNumber === null) {
      this.bingoNumber = this.getEncryptedValue(0);
    }
    this.bingoNumber = this.getEncryptedValue(
      parseInt(this.getDecryptedValues(this.bingoNumber)) + noOfBingos
    );
  }

  /**
   * getting no.of bingos
   */
  get getBingoNumber() {
    return parseInt(this.getDecryptedValues(this.bingoNumber));
  }

  /**pause the ball Timer */
  set setPauseBallTimer(isPauseBallTimer) {
    if (this.isBallTimerPaused === null) {
      this.isBallTimerPaused = this.getEncryptedValue(0);
    }
    this.isBallTimerPaused = this.getEncryptedValue(
      parseInt(isPauseBallTimer)
    );
    // this.isBallTimerPaused = data;

  }

  get getPauseBallTimer() {
    // return this.isBallTimerPaused;
    return parseInt(this.getDecryptedValues(this.isBallTimerPaused));
  }

  /**setting golden Ball Data */
  set setGoldenBallData(data) {
    // this.selectedGoldenBall = data;
    if (this.selectedGoldenBall === null) {
      this.selectedGoldenBall = this.getEncryptedValue(0);
    }

    this.selectedGoldenBall = this.getEncryptedValue(parseInt(data));
  }

  get getGoldenBallData() {
    return parseInt(this.getDecryptedValues(this.selectedGoldenBall));
  }

  /**set  the golden Ball */
  set setIsGoldenBallExist(data) {
    if (this.isGoldenBallExist === null) {
      this.isGoldenBallExist = this.getEncryptedValue(0);
    }
    this.isGoldenBallExist = this.getEncryptedValue(
      parseInt(data)
    );
    // this.isGoldenBallExist = data;
  }

  get getIsGoldenBallExist() {
    return parseInt(this.getDecryptedValues(this.isGoldenBallExist));

    // return this.isGoldenBallExist;
  }

  /**keep count of powerUps */
  set setMaxPowerUpCount(data) {
    if (this.maxNoOfPowers === null) {
      this.maxNoOfPowers = this.getEncryptedValue(0);
    }

    this.maxNoOfPowers = this.getEncryptedValue(parseInt(data));
    // this.maxNoOfPowers = data;
  }

  get getPowerUpCount() {
    return parseInt(this.getDecryptedValues(this.maxNoOfPowers));
  }

  /**storing timer data to resume */
  set setResumeTimer(data) {
     if (this.resumeTime === null) {
      this.resumeTime = this.getEncryptedValue(0);
    }

    this.resumeTime = this.getEncryptedValue(parseInt(data));
  }

  get getResumeTimer() {
    return parseInt(this.getDecryptedValues(this.resumeTime));
  }

  /**storing timer data to resume */
  set setResumeCircularProgressValue(data) {
    
    if (this.circularProgressValue === null) {
      this.circularProgressValue = this.getEncryptedValue(0);
    }
    data =  data*100;
    this.circularProgressValue = this.getEncryptedValue(parseInt(data));
  }

  get getResumeCircularProgressValue() {
  
    return parseInt(this.getDecryptedValues(this.circularProgressValue));
  }
  

  set setIsGeneratingNew(data) {
    if (this.generateNew === null) {
          this.generateNew = this.getEncryptedValue(0);
        }
        this.generateNew = this.getEncryptedValue(
          parseInt(data)
        );
        // this.isPowerUpActive = data;
 
  }

  get getIsGeneratingNew() {
     return parseInt(this.getDecryptedValues(this.generateNew));
  }

  set setIsStarActive(data) {
    if (this.isStarUp === null) {
      this.isStarUp = this.getEncryptedValue(0);
    }
    this.isStarUp = this.getEncryptedValue(
      parseInt(data)
    );
  }

  get getIsStarActive() {
    return parseInt(this.getDecryptedValues(this.isStarUp));
  }

  /** setting no of perfect daubs and score of perfect daubs in gamePlay*/
  set setNoOfPerfectDaubs(daub) {
    if (this.perfectDaubCount === null) {
      this.perfectDaubCount = this.getEncryptedValue(0);
    }

    this.perfectDaubCount = this.getEncryptedValue(parseInt(daub));
  }

  get getNoOfPerfectDaubs() {
    return parseInt(this.getDecryptedValues(this.perfectDaubCount));
  }

  /** Perfect Daub Score */
  set setPerfectDaubScore(daubScore) {
    if (this.perfectDaubScore === null) {
      this.perfectDaubScore = this.getEncryptedValue(0);
    }
    this.perfectDaubScore = this.getEncryptedValue(parseInt(daubScore));
  }

  get getPerfectDaubScore() {
    return parseInt(this.getDecryptedValues(this.perfectDaubScore));
  }

  /**Good Daubs Count and Score */
  set setNoOfGoodDaubs(daub) {
    if (this.goodDaubCount === null) {
      this.goodDaubCount = this.getEncryptedValue(0);
    }

    this.goodDaubCount = this.getEncryptedValue(parseInt(daub));
  }
  get getNoOfGoodDaubs() {
    return parseInt(this.getDecryptedValues(this.goodDaubCount));
  }

  /** Good Daub Score */
  set setGoodDaubScore(daubScore) {
    if (this.goodDaubScore === null) {
      this.goodDaubScore = this.getEncryptedValue(0);
    }
    this.goodDaubScore = this.getEncryptedValue(parseInt(daubScore));
  }
  get getGoodDaubScore() {
    return parseInt(this.getDecryptedValues(this.goodDaubScore));
  }

  /**Correct Daubs Count and Score */
  set setNoOfCorrectDaubs(daub) {
    if (this.correctDaubCount === null) {
      this.correctDaubCount = this.getEncryptedValue(0);
    }
    this.correctDaubCount = this.getEncryptedValue(parseInt(daub));
  }
  get getNoOfCorrectDaubs() {
    return parseInt(this.getDecryptedValues(this.correctDaubCount));
  }

  /** Correct Daub Score */
  set setCorrectDaubScore(daubScore) {
    if (this.correctDaubScore === null) {
      this.correctDaubScore = this.getEncryptedValue(0);
    }
    this.correctDaubScore = this.getEncryptedValue(parseInt(daubScore));
  }
  get getCorrectDaubScore() {
    return parseInt(this.getDecryptedValues(this.correctDaubScore));
  }


  /** Full House Score */
  set setFullHouseScore(fullHouseValue){
    if (this.fullHouseScore === null) {
      this.fullHouseScore = this.getEncryptedValue(0);
    }
    this.fullHouseScore = this.getEncryptedValue(fullHouseValue);
  }

  get getFullHouseScore(){
    return parseInt(this.getDecryptedValues(this.fullHouseScore));
  }

  set setIsCreatingNewBingoBall(value){
    this.creatingNew = value;
  }

  get getIsCreatingNewBingoBall(){
    return this.creatingNew;
  }

  /** storing displacemnt */
  set setDisplacement(value){
     this.displacemnet = value
  }
 
  get getDisplacement(){
    return this.displacemnet;
  }
  /**
   *on correct daub  bingo pattern animation is formed
   */
  bingoPatternAnimations(sceneScope) {
    //pattern animation
    sceneScope.anims.create({
      key: "bingoPatternAnim",
      frames: sceneScope.anims.generateFrameNames("bingoPattern", {
        start: 1,
        end: 29,
        zeroPad: 2,
        prefix: "frameGlow",
        suffix: ".png",
      }),
      frameRate: 16,
      repeat: 0,
      hideOnComplete: true,
    });
    /**Freedaub blocks animation */
    sceneScope.anims.create({
      key: "freeDaubAnim",
      frames: sceneScope.anims.generateFrameNames("starPowerUpPattern", {
        start: 1,
        end: 20,
        zeroPad: 2,
        prefix: "tileGlow02_",
        suffix: ".png",
      }),
      frameRate: 16,
      repeat: 7,
    });
    /**powerUp claim animation */
    sceneScope.anims.create({
      key: "powerUpClaimAnim",
      frames: sceneScope.anims.generateFrameNames("powerUpClaim", {
        start: 1,
        end: 31,
        zeroPad: 2,
        prefix: "powerUp_",
        suffix: ".png",
      }),
      frameRate: 25,
      repeat: 0,
      hideOnComplete: true,
    });
  }
}
