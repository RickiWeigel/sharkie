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
    'img/1.Sharkie/6.dead/1.Poisoned/12.png',
  ];

  IMAGES_HURT = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  IMAGES_BUBBLE_SHOT = [
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
  ]

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
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_BUBBLE_SHOT);
    this.animate();
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
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
          this.swim_sound.play();
          this.moveLeft();
          this.otherDirection = true;
        }

        if (this.world.keyboard.UP) {
          this.swim_sound.play();
          if (this.y > -80) {
            this.moveUp();
          }
        }

        if (this.world.keyboard.DOWN) {
          this.swim_sound.play();
          if (this.y < 280) {
            this.moveDown();
          }
        }
        this.world.camera_x = -this.x + 50;
      }
    }, 1000 / 60);

  

    setInterval(() => {
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
      } else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 1000/8);
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

  bubbleShotAnimation() {
    this.playAnimation(this.)
  }

  slap() {}
}
