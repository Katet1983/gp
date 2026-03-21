// @ts-check
import { Color } from "./color.js";
import { Piece } from "./piece.js";
export class Player {
// The color of the player.
    #color;
    // Array of all pieces.
    #pieces;
    // dictionary from piece index to the piece.
    #piecesIndexes;

    #isComputerPlayer

	/**
     * 
     * @param {Color} color 
     */
    constructor(color, isComputer) {
        this.#color = color;
        this.#isComputerPlayer = isComputer;
        this.initPiecesArray();
    }
	
	 /**
     * Initializes the pieces array to an empty array
     */
    initPiecesArray() {
        this.#pieces = [];        
        this.#piecesIndexes = {};                
    }

    /**
     * @returns {boolean} Whether the player is played by a computer.
     */
    get isComputer() {
        return this.#isComputerPlayer;
    }

    /**
     * 
     * @returns {boolean} Whether the player has a piece on the bar.
     */
    hasPiecesOnBar() {
        for (let i = 0; i < this.#pieces.length; i++) {
            const curPiece = this.#pieces[i];
            if ((curPiece.isOnBoard) && (curPiece.isOnBar)) {
                return true;
            }
        }

        return false;
    }
	
    /**
     * 
     * @returns {boolean} Whether all the pieces on board are in the home region.
     */
    allPiecesAreInHome() {
        for (let i = 0; i < this.#pieces.length; i++) {
            const curPiece = this.#pieces[i];
            if (!curPiece.isOnBoard) {
                continue;
            }

            if (!this.#color.isHomePoint(curPiece.position)) {
                return false;
            }
        }
        return true;
    }
     /**
     * Goes over each piece and checks if it is on the bar.
     * @returns {boolean} Whether the player has a piece on the board.
     */
    hasPieceOnBoard() {
        for (let i = 0; i < this.#pieces.length; i++) {
            const curPiece = this.#pieces[i];
            if (curPiece.isOnBoard) {
                return true;
            }
        }

        return false;
    }
	/**
     * Adds a piece to the player.
     * @param {Piece} piece 
     */
    addPiece(piece) {
        this.#pieces.push(piece);
        this.#piecesIndexes[piece.index] = piece;            
    }  		

    /**
     * @returns {Color} the color of the current player.
     */
    get color() {
        return this.#color;
    }
	
	/**
     * returns whether the player has a piece with the given index.
     * 
     * @param {number} index 
     * 
     * @returns {boolean} whether the player has a piece with a given index.
     */
    hasPieceIndex(index) {
        return this.#piecesIndexes[index] != undefined;
    }

    /**
     * Returns a piece with specific index.
     * 
     * @param {number} index 
     * @returns {Piece}
     */
    getPieceByIndex(index) {
        return this.#piecesIndexes[index];
    }
	
    /**
     * @returns {number} the maximum distance from the home point.
     */
    maxDistance() {
        let result = -1;
        for (let i = 0; i < this.#pieces.length; i++) {
            if (!this.#pieces[i].isOnBoard) {
                continue;
            }
            const curPiece = this.#pieces[i];
            if (curPiece.distanceFromLastPoint() > result) {
                result = curPiece.distanceFromLastPoint();
            }
        }

        return result;
    }
	
}