//I wanted to use different aspects of nature to represent time since I see numerical time as a construct
//that we made. Nature has its own sense of time. Seasons, the sun and moon rising and setting, the stars
//, and every living thing has a built in clock. I wanted to represent time in three separate aspects of
//nature. The hour is represented by the sun/moon rising and setting. The minute is represented by the
//cloud moving across the sky. The second is represented by the animal walking across the bottom of the
//screen. I really like how this turned out. I think it is a very representative "clock" using nature.
//It's definitely hard to tell the exact time based on the sketch, but I think that is another aspect
//of how nature tells time. There doesn't need to be a hh:mm:ss representation of time.
//I also wanted to represent time moving slower and faster. The animal moves at a less continuous pace 
//during the day to represent the daytime feeling very slow and long. It moves faster at night to 
//represent night feeling very quick and short.

function setup() {
  createCanvas(800, 600);
  //Set to no stroke for the entire sketch.
  noStroke();
}

function preload(){
    //Load the bunny image to use during the day
    d = loadImage('bunny.png');
    //Load the deer image to use at night
    night = loadImage('sleepy.png');
}

//Set all of the variables outside of the loop
let color;
let groundcolor;
let circlecolor;
let x = 400;
let y;
let diam;
let cloudColor;
let img;
let prev = 0;
let s;

function draw() {
  //If it is during the day(calculated before daylight savings)
  if(hour() >= 7 && hour() <= 18){
    //Set sky color to light blue
    color = "LightSkyBlue";
    //Set ground color to light green
    groundcolor = "MediumSeaGreen";
    //Set color of circle(sun) to gold
    circlecolor = "Gold";
    //Set cloud color to white
    cloudColor = "white";
    //Set the image to the bunny
    img = d;
    //Set speed to three to make the bunny move every three seconds rather than every second. Implies day goes by slow.
    s = 3;
 //If it is night time
 }else{
    //Set sky color to dark blue
    color = "MidnightBlue";
    //Set ground color to dark green
    groundcolor = "DarkGreen";
    //Set color of moon to really light yellow
    circlecolor = "LemonChiffon";
    //Set cloud color to gray
    cloudColor = "LightSlateGray";
    //Set the image to the deer
    img = night;
    //Set speed to one to make the deer move every second. Implies night goes by quickly.
    s = 1;
  }

  //Set background color to sky color
  background(color);
  
  //Set fill to circle color (sun or moon)
  fill(circlecolor);
  //Set the y variable based on the mapping of the y variable.
  //If the sun should be rising.
  if(hour() >= 7 && hour() <= 12){
    y = map(hour(), 7, 12, 200, 500);
  //If the sun should be setting.
  }else if(hour() > 12 && hour() <= 18){
    y = map(hour(), 13, 18, 500, 200);
  //If the moon should be rising.
  }else if(hour() > 18){
    y = map(hour(), 18, 23, 200, 500);
  //If the moon should be setting.
  }else{
    y = map(hour(), 0, 7, 500, 200);
  }

  console.log(y); 
  //Draw the sun/moon
  circle(400, y, 200);

  //Set the fill to the ground color
  fill(groundcolor);
  //Draw the ground
  rect(0, 500, 800, 150);

  //Draw a cloud based on the mapping of the minute
  cloud(map(minute(), 0, 59, 0, 800), 125, cloudColor);
  
  //If the second() is a time when the image should move, move the image. 
  if(second() % s == 0){
    prev = map(second(), 0, 59, 25, 803);
  }
  //Draw the image;
  image(img, prev, 450, 50, 50);    


  //text("second: " + second(), 50, 65);
  //text("minute: " + minute(), 50, 80);
  //text("hour: " + hour(), 50, 95);
  //text("day: " + day(), 50, 110);
  //text("month: " + month(), 50, 125);
  //text("year: " + year(), 50, 140);

}

//Function to draw a cloud
function cloud(x, y, color){
    //Set fill to cloud color 
    fill(color);
    //Draw 5 circles to represent the cloud
    circle(x, y, 50);
    circle(x+25, y, 50);
    circle(x+50, y, 50);
    circle(x+15, y-20, 50);
    circle(x+35, y-20, 50);
}

