class Poison extends MovableObject {
  IMAGES_POISON = [
    "img/4.Marcadores/poison/1.png",
    "img/4.Marcadores/poison/2.png",
    "img/4.Marcadores/poison/3.png",
    "img/4.Marcadores/poison/4.png",
    "img/4.Marcadores/poison/5.png",
    "img/4.Marcadores/poison/6.png",
    "img/4.Marcadores/poison/7.png",
    "img/4.Marcadores/poison/8.png",
  ];
  width = 60;
  height = 70;
  offset = {
    top: 25,
    left: 10,
    right: 20,
    bottom: 25,
  };


  constructor(x, y) {
    super();
    this.loadImage('img/4.Marcadores/poison/1.png');
    this.loadImages(this.IMAGES_POISON);
    this.x = x;
    this.y = y;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_POISON);
    }, 80);
  }
}
