// @ts-check
import { Color } from "./color.js";
import { Player } from "./player.js";

export class Piece {

	#index;
    #color;
    #isOnBoard;    
	#player;
    #position;
    #isOnBar;
        /**
     * 
     * @param {number} index 
     * @param {Color} color 
     * @param {boolean} isOnBoard     
     * @param {Player} player;
     * @param {number} position;
     * @param {boolean} isOnBar;
     */
	constructor (index, color, isOnBoard, player, position, isOnBar) {
		this.#index = index;
		this.#color = color;
		this.#isOnBoard = isOnBoard;            
		this.#player = player;
		this.#position = position;
		this.#isOnBar = isOnBar;
	}
	
	/**
     * @returns {Color} returns the piece index.
     */
    get color() {
        return this.#color;
    }

    /**
     * @returns {boolean} returns the piece index.
     */
    get isOnBoard() {
        return this.#isOnBoard;
    }
	
	  /**
     * @returns {boolean} returns the piece index.
     */
    get isOnBar() {
        return this.#isOnBar;
    }

     /**
     * @returns {number} returns the piece index.
     */
     get index() {
        return this.#index;
    }

     /**
     * @returns {Player} returns the piece index.
     */
     get player() {
        return this.#player;
    }

     /**
     * Returns the position of the piece
     * @returns {number} the piece position.
     */
    get position() {
        return this.#position;
    }
	
	  /**
     * @returns {String} the animation of the piece on the board.
     */
    get animation() {        
        return this.#color.name.toLowerCase();
    }
	
	/**
     * Updates the position of the piece.
     * @param {number} position      
     */
    updatePosition(position) {
        this.#position = position;        
    }
    
    /**
     * Returns the position the piece will be in after the step.
     * @param {number} step 
     * @returns {number} The position after the step.
     * 
     */
    positionAfterStep(step) {
        return this.#position + this.color.direction * step;
    }

    /**
     * Updates the position to the bar position.
     */
    updatePositionToBar() {
        this.updatePosition(this.#color.barPoint);
    }
    /**
     * Set the piece to be on the bar.
     */
    placeOnBar() {
        this.#isOnBar = true;        
    }

    /**
     * Removes the piece from the bar.
     */
    removeFromBar() {
        this.#isOnBar = false;
    }

    /**
     * Removes the piece from the board.
     */
    removeFromBoard() {
        this.#isOnBoard = false;
    }

    /**
     * Returns the piece to the board.
     */
    returnToBoard() {
        this.#isOnBoard = true;
    }

    distanceFromLastPoint() {
        return Math.abs(this.#position - this.color.lastPoint);
    }
    
    /**
     * Returns whether the piece is in the home section.
     */
    isInHome() {
        if (this.#color.direction > 0) {
            return (this.position >= this.#color.homePoint);
        } else {
            return (this.position <= this.#color.homePoint);
        }        
    }
}