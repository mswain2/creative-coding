function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Changing the background color to white
  background(255);

  noStroke();
  fill("RebeccaPurple");
  square(50, 50, 300, 20);

  fill("red");
  rect(50, 200, 300, 20);
  rect(100, 100, 20, 200, 20);
  rect(280, 100, 20, 200, 20);
  
  fill("gray");
  rect(75, 300, 50, 20, 20);
  rect(255, 300, 50, 20, 20);
}
