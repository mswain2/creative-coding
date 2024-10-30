//I chose to do multiple "monsters" whose eyes would follow the cursor. I had two monsters, one with one eye, and
//one with two eyes. I think this turned out really cute, and I liked working on a project like this.

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

//Declare all variables outside of the draw loop.
let x;
let y;
let ang = 0;
let lx;
let ly;
let rx;
let ry;

function draw() {
  background(0);
 
  //Make the body of the first monster.
  fill("Indigo");
  circle(600, 400, 200);
  
  //Set the fill to white.
  fill("white");
 
  //Set x and y to where the eye should be.
  x = 600;
  y = 400;
  
  // distance (hypotenuse) between mouse and point
  let d = sqrt((mouseX - x)**2 + (mouseY - y)**2)
  
  //If the mouse is to the right of the eye
  if (mouseX > x){
    ang = asin((mouseY - y) / d);
  //If the mouse is to the left of the eye
  }else{
    ang = (90 - asin((mouseY - y) / d)) + 90;
  }

  //Push to make temporary changes
  push();
  //Translate based on the x and y and rotate based on the calculated angle
  translate(x,y);
  rotate(ang);
  //Draw the white part of the eye
  ellipse(0,0,80,80);
  //Set fill to black and draw the pupil
  fill(0);
  circle(20,0,40);
  //Pop changes
  pop();


  //Make second monster
  fill("Chartreuse");
  rect(100, -50, 250, 350, 30);
  
  //Set fill to white
  fill("White");

  //Set x and y of the left eye
  lx = 175;
  ly = 225;

  //Calculate the distance between the cursor and the left eye
  let ld = sqrt((mouseX - lx)**2 + (mouseY - ly)**2);

  //If the mouse is to the right of the eye
  if (mouseX > lx){
    ang = asin((mouseY - ly) / ld);
  //If the mouse is to the left of the eye
  }else{
    ang = (90 - asin((mouseY - ly) / ld)) + 90;
  }
  
  //Push to make temporary changes
  push();
  //Translate based on lx and ly and rotate based on calculated angle
  translate(lx,ly);
  rotate(ang);
  //Draw the white part of the eye
  ellipse(0,0,70,70);
  //Set the fill to black and draw the pupil
  fill(0);
  circle(20,0,30);
  //Pop the changes
  pop();

  //Set the fill to white
  fill("White");

  //Set the x and y of where the right eye should be
  rx = 275;
  ry = 225;

  //Calculate the distance between the right eye and the mouse
  let rd = sqrt((mouseX - rx)**2 + (mouseY - ry)**2)
  
  //If the mouse is to the right of the eye
  if (mouseX > rx){
    ang = asin((mouseY - ry) / rd);
  //If the mouse is to the left of the eye
  }else{
    ang = (90 - asin((mouseY - ry) / rd)) + 90;
  }
    
  //Push to make temporary changes
  push();
  //Translate based on rx and ry and rotate based on the angle
  translate(rx,ry);
  rotate(ang);
  //Draw the white part
  ellipse(0,0,70,70);
  //Set fill to black and draw the pupil
  fill(0);
  circle(20,0,30);
  //Pop changes
  pop();

}
