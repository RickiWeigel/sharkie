class World {
  character = new Character();
  backgroundObjects = [
    new BackgroundObject("img/3.Background/Layers/5.Water/D1.png", 0, 0),
  ];
  enemies = [new pufferfish(), new pufferfish(), new pufferfish()];
  ctx;
  canvas;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // altes canvas wird gecleart

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);

    this.addObjectsToMap(this.enemies);

    //draw wird immer wieder aufgerufen.
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }
}
