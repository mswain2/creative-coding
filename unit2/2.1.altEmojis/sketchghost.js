//Here is the link for the emoji I recreated. https://emojipedia.org/ghost
//I wanted to create another character that wasn't an animal and wasn't a face.

function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Changing the background color to a light grey
  background(150);
   
  //Change to no stroke and make the color white. Create a rounded rectangle for the top of the ghost.
  noStroke();
  fill(240);
  rect(100, 75, 200, 250, 80, 80, 10, 10);
  //Create white circles to represent the bottom of the ghost.
  circle(120, 320, 40);
  circle(200, 320, 40);
  circle(280, 320, 40);
  //Create two lines to represent the arms.
  stroke(240);
  strokeWeight(50);
  line(110, 200, 90, 180);
  line(290, 200, 310, 180);

  //Create some circles that are the same color as the background to make folds in the bottom of the ghost.
  noStroke();
  fill(150);
  circle(240, 324, 40);
  circle(160, 324, 40);
 
  //Make the fill purple and make a half circle to represent the mouth.
  fill("purple");
  angleMode(DEGREES);
  arc(200, 200, 100, 100, 0, 180);
  
  //Make the fill pink and a half rounded rectangle to represent the tongue.
  fill("pink");
  rect(175, 200, 50, 75, 10, 10, 80, 80);
   
  //Make the fill to zero and create a circle for the open eye.
  fill(0);
  circle(250, 150, 50);

  //Make the stroke black and create two lines to make the winky eye.
  stroke(0);
  strokeWeight(6);
  line(130, 130, 175, 150);
  line(130, 170, 175, 150);
 
}
