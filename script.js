//amongus button
const amongbtn = document.getElementById('amongus-button')
const overlay = document.getElementById('tsunami')
const amongusAudio = document.getElementById('amongus-audio')

amongbtn.onclick = function() {
    amongusAudio.currentTime = 0;
    amongusAudio.play();
    overlay.style.display = 'flex'; 
    setTimeout(() => {
        overlay.style.display = 'none';
        amongusAudio.pause();
    }, 23000); 
};
// mustache button
const btn = document.getElementById('mustache-button')
let isSpawned = false;
let spawnedImages = [];

btn.addEventListener('click', () => {
    if (!isSpawned) {
        const imgSize = 100;

        for (let i = 0; i < 30; i++) {
            const img = document.createElement('img');
            img.src = 'https://static.vecteezy.com/system/resources/previews/055/069/751/non_2x/red-handlebar-mustache-isolated-on-white-background-quirky-facial-hair-fashion-accessory-mens-style-grooming-free-png.png';
            img.classList.add('floating-mustache');
            img.style.animationDelay = `${Math.random() * 2}s`;
            img.style.width = `${imgSize}px`;
            img.style.position = 'fixed';
            img.style.zIndex = '1000';
            img.style.pointerEvents = 'none';

            const maxX = window.innerWidth - imgSize;
            const maxY = window.innerHeight - imgSize;
            const x = Math.floor(Math.random() * maxX);
            const y = Math.floor(Math.random() * maxY);

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;

            document.body.appendChild(img);
            spawnedImages.push(img);
        }
        isSpawned = true;
    } else {
        spawnedImages.forEach(img => img.remove());
        spawnedImages = [];
        isSpawned = false;
    }
});
//blueberry button
const blueberrybtn = document.getElementById('blueberry-button');
let isVisible = false;

const img = document.createElement('img');
img.src = 'https://static.vecteezy.com/system/resources/thumbnails/044/835/592/small/realistic-fresh-blueberry-png.png';
img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.width = '300px';
img.style.zIndex = '1000';

blueberrybtn.addEventListener('click', function() {
    document.body.style.backgroundColor = '#696969'
  if (isVisible) {
    img.remove();
  } else {
    document.body.style.backgroundColor = '#5124e3'
    document.body.appendChild(img);
  }
  isVisible = !isVisible;
});
// evil button (rickroll)
const evilbtn = document.getElementById('rickroll-button');

evilbtn.addEventListener('click', () => {
    window.open('https://youtu.be/xMHJGd3wwZk?si=31qXfqmJRA1ebCju', '_blank');
});
// music button (heavenly audio)
const musicbtn = document.getElementById('music-button');
const music = document.getElementById('music');

musicbtn.addEventListener('click', () => {
    music.play();
});
// jackpot button
const jackpotbtn = document.getElementById('jackpot-button');
const coinsGif = document.getElementById('coins')
const jackpotSound = document.getElementById('jackpot-audio')
jackpotbtn.onclick = function() {
    jackpotSound.play();
    coinsGif.style.display = 'flex'; 
    setTimeout(() => {
        coinsGif.style.display = 'none';
    }, 17000); 
};