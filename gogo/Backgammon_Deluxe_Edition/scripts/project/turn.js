//import { Board } from "./board.js";
import { Board } from "./board.js";

import { Move } from "./move.js";
import { Step } from "./step.js";


/**
 * A class that is used to manage the turn.
 */
export class Turn {
    #board;
    #initialPossibleMoves;
    #possibleMoves;
    #movingPieceIndex;    
    // An array of the steps that were taken in the turn.
    #stepsTaken;

    // The last move where a step was taken.
    #lastMove;
	
	#possibleMovesArray;
    /**
     * 
     * @param {Board} board the board where the turn takes place.
     *
     */
    constructor(board) {
        this.initTurn();
        this.#lastMove = null;
        this.#board = board;
        this.#initialPossibleMoves = board.getPossibleMoves(board.dice1Result, board. dice2Result);
        this.#possibleMoves = this.#initialPossibleMoves;
		this.#possibleMovesArray = [this.#possibleMoves];
		
    }

    initTurn() {
        this.#stepsTaken = [];
        this.#possibleMoves = [];
    }

    /**
     * @returns {Number} how many steps have been taken.
     */
	 
	 
	 get currentTurnSteps(){
	 	return this.#stepsTaken;
	 }
	 
	 
    get currentStepInMove() {
        return this.#stepsTaken.length;
    }

    /**
     * @param {number} index the moving piece index.
     */
    set movingPieceIndex(index) {
        this.#movingPieceIndex = index;
    }
	
	
	
	pushStep(result){
	
	this.#stepsTaken.push(result);
	
	}
	
	popStep(){
	this.#stepsTaken.pop();
	this.#possibleMovesArray.pop();
	
	this.#possibleMoves = this.#possibleMovesArray[this.#possibleMovesArray.length - 1];
	console.log(this.#possibleMovesArray[this.#possibleMovesArray.length - 1]);
	//this.#lastMove.removeStep();
	}
	
	
	

    /**
     * 
     * @param {number} index 
     * @returns {Step | null} returns a step where the moving piece is going to the target point.
     */
    pointClicked(index) {
        let result = null;
        for (let i = 0; i < this.#possibleMoves.length; i++) {
            const curMove = this.#possibleMoves[i];
            const curStep = curMove.steps[this.currentStepInMove];
            if (!this.stepMatches(curStep, this.#movingPieceIndex, index)) {
                continue;
            }
            
            // Taking the step.
            
            result = curStep;
            this.#lastMove = curMove;
            break;
        }
        if (result != null) {
			console.log(this.#movingPieceIndex)
            this.updatePossibleMoves(this.#movingPieceIndex, index); 
			this.pushStep(result);
            
        }
        return result;
    }
    /**
     * Updates the possible moves array to include only current possible moves.
     * @param {number} movingPieceIndex 
     * @param {number} movingPoint 
     */
    updatePossibleMoves(movingPieceIndex, movingPoint) {
        let result = [];
		
        for (let i = 0; i < this.#possibleMoves.length; i++) {
            const curMove = this.#possibleMoves[i];
            const curStep = curMove.steps[this.currentStepInMove];
			
            if (this.stepMatches(curStep, movingPieceIndex, movingPoint)) {
                result.push(curMove);
            }
        }
        this.#possibleMoves = result;
		this.#possibleMovesArray.push(this.#possibleMoves);
		console.log(this.#possibleMovesArray);
    }
	
  
    /**
     * @returns {Move} returns the last move taken.
     */
    get lastMove() {
        return this.#lastMove;
    }
    /**
     * Compare step by moving piece and end point.
     * @param {Step} step 
     * @param {number} pieceIndex 
     * @param {number} endPoint 
     * @returns {boolean} Whether the moves match.
     */
    stepMatches(step, pieceIndex, endPoint) {
        if (step.endPoint != endPoint) {
            return false;
        }
        if (step.movingPiece.index != pieceIndex) {
            return false;
        }

        return true;
    }
    /**
     * @returns {Set<number>} returns a set of all pieces that can move.
     */
    possibleMovingPieces() {
        let result = new Set();
		//console.log(this.#possibleMoves);
        for (let i = 0; i < this.#possibleMoves.length; i++) {
            const curMove = this.#possibleMoves[i];
						
            result.add(curMove.steps[this.currentStepInMove].movingPiece.index);
        }
        
        return result;
    }

    /**
     * @param {number} pieceIndex the index of the chosen piece.
     * @returns {Set<number>} returns a set of all pieces that can move.
     */
    possibleEndPoints(pieceIndex) {
        let result = new Set();
		
        for (let i = 0; i < this.#possibleMoves.length; i++) {
            const curMove = this.#possibleMoves[i];
            if (curMove.steps[this.currentStepInMove].movingPiece.index === pieceIndex) {
                result.add(curMove.steps[this.currentStepInMove].endPoint);
            }            
        }
        
        return result;
    }

    
    /**
     * 
     * @param {number} pieceIndex 
     * @returns {boolean} Whether the piece has a potential move.
     */
    canPieceMove(pieceIndex) {
        for (let i = 0; i < this.#possibleMoves.length; i++) {
            const curMove = this.#possibleMoves[i];
            const curStep = curMove.steps[this.currentStepInMove];
            if (curStep.movingPiece.index === pieceIndex) {
                return true;
            }
        }
        return false;
    }

    turnComplete() {
        return (this.#stepsTaken.length === this.#initialPossibleMoves[0].steps.length);
    }

    /**
     * Whether its a computer turn.
     * @returns {boolean} Whether its a computer turn.
     */
    isComputerTurn() {        
        return this.#board.currentPlayer.isComputer;
    }

    /**
     * Returns the move the computer is doing.
     * @returns {null | Move} returns the move the computer choose.
     */
    selectComputerMove() {
        if (this.#initialPossibleMoves.length === 0) {
            return null;
        }
        if (this.#initialPossibleMoves.length === 1) {
            return this.#initialPossibleMoves[0];
        }
        if (this.#board.computerLevel === Board.COMPUTER_LEVELS.EASY) {
            return this.randomMove(this.#initialPossibleMoves);
        }

        if (this.#board.computerLevel === Board.COMPUTER_LEVELS.MEDIUM) {
            // We minimize the amount of empty slots. If there's a draw we maximize oppenet pieces on bar.
            
            let singleSlots = {};
            let piecesOnBar = {};
            let maxDistance = {};
            // Find minimum single points
            let minSingleSlots = this.findMinimumSinglePoints(singleSlots, piecesOnBar, maxDistance,false);                        

            // Minimize single points move
            let minSinglePointsMoves = this.getMovesWithMinSinglePoints(minSingleSlots, singleSlots);            

            console.log(this.#initialPossibleMoves);
            console.log(piecesOnBar);
            console.log(minSingleSlots);

            if (minSinglePointsMoves.length === 1) {
                return minSinglePointsMoves[0];
            }
            // Find maximum pieces on bar
            let maxPiecesOnBar = this.findMaxOppenentPicesOnBar(minSinglePointsMoves, piecesOnBar);
            let maxPointsOnBarMoves = this.findMovesWithMaxPieceOnBar(minSinglePointsMoves, piecesOnBar, maxPiecesOnBar);
            
            return this.randomMove(maxPointsOnBarMoves);
        }

        if (this.#board.computerLevel === Board.COMPUTER_LEVELS.HARD) {
            // 1) We only count empty slots that are threatened (meaning the opponent has a piece that can theat them) We don't care for empty slots that the opponent can't reach.
            // 2) Out of the moves on the bar, we choose the one where the max distance is minimal.

            let singleSlots = {};
            let piecesOnBar = {};
            let maxDistance = {};
            // Find minimum single points
            let minSingleSlots = this.findMinimumSinglePoints(singleSlots, piecesOnBar, maxDistance,true);                        
            console.log(this.#initialPossibleMoves);
            console.log(maxDistance);

            // Minimize single points move
            let minSinglePointsMoves = this.getMovesWithMinSinglePoints(minSingleSlots, singleSlots);            
            

            if (minSinglePointsMoves.length === 1) {
                return minSinglePointsMoves[0];
            }
            // Find maximum pieces on bar
            let maxPiecesOnBar = this.findMaxOppenentPicesOnBar(minSinglePointsMoves, piecesOnBar);
            let maxPointsOnBarMoves = this.findMovesWithMaxPieceOnBar(minSinglePointsMoves, piecesOnBar, maxPiecesOnBar);

            if (maxPointsOnBarMoves.length === 1) {
                return maxPointsOnBarMoves[0];
            }

            let leastMaxDistanceFromLastPoint = this.findLeastMaxDistanceFromLastPoint(maxPointsOnBarMoves, maxDistance);
            let leastMasDistanceMoves = this.findMovesWithLeastMaxDistance(maxPointsOnBarMoves, maxDistance, leastMaxDistanceFromLastPoint);
            return this.randomMove(leastMasDistanceMoves);
        }
        
        return this.randomMove(this.#initialPossibleMoves);
    }

    
    /**
     * Returns the minimum single points that can happen after a move.
     * Updates singleSlots and piecesOnBar to how many of each after each move.
     * @param {Object} singleSlots 
     * @param {Object} piecesOnBar 
     * @param {Object} maxDistance fills max distance data. 
     * @param {boolean} ignoreUnthreatenPoints Whether to ignore points that can't be threatend
     * @returns {number} Minimum single slots after a move.
     */
    findMinimumSinglePoints(singleSlots, piecesOnBar, maxDistance, ignoreUnthreatenPoints) {
        let minSingleSlots = Board.POINTS;            
        let minDistance = 0;
        
        // Find minimum single points
        for (let i = 0; i < this.#initialPossibleMoves.length; i++) {
            const curMove = this.#initialPossibleMoves[i];
            this.#board.applyMoveOnBoard(curMove, false);
            let singlePoints = this.#board.singlePiecePoints(this.#board.currentColor);
            let singlePointsCount = singlePoints.length;
            if (ignoreUnthreatenPoints) {
                console.log("Min distance ot be considered single");
                console.log(minDistance);
                minDistance = Board.POINTS - this.#board.nextPlayer.maxDistance();
                const numberOfUnThreatenedPoints = this.#board.singlePointNotThreaten(singlePoints, minDistance);
                // Each unthreatned point reduces half, so we still prefer to build houses so we can later on eat.
                singlePointsCount = singlePointsCount - (numberOfUnThreatenedPoints / 2);
                
            }
            
            
            if (singlePointsCount < minSingleSlots) {                    
                minSingleSlots = singlePointsCount;
            }
            piecesOnBar[curMove.index] = this.#board.getPoint(this.#board.nextColor.barPoint).length;
            singleSlots[curMove.index] = singlePointsCount;
            maxDistance[curMove.index] = this.#board.currentPlayer.maxDistance();
            this.#board.undoMoveOnBoard(curMove, false);                
        }
        return minSingleSlots;
    }

    /**
     * 
     * @param {number} minSinglePoints the minimum single points in a move
     * @param {Object} singleSlots number of single slots per move.
     * @returns {Array<Move>} all moves with minimum single points. 
     */
    getMovesWithMinSinglePoints(minSinglePoints, singleSlots) {
        let result = [];
        for (let i = 0; i < this.#initialPossibleMoves.length; i++) {
            const curMove = this.#initialPossibleMoves[i];
            const singlePoints = singleSlots[curMove.index];

            if (singlePoints === minSinglePoints) {
                result.push(curMove);
            }
        } 

        return result;
    }

    /**
     * Returns the moves which leave the maximum opponent pieces on bar.
     * @param {Array<Move>} potentialMoves 
     * @param {Object} piecesOnBar dictionary of move index to number of pieces on the bar.
     * @param {number} maxPiecesOnBar Maximum number of pieces on the bar
     * @returns {Array<Move>} all moves that send maximum opponent pieces to the bar.
     */
    findMovesWithMaxPieceOnBar(potentialMoves, piecesOnBar, maxPiecesOnBar) {         
        let result = [];
        for (let i = 0; i < potentialMoves.length; i++) {
            const curMove = potentialMoves[i];
            const moveBarPieces = piecesOnBar[curMove.index];

            if (moveBarPieces === maxPiecesOnBar) {
                result.push(curMove);
            }
        }
        return result;
    }

    /**
     * Returns the moves which put maximum opponent pieces on bar.
     * @param {Array<Move>} potentialMoves 
     * @param {Object} piecesOnBar 
     * @returns {number} returns maximum opponents pieces on bar.
     */
    findMaxOppenentPicesOnBar(potentialMoves, piecesOnBar) {         
        let maxPiecesOnBar = 0;
        // Maximize opponents points on bar.
        for (let i = 0; i < potentialMoves.length; i++) {
            const curMove = potentialMoves[i];
            const moveBarPieces = piecesOnBar[curMove.index];

            if (moveBarPieces > maxPiecesOnBar) {
                maxPiecesOnBar = moveBarPieces;
            }
        } 
        return maxPiecesOnBar;
   }

   /**
     * Returns the least possible max distance after a move.
     * @param {Array<Move>} potentialMoves 
     * @param {Object} maxDistance a mapping of distance per move
     * @returns {number} returns maximum opponents pieces on bar.
     */
   findLeastMaxDistanceFromLastPoint(potentialMoves, maxDistance) {         
        let leastMaxDistance = Board.POINTS + 2;
        // Maximize opponents points on bar.
        for (let i = 0; i < potentialMoves.length; i++) {
            const curMove = potentialMoves[i];
            const curMaxDistance = maxDistance[curMove.index];

            if (curMaxDistance < leastMaxDistance) {
                leastMaxDistance = curMaxDistance;
            }
        } 
        return leastMaxDistance;
    }
    /** */
    findMovesWithLeastMaxDistance(potentialMoves, maxDistance, leastMaxDistanceFromLastPoint) {
        let result = [];
        for (let i = 0; i < potentialMoves.length; i++) {
            const curMove = potentialMoves[i];
            const curMaxDistance = maxDistance[curMove.index];

            if (curMaxDistance === leastMaxDistanceFromLastPoint) {
                result.push(curMove);
            }
        }
        return result;
    }
    
    /**
     * returns a random move.
     * @param {Array<Move>} possibleMoves Array of possible moves
     * @returns {Move} returns a random move.
     */
    randomMove(possibleMoves) {
        return possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
    }
}