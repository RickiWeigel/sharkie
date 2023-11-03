class Jellyfish extends MovableObject {
  height = 70;
  width = 70;
  startMovePosition = 0;
  IMAGES_IDLE = [
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 1.png",
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 2.png",
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 3.png",
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 4.png",
  ];

  constructor(x, y) {
    super().loadImage("img/2.Enemy/Jelly fish/Regular damage/Yellow 1.png");
    this.x = x;
    this.y = y;
    this.startMovePosition = this.y;
    this.loadImages(this.IMAGES_IDLE);
    this.animate();
  }

  animate() {
    this.move();
    setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
    }, 150);
  }

  move() {
    
  }
}
