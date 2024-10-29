//I chose to do the variation of adding inner circles to the ripple because I thought it 
//would make the ripples more realistic. I added a bit of space between each of the ripples
//and only did a few circles since real ripples are centered around a main circle. I think
//this turned out really well and I like how realistic it looks.

//I chose to do the variation of making the ripples reflect off of the edge of the canvas. I also
//made it so the ripples would disappear.

function setup() {
  createCanvas(800, 800);
  //Set to no fill.
  noFill();
}

//Create an empty array that will hold the ripples.
let ripplers = []; 

//Create a class for the ripplers.
class Rippler{
    //Constructor to make the ripple objects.
    constructor(x, y, diam){
        //Set x, y, and the diameter.
        this.x = x;
        this.y = y;
        this.diameter = diam;
        //Set the alpha value to fully opaque
        this.alpha = 255;
    }

    //Draw method
    draw(){
        //Set the color to a light blue and set the alpha value to the personal value.
        stroke(173, 216, 230, this.alpha);
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
        //If the left side of the ripple is near the left wall, create a new ripple as a reflection.
        if(isNear(this.x-this.diameter/2, 0, 0.7) && this.y > 0 && this.y <= 800){
            let r = new Rippler(this.x - this.diameter/2, this.y, 40);
            ripplers.push(r); 
        }
        //If the right side of the ripple is near the right wall, create a new ripple as a reflection
        if(isNear(this.x+this.diameter/2, 800, 0.7) && this.y > 0 && this.y <= 800){
            let r = new Rippler(this.x + this.diameter/2, this.y, 40);
            ripplers.push(r); 
        }
        //If the top of the ripple is near the top wall, create a new ripple as a reflection
        if(isNear(this.y-this.diameter/2, 0, 0.7) && this.x > 0 && this.x <= 800){
            let r = new Rippler(this.x, this.y-this.diameter/2, 40);
            ripplers.push(r);
        }
        //If the bottom of the ripple is near the bottom wall, create a new ripple as a reflection
        if(isNear(this.y+this.diameter/2, 800, 0.7) && this.x > 0 && this.x <= 800){
            let r = new Rippler(this.x, this.y+this.diameter/2, 40);
            ripplers.push(r);
        }
        //If the alpha value is low enough to not see the ripple, remove it from the list of ripples.
        if(this.alpha == 20){
            let index = ripplers.indexOf(this);
            ripplers.splice(index, 1);
        }
        //Decrement the alpha value.
        this.alpha = this.alpha - 0.5;
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
    let r = new Rippler(mouseX, mouseY, 0);
    //Push the new rippler to the array.
    ripplers.push(r);
}


//function to determine whether a number is near a certain target
function isNear(num, target, threshold){
    //If the number is past the bounds, return false.
    if(num < 0 || num > 800.2){
        return false;
    }
   
    //Find the difference between the given number and the target. 
    let diff = Math.abs(num - target);
    //If the difference is less than the given threshold, return true.
    if(diff < threshold){
        return true;
    }else{
        return false;
    }
}

