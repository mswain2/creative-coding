function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Changing the background color to a light grey
  background(150);

  noStroke();
  fill(240);
  rect(100, 75, 200, 250, 80, 80, 10, 10);
  circle(120, 320, 40);
  circle(200, 320, 40);
  circle(280, 320, 40);
  fill(150);
  circle(240, 324, 40);
  circle(160, 324, 40);
 
  fill("purple");
  angleMode(DEGREES);
  arc(200, 200, 100, 100, 0, 180);
  fill("pink");
  rect(175, 200, 50, 75, 10, 10, 80, 80);
   
  fill(0);
  circle(250, 150, 50);
  stroke(0);
  strokeWeight(6);
  line(125, 125, 150, 150);
  line(175, 175, 150, 150);
 
}
