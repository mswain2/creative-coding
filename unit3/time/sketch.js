function setup() {
  createCanvas(800, 600);
  noStroke();
}

function preload(){
    d = loadImage('bunny.png');
    night = loadImage('sleepy.png');
}

let color;
let groundcolor;
let circlecolor;
let x = 400;
let y;
let diam;
let cloudColor;
let img;
let prev = 0;
let speed;

function draw() {

  if(hour() >= 7 && hour() <= 12){
    color = "LightSkyBlue";
    groundcolor = "MediumSeaGreen";
    circlecolor = "Gold";
    cloudColor = "white";
    img = d;
    speed = 3;
 }else{
    color = "MidnightBlue";
    groundcolor = "DarkGreen";
    circlecolor = "LemonChiffon";
    cloudColor = "LightSlateGray";
    img = night;
    speed = 1;
  }

  background(color);
  
  fill(circlecolor);
  y = map(hour(), 7, 18, 500, 200)
  circle(400, y, 200);

  fill(groundcolor);
  rect(0, 500, 800, 150);


  cloud(map(minute(), 0, 59, 0, 800), 125, cloudColor);
      
  fill("purple");
  if(second() % speed == 0){
    prev = map(second(), 0, 59, 25, 850);
    image(img, prev, 450, 50, 50);    
  }
  image(img, prev, 450, 50, 50);    


  //Use the sun and the moon. 
  //The sun grows and shrinks based on the time it would be rising and setting during the day. Instead of
  //having the traditional rising and setting, use growing and shrinking by changing the diameter of the
  //circle. The moon works the same way. Sun : 7 - 18. Grows 7-12:30. Shrinks 12:30 to 18:00
  //Moon: 18-23 and 0-7. Grows 18-0:30. Shrinks 0:30 - 7
  //Can make some hours/minutes/seconds move tick by tick and make some move instantaneously.

  text("second: " + second(), 50, 65);
  text("minute: " + minute(), 50, 80);
  text("hour: " + hour(), 50, 95);
  //text("day: " + day(), 50, 110);
  text("month: " + month(), 50, 125);
  text("year: " + year(), 50, 140);

}

function cloud(x, y, color){
    fill(color);
    circle(x, y, 50);
    circle(x+25, y, 50);
    circle(x+50, y, 50);
    circle(x+15, y-20, 50);
    circle(x+35, y-20, 50);
}


