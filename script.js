var player = "X"; //incepem jocul cu X
document.getElementById("playerStatus").innerHTML = "Player " + player + "'s turn";
var pressedSquares = 0; //ma va ajuta sa aflu daca va fi remiza
var squares = [null, null, null, null, null, null, null, null, null]; //salvez X sau 0 in sirul meu de nr., pe pozitia pusa de jucator pe tabla de joc

function square(nrSquare) {
    if (squares[nrSquare] == null) { //daca nu a mai fost patratul apasat
        document.getElementById(nrSquare).innerHTML = player; //scriu semnul pe patratul apasat
        squares[nrSquare] = player; //salvez semnul pe pozitia apasata 
        ++pressedSquares; //patrate apasate in total
        changeTurn();
        displayTurn();
        if (pressedSquares >= 5) { //poate exista un castigator, cand sunt minim 5 semne pe tabla (adica X-uri si 0-uri)
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
}

function displayTurn() {
    document.getElementById("playerStatus").innerHTML = "Player " + player + "'s turn";
}

function checkWinner() {
    if (checkCells(squares[0], squares[1], squares[2]) || checkCells(squares[3], squares[4], squares[5]) || checkCells(squares[6], squares[7], squares[8]) ||
        checkCells(squares[0], squares[3], squares[6]) || checkCells(squares[1], squares[4], squares[7]) || checkCells(squares[2], squares[5], squares[8]) ||
        checkCells(squares[0], squares[4], squares[8]) || checkCells(squares[2], squares[4], squares[6])) {
        for (var i = 0; i < 9; ++i) { //cand avem un castigator, mai pot fi patrate goale, astfel le marcam si pe acestea fiind apasate
            squares[i] = "1"; //cu orice semn, nu conteaza, doar sa nu fie "null"
        }
    } else if (pressedSquares == 9) {
        document.getElementById("playerStatus").innerHTML = "Tie.";
    }
}

function checkCells(a, b, c) {
    if (a == b && b == c && c != null) { //null, ca sa nu luam si liniile cu patrate goale
        document.getElementById("playerStatus").innerHTML = a + " won!";
        return true; //ne intoarcem in instructiunile din if
    }
}
