
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1;dustbin1

function preload()
{
	dustbin1 = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
	ground1 = new ground(width/2,670,width,20);
	dustbin1 =new dustbin(1200,650);
	paper1 = new paper(500,400,50,50);

	
  
}


function draw() {
  rectMode(CENTER);
  
  background(249 ,218 , 193);

   
  paper1.display();
  ground1.display();
  dustbin1.display();
  
 drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:125,y:-120})
}
}



