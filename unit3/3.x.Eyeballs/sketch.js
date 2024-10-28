//After looking at some After Dark screensavers for inspiration, I decided I wanted to base my screensaver off
//of a meteor shower. I think I struggled the most with figuring out the tails of the meteors, but I really
//like how it turned out. I think it really emulates an actual meteor shower and I like the two different
//aspects of the stars and the falling meteors.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Create an empty array to hold the stars and another to hold the meteors.
let stars = [];
let meteors = [];

function draw() {
  background(0);

  //Set the strok and fill to white and set the stroke weight to 1.
  stroke(255);
  fill(255);
  strokeWeight(1); 

  //Generate a random number to decide whether or not to add a star. 50% chance
  let rs = random(1);
  if (rs < 0.5){   
    addStar();
  }

  //Generate a random number to decide whether or not to add a meteor. 1% chance
  let r = random(1);
  if (r < 0.01){
    addMeteor();
  }

  //For each star in the stars array, draw the star.
  for(let i = 0; i < stars.length; i++){
    stars[i].draw();
  }

  //For each meteor in the meteors array, draw the meteor.
  for(let i = 0; i < meteors.length; i++){
    meteors[i].draw();
  }
  
  //If there are more than 50 meteors, reset the meteor array
  if (meteors.length > 50){
    meteors = [];
  }
  //If there are more than 800 stars, reset the star array.
  if (stars.length > 800){
    stars = [];
  }
}


//Create a class to represent the stars
class Star{
    constructor(x, y){
        //Set the x and y and set the diameter to 4.
        this.x = x;
        this.y = y;
        this.diameter = 4;
    }

    //Draw method
    draw(){
        //Draw the star at its coordinates and with its diameter.
        circle(this.x, this.y, this.diameter); 
    }

}


//Add a star to the stars array.
function addStar(){
    let s = new Star(random(windowWidth), random(windowHeight));
    stars.push(s);
}


//A class to represent a meteor
class Meteor{
    constructor(x, y){
        //Set the x and y.
        this.x = x;
        this.y = y;
        //Set the diameter to 10.
        this.diameter = 10;
        //Randomize the length of the tail.
        this.length = random(30, 80);
        //Randomize the speed of the meteor across the screen.
        this.speed = random(0.5, 2);
    }
    
    //Draw method
    draw(){
        //Set the stroke to white and weight to 1
        stroke(255);
        strokeWeight(1);
        //Increase x and y based on the speed.
        this.x+=this.speed;
        this.y+=this.speed;
        //Draw the meteor.
        circle(this.x, this.y, this.diameter);
        //Make the stroke weight thicker and make the stroke more transparent.
        strokeWeight(10);
        stroke(255, 255, 255, 150);
        //Draw the tail.
        line(this.x-this.length, this.y-this.length, this.x, this.y);
    }
}

//Add a meteor to the meteors array.
function addMeteor(){
    let m = new Meteor(random(windowWidth), -10);
    meteors.push(m);
}
