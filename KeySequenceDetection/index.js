const pressed = [];
const secretCode = 'fun';

window.addEventListener('keyup', play);

function play(e) {
  pressed.push(e.key);
  const len = secretCode.length;
  pressed.splice(-len - 1, pressed.length - len);
  if(pressed.join("").includes(secretCode))
    cornify_add();
}
