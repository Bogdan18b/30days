const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let  { offsetX: x, offsetY: y } = e;

  if(this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 red,
  ${-1 * xWalk}px ${yWalk}px 0 blue,
  ${yWalk}px ${xWalk}px 0 yellow,
  ${yWalk}px ${-1 * xWalk}px 0 green
  `;
}

hero.addEventListener('mousemove', shadow);