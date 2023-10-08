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
  speed = this.rondomSpeed()

  constructor() {
    super().loadImage("img/2.Enemy/pufferfish/1.Swim/1.swim1.png");
    this.x = this.rondomPositionX();
    this.y = this.rondomPositionY();
    this.loadImages(this.IMAGES_IDLE);
    this.animate();
    this.move(this.speed);
    
    
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_IDLE.length;
      let path = this.IMAGES_IDLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }

  rondomPositionY(){
    return Math.floor(Math.random() * 410)
  }

  rondomPositionX(){
    return 720 + Math.floor(Math.random() * 1450)
  }

  rondomSpeed(){
    return 1 + Math.floor(Math.random() * 4)
  }

  move(speed) {
    setInterval(() => {
      this.x -= speed;
      if (this.x <= -20) {
        this.x = this.rondomPositionX();
        this.y = this.rondomPositionY();
      }
    }, 1000 / 60);
  }
}
