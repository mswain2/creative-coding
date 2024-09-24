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
  circle(120, 322, 40);
  circle(200, 322, 40);
  circle(280, 322, 40);
  fill(150);
  circle(240, 322, 40);
  circle(160, 322, 40);
 
}
