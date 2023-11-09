class Pufferfish extends MovableObject {
  height = 70;
  width = 70;
  IMAGES_IDLE = [
    "img/2.Enemy/pufferfish/1.Swim/1.swim1.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim2.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim3.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim4.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim5.png",
  ];

  IMAGES_DEAD = ["img/2.Enemy/pufferfish/4.die/1.Dead.png"];

  offset = {
    top: 5,
    left: 0,
    right: 0,
    bottom: 23,
  };
  isDead = false;

  constructor() {
    super().loadImage("img/2.Enemy/pufferfish/1.Swim/1.swim1.png");
    this.x = this.rondomPositionX();
    this.y = this.rondomPositionY();
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_DEAD);
    this.speed = this.rondomSpeed();
    this.animate();
  }

  animate() {
    this.move(this.speed);
    setInterval(() => {
      if (this.isDead) {
        this.playAnimation(this.IMAGES_DEAD);
      } else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 150);
  }

  rondomPositionY() {
    return 30 + Math.floor(Math.random() * 380);
  }

  rondomPositionX() {
    return 720 + Math.floor(Math.random() * 2880);
  }

  rondomSpeed() {
    return 0.3 + Math.random() * 1.0;
  }

  move(speed) {
    const interval = setInterval(() => {
      if (this.isDead) {
        this.width = 55;
        this.height = 55;
      } else {
        this.moveLeft(speed);
        if (this.x <= -800) {
          clearInterval(interval); // Das Intervall stoppen
        }
      }
    }, 1000 / 60);
  }
}
