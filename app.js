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

imgLeft.src = 'img/hands.jpg';
imgRight.src = 'img/hands.jpg';

btnRock.addEventListener('click', () => {
    disableButtons(true);
    setTimeout(() => {
        playerChoice = rock;
        imgRight.src = rock;
        disableButtons(false);
    }, 3000);
    countdown();
});

btnPaper.addEventListener('click', () => {
    disableButtons(true);
    setTimeout(() => {
        playerChoice = paper;
        imgRight.src = paper;
        disableButtons(false);
    }, 3000);
    countdown();
});

btnScissors.addEventListener('click', () => {
    disableButtons(true);
    setTimeout(() => {
        playerChoice = scissors;
        imgRight.src = scissors;
        disableButtons(false);
    }, 3000);
    countdown();
});

