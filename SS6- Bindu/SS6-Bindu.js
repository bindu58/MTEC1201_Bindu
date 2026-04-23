

//Bindu//

//Concentric squares//

let r = 120;
let g = 200;
let b = 150;
let d = 250;
let R = 7;

//
let c = [25,35,45,55,65,75];
let xCoordinates = [];
let a = [ 0.001, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

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

  let x1 = noise(frameCount * 0.003) * width; 
   
  for (let i = 0; i < 50; i++)
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
  let y1 = noise(frameCount * 0.002) * height;
  fill(100,150,30,150);
  circle(50, y1*a[i], c[i]);
  circle (850, y1*a[i], c[i]);
  circle (50, y1+a[i], c[i]);
  circle (850, y1+a[i], c[i]);






  

  
}
}
