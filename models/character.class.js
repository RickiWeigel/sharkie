class Character extends MoveableObject {
  y = 170;
  x = 0;
  height = 250;
  width = 270;

  constructor() {
    super().loadImage("img/1.Sharkie/1.IDLE/1.png");
  }

  attack() {}

  slap() {}
}
