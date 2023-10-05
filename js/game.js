let canvas;
let character = new Image();
let ctx;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");


    character.src = '../img/1.Sharkie/1.IDLE/1.png'

    ctx.drawImage(character, 50, 50, 250, 270)
}