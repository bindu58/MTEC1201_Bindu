
//Bindu//

//Concentric squares//

let r = 120;
let g = 200;
let b = 150;
let d = 250;
let R = 7;

function setup() {
  createCanvas(900, 900,);
  rectMode(CENTER);
}

function draw() {
  background(0);
  

  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      fill(r, g, b);
      circle (x, y, R);
      
    }
  }

  let x1 = noise(frameCount * 0.002) * width; 
   
  for (let i = 0; i < 40; i++)
  {  
    strokeWeight(4);
    fill(r,g,b);
    square(width/2, height/2, d-(i*20) + x1,30);
  }
if (d < 100) {
  d -= 0.5;
} else {
  d = 150;
}
  }




