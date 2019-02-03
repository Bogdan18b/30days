const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const start = document.querySelector('.start');
const bestScore = document.querySelector('.best-score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
let best = 0;
bestScore.textContent = best;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomHoles(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHoles(holes);
  }
  lastHole = hole;
  return hole;
}
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHoles(holes);
  console.log({ time, hole })
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(gameOver, 3000);
}
function gameOver() {
  timeUp = true;
  best = Math.max(best, score);
  bestScore.textContent = best;
}
function hit(e) {
  if (!e.isTrusted) return; //don't try to simulate click with javaScript!!!
  ++score;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', hit));
start.addEventListener('click', startGame);