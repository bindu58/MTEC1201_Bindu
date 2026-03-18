// Bindu//
//" Bollon"//
// Bollon will fly in the sky and will be able to pop when the mouse is pressed. It will also change color when it pops.//

//variable for the rect//
let h=50
let w=50


// variables for color//
let r= 255
let g = 150
let b = 75
let (topcolor, bottomcolor);

function setup() {
  createCanvas(windowWidth, windowHeight,);
}

function draw() 
{
  //background//
  topcolor = color(0,0,255);
bottomcolor = color (135,206,235);
 for ( let y = 0; y < height-200; y++) {
  n = map(y,0,height-200,0,1);
  let newcolor= lerpColor(topcolor,bottomcolor,n);
  stroke(newcolor);
  line(0,y,width,y);
 }

 //floor//
 fill(0,100,0);
 rect(0,height-200,width,200);

 // home//
  home(width, height, w, h);
 //balloon//
  bollon(width-100, height-300);

}
//function for the home//
function home(width, height, w, h)
 {
 noStroke()
  fill(0,0,0);
  rect(width-300, height-340, w+180, h+100);
  fill(155,70,12);
  triangle(width-310, height-340, width-60, height-340, width-180, height-450);
  //door//
  fill(255,255,255);
  rect(width-200, height-270, w, h+30);
  
  //windows//
  rect(width-130, height-280, w, h);
  rect(width-280,height-280,w,h)
  fill(0)
  rect(width-258,height-280,w-45,h);
  rect(width-108,height-280,w-45,h);
  rect(width-280,height-258,w,h-45);
  rect(width-130,height-258,w,h-45);
 }


 //function for bollon//
function bollon(x,y)
{
  fill(r,g,b);
  ellipse(x,y,50,70);
  fill(0);
  line(x,y+35,x,y+60);
}

//function for popping the bollon//
function mousePressed()
{
  r = random(255);
  g = random(255);
  b = random(255);
}
