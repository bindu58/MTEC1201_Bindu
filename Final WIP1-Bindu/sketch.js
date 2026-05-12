//Bindu//
//Escape The Illusion//

let x,y,h;
let t = [];
let str;
let font;
let play;
let person;
let circle = [10,20,30,40,50];
let state = "startscreen";
let r = 128;
let wall;
let sunrise;


function preload()
{
   font = loadFont('/Images/Easter Joys.otf');
   play = loadImage("Images/play.svg");
   sunrise = loadImage("Images/Sunrise.png")
}
  


function setup() 
{
  createCanvas(1300, 900,WEBGL);
  rectMode(CENTER);
  for(let i =0; i < 10; i++)
  {
    circle[i] = new Circle();

  }
  wall = new Wall();
}

function draw() 
{
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
    else if (state === "room3")
    {
      Room3();
    }
    else if (state === "lastscreen")
    {
      lastScreen();
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


  if (  -20<mouseX<=20|| 90 <mouseY <=110 )
  {
    r = 255;
  }

}




function Room()
{
  background(128,0,128);

   wall.display();
   //Doors//
  fill(0);
  quad(-600,420,-600,0,-450,0,-450,340);
  rect(0,135,70,130);
  quad(600,420,600,0,450,0,450,340);
  

}



function Room2()
{
  background(128,0,128);

  wall.display();
//doors//
  
fill(0);
  quad(-600,420,-600,0,-450,0,-450,340);
  quad(-350,285,-350,50,-270,50,-270,240);
  rect(0,135,70,130);
  quad(600,420,600,0,450,0,450,340);
  quad(350,285,350,50,270,50,270,240); 


}

function Room3 ()
{
  background(128,0,128);

  wall.display();

  fill(0);
  quad(-600,420,-600,0,-450,0,-450,340);
  quad(-350,285,-350,50,-270,50,-270,240);
  fill(255,50,25);
  rect(0,120,70,150,20,20,0,0);
  fill(0);
  rect(0,135,70,130,20,20,0,0);
  
  
  quad(600,420,600,0,450,0,450,340);
  quad(350,285,350,50,270,50,270,240); 



}



function lastScreen()
{
  background(0);
  image(sunrise,-650,-450,1300,900);
}

class Circle
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
      { 
      state = "room";
      }
    }

        else if (state === "room")
        {
        state = "room2";
        }
        else if (state === "room2")
          {
            state = "room3";
          }

        else if (state === "room3")
          {
            state = "lastscreen";
          }
        else if ( state === "lastscreen")
          {
          state = "startscreen";
          }

}



class Wall
{
  constructor()
  {
    this.x = 0;
    this.y = 0;
    this.h = 400;
  }

  display()
  {
  noStroke();
  strokeWeight();
  fill(150,0,150);
  quad(this.x-650,this.y-450,this.x+650,this.y-450,this.x+200,this.y-200,this.x-200,this.y-200);
  quad(this.x-650,this.y+450,this.x+650,this.y+450,this.x+200, this.y+200, this.x-200,this.y+200);
  fill(128,0,128,);
  rect(this.x,this.y,this.h,this.h);

  }

}
