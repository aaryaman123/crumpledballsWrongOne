
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ldust, rdust, bdust;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic : true
	}

	//Create the Bodies Here.
	ldust = new Trash(500,630,10,100);
	bdust = new Trash(600,680,200,10);
	rdust = new Trash(700,630,10,100);

	ground = Bodies.rectangle( 400,690,800,20,options);
	World.add(world, ground);

	paper = new Paper(20,400,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);
  keyPressed();
  
 paper.display();
 ldust.display();
 rdust.display();
 bdust.display();
}

function keyPressed(){

	if (keyCode === UP_ARROW){ 
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}
