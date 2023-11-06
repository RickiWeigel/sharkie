class Statusbar extends DrawableObjects {
  IMAGES_STATUSBAR = [
    "img/4.Marcadores/Purple/lifeStatus0.png",
    "img/4.Marcadores/Purple/lifeStatus20.png",
    "img/4.Marcadores/Purple/lifeStatus40.png",
    "img/4.Marcadores/Purple/lifeStatus60.png",
    "img/4.Marcadores/Purple/lifeStatus80.png",
    "img/4.Marcadores/Purple/lifeStatus100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES_STATUSBAR);
    this.x = 20;
    this.y = 0;
    this.width = 180;
    this.height = 50;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_STATUSBAR[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage > 80) {
      return 5;
    } else if (this.percentage <= 80 && this.percentage > 60) {
      return 4;
    } else if (this.percentage <= 60 && this.percentage > 40) {
      return 3;
    } else if (this.percentage <= 40 && this.percentage > 20) {
      return 2;
    } else if (this.percentage <= 20 && this.percentage > 5) {
      return 1;
    } else {
      return 0;
    }
  }
}
