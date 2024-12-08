//Create the canvas and set no Stroke
function setup() {
  createCanvas(500, 700);
  noStroke();
}

//Initialize all variables that need to be used outside of the loop
let bg;  //variable for the background
let boxes = [];  //Array to hold all of the boxes
let current = 0;  //The current box
let prev = 0;   //The previous box
let colors = ["DarkSalmon", "DarkSeaGreen", "HoneyDew", "Lavender", "LavenderBlush", "LemonChiffon", 
    "LightBlue", "LightCyan", "LightPink", "Linen", "MistyRose", "Moccasin", "PeachPuff", "Plum", "PowderBlue",
    "Thistle", "LightSteelBlue"];  //A list of colors for the boxes
let z = 0;  //Set so I can show starting text
let shifting = 0;   //Set so I can decide when to shift the boxes
let score = 0;  //The score
let gameOver = 0;   //Whether or not the game is over

//Preload the image for the background
function preload(){
    bg = loadImage('https://mswain2.github.io/creative-coding/unit5/final/nightsky.jpg');
}

//A class for the boxes
class Box{
    //Constructor. Randomizes color and speed
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = random(colors);
        this.isDone = 0;
        this.s = int(random(2,6));
        this.speed = this.s;
    }
    //Draw function. This is where the bounce logic is.
    draw(){
        fill(this.color);
        //If the box should move, set speed based on whether or not it has bounced and increment.
        if(this.isDone == 0){
            if (this.x <= 0){
                this.speed = this.s;
            }
            if (this.x + this.width >= 500){
                this.speed = this.s * -1;
            }
            this.x += this.speed;
        }
        //Draw the box
        rect(this.x, this.y, this.width, this.height);
    }
}

function draw() {
  //Set background to the loaded image
  background(bg);

  //If the game is over, display 'Game Over!' and the final score. End the loop.
  if(gameOver == 1){
    fill("White");
    textSize(50);
    text("Game Over!", 125, 350);
    textSize(25);
    text("Score: " + score, 200, 400);
    noLoop();
  //The the game is still going
  }else{
    //If shifting is not happening, draw the base
    if(shifting == 0){
        fill("DimGray");
        rect(0, 600, 500, 105);
    }
  
    //If the game has not started yet, display 'Press to start!' message.
    if(z == 0){
        fill("White");
        textSize(50);
        text("Press to start!", 100, 350);
    }

    //Display the current score in the top right corner
    fill("White");
    textSize(25);
    text("Score: " + score, 375, 30);

    //Draw all of the boxes
    for(let i = 0; i < boxes.length; i++){
        //If the boxes are at a certain height, shift everything down so the current box is visible.
        if (prev.y < 100){
            shifting = 1;
            boxes[i].y = boxes[i].y + boxes[i].height;
        }
        boxes[i].draw();
    }
  }
}

//Mouse pressed function
function mousePressed(){
  //If the game just started
  if(z == 0){
    //Make a new box right at the base rectangle
    let b = new Box(10, 510, 100, 90);
    boxes.push(b);
    //Increment z to indicate the game is ongoing
    z++;
    //Set the current box to b
    current = b;
  //If the game is ongoing
  }else{
    //Set current box to done so it no longer moves
    current.isDone = 1;
    //If the user clicked when the current box was not above the stack, the game is over
    if(prev.x > current.x+current.width || prev.x+prev.width < current.x){
        gameOver = 1;
    //If the user placed the current box somewhere over the stack
    }else{
        //Increment the score
        score++;
        //If the box is hanging over the right side, cut it down to match the right of the box below.
        if(prev.x < current.x){
            current.width = current.width - ((current.x+current.width) - (prev.x+prev.width))
        }
        //If the box is hanging over the left side, cut it down to match the left of the box below.
        if(current.x < prev.x){
            current.width = (current.x+current.width) - prev.x
            current.x = prev.x
        }

        //Create a new box with the y based on whether or not everything is shifting.
        let b;
        if(shifting == 1 || current.y < 100){
            b = new Box(10, current.y, current.width, 90);
        }else{
            b = new Box(10, current.y-90, current.width, 90);
        }
        //Push the new box to the array
        boxes.push(b);
        //Set the previous box
        prev = current;
        //Set the current box to the newly created one
        current = b;
    }
  }
}
