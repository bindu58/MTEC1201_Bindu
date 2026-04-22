

//Bindu//

//Concentric squares//

let r = 120;
let g = 200;
let b = 150;
let d = 250;
let R = 7;

//
let c = [25,35,45,55,65,75];
let a = [];

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
   
  for (let i = 0; i < 15; i++)
  {  
    strokeWeight(4);
    fill(r,g,b, 30);
    square(width/2, height/2, d-(i*20) + x1,30);
  }
if (d < 50) {
  d -= 0.5;
} else {
  d = 50;
}


for (let i = 0; i < 7; i++) {
  fill(100,150,30,100);
  circle(100, 100, c[i]);
  circle (800, 100, c[i]);
  circle (100, 800, c[i]);
  circle (800, 800, c[i]);
  

  
}
}
