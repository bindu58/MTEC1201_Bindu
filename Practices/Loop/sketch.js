

//while loops//


function setup() {
  createCanvas(700, 700);
  rectMode(CENTER);
}

function draw() 
{
  background(220);




for (let i = 0; i < 50; i++)
  {fill(i*5);
    rect(width/2,height/2, 400-(i*10), 400-(i*10));
  }
}