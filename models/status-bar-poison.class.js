class StatusbarPoison extends DrawableObjects {
  IMAGES_STATUSBAR_POISON = [
    "img/4.Marcadores/Purple/poisonStatus0.png",
    "img/4.Marcadores/Purple/poisonStatus20.png",
    "img/4.Marcadores/Purple/poisonStatus40.png",
    "img/4.Marcadores/Purple/poisonStatus60.png",
    "img/4.Marcadores/Purple/poisonStatus80.png",
    "img/4.Marcadores/Purple/poisonStatus100.png",
  ];
  collectedPoison = [];

  constructor() {
    super();
    this.loadImage('img/4.Marcadores/Purple/poisonStatus0.png')
    this.loadImages(this.IMAGES_STATUSBAR_POISON);
    this.x = 205;
    this.y = 0;
    this.width = 180;
    this.height = 50;
  }
}
