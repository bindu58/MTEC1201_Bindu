// Bindu//
//" Bollon"//
// Bollon will fly in the sky and will be able to pop when the mouse is pressed. It will also change color when it pops.//
// bollon is from pixaby https://pixabay.com/photos/hot-air-ballon-balloon-sky-float-5528622/,
//https://pixabay.com/photos/sky-balloon-air-outdoors-3375042/
//https://pixabay.com/photos/hot-air-balloon-sky-9788005/
//https://pixabay.com/photos/hot-air-balloon-lake-balloon-sunset-2411851/


//variable for the rect//
let h=50
let w=50

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

let state = "preevent";

function preload()
{
bollon1 = loadImage("Image/bollon1.png");
bluebollon =loadImage("Image/bluebollon.png");
bollon2 = loadImage("Image/bollon2.png")
bollon3 = loadImage("Image/bollon3.png")

}



function setup() {
  createCanvas(windowWidth, windowHeight,);
  textAlign(CENTER);
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
 
  //bollons//
  image(bollon1, width/10, height-600, 500, 500);
  image(bluebollon, width/10, height-690, 700, 700);
  image(bollon2, width/2, height-630, 500, 500);
  image(bollon3, width/30, height-600, 500, 500);
  image(bollon2,width/5, height-800,200,300)
  image( bluebollon,width/30, height-900,300,300)
  image(bollon1,width/40,height-800,200,200)
  image(bollon1,width/15,height-600,100,100)
  image(bollon2,width/20,height-600,200,200)
  image(bollon3,width/40,height-600,200,200)

  image(bollon1, width/10, height-800, 300, 300);
  image(bluebollon, width/30, height-700, 200, 200);
  image(bollon2, width/2, height-630, 500, 500);
  image(bollon3, width/30, height-600, 500, 500);
  image(bollon2,width/5, height-800,200,300)
  image( bluebollon,width/30, height-900,300,300)
  image(bollon1,width/40,height-800,200,200)
  image(bollon1,width/15,height-600,100,100)
  image(bollon2,width/20,height-600,200,200)
  image(bollon3,width/40,height-600,200,200)
  


  

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


 function preevent()
 {

 }




