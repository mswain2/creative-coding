//I chose to emulate Georg Nees "Art Ex Machina". https://dam.org/museum/artists_ui/artists/nees-georg/
//I already posted a link to it on discord, but this is the link I used for eyedropping the colors since it was
//better quality.
//I didn't to draw each square exactly as it had been drawn in the original composition. I decided a better 
//emulation would be to used randomness to get the same number of different colored squares in each column. The
//result is a very close emulation, but there is randomness so it looks different with every refresh. I think it 
//looks really good and is a pretty good emulation of the original piece.

function setup() {
  // create the canvas
  createCanvas(900, 640);

  // disable animation
  noLoop();
}

function draw() {

  //Change the background color to match the original piece.
  background("#3378bf");
 
  //Change the rectMode to centered so it's easier to put a square within another square.
  rectMode(CENTER);

  //An initial translate to create a border
  translate(20,20);

  //Change to no fill and make the stroke weight larger
  noFill();
  strokeWeight(3);

  //Create a grid that is 44 wide and 31 tall.
  for(let x = 0; x < 44; x++){
     for(let y = 0; y < 31; y++){
        //Get the probability of the outside square being green given the column number.
        let prob = getProb(x, 1);
        //Set the color using the probability given above
        getColor(prob); 
        //Draw a 16x16 square
        square(x * 20, y * 20, 16, 1);

        //Get the probability of the inside square being green given the column number.
        let prob2 = getProb(x, 0);
        //Set the color using the probability found above
        getColor(prob2);
        //Draw an 8x8 square
        square(x * 20, y * 20, 8, 1);
    }
  
  }

}



//This returns the probability of the stroke color being the green color.
function getProb(x, o){
    //If we are talking about the inside square
    //I counted the number of smaller squares in a given column to determine the fractional probability of having
    //a green inside square for that row. (numberOfGreenSquares/total)
    if(o == 0){
        if (x == 0){
            return 0;
        }else if (x == 1){
            return 0.06;
        }else if (x == 2 || x == 4){
            return 0.03;
        }else if (x == 3 || x == 5){
            return 0.129;
        }else if (x == 6 || x == 7 || x == 8){
            return 0.19;
        }else if (x == 9){
            return 0.16;
        }else if (x == 10 || x == 15){
            return 0.29;
        }else if (x == 11 || x == 12){
            return 0.22;
        }else if (x == 13 || x == 19 || x == 20){
            return 0.45;
        }else if (x == 14){
            return 0.32;
        }else if (x == 16 || x == 22){
            return 0.387;
        }else if (x == 17 || x == 18){
            return 0.419;
        }else if (x == 21){
            return 0.61;
        }else if (x == 23 || x == 25 || x == 27){
            return 0.548;
        }else if (x == 24){
            return 0.58;
        }else if (x == 26){
            return 0.645;
        }else if (x == 28 || x == 30){
            return 0.774;
        }else if (x == 29 || x == 35){
            return 0.677;
        }else if (x == 31){
            return 0.709;
        }else if (x == 32 || x == 33){
            return 0.838;
        }else if (x == 34){
            return 0.74;
        }else if (x == 36 || x == 38){
            return 0.806;
        }else if (x == 37){
            return 0.87;
        }else if (x == 39 || x == 41){
            return 0.9;
        }else if (x == 40 || x == 42 || x == 43){
            return 0.967;
        }
    }
    //If we are talking about the outside square
    //I counted the number of larger squares in a given column to determine the fractional probability of having
    //a green outside square for that row. (numberOfGreenSquares/total)
    else{
        if (x == 0 || x == 1){
            return 0;
        }else if (x == 2 || x == 3 || x == 6){
            return 0.06;
        }else if (x == 4 || x == 5 || x == 14){
            return 0.09;
        }else if (x == 7 || x == 8){
            return 0.129;
        }else if (x == 9){
            return 0.16;
        }else if (x == 10){
            return 0.22;
        }else if (x == 11 || x == 12){
            return 0.32;
        }else if (x == 13 || x == 16){
            return 0.19;
        }else if (x == 15){
            return 0.258;
        }else if (x == 17 || x == 19){
            return 0.387;
        }else if (x == 18){
            return 0.48;
        }else if (x == 20){
            return 0.35;
        }else if (x == 21 || x == 24 || x == 25){
            return 0.45;
        }else if (x == 22 || x == 26){
            return 0.58;
        }else if (x == 23){
            return 0.419;
        }else if (x == 27){
            return 0.61;
        }else if (x == 28 || x == 30 || x == 37){
            return 0.709;
        }else if (x == 29){
            return 0.677;
        }else if (x == 31){
            return 0.645;
        }else if (x == 32 || x == 35){
            return 0.74;
        }else if (x == 33 || x == 36){
            return 0.774;
        }else if (x == 34 || x == 38 || x == 39){
            return 0.87;
        }else if (x == 40){
            return 0.935;
        }else if (x == 41){
            return 0.9;
        }else if (x == 42){
            return 0.967;
        }else{
            return 1;
        }

    }
   
}


//Use the probability of having a green color square to set the stroke color for the current square.
function getColor(prob){
   //Red color from original piece using an eyedropper
   let redColor = "#7b4979";
   //Green color from original piece using an eyedropper
   let greenColor = "#4ea48c";

   //Generate a random number from 0 to 1
   let r = random();

   //If the random number is between 0 and the given probability for a green square, set the stroke to green.
   //If there is a .3 probability, the random number has to be between 0 and .3 to draw a green sqauare.
   if (r < prob){
      stroke(greenColor);
   //If the random number is greater than the probability for a green square, set the stroke to red.
   }else{
      stroke(redColor);
   }
     
}
