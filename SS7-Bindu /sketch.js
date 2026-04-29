//Bindu//

let houses = [];
houses.length = 100;
let tree;

function setup() 
{
  createCanvas(1300,900);
  for(let i = 0; i < houses.length; i++)
  {
    houses[i] = new House(1300,1000);
  
  }
    tree = new Tree(100,100);

}

function draw()
 {
  background(10, 100,255); 
for(let i = 0; i < houses.length; i++)
{
  houses[i].display();
}
tree.display();
tree.grow();
 }



class House
{
constructor(TempX,TempY,TempDiameter)
 {
this.x = TempX;
this.y = TempY;
this.diameter = TempDiameter;
 }

display()
  {
    noStroke();
   fill(0) 
   rect(this.x-300, this.y-340, 230, 150);
   fill(155,70,12);
   triangle(this.x-310, this.y-340, this.x-60, this.y-340, this.x-180, this.y-450);
   //door//
   fill(255,255,255);
   rect(this.x-200, this.y-270, 50, 80);
  
   //windows//
   rect(this.x-130, this.y-280, 50, 50);
   rect(this.x-280,this.y-280,50,50)
   fill(0)
   rect(this.x-258,this.y-280,5,50);
   rect(this.x-108,this.y-280,5,50);
   rect(this.x-280,this.y-258,50,5);
   rect(this.x-130,this.y-258,50,5);

   //ground//
   fill(0,150,0);
   rect(this.x-1300,this.y-200, 1500, 100); 
  
  }
}


class Tree
{
  constructor(TempX,TempY)
  {
    this.x = TempX;
    this.y = TempY;
    this.diameter = 70;
    this.grow = [ 1,2,3,4,5,6,7,8,9,10];
    this.grow.length = 10;
  }

display()
{

  fill(155,70,12);
  rect(this.x,this.y+600,30,100);
  fill(0,70,0);
  noStroke();
  ellipse(this.x+15,this.y+590,this.diameter,100);
  ellipse(this.x-20,this.y+550,this.diameter,100);
  ellipse(this.x+50,this.y+550,this.diameter,100);
  ellipse(this.x+15,this.y+500,this.diameter,100);

}

grow()
{  
}
}
