let imgRight = document.getElementById('img_right');
let imgLeft = document.getElementById('img_left');
let message = document.getElementById('game_message');
let scoreLeft = document.getElementById('score_left');
let scoreRight = document.getElementById('score_right');
let buttons = document.querySelectorAll('.buttons button');
let hands = document.querySelectorAll('.hands img');
let playerChoice;
let computeChoice;


init();

buttons.forEach(choice => {
    choice.addEventListener('click', (event) => {
        count();
        setTimeout(() => {
            playerChoice = event.target.textContent;
            imgRight.src = `img/${playerChoice}.png`;
            computerSelection();
            checkHands();
            updateScore();
            stopCount();
            endGame();
        }, 3000);
    })
});

