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

  fill("DarkCyan");
  rect(50 ,280, 300, 50);
  ellipse(80, 280, 60, 50);
  ellipse(120, 275, 60, 50);
  ellipse(160, 280, 60, 50);
  ellipse(200, 275, 60, 50);
  ellipse(240, 280, 60, 50);
  ellipse(280, 275, 60, 50);
  ellipse(320, 280, 60, 50);

  fill("red");
  rect(50, 200, 300, 20);

  rect(100, 100, 20, 200, 20);
  rect(280, 100, 20, 200, 20);
  
  fill("gray");
  rect(80, 280, 60, 20, 20);
  rect(260, 280, 60, 20, 20);

  fill("red");
  rect(70, 125, 15, 85, 20);
  rect(40, 150, 15, 60, 20);
  rect(315, 125, 15, 85, 20);
  rect(345, 150, 15, 60, 20);

    rect(135, 125, 15, 85, 20);
  rect(165, 150, 15, 60, 20);
  rect(220, 150, 15, 60, 20);
  rect(250, 125, 15, 85, 20);
  
  fill("CadetBlue");
  rect(50 ,320, 300, 30);
  ellipse(80, 320, 60, 50);
  ellipse(120, 315, 60, 50);
  ellipse(160, 320, 60, 50);
  ellipse(200, 315, 60, 50);
  ellipse(240, 320, 60, 50);
  ellipse(280, 315, 60, 50);
  ellipse(320, 320, 60, 50);

  noFill();
  stroke("red");
  strokeWeight(20);
  arc(200, 75, 180, 157, 0, 135);
  arc(20, 75, 180, 157, 0, 90);
  arc(380, 75, 180, 157, 90, 135);
  
  noStroke();
  fill("white");
  rect(0, 100, 50, 200);
  rect(350, 100, 10, 200);
  
  fill("yellow");
  circle(200, 100, 50);
  fill("RebeccaPurple");
  circle(188, 88, 50);
}
