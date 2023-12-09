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


function fullscreen(){
  let screen = document.getElementById("screen");
  enterFullscreen(screen);
}

function enterFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
}


function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

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
