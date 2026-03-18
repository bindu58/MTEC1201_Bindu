

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
  //image 
  //image(mountain, width/2, height/2);

  image( mountain, width/2, height-height/2, mountain.width/8, mountain.height/8);
  image (mountain, width/4, height/4, mountain.width/10, mountain.height/10);
  image (mountain, width/8, height/8, mountain.width/12, mountain.height/12);
  image (mountain, mouseX, mouseY, mountain.width/18, mountain.height/18);
}
  fill(opacity);
  text("mountain", width / 2, height/12 );
  opacity += fade ;
  if (opacity >255 || opacity < 0 ){
    fade = -fade;
  }