
let r=250





function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(50,30,20);
fill(200, 100, 50);
stroke(255, 255, 255);
strokeWeight(4);
  circle(250,250 ,r);
  r=r-1

}
function keyPressed(){
  r=250
} 
