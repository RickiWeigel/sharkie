class Character extends MovableObject {
  y = 170;
  x = 100;
  speed = 5;
  height = 250;
  width = 270;
  deadTime = 0;
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

  IMAGES_LONG_IDLE = [
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/I2.png",
    "img/1.Sharkie/2.Long_IDLE/I3.png",
    "img/1.Sharkie/2.Long_IDLE/I4.png",
    "img/1.Sharkie/2.Long_IDLE/I5.png",
    "img/1.Sharkie/2.Long_IDLE/I6.png",
    "img/1.Sharkie/2.Long_IDLE/I7.png",
    "img/1.Sharkie/2.Long_IDLE/I8.png",
    "img/1.Sharkie/2.Long_IDLE/I9.png",
    "img/1.Sharkie/2.Long_IDLE/I10.png",
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  IMAGES_SLEEP = [
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
  ];

  IMAGES_SWIM = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];

  IMAGES_DEAD = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_HURT = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  IMAGES_BUBBLE_SHOT = [
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];

  IMAGES_SLAP = [
    "img/1.Sharkie/4.Attack/Fin slap/1.png",
    "img/1.Sharkie/4.Attack/Fin slap/2.png",
    "img/1.Sharkie/4.Attack/Fin slap/3.png",
    "img/1.Sharkie/4.Attack/Fin slap/4.png",
    "img/1.Sharkie/4.Attack/Fin slap/5.png",
    "img/1.Sharkie/4.Attack/Fin slap/6.png",
    "img/1.Sharkie/4.Attack/Fin slap/7.png",
    "img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  lastMove = 0;
  lastShot = 0;
  bubbleShotAnimationTime = false;
  slapAnimationTime = false;
  world;

  offset = {
    top: 130,
    left: 60,
    right: 115,
    bottom: 190,
  };

  constructor() {
    super().loadImage("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_SLEEP);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_BUBBLE_SHOT);
    this.loadImages(this.IMAGES_SLAP);
    this.animate();
    this.lastMove = new Date().getTime();
    this.lastShot = new Date().getTime();
  }

  sharkieAnimation(){
    setInterval(() => {
      if (this.shouldPerformLongIdle()) {
        this.longIdleAnimation();
      } else if (this.isDead()) {
        this.deadAnimation();
      } else if (this.shouldPerformHurtAnimation()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.shouldPerformSwimAnimation()) {
        this.playAnimation(this.IMAGES_SWIM);
      } else if (this.shouldPerformBubbleShotAnimation()) {
        this.checkBubbleShot();
        this.playAnimation(this.IMAGES_BUBBLE_SHOT);
      } else if (this.shouldPerformSlapAnimation()) {
        this.playAnimation(this.IMAGES_SLAP);
      } else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 1000 / 12);
  }

  sharkieMovement() {
    sharkieSwimAudioPause();
    setInterval(() => {
      if (!this.isDead()) {
        this.checkSwimmingRight();
        this.checkSwimmingLeft();
        this.checkSwimmingUp();
        this.checkSwimmingDown();
        this.sharkieAttacks();
        this.world.camera_x = -this.x + 50;
      }
    }, 1000 / 70);
  }

  sharkieAttacks() {
    this.checkSlap();
    if (this.world.keyboard.SPACE && this.world.collectedPoison.length > 0) {
      this.lastMove = new Date().getTime();
      this.currentImage = 0;
      this.setBubbleShotAnimationTime(1050);
    }
  }

  checkSwimmingRight() {
    if (this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
      sharkieSwimAudio();
      this.moveRight(5);
      this.otherDirection = false;
      this.lastMove = new Date().getTime();
    }
  }

  checkSwimmingLeft() {
    if (this.world.keyboard.LEFT && this.x > 0) {
      sharkieSwimAudio();
      this.moveLeft(5);
      this.otherDirection = true;
      this.lastMove = new Date().getTime();
    }
  }

  checkSwimmingUp() {
    if (this.world.keyboard.UP) {
      sharkieSwimAudio();
      if (this.y > -80) {
        this.moveUp(5);
        this.lastMove = new Date().getTime();
      }
    }
  }

  checkSwimmingDown() {
    if (this.world.keyboard.DOWN) {
      sharkieSwimAudio();
      if (this.y < 280) {
        this.moveDown(5);
        this.lastMove = new Date().getTime();
      }
    }
  }

  checkSlap() {
    if (this.world.keyboard.D && !this.isHurt()) {
      setTimeout(() => {
        sharkieSlap();
      }, 300);
      
      this.lastMove = new Date().getTime();
      this.currentImage = 0;
      this.setSlapAnimationTime(800);
    }
  }

  shouldPerformLongIdle() {
    return !this.checkLastMove(8, this.lastMove) && !this.isDead() && !this.isHurt();
  }

  shouldPerformHurtAnimation() {
    return this.isHurt() && !this.world.keyboard.D;
  }

  shouldPerformSwimAnimation() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN;
  }

  shouldPerformBubbleShotAnimation() {
    return this.bubbleShotAnimationTime && this.world.collectedPoison.length > 0;
  }

  shouldPerformSlapAnimation() {
    return this.slapAnimationTime;
  }

  animate() {
    this.sharkieMovement();
    this.sharkieAnimation();
  }

  deadAnimation() {
    if (this.deadTime >= 10) {
      this.loadImage(this.IMAGES_DEAD[11]);
    } else {
      this.playAnimation(this.IMAGES_DEAD);
    }
    if (this.y > -70) {
      this.y -= 10;
    } else if (this.y <= 70) {
      clearAllIntervals();
      endGameScreen("gameOver");
      if (!mute) {
        loseAudio();
      }
    }
    this.deadTime++;
  }

  longIdleAnimation() {
    if (this.deadTime >= 12) {
      this.loadImage(this.IMAGES_LONG_IDLE[13]);
      this.playAnimation(this.IMAGES_SLEEP);
    } else {
      this.playAnimation(this.IMAGES_LONG_IDLE);
    }
    if (this.y < 240) {
      this.y += 8;
    }
    this.deadTime++;
  }

  setBubbleShotAnimationTime(time) {
    this.bubbleShotAnimationTime = true;
    setTimeout(() => {
      this.bubbleShotAnimationTime = false;
    }, time);
  }

  setSlapAnimationTime(time) {
    this.slapAnimationTime = true;
    setTimeout(() => {
      this.slapAnimationTime = false;
    }, time);
  }

  checkBubbleShot() {
    if (this.currentImage == 6) {
      let bubble = new ShotableObject(this.x + 200, this.y + 140);
      this.world.shotableObject.push(bubble);
      this.world.collectedPoison.splice(0, 1);
    }
    this.currentImage == 0;
  }
}
