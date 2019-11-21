function computerChoice() {
    computerNumber = Math.floor(Math.random() * 3);
    imgLeft.src = imageArray[computerNumber]
};

function score() {
    if (playerChoice == imageArray[computerNumber]) {
        message.innerHTML = 'TIE! - try again';
    } else if (playerChoice == rock && computerNumber == 2 || playerChoice == paper && computerNumber == 0 || playerChoice == scissors && computerNumber == 1) {
        message.innerHTML = 'YOU WIN! - try again';
        scoreR++
        scoreRight.innerHTML = scoreR;
    } else {
        message.innerHTML = 'YOU LOSE! - try again';
        scoreL++
        scoreLeft.innerHTML = scoreL;
    }
};

function endGame() {
    if (scoreL == 3 || scoreR == 3) {
        btnPaper.disabled = true;
        btnRock.disabled = true;
        btnScissors.disabled = true;
        message.innerHTML = 'GAME OVER';
        setTimeout(() => {
            message.innerHTML = `the score is: Computer ${scoreL} - Player ${scoreR}`
        }, 2000);
        setTimeout(() => {
            window.location.reload();
        }, 4000);
    }
};

function countdown() {
    let n = 3;
    count();
    function count() {
        imgLeft.classList.add('mover');
        imgRight.classList.add('mover');
        imgRight.src = 'img/right-hand.png';
        imgLeft.src = 'img/left-hand.png';
        message.innerHTML = n;
        if (n == 0) {
            computerChoice();
            score();
            endGame();
            imgLeft.classList.remove('mover');
            imgRight.classList.remove('mover');
        } else {
            n -= 1;
            setTimeout(count, 1000);
        }
    }
};

function disableButtons(bool) {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = bool;
    }
}

