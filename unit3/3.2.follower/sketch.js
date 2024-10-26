
function preload(){
    img = loadImage('goat.png');
}


function setup() {
  createCanvas(800, 800);
}


let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 50;
let y = 50;


function draw() {
  background("MediumSeaGreen");

  image(img, x-25, y-25, 50, 50);
 
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
 
  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);  

  if(d <= 5){
    x = 50;
    y = 50;
    xspeed = speedfactor;
    yspeed = speedfactor; 
  }

}
