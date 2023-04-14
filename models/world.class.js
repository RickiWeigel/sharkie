class World {
  backgroundLayerWater = new BackgroundLayerWater();
  backgroundLayerFondo2 = new BackgroundLayerFondo2();
  backgroundLayerFondo1 = new BackgroundLayerFondo1();
  BackgroundLayerFloor = new BackgroundLayerFloor();
  character = new Character();
  enemies = [new Fish(), new Fish(), new Fish()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

    this.ctx.drawImage(
      this.backgroundLayerWater.img,
      this.backgroundLayerWater.x,
      this.backgroundLayerWater.y,
      this.backgroundLayerWater.width,
      this.backgroundLayerWater.height
    );

    this.ctx.drawImage(
        this.backgroundLayerFondo2.img,
        this.backgroundLayerFondo2.x,
        this.backgroundLayerFondo2.y,
        this.backgroundLayerFondo2.width,
        this.backgroundLayerFondo2.height
      );

      this.ctx.drawImage(
        this.backgroundLayerFondo1.img,
        this.backgroundLayerFondo1.x,
        this.backgroundLayerFondo1.y,
        this.backgroundLayerFondo1.width,
        this.backgroundLayerFondo1.height
      );

      this.ctx.drawImage(
        this.BackgroundLayerFloor.img,
        this.BackgroundLayerFloor.x,
        this.BackgroundLayerFloor.y,
        this.BackgroundLayerFloor.width,
        this.BackgroundLayerFloor.height
      );

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );

    this.enemies.forEach((enemy) => {
      this.ctx.drawImage(
        enemy.img,
        enemy.x,
        enemy.y,
        enemy.height,
        enemy.width
      );
    });

    //Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
