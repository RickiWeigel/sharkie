class MoveableObject {
  x = 120;
  y = 250;
  img;
  height = 150;
  width = 170;
  imageCache = {};
  currentImage = 0;
  speed = 0.3;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log("moving right");
  }

  moveLeft() {
    const interval = setInterval(() => {
      this.x -= this.speed;
      if (this.x <= -80) {
        clearInterval(interval); // Das Intervall stoppen
      }
    }, 1000 / 60);
  }
}
