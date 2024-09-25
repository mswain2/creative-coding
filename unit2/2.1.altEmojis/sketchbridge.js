//Here is the link to the emoji I recreated: https://emojipedia.org/bridge-at-night
//I really like how this one turned out. It's definitely my favorite of the new three.

function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  //Changing the background color to white
  background(255);

  //Make a purple rounded square for the background of the emoji.
  noStroke();
  fill("RebeccaPurple");
  square(50, 50, 300, 20);

  //Make a line of dark blue ellipses in the background to represent water.
  fill("DarkCyan");
  rect(50 ,280, 300, 50);
  ellipse(80, 280, 60, 50);
  ellipse(120, 275, 60, 50);
  ellipse(160, 280, 60, 50);
  ellipse(200, 275, 60, 50);
  ellipse(240, 280, 60, 50);
  ellipse(280, 275, 60, 50);
  ellipse(320, 280, 60, 50);

  //Change the fill to red for the bridge.
  fill("red");
  //The bottom horizontal bar of the bridge.
  rect(50, 200, 300, 20);

  //Two rounded rectangles for the tall supports of the bridge.
  rect(100, 100, 20, 200, 20);
  rect(280, 100, 20, 200, 20);
    
  //Two gray rounded rectangles for the base of the bridge.
  fill("gray");
  rect(80, 280, 60, 20, 20);
  rect(260, 280, 60, 20, 20);

  //Change the fill back to red.
  fill("red");
  
  //Two rounded rectangles for the support lines of the left side of the bridge.
  rect(70, 125, 15, 85, 20);
  rect(40, 150, 15, 60, 20);
  
  //Two rounded rectangles for the support line of the right side of the bridge.
  rect(315, 125, 15, 85, 20);
  rect(345, 150, 15, 60, 20);

  //Four rounded rectangles for the support lines of the middle of the bridge.
  rect(135, 125, 15, 85, 20);
  rect(165, 150, 15, 60, 20);
  rect(220, 150, 15, 60, 20);
  rect(250, 125, 15, 85, 20);
  
  //Make a row of lighter blue ellipses to serve as the water in front of the bridge.
  fill("CadetBlue");
  rect(50 ,320, 300, 30);
  ellipse(80, 320, 60, 50);
  ellipse(120, 315, 60, 50);
  ellipse(160, 320, 60, 50);
  ellipse(200, 315, 60, 50);
  ellipse(240, 320, 60, 50);
  ellipse(280, 315, 60, 50);
  ellipse(320, 320, 60, 50);

  //Change to no fill and a thick red stroke.
  noFill();
  stroke("red");
  strokeWeight(20);
  //Create three open arcs to represent the curved part of the top of the bridge.
  arc(200, 75, 180, 157, 0, 135);
  arc(20, 75, 180, 157, 0, 90);
  arc(380, 75, 180, 157, 90, 135);
  
  //Change to no stroke and white fill to cover up the arcs crossing into the white background.
  noStroke();
  fill("white");
  rect(0, 100, 50, 200);
  rect(350, 100, 10, 200);
  
  //Change to yellow fill to create the moon.
  fill("yellow");
  circle(200, 100, 50);
  //Change to purple fill and create a purple circle to make the circle moon into a crescent moon.
  fill("RebeccaPurple");
  circle(188, 88, 50);
}
