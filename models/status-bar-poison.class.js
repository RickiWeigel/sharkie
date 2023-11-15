class StatusbarPoison extends DrawableObjects {
  IMAGES_STATUSBAR_POISON = [
    "img/4.Marcadores/Purple/poisonStatus100.png",
    "img/4.Marcadores/Purple/poisonStatus80.png",
    "img/4.Marcadores/Purple/poisonStatus60.png",
    "img/4.Marcadores/Purple/poisonStatus40.png",
    "img/4.Marcadores/Purple/poisonStatus20.png",
    "img/4.Marcadores/Purple/poisonStatus0.png",
  ];
  availablePoisonBubbles = 0;

  constructor() {
    super();
    this.loadImage("img/4.Marcadores/Purple/poisonStatus0.png");
    this.loadImages(this.IMAGES_STATUSBAR_POISON);
    this.x = 205;
    this.y = 0;
    this.width = 180;
    this.height = 50;
    this.setAvailablePoison(0);
  }

  setAvailablePoison(availablePoisonBubbles) {
    this.availablePoisonBubbles = availablePoisonBubbles;
    let path = this.IMAGES_STATUSBAR_POISON[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.availablePoisonBubbles > 8) {
      return 0;
    } else if (
      this.availablePoisonBubbles <= 8 &&
      this.availablePoisonBubbles > 6
    ) {
      return 1;
    } else if (
      this.availablePoisonBubbles <= 6 &&
      this.availablePoisonBubbles > 4
    ) {
      return 2;
    } else if (
      this.availablePoisonBubbles <= 4 &&
      this.availablePoisonBubbles > 2
    ) {
      return 3;
    } else if (
      this.availablePoisonBubbles <= 2 &&
      this.availablePoisonBubbles >= 1
    ) {
      return 4;
    } else {
      return 5;
    }
  }
}