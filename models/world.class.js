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
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.backgroundobjects);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);

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

  // Zeichnet Object was übergeben wird
  addToMap(mo) {
    //Überprüft ob "otherDirection" = true ist, und spiegelt dsa Object
    if (mo.otherDirection) {
      this.ctx.save(); //speichert alle Eigenschaften
      this.ctx.translate(mo.width, 0); //verschiebt das Object um die Breite, damit es an gleicher Stelle gespiegelt wird
      this.ctx.scale(-1, 1); //spiegelt das Object
      mo.x = mo.x * -1; //spiegelt die Bewegung in andere Richtung
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore(); //Stellt alle Eigenschaften die verändert wurden, wieder auf den usprünglichen Zustand
    }
  }
}
