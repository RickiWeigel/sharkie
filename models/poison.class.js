class Poison extends MovableObject {
  IMAGES_POISON = [
    "img/4.Marcadores/Posión/Animada/1.png",
    "img/4.Marcadores/Posión/Animada/2.png",
    "img/4.Marcadores/Posión/Animada/3.png",
    "img/4.Marcadores/Posión/Animada/4.png",
    "img/4.Marcadores/Posión/Animada/5.png",
    "img/4.Marcadores/Posión/Animada/6.png",
    "img/4.Marcadores/Posión/Animada/7.png",
    "img/4.Marcadores/Posión/Animada/8.png",
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
    this.loadImage('img/4.Marcadores/Posión/Animada/1.png');
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
