class Fish extends MoveableObject {
  width = 70;
  height = 70;
  currentImage=0;
  IMAGES_FISH_SWIM = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  constructor() {
    super().loadImage(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.loadImages(this.IMAGES_FISH_SWIM);

    this.animateMove();

    this.x = 200 + Math.random() * 3600;
    this.y = 30 + Math.random() * 400;
    this.speed = 0.2 + Math.random() * 3;
    this.animate();
  }

  animateMove() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_FISH_SWIM.length;
      let path = this.IMAGES_FISH_SWIM[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 180);
  }
}





class Jellyfish extends MoveableObject {
  width = 80;
  height = 80;

  constructor() {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = 200 + Math.random() * 3600;
    this.y = 30 + Math.random() * 400;
    this.speed = 0.2 + Math.random() * 3;
    this.animate();
  }

  animate() {
    setInterval(() => {}, 1000 / 60);
  }
}
