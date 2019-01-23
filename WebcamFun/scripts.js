const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => console.error(err));
}

function paintToCanvas() {
  const { videoWidth: width, videoHeight: height } = video;
  [canvas.width, canvas.height] = [width, height];

  ctx.drawImage(video, 0, 0, width, height);
  // let pixels = ctx.getImageData(0, 0, width, height);
  // pixels = redEffect(pixels);
  // ctx.putImageData(pixels, 0, 0);
  requestAnimationFrame(paintToCanvas);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src=${data} alt="pic"/>`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for(let i=0; i<pixels.data.length; i+= 4) {
    pixels.data[i] += 100;  //R pixels is a long array of rgba values, each ele is one value
    pixels.data[i+1] -= 50; //G
    pixels.data[i+2] += 20; //B
  }
  return pixels;
}
function rgbSplit(pixels) {
  for(let i=0; i<pixels.data.length; i+= 4) {
    pixels.data[i - 150] = pixels.data[i];  
    pixels.data[i + 100] = pixels.data[i+1];
    pixels.data[i + 200] = pixels.data[i+2];
  }
  return pixels;
}
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();
paintToCanvas();
requestAnimationFrame(paintToCanvas);