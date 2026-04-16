


let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(170);
  let d = 50;
 for (let x = 0; x <= width; x += d) {
  fill(0);
  ellipse(x, y, d, d)
}

y++;

if (y >= height + (d/2)) {
  y = -d;
}
}