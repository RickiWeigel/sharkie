class Endboss extends MovableObject {
  y = -400;
  x = 720*3.4;
  i = 0;
  speed = 1.5;
  height = 320;
  width = 340;
  endbossIntro;
  attackTime;
  lastAttack;
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
    "img/2.Enemy/finalEnemy/1.Introduce/1.png",
    "img/2.Enemy/finalEnemy/1.Introduce/2.png",
    "img/2.Enemy/finalEnemy/1.Introduce/3.png",
    "img/2.Enemy/finalEnemy/1.Introduce/4.png",
    "img/2.Enemy/finalEnemy/1.Introduce/5.png",
    "img/2.Enemy/finalEnemy/1.Introduce/6.png",
    "img/2.Enemy/finalEnemy/1.Introduce/7.png",
    "img/2.Enemy/finalEnemy/1.Introduce/8.png",
    "img/2.Enemy/finalEnemy/1.Introduce/9.png",
    "img/2.Enemy/finalEnemy/1.Introduce/10.png",
  ];

  IMAGES_ATTACK = [
    "img/2.Enemy/finalEnemy/Attack/1.png",
    "img/2.Enemy/finalEnemy/Attack/2.png",
    "img/2.Enemy/finalEnemy/Attack/3.png",
    "img/2.Enemy/finalEnemy/Attack/4.png",
    "img/2.Enemy/finalEnemy/Attack/5.png",
    "img/2.Enemy/finalEnemy/Attack/6.png",
  ];

  offset = {
    top: 170,
    left: 15,
    right: 40,
    bottom: 230,
  };

  constructor() {
    super();
    this.loadImage(this.IMAGES_SPAWNING[0]);
    this.loadImages(this.IMAGES_SPAWNING);
    this.loadImages(this.IMAGES_FLOATING);
    this.loadImages(this.IMAGES_ATTACK);
    this.animate();
    this.setAttackTime();
  }

  animate() {
    this.currentImage = 0;
    setInterval(() => {
      if (this.bossIntro()) {
        this.introAnimation();
      } else if (this.isAttacking()) {
        this.attackAnimation();
        this.moveLeft(this.speed + 20);
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
      this.down = true;
      this.attackTime = new Date().getTime() + 1000;
      this.movingAnimation();
    }
    this.i++;
    return this.i <= 10;
  }

  movingAnimation() {
    setInterval(() => {
      if (this.y + this.height == 550) {
        this.up = true;
        this.down = false;
      } else if (this.y <= -40) {
        this.up = false;
        this.down = true;
      }
      this.moveUpAndDown(this.speed);
      this.moveLeft(0.3);
    }, 1000 / 60);
  }

  introAnimation() {
    this.playAnimation(this.IMAGES_SPAWNING);
  }

  attackAnimation() {
    this.playAnimation(this.IMAGES_ATTACK);
  }

  isAttacking() {
    let timePassed = new Date().getTime() - this.lastAttack;
    timePassed = timePassed / 1000;
    return timePassed < 1.5;
  }

  setAttackTime() {
    setInterval(() => {
      let time1 = new Date().getTime();
      if (this.attackTime <= time1) {
        this.lastAttack = new Date().getTime();
        this.attackTime = new Date().getTime() + 5000;
      }
    }, 1000);
  }
}
