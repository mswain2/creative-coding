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
  rect(50, 175, 300, 200, 50); 
  
  stroke(100);
  fill(255);
  circle(200, 220, 300);

}
