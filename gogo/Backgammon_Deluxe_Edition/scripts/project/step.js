// @ts-check
import { Piece } from "./piece.js";

/**
 * This class is a single step inside a move.
 */
export class Step {
    #movingPiece;
    #secondPiece;
    #initalPoint;
    #endPoint;
    // How many steps were taken.
    #moveSteps;
    // Are we eating another piece with this step?
    #isEatingStep;
    // Are we leaving the board at this step?
    #isOutOfBoardStep;
    // Whether the piece is coming back to the board.
    #isBackToBoard;
    /**
     * 
     * @param {Piece} movingPiece 
     * @param {Piece | null} secondPiece 
     * @param {number} initialPoint 
     * @param {number} endPoint 
     * @param {number} moveSteps 
     * @param {boolean} isEatingStep 
     * @param {boolean} isOutOfBoardStep 
     * @param {boolean} isBackToBoard 
     */
    constructor(movingPiece, secondPiece, initialPoint,endPoint,moveSteps,isEatingStep,isOutOfBoardStep, isBackToBoard) {
        this.#endPoint = endPoint;
        this.#initalPoint = initialPoint;
        this.#isEatingStep = isEatingStep;
        this.#isOutOfBoardStep = isOutOfBoardStep;
        this.#moveSteps = moveSteps;
        this.#movingPiece = movingPiece;
        this.#secondPiece = secondPiece;
        this.#isBackToBoard = isBackToBoard;
    }

 	/**
     * @returns {Piece} returns the moving piece;
     */
    get movingPiece() {
        return this.#movingPiece;
    }

    /**
     * @returns {Piece | null} returns the moving piece;
     */
    get secondPiece() {
        return this.#secondPiece;
    }
    
    /**
     * @returns {number} returns the initial point.
     */
    get initialPoint() {
        return this.#initalPoint;
    }

    /**
     * @returns {number} returns the end point.
     */
    get endPoint() {
        return this.#endPoint;
    }

    /**
     * @returns {number} returns the number of steps moved.
     */
      get moveSteps() {
        return this.#moveSteps;
    }

    /**
     * @returns {boolean} returns whether its an eating step.
     */
    get isEatingStep() {
        return this.#isEatingStep;
    }

    /**
     * @returns {boolean} returns the step is taking the piece out of the board.
     */
    get isOutOfBoardStep() {
        return this.#isOutOfBoardStep;
    }

        /**
     * @returns {boolean} returns if the step returns us to board.
     */
    get isBackToBoard() {
        return this.#isBackToBoard;
    }
}