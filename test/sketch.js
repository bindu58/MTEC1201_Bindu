//Global variables declaration

let r = 0;
let g = 255;
let b = 0;

//ellipse variables
let x =0;
let y = 0;
 let xmove = 0;
 let ymove = 0;



function setup() {
  createCanvas(400, 400);
x = width/2;
y = height/2;
}

function draw() {
  background(75);
  fill(r,g,b);
  ellipse(x,y,50,50);
  x += xmove;// same as: x= x + xmove
  y += ymove;// same as: y= y + ymove

  if(x >=width || x <= 0){
    xmove = -xmove;//reverse the direction of movement.

  }
  if (y >=height || y <= 0){
    ymove = -ymove;//reverse the direction of movement.

  }
}
functionmousePressed()
{
  xmove = random(-10,10);
  ymove = random(-10,10);

  r = random(0,255);
}