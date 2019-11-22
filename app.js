/**
 * TODO
 * animation
 * sounds
 * starting image
 */

let btnRock = document.getElementById('btnRock');
let btnPaper = document.getElementById('btnPaper');
let btnScissors = document.getElementById('btnScissors');
let imgRight = document.getElementById('img_right');
let imgLeft = document.getElementById('img_left');
let message = document.getElementById('game_message');
let scoreLeft = document.getElementById('score_left');
let scoreRight = document.getElementById('score_right');
let buttons = document.getElementsByTagName('button');

let rock = 'img/rock.png';
let paper = 'img/paper.png';
let scissors = 'img/scissors.png';

let computerNumber;
let playerChoice;
let imageArray = [rock, paper, scissors];

let scoreL = 0;
let scoreR = 0;

imgLeft.src = 'img/left-hand.png';
imgRight.src = 'img/right-hand.png';

btnRock.addEventListener('click', () => {
    countdown();
    disableButtons(true);
    setTimeout(() => {
        playerChoice = rock;
        imgRight.src = rock;
        disableButtons(false);
    }, 3050);
});

btnPaper.addEventListener('click', () => {
    countdown();
    disableButtons(true);
    setTimeout(() => {
        playerChoice = paper;
        imgRight.src = paper;
        disableButtons(false);
    }, 3050);
});

btnScissors.addEventListener('click', () => {
    countdown();
    disableButtons(true);
    setTimeout(() => {
        playerChoice = scissors;
        imgRight.src = scissors;
        disableButtons(false);
    }, 3050);
});

