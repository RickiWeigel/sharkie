class Character extends MoveableObject {
  y = 170;
  x = 0;
  speed = 6;
  height = 250;
  width = 270;
  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];

  IMAGES_SWIM = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];
  world;

  constructor() {
    super().loadImage("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      }

      if (this.world.keyboard.UP) {
        if (this.y > -110) {
          this.moveUp();
        }
      }

      if (this.world.keyboard.DOWN) {
        if (this.y < 280) {
          this.moveDown();
        }
      }
      this.world.camera_x = -this.x + 50;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
        this.swim();
      } else {
        this.idle();
      }
    }, 150);
  }

  idle() {
    let i = this.currentImage % this.IMAGES_IDLE.length;
    let path = this.IMAGES_IDLE[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  swim() {
    let i = this.currentImage % this.IMAGES_SWIM.length;
    let path = this.IMAGES_SWIM[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  attack() {}

  slap() {}
}
