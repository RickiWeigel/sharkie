class Fish extends MoveableObject {
  width = 70;
  height = 70;

  constructor() {
    super().loadImage(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.x = 300 + Math.random() * 3600; // Zahl zwischen 200 und 700
    this.y = 30 + Math.random() * 400;
    this.speed = 0.2 + Math.random() * 3;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 20);
  }
}
