
// @ts-check
import { Color } from "./color.js";
import { Player } from "./player.js";
import { Move } from "./move.js";
import { Piece } from "./piece.js";
import { Step } from "./step.js";
import { Turn } from "./turn.js";
export class Board {
	static POINTS = 24;
	static BAR_POINTS = 2; // Bar points are 0 and 25.
	static INITIAL_POSITION = {};
	static INITIAL_COLUMNS = {
		ZERO: 0,
		ELEVEN: 11,
		SIXTEEN: 16,
		EIGHTEEN: 18
	}

	static COMPUTER_LEVELS = 
	{
		EASY : 1,
		MEDIUM : 2,
		HARD : 3
	}
	static {
		// Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.ZERO] = 1;
		// Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.ELEVEN] = 0;
		// Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.SIXTEEN] = 0;
		// Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.EIGHTEEN] = 0;
		Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.ZERO] = 2;
		Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.ELEVEN] = 5;
		Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.SIXTEEN] = 3;
		Board.INITIAL_POSITION[Board.INITIAL_COLUMNS.EIGHTEEN] = 5;
	}	

	// Array of 26 arrays, each contains the elements at a given point.
	#points;

	#whitePlayer;
    #blackPlayer;
    #currentPlayer;
    #nextPlayer;
	#nextMoveIndex;
	#currentTurn;
	#computerLevel;
	#movesTaken;
	runtime;
	
	constructor(runtime) {		
		this.runtime = runtime;		
	}


	undoLastTest() {
		if (this.#movesTaken.length > 0) {
			let lastMove = this.#movesTaken.pop();
			this.undoMoveOnBoard(lastMove, true);								
		}
	}
	
	//cancel a moveStep

	undoLastPlayedStep() {	
    if (this.#currentTurn.currentStepInMove > 0) {
			
			let move = this.#currentTurn.lastMove;
			const curStep = move.steps[this.#currentTurn.currentStepInMove -1];
			this.undoStep(curStep);	
			this.#currentTurn.popStep();
			this.undoDrawStepOnBoard(curStep);
			this.runtime.callFunction("unlitAllPieces");
			this.runtime.callFunction("unlitAllCols");
			
			 // Add a 2-second delay before starting the next turn step
        setTimeout(() => {
            this.startNextTurnStep();
        }, 300); // 2000 milliseconds = 2 seconds
			
		}
		
    }

	
	
	
	/**
	 * Starts the next game.
	 * 
	 * @param {boolean} whiteFirst 
	 * @param {boolean} whiteIsComputer 
	 * @param {boolean} blackIsCompter 
	 * @param {number} computerLevel 
	 */
	startNextGame(whiteFirst, whiteIsComputer, blackIsCompter, computerLevel) {
		this.#computerLevel = computerLevel;
		this.#whitePlayer = new Player(Color.WHITE, whiteIsComputer);
        this.#blackPlayer = new Player(Color.BLACK, blackIsCompter);
		this.initNewGame();
		if (whiteFirst) {
			this.#currentPlayer = this.#whitePlayer;
			this.#nextPlayer = this.#blackPlayer;
		} else {
			this.#currentPlayer = this.#blackPlayer;
			this.#nextPlayer = this.#whitePlayer;
		}

		this.runtime.callFunction("setTurnText",this.currentColor.name);
		
		this.createAndDrawPieces();

		this.prepareDices();
				
		
	}


	// Creates the initial pieces.
	createAndDrawPieces() {
		
		this.runtime.callFunction("clearPieces");
		for (let i = 1; i <= Board.POINTS; i++) {
			const curArray = this.#points[i];			
			for (let j = 0; j < curArray.length; j++) {
				const curPiece = curArray[j];
				if (curPiece instanceof Piece) {
					this.runtime.callFunction("createPiece",i,j,curPiece.index, curPiece.animation);
				}				
			}
		}		
	}

	/**
	 * initializes the player's pieces to the original positions.
	 * @param {Player} player 
	 */
	initPlayerPieces(player) {
		player.initPiecesArray();
		let index = player.color.startPoint;
		const direction = player.color.direction;
		// Adding initial pieces.
		for (const [key, value] of Object.entries(Board.INITIAL_POSITION)) {			
			const curPoint = player.color.startPoint + direction * parseInt(key);						
			for (let i = 0; i < value; i++) {
				
				let piece = new Piece(index, player.color, true, player, curPoint, false);
				player.addPiece(piece);				
				this.#points[curPoint].push(piece);
				index++;
			}
		  }
	}

	initNewGame() {
		this.#points = new Array(Board.POINTS + Board.BAR_POINTS);
		
		for (let i = 0; i < this.#points.length; i++) {
			this.#points[i] = new Array(0);
		}

		this.initPlayerPieces(this.#whitePlayer);
		this.initPlayerPieces(this.#blackPlayer);
		this.#movesTaken = [];
		this.#nextMoveIndex = 0;
	}

	/**
	 * Show possible moves for this piece.
	 * @param {number} pieceIndex 
	 */
	pieceTouched(pieceIndex) {
		let possiblePoints = this.#currentTurn.possibleEndPoints(pieceIndex);
		
		for (const point of possiblePoints) {			
			this.runtime.callFunction("litCol",point, true);
		}
		this.runtime.callFunction("choosePiece",pieceIndex);
		this.#currentTurn.movingPieceIndex = pieceIndex;
	}

	/**
	 * A point has been selected for a move.
	 * @param {number} pointIndex 
	 */
	pointTouched(pointIndex) {
		let step = this.#currentTurn.pointClicked(pointIndex);		
		this.applyStepOnBoard(step);
		this.drawStepOnBoard(step);
		if (this.#currentTurn.turnComplete()) {
		
			this.#movesTaken.push(this.#currentTurn.lastMove);
			if (this.isWin()) {
				this.runtime.callFunction("setWin",this.currentColor.name);
				//this.runtime.callFunction("GameLevelComplete",this.currentColor.name);
				return;
			}
			this.runtime.callFunction("playerFinishedTurn");
			
			
		} else {
			this.startNextTurnStep();
			// If piece can move, we keep it chosen -
			if (this.#currentTurn.canPieceMove(step.movingPiece.index)) {
				this.pieceTouched(step.movingPiece.index);				
			}
		}
	}
	/**
	 * Prepares the scene for the next turn.
	 */
	prepareNextTurn() {
		this.swapTurns();
		this.runtime.callFunction("setTurnText",this.currentColor.name);
		this.#currentTurn = null;			
		this.prepareDices();
	}

	prepareDices() {
		
		if (this.currentPlayer.isComputer) {
			this.runtime.callFunction("rollDices");
		} else {
			this.runtime.callFunction("enableDices");
		}
	}

	isWin() {
		// Check if the current player won.
		return (!this.currentPlayer.hasPieceOnBoard());
	}
	/**
	 * Initiates the next step in the turn.
	 */
	startNextTurnStep() {
		// If its the first turn in the page:
		if (!this.#currentTurn) {
			this.#currentTurn = new Turn(this);
		}
		let pieces = this.#currentTurn.possibleMovingPieces();
		if (pieces.size === 0) {
			this.swapTurns();
			this.runtime.callFunction("noPossibleMoveRollDice", this.currentColor.name);
			this.#currentTurn = null;
			return;
		}

		// If its a computer turn
		if (this.#currentTurn.isComputerTurn()) {
			const computerMove = this.#currentTurn.selectComputerMove();
			this.#movesTaken.push(computerMove);
			this.applyMoveOnBoard(computerMove, true);
			
			this.runtime.callFunction("computerFinishedTurn");
			return;
		}
		// If there's only one piece that can move, we choose it
		if (pieces.size === 1) {
			for (const pieceIndex of pieces) {			
				this.pieceTouched(pieceIndex);
			}
			return;	
		}

		// Lit all possible pieces.
		for (const pieceIndex of pieces) {			
			this.runtime.callFunction("litPiece",pieceIndex);
		}		
	}
	/**
	 * Computer Finished Turn
	 */
	computerFinishedTurn() {
		if (this.isWin()) {
			this.runtime.callFunction("setWin",this.currentColor.name);
			return;
		}
		this.swapTurns();
		this.runtime.callFunction("setTurnText",this.currentColor.name);
		this.#currentTurn = null;
		this.prepareDices();
	}
	/**
	 * Swaps the turns between the players.
	 */
	swapTurns() {
		let temp = this.currentPlayer;
		
		this.runtime.callFunction("SwapTurns");
		this.#currentPlayer = this.#nextPlayer;
		this.#nextPlayer  = temp;		
	}
	/**
	 * @returns {Player} returns the current player.
	 */
	get currentPlayer() {
		return this.#currentPlayer;
	}

	/**
	 * @returns {Player} returns the current player.
	 */
	get nextPlayer() {
		return this.#nextPlayer;
	}

	/**
	 * @param {number} diceOne the result of the first dice.  
	 * @param {number} diceTwo the result of the second dice.
	 * @returns {Array<Move>} returns the possible moves for the current player.
	 */
	getPossibleMoves(diceOne, diceTwo) {		
		let tempResult = [];
		this.#nextMoveIndex = 0;		
		
		let possibleSteps = new Array (diceOne, diceTwo);
		// If its double
		if (diceOne === diceTwo) {
			possibleSteps.push(diceOne, diceTwo);
		}
		
		let currentSteps = [];

		this.buildMoves(tempResult, possibleSteps, currentSteps, diceOne, diceTwo);
		if (tempResult.length === 0) {
			return tempResult;
		}
		return this.removeNotMaxStepsMoves(tempResult);		
	}
	
	
	

	/**
	 * Removes any move that doesn't have max step.
	 * @param {Array<Move>} moves 
	 * @returns {Array<Move>} 
	 */
	removeNotMaxStepsMoves(moves) {
		// Remove steps
		let maxSteps = -1;
		
		for (let i = 0; i < moves.length; i++) {
			let curMove = moves[i];
			if (curMove.steps.length > maxSteps) {
				maxSteps = curMove.steps.length;
			}

		}
		let result = [];
		for (let i = 0; i < moves.length; i++) {
			let curMove = moves[i];
			if (curMove.steps.length === maxSteps) {
				result.push(curMove);
			}
		}

		return result;
	}
	

	
	/**
	 * See rules here - https://www.bkgm.com/rules.html
	 * @param {Array<Move>} result the possible moves.
	 * @param {Array<number>} possibleSteps the reminder possible steps.
	 * @param {Array<Step>} currentSteps the steps already taken.
	 * @param {number} diceOne The first result on the dice
	 * @param {number} diceTwo The second result on the dice
	 * 	 
	 */
	buildMoves(result, possibleSteps, currentSteps, diceOne, diceTwo) {
		if (possibleSteps.length === 0) {
			this.addMoveToResult(result, currentSteps, diceOne, diceTwo);
			return;
		}
		let prevSteps = new Set();
		for (let i = 0; i < possibleSteps.length; i++) {
			let tempStep = possibleSteps[i];
			// If its double, continue.
			if (prevSteps.has(tempStep)) {
				continue;
			}
			prevSteps.add(tempStep);

			// Now we build the next step:
			// If there is a piece on the bar, check if it can make this step:
			const hasPiecesOnBar = this.#currentPlayer.hasPiecesOnBar();
			if (hasPiecesOnBar) {
				
				// The step must be the top piece on the bar, making temp step.
				let step = this.buildStepIfPossible(this.currentColorBarPoint, false, tempStep);
				if (step === null) {					
					continue;
				} else {
					// If we remove a piece from the bar, its considered a valid move even if no further steps are possible (because other pieces are on the bar);					
					currentSteps.push(step);
					this.addMoveToResult(result, currentSteps, diceOne, diceTwo);
					currentSteps.pop();
				}
				this.applyStepOnBoard(step);
				currentSteps.push(step);
				let newPossibleSteps = [... possibleSteps];
				newPossibleSteps.splice(i, 1);								
				this.buildMoves(result, newPossibleSteps, currentSteps, diceOne, diceTwo);
				this.undoStep(step);
				currentSteps.pop();
				continue;
			}			
			const allPiecesHome = this.#currentPlayer.allPiecesAreInHome();

			for (let p = 1; p <= Board.POINTS; p++) {
				let step = this.buildStepIfPossible(p,allPiecesHome, tempStep);
				if (step === null) {
					// We still add the step in case there's no full move possible.
					if (currentSteps.length > 0) {
						this.addMoveToResult(result, currentSteps, diceOne, diceTwo);
					}
					continue;
				}
				this.applyStepOnBoard(step);
				currentSteps.push(step);
				let newPossibleSteps = [... possibleSteps];
				newPossibleSteps.splice(i, 1);								
				this.buildMoves(result, newPossibleSteps, currentSteps, diceOne, diceTwo);
				this.undoStep(step);
				currentSteps.pop();
			}
			
		}		
	}

	/**
	 * Returns a step if its possible.
	 * @param {number} point 
	 * @param {boolean} allPiecesHome 
	 * @param {number} step
	 * @returns {Step | null}
	 */
	buildStepIfPossible(point, allPiecesHome, step) {
		// First, check if the point is empty:
		if (!(this.currentPlayerPoint(point))) {						
			return null;
		}
		
		// Get the piece at the point:
		let curPiece = this.getTopPiece(point);
		if (curPiece === null) {			
			return null;
		}

		let isComingFromBar = this.isBarPoint(point);		

		let positionAfter = curPiece.positionAfterStep(step);
		if (!this.isPointOnBoard(positionAfter)) {
			// Handle case where we leave the board.
			// If there's still pieces that arne't home:
			if (!allPiecesHome) {
				return null;
			}
			// If its the exact number or if there's no pieces at higher positions, we can bear off:
			if ((positionAfter === this.currentColor.pointAfterLast) ||
				(curPiece.distanceFromLastPoint() === this.currentPlayer.maxDistance())) {
					return new Step(curPiece, null, point, this.currentColor.pointAfterLast, step, false, true, false);					
				}
			return null;	
		}				

		// Simple step - moving to an empty or current player point:
		if ((this.isPointEmpty(positionAfter)) || (this.currentPlayerPoint(positionAfter))) {
			return new Step(curPiece, null, point, positionAfter, step, false, false, isComingFromBar);
		}

		// Eating step
		if (this.piecesInPoint(positionAfter) === 1) {
			return new Step(curPiece, this.getTopPiece(positionAfter), point, positionAfter, step, true, false, isComingFromBar);
		}
		
		return null; // The point is full.
	}
	/**
	 * 
	 * @param {Array<Move>} result The array to add the moves to
	 * @param {Array<Step>} currentSteps Array of the moves in the step.
	 * @param {number} diceOne The first result on the dice
	 * @param {number} diceTwo The second result on the dice
	 
	 */
	addMoveToResult(result, currentSteps, diceOne, diceTwo) {
		if (currentSteps.length === 0) {
			return;
		}

		let move = new Move(this.#nextMoveIndex, diceOne, diceTwo);
		for (let i = 0; i < currentSteps.length; i++) {
			// Copy the step
			let curStep = new Step(currentSteps[i].movingPiece, currentSteps[i].secondPiece, currentSteps[i].initialPoint, currentSteps[i].endPoint, currentSteps[i].moveSteps, currentSteps[i].isEatingStep, currentSteps[i].isOutOfBoardStep, currentSteps[i].isBackToBoard);
			move.addStep(curStep);
		}
		result.push(move);
		this.#nextMoveIndex++;
	}
	/**
	 * Applies a certain move on board.
	 * @param {Move} move 
	 * @param {boolean} alsoDraw 
	 */
	applyMoveOnBoard(move, alsoDraw) {
		for (let i = 0; i < move.steps.length; i++) {
			const curStep = move.steps[i];
			
			this.applyStepOnBoard(curStep);
			
			if (alsoDraw) {
				this.drawStepOnBoard(curStep);
				this.#currentTurn.pushStep(curStep);
			}
		}
	}

	/**
	 * Draws a certain move on the board.
	 * @param {Move} move 
	 */
	drawMoveOnBoard(move) {
		for (let i = 0; i < move.steps.length; i++) {
			const curStep = move.steps[i];
			this.drawStepOnBoard(curStep);
		}
	}

	/**
	 * 
	 * Undo a certain move on the board.
	 * @param {Move} move 
	 * @param {boolean} alsoDraw 
	 */
	undoMoveOnBoard(move, alsoDraw) {
		for (let i = move.steps.length; i > 0; i--) {
			const curStep = move.steps[i - 1];
			this.undoStep(curStep);			
			if (alsoDraw) {
				this.undoDrawStepOnBoard(curStep);
			}
		}
	}
	

	
	/**
	 * 
	 * @param {Step} step the step to apply on the board.
	 */
	applyStepOnBoard(step) {
		
		if(step){
		
		// If we're eating a piece, place the other piece on bar.
		if (step.isEatingStep) {
			this.popTopPiece(step.endPoint);
			if (step.secondPiece != null) {
				this.addPieceToBar(step.secondPiece);
				
								
			}
		}
		// Remove the piece from the existing point. This also removes it if its on the bar.
		this.popTopPiece(step.initialPoint);		
		// Put the piece on the final point.
		if (!step.isOutOfBoardStep) {			
			
			this.addPieceToPoint(step.endPoint, step.movingPiece);
			step.movingPiece.updatePosition(step.endPoint);
			if (step.isBackToBoard) {
				this.removePieceFromBar(step.movingPiece, false);				
			}

			
		} else { // Removes the piece from the board.
			step.movingPiece.removeFromBoard();
		}
		
		
		}
		
	}

	/**
	 * Undo the step on the board.
	 * @param {Step} step 
	 */
	undoStep(step) {
		// Return the piece to initial position.
		step.movingPiece.updatePosition(step.initialPoint);
		this.addPieceToPoint(step.initialPoint, step.movingPiece);
		// If it was out of board - put it back on board.
		if (step.isOutOfBoardStep) {
			
			step.movingPiece.returnToBoard();
		} else {
			this.popTopPiece(step.endPoint);
		}
		// If it was out of bar - put it back on bar.
		if (step.isBackToBoard) {
			step.movingPiece.placeOnBar();
		}
		// If it was an eating move - uneat
		if (step.isEatingStep) {
			if (step.secondPiece != null) {
				this.removePieceFromBar(step.secondPiece, true);
				step.secondPiece.updatePosition(step.endPoint);
				this.addPieceToPoint(step.endPoint, step.secondPiece);
				
				
				
			}
		}

	}
	
	
	

	/**
	 * draws the changes as result of the step on the board.
	 * @param {Step} step 
	 */
	drawStepOnBoard(step) {
	
		
		if(step){
		
		// If piece goes out of board
		if (step.isOutOfBoardStep) {
			this.runtime.callFunction("removePieceFromBoard",step.movingPiece.index , step.movingPiece.color.name , this.#currentTurn.currentStepInMove);
			return;
		}

		// Move the piece to final column
		this.runtime.callFunction("movePieceToPosition",step.movingPiece.index, step.movingPiece.position, this.piecesInPoint(step.movingPiece.position) - 1, this.#currentTurn.isComputerTurn(), this.#currentTurn.currentStepInMove);

		// if its a computer turn, lit the columns
		if (this.#currentTurn.isComputerTurn())	{
			//this.runtime.callFunction("litCol",step.initialPoint ,true);
			
		}	
		
		// If its an eating move
		if (step.isEatingStep) {
			
			if(!this.#currentTurn.isComputerTurn()){
			
			this.runtime.callFunction("IncreamentPieceEatCounter");
			}
			
			if (step.secondPiece != null) {
				this.runtime.callFunction("movePieceToPosition",step.secondPiece.index, step.secondPiece.position, this.piecesInPoint(step.secondPiece.position) - 1,this.#currentTurn.isComputerTurn(), this.#currentTurn.currentStepInMove);
												}
			}
		}
	
	}
	

	/**
	 * undo the changes as a result of the step on the board.
	 * @param {Step} step 
	 */
	undoDrawStepOnBoard(step) {
	
		// Move the piece to initial column
		this.runtime.callFunction("movePieceToPosition",step.movingPiece.index, step.movingPiece.position, this.piecesInPoint(step.movingPiece.position) - 1, true, 0);
		// If its an eating move
		if (step.isEatingStep) {
			if (step.secondPiece != null) {
				this.runtime.callFunction("movePieceToPosition",step.secondPiece.index, step.secondPiece.position, this.piecesInPoint(step.secondPiece.position) - 1, true, 0);	
				
			if(step.isOutOfBoardStep){
			//this.runtime.callFunction("DecrementOutOfBoardPieces" , step.movingPiece.color.name);	
			}
			
			//remove 1 from the Eaten Counter
				if(this.currentPlayer.isComputer === false){
				this.runtime.callFunction("DecrementPieceEatCounter");
				}
			}
		}
	}

	/**
	 * Places the given piece in the bar.
	 * @param {Piece} piece 
	 */
	addPieceToBar(piece) {
		piece.placeOnBar();
		piece.updatePositionToBar();
		this.getPoint(piece.color.barPoint).push(piece);
	}

	
	/**
	 * Returns an array of all points where there is a single piece of the given color.
	 * @param {Color} color 	 
	 * @returns {Array<number>} Returns the number of single point per color.
	 */
	singlePiecePoints(color) {
		let result = [];
		for (let i = 1; i <= Board.POINTS; i++) {
			if (this.getColorInPoint(i) === color) {
				if (this.onePieceInPoint(i)) {
					result.push(i);
				}
			}
		}
		return result;
	}

	/**
	 * Returns the number of single points that can't be threatened.
	 * @param {Array<Number>} singlePoints array of all single points.
	 * @param {number} minDistance the minimum distance for the point to be threatened.
	 * @returns {number} number of single point that can't be threatened.
	 */
	singlePointNotThreaten(singlePoints, minDistance) {
		let result = 0;
		for (let i = 0; i < singlePoints.length; i++) {
			const curPoint = singlePoints[i];
			const piece = this.getTopPiece(i);
			if (piece === null) {
				continue;
			}
			if (piece.distanceFromLastPoint() < minDistance) {
				result += 1;
			}
		}
		return result;
	}
	/**
	 * Removes the given piece from the bar.	 
	 * @param {Piece} piece 
	 * @param {boolean} popPieceFromPoint Whether to also pop the piece from the point.
	 */
	removePieceFromBar(piece, popPieceFromPoint) {
		if (popPieceFromPoint) {
			this.popTopPiece(piece.color.barPoint);
		}
		piece.removeFromBar();
	}
	/**
	 * returns the color in a given point.
	 * @param {number} point 
	 * @returns {Color | null}
	 */
	getColorInPoint(point) {
		if (this.isPointEmpty(point)) {
			return null;
		}

		return this.getPoint(point)[0].color;
	}

	/**
	 * Whether the point has at least one piece of the current color.
	 * @param {number} point 
	 */
	currentPlayerPoint(point) {
		if (this.isPointEmpty(point)) {			
			return false;
		}

		const topPiece = this.getTopPiece(point);

		if (topPiece === null) {
			return false;
		}

		return (topPiece.color === this.#currentPlayer.color);
	
	}

	/**
	 * Adds the given piece to a point.
	 * @param {number} point 
	 * @param {Piece} Piece 
	 */
	addPieceToPoint(point, Piece) {
		this.getPoint(point).push(Piece);
	}

	/**
	 * 
	 * @param {number} point 
	 * @returns {Piece | null} returns the top element of the 
	 */
	popTopPiece(point) {
				
		const curPoint = this.getPoint(point);
		
		const topItem =  curPoint.pop();
		if (topItem === undefined) {
			return null;
		}
		return topItem;
	}

	/**
	 * 
	 * @param {number} point
	 * @returns {Piece | null} Returns the top piece of a given point.
	 */
	getTopPiece(point) {
		if (this.isPointEmpty(point)) {
			return null;
		}

		const curPoint = this.getPoint(point);
		return curPoint[curPoint.length - 1];
	}

	/**
	 * 
	 * @param {number} point 
	 * @returns {boolean} Whether a given point is empty.
	 */
	isPointEmpty(point) {
		return (this.piecesInPoint(point) === 0);
	}

	/**
	 * 
	 * @param {number} point 
	 * @returns {boolean} Whethere there's exactly one piece in the point.
	 */
	onePieceInPoint(point) {
		return (this.piecesInPoint(point) === 1);
	}	

	/**
	 * 
	 * @param {number} point 
	 * @returns {boolean} Whethere there's at least two pieces in the point.
	 */
	isPointFull(point) {
		return (this.piecesInPoint(point) > 1);
	}

	/**
	 * 
	 * @param {number} point 
	 * @returns {boolean} Whether the point is on the board.
	 */
	isPointOnBoard(point) {
		if (point > Board.POINTS) {
			return false;
		}
		if (point < 1) {
			return false;
		}

		return true;
	}

	/**
	 * 
	 * @param {number} point 
	 * @returns {number} Numbers of pieces in the point.
	 */
	piecesInPoint(point) {
		return (this.#points[point].length);
	}

	/**
	 * returns the array of pieces in a point on a given index.
	 * @param {number} point 
	 * @returns {Array<Piece>} returns an array of pieces.
	 */
	getPoint(point) {
		return this.#points[point];
	}
	
	/**
	 * returns the color of the current player.
	 * @returns {Color} returns an array of pieces.
	 */
	get currentColor() {
		return this.#currentPlayer.color;
	}
	/**
	 * returns the color of the next player.
	 * @returns {Color} returns an array of pieces.
	 */
	get nextColor() {
		return this.#nextPlayer.color;
	}

		/**
	 * returns the color of the current player.
	 * @returns {number} returns an array of pieces.
	 */
	get currentColorBarPoint() {
		return this.currentColor.barPoint;
	}
	
	
	/**
	 * 
	 * @param {number} point 
	 * @returns {boolean} Whether its a bar point.
	 */
	isBarPoint(point) {
		return (point === this.currentColorBarPoint);
	}

	/**
	 * @returns {number} the result of the first dice.
	 */
	get dice1Result() {
		return this.runtime.globalVars.dice1;
	}

	/**
	 * @returns {number} the result of the second dice.
	 */
	get dice2Result() {
		return this.runtime.globalVars.dice2;
	}

	/**
	 * @returns {number} the level the computer is playing.
	 */
	get computerLevel() {
		return this.#computerLevel;
	}
}
