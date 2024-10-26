
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

function draw() {
  background("MediumSeaGreen");

  if (mouseX > x){
    xspeed = speedfactor;
  }else{
    xspeed = -speedfactor;
  }

  if (mouseY > y){
    yspeed = speedfactor;
  }else{
    yspeed = -speedfactor;
  }

  if (x-25 == 0 || x + 25 == width){
    xspeed = 0;
  }

  if (y-25 == 0 || y + 25 == height){
    yspeed = 0;
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
  }

}
