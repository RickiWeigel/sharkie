class Character extends MovableObject {
  y = 170;
  x = 0;
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
  ];

  lastMove = 0;
  lastShot = 0;
  bubbleShotAnimationTime = false;
  world;
  swim_sound = new Audio("audio/swim.mp3");
  offset = {
    top: 115,
    left: 50,
    right: 100,
    bottom: 168,
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
    this.animate();
    this.run();
    this.lastMove = new Date().getTime();
    this.lastShot = new Date().getTime();
  }

  run() {
    setInterval(() => {
      this.checkBubbleShot();
    }, 100);
  }

  animate() {
    this.swim_sound.pause();
    this.swim_sound.volume = 0.03;
    setInterval(() => {
      if (!this.isDead()) {
        if (this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
          this.swim_sound.play();
          this.moveRight();
          this.otherDirection = false;
          this.lastMove = new Date().getTime();
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
          this.swim_sound.play();
          this.moveLeft();
          this.otherDirection = true;
          this.lastMove = new Date().getTime();
        }

        if (this.world.keyboard.UP) {
          this.swim_sound.play();
          if (this.y > -80) {
            this.moveUp();
            this.lastMove = new Date().getTime();
          }
        }

        if (this.world.keyboard.DOWN) {
          this.swim_sound.play();
          if (this.y < 280) {
            this.moveDown();
            this.lastMove = new Date().getTime();
          }
        }

        if (this.world.keyboard.SPACE) {
          this.currentImage = 0;
          this.setBubbleShotAnimationTime(980);
        }
        this.world.camera_x = -this.x + 50;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (!this.checkLastMove(5, this.lastMove) && !this.isDead() && !this.isHurt()) {
        this.longIdleAnimation();
      } else {
        if (this.isDead()) {
          this.deadAnimation();
        } else if (this.isHurt()) {
          this.playAnimation(this.IMAGES_HURT);
        } else if (
          this.world.keyboard.RIGHT ||
          this.world.keyboard.LEFT ||
          this.world.keyboard.UP ||
          this.world.keyboard.DOWN
        ) {
          this.playAnimation(this.IMAGES_SWIM);
        } else if (this.bubbleShotAnimationTime) {
          this.playAnimation(this.IMAGES_BUBBLE_SHOT);
        } else {
          this.playAnimation(this.IMAGES_IDLE);
        }
      }
      // console.log('last Shot:',this.checkLastMove(0.98, this.lastShot));
      // console.log('shot Anmition Time:',this.bubbleShotAnimationTime);
    }, 1000 / 8);
  }

  deadAnimation() {
    if (this.deadTime >= 10) {
      this.loadImage(this.IMAGES_DEAD[11]);
    } else {
      this.playAnimation(this.IMAGES_DEAD);
    }
    if (this.y > -70) {
      this.y -= 10;
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
    if (this.y < 250) {
      this.y += 10;
    }
    this.deadTime++;
  }

  checkLastMove(timeInSek, action) {
    let timePassed = new Date().getTime() - action; // Rechnet die Differenz der Zeit vom letzten move zur aktuellen Zeit
    timePassed = timePassed / 1000;
    return timePassed < timeInSek;
  }

  setBubbleShotAnimationTime(time) {
    this.bubbleShotAnimationTime = true;
    setTimeout(() => {
      this.bubbleShotAnimationTime = false;
    }, time);
  }

  checkBubbleShot() {
    if (this.world.keyboard.SPACE) {
      setTimeout(() => {
        let bubble = new ThrowableObject(
          this.x + 205,
          this.y + 140
        );
        this.world.throwableObject.push(bubble);
      }, 850);
    }
  }

  slap() {}
}
