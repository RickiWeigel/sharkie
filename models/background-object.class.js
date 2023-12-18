class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;

  /**
   * Constructor for an object with an image loaded from the specified path and a given x-coordinate.
   *
   * @param {string} imagePath - The path to the image file.
   * @param {number} x - The initial x-coordinate of the object.
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height;
  }
}
