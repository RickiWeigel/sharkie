class Level {
  backgroundObjects;
  enemies;
  bubbles;
  poison;
  coin;
  level_end_x = 2160;
  constructor(backgroundObjects, enemies, bubbles, poison, coin) {
    this.backgroundObjects = backgroundObjects;
    this.enemies = enemies;
    this.bubbles = bubbles;
    this.poison = poison;
    this.coin = coin;
  }
}
