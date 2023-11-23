class Endboss extends MovableObject {
  y = -400;
    // x = 720*3.4;
    x = 250;
    i = 0;
    speed = 6;
    height = 350;
    width = 370;
    endbossIntro;
    firstContact = false;

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
  ];

  IMAGES_SPAWNING = [
    'img/2.Enemy/finalEnemy/1.Introduce/1.png',
    'img/2.Enemy/finalEnemy/1.Introduce/2.png',
    'img/2.Enemy/finalEnemy/1.Introduce/3.png',
    'img/2.Enemy/finalEnemy/1.Introduce/4.png',
    'img/2.Enemy/finalEnemy/1.Introduce/5.png',
    'img/2.Enemy/finalEnemy/1.Introduce/6.png',
    'img/2.Enemy/finalEnemy/1.Introduce/7.png',
    'img/2.Enemy/finalEnemy/1.Introduce/8.png',
    'img/2.Enemy/finalEnemy/1.Introduce/9.png',
    'img/2.Enemy/finalEnemy/1.Introduce/10.png',
  ];

  offset = {
    top: 120,
    left: 10,
    right: 30,
    bottom: 170,
  };

constructor() {
    super();
    this.loadImage(this.IMAGES_SPAWNING[0]);
    this.loadImages(this.IMAGES_SPAWNING);
    this.loadImages(this.IMAGES_FLOATING);
    this.animate();
  }

animate(){
  this.currentImage = 0;
    setInterval(() => {
      if (this.bossIntro()) {
        this.introAnimation();
      } else {
        this.playAnimation(this.IMAGES_FLOATING);
      }
    }, 120);
}

bossIntro() {
  if (this.endbossIntro && !this.firstContact) {
      this.i = 0;
      this.y = 50;
      this.firstContact = true;
      this.currentImage = 0;
  }
  this.i++;
  return this.i <= 10;
}

introAnimation() {
  this.playAnimation(this.IMAGES_SPAWNING);
}




}

