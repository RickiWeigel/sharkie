let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log(world.character);
}

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft" || e.key == "a") {
    keyboard.LEFT = true;
  }
  if (e.key == "ArrowUp" || e.key == "w") {
    keyboard.UP = true;
  }
  if (e.key == "ArrowRight" || e.key == "d") {
    keyboard.RIGHT = true;
  }
  if (e.key == "ArrowDown" || e.key == "s") {
    keyboard.DOWN = true;
  }

});

window.addEventListener("keyup", (e) =>{
  if (e.key == "ArrowLeft" || e.key == "a") {
   keyboard.LEFT = false;
  }
  if (e.key == "ArrowUp" || e.key == "w") {
   keyboard.UP = false;
  }
  if (e.key == "ArrowRight" || e.key == "d") {
   keyboard.RIGHT = false;
  }
  if (e.key == "ArrowDown" || e.key == "s") {
   keyboard.DOWN = false;
  }
 });