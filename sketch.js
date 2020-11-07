
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,300,60)

	ground = new Ground(500,450,1000,10)

	side1 = new Dustbin(680,390,20,100)
	side2 = new Dustbin(890,390,20,100)

	base = new Dustbin(790,430,210,20)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  paper.display();
  ground.display();
  side1.display();
  side2.display();
  base.display();

  
  drawSprites();
  keypressed();
 
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-10})
	}
}



