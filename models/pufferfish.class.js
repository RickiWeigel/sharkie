class pufferfish extends MoveableObject {
  height = 70;
  width = 70;

  constructor() {
    super().loadImage("img/2.Enemy/pufferfish/1.Swim/1.swim1.png");
    this.x = 400 + Math.floor(Math.random() * 721);
    this.y = Math.floor(Math.random() * 410);
  }
}
