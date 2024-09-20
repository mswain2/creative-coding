function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Changing the background color to a light blue
  background(173, 232, 244);

  //Creating the ears
  //Making the stroke thicker to and setting it to a dark gray.
  stroke(100);
  strokeWeight(25);
  //Setting the fill to a lighter gray color.
  fill(150);
  //Creating two circles to serve as the ears.
  circle(100, 120, 100);
  circle(300, 120, 100); 

  //Making it so there is no stroke.
  noStroke();
  //Changing the fill color to white
  fill(255);
  //Creating a large circle to act as part of the head.
  circle(200, 220, 290);

  //Creating a rounded rectangle to act as the lower part of the head.
  rect(50, 175, 300, 200, 60); 
  
  //This is the link to a youtube video that I watched to figure out rotating shapes.
  //https://www.youtube.com/watch?v=o9sgjuh-CBM
  
  //Changing the fill to the same dark gray as the ears.
  fill(100);
  //Pushing so I can undo the translate and rotate.
  push();
  //Translating to the coordinates where I want the left eye patch.
  translate(140, 190);
  //Rotating 10 degrees around the translated coordinates
  rotate(10);
  //Creating the left eye patch
  ellipse(0, 0, 85, 115);
  //Popping/undoing the translate and rotate.
  pop();
  //Pushing so I can undo the translate and rotate.
  push();
  //Translating to the coordinates where I want the right eye patch.
  translate(260, 190);
  //Rotating -10 degrees around the translated coordinates.
  rotate(-10);
  //Creating the right eye patch.
  ellipse(0, 0, 85, 115);
  //Popping/undoing the translate and rotate for the second eye patch/
  pop();

  //Changing the fill color to black.
  fill(10);
  //Creating two ellipses to represent the eyes.
  ellipse(140, 190, 25, 50);
  ellipse(260, 190, 25, 50);
  //The eyes looked really creepy alone so I decided to add two little white dots for depth.
  //Changing the fill color to white.
  fill(255);
  //Creating two small white circles for eye highlights.
  circle(137, 180, 10);
  circle(257, 180, 10);

  //Changing fill color to black.
  fill(10);
  //Creating an upside down triangle to represent the nose. Sadly, I could not round it.
  triangle(200, 280, 175, 250, 225, 250);

  //Chaning so there is no fill.
  noFill();
  //Setting the stroke color to black and the weight to be thicker.
  stroke(10);
  strokeWeight(7);
  //Creating two arcs (half-circles) to represent the mouth.
  arc(170, 300, 60, 50, TWO_PI, PI);
  arc(230, 300, 60, 50, TWO_PI, PI);



}
