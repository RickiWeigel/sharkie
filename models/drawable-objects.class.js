class DrawableObjects {
  x = 120;
  y = 250;
  height = 150;
  width = 170;
  img;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.warn("Error loading image", e);
      console.log("could not load Image,", this.img.src);
    }
  }

  drawHitbox(ctx) {
    if (
      this instanceof Character ||
      this instanceof Pufferfish ||
      this instanceof Endboss ||
      this instanceof ShotableObject
    ) {
      ctx.beginPath();
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.right,
        this.height - this.offset.bottom
      );
      ctx.strokeStyle = "red"; // Farbe des Rahmens
      ctx.lineWidth = 2; // Breite des Rahmens
      ctx.stroke();
    }
  }
}
