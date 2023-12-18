class World {
  character = new Character();
  endboss = new Endboss();
  statusBarLife = new StatusbarLife();
  statusBarPoison = new StatusbarPoison();
  statusBarCoin = new StatusbarCoin();
  statusBarEndboss = new StatusbarEnbossLife();
  shotableObject = [];
  collectedPoison = [];
  collectedCoin = [];
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  endbossSpawning = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * Sets the world property for the character.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Runs the game loop with collision checks and other game logic.
   */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkCollisionBubbleWithJellyfish();
      this.checkCollisionsWithBottle();
      this.checkCollisionsWithCoin();
      this.isCharacterCloseTo();
      this.checkSharkieInBossArea();
      this.checkCharacterCollisionsEnboss();
      this.checkCollisionBubbleWithEndboss();
    }, 100);
  }

  /**
   * Checks collisions between the character and enemies, reducing character health if a collision occurs.
   */
  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBarLife.setPercentage(this.character.healthPoints);
      }
    });
  }

  /**
   * Checks collisions between the character and the endboss, reducing character health if a collision occurs.
   */
  checkCharacterCollisionsEnboss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit();
      this.statusBarLife.setPercentage(this.character.healthPoints);
    }
  }

  /**
   * Checks if the character is close to a Pufferfish and performs actions when the character is in the attack animation.
   */
  isCharacterCloseTo() {
    this.level.enemies.forEach((enemy) => {
      if (enemy instanceof Pufferfish && this.character.isNearToSharkie(enemy) && this.character.slapAnimationTime) {
        setTimeout(() => {
          enemy.speed = 0;
          enemy.deadAnimation(this.character.otherDirection);
        }, 200);
      }
    });
  }

  /**
   * Checks collisions between the character and poison bottles, collecting poison and updating the status bar.
   */
  checkCollisionsWithBottle() {
    this.level.poison.forEach((p, bubbleIndex) => {
      if (this.character.isColliding(p)) {
        this.collectedPoison.push(level1.poison[bubbleIndex]);
        level1.poison.splice(bubbleIndex, 1);
        collectPoisonAudio();
      }
    });
    this.statusBarPoison.setAvailablePoison(this.collectedPoison.length);
  }

  /**
   * Checks collisions between the character and coins, collecting coins and updating the status bar.
   */
  checkCollisionsWithCoin() {
    this.level.coin.forEach((p, bubbleIndex) => {
      if (this.character.isColliding(p)) {
        this.collectedCoin.push(level1.coin[bubbleIndex]);
        level1.coin.splice(bubbleIndex, 1);
        collectCoinAudio();
      }
    });
    this.statusBarCoin.setCollectedCoins(this.collectedCoin.length);
  }

  /**
   * Checks if the character is in the boss area, triggering the endboss spawning and intro animation.
   */
  checkSharkieInBossArea() {
    if (this.character.x > 2050) {
      this.endbossSpawning = true;
      this.endboss.endbossIntro = true;
      this.statusBarEndboss.y = 40;
    }
  }

  /**
   * Checks collisions between shotable objects and jellyfish, removing the shotable object and marking the jellyfish as shot.
   */
  checkCollisionBubbleWithJellyfish() {
    const jellyfishArray = level1.enemies.filter((enemy) => enemy instanceof Jellyfish);
    this.shotableObject.forEach((shot, shotIndex) => {
      jellyfishArray.forEach((jelly, index) => {
        if (shot.isColliding(jelly)) {
          this.shotableObject.splice(shotIndex, 1);
          this.level.enemies[index].isShot = true;
          jellyFishBubble();
        }
      });
    });
  }

  /**
   * Checks collisions between shotable objects and the endboss, removing the shotable object and damaging the endboss.
   */
  checkCollisionBubbleWithEndboss() {
    this.shotableObject.forEach((shot, shotIndex) => {
      if (shot.isColliding(this.endboss)) {
        this.shotableObject.splice(shotIndex, 1);
        this.endboss.hit();
        jellyFishBubble();
        this.statusBarEndboss.setPercentage(this.endboss.healthPoints);
      }
    });
  }

  /**
   * Draws the game elements on the canvas, including background objects, moving objects, and status bar objects.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);

    this.drawBackgroundObjects();
    this.drawMovingObjects();
    this.drawStatusBarObjects();

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Draws background objects on the canvas.
   */
  drawBackgroundObjects() {
    this.addObjectsToMap(this.level.backgroundObjects);
  }

  /**
   * Draws moving objects on the canvas, including enemies, characters, and other interactive elements.
   */
  drawMovingObjects() {
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.addToMap(this.endboss);
    this.addObjectsToMap(this.shotableObject);
    this.addObjectsToMap(this.level.poison);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.level.bubbles);
    this.ctx.translate(-this.camera_x, 0);
  }

  /**
   * Draws status bar objects on the canvas.
   */
  drawStatusBarObjects() {
    this.addToMap(this.statusBarLife);
    this.addToMap(this.statusBarPoison);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarEndboss);
  }

  /**
   * Adds a single object to the canvas, taking into account the flip effect for objects facing the opposite direction.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    // mo.drawHitbox(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * Adds multiple objects to the canvas.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Flips the image horizontally for objects facing the opposite direction.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Restores the original orientation of the image after flipping.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
