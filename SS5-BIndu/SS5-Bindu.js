
//Bindu//

//Concentric squares//

let r = 120;
let g = 200;
let b = 150;
let d = 400;

function setup() {
  createCanvas(900, 900,);
  rectMode(CENTER);
}

function draw() {
  background(0);
  
  for (let i = 0; i < 35; i++)
  { 
    fill(r,g,b);
    square(width/2,height/2, d-(i*10),30);
  }

  }

  function mouseIsPressed() {
    d++;

  }


