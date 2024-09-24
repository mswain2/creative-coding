//Here is the link to the emoji I recreated. https://emojipedia.org/zipper-mouth-face
//I wanted to do a face, but didn't want to choose an easy/plain one.

function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Changing the background color to a light green
  background(173, 244, 222);

  stroke("gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250); 

  //Change to noStroke and make the fill white. Create two circles for the eyes.
  noStroke();
  fill(255);
  circle(150, 175, 75);
  circle(250, 175, 75);

  //Change the fill to black and make two circles for the pupils.
  fill(0);
  circle(150, 175, 30);
  circle(250, 175, 30);

  //Change the fill to a gray color and create the long rectanlge for the length of the zipper.
  fill(150);
  rect(114, 240, 175, 17);

  //Create different ellipses to represent the teeth of the zipper. They are offset
  //By a certain amount and flip over the rectangle created as the middle line.
  ellipse(124, 253, 20, 25);
  ellipse(144, 243, 20, 25);
  ellipse(164, 253, 20, 25);
  ellipse(184, 243, 20, 25);
  ellipse(204, 253, 20, 25);
  ellipse(224, 243, 20, 25);
  ellipse(244, 253, 20, 25);
  ellipse(264, 243, 20, 25);

  //Create and rotate the actual zipper thing that you pull. 
  push();
  angleMode(DEGREES);
  translate(283, 250);
  rotate(-45);
  rect(0, 0, 25, 35, 50, 50, 20, 20);  
  pop(); 
 
  //Create a small yellow circle to place over the zipper pull thing to make it look like a hole.
  fill("yellow");
  circle(295, 250, 10);
}
