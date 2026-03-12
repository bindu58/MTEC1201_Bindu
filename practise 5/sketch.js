function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCircles(200,200,100);
  
  drawCircles(100,100,50);

  drawCircles(300,300,25);

  drawReact(50,50,100,50);

}
function sayHi(){
  print("hi");
}

function drawCircles(x,y,d)
{
  fill(random(55),random(55),random(100));
  circle( x,y,d);
  circle(x-d,y+d,d);
  circle(mouseX + x,mouseY +y,d)}

  function drawReact(x,y,w,h)
  {
  
    rect(x,y,w,h);
    rect(x-w,y+h,w,h);
    rect(mouseX + x,mouseY +y,w,h);
  }


functionmousePressed()
{
  sayHi();
}