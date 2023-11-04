class Jellyfish extends MovableObject {
  height = 70;
  width = 70;
  IMAGES_IDLE = [
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 1.png",
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 2.png",
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 3.png",
    "img/2.Enemy/Jelly fish/Regular damage/Yellow 4.png",
  ];
  offset = {
    top: 10,
    left: 8,
    right: 15,
    bottom: 20,
  };

  constructor(x) {
    super();
    this.loadImage("img/2.Enemy/Jelly fish/Regular damage/Yellow 1.png");
    this.x = x;
    this.y = 40 + Math.random() * 410;
    this.startMovePosition = this.y;
    this.loadImages(this.IMAGES_IDLE);
    this.animate();
    this.move();
    this.speed = 0.2 + Math.random() * 0.5;
    this.down = true;
  }

  animate() {
    this.move();
    setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
    }, 150);
  }

  move() {
    setInterval(() => {
      if (this.y + this.height >= 450) {
        this.up = true;
        this.down = false;
      } else if (this.y <= 50) {
        this.up = false;
        this.down = true;
      }
      this.moveUpAndDown(this.speed)
    }, 1000 / 60);
  }
}
