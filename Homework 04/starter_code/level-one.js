//  DOTS: Level One

let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');


//  When ball is clicked, a score of 10 is added
ballEl.addEventListener('click', 
function(){
score += 10;
});


// When the score reaches 100, the game declares a winner
if ( score < 100 ) {
  scoreEl.innerText = score;
} else {
  declareWinner();
};

// The screen asks the user to click to proceed to next level

function declareWinner() {
  document.body.classList.add('game-over');
}




