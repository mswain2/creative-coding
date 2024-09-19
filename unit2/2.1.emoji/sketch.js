function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(173, 232, 244);

  stroke(100);
  fill(255); 
  rect(50, 200, 300, 175, 50); 
  
  stroke(100);
  fill(255);
  circle(100, 100, 150);

  stroke(100);
  fill(255);
  circle(300, 100, 150);
}
