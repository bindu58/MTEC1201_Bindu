//Bindu//



// " Perplexed"//
// the picture is all about the state of them perplexed situation because of the too many chooices.//


let x = 300;
let y = 90;
let r = 50;

function setup() {
  createCanvas(1000,880);
}

function draw() {
  background(50, 50,255);

  // The line on the left side.//
 stroke(' Black');
 strokeWeight(5);

 line( 0,880,200,700);

 // the line on the middle.//
  line( 200,700,1000,700);

  // The vertical line//
  line( 200,700,200,0);

  //The wall//
  fill( 220);
  rect( 200,0,800,700)

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
for( let i=0; i<11; i++){
  fill(255*(i/10),mouseY,);
  circle(width/1.6, height/3, 550-(i*50),)


fill(255,0,0);
  circle(x, y, r);
  circle(950, y, r);
  fill(0,0,0);
  circle(x, 590, r);
  circle(950, 590, r);

  y = y + 1;
  if (y > 600) { 
    y= 0;
   
    }
  }
}
 
//stop the circles when they reach the bottom of the wall
 function mousePressed() {
  noLoop();
}
function mouseReleased() {
  loop();
}
