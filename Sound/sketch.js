
let osc;
let fr, amp;
let playing = false;



function setup() {
  createCanvas(800, 500);
  fill(255);
  textSize(20);

  osc = new p5.Oscillator('sine');
}

function draw()
 {
  fr = constrain(map(mouseX,0,width,100,500),100,500);
  amp = constrain(map(mouseY,height,0,0,1),0,1);

  if (playing) 
    {
      background(0);
      text('press the oscillator to start', 20, 50);

}
else {
  background(map(maouseX,0,height,255,0),map(mouseX,0,width,0,255), map)
}

 }