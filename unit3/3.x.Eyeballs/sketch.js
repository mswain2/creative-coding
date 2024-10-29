function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

let x;
let y;
let ang = 0;

function draw() {
  background(0);
 
  fill("Indigo");
  circle(400, 300, 200);
  
  fill("white");
  
 /* // left eye
  lx = 150;
  ly = 170;
  
  // distance (hypotenuse) between mouse and point
  let ld = sqrt((mouseX - lx)**2 + (mouseY - ly)**2)
  
  if (mouseX > lx){
    lang = asin((mouseY - ly) / ld);
  }else{
    lang = (90 - asin((mouseY - ly) / ld)) + 90;
  }
  push();
  translate(lx,ly);
  rotate(lang);
  ellipse(0,0,70,70);
  fill(0);
   circle(20,0,30);
  pop();
  */
  // right eye
  x = 400;
  y = 300;
  
  // distance (hypotenuse) between mouse and point
  let rd = sqrt((mouseX - x)**2 + (mouseY - y)**2)
  
  if (mouseX > x){
    rang = asin((mouseY - y) / rd);
  }else{
    rang = (90 - asin((mouseY - y) / rd)) + 90;
  }
  push();
  translate(x,y);
  rotate(rang);
  ellipse(0,0,80,80);
  fill(0);
  circle(20,0,40);
  pop();
}

