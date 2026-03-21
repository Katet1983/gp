// @ts-check
import { Step } from "./step.js";
export class Move {
    // An array of step
    #steps;
    #index;
    #firstDiceResult;
    #secondDiceResult;
    /**
     * @param {number} index The index that uniquely identifies the move.
     * @param {number} firstDiceResult result on the first dice.
     * @param {number} secondDiceResults result of the first dice.
     */
    constructor(index, firstDiceResult, secondDiceResults) {
        this.#index = index;
        this.#steps = [];
        this.#firstDiceResult = firstDiceResult;
        this.#secondDiceResult = secondDiceResults;
    }

    /**
     * Adds a new step to the move.
     * @param {Step} step 
     */
    addStep(step) {
        this.#steps.push(step);
    }
	
	removeStep(){
		this.#steps.pop();
		//console.log();
	}
    
     /**
     * @returns {Array<Step>} returns the steps taken in the move.
     */
    get steps() {
        return this.#steps;
    }

    
    /**
     * @returns {number} Number of steps in the turn.
     */
    get numberOfSteps() {
        return this.#steps.length;
    }

    /**
     * @returns {boolean} Whether its a double move.
     */
    get isDouble() {
        return (this.#firstDiceResult === this.#secondDiceResult);
    }

     /**
     * @returns {number} The move unique index.
     */
     get index() {
        return this.#index;
    }
}