//I chose to do the variation of adding inner circles to the ripple because I thought it 
//would make the ripples more realistic. I added a bit of space between each of the ripples
//and only did a few circles since real ripples are centered around a main circle. I think
//this turned out really well and I like how realistic it looks.

function setup() {
  createCanvas(800, 800);
  //Set to no fill and change the stroke color to a light blue.
  noFill();
  stroke("LightBlue");
}

//Create an empty array that will hold the ripples.
let ripplers = []; 

//Create a class for the ripplers.
class Rippler{
    //Constructor to make the ripple objects.
    constructor(x, y){
        //Set x, y, and the diameter.
        this.x = x;
        this.y = y;
        this.diameter = 0;
    }

    //Draw method
    draw(){
        //Increment the diameter.
        this.diameter += 2;
        //Draw the outermost ripple.
        circle(this.x, this.y, this.diameter);
        //If the outermost ripple is big enough, draw an inner ripple.
        if (this.diameter > 80){
            circle(this.x, this.y, this.diameter-60);
        }
        //If the outermost ripple is big enough, draw an innermost ripple.
        if (this.diameter > 160){
            circle(this.x, this.y, this.diameter-140);
        }
    }
}


function draw() {
  //Set the background color to blue to emulate water.
  background("LightSkyBlue");

  //A loop to iterate through the ripplers and draw each one.
  for(let i = 0; i < ripplers.length; i++){
    ripplers[i].draw();
  }
}

//Mouse pressed function
function mousePressed(){
    //Create a new rippler with the x and y values equal to where the cursor clicked.
    let r = new Rippler(mouseX, mouseY);
    //Push the new rippler to the array.
    ripplers.push(r);
}
