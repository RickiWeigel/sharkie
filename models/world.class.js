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

  setWorld() {
    this.character.world = this;
  }

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

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
          hurtAudio();
        this.statusBarLife.setPercentage(this.character.healthPoints);
      }
    });
  }

  checkCharacterCollisionsEnboss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit();
      this.statusBarLife.setPercentage(this.character.healthPoints);
    }
  }

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

  checkSharkieInBossArea() {
    if (this.character.x > 2050) {
      this.endbossSpawning = true;
      this.endboss.endbossIntro = true;
      this.statusBarEndboss.y = 40;
    }
  }

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

  drawBackgroundObjects() {
    this.addObjectsToMap(this.level.backgroundObjects);
  }

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

  drawStatusBarObjects() {
    this.addToMap(this.statusBarLife);
    this.addToMap(this.statusBarPoison);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarEndboss);
  }

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

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
