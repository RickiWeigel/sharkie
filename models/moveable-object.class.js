class MoveableObject {
    x;
    y;
    img;


    loadImage(path){
        this.img = new Image();
        this.image.src = path;
    }


    moveRight() {
        console.log('moving right')
    }

    moveLeft(){

    }
}
