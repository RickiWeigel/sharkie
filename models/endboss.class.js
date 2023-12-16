class Endboss extends MovableObject {
  y = -400;
  x = 720 * 3.4;
  i = 0;
  speed = 1.5;
  height = 320;
  width = 340;
  endbossIntro;
  attackTime;
  lastAttack;
  healthPoints = 15;
  endbossDead = false;
  firstContact = false;
  deadTime = 0;

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

  IMAGES_HURT = [
    "img/2.Enemy/finalEnemy/Hurt/1.png",
    "img/2.Enemy/finalEnemy/Hurt/2.png",
    "img/2.Enemy/finalEnemy/Hurt/3.png",
    "img/2.Enemy/finalEnemy/Hurt/4.png",
  ];

  IMAGES_DEAD = [
    "img/2.Enemy/finalEnemy/Dead/dead1.png",
    "img/2.Enemy/finalEnemy/Dead/dead2.png",
    "img/2.Enemy/finalEnemy/Dead/dead3.png",
    "img/2.Enemy/finalEnemy/Dead/dead4.png",
    "img/2.Enemy/finalEnemy/Dead/dead5.png",
  ];

  offset = {
    top: 140,
    left: 15,
    right: 150,
    bottom: 200,
  };

  constructor() {
    super();
    this.loadImage(this.IMAGES_SPAWNING[0]);
    this.loadImages(this.IMAGES_SPAWNING);
    this.loadImages(this.IMAGES_FLOATING);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.setAttackTime();
    this.lastHit = new Date().getTime();
  }

  animate() {
    this.currentImage = 0;
    setInterval(() => {
      if (this.bossIntro() && !this.isDead()) {
        this.introAnimation();
      } else if (!this.isDead() && this.isAttacking() && !this.isHurt()) {
        this.attackAnimation();
        this.moveLeft(this.speed + 15);
      } else if (this.isDead()) {
        this.deadAnimation();
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
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
      } else if (this.y <= -80) {
        this.up = false;
        this.down = true;
      }
      if (!this.isDead()) {
        this.moveUpAndDown(this.speed);
        this.moveLeft(0.2);
      }
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

  deadAnimation() {
    if (this.deadTime >= 3) {
      this.loadImage(this.IMAGES_DEAD[4]);
    } else {
      this.playAnimation(this.IMAGES_DEAD);
    }
    if (this.y > -70) {
      this.y -= 10;
    } else if (this.y <= 70){
      clearAllIntervals();
      endGameScreen('youWin');
    }
    this.deadTime++;
  }
}
