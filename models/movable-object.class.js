class MovableObject extends DrawableObjects {
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
  height;
  width;

  isColliding(mo) {
    return (
      this.x + this.offset.left + this.width - this.offset.right >=
        mo.x + mo.offset.left &&
      this.y + this.offset.top + this.height - this.offset.bottom >=
        mo.y + mo.offset.top &&
      this.x + this.offset.left <=
        mo.x + mo.offset.left + mo.width - mo.offset.right &&
      this.y + this.offset.top <=
        mo.y + mo.offset.top + mo.height - mo.offset.bottom
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

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // Rechnet die Differenz der Zeit vom letzten Hit zur aktuellen Zeit
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  isDead() {
    return this.healthPoints == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

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
