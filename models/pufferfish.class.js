class Pufferfish extends MovableObject {
  height = 70;
  width = 70;
  IMAGES_IDLE = [
    "img/2.Enemy/pufferfish/1.Swim/1.swim1.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim2.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim3.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim4.png",
    "img/2.Enemy/pufferfish/1.Swim/1.swim5.png",
  ];

  IMAGES_DEAD = ["img/2.Enemy/pufferfish/4.die/1.Dead.png"];

  offset = {
    top: 5,
    left: 0,
    right: 0,
    bottom: 23,
  };

  constructor() {
    super().loadImage("img/2.Enemy/pufferfish/1.Swim/1.swim1.png");
    this.x = this.rondomPositionX();
    this.y = this.rondomPositionY();
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_DEAD);
    this.speed = this.rondomSpeed();
    this.animate();
  }

  /**
   * Initiates animations for the object, including move animation and swim animation.
   */
  animate() {
    this.moveAnimation();
    this.swimAnimation();
  }

  /**
   * Swim animation, continuously playing frames from the idle animation at a specified interval.
   */
  swimAnimation() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 10);
  }

  /**
   * Generates a random Y position within a specific range.
   * @returns {number} - Random Y position.
   */
  rondomPositionY() {
    return 30 + Math.floor(Math.random() * 380);
  }

  /**
   * Generates a random X position within a specific range.
   * @returns {number} - Random X position.
   */
  rondomPositionX() {
    return 820 + Math.floor(Math.random() * 3580);
  }

  /**
   * Generates a random speed within a specific range.
   * @returns {number} - Random speed.
   */
  rondomSpeed() {
    return 0.3 + Math.random() * 0.9;
  }

  /**
   * Move animation, continuously moving the object left at a specified speed.
   */
  moveAnimation() {
    setInterval(() => {
      this.moveLeft(this.speed);
    }, 1000 / 60);
  }

  /**
   * Dead animation, displaying frames from the dead animation and moving the dead fish.
   * @param {boolean} otherDirection - Indicates whether the dead fish should move in the opposite direction.
   */
  deadAnimation(otherDirection) {
    this.width = 55;
    this.height = 55;
    setInterval(() => {
      this.img.src = this.IMAGES_DEAD[0];
      this.speed = 0;
      this.moveDeadFish(otherDirection);
    }, 1);
  }

  /**
   * Moves the dead fish either to the right or left.
   * @param {boolean} otherDirection - Indicates whether the dead fish should move in the opposite direction.
   */
  moveDeadFish(otherDirection) {
    if (!otherDirection) {
      this.moveRight(1);
    } else {
      this.moveLeft(1);
    }
    this.y -= 1;
  }
}
