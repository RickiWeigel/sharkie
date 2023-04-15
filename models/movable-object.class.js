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
        console.log('Moving right')
    }

    moveLeft(){
        this.x -= this.speed;
    }

    

    moveUp(){

    }

    moveDown(){

    }
}