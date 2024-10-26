//Load image of a goat.
function preload(){
    img = loadImage('goat.png');
}


function setup() {
  createCanvas(800, 800);
}

//Set speed factor and x and y speed.
let speedfactor = 2;
let xspeed = speedfactor;
let yspeed = speedfactor;
//Set beginning x and y coordinates.
let x = 50;
let y = 50;
//Set beginning score
let score = 5;

function draw() {
  //Set background color to a nice green.
  background("MediumSeaGreen");
  //Set text size to 50.
  textSize(50);
  
  //Draw the score in the top right corner.
  text(score, 750, 50);

  //If the mouse is to the right of the sprite
  if (mouseX > x){
    //If the sprite is not at the right edge of the canvas, make the xspeed positive.
    if(x + 24 != width){
        xspeed = speedfactor;
    //If the sprite is at the right edge of the canvas, make the xspeed 0 so it doesn't go off screen.
    }else{xspeed = 0;}
  //If the mouse is to the left of the sprite
  }else{
    //If the sprite is not at the left edge of the canvas, make the xspeed negative.
    if (x - 24 != 0){
        xspeed = -speedfactor;
    //If the sprite is at the left edge of the canvas, make the xspeed 0.
    }else{xspeed = 0;}
  }

  //If the mouse is below the sprite
  if (mouseY > y){
    //If the sprite is not at the bottom of the screen, make the yspeed positive.
    if (y + 24 != height){
        yspeed = speedfactor;
    //If the sprite is at the bottom of the screen, make the yspeed 0.
    }else{
        yspeed = 0;
    }
  //If the mouse is above the sprite
  }else{
    //If the sprite is not at the top of the canvas, make the yspeed negative.
    if (y - 24 != 0){
        yspeed = -speedfactor;
    //If the sprite is at the top of the canvas, make the yspeed 0.
    }else{
        yspeed = 0;
    }
  }

  //Change the position of x and y based on the xspeed and yspeed chosen above.
  x = x + xspeed;
  y = y + yspeed;

  //Draw the image of the goat in the determined spots.
  image(img, x-25, y-25, 50, 50);
  
  //Calculate the distance between the mouse and the sprite
  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);  

  //If the sprite is really close to the mouse, reset the sprite and decrement the score.
  if(d <= 5){
    x = 50;
    y = 50;
    xspeed = speedfactor;
    yspeed = speedfactor;
    score = score - 1; 
  }

  //If the score is 0, update the score and then stop the game and print Game Over.
  if (score == 0){
    //Cover up the previous score.
    fill("MediumSeaGreen");
    square(750, 0, 100); 
    text(score, 750, 50);
    fill("Maroon");
    text("Game Over", 210, 400);
    noLoop();
  }

}
