const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const isDown = false;
function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const [min, max] = [0.4, 4];
  const height = Math.round(percent * 100) + '%';
  bar.style.height = height;
  const playbackRate = percent * (max - min) + min;
  bar.innerHTML = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
  console.log(percent);
}

speed.addEventListener('mousemove', handleMove);