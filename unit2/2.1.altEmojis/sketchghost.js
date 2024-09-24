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
  rect(100, 75, 200, 250, 60, 60, 10, 10);
  circle(125, 320, 50);
  circle(325, 320, 50);
  circle(225, 320, 50);
  fill(150);
  circle(275, 320, 50);
  circle(175, 320, 50);
 
}
