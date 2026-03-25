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
let y = 300

// Three stages of event//
   //1. preevent default stage
   //2. event stage
   //3. post event stage



// variables for color//
let r= 255
let g = 150
let b = 75
let (topcolor, bottomcolor);

// variables for images//
bollon1;
bollon2;
bollon3;
bluebollon;

let fly = true;
let pop = false;

let state = "pregame";

function preload()
{
bollon1 = loadImage("Image/bollon1.png");
bluebollon =loadImage("Image/bluebollon.png");
bollon2 = loadImage("Image/bollon2.png")
bollon3 = loadImage("Image/bollon3.png")

}



function setup() {
  createCanvas(1300, 900);
  textAlign(CENTER);
}

function draw() 
{ 
  if (state == "pregame")
  {
    preGame();
  }
  else if (state == "game")
  {
    game();
  }
  else if (state == "gameover")
  {
    gameOver();
  }
}
  
  function mousePressed()
  {
    if (state == "pregame") 
      {
        state = "game";
    }
    else if (state == "gameover")
    {
      state = "pregame";
    }
  }

 


  





function preGame()
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


  home(width, height, w, h);

  textSize(50);
  fill(0);
  text("Click To Start The Event", width/2, height/2);


  }



function game()
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

  //bollons//
  image(bollon2, x+300, y-20, 450+w, 450+h);
  image(bluebollon, x-300, y-90, 650+w, 650+h);
  image(bollon3, x+100, y-50, 350+w, 400+h);
  image(bollon1, x+50, y+200, 250+w, 250+h);
  image(bollon1, x+200, y-100, 150+w, 200+h);
  image(bollon1, x-200, y, 250+w, 250+h);
  image(bollon3, x-100, y-200, 250+w, 250+h);
  image(bollon2, x+900, y-200, 250+w, 250+h);
  image(bluebollon, x+300, y-200, 150+w, 150+h);
  image(bollon3, x-300, y+100, 250+w, 250+h);
  image(bluebollon, x-150, y+200, 150+w, 150+h);
  image(bollon1, x-200, y-200, 250+w, 250+h);
  image(bollon3, x+600, y-50, 150+w, 150+h);
  image(bollon3, x+200, y-300, 250+w, 250+h);
  image(bluebollon, x-200, y-300, 250+w, 250+h);
  image(bollon1, x+100, y-300, 250+w, 250+h);
  image(bollon2, x+500, y-300, 250+w, 250+h);

  
}

function gameOver()
{
  //background//
  topcolor = color(0,0,255);
bottomcolor = color (135,206,235);
 for ( let y = 0; y < height-200; y++) {
  n = map(y,0,height-200,0,1);
  let newcolor= lerpColor(topcolor,bottomcolor,n);   
 }
 //floor//
 fill(0,100,0);
 rect(0,height-200,width,200);

 // home//
  home(width, height, w, h);
textSize(50);
fill(0);
text("Happy New Year!", width/2, height/2);
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

