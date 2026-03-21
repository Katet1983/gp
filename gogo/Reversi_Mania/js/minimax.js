/**
 * Minimax algorithm with Alpha-Beta pruning for reversi AI
 */

var ROWS = 8;
var COLS = 8;
var EMPTY = 0;
var BLACK = 1;
var WHITE = -1;
var WINNING_SCORE = 1000000;

var n = [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1]
];

var wT = [ // weight table for AI score
    [20, -3, 11, 8, 8, 11, -3, 20],
    [-3, -7, -4, 1, 1, -4, -7, -3],
    [11, -4, 2, 2, 2, 2, -4, 11],
    [8, 1, 2, -3, -3, 2, 1, 8],
    [8, 1, 2, -3, -3, 2, 1, 8],
    [11, -4, 2, 2, 2, 2, -4, 11],
    [-3, -7, -4, 1, 1, -4, -7, -3],
    [20, -3, 11, 8, 8, 11, -3, 20]
];

var aiColor, playerColor, difficulty;

// returns array of objects with row and col
function getValidMoves (board, myColor) {
    var oppColor = myColor === BLACK ? WHITE : BLACK;
    var validMoves = [], validPositions = [], val = EMPTY;
    var row, col, r, c;

    for (row = 0; row < ROWS; row++) {
        validPositions[row] = [];
        for (col = 0; col < COLS; col++)
            validPositions[row][col] = false;
    }

    for (row = 0; row < ROWS; row++) {
        for (col = 0; col < COLS; col++) {
            val = board[row][col];

            if (val !== myColor)
                continue;

            for (var i = 0; i < 8; i++) {
                r = n[i][1] + row;
                c = n[i][0] + col;

                if (r < 0 || r >= 8 || c < 0 || c >= 8)
                    continue;

                // valid neighbor is visible (non 0) and has opponent color
                if (board[r][c] === oppColor) {
                    checkMoveInDirection(board, validPositions, r, c, row, col, oppColor);
                }
            }
        }
    }

    // set new valid positions
    for (row = 0; row < ROWS; row++)
        for (col = 0; col < COLS; col++)
            if (validPositions[row][col])
                validMoves.push({row: row, col: col});

    return validMoves;
}

// check direction and mark valid position in board
function checkMoveInDirection (board, validPositions, neighborR, neighborC, cellR, cellC, oppColor) {
    var r = neighborR, c = neighborC;
    var diffR = r - cellR, diffC = c - cellC;

    while (r >= 0 && r < 8 && c >= 0 && c < 8) {
        if (board[r][c] === oppColor) {
            r += diffR;
            c += diffC;
        } else {
            if (board[r][c] === EMPTY)
                validPositions[r][c] = true;
            break;
        }
    }
}

// returns score for board
// myColor must be: maximizingPlayer ? playerColor : aiColor; for even difficulty
// myColor must be: maximizingPlayer ? aiColor : playerColor; for odd difficulty
function getScore (board, movesLength, maximizingPlayer) {
    var myColor;

    if (difficulty % 2)
        myColor = maximizingPlayer ? playerColor : aiColor;
    else
        myColor = maximizingPlayer ? aiColor : playerColor;

    var oppColor = myColor === BLACK ? WHITE : BLACK;

    var p, o, l, m, f, d = 0, row, col, i, r, c;
    var myTiles = 0, oppTiles = 0, myFrontTiles = 0, oppFrontTiles = 0;

    // Piece difference, frontier disks and disk squares
    for (row = 0; row < ROWS; row++) {
        for (col = 0; col < COLS; col++) {
            if (board[row][col] === myColor) {
                d += wT[row][col];
                myTiles++;
            } else if (board[row][col] === oppColor) {
                d -= wT[row][col];
                oppTiles++;
            } else {
                for (i = 0; i < 8; i++) {
                    r = n[i][1] + row;
                    c = n[i][0] + col;

                    if (r < 0 || r >= 8 || c < 0 || c >= 8)
                        continue;

                    if (board[r][c] === EMPTY) {
                        if (board[row][col] === myColor)
                            myFrontTiles++;
                        else
                            oppFrontTiles++;
                        break;
                    }
                }
            }
        }
    }

    if (myTiles > oppTiles)
        p = Math.floor((100 * myTiles) / (myTiles + oppTiles));
    else if (myTiles < oppTiles)
        p = -Math.floor((100 * oppTiles) / (myTiles + oppTiles));
    else
        p = 0;

    if (myFrontTiles > oppFrontTiles)
        f = -Math.floor((100 * myFrontTiles) / (myFrontTiles + oppFrontTiles));
    else if (myFrontTiles < oppFrontTiles)
        f = Math.floor((100 * oppFrontTiles) / (myFrontTiles + oppFrontTiles));
    else
        f = 0;

    // Corner occupancy
    myTiles = oppTiles = 0;
    if (board[0][0] === myColor) myTiles++;
    else if (board[0][0] === oppColor) oppTiles++;
    if (board[0][7] === myColor) myTiles++;
    else if (board[0][7] === oppColor) oppTiles++;
    if (board[7][0] === myColor) myTiles++;
    else if (board[7][0] === oppColor) oppTiles++;
    if (board[7][7] === myColor) myTiles++;
    else if (board[7][7] === oppColor) oppTiles++;
    o = 25 * (myTiles - oppTiles);

    // Corner closeness
    myTiles = oppTiles = 0;
    if (board[0][0] === EMPTY) {
        if (board[0][1] === myColor) myTiles++;
        else if (board[0][1] === oppColor) oppTiles++;
        if (board[1][1] === myColor) myTiles++;
        else if (board[1][1] === oppColor) oppTiles++;
        if (board[1][0] === myColor) myTiles++;
        else if (board[1][0] === oppColor) oppTiles++;
    }
    if (board[0][7] === EMPTY) {
        if (board[0][6] === myColor) myTiles++;
        else if (board[0][6] === oppColor) oppTiles++;
        if (board[1][6] === myColor) myTiles++;
        else if (board[1][6] === oppColor) oppTiles++;
        if (board[1][7] === myColor) myTiles++;
        else if (board[1][7] === oppColor) oppTiles++;
    }
    if (board[7][0] === EMPTY) {
        if (board[7][1] === myColor) myTiles++;
        else if (board[7][1] === oppColor) oppTiles++;
        if (board[6][1] === myColor) myTiles++;
        else if (board[6][1] === oppColor) oppTiles++;
        if (board[6][0] === myColor) myTiles++;
        else if (board[6][0] === oppColor) oppTiles++;
    }
    if (board[7][7] === EMPTY) {
        if (board[6][7] === myColor) myTiles++;
        else if (board[6][7] === oppColor) oppTiles++;
        if (board[6][6] === myColor) myTiles++;
        else if (board[6][6] === oppColor) oppTiles++;
        if (board[7][6] === myColor) myTiles++;
        else if (board[7][6] === oppColor) oppTiles++;
    }
    l = -12 * (myTiles - oppTiles);

    // Mobility
    myTiles = movesLength;
    oppTiles = getValidMoves(board, oppColor).length;
    if (myTiles > oppTiles)
        m = Math.floor((100 * myTiles) / (myTiles + oppTiles));
    else if (myTiles < oppTiles)
        m = -Math.floor((100 * oppTiles) / (myTiles + oppTiles));
    else
        m = 0;

    switch (difficulty) {
        case 2: // easy
            o = 0; l = 0; m = 0; f = 0; d = 0;
            break;
        case 3:
            o = 0; l = 0; m = 0; f = 0;
            break;
        case 4:
            o = 0; l = 0;
            break;
        case 5: // extreme
            break;
    }

    return (10 * p) + (800 * o) + (350 * l) + (80 * m) + (75 * f) + (10 * d);
}

// returns changed board
function boardPlaceMove (board, color, row, col) {
    var oppColor = color === BLACK ? WHITE : BLACK;
    var newBoard = [], i, r, c;

    for (i = 0; i < 8; i++)
        newBoard[i] = board[i].slice();

    newBoard[row][col] = color;

    for (i = 0; i < 8; i++) {
        r = n[i][1] + row;
        c = n[i][0] + col;

        if (r < 0 || r >= 8 || c < 0 || c >= 8)
            continue;

        if (newBoard[r][c] === oppColor)
            switchCellsInDirection(newBoard, r, c, row, col);
    }

    return newBoard;
}

// flips cells in direction for AI board
function switchCellsInDirection (board, neighborR, neighborC, cellR, cellC) {
    var r = neighborR, c = neighborC;
    var diffR = r - cellR, diffC = c - cellC;
    var t = board[cellR][cellC], i;
    var cells = [], flip = false;

    while (r >= 0 && r < 8 && c >= 0 && c < 8) {
        if (board[r][c]) {
            if (board[r][c] !== t) {
                cells.push({row: r, col: c});
                r += diffR;
                c += diffC;
            } else {
                flip = true;
                break;
            }
        } else
            break;
    }

    if (flip)
        for (i = 0; i < cells.length; i++)
            board[cells[i].row][cells[i].col] = t;
}

function minimaxAlphabeta (board, depth, minScore, maxScore, maximizingPlayer) {
    var color = maximizingPlayer ? aiColor : playerColor;
    var validMoves = getValidMoves(board, color);
    var l = validMoves.length, i, node, nextMove;
    var currentScore = getScore(board, l, maximizingPlayer);

    if (depth === 0 || l === 0 || currentScore <= -WINNING_SCORE || currentScore >= WINNING_SCORE)
        return {row: -1, col: -1, score: currentScore};

    var nodes = []; // next possible board states

    //Check all possible moves
    for (i = 0; i < l; i++)
        nodes[i] = boardPlaceMove(board, color, validMoves[i].row, validMoves[i].col);

    if (maximizingPlayer) {
        node = {row: -1, col: -1, score: -WINNING_SCORE};
        for (i = 0; i < nodes.length; i++) {
            nextMove = minimaxAlphabeta(nodes[i], depth - 1, minScore, maxScore, false);
            if (nextMove.score > node.score || node.row === -1 || node.col === -1) {
                node.row = validMoves[i].row;
                node.col = validMoves[i].col;
                node.score = nextMove.score;
            }
            minScore = Math.max(minScore, node.score);
            if (minScore >= maxScore)
                break; //(* b cut-off *)
        }
        return node;
    } else {
        node = {row: -1, col: -1, score: WINNING_SCORE};
        for (i = 0; i < nodes.length; i++) {
            nextMove = minimaxAlphabeta(nodes[i], depth - 1, minScore, maxScore, true);
            if (nextMove.score < node.score || node.row === -1 || node.col === -1) {
                node.row = validMoves[i].row;
                node.col = validMoves[i].col;
                node.score = nextMove.score;
            }
            maxScore = Math.min(maxScore, node.score);
            if (minScore >= maxScore)
                break; //(* a cut-off *)
        }
        return node;
    }
}

self.onmessage = function (e) {
    console.log('Worker: Message received');
    aiColor = e.data.aiColor;
    playerColor = e.data.playerColor;
    difficulty = e.data.difficulty;
    var nextMove = minimaxAlphabeta(e.data.board, difficulty, -WINNING_SCORE, WINNING_SCORE, true);
    postMessage(nextMove);
};