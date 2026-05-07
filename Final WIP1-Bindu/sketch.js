//Bindu//
//Escape The Illusion//

let x,y,h;
let t = [];
let str;
let font;
let play;
let person;
let ellipse = []
let state = "startscreen";
let r = 128;


function preload()
{
   font = loadFont('/Images/Easter Joys.otf');
   play = loadImage("Images/play.svg");

  }
  


function setup() {
  createCanvas(1300, 900,WEBGL);
  rectMode(CENTER);
}

function draw() {
  if (state === "startscreen")
    {
      startScreen();
    }
   else if ( state === "room")
    {
      Room();
    }
    else if (state === "room2")
    {
      Room2();
    }


  
}


function startScreen()
{
str = 'ESCAPE THE ILLUSION'
background(0);
fill(r,0,128);
  rect(0,100,300,150,50);
  noStroke();
  fill(128,0,128);
  textSize(100);
  textFont(font);
  text( str,-350,-100); 
  fill(0);
  textSize(60);
  text('PLAY',-100,120);
  image(play,20,50,90,90);

if ( mouseX || mouseY   )
{
r = 255;
}

  
  }




function Room()
{
  background(128,0,128);
  x = 0;
  y = 0;
  h = 400;
 
  strokeWeight(5);
  fill(150,0,150);
  quad(x-650,y-450,x+650,y-450,x+200,y-200,x-200,y-200);
  quad(x-650,y+450,x+650,y+450,x+200, y+200, x-200,y+200);
  fill(128,0,128,);
  rect(x,y,h,h);
  fill(0);
  quad(-600,420,-600,0,-450,0,-450,340);
  rect(0,130,70,130);
  quad(600,420,600,0,450,0,450,340);
  

}



function Room2()
{background(128,0,128);
  x = 0;
  y = 0;
  h = 400;
 
  strokeWeight(5);
  fill(150,0,150);
  quad(x-650,y-450,x+650,y-450,x+200,y-200,x-200,y-200);
  quad(x-650,y+450,x+650,y+450,x+200, y+200, x-200,y+200);
  fill(128,0,128,);
  rect(x,y,h,h);
  fill(0);
  quad(-600,420,-600,0,-450,0,-450,340);
  quad(-350,285,-350,50,-270,50,-270,240);
  rect(0,130,70,130);
  quad(600,420,600,0,450,0,450,340);
  quad(350,285,350,50,270,50,270,240); 


}

class Ellipse
{
  constructor( TempX, TempY,TempZ,TempDiameter)
{
  this.x = TempX;
  this.y = TempY;
  this.z = TempZ;
  this.diameter = TempDiameter;
}

display()
{
  fill(255)
  circle(this.x,this.y, this.diameter);

}
}



function mousePressed()
{
    let mx = mouseX - width/2;
    let my = mouseY - height/2;

  if ( state === "startscreen")
 {
    if (mx > -150 && mx < 150 && my > 25 && my < 175)
    {state = "room"
    }
 }

 else if (state === "room")
 {
  state = "room2";
 }
}

