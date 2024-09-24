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
  rect(80, 280, 60, 20, 20);
  rect(260, 280, 60, 20, 20);

  fill("red");
  rect(65, 125, 20, 85, 20);
  rect(315, 125, 20, 85, 20);

  
}
