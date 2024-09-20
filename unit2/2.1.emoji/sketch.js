function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(173, 232, 244);

  stroke(100);
  strokeWeight(50);
  fill(150);
  circle(100, 120, 100);
  circle(300, 120, 100); 

  noStroke();
  fill(255);
  circle(200, 220, 290);

  noStroke();
  fill(255); 
  rect(50, 175, 300, 200, 60); 

  noStroke();
  fill(100);
  push();
  translate(140, 190);
  rotate(10);
  ellipse(0, 0, 85, 115);
  pop();
  push();
  translate(260, 190);
  rotate(-10);
  ellipse(0, 0, 85, 115);
  pop();

  noStroke();
  fill(10);
  ellipse(140, 190, 25, 50);
  ellipse(260, 190, 25, 50);
  fill(255);
  circle(137, 180, 10);
  circle(257, 180, 10);

  f
}
