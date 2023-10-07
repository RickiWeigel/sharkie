class Bubble extends MoveableObject {
  y = 500;
  postionX;
  size = this.rondomSizeForBubbles();
  bubbleSpeed = Math.random() * 5 + 0.5;

  constructor() {
    super().loadImage("img/3.Background/Layers/5.Water/bubble.png");
    this.x = this.rondomPositionForBubbles();
    this.width = this.size;
    this.height = this.size;
    this.moveBubbleUp(this.bubbleSpeed);
  }

  rondomPositionForBubbles() {
    this.positionX = 50 + Math.floor(Math.random() * 720);
    return this.positionX;
  }

  rondomSizeForBubbles() {
    this.size = 5 + Math.floor(Math.random() * 20);
    return this.size;
  }

  moveBubbleUp(bubbleSpeed) {
    setTimeout(() => {
      const intervalID = setInterval(() => {
        this.y -= bubbleSpeed;
        if (this.y <= -20) {
          clearInterval(intervalID);
           // Intervall stoppen, wenn die Bedingung erfüllt ist
        }
      }, 1000 / 60);
    }, Math.floor(Math.random() * 10000));
  }
}
