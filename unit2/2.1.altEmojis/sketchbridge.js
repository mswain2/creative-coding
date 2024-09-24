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

}
