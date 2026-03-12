function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  
}

function draw() {
  background(0);
  iceCream(50,200,60,170,230,180,"Mint");
  iceCream(250,200,70,255,0,0,"Lychee");
  iceCream(450,200,80,255,255,0,"Mango");
}

function iceCream( x,y,d,r,g,b,flavor){
  fill(255, 204, 100);
  triangle(x, y, x + 50, y, x + 25, y + 100);
  fill(r, g, b);
  ellipse(x + 25, y, d, d);
  text(flavor, x + 25, y + 150);

}