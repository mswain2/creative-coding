
function preload(){
    img = loadImage('goat.png');
}


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("MediumSeaGreen");

  image(img, 10, 10, 100, 100);
   

}
