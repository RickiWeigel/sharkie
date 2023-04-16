class World {
  character = new Character();
  enemies = [
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
  ];

  backgroundobjects = [
    new BackgroundObject("img/3.Background/Layers/5.Water/D.png", 0, 0),
    new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D.png", 0, 0),
    new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D.png", 0, 0),
    new BackgroundObject("img/3.Background/Layers/2. Floor/D.png", 0, 0),
  ];

  canvas;
  ctx;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld(){
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.addObjectsToMap(this.backgroundobjects);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    //Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
