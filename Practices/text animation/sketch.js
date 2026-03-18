let mountain;
let opacity = 0;
let fade = 1;






function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  textAlign(CENTER,);
  textSize(size);
}

function draw() {
  background(220);
  fill(opacity);
  text("mountain", width / 2, height/12 );
  opacity += fade ;
  if (opacity >255 || opacity < 0 ){
    fade = -fade;
  }
}
