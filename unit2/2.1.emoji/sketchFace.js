function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Changing the background color to a light blue
  background(173, 244, 222);

  stroke("gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250); 

  noStroke();
  fill(255);
  circle(150, 175, 75);
  circle(250, 175, 75);

  fill(0);
  circle(150, 175, 30);
  circle(250, 175, 30);

  fill(150);
  rect(114, 245, 175, 15);

  ellipse(118, 243, 20, 25);
  ellipse(138, 253, 20, 25);
  ellipse(158, 243, 20, 25);
  ellipse(178, 253, 20, 25);
  ellipse(198, 243, 20, 25);
  ellipse(218, 253, 20, 25);
  ellipse(238, 243, 20, 25);
  
}
