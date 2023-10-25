class ThrowableObject extends MovableObject {
  IMAGES_;

  constructor(x, y) {
    super().loadImage(
      "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.width = 25;
    this.height = 25;
    this.x = x;
    this.y = y;
    this.bubbleShot()
  }

  bubbleShot() {
    this.speed = 10;
    setInterval(() => {
        this.moveRight(); 
    }, 1000/60);
   
  }
}
