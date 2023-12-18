class ShotableObject extends MovableObject {
  IMAGES_;
  speed = 5;
  offset = {
    top: 5,
    left: 5,
    right: 10,
    bottom: 10,
  };

  constructor(x, y) {
    super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
    this.width = 30;
    this.height = 30;
    this.x = x;
    this.y = y;
    this.bubbling();
  }

  /**
   * Initiates bubbling behavior, including checking the direction and executing the bubble shot.
   */
  bubbling() {
    this.checkdirection();
    this.bubbleShot();
  }

  /**
   * Bubble shot animation, continuously moving the object along the X-axis at a specified speed.
   */
  bubbleShot() {
    setInterval(() => {
      this.x += this.speed;
    }, 1000 / 60);
  }

  /**
   * Checks the character's direction and adjusts the bubble's speed and position accordingly.
   */
  checkdirection() {
    if (world.character.otherDirection) {
      this.speed = -this.speed;
      this.x = this.x - 150;
    }
  }
}
