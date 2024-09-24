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
  rect(70, 125, 15, 85, 20);
  rect(40, 150, 15, 55, 20);
  rect(315, 125, 15, 85, 20);
  rect(345, 150, 15, 55, 20);

  fill("white");
  rect(40, 150, 10, 55);
  rect(350, 150, 10, 55);
  
  fill("red");
  rect(135, 125, 15, 85, 20);
  rect(165, 150, 15, 55, 20);
  rect(220, 150, 15, 55, 20);
  rect(250, 125, 15, 85, 20);
  
}
