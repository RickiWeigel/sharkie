let canvas;
let world;
let keyboard = new Keyboard();
let gameIsStarted = false
let movableObject = new MovableObject;

function init() {
  canvas = document.getElementById("canvas");
  initLevel();
  muteAllAudio();
}

function initWorld(){
  world = new World(canvas, keyboard);
  gameIsStarted = true
  unmuteAllAudio();
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function startGame(){
  let startScreen = document.getElementById("startScreen");
  startScreen.classList.add('d-none');
  initWorld();
}

function endGameScreen(imgVar){
  let endScreen = document.getElementById("endScreen");
  let img = document.getElementById(imgVar);
  endScreen.classList.remove('v-none');
  img.classList.remove('d-none');
}

function endGameOver(){
  let endScreen = document.getElementById("endScreen");
  let img = document.getElementById('gameOver');
  endScreen.classList.remove('v-none');
  img.classList.remove('d-none');
}

function restart(){
  let endScreen = document.getElementById("endScreen");
  let youWin = document.getElementById('youWin');
  let gameOver = document.getElementById('gameOver');
  endScreen.classList.add('v-none');
  gameOver.classList.add('d-none');
  youWin.classList.add('d-none');
  initLevel();
  initWorld();
}

function backToMenuFromHowToPlay(){
  let howToPlay = document.getElementById("howToPlayScreen");
  howToPlay.classList.add('v-none');
}

function showHowToPlay(){
  let howToPlay = document.getElementById("howToPlayScreen");
  howToPlay.classList.remove('v-none');
}

function setCanvasSizeFullscreen() {
  let canvas = document.getElementById('canvas');
  canvas.style.width = '80%';
  canvas.style.height = '100%';
}

function setCanvasSizeNormalscreen() {
  let canvas = document.getElementById('canvas');
  canvas.style.width = '720px';
  canvas.style.height = '480px';
}


function enterFullscreen() {
  let screen = document.getElementById("screen");
  if(screen.requestFullscreen) {
    screen.requestFullscreen();
  } else if(screen.msRequestFullscreen) {
    screen.msRequestFullscreen();
  } else if(screen.webkitRequestFullscreen) {
    screen.webkitRequestFullscreen();
  }
  setCanvasSizeFullscreen();
}


function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  setCanvasSizeNormalscreen()
}

document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement) {
    // Der Vollbildmodus wurde verlassen
    setCanvasSizeNormalscreen();
  }
});


