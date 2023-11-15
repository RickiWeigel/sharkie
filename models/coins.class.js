class Coin extends MovableObject {
    IMAGES_COIN = [
      "img/4.Marcadores/1.Coins/1.png",
      "img/4.Marcadores/1.Coins/2.png",
      "img/4.Marcadores/1.Coins/3.png",
      "img/4.Marcadores/1.Coins/4.png",
    ];
    width = 35;
    height = 35;
    // offset = {
    //   top: 25,
    //   left: 10,
    //   right: 20,
    //   bottom: 25,
    // };
  
  
    constructor(x, y) {
      super();
      this.loadImage('img/4.Marcadores/1.Coins/1.png');
      this.loadImages(this.IMAGES_COIN);
      this.x = x;
      this.y = y;
      this.animate();
    }
  
    animate() {
      setInterval(() => {
        this.playAnimation(this.IMAGES_COIN);
      }, 130);
    }
  }