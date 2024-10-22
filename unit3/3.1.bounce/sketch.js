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

//Create the x and y variables for the circle and set to arbitrary values within the canvas.
let circx = 126;
let circy = 98;
//Set the speed of both the x and y variables to 2
let circxspeed = 2;
let circyspeed = 2;
//Make a list of different pink colors to change through when a wall is hit
let circleColors = ["Salmon", "Pink", "MediumVioletRed", "LightPink", "HotPink", "Fuchsia", "DeepPink", "Violet", "PaleVioletRed", "Magenta", "LightCoral"];
//Initialize the circle color
let circColor = "Salmon";
//Set the radius of the circle.
let circRad = 26;

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


  //Draw the circle.
  //Set the fill to the current circle color.
  fill(circColor);
  //Calculate the x and y position based on the speed.
  circx = circx + circxspeed;
  circy = circy + circyspeed;
  //Draw a circle at those coordinates
  circle(circx, circy, circRad*2);
  //If the circle has hit the left wall or hit the right wall
  if(circx - circRad == 0 || circx == 500 - circRad){
    //Change direction
    circxspeed *= -1;
        //Randomize a new color
        let temp = random(circleColors);
        while(temp == circColor){
            temp = random(circleColors);
        }
        circColor = temp;
  }
  //If the circle has hit the top wall or the bottom wall
  if(circy - circRad == 0 || circy == 400 - circRad){
    //Change direction
    circyspeed *= -1;
        //Randomize a new color
        let temp = random(circleColors);
        while(temp == circColor){
            temp = random(circleColors);
        }
        circColor = temp;
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

}
