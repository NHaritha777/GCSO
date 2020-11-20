var a,b;

function setup() {
  createCanvas(800,400);
  a= createSprite(200,200,80,50);
  a.shapeColor="green";

  b= createSprite(400,200,50,50);
  b.shapeColor="green";
}

function draw() {
  background(255,255,255);
  
  a.x=mouseX;
  a.y=mouseY;

  if (a.x-b.x > a.width/2+b.width/2 && b.x-a.x < a.width/2+b.width/2 ){
    a.shapeColor="red";
    b.shapeColor="red";
  } 
  
 

  drawSprites();
}