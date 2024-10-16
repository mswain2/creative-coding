/*I actually had a lot of ideas about what kind of landscape I wanted to do, but I ended up deciding
  to make a desert landscape! I really wanted some mountains and struggled to get the kind of sharp look
  I wanted, but I like the way they look. I also wanted it to bright and have those orange tone brown
  colors throughout to really represent the desert. I knew we needed to add a vertical element, and I 
  decided to attempt a cactus! I really really like the way the cacti turned out even if it was hard
  to get them to look right. I think I was inspired by the beauty of deserts. I especially like the
  sharp mountains and the colors that feel so natural. I also really wanted to have a bright daytime
  scene and preferred the bright aesthetic of the desert over another landscape.
*/

function setup() {

  // create the canvas
  createCanvas(1000, 800);
  noLoop();  
}

function draw() {
  //Make the background a light blue to represent the sky.
  background("LightSkyBlue");

  //Set to no stroke
  noStroke();

  //Set the fill to an orange yellow color for the sun.
  fill("#FDB915");
  //Randomize the suns position in the sky. I really liked this idea because sometimes you can't even
  //see the sun which adds more randomness.
  let x = random(100, 900);
  let y = random(100, 200);
  //Create a circle at the randomized coordinates to represent the sun.
  circle(x, y, 100);

  //Set the fill to a light orange brown color.
  fill("SandyBrown");
  beginShape();
  //Make a fairly smooth mountain
  for(let x = 0; x < 201; x++){
    let y = noise(x * 0.01) * 400;
    vertex(x*5, y);
  }
  //Add vertices to the very bottom to fill in the mountain shape.
  vertex(1000, 800);
  vertex(0, 800);  
  endShape();

  //Set the fill to a darker orange brown color.
  fill("Peru");

  //Make the sharper mountain in the front.
  beginShape();
  //Use increments of ten to increase sharpness
  for(let x = 0; x < 1001; x+=10){
    let y = noise(x * 0.005) * 700;
    vertex(x, y);
  }
  //Add vertices to the very bottom to fill in the mountain shape.
  vertex(1000, 800);
  vertex(0, 800);
  endShape();

  //Set the fill to tan.
  fill("Tan");
  //Create a rectangle to represent the sand.
  rect(0, 550, 1000, 250);

  //Make 3 cacti!
  for(let i = 0; i < 3; i++){
    makeCactus();
  }

}


function makeCactus(){
    //Randomize the coordinates of the cactus.
    let x = random(50, 950);
    let y = random(400, 575);

    //Set the fill to dark green
    fill("DarkGreen");
 
    //Make a rounded rectangle for the tall central part of the cactus and a square to give it a sharp bottom
    rect(x, y, 50, 200, 30);
    square(x, y+180, 50);

    //Make two rounded rectangles for the arm on the right. The first rectangle is the vertical part.
    rect(x + 80, y+50, 30, 60, 30);
    //Make the horizontal part of the arm.
    rect(x + 30, y+80, 80, 30, 30);

    //Make two rounded rectangles for the arm on the left. The first rectangle is the vertical part.
    //Make the horizontal part of the arm. This arm is a little lower than the one on the right.
    rect(x - 60, y + 60, 30, 60, 30);
    rect(x - 60, y + 90, 80, 30, 30);

}

