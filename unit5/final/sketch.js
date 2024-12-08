function setup() {
  createCanvas(500, 700);
  noStroke();
}

let bg;
let boxes = [];
let current = 0;
let prev = 0;
let colors = ["DarkSalmon", "DarkSeaGreen", "HoneyDew", "Lavender", "LavenderBlush", "LemonChiffon", 
    "LightBlue", "LightCyan", "LightPink", "Linen", "MistyRose", "Moccasin", "PeachPuff", "Plum", "PowderBlue",
    "Thistle", "LightSteelBlue"];
let z = 0;
let shifting = 0;
let score = 0;
let gameOver = 0;


function preload(){
    bg = loadImage('https://mswain2.github.io/creative-coding/unit5/final/nightsky.jpg');
}


class Box{
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
    draw(){
        fill(this.color);
        if(this.isDone == 0){
            if (this.x <= 0){
                this.speed = this.s;
            }
            if (this.x + this.width >= 500){
                this.speed = this.s * -1;
            }
            this.x += this.speed;
        }
        rect(this.x, this.y, this.width, this.height);
    }
}

function draw() {
  background(bg);

  if(gameOver == 1){
    fill("White");
    textSize(50);
    text("Game Over!", 125, 350);
    textSize(25);
    text("Score: " + score, 200, 400);
    noLoop();
  }else{
    if(shifting == 0){
        fill("DimGray");
        rect(0, 600, 500, 105);
    }
  
    if(z == 0){
        fill("White");
        textSize(50);
        text("Press to start!", 100, 350);
    }

    fill("White");
    textSize(25);
    text("Score: " + score, 375, 30);

    for(let i = 0; i < boxes.length; i++){
        if (prev.y < 100){
            shifting = 1;
            boxes[i].y = boxes[i].y + boxes[i].height;
        }
        boxes[i].draw();
    }
  }
}

function mousePressed(){
  if(z == 0){
    let b = new Box(10, 510, 100, 90);
    boxes.push(b);
    z++;
    current = b;
  }else{
    current.isDone = 1;
    if(prev.x > current.x+current.width || prev.x+prev.width < current.x){
        gameOver = 1;
    }else{
        score++;
        if(prev.x < current.x){
            current.width = current.width - ((current.x+current.width) - (prev.x+prev.width))
        }
        if(current.x < prev.x){
            current.width = (current.x+current.width) - prev.x
            current.x = prev.x
        }
        let b;
        if(shifting == 1 || current.y < 100){
            b = new Box(10, current.y, current.width, 90);
        }else{
            b = new Box(10, current.y-90, current.width, 90);
        }
        boxes.push(b);
        prev = current;
        current = b;
    }
  }
}
