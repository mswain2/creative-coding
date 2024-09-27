function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}

function draw() {
  background(220);

 //Translate off of the edge of the canvas.
 translate(70, 70);
  
  //Use a for loop to draw 8 columns.
  for(let x = 0; x < 8; x++){
    //Use a for loop to draw 8 rows.
    for(let y = 0; y < 8; y++){
        //Push and pop to only temporarily rotate and transform.
        push();

        //Generate 3 random integer values to serve as the rgb values for the fill.
        let r = random(255);
        let g = random(255);
        let b = random(255);
        //Use the randomized values to set the fill to a random color.
        fill(r, g, b);

        //Generate 3 more random integer values to serve as the rgb values for the stroke.
        let sr = random(255);
        let sg = random(255);
        let sb = random(255);
        //Use the above randomized values to set the stroke to a random color.
        stroke(sr, sg, sb);
        //Randomize the stroke weight. I randomly decided to use only up to a stroke weight of 10.
        strokeWeight(random(10));

        //Translate to the next spot to draw a rectangle.
        translate(x * 150, y * 150);
        //Change the angle mode and the rectMode.
        angleMode(DEGREES);
        rectMode(CENTER);
        //Randomly generate a number to rotate the rectangle. I wanted to add movement instead of just
        //changing the colors and sizes.
        rotate(random(350));

        //Draw the rectangle using randomly generated width and height.
        rect(0, 0, random(140), random(140));
        pop();
    }
  }
}
