//This is the link to the emoji I was trying to recreate. https://emojipedia.org/panda
//I added some details that aren't on that emoji to make it look nicer. I think it turned out 
//really well and I really like it!

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
}
