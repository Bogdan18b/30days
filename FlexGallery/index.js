const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach(panel => {
    if (this.children[1].innerHTML !== panel.children[1].innerHTML) {
      panel.classList.remove('open');
    } else {
      this.classList.toggle('open');
    }
  });
}
function toggleOpenActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));
