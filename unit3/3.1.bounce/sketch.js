function setup() {
  createCanvas(500, 400);
}


let squarex = 250;
let squarey = 73;
let sqxspeed = 1;
let sqyspeed = 1;
let squareColors = ["Indigo", "MediumPurple", "Orchid", "Plum", "Purple", "RebeccaPurple", "BlueViolet", "DarkMagenta", "DarkOrchid", "DarkViolet"];
let sqColor = "Indigo";

let circx = 126;
let circy = 98;
let circxspeed = 2;
let circyspeed = 2;
let circleColors = ["Salmon", "Pink", "MediumVioletRed", "LightPink", "LightCoral", "HotPink", "Fuchsia", "DeepPink", "Violet", "PaleVioletRed", "MediumVioletRed", "Magenta", "LightCoral"];
let circColor = "Salmon";
let circRad = 34;

let roundx = 420;
let roundy = 170;
let roundxspeed = 2;
let roundyspeed = 1;
let roundColors = ["LightSkyBlue", "Aqua", "CornflowerBlue", "DarkCyan", "LightBlue", "MediumTurquoise", "Navy", "PowderBlue", "Teal", "CadetBlue", "DarkBlue", "DarkSlateBlue", "DarkTurquoise", "DeepSkyBlue", "DodgerBlue", "MidnightBlue", "SkyBlue", "SteelBlue", "Turquoise"];
let roundColor = "LightSkyBlue";


function draw() {
  background(220);

  noStroke();
  fill(sqColor);
  squarex = squarex + sqxspeed;
  squarey = squarey + sqyspeed;
  square(squarex, squarey, 50);
  if(squarex == 500-50 || squarex == 0){
    sqxspeed *= -1;
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
    
  }
  if(squarey == 0 || squarey+50 == 400){
    sqyspeed *= -1;
    let temp = random(squareColors);
    while(temp == sqColor){
        temp = random(squareColors);
    }
    sqColor = temp;
  }


  fill(circColor);
  circx = circx + circxspeed;
  circy = circy + circyspeed;
  circle(circx, circy, circRad*2);
  if(circx - circRad == 0 || circx == 500 - circRad){
    circxspeed *= -1;
        let temp = random(circleColors);
        while(temp == circColor){
            temp = random(circleColors);
        }
        circColor = temp;
  }
  if(circy - circRad == 0 || circy == 400 - circRad){
    circyspeed *= -1;
        let temp = random(circleColors);
        while(temp == circColor){
            temp = random(circleColors);
        }
        circColor = temp;
  }

  
  fill(roundColor);
  roundx = roundx + roundxspeed;
  roundy = roundy + roundyspeed;
  square(roundx, roundy, 30, 10);
  if(roundx == 0 || roundx + 30 == 500){
    roundxspeed *= -1;
    let temp = random(roundColors);
    while(temp == roundColor){
        temp = random(roundColors);
    }
    roundColor = temp;
  } 

  if(roundy == 0 || roundy + 30 == 400){
    roundyspeed *= -1;
    let temp = random(roundColors);
    while(temp == roundColor){
        temp = random(roundColors);
    }
    roundColor = temp;
  }

}
