let btnRock = document.getElementById('btnRock');
let btnPaper = document.getElementById('btnPaper');
let btnScissors = document.getElementById('btnScissors');
let imgRight = document.getElementById('img_right');
let imgLeft = document.getElementById('img_left');

btnRock.addEventListener('click', () => {
    imgRight.src = 'img/rock.png'
});
btnPaper.addEventListener('click', () => {
    imgRight.src = 'img/paper.jpg'
});
btnScissors.addEventListener('click', () => {
    imgRight.src = 'img/scissors.jpg'
});