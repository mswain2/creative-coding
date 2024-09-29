//Link to the Double Irish Chain Quilt Pattern I chose to replicate: https://www.internationalquiltmuseum.org/quilt/19970070593

//I chose this pattern because I really liked it and it looked doable.
//I liked the pattern, but I wasn't a huge fan of the colors so I decided to change them!

function setup() {
  createCanvas(400, 500);
  noLoop();
}

function draw() {
  //Make the background a white color to replicate the outermost border.
  background("Azure");
  noStroke();
  //Create a blue border.
  fill("PowderBlue");
  rect(20, 20, 360, 460);
  //Create the innermost border and make it purple.
  fill("Lavender");
  rect(35, 35, 330, 430);

  //Translate to the coordinates where the top left square will appear.
  translate(50, 50);
  //Draw 6 columns.
  for (let x = 0; x < 6; x++){
    //Draw 8 rows.
    for (let y = 0; y < 8; y++){
        if(x % 2 == 0){
            //On even rows and even columns, the square should be the grid pattern.
            if(y % 2 == 0){
                grid(x * 50, y * 50);
            //On even rows and odd columns, the square should be the plus pattern.
            }else{
                plus(x * 50, y * 50);
            }
        }else{
            //On odd rows and even columns, the square should be the plus pattern.
            if(y % 2 == 0){
                plus(x * 50, y * 50);
            //On odd rows and even columns, the square should be the grid pattern.
            }else{
                grid(x * 50, y * 50);
            }
        }
    }

  }

}


//Here is the reference I used for the syntax of creating my own functions.
//https://p5js.org/reference/p5/function/#:~:text=Functions%20help%20with%20organizing%20and%20reusing%20code.%20For%20example,%20functions

//A function to draw a checkerboard grid
function grid(x, y){
  //Temporarily translate to the given coordinates.
  push();
  translate(x, y);
  //Draw a 5 by 5 square of 10 by 10 squares.
  for (let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
      if(i % 2 == 0){
        //On an even row and an even column, draw a lavender square.
        if(j % 2 == 0){
          fill("Lavender");
          square(i * 10, j * 10, 10);
        //On an even row, and an odd column, draw a blue square.
        }else{
          fill("PowderBlue");
          square(i * 10, j * 10, 10);
        }
      }else{
        //On an odd row and an even column, draw a blue square.
        if(j % 2 == 0){
            fill("PowderBlue");
            square(i * 10, j * 10, 10);
        //On an odd row and an odd column, draw a lavender square.
        }else{
            fill("Lavender");
            square(i * 10, j * 10, 10);
        }
      }
    }
  }
  pop();
}


//A function to draw a plus shape.
function plus(x, y){
    //Temporarily translate to the given coordinates.
    push();
    translate(x, y);
    //Draw a 5 by 5 square of 10 by 10 squares.
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){
        //If the coordinates are at one of the four corners, draw a blue square.
        if ((i == 0 || i == 4) && (j == 0 || j == 4)){
            fill("PowderBlue");
            square(i * 10, j * 10, 10);
        //If the coordinates are in any other position, draw a white square.
        }else{
            fill("Azure");
            square(i * 10, j * 10, 10);
        }
      }
    }
    pop();

}
