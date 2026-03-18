let x = 0;
let y = 0;  
let xmove = 0;
let ymove = 0;

// rectanle variables
let rectX = 0;
let rectY = 0;
let rectSize = 100;

//cpolor variables
let r = 255;
let g = 50;
let b = 70;

// boolean  to stop start movement
let stop = false; //we could use a zero here


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  //start both shapes  at  center of the canvas
  x = width / 2;
  y = height / 2;
  rectX = width / 2;
  rectY = height / 2;
}

function draw() {
  background(220);
  fill(r,g,b);
  ellipse(x, y, size,size);
  rect(rectX, rectY, Size, Size);

  if (!stop) {
    // if stop is false
    x += xmove;
    y += ymove;

}
}
