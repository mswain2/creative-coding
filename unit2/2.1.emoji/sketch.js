function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(173, 232, 244);

  noStroke();
  fill(255);
  circle(200, 220, 290);

  noStroke();
  fill(255); 
  rect(50, 175, 300, 200, 60); 
 
  stroke(100);
  strokeWeight(10);
  fill(150);
  circle(100, 100, 100);
  circle(300, 100, 100); 
}
