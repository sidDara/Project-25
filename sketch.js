
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

	side1 = new Dustbin(700,390,20,80,false)
	side2 = new Dustbin(870,390,20,80,false)

	base = new Dustbin(790,390,210,20,true)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  ground.display();
  paper.display();
  side1.display();
  side2.display();
  base.display();

  
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-120})
	}
}



