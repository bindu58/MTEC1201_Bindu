
let candy = [];
let feelings = ["mad", " so happy", "excited", "delirious"];

let positionCandy = 0;
let positionFeelings = 0;



function setup() {
  createCanvas(800, 800);
   background(225,255,0);

  candy[0] = 81
candy[1] = 0;
candy[2] = 3;
candy[4] = 8;

textSize(44);
textAlign(CENTER);
  
}


 function draw(){
background(64);
text("I HAVE " + candy[positionCandy] + " CANDY BAR" + feelings[positionFeelings], width/2, height/2);
 }
