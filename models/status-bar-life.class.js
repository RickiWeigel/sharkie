class StatusbarLife extends DrawableObjects {
  IMAGES_STATUSBAR = [
    "img/4.Marcadores/statusbar/lifeStatus0.png",
    "img/4.Marcadores/statusbar/lifeStatus20.png",
    "img/4.Marcadores/statusbar/lifeStatus40.png",
    "img/4.Marcadores/statusbar/lifeStatus60.png",
    "img/4.Marcadores/statusbar/lifeStatus80.png",
    "img/4.Marcadores/statusbar/lifeStatus100.png",
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
    if (this.percentage > 80) return 5;
    if (this.percentage > 60) return 4;
    if (this.percentage > 40) return 3;
    if (this.percentage > 20) return 2;
    if (this.percentage > 5) return 1;
    return 0;
}
}
