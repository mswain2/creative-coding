//I ran into a lot of trouble with collision with circles so I changed all of the shapes to squares.
//I also ran into some trouble with the collision working perfectly all the time because of the different
//speeds. I could've made them all move at the same speed and I think that would fix it, but I like the
//varied speeds and don't mind that it doesn't collide properly sometimes. I made multiple shapes,
//added collision between the shapes, and made sure a change happened when the different shapes collided.

function setup() {
  createCanvas(500, 400);
}

//Create the x and y variables for the square and set to arbitrary values within the canvas.
let squarex = 250;
let squarey = 73;
//Set the speed of both the x and y variables to 1
let sqxspeed = 1;
let sqyspeed = 1;
//Make a list of different purple colors to change through when a wall is hit
let squareColors = ["Indigo", "MediumPurple", "Orchid", "Plum", "Purple", "RebeccaPurple", "BlueViolet", "DarkMagenta", "DarkOrchid", "DarkViolet"];
//Initialize the square color
let sqColor = "Indigo";


//Create the x and y variables for the rectangle and set to arbitrary values within the canvas.
let rectx = 100;
let recty = 200;
//Set the speed of both the x and y variables to 2
let rectxspeed = 2;
let rectyspeed = 2;
//Make a list of different pink colors to change through when a wall is hit
let rectColors = ["Salmon", "Pink", "MediumVioletRed", "LightPink", "HotPink", "Fuchsia", "DeepPink", "Violet", "PaleVioletRed", "Magenta", "LightCoral"];
//Initialize the rectangle color
let rectColor = "Salmon";


//Create the x and y variables for the rounded square and set to arbitrary values within the canvas.
let roundx = 420;
let roundy = 170;
//Set the speed of the x variable to 2 and the speed of the y variable to 1
let roundxspeed = 2;
let roundyspeed = 1;
//Make a list of different blue colors to change through when a wall is hit
let roundColors = ["LightSkyBlue", "Aqua", "CornflowerBlue", "DarkCyan", "LightBlue", "MediumTurquoise", "Navy", "PowderBlue", "Teal", "CadetBlue", "DarkBlue", "DarkSlateBlue", "DarkTurquoise", "DeepSkyBlue", "DodgerBlue", "MidnightBlue", "SkyBlue", "SteelBlue", "Turquoise"];
//Initialize the color of the rounded square
let roundColor = "LightSkyBlue";





function draw() {
  background(220);

  //Set to no stroke
  noStroke();

  //Draw the square.
  //Set the fill to the current color of the square
  fill(sqColor);
  //Calculate the x and y position based on the speed
  squarex = squarex + sqxspeed;
  squarey = squarey + sqyspeed;
  //Draw the square at those coordinates
  square(squarex, squarey, 50);

  //If the square has hit the right wall or the left wall
  if(squarex == 500-50 || squarex == 0){
    //Change the direction
    sqxspeed *= -1;
    //Randomize a new color
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
  }

  //If the square has hit the top wall or the bottom wall
  if(squarey == 0 || squarey+50 == 400){
    //Change the direction
    sqyspeed *= -1;
    //Randomize a new color
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
  }

  //If the square has hit the rounded square based on the x variable.
  if((squarex + 50 == roundx && (roundy + 30 >= squarey && roundy <= squarey + 50)) || (squarex == roundx + 30 && (roundy + 30 >= squarey && roundy <= squarey + 50))){
    //If they collided head to head, change both of their speeds.
    if(sqxspeed > 0 && roundxspeed < 0 || sqxspeed < 0 && roundxspeed > 0){
        sqxspeed *= -1;
        roundxspeed *= -1;
    //If the square collided into the rounded square, just change the square speed.
    }else{
        sqxspeed *= -1;
    }
    //Randomize the color after the collision.
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }

  //If the square has hit the rounded square based on the y variable.
  if((squarey + 50 == roundy && (roundx + 30 >= squarex && roundx <= squarex + 50)) || (squarey == roundy + 30 && (roundx + 30 >= squarex && roundx <= squarex + 50))){
    //If they collided head to head, change both of their speeds.
    if(sqyspeed > 0 && roundyspeed < 0 || sqyspeed < 0 && roundyspeed > 0){
        sqyspeed *= -1;
        roundyspeed *= -1;
    //If the square collided into the rounded square, just change the square speed.
    }else{
        sqyspeed *= -1;
    }
    //Randomize the colors after the collision. 
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }


 //If the square has hit the rectangle based on the x variable.
  if((squarex + 50 == rectx && (recty + 30 >= squarey && recty <= squarey + 50)) || (squarex == rectx + 40 && (recty + 30 >= squarey && recty <= squarey + 50))){
    //If they collided head to head, change both of their speeds.
    if(sqxspeed > 0 && rectxspeed < 0 || sqxspeed < 0 && rectxspeed > 0){
        sqxspeed *= -1;
        rectxspeed *= -1;
    //If the square collided into the rectangle, just change the square speed.
    }else{
        sqxspeed *= -1;
    }
    //Randomize the color after the collision.
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(rectColors);
    while(rtemp == rectColor){
        rtemp = random(rectColors);
    }
    rectColor = rtemp;
  }

  //If the square has hit the rectangle based on the y variable.
  if((squarey + 50 == recty && (rectx + 40 >= squarex && rectx <= squarex + 50)) || (squarey == recty + 30 && (rectx + 40 >= squarex && rectx <= squarex + 50))){
    //If they collided head to head, change both of their speeds.
    if(sqyspeed > 0 && rectyspeed < 0 || sqyspeed < 0 && rectyspeed > 0){
        sqyspeed *= -1;
        rectyspeed *= -1;
    //If the square collided into the rectangle, just change the square speed.
    }else{
        sqyspeed *= -1;
    }
    //Randomize the colors after the collision. 
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(rectColors);
    while(rtemp == rectColor){
        rtemp = random(rectColors);
    }
    rectColor = rtemp;
  }






  
  //Draw a small rectangle
  //set the fill to the current color of the rectangle.
  fill(rectColor);
  //Calculate the x and y vars based on the speed.
  rectx = rectx + rectxspeed;
  recty = recty + rectyspeed;
  //Draw the rectangle at the above coordinates.
  rect(rectx, recty, 40, 30);
  
  //If the rectangle has hit the left or right wall
  if(rectx == 0 || rectx + 40 == 500){
    //Change direction
    rectxspeed *= -1;
    //Randomize a new color
    let temp = random(rectColors);
    while(temp == rectColor){
        temp = random(rectColors);
    }
    rectColor = temp;
  }

  //If the rectangle has hit the top or bottom wall.
  if(recty == 0 || recty + 30 == 400){
    //Change direction
    rectyspeed *= -1;
    //Randomize a new color
    let temp = random(rectColors);
    while(temp == rectColor){
        temp = random(rectColors);
    }
    rectColor = temp;
  }


  //If the rounded square has collided with the rectangle based on the x variable
  if((roundx == rectx + 40 && (roundy + 30 >= recty && roundy <= recty + 30)) || (roundx + 30 == rectx && (roundy + 30 >= recty && roundy <= recty + 30))){
    //If they collided head to head, change both speeds.
    if(rectxspeed > 0 && roundxspeed < 0 || rectxspeed < 0 && roundxspeed > 0){
        rectxspeed *= -1;
        roundxspeed *= -1;
    //If the rectanlge collided with the rounded square, only change the rectangle.
    }else{
        rectxspeed *= -1;
    }
    //Randomize the colors after collision
    let temp = random(rectColors);
    while(temp == rectColor){
        temp = random(rectColors);
    }
    rectColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }


  //If the rounded square has collided with the rectangle based on the y variable
  if((roundy == recty + 30 && (roundx + 30 >= rectx && roundx <= rectx + 40)) || (recty == roundy + 30 && (roundx + 30 >= rectx && roundx <= rectx + 40))){
    //If they collided head to head, change both speeds.
    if(rectyspeed > 0 && roundyspeed < 0 || rectyspeed < 0 && roundyspeed > 0){
        rectyspeed *= -1;
        roundyspeed *= -1;
    //If the rectangle collided with the rounded square, only change the rectangle.
    }else{
        rectyspeed *= -1;
    }
    //Randomize the colors after collision.
    let temp = random(rectColors);
    while(temp == rectColor){
        temp = random(rectColors);
    }
    rectColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }

  //If the square has hit the rectangle based on the x variable.
  if((squarex + 50 == rectx && (recty + 30 >= squarey && recty <= squarey + 50)) || (squarex == rectx + 40 && (recty + 30 >= squarey && recty <= squarey + 50))){
    //If they collided head to head, change both of their speeds.
    if(sqxspeed > 0 && rectxspeed < 0 || sqxspeed < 0 && rectxspeed > 0){
        sqxspeed *= -1;
        rectxspeed *= -1;
    //If the square collided into the rectangle, just change the square speed.
    }else{
        rectxspeed *= -1;
    }
    //Randomize the color after the collision.
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(rectColors);
    while(rtemp == rectColor){
        rtemp = random(rectColors);
    }
    rectColor = rtemp;
  }

  //If the square has hit the rectangle based on the y variable.
  if((squarey + 50 == recty && (rectx + 40 >= squarex && rectx <= squarex + 50)) || (squarey == recty + 30 && (rectx + 40 >= squarex && rectx <= squarex + 50))){
    //If they collided head to head, change both of their speeds.
    if(sqyspeed > 0 && rectyspeed < 0 || sqyspeed < 0 && rectyspeed > 0){
        sqyspeed *= -1;
        rectyspeed *= -1;
    //If the square collided into the rectangle, just change the square speed.
    }else{
        rectyspeed *= -1;
    }
    //Randomize the colors after the collision. 
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(rectColors);
    while(rtemp == rectColor){
        rtemp = random(rectColors);
    }
    rectColor = rtemp;
  }








  
  //Draw the rounded square.
  //Set the fill to the current color of the rounded square
  fill(roundColor);
  //Calculate the x and y variables based on the speed
  roundx = roundx + roundxspeed;
  roundy = roundy + roundyspeed;
  //Draw the square at the above coordinates and round it.
  square(roundx, roundy, 30, 10);
  //If the rounded square has hit the left wall or the right wall
  if(roundx == 0 || roundx + 30 == 500){
    //Change direction
    roundxspeed *= -1;
    //Randomize a new color
    let temp = random(roundColors);
    while(temp == roundColor){
        temp = random(roundColors);
    }
    roundColor = temp;
  } 

  //If the rounded square has hit the top wall or the bottom wall
  if(roundy == 0 || roundy + 30 == 400){
    //Change direction
    roundyspeed *= -1;
    //Randomize a new color
    let temp = random(roundColors);
    while(temp == roundColor){
        temp = random(roundColors);
    }
    roundColor = temp;
  }

  //If the rounded square has collided with the big square based on the x variable
  if((roundx == squarex + 50 && (roundy + 30 >= squarey && roundy <= squarey + 50)) || (roundx + 30 == squarex && (roundy + 30 >= squarey && roundy <= squarey + 50))){
    //If they collided head to head, change both speeds.
    if(sqxspeed > 0 && roundxspeed < 0 || sqxspeed < 0 && roundxspeed > 0){
        sqxspeed *= -1;
        roundxspeed *= -1;
    //If the round square collided with the big square, only change the rounded square.
    }else{
        roundxspeed *= -1;
    }
    //Randomize the colors after collision
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }


  //If the rounded square has collided with the big square based on the y variable
  if((roundy == squarey + 50 && (roundx + 30 >= squarex && roundx <= squarex + 50)) || (squarey == roundy + 30 && (roundx + 30 >= squarex && roundx <= squarex + 50))){
    //If the collided head to head, change both speeds.
    if(sqyspeed > 0 && roundyspeed < 0 || sqyspeed < 0 && roundyspeed > 0){
        sqyspeed *= -1;
        roundyspeed *= -1;
    //If the rounded square collided with the big square, only change the rounded square.
    }else{
        roundyspeed *= -1;
    }
    //Randomize the colors after collision.
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }


  //If the rounded square has collided with the rectangle based on the x variable
  if((roundx == rectx + 40 && (roundy + 30 >= recty && roundy <= recty + 30)) || (roundx + 30 == rectx && (roundy + 30 >= recty && roundy <= recty + 30))){
    //If they collided head to head, change both speeds.
    if(rectxspeed > 0 && roundxspeed < 0 || rectxspeed < 0 && roundxspeed > 0){
        rectxspeed *= -1;
        roundxspeed *= -1;
    //If the round square collided with the rectangle, only change the rounded square.
    }else{
        roundxspeed *= -1;
    }
    //Randomize the colors after collision
    let temp = random(rectColors);
    while(temp == rectColor){
        temp = random(rectColors);
    }
    rectColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }


  //If the rounded square has collided with the rectangle based on the y variable
  if((roundy == recty + 30 && (roundx + 30 >= rectx && roundx <= rectx + 40)) || (recty == roundy + 30 && (roundx + 30 >= rectx && roundx <= rectx + 40))){
    //If the collided head to head, change both speeds.
    if(rectyspeed > 0 && roundyspeed < 0 || rectyspeed < 0 && roundyspeed > 0){
        rectyspeed *= -1;
        roundyspeed *= -1;
    //If the rounded square collided with the rectangle, only change the rounded square.
    }else{
        roundyspeed *= -1;
    }
    //Randomize the colors after collision.
    let temp = random(rectColors);
    while(temp == rectColor){
        temp = random(rectColors);
    }
    rectColor = temp;
    let rtemp = random(roundColors);
    while(rtemp == roundColor){
        rtemp = random(roundColors);
    }
    roundColor = rtemp;
  }






}
