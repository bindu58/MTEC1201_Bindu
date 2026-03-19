//

let amplitude = 150;
let frequency = 0.025;
let xPos = 0;
let yPos = 0;
let xPrev = 0;
let yPrev;
let offset;
let amount;
let r;
let g;
let b;

function setup() 
{
	createCanvas(1000, 500);
	strokeWeight(2);// thickness of the lines connecting the circles
	fill(255, 255, 255, 50);
	
	offset = height/2;//canvas for the center's wave effect.
	yPrev = height/2;
}

function draw() 
{	
	r = map(xPos, 0, width, 50, 150); // color mapping based on x position
	g = map(xPos, 0, width, 0, 255);
	b = map(xPos, 0, width, 255, 0);
	
	background(r, g, b, 5);

	lerpAmount = map(constrain(mouseY, 0, height), 0, height, 0.1, 1.0);// mapping the minimum and maximum values of the mouseY position to control the lerp amount.
  	yPos = amplitude * sin(xPos * frequency) + offset;//sine wave for the oscillation of the circles, creating a wave effect.
	
	yPos = lerp(yPrev, yPos, lerpAmount);
	xPos = lerp(xPrev, xPos, lerpAmount);
	
	circle(xPos, yPos, 50);
	
	line(xPrev, yPrev, xPos, yPos);
	
	yPrev = yPos;
	xPrev = xPos;
	
	xPos++;
	
	if (xPos > width)
	{
		xPos = 0;
		xPrev = xPos;
	}
}