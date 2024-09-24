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
  circle(125, 323, 40);
  circle(325, 323, 40);
  circle(225, 323, 40);
  fill(150);
  circle(275, 323, 40);
  circle(175, 323, 40);
 
}
