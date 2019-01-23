const videos = document.querySelectorAll("[data-time]");

function convertToSeconds(s) {
  let [min, seconds] = s.split(":");
  return Number(60 * min) + Number(seconds);
}

let total = [...videos].reduce(totalTime, 0);
const seconds = total % 60;
let minutes = (total - seconds) / 60;
const hours = Math.floor(minutes / 60);
minutes = minutes % 60;
document.querySelector('.home').innerHTML += `<br> <span>Total video time is ${hours}:${minutes}:${seconds}</span>`;

function totalTime(acc, value) {
  return acc + convertToSeconds(value.dataset.time);
}