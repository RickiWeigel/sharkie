class ShotableObject extends MovableObject {
  IMAGES_;
  speed = 5;

  constructor(x, y) {
    super().loadImage(
      "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.width = 30;
    this.height = 30;
    this.x = x;
    this.y = y;
    this.bubbling();
  }

  bubbling(){
    this.checkdirection();
    this.bubbleShot();
  }

  bubbleShot() {
    setInterval(() => {
        this.x += this.speed;
    }, 1000/60);
  }

  checkdirection() {
    if (world.character.otherDirection) {
        this.speed = -this.speed;
        this.x = this.x - 150;
    }
}


}
