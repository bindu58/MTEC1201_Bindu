let state = 'pregame';
let ellipseY = 0;





function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, );
  textSize(32);
}

function draw() {
  background(220);
  if (state === 'pregame') {
    preGame();
  } else if (state === 'game') {
    game();
  } else if (state === 'gameover') {
    postOver();
  }

  print(state);
}

function mousePressed() 
{
  if (state == 'pregame') {
    state = 'game';
  }
  else if (state == 'gameover') {
    state = 'pregame';
   
  }
}


function preGame() 
{
  background(0,0,220);
  text('Click to Start', );


}

function game() 
{
  background(25,220,25);
   ellipse(200,ellipseY,50,50);
  ellipseY = ellipseY + 1;
  fill(255,0,0);
  text(' What A FunGame', 200, 200);

}

if (ellipseY > height + 50) {
  state = 'gameover';
  ellipseY = 0;
}

function gameover()
{
  background(220,0,0);
  text('Game Over', 200, 200);
}