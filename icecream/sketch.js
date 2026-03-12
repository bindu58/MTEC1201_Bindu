

let toggle = false;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  
}

function draw() {
  background(255);
  iceCream(50,200,60,170,230,180,"Mint");
  iceCream(250,200,70,255,0,0,"Lychee");
  iceCream(450,200,80,255,255,0,"Mango");
  rectRayDisplay(25,600,50, "W");

}


function iceCream( x,y,d,r,g,b,flavor){
  fill(255, 204, 100);
  triangle(x, y, x + 50, y, x + 25, y + 100);
  fill(r, g, b);
  ellipse(x + 25, y, d, d);
  text(flavor, x + 25, y + 150);

}

function rectRayDisplay(){
  fill(255, 255, 255);
  rect(10, 500, 50, 50);

  line(35, 525, mouseX, mouseY);
  

}