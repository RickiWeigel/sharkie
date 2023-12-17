class StatusbarEnbossLife extends DrawableObjects {
    IMAGES_STATUSBAR = [
      "img/4.Marcadores/statusbar/lifeStatusEndboss0.png",
      "img/4.Marcadores/statusbar/lifeStatusEndboss20.png",
      "img/4.Marcadores/statusbar/lifeStatusEndboss60.png",
      "img/4.Marcadores/statusbar/lifeStatusEndboss100.png",
    ];
  
    percentage = 15;
  
    constructor() {
      super();
      this.loadImages(this.IMAGES_STATUSBAR);
      this.x = 458;
      this.y = -40;
      this.width = 130;
      this.height = 35;
      this.setPercentage(15);
    }
  
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES_STATUSBAR[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    resolveImageIndex() {
      if (this.percentage > 10) return 3;
      if (this.percentage > 5) return 2;
      if (this.percentage > 0) return 1;
      return 0;
  }
  }