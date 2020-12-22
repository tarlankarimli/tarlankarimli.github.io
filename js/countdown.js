export const timer = document.querySelector('.countdown');
export const showGameOver =document.querySelector('.game-over');
const startGame = document.querySelector('.btn-game-over');
let refreshCountDown = false;
let givenTime = 30;

//  given time for per question
 export const countdown = () => {
     timer.style.display = 'block';
    refreshCountDown =false
    const setCountdown = setInterval(() => {
        givenTime--;
        givenTime === 0 || refreshCountDown ===true ? clearInterval(setCountdown) : null;
        showCountdown(givenTime)
    }, 1000);
}
//  show countdown or display game over
const showCountdown = (givenTime) => {
    timer.textContent = '';
    const span = document.createElement('span');
    (givenTime > 0) ? span.textContent = givenTime : gameOver(1000);
    timer.appendChild(span);
}
//  refresh countdown and made it invisible
export const stopCountdown = () => {
    timer.style.display = 'none';
    givenTime = 30;
    refreshCountDown = true;
}
// display game over and offer you to start new game
export const gameOver = (seconds) => {
    setTimeout(() => {
        showGameOver.style.display = 'flex';
    }, seconds);
    startGame.addEventListener('click', ()=> {
        location.reload()
    })
}


