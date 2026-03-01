//Bindu//



// " Perplexed"//
// the picture is about the state of perplexity  because of the too many choices.//

let r = 350;
let str = "FOOL";


//ELLIPSE VAEIABLES
let x = 350;
let y = 500;
let dia = 50;
let isgrowing = true;
let notGrowing = false;

function setup() 
{
  createCanvas(1000,880);
}

function draw() {
  background(50, 50,255);
  

  describe('The text "Fool" written in black in the middle of a white rectangle.');

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
  fill(255*(i/10),25,25,);
  circle(width/1.65, height/3, r-(i*25),)

  }
  //circle shrinking//
if (notGrowing){
  r = r +1; 
}
else{  r = r -0.3;
}

if(r > 250 || r < 50){
  notGrowing = !!notGrowing;
}

  

for( let i=0; i<11; i++){
  fill(150*(i/10),0,0); 
 ellipse(x, y, dia, dia-(i*10));
}

for( let i=0; i<11; i++){
  fill(150*(i/10),0,0); 
 ellipse(x, y-350, dia, dia-(i*10));
}
for( let i=0; i<11; i++){
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
  isgrowing = !isgrowing;
}

textSize(50);
  fill(0,0,0);
  textSize(14);
  text(str, 590, 300);
    }
 