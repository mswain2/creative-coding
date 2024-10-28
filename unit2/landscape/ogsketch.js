function setup() {

  // create the canvas
  createCanvas(1000, 800);
  noLoop();  
}

function draw() {
  background("MidnightBlue");

  noStroke();
  
  for(let i = 0; i < 80; i++){
    fill("Gold");
    let x = random(10, 1000);
    let y = random(10, 400);
    circle(x, y, 5);
    fill(color(255, 250, 205, 128));
    circle(x, y, 10);
  }


  fill("Silver");
  circle(500, 150, 200);
  fill(128, 128, 128, 128);
  circle(550, 145, 50);
  circle(450, 130, 60); 
  circle(500, 190, 30);
  circle(525, 100, 20);
  circle(460, 200, 25);
  circle(540, 215, 30);
 

  fill("DarkSlateGray");
  beginShape();
  for(let x = 0; x < 201; x++){
    let y = noise(x * 0.01) * 600;
    vertex(x * 5, y);
  }
  vertex(1000, 800);
  vertex(0, 800);
  endShape();

  fill("SeaGreen");
  rect(0, 500, 1000, 300);


  noFill();
  stroke("PowderBlue");
  beginShape();
  let end = 0;
  for(let y = 500; y < 801; y++){
    let x = noise(y * 0.003) * 700;
    vertex(x, y);
    vertex(x+300, y);
    end = x;
  }
  vertex(end, 800);
  vertex(end + 300, 800);
  endShape();

  for(let r = 0; r < random(15); r++){
    makeTree();
  }

  for(let r = 0; r < random(5); r++){
    makeHouse();
  }

}

function makeHouse(){
    let x = 0;
    if(random() < 0.5){
      x = random(10, 250);
    }else{
      x = random(700, 950);
    }
    let y = random(550, 740);

    let colors = ["SteelBlue", "Tan", "Sienna", "SaddleBrown", "Maroon", "White", "Peru", "Gray"];
    noStroke();
    fill(random(colors));
    square(x, y, 50);
    fill(random(colors));
    triangle(x + 25, y - 20, x, y, x + 50, y);

}


function makeTree(){
    let x = 0;
    if(random() < 0.5){
        x = random(10, 250);
    }else{
        x = random(700, 950);
    }

    noStroke();
    let y = random(550, 740);
    fill("SaddleBrown");
    rect(x, y, 20, 30);
    fill("DarkGreen");
    triangle(x + 10, y - 70, x - 10, y - 20, x + 30, y - 20);
    triangle(x + 10, y - 50, x - 10, y, x + 30, y);

}

