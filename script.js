var player = "X"; //start the game with X
var squares = [null, null, null, null, null, null, null, null, null];
var clickedDifferentSquares = 0;

const playerStatus = document.getElementById("playerStatus");
playerStatus.innerHTML = "Player " + player + "'s turn";

function clickSquare(idSquare) {
    if (squares[idSquare] == null) {
        ++clickedDifferentSquares;

        document.getElementById(idSquare).innerHTML = player; //add the sign on the square
        squares[idSquare] = player; //save the sign in the array

        changeTurn();

        if (clickedDifferentSquares >= 5) { //can be a winner only after at least 5 signs (X and 0)
            checkWinner();
        }
    }
}

function changeTurn() {
    if (player == "X") {
        player = "0";
    } else {
        player = "X";
    }
    displayTurn();
}

function displayTurn() {
    playerStatus.innerHTML = "Player " + player + "'s turn";
}

function checkWinner() {
    if (checkCells(squares[0], squares[1], squares[2]) || checkCells(squares[3], squares[4], squares[5]) || checkCells(squares[6], squares[7], squares[8])
        || checkCells(squares[0], squares[3], squares[6]) || checkCells(squares[1], squares[4], squares[7]) || checkCells(squares[2], squares[5], squares[8])
        || checkCells(squares[0], squares[4], squares[8]) || checkCells(squares[2], squares[4], squares[6])) {
        for (let i = 0; i < 9; ++i) { //when we have a winner, there can still be empty squares so we change all squares value
            squares[i] = "#"; //with anything, just to don't be null anymore
        }
    } else if (clickedDifferentSquares == 9) {
        playerStatus.innerHTML = "Tie.";
    }
}

function checkCells(a, b, c) {
    if (a == b && b == c && c != null) {
        playerStatus.innerHTML = a + " won!";
        return true;
    }
}
