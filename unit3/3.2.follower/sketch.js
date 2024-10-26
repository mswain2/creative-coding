
function preload(){
    img = loadImage('goat.png');
}


function setup() {
  createCanvas(800, 800);
}


let speedfactor = 2;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 50;
let y = 50;
let score = 5;

function draw() {
  background("MediumSeaGreen");
  textSize(100);
  
  text(score, 775, 25);

  if (mouseX > x){
    if(x + 24 != width){
        xspeed = speedfactor;
    }else{xspeed = 0;}
  }else{
    if (x - 24 != 0){
        xspeed = -speedfactor;
    }else{xspeed = 0;}
  }

  if (mouseY > y){
    if (y + 24 != height){
        yspeed = speedfactor;
    }else{
        yspeed = 0;
    }
  }else{
    if (y - 24 != 0){
        yspeed = -speedfactor;
    }else{
        yspeed = 0;
    }
  }

  x = x + xspeed;
  y = y + yspeed;


  image(img, x-25, y-25, 50, 50);
  
  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);  

  if(d <= 5){
    x = 50;
    y = 50;
    xspeed = speedfactor;
    yspeed = speedfactor;
    score = score - 1; 
  }

  if (score == 0){ 
    text(score, 775, 55);
    text("Game Over", 400, 400);
    noLoop();
  }

}
