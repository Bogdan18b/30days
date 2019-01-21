const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const coolStrip = band => band.replace(/^a |the |an/i, "").trim();
const coolSort = (a, b) => coolStrip(a) > coolStrip(b) ? 1 : -1;

bands.sort(coolSort);
document.getElementById('bands').innerHTML = bands
    .map(band => `<li>${band}</li>`)
    .join('');

function noArticle(a, b) {
  const [a1, b1] = [
    removeArticle(a.split(' ')).join(' '), 
    removeArticle(b.split(' ')).join(' ')
  ];
  return a1 > b1 ? 1 : -1;
}

function removeArticle(arr) {
  const articles = ['a', 'an', 'the'];
  if(articles.includes(arr[0].toLowerCase())) arr = arr.slice(1);
  return arr;
} 
