//import { Board } from "./board.js";
import { Board } from "./board.js";

// @ts-check
export class Color {    
    #name;
    #startPoint;
    #homePoint;
    #barPoint;
    #direction;
    
    /**
     * 
     * @param {string} name 
     * @param {number} startPoint
     * @param {number} homePoint
     * @param {number} barPoint
     * @param {number} direction
     */
    constructor(name, startPoint, homePoint, direction, barPoint) {
        this.#name = name;
        this.#direction = direction;
        this.#startPoint = startPoint;
        this.#homePoint = homePoint;
        this.#barPoint = barPoint;
    }

    /**
     * Returns the color name.
     * @returns {string} the value of the name.
     */
    get name() {
        return this.#name;
    }
    
    /**
     * @returns {number} returns the start point.
     */
    get startPoint() {
        return this.#startPoint;
    }

    /**
     * @returns {number} returns the last point on the board.
     */
    get lastPoint() {
        return (Board.POINTS + 1) - this.#startPoint;
    }

    /**
     * @returns {number} returns the bar point.
     */
    get barPoint() {
        return this.#barPoint;
    }

    /**
     * @returns {number} returns the first point of home
     */
    get homePoint() {
        return this.#homePoint;
    }

    /**
     * @returns {number} returns the pawn move direction.
     */
    get direction() {
        return this.#direction;
    }
    /**
     * 
     * @param {number} point 
     * @returns {boolean} Whether the point is at home
     */
    isHomePoint(point) {
        if (this.#direction > 0) {
            return (point >= this.#homePoint);
        } else {
            return (point <= this.#homePoint);
        }        
    }

    /**
     * first Position after leaving the board.
     * @returns {number} returns the first position after leaving the board.
     */
    get pointAfterLast()
    {
        return this.lastPoint + this.direction;
    }
    
    /**
     * @returns {Color} returns the white color.
     */
    static get WHITE() {
        return white;
    }
    /**
     * @returns {Color} returns the black color.
     */
    static get BLACK() {
        return black;
    }
}

const white = new Color("White", 24, 6, -1, 25);
const black = new Color("Black", 1, 19, 1, 0);