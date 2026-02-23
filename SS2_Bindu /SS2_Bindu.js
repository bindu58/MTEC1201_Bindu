//Bindu//



// " Perplexed"//
// the picture is all about the state of them perplexed situation because of the too many chooices.//

let x= random(200,1000)
let y= random(0,700)
let r= 100;


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

  function mousePressed(){
    fill(255,10,10);
    circle,(x,y,r);
    circle(x,y+100,r)

    
  }

  function keyPressed(){
    fill(255,10,10);
    circle,(x,y,r);
    circle(x,y+100,r)
      
    }
 

  


  

  }

}


