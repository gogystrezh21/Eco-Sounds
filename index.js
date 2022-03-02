const portfolioBtn = document.querySelectorAll('.birdname-item');
const portfolioBtns = document.querySelector('.headerfirst');
const portfolioImages = document.querySelector('main');
const backgrounds = ['forest', 'solovey', 'drozd', 'malinovka', 'javoronok', 'slavka'];

function preloadForestImage() {
    for (let i = 1; i <= 1; i++) {
        const img = new Image();
        img.src = `./assets/img/forest/1.jpg`;
    }
}
preloadForestImage();

function preloadSoloveyImage() {
    for (let i = 1; i <= 1; i++) {
        const img = new Image();
        img.src = `./assets/img/solovey/1.jpg`;
    }
}

preloadSoloveyImage();

function preloadDrozdImage() {
    for (let i = 1; i <= 1; i++) {
        const img = new Image();
        img.src = `./assets/img/solovey/1.jpg`;
    }
}

preloadDrozdImage();

function preloadMalinovkaImage() {
    for (let i = 1; i <= 1; i++) {
        const img = new Image();
        img.src = `./assets/img/malinovka/1.jpg`;
    }
}
preloadMalinovkaImage()

function preloadJavoronokImage() {
    for (let i = 1; i <= 1; i++) {
        const img = new Image();
        img.src = `./assets/img/javoronok/1.jpg`;
    }
}
preloadJavoronokImage()

function preloadSlavkaImage() {
    for (let i = 1; i <= 1; i++) {
        const img = new Image();
        img.src = `./assets/img/slavka/1.jpg`;
    }
}
preloadSlavkaImage()






const playBtn = document.querySelector('.player-img');
const audio = new Audio();



function changeImage(event) {
    const backgrounds = event.target.dataset.season;
    if (event.target.classList.contains('birdname-item')) {
        portfolioImages.style.backgroundImage = `url(./assets/img/${backgrounds}/1.jpg)`;
        portfolioBtn.forEach((element) => element.classList.remove('active'));
        event.target.classList.add('active');
        audio.src = `./assets/audio/${backgrounds}.mp3`
        audio.currentTime = 0;
        audio.play();
        playBtn.src = `./assets/svg/pause.svg`;
        portfolioImages.classList.add('play');
    }
};  
portfolioBtns.addEventListener('click', changeImage);


function playAudio() {
    portfolioImages.classList.add('play');
    audio.play();
    playBtn.src = `./assets/svg/pause.svg`;
}

function pauseAudio() {
    portfolioImages.classList.remove('play');
    audio.pause();
    playBtn.src = `./assets/svg/play.svg`;
}

playBtn.addEventListener('click', () => {
    const isPlay = portfolioImages.classList.contains('play')
    if (isPlay) {
        pauseAudio();
       
    } else {
        playAudio();
    }
})


function preloadForestSong() {
    for (let i = 1; i <= 1; i++) {
        audio.src = `./assets/audio/forest.mp3`;
        pauseAudio();
    }
}
preloadForestSong()

