class Bubble extends MovableObject {
  y = 500;
  postionX;
  size = this.rondomSizeForBubbles();
  bubbleSpeed = Math.random() * 5 + 0.5;
  bubble_sound = new Audio("audio/bubbles.mp3");

  constructor() {
    super().loadImage("img/3.Background/Layers/5.Water/bubble.png");
    this.x = this.rondomPositionForBubbles();
    this.width = this.size;
    this.height = this.size;
    this.moveBubbleUp(this.bubbleSpeed);
  }

  rondomPositionForBubbles() {
    this.positionX = 50 + Math.floor(Math.random() * 2880);
    return this.positionX;
  }

  rondomSizeForBubbles() {
    this.size = 7 + Math.floor(Math.random() * 25);
    return this.size;
  }

  
  moveBubbleUp(bubbleSpeed) {
    this.bubble_sound.volume = Math.random() * 0.005;
    this.bubble_sound.pause();
    setTimeout(() => {
      setInterval(() => {
        this.y -= bubbleSpeed;
        if (this.y <= -10) {
          if (!mute) {
            this.bubble_sound.play();
          }else{
            this.bubble_sound.pause();
          }
          this.y = 500;
          this.x = this.rondomPositionForBubbles();
        }
      }, 1000 / 60);
    }, 10);
  }
}
