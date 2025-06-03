// background.js
const backgrounds = [
  'images/backgrounds/bg1.jpg',
  'images/backgrounds/bg2.jpg',
  'images/backgrounds/bg3.jpg',
  'images/backgrounds/bg4.jpg',
  'images/backgrounds/bg5.jpg'
];
let currentBg = 0;
function changeBackground() {
  currentBg = (currentBg + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url(${backgrounds[currentBg]})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
}
