var player = "X"; //incepem jocul cu X
document.getElementById("playerStatus").innerHTML = "Player " + player + "'s turn";
var pressedSquares = 0; //ma va ajuta sa aflu daca va fi remiza
var squares = []; //salvez X si 0, in sirul meu de nr., pe pozitia pusa de jucator pe tabla de joc

function square(nrSquare) {
    document.getElementById(nrSquare).innerHTML = player; //scriu X sau 0 pe patratul apasat
    squares[nrSquare] = player; //salvez semnul (X sau 0) pe pozitia apasata 
    ++pressedSquares; //patrate apasate in total
    changeTurn();
    displayTurn();
    if (pressedSquares >= 5) { //poate exista un castigator, cand sunt minim 5 semne pe tabla (adica X-uri si 0-uri)
        checkWinner();
    }
}

function changeTurn() {
    if (player == "X") {
        player = "0";
    } else {
        player = "X";
    }
}

function displayTurn() {
    document.getElementById("playerStatus").innerHTML = "Player " + player + "'s turn";
}

function checkWinner() {
    checkLine(squares[0], squares[1], squares[2]); /*orizontale*/
    checkLine(squares[3], squares[4], squares[5]); /*o*/
    checkLine(squares[6], squares[7], squares[8]); /*o*/
    checkLine(squares[0], squares[3], squares[6]); /*verticale*/
    checkLine(squares[1], squares[4], squares[7]); /*v*/
    checkLine(squares[2], squares[5], squares[8]); /*v*/
    checkLine(squares[0], squares[4], squares[8]); /*diagonale*/
    checkLine(squares[2], squares[4], squares[6]); /*d*/
    if (pressedSquares == 9) {
        document.getElementById("playerStatus").innerHTML = "Tie.";
    }
}

function checkLine(a, b, c) {
    if (a == b && b == c && c != undefined) { //undefined, ca sa nu luam si patratele goale
        document.getElementById("playerStatus").innerHTML = a + " won!";
    }
}