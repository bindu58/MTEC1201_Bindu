//Bindu//
//Escape The Illusion//
// Use arrow key to move the character//

let x,y,h;

let t = [];
let str;

let font;
let character;
let person;
let state = "startscreen";
let r = 128;

let wall;
let sunrise;
let myCamera;
let player;
let circle;

//variable for timer//
currentTime = 0;
timer1= 4000;
timer2= 6000; 
timer3= 8000;
timer4= 10000;



function preload()
{
   font = loadFont('/Images/Easter Joys.otf');
   play = loadImage("Images/play.svg");
   sunrise = loadImage("Images/Sunrise.png");
   player = loadImage("/Images/player.png")
  // person = loadModel('Assets/person.obj',true);
}
  


function setup() 
{
  createCanvas(1300, 900,WEBGL);
  rectMode(CENTER);
  wall = new Wall();
  character = new Character();
 
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
    else if (state === "gameover")
    {
      gameOver();
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

   let mx = mouseX - width/2;
    let my = mouseY - height/2;

    if (mx > -150 && mx < 150 && my > 25 && my < 175)
    {
      r = 255;
    }
    else
    {
    r = 128;
    }
}




function Room()
{
  background(0);
   wall.display();
   
   //Doors//
  fill(0);
  quad(-600,420,-600,0,-450,30,-450,340);
  rect(0,135,70,130,20,20,0,0);
  quad(600,420,600,0,450,30,450,340);
  character.display();
  character.update();
 
  currentTime = millis();
  if ( currentTime == currentTime && currentTime<timer2)
  {
     fill(255);
  textSize(40);
  text( "To Move The Character Use The Arrow Key",-400,-150);
  text("Find The Right Door to Escape The Illusion",-400,-90);
  text ("Find The Right Spot On The Door TO GO Through It",-400,-30);
  }

}



function Room2()
{
  background(0);
  wall.display();
//doors//
  
  fill(0);
  quad(-600,420,-600,0,-450,30,-450,340);
  quad(-350,285,-350,50,-270,80,-270,240);
  rect(0,150,70,100,20,20,0,0);
  quad(600,420,600,0,450,30,450,340);
  quad(350,285,350,50,270,80,270,240);
  character.display1();
  character.update();
    

}


function Room3 ()
{
  background(0);
  wall.display();

  fill(0);
  quad(-600,420,-600,0,-450,30,-450,340);
  quad(-350,285,-350,50,-270,80,-270,240);
  rect(-70,150,70,100,20,20,0,0);
  rect(70,150,70,100,20,20,0,0);
  quad(600,420,600,0,450,30,450,340);
  quad(350,285,350,50,270,80,270,240); 
  character.display2();
  character.update();




}



function lastScreen()
{
  orbitControl();
  background(0);
  image(sunrise,-650,-450,1300,900);
  character.display3();

  fill(0);
  textSize(50);
  text(" Congratulation! ",-150,-200);
  text (" You Are Escaped",-180,-140);
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

        else if ( state === "lastscreen")
          {
          state = "startscreen";
          }

          else if (state === "gameover")
          {
            state = "room"
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
    orbitControl();
  noStroke();
  strokeWeight();
  fill(150,0,150);
  quad(this.x-650,this.y-450,this.x+650,this.y-450,this.x+200,this.y-200,this.x-200,this.y-200);
  quad(this.x-650,this.y+450,this.x+650,this.y+450,this.x+200, this.y+200, this.x-200,this.y+200);
  fill(170,0,170);
  rect(this.x,this.y,this.h,this.h);
  fill(128,0,128);
 
  quad(this.x-650,this.y-450,this.x-650,this.y+450,this.x-200,this.y+200,this.x-200,this.y-200);
  quad(this.x+650,this.y-450,this.x+650,this.y+450,this.x+200,this.y+200, this.x+200,this.y-200);

  }

}

class Character
{
  constructor()
  {
    this.x=-25;
    this.y=350;
    this.h = 100;
    this.w = 50;
    this.move= 10;
    this.vel = createVector(0,0,0);
  }

  update()
  {
    if (keyIsDown(UP_ARROW))
    {
      this.y -- == this.move;
    }
    if (keyIsDown(DOWN_ARROW))
    {
      this.y++ == this.move;
    }
    if (keyIsDown(LEFT_ARROW))
    {
      this.x -- == this.move;
    }
    if (keyIsDown(RIGHT_ARROW))
      this.x ++ === this.move;

    this.x = constrain(this.x, -650,650);
    this.y = constrain (this.y, 100,350);


  }
  display()
  {
    image(player,this.x,this.y,this.w,this.h);

    if ( this.y == 100 && this.x == -25)
    {
      state = "room2";
      this.y = 350;
    }
    if (this.x == - 550 && this.y<320)
    {
      state = "gameover";
      this.y = 350;
    }

    if (this.x == 500 && this.y<320)
    {
      state = "gameover";
      this.t= 350;
    }

   

  }
  display1()
  {
    image(player,this.x,this.y,this.w,this.h);

    if (this.x == - 550 && this.y<320)
    {
      state = "room3";
      this.y = 350;
      this.x = 0;
    }
     if ( this.y == 100 && this.x == -25)
    {
      state = "gameover";
      this.y = 300;
      this.x = 0;
    }

    if (this.x == 500 && this.y<320)
    {
      state = "gameover";
      this.t= 300;
       this.x = 0;
    }

  }
display2()
{
  image(player,this.x,this.y,this.w,this.h);

    if (this.x == 280 && this.y<190)
    {
      state = "lastscreen";
      this.y = 350;
    }
}

display3()
{
  image (player,this.x+200,this.y-300,this.w+100,this.h+200);
}

}

function gameOver()
{
  wall.display();
  fill(255,0,0);
  textSize(70);
  text("Game Over",-200,-100);
  text("Click Mouse Restart",-320,-0);
}
