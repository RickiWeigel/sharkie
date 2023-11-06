class Level {
    backgroundObjects;
    enemies;
    bubbles;
    poison;
    level_end_x = 2160;
    constructor(backgroundObjects, enemies, bubbles, poison){
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.bubbles = bubbles;
        this.poison = poison;
    }
}