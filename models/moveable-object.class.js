class MoveableObject {
  x = 120;
  y = 250;
  img;
  height = 150;
  width = 170;
  imageCache = {};
  currentImage = 0;
  speed = 0.2;
  otherDirection = false;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  healthPoints = 100;
  lastHit = 0;

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

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawHitbox(ctx) {
    if (
      this instanceof Character ||
      this instanceof Pufferfish ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.right,
        this.height - this.offset.bottom
      );
      ctx.strokeStyle = "red"; // Farbe des Rahmens
      ctx.lineWidth = 2; // Breite des Rahmens
      ctx.stroke();
    }
  }

  isColliding(mo) {
    return (
      this.x + this.offset.left + this.width - this.offset.right >=
        mo.x + mo.offset.left &&
      this.y + this.offset.top + this.height - this.offset.bottom >=
        mo.y + mo.offset.top &&
      this.x + this.offset.left <= mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top <= mo.y + mo.height - mo.offset.bottom
    );
  }

  hit() {
    this.healthPoints -= 5;
    if (this.healthPoints < 0) {
      this.healthPoints = 0;
    } else {
      this.lastHit = new Date().getTime(); //speichert die Zeit 
    }
  }

  isHurt(){
    let timePassed = new Date().getTime() - this.lastHit; // Rechnet die Differenz der Zeit vom letzten Hit zur aktuellen Zeit 
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  isDead(){
    return this.healthPoints == 0;
  }


  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  // playEndAnimation(images) {
  //   for (let i = 0; i < images.length; i++) {
  //     let path = images[i];
  //     this.img = this.imageCache[path];
  //   }
  // }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }
}
