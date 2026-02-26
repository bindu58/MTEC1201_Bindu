// Bindu//

let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(r,g,b);

  if(mouseX>width/2)
    {
      fill(255,0,0);
      ellipse( width/2, height/2, 100, 100);
      print("TEST 1 is true");
      ellipse( width/2, height/2, 50, 50);

0    }



else if(mouseX<width/2){
fill(255);
rect(width/2, height/2, 100, 100);
print("TEST 2 is true");
rect(width/2, height/2, 50, 50);

}


else //Test 2 and 2 are false
{
  fill(255);
  rect(width/2, height/2, 100, 100);
  print("TEST 1 and TEST 2 are false");
  
}
}

function mousePressed() 
{
  r = random(255);
  g = random(100,255);
  b = random(50,200); 
}
