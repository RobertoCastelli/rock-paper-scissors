function computerSelection() {
    const computerOption = ['rock', 'paper', 'scissors'];
    const computerNumber = Math.floor(Math.random() * 3);
    computerChoice = computerOption[computerNumber];
    imgLeft.src = `img/${computerChoice}.png`;
};

function checkHands() {
    if (playerChoice == computerChoice) {
        message.innerHTML = 'TIE - try again';
    } else if ( playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper') {
        message.innerHTML = 'You WIN - try again';
        scoreR++;
    } else {
        message.innerHTML = 'You LOSE - try again';
        scoreL++;
    }
};

function updateScore() {
    scoreRight.innerHTML = scoreR;
    scoreLeft.innerHTML = scoreL;
};

function endGame() {
    if (scoreL == 3) {
        message.innerHTML = 'Computer WINS';
        disableButtons(true);
        setTimeout(() => {
            init();
        }, 3000);
    } else if (scoreR == 3) {
        message.innerHTML = 'Player WINS';
        disableButtons(true);
        setTimeout(() => {
            init();
        }, 3000);
    }
};

function init() {
    imgLeft.src = 'img/rock.png';
    imgRight.src = 'img/rock.png';
    message.innerHTML = 'choose your play'
    scoreL = 0;
    scoreR = 0;
    updateScore();
    disableButtons(false);
};   

function disableButtons(bool) {
    buttons.forEach(button => button.disabled = bool);
};

function count() {
    hands.forEach(hand => hand.classList.add('shaker'));
    imgLeft.src = 'img/rock.png';
    imgRight.src = 'img/rock.png';
    disableButtons(true);
};

function stopCount() {
    hands.forEach(hand => hand.classList.remove('shaker'));
    disableButtons(false);
};