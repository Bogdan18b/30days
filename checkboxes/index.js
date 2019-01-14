let inputs = document.querySelectorAll('input[type="checkbox"]');
console.log(inputs);
inputs.forEach(input => input.addEventListener('click', multipleSelect));
let lastChecked;

function multipleSelect(e) {
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    inputs.forEach(input => {
      if(input === this || input === lastChecked) {
        inBetween = !inBetween;
      }
      if(inBetween) input.checked = true;
    });
  }

  lastChecked = this;
}
