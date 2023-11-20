class World {
  character = new Character();
  statusBarLife = new StatusbarLife();
  statusBarPoison = new StatusbarPoison();
  statusBarCoin = new StatusbarCoin();
  shotableObject = [];
  collectedPoison = [];
  collectedCoin = [];
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;

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
    }, 100);
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBarLife.setPercentage(this.character.healthPoints);
      }
    });
  }

  isCharacterCloseTo() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isNearToSharkie(enemy) && this.character.slapAnimationTime) {
        setTimeout(() => {
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
      }
    });
    this.statusBarPoison.setAvailablePoison(this.collectedPoison.length);
  }

  checkCollisionsWithCoin() {
    this.level.coin.forEach((p, bubbleIndex) => {
      if (this.character.isColliding(p)) {
        this.collectedCoin.push(level1.coin[bubbleIndex]);
        level1.coin.splice(bubbleIndex, 1);
      }
    });
    this.statusBarCoin.setCollectedCoins(this.collectedCoin.length);
  }





  /**
   * Überprüft, ob Blasen mit Quallen kollidieren und aktualisiert den Spielzustand entsprechend.
   */
  checkCollisionBubbleWithJellyfish() {
    // Array mit allen Quallen im aktuellen Level
    const jellyfishArray = level1.enemies.filter((enemy) => enemy instanceof Jellyfish);

    // Iteriere über alle aktiven Blasen
    this.shotableObject.forEach((shot, shotIndex) => {
      // Iteriere über alle Quallen im Level
      jellyfishArray.forEach((jelly, index) => {
        // Überprüfe, ob eine Blase mit einer Qualle kollidiert
        if (shot.isColliding(jelly)) {
          // Entferne die Blase aus dem Array der aktiven Blasen
          this.shotableObject.splice(shotIndex, 1);
          // Markiere die Qualle als getroffen
          this.level.enemies[index].isShot = true;
        }
      });
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // altes canvas wird gecleart

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.enemies);

    this.addToMap(this.character);
    this.addObjectsToMap(this.shotableObject);
    this.addObjectsToMap(this.level.poison);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.level.bubbles);
    this.ctx.translate(-this.camera_x, 0);

    this.addToMap(this.statusBarLife);
    this.addToMap(this.statusBarPoison);
    this.addToMap(this.statusBarCoin);

    //draw wird immer wieder aufgerufen.
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawHitbox(this.ctx);

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
