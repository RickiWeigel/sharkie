class World {
  character = new Character();
  backgroundObjects = [
    new BackgroundObject("img/3.Background/Layers/5.Water/D2.png", -720),
    new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D2.png", -720),
    new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D2.png", -720),
    new BackgroundObject("img/3.Background/Layers/2.Floor/D2.png", -720),

    new BackgroundObject("img/3.Background/Layers/5.Water/D1.png", 0),
    new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D1.png", 0),
    new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D1.png", 0),
    new BackgroundObject("img/3.Background/Layers/2.Floor/D1.png", 0),
    new BackgroundObject("img/3.Background/Layers/5.Water/D2.png", 720),
    new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D2.png", 720),
    new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D2.png", 720),
    new BackgroundObject("img/3.Background/Layers/2.Floor/D2.png", 720),

    new BackgroundObject("img/3.Background/Layers/5.Water/D1.png", 720*2),
    new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D1.png", 720*2),
    new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D1.png", 720*2),
    new BackgroundObject("img/3.Background/Layers/2.Floor/D1.png", 720*2),
    new BackgroundObject("img/3.Background/Layers/5.Water/D2.png", 720*3),
    new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D2.png", 720*3),
    new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D2.png", 720*3),
    new BackgroundObject("img/3.Background/Layers/2.Floor/D2.png", 720*3),
  ];
  bubbles = [new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble()];
  bubblesFront = [new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble()];
  enemies = [
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
    new pufferfish(),
  ];

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
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // altes canvas wird gecleart
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.bubbles);
    this.addToMap(this.character);
    this.addObjectsToMap(this.bubblesFront);
    this.ctx.translate(-this.camera_x, 0);
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

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

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
