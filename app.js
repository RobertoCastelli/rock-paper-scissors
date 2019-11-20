/**
 * TODO
 * countdown
 * animation
 * sounds
 * starting image
 * disable buttons at 10
 */

let btnRock = document.getElementById('btnRock');
let btnPaper = document.getElementById('btnPaper');
let btnScissors = document.getElementById('btnScissors');
let imgRight = document.getElementById('img_right');
let imgLeft = document.getElementById('img_left');
let message = document.getElementById('game_message');
let scoreLeft = document.getElementById('score_left');
let scoreRight = document.getElementById('score_right');

let rock = 'img/rock.png';
let paper = 'img/paper.png';
let scissors = 'img/scissors.png';

let computerNumber;
let playerNumber;
let imageArray = [rock, paper, scissors];

let scoreL = 0;
let scoreR = 0;

btnRock.addEventListener('click', () => {
    imgRight.src = rock;
    playerNumber = 0;
    computerChoice();
    score();
    endGame();
});
btnPaper.addEventListener('click', () => {
    imgRight.src = paper;
    playerNumber = 1;
    computerChoice();
    score();
    endGame();
});
btnScissors.addEventListener('click', () => {
    imgRight.src = scissors;
    playerNumber = 2;
    computerChoice();
    score();
    endGame();
});

