class Endboss extends MovableObject {
    y = 50;
    x = 720*3.4;
    speed = 6;
    height = 350;
    width = 370;

  IMAGES_FLOATING = [
    "img/2.Enemy/finalEnemy/2.floating/1.png",
    "img/2.Enemy/finalEnemy/2.floating/2.png",
    "img/2.Enemy/finalEnemy/2.floating/3.png",
    "img/2.Enemy/finalEnemy/2.floating/4.png",
    "img/2.Enemy/finalEnemy/2.floating/5.png",
    "img/2.Enemy/finalEnemy/2.floating/6.png",
    "img/2.Enemy/finalEnemy/2.floating/7.png",
    "img/2.Enemy/finalEnemy/2.floating/8.png",
    "img/2.Enemy/finalEnemy/2.floating/9.png",
    "img/2.Enemy/finalEnemy/2.floating/10.png",
    "img/2.Enemy/finalEnemy/2.floating/11.png",
    "img/2.Enemy/finalEnemy/2.floating/12.png",
    "img/2.Enemy/finalEnemy/2.floating/13.png",
  ]

  offset = {
    top: 120,
    left: 10,
    right: 30,
    bottom: 170,
  };

constructor() {
    super().loadImage(this.IMAGES_FLOATING[0]);
    this.loadImages(this.IMAGES_FLOATING);
    this.animate();
  }

animate(){
    setInterval(() => {
        this.playAnimation(this.IMAGES_FLOATING);
    }, 200);
}
}

