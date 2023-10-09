class pufferfish extends MoveableObject {
  height = 70;
  width = 70;
  IMAGES_IDLE = [
    "img/2.Enemy/pufferfish/1.Swim/1.swim1.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim2.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim3.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim4.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim5.png",
  ];
  

  constructor() {
    super().loadImage("img/2.Enemy/pufferfish/1.Swim/1.swim1.png");
    this.x = this.rondomPositionX();
    this.y = this.rondomPositionY();
    this.loadImages(this.IMAGES_IDLE);
    this.speed = this.rondomSpeed();

    this.animate();
    
  }

  animate() {
    this.move(this.speed);

    setInterval(() => {
      let i = this.currentImage % this.IMAGES_IDLE.length;
      let path = this.IMAGES_IDLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }

  rondomPositionY() {
    return Math.floor(Math.random() * 410);
  }

  rondomPositionX() {
    return 720 + Math.floor(Math.random() * 2880);
  }

  rondomSpeed() {
    return 0.1 + Math.random() * 1.5;
  }

  move(speed) {
    const interval = setInterval(() => {
      this.x -= speed;
      if (this.x <= -800) {
        clearInterval(interval); // Das Intervall stoppen
      }
    }, 1000 / 60);
  }
}
