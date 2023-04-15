class MoveableObject {
    speed = 1;
    x = 0;
    y = 250;
    height = 250;
    width = 250;
    img;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    
    moveUp(){
        this.y -= this.speed;
    }

    moveDown(){
        this.y += this.speed;
    }
}