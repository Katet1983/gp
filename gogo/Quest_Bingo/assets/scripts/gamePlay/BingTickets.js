import {
    CONSTATNTS,
    SCORE_TYPE,
    DUABSCORE,
    FONT_STYLES,
    BINGO_TYPE,
    TICKET,
  } from "../Constants.js";
  // import TicketBlockItem from "./TicketBlockItem.js";
  import GameController from "./GameController.js";
  
  let  sceneScope;
  export default class BingoTickets extends Phaser.Physics.Arcade.Sprite {
    ticketBlockItem = []; /** holds all the tickets */
    activeNumbersList = []; /** holds all the block info blocks on ticket */
    totalElements = 5; /** no of rows or cols */
    blockArr = []; /** holds the matrix form of numbers on ticket */
    blockNumberQueue =[]; /**containes all the bingo indivisual block no's  which are generated in bingo ticket */
    fourConnerList = []; /** contains all the corner blocks of the bingo ticket */
    matchedDaubList = []; /** Holds all the correctly duabed numbers */
    matchedDaubListIndex = []; /** holds the correctly duabed number indexes */
    fourCornerIndexArr = []; /** stores the four corner indexes */
    rowsArray = []; /** holds all the rows indexes i.e, 5 rows as arrays */
    columnsArray = []; /** holds all the column indexes i.e, 5 cols as arrays */
    diagonalArray = []; /** holds all diagonal indexes i.e, 2 diagonals as arrays */
    patternItems = []; /** holds the blocks that formed bingo pattern */
    ticketCreationRef; /** ticket reference of which blocks belongs */
    totalDaubbedNumber = 0; /** holds the count of total duabed numbers */
    isFourCorner = false; /** bool mainted to check for four corner bingo */
  
    constructor(data) {
      sceneScope = data.scene;
      super(sceneScope, 0, 0, "");
    }
    /**
     *
     * @param {The reference of ticket number that is generating} ticketNumber
      @param {No of Rows for a generating ticket} rows
      @param {No of Columns for a generating ticket} columns
      @param {} ticketCreation // ticketCreation is the scope of ticketCreation instance
     */
    init( rows, columns, ticketRef) {
      this.initializeAllArrays();
      // this.totalElements = CONSTATNTS.TOTAL_ELEMENT_IN_ROW;
      this.ticketCreationRef =  ticketRef;
      this.initializeBlockArrToZero(rows, columns);
  
      this.generateTicketBlocks(rows, columns);
      this.col = columns;
      this.row = rows;
    }
    /**
     * Initializing all arrays to zero and seeting row col arrays
     */
  
    initializeAllArrays() {
      this.ticketBlockItem = [];
      this.blockNumberQueue = [];
      this.fourConnerList = [];
      this.matchedDaubList = [];
      this.matchedDaubListIndex = [];
      this.fourCornerIndexArr = [];
      this.totalDaubbedNumber = 0;
      this.activeNumbersList = [];
      // this.rowsArray = [];
      this.bingoPatterns = [];
      this.diagonalArray = [];
  
      // storing all the 5 columns indexes in arrays
      let c1 = [0, 1, 2, 3, 4];
      let c2 = [5, 6, 7, 8, 9];
      let c3 = [10, 11, 12, 13, 14];
      let c4 = [15, 16, 17, 18, 19];
      let c5 = [20, 21, 22, 23, 24];
      this.columnsArray.push(c1, c2, c3, c4, c5);
  
      // storing all the 5 rows indexes in arrays
      let r1 = [0, 5, 10, 15, 20];
      let r2 = [1, 6, 11, 16, 21];
      let r3 = [2, 7, 12, 17, 22];
      let r4 = [3, 8, 13, 18, 23];
      let r5 = [4, 9, 14, 19, 24];
      this.rowsArray.push(r1, r2, r3, r4, r5);
  
      // storing all the 2 diagonals indexes in arrays
      let leftToRight = [0, 6, 12, 18, 24];
      let rightToLeft = [4, 8, 12, 16, 20];
      this.diagonalArray.push(leftToRight, rightToLeft);
  
      // four corner indexes
      let cornerIndex = [0, 4, 20, 24];
      this.fourConnerList = [...cornerIndex];
    }
    /**
     * Initializing all block Array to zero
     */
    initializeBlockArrToZero(rows, columns) {
      let tempArr = [];
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          tempArr.push(0);
        }
        this.blockArr.push(tempArr);
        tempArr = [];
      }
    }
    /**
     * Generating Ticket Blocks complte Ui
     */
    generateTicketBlocks(rows, columns) {
      /** ticket Ui  */
      // Adding bingo ticket background
      this.ticketsBg = sceneScope.add.image(
        sceneScope.backGround.x,
        sceneScope.backGround.y + sceneScope.backGround.displayHeight / 12,
        "BingoBoardBg"
      );
  
      let bingoTextELements = ["B", "I", "N", "G", "O"];
      let eachBlockWidth = this.ticketsBg.displayWidth / 5.8;
      //StartPosition of X and Y for first Ticket Block
      let startPosX =
        this.ticketsBg.x -
        this.ticketsBg.displayWidth / 2 +
        eachBlockWidth * 0.75;
      let startPosY = this.ticketsBg.y - this.ticketsBg.displayHeight / 2 + 40;
  
      // Adding bingo column header images
      for (let rows = 0; rows < bingoTextELements.length; rows++) {
        /** BINGO text buttons in gamePlay UI */
        let bingoElements = sceneScope.add.sprite(startPosX, startPosY,  "bingoAssets",
          `TicketColumn_${bingoTextELements[rows]}.png`);
        bingoElements.displayWidth = eachBlockWidth;
        bingoElements.displayHeight = 40;
        // Adding bingo column text on header images
        let bingoText = sceneScope.add
          .text(bingoElements.x, bingoElements.y - 2.5, bingoTextELements[rows], {
            fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
            fontSize: FONT_STYLES.FS30,
            align: FONT_STYLES.ALIGN_CENTER,
          })
          .setOrigin(0.5);
  
        startPosY = bingoElements.y + bingoElements.displayHeight * 1.7 + CONSTATNTS.GAPBETWEENBINGO;
        startPosX = bingoElements.x;
  
        /** creating ticket blocks */
        for (let column = 0; column < columns; column++) {
          let isBingoImage =  false
          let bingoFrame = "Bingo_NumberBox.png";

         if(rows == 2 &&  column == 2){

           bingoFrame = "Bingo_YellowBingoBox.png";
         } 
         let patternAnimSprite = null;
         let greenGlowAnim = null;

        let ticketBlockCreated = sceneScope.add
              .sprite(startPosX, startPosY, "bingoAssets",bingoFrame).setInteractive();
       
       if(!isBingoImage){
        isBingoImage = true;
        patternAnimSprite = sceneScope.add.sprite( ticketBlockCreated.x,
                ticketBlockCreated.y,"bingoPattern","frameGlow01.png" ).setVisible(false);

        greenGlowAnim = sceneScope.add.sprite(ticketBlockCreated.x,
           ticketBlockCreated.y - 2, "starPowerUpPattern", "tileGlow02_01.png").setVisible(false);      
        }
        let blockItem =  new TicketBlocks();

        ticketBlockCreated.setData({
              TicketBlockItem: blockItem,
              status: TICKET.INITAIL,
              isStarPowerUpDaub: false,
              animPattern: patternAnimSprite,
              freeDaubPattern: greenGlowAnim, 
            });

        if(rows == 2 &&  column == 2){
          ticketBlockCreated.data.list.TicketBlockItem.tapped  =  true;
          ticketBlockCreated.data.list.TicketBlockItem.blockNumber = 0;
          this.blockNumberQueue.push(0);
          ticketBlockCreated.data.list.TicketBlockItem.blockIndex =  (this.blockNumberQueue.length-1);
          let BingoIconText = sceneScope.add.text(ticketBlockCreated.x, ticketBlockCreated.y - 4, "B", {
                fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
                fontSize: FONT_STYLES.FS60,
                align: FONT_STYLES.ALIGN_CENTER,
              })
              .setOrigin(0.5)
              .setTint(FONT_STYLES.WHITE_COLOR);
        }else{
          let randomBlock = this.getBlockNumber(rows);
          this.blockNumberQueue.push(randomBlock);
          ticketBlockCreated.data.list.TicketBlockItem.blockNumber = randomBlock;
          ticketBlockCreated.data.list.TicketBlockItem.blockIndex =  (this.blockNumberQueue.length -1);
          let ticketNumberText = sceneScope.add.text(ticketBlockCreated.x, ticketBlockCreated.y,randomBlock,
                      {
                        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
                        fontSize: FONT_STYLES.FS50,
                        align: FONT_STYLES.ALIGN_CENTER,
                      })
                    .setOrigin(0.5)
                    .setTint(FONT_STYLES.BINGO_FONTS_COLOR); 
          ticketBlockCreated.data.list.TicketBlockItem.ticketNumberText = ticketNumberText;
        }

        startPosY = bingoElements.y;
        this.ticketBlockItem.push(ticketBlockCreated);
        startPosY = this.ticketBlockItem[column].y + ticketBlockCreated.displayHeight * 1.07;

        /** on click of  ticket block  */
        ticketBlockCreated.on("pointerdown", () => {
          if (
            !ticketBlockCreated.data.list.TicketBlockItem.tapped &&
            !parseInt(GameController.getInstance().getDecryptedValues(sceneScope.isGameOver))
          ) {
            // ticketBlockCreated.data.list.TicketBlockItem.tapped = true
             if (!GameController.getInstance().getIsGeneratingNew) {
              this.getTappedBlockInfo( ticketBlockCreated, ticketBlockCreated.data.list.TicketBlockItem);
            }
          }
        });
      
      }
      startPosX =
      bingoElements.x +
      bingoElements.displayWidth +
      CONSTATNTS.GAPBETWEENBINGO;
      startPosY = this.ticketsBg.y - this.ticketsBg.displayHeight / 2 + 40;
    }
    /** we are pushing the 12 index image as it is bingo icon  */
    this.matchedDaubList.push(
      this.ticketBlockItem[12].data.list.TicketBlockItem.blockNumber
    );

    this.matchedDaubListIndex.push(
      this.ticketBlockItem[12].data.list.TicketBlockItem.blockIndex
    );

   let removeIndex = this.blockNumberQueue.indexOf(0);
   this.blockNumberQueue.splice(removeIndex,1);
  }
  
    /**
     * Get Random number on ticket block
     */
    getBlockNumber(columnNo) {
      // we are generating Min Val and Max Val based on column No
      let minVal = columnNo * 15 + 1;
      let maxVal = minVal + 14;
      let randomBlockNumber = 0;
  
      /**first we will pick the random no and then we will check if already exists */
      do {
        // Random Number between min and max values
        randomBlockNumber = Phaser.Math.Between(minVal, maxVal);
      } while (this.blockNumberQueue.includes(randomBlockNumber));
      return randomBlockNumber;
    }

    /**
     * Get Tapped Block Information
     */
    getTappedBlockInfo(ticketBlock, tappedBlockInfo) {
      this.ticketCreationRef.calculateScore(ticketBlock, tappedBlockInfo);
    }

    /**
     * Calculating the patterns of bingo
      @param {} tappedBlockInfo
     * @returns which patterns are formed
     */
    calculatePattern(tappedBlockInfo) {
      //Adding tapped block to full list for checking all the patterns
      this.matchedDaubList.push(tappedBlockInfo.blockNumber);
      this.matchedDaubListIndex.push(tappedBlockInfo.blockIndex);

      if(this.matchedDaubList.length == this.ticketBlockItem.length){
        sceneScope.powerUpButtons.forEach((element,index) => {
          element.disableInteractive();
          element.setAlpha(0.2);
        })
    }
      return this.checkForHousiePattern(tappedBlockInfo.blockIndex);
    }
  
    /**
     * Checking for full house pattern bingo
     * @param {for the duabed ticket} ticketIndex is the array index
     * @returns formations which are claimed
     */
    checkForHousiePattern(ticketIndex) {
      // this.isFourCorner = this.isFullHouse = false;
      this.patternItems = []; // for pattern animation
      let claimFormations = []; // list of patterns acchived
      let currentObject = null;
      let isCornerTicketExist = false;
  
      /**full house condition*/
      if (this.matchedDaubList.length == this.ticketBlockItem.length) {
        sceneScope.isFullHouse = true;
        GameController.getInstance().setFullHouseScore =  DUABSCORE.FULL_HOUSE;
      }
  
      isCornerTicketExist = this.fourConnerList.some((element) => {
        return element == ticketIndex;
      });
  
      if (isCornerTicketExist) {
        this.isFourCornerBingo(ticketIndex);
      }
  
      /**row Index from the bingo tickets */
      let rowIndex = ticketIndex % 5;
  
      /**column index from the bingo tickets */
      let columnIndex = Math.floor(ticketIndex / 5);
  
      if (ticketIndex < 4) {
        rowIndex = ticketIndex;
        columnIndex = 0;
      }
  
      this.isRowBingoExist(rowIndex);
  
      this.isColumnBingoIndex(columnIndex);
  
      if (
        rowIndex == columnIndex ||
        rowIndex + columnIndex == this.rowsArray.length - 1
      ) {
        let isLeftToRight = 1;
        if (rowIndex == columnIndex) {
          isLeftToRight = 0;
        }
        this.isDiagnolBingoPatternExist(rowIndex, isLeftToRight);
      }
      this.isBingoPatternAnimExist();
    }
  
    /**four corner bingo check */
    isFourCornerBingo(ticketId) {
      let isFourCornerExist = this.compareThePattern(this.fourConnerList);
      let currentPattern = {
        id: 0,
        isBingoCompleted: false,
      };
  
      if (isFourCornerExist) {
        currentPattern.id = `${BINGO_TYPE.FOUR_CORNER}-0`;
        let isPatternUnique = false;
  
        if (this.bingoPatterns.length > 0) {
          isPatternUnique = this.checkIfPatternAlreadyExist(currentPattern.id);
        }
  
        if (!isPatternUnique) {
          this.bingoPatterns.push(currentPattern);
        } else {
          return;
        }
      }
    }
  
    /** row bingo verification*/
    isRowBingoExist(rowIndex) {
      let isRowPatternExist = false;
      let currentRowPattern = {
        id: 0,
        isBingoCompleted: false,
      };
  
      isRowPatternExist = this.checkIfPatternExist(
        BINGO_TYPE.ROW_BINGO,
        rowIndex
      );
  
      if (isRowPatternExist) {
        currentRowPattern.id = `${BINGO_TYPE.ROW_BINGO}-${rowIndex}`;
        if (this.bingoPatterns.length > 0) {
          let isPatternUnique = this.checkIfPatternAlreadyExist(
            currentRowPattern.id
          );
          if (!isPatternUnique) {
            this.bingoPatterns.push(currentRowPattern);
          } else {
            return;
          }
        } else {
          this.bingoPatterns.push(currentRowPattern);
        }
      } else {
        return;
      }
    }
  
    /** column bingo verification*/
    isColumnBingoIndex(columnIndex) {
      let isColumnPatternExist = false;
      let currentPattern = {
        id: 0,
        isBingoCompleted: false,
      };
  
      isColumnPatternExist = this.checkIfPatternExist(
        BINGO_TYPE.COLUMN_BINGO,
        columnIndex
      );
  
      if (isColumnPatternExist) {
        currentPattern.id = `${BINGO_TYPE.COLUMN_BINGO}-${columnIndex}`;
        if (this.bingoPatterns.length > 0) {
          let isPatternUnique = this.checkIfPatternAlreadyExist(
            currentPattern.id
          );
          if (!isPatternUnique) {
            this.bingoPatterns.push(currentPattern);
          } else {
            return;
          }
        } else {
          this.bingoPatterns.push(currentPattern);
        }
      } else {
        return;
      }
    }
  
    /** diagonal Bingo patterb */
    isDiagnolBingoPatternExist(rowIndex, direction) {
      let isDiagionalPatternExist = false;
      let currentPattern = {
        id: 0,
        isBingoCompleted: false,
      };
  
      isDiagionalPatternExist = this.checkIfPatternExist(
        BINGO_TYPE.DIAGONAL_BINGO,
        direction
      );
  
      if (isDiagionalPatternExist) {
        currentPattern.id = `${BINGO_TYPE.DIAGONAL_BINGO}-${direction}`;
        if (this.bingoPatterns.length > 0) {
          let isPatternUnique = this.checkIfPatternAlreadyExist(
            currentPattern.id
          );
          if (!isPatternUnique) {
            this.bingoPatterns.push(currentPattern);
          } else {
            return;
          }
        } else {
          this.bingoPatterns.push(currentPattern);
        }
      } else {
        return;
      }
    }
  
    /**
     * @param {*} type
     * @param {*} index
     */
    checkIfPatternExist(type, index) {
      let isCurrentPatternMathched = false;
      // let currentPattern null
  
      if (type == BINGO_TYPE.ROW_BINGO) {
        isCurrentPatternMathched = this.compareThePattern(this.rowsArray[index]);
      } else if (type == BINGO_TYPE.COLUMN_BINGO) {
        isCurrentPatternMathched = this.compareThePattern(
          this.columnsArray[index]
        );
      } else if (type == BINGO_TYPE.DIAGONAL_BINGO) {
        isCurrentPatternMathched = this.compareThePattern(
          this.diagonalArray[index]
        );
      }
  
      return isCurrentPatternMathched;
    }
  
    /**compare two Arrays */
    compareThePattern(bingoPattern) {
      let patternExist = bingoPattern.every((element) =>
        this.matchedDaubListIndex.includes(element)
      );
  
      return patternExist;
    }
  
    /**check if pattern already exist */
    checkIfPatternAlreadyExist(currentPattern) {
      let isPatternUnique = false;
  
      isPatternUnique = this.bingoPatterns.some(
        (element, index) => element.id == currentPattern
      );
      return isPatternUnique;
    }
  
    /** checks  if all the pattern animation isCompleted or not */
    isBingoPatternAnimExist() {
      let currentPatterns = [];
      for (let i = 0; i < this.bingoPatterns.length; i++) {
        /** check if pattern exist and bingo is not completed */
        if (!this.bingoPatterns[i].isBingoCompleted) {
          currentPatterns.push(this.bingoPatterns[i].id);
          if (!parseInt(GameController.getInstance().getDecryptedValues(sceneScope.isGameOver))) {
            sceneScope.bingoButton.setAlpha(1);
            if (sceneScope.bingoButtonTween == undefined) {
              sceneScope.bingoButtonAnimation();
            } else if (sceneScope.bingoButtonTween.pause) {
              sceneScope.bingoButtonTween.resume();
            }
          }
          let gameObjects = [];
          gameObjects = [
            ...this.getCurrentPatternGameObjects(
              this.bingoPatterns[i].id,
              this.bingoPatterns[i].isBingoCompleted
            ),
          ];
          if (gameObjects.length > 0) {
            for (let i = 0; i < gameObjects.length; i++) {
              this.bingoPatternsAnimation(gameObjects[i]);
            }
          }
        }
      }
      GameController.getInstance().setBingoPatterns = this.bingoPatterns;
    }
  
    /** getteing the gameObjects using indexes */
    getCurrentPatternGameObjects(bingoPattern, isBingoCompleted) {
      if (isBingoCompleted) {
        return;
      }
  
      let gameObjects = [];
      let currentPattern = bingoPattern.split("-");
      /** check if what type of pattern the game Objects are from*/
      if (currentPattern[0] == BINGO_TYPE.ROW_BINGO) {
        let rowIndexArray = this.rowsArray[currentPattern[1]];
        /** getteing the gameObjects using indexes */
        gameObjects = [...this.getGameObjects(rowIndexArray)];
      } else if (currentPattern[0] == BINGO_TYPE.COLUMN_BINGO) {
        let columnIndexArray = this.columnsArray[currentPattern[1]];
        gameObjects = [...this.getGameObjects(columnIndexArray)];
      } else if (currentPattern[0] == BINGO_TYPE.DIAGONAL_BINGO) {
        let diagonalIndexArray = this.diagonalArray[currentPattern[1]];
        gameObjects = [...this.getGameObjects(diagonalIndexArray)];
      } else if (currentPattern[0] == BINGO_TYPE.FOUR_CORNER) {
        gameObjects = [...this.getGameObjects(this.fourConnerList)];
      }
  
      return gameObjects;
    }
  
    /**get The Game Objects */
    getGameObjects(arrayIndexes) {
      let patternObjects = [];
      for (let i = 0; i < arrayIndexes.length; i++) {
        patternObjects.push(this.ticketBlockItem[arrayIndexes[i]]);
      }
  
      return patternObjects;
    }
  
    /**bingo Pattern Animation */
    bingoPatternsAnimation(gameObject) {
      if (gameObject.data.list.animPattern == undefined) {
        return;
      }
      gameObject.data.list.animPattern.setVisible(true);
      gameObject.data.list.animPattern.play("bingoPatternAnim");
    }
    /**
     * Incrementing duabed numbers count on the ticket
     */
    incrementCountOfDaubbedNumber() {
      this.totalDaubbedNumber++;
    }
  }
  
  class TicketBlocks {
    interactable = true;
    blockIndex = 0;
    blockNumber = 0;
    tapped = false;
    ticketIndex = 0;
    isStarBlock = false;
  }
  