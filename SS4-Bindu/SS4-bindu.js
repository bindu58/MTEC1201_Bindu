//Bindu//



// " Perplexed"//
// the picture depicts the state of perplexity  because of the too many options.//
// Move arrow to x > 700to stop the movement of side circles.//
// press the mouse to change the color of the wall and the position of the circles.//
// images will change every 2 seconds and the text will also change according to the image.//

//Variables 
let fall = 0;
let opacity = 0;
let fade = 0;


// timer//
currentTime = 0;
timer1= 2000;
timer2= 4000;
timer3= 6000; 
timer4= 8000;
timer5= 10000;

//create images
let man;
let Piano;
let wallman;
let trek;
let tho;

let r = 350;
let str = "FOOL";

// Variables for the wall
let g = 255;
let b = 255;

//ELLIPSE VAEIABLES
let x = 350;
let y = 500;
let dia = 50;
let isgrowing = true;
let notGrowing = false;

function preload()
{
  wallman = loadImage("Image/wall man.jpg");
  Piano = loadImage("Image/piano.jpg");
  trek = loadImage("Image/trek.jpg");
  man = loadImage("Image/man.jpg");
  tho = loadImage("Image/tho.jpg");

}

function setup() 
 {
  createCanvas(1000,880);
 }


function mousePressed()
  {
      g = random(0,255);
      b = random(0,255);
      x = random(400,900);
      y = random(100,600);
      
      
  }

function draw() 
   {
  background(150,150,50);
  

  // The line on the left side.//
 stroke(' Black');
 strokeWeight(5);

 line( 0,880,200,700);

 // the line on the middle.//
  line( 200,700,1000,700);


 //lines around paintings
 line(23,198,175,198);
line(23,402,175,402);
line(23,198,23,402)
line(176,198,176,402);

  // The vertical line//
  line( 200,700,200,0);

  //The wall//
  fill( 200,g,b);
  rect( 200,0,800,700,15);

// The person standing in front of the wall//
fill(0,0,0)
 ellipse(425, 650, 25, 50);
 // give all the corners radius of 30//
rect(400,675,50,80,30);
rect( 403,745,15,90,30);
rect( 433,745,15,90,30);

// shoes//
fill(100,50,25)
noStroke();
rect(400,833,20,10);
rect(430,833,20,10);

//circles on the wall//
strokeWeight(0);
for( let i=0; i<11; i++)
  {
  fill(255*(i/10),25,25,);
  circle(width/1.65, height/3, r-(i*25),)

  }
  //circle shrinking//
if (notGrowing)
  {
  r = r + 0.5; 
  }
else
  {  r = r - 0.2;
 }

if(r > 250 || r < 50)
{
  notGrowing = notGrowing;
}

  

for( let i=0; i<11; i++)
  {
  fill(150*(i/10),0,0); 
 ellipse(x, y, dia, dia-(i*10));
  }

for( let i=0; i<11; i++)
  {
  fill(150*(i/10),0,0); 
 ellipse(x, y-350, dia, dia-(i*10));
  }
for( let i=0; i<11; i++)
  {
  fill(150*(i/10),0,0); 
 ellipse(x+520, y, dia, dia-(i*10));
  }
for( let i=0; i<11; i++){
  fill(150*(i/10),0,0); 
 ellipse(x+520, y-350, dia, dia-(i*10));
}
// the ellipse is growing and shrinking//
if(isgrowing){
  dia = dia +2;
}
else{
  dia = dia -3;
}

if(dia > 250 || dia < 50){
  isgrowing =!isgrowing;
}
if (mouseX> 700) {
  dia = 100;
} else {
  Dia = 50;
}

textSize(50);
  fill(0,g,b);
  textSize(14);
  text(str, 590, 300);

  fill(0,0,0);
  textStyle(ITALIC);
  textSize(30);

  
  currentTime = millis();
   image(wallman, 25, 200, 150, 200);
  

   if (currentTime > timer1 && currentTime < timer2)
   {
    text('Mistery', 50,435);
    image(wallman, 25, 200, 150, 200);
   
   
   }

   if (currentTime > timer2 && currentTime < timer3)
   {
    image(Piano, 25, 200, 150, 200);
    text('Music', 50,435);
   }

   if (currentTime > timer3 && currentTime < timer4)
   {
    image(trek, 25, 200, 150, 200);
    text('Happy', 50,435);
   }
   if (currentTime > timer4 && currentTime<timer5)
   {
    image(man, 25, 200, 150, 200);
    text('Depth', 50,435);
   }

   if (currentTime > timer5)
    {
image(tho,0,0,197,700);
tho.resize;



   }






function keyPressed ()
{
  if (key === 'W') 
  {
    image(wallman, 25, 200, 150, 200);
    
  }
  else if (key === 'P') 
  {
    image(Piano, 25, 200, 150, 200);
  }
  else if (key === 'T') 
  {
    image(trek, 25, 200, 150, 200);
  }
   else if (key === 'M') 
  {
    image(man, 25, 200, 150, 200);
  }

 }
}