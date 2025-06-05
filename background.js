// background.js
const testing = true;
const baseUrl = testing ? "http://localhost:5500" : ''
const backgrounds = [
  `${baseUrl}/images/backgrounds/bg1.jpg`,
  `${baseUrl}/images/backgrounds/bg2.jpg`,
  `${baseUrl}/images/backgrounds/bg3.jpg`,
  `${baseUrl}/images/backgrounds/bg4.jpg`,
  `${baseUrl}/images/backgrounds/bg5.jpg`,
  `${baseUrl}/images/backgrounds/bg6.jpg`,
  `${baseUrl}/images/backgrounds/bg7.jpg`,
  `${baseUrl}/images/backgrounds/bg8.jpg`,
  `${baseUrl}/images/backgrounds/bg9.jpg`,
  `${baseUrl}/images/backgrounds/bg0.jpg`
];
let currentBg = 0;
function changeBackground() {
  currentBg = (currentBg + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url(${backgrounds[currentBg]})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
}
