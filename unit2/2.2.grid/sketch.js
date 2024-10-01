function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}

function draw() {
  background(220);

  //Create variables so the number of rows and columns, the width, and the height of each rectangle can easily
  //be changed.
  let numRects = 6;
  let width = 90;
  let height = 70;
  
  //Calculate the distance between each rectange. Total canvas - space taken up by actual rectangles
  //divided by the total number of spaces needed (one more than the number of rectangles to account for the border.
  let dist = (1200 - (numRects * width)) / (numRects + 1);
  
  //Calculate how much translate needs to move to accommodate the distance between rectangles and the width
  //of the rectangles.
  let move = dist + width;

 //Translate off of the edge of the canvas.
 translate(dist + width/2, dist + width/2);
  
  //Use a for loop to draw specified number of columns.
  for(let x = 0; x < numRects; x++){
    //Use a for loop to draw specified number of rows.
    for(let y = 0; y < numRects; y++){
        //Push and pop to only temporarily rotate and transform.
        push();

        //Create a list of three colors to restrict the amount of randomness in colors.
        let colors = ['Aquamarine', 'DarkOrchid', 'HotPink'];

        //Randomly select a color for the fill
        let fillVal = random(colors);

        //Randomly select a color for the stroke.
        let strokeVal = random(colors);

        //Generate 3 random integer values to serve as the rgb values for the fill.
        //let r = random(255);
        //let g = random(255);
        //let b = random(255);
        
        //Use the randomized values to set the fill to a random color.
        fill(fillVal);

        //Generate 3 more random integer values to serve as the rgb values for the stroke.
        //let sr = random(255);
        //let sg = random(255);
        //let sb = random(255);
        
        //Use the above randomized values to set the stroke to a random color.
        stroke(strokeVal);
        //Randomize the stroke weight. I randomly decided to use only up to a stroke weight of 10.
        strokeWeight(random(10));

        //Translate to the next spot to draw a rectangle.
        translate(x * move, y * move);
        
        //Change the angle mode and the rectMode.
        angleMode(DEGREES);
        rectMode(CENTER);
        
        //Randomly generate a number to rotate the rectangle. I wanted to add movement instead of just
        //changing the colors and sizes.
        //Restrict the angles that the rectangles can rotate.
        rotate(random(-30, 30));

        //Draw the rectangle using randomly generated width and height.
        rect(0, 0, width, height);
        pop();
    }
  }
}
