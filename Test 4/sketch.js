



let ; //declaration  of the p5 image object

function preload(){
  mountain = loadImage("image/mountain.jpg");
}


function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
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
