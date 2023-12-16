let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  initLevel();
}

function initWorld(){
  world = new World(canvas, keyboard);
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
  endScreen.classList.add('v-none');
  youWin.classList.add('d-none');
  initLevel();
  initWorld();
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

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    keyboard.LEFT = true;
  }
  if (e.key == "ArrowUp") {
    keyboard.UP = true;
  }
  if (e.key == "ArrowRight") {
    keyboard.RIGHT = true;
  }
  if (e.key == "ArrowDown") {
    keyboard.DOWN = true;
  }
  if (e.key == " ") {
    keyboard.SPACE = true;
  }
  if (e.key == "e") {
    keyboard.E = true;
  }
  if (e.key == "d") {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowLeft") {
    keyboard.LEFT = false;
  }
  if (e.key == "ArrowUp") {
    keyboard.UP = false;
  }
  if (e.key == "ArrowRight") {
    keyboard.RIGHT = false;
  }
  if (e.key == "ArrowDown") {
    keyboard.DOWN = false;
  }
  if (e.key == " ") {
    keyboard.SPACE = false;
  }
  if (e.key == "e") {
    keyboard.E = false;
  }
  if (e.key == "d") {
    keyboard.D = false;
  }
});
