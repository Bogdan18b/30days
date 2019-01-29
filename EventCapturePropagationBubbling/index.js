const divs = document.querySelectorAll('div');

function logText(e) {
  // e.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, //default
  once: true //will make the event run one time and then remove the event listener
}));