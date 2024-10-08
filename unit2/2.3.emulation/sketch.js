//I chose to emulate Georg Nees "Art Ex Machina". https://dam.org/museum/artists_ui/artists/nees-georg/
//I already posted a link to it on discord, but this is the link I used for eyedropping the colors since it was
//better quality.
//I didn't to draw each square exactly as it had been drawn in the original composition. I decided a better 
//emulation would be to used randomness to get the same number of different colored squares in each column. The
//result is a very close emulation, but there is randomness so it looks different with every refresh. I think it 
//looks really good and is a pretty good emulation of the original piece.

//For my iteration, I wanted to reduce the number of if-else statements in the code and find a more efficient
//way to determine the probability. I used the map function to replace the if-else statements and got a very
//similar result. I also wanted to include interactivity because my favorite part of randomizing a piece is
//refreshing the page over and over to see the different iterations. I added interactivity so that the grid is
//redrawn every time the mouse is clicked. I also added more randomization to the distribution of the colors 
//across the piece so that would also change every time the mouse was clicked. While this iteration is not as
//close to the original work as the first one was, I do like how the randomization is working and generating a 
//more interesting and variable piece.

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
  push();
  //An initial translate to create a border
  translate(20,20);

  //Randomly generate a start and end value to randomize the distribution of green sqaures across the piece.
  //This changes how the gradient of colors looks across the grid.
  let start = random(0,0.2);
  let end = random(0.8, 1);  

  //Change to no fill and make the stroke weight larger
  noFill();
  strokeWeight(3);

  //Create a grid that is 44 wide and 31 tall.
  for(let x = 0; x < 44; x++){
     for(let y = 0; y < 31; y++){
        //Get the probability of the outside square being green given the column number.
        //let prob = getProb(x, 1);
        let prob = getProb(x, start, end);
        //Set the color using the probability given above
        getColor(prob); 
        //Draw a 16x16 square
        square(x * 20, y * 20, 16, 1);

        //Get the probability of the inside square being green given the column number.
        //let prob2 = getProb(x, 0);
        let prob2 = getProb(x, start, end);
        //Set the color using the probability found above
        getColor(prob2);
        //Draw an 8x8 square
        square(x * 20, y * 20, 8, 1);
    }
  
  }
  pop();
}


//Return the probability of a square being green based on the column number and the randomly generated start
//and end values using the map function.
function getProb(x, start, end){
    return map(x, 0, 43, start, end);
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


//Record mouse clicks
function mouseClicked(){
    //Every time the mouse is clicked, redraw the entire composition. This will cause it to randomize the 
    //distribution of green squares across the piece.
    draw();
}

