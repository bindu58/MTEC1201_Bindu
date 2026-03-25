// Bindu//
//" Bollon"//
// Bollons will fly in the sky and will be able to pop when the mouse is pressed. It will also change color when it pops.//
// bollons is from pixaby https://pixabay.com/photos/hot-air-ballon-balloon-sky-float-5528622/,
//https://pixabay.com/photos/sky-balloon-air-outdoors-3375042/
//https://pixabay.com/photos/hot-air-balloon-sky-9788005/
//https://pixabay.com/photos/hot-air-balloon-lake-balloon-sunset-2411851/


//variable for the rect//
let h=50;
let w=50;
let x = 200;
let y1 = 300;
let y2 = 250;

// Three stages of event//
   //1. preevent default stage
   //2. event stage
   //3. post event stage



// variables for color//
let r= 255
let g = 150
let b = 75
let topcolor, bottomcolor;

// variables for images//
let bollon1;
let bollon2;
let bollon3;
let bluebollon;

let fly = true;


let state = "pregame";

function preload(){
bollon1 = loadImage("Image/bollon1.png");
bollon2 = loadImage("Image/bollon2.png");
bollon3 = loadImage("Image/bollon3.png");
bluebollon = loadImage("Image/bluebollon.png");
}

function setup() {
  createCanvas(1300,900);
  
textAlign(CENTER);
  
 }

 function draw()
 {
  if (state === "pregame")
  {
    preGame();
  }
  else if (state === "game")
  {
    game();
  }
  else if (state === "gameover")
  {
    gameOver();
  }
  
}



function house (width, height, w, h)
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


 function preGame()
 {
  //background//sky gradient//
  topcolor = color(0,0,255);
bottomcolor = color (135,206,235);

  {for ( let y = 0; y < 900-200; y++)
    {
  n = map(y,0,900-200,0,1);
  let newcolor= lerpColor(topcolor,bottomcolor,n);
  stroke(newcolor);
  line(0,y,1300,y);
  }
  }
   //floor//
 fill(0,100,0);
 rect(0,900-200,1300,200);
  house (width,height,w,h)
textSize(50);
text(" Click Here TO Start the Event",width/2,height/2);

 }

 function game()
 {
  bluebollon;
 house (width,height,w,h)

//bollons//
  image(bollon2, x+300, y1-20, 450+w, 450+h);
  image(bluebollon, x-300, y2-40, 650+w, 650+h);
  image(bollon3, x+100, y1-50, 350+w, 400+h);
  image(bollon1, x+50, y1+200, 250+w, 250+h);
  image(bollon1, x+200, y1-100, 150+w, 200+h);
  image(bollon1, x-200, y1, 250+w, 250+h);
  image(bollon3, x-100, y1-200, 250+w, 250+h);
  image(bollon2, x+900, y1-200, 250+w, 250+h);
  image(bollon3, x+300, y1-200, 150+w, 150+h);
  image(bollon3, x-300, y1+100, 250+w, 250+h);
  image(bollon1, x-150, y1+200, 150+w, 150+h);
  image(bollon1, x-200, y1-200, 250+w, 250+h);
  image(bollon3, x+600, y1-50, 150+w, 150+h);
  image(bollon3, x+200, y1-300, 250+w, 250+h);
  image(bollon2, x-200, y1-300, 250+w, 250+h);
  image(bollon1, x+100, y1-300, 250+w, 250+h);
  image(bollon2, x+500, y1-300, 250+w, 250+h);

  if (fly){
    y1= y1-0.5;
  y2= y2-0.5;}

  
    if ( y2 < 25)
    {
      state = "gameover";
    

  }
}


function gameOver()
{
//background//sky gradient//
  topcolor = color(0,0,255);
bottomcolor = color (135,206,235);

  {for ( let y = 0; y < 900-200; y++)
    {
  n = map(y,0,900-200,0,1);
  let newcolor= lerpColor(topcolor,bottomcolor,n);
  stroke(newcolor);
  line(0,y,1300,y);
  }
  }
   //floor//
 fill(0,100,0);
 rect(0,900-200,1300,200);


  house (width,height,w,h)
  textSize(50);
  text("Happy New Year!",width/2,height/2);

}


function mousePressed()
{
  if (state == "pregame")
  {
    state = "game";
  }
  else if (state =="gameover")
  {
    state = "pregame";
  }
} 