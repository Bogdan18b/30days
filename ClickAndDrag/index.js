const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

function mouseDown(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
function mouseLeaveOrUp() {
  isDown = false;
  slider.classList.remove('active');
}
function mouseMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
}

document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseleave', mouseLeaveOrUp);
document.addEventListener('mouseup', mouseLeaveOrUp);
document.addEventListener('mousemove', mouseMove);