class StatusbarCoin extends DrawableObjects {
  IMAGES_STATUSBAR_COIN = [
    "img/4.Marcadores/Purple/coinStatus100.png",
    "img/4.Marcadores/Purple/coinStatus80.png",
    "img/4.Marcadores/Purple/coinStatus60.png",
    "img/4.Marcadores/Purple/coinStatus40.png",
    "img/4.Marcadores/Purple/coinStatus20.png",
    "img/4.Marcadores/Purple/coinStatus0.png",
  ];
  collectedCoins = 0;

  constructor() {
    super();
    this.loadImage("img/4.Marcadores/Purple/poisonStatus0.png");
    this.loadImages(this.IMAGES_STATUSBAR_COIN);
    this.x = 410;
    this.y = 0;
    this.width = 180;
    this.height = 50;
    this.setCollectedCoins(0);
  }

  setCollectedCoins(collectedCoins) {
    this.collectedCoins = collectedCoins;
    let path = this.IMAGES_STATUSBAR_COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.collectedCoins > 8) {
      return 0;
    } else if (this.collectedCoins <= 8 && this.collectedCoins > 6) {
      return 1;
    } else if (this.collectedCoins <= 6 && this.collectedCoins > 4) {
      return 2;
    } else if (this.collectedCoins <= 4 && this.collectedCoins > 2) {
      return 3;
    } else if (this.collectedCoins <= 2 && this.collectedCoins >= 1) {
      return 4;
    } else {
      return 5;
    }
  }
}
