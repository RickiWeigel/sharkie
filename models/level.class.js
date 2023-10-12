class Level {
    backgroundObjects;
    enemies;
    bubbles;
    level_end_x = 2160;
    constructor(backgroundObjects, enemies, bubbles){
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.bubbles = bubbles;
    }
}