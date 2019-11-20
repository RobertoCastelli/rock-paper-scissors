function computerChoice() {
    computerNumber = Math.floor( Math.random() * 3 );
    imgLeft.src = imageArray[computerNumber]
}

function score() {
    if (playerNumber == computerNumber) {
        message.innerHTML = 'TIE!';
    } else if ( playerNumber == 0 && computerNumber == 2 || playerNumber == 1 && computerNumber == 0) {
        message.innerHTML = 'YOU WIN!';
        scoreR++
        scoreRight.innerHTML = scoreR;
        } else {
        message.innerHTML = 'YOU LOSE!';
        scoreL++
        scoreLeft.innerHTML = scoreL;
    }
}

function endGame() {
    if ( scoreL == 10 || scoreR == 10) {
        message.innerHTML = 'GAME OVER';
        setTimeout(() => {
            message.innerHTML = `the score is: Computer ${scoreL} - Player ${scoreR}`
        }, 2000);
        setTimeout(() => {
            window.location.reload();
        }, 4000);
    }
}