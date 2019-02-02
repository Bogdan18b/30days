let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

buttons.forEach(button => button.addEventListener('click', startTimer));

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  let sec = seconds % 60;
  let minutes = (seconds - sec) / 60;
  const display = `${minutes}:${sec < 10 ? '0' : ""}${sec}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  let [hour, minutes, amPm] = end.toLocaleTimeString().split(':');
  amPm = amPm.split(' ')[1]
  endTime.textContent = `Be back at ${hour}:${minutes} ${amPm}`;
}

document.customForm.addEventListener('submit', startCustomTimer);

function startCustomTimer(e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  timer(minutes * 60);
  this.reset();
}
