
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,ground1,ground2;

var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.3,
		isStatic:false,
		friction:0,
		density:1.2
	}
	var ground_options={
		isStatic:true
	}

	//Create the Bodies Here.
    ground=Bodies.rectangle(400,695,800,20,ground_options)
	World.add(world,ground)

	ground2=Bodies.rectangle(500,680,10,100,ground_options)
	World.add(world,ground2)

	ground1=Bodies.rectangle(650,680,10,100,ground_options)
	World.add(world,ground1)


	ball=Bodies.circle(50,40,10,ball_options);
    World.add(world,ball);
	

	Engine.run(engine);
	ellipseMode(RADIUS);
	rectMode(CENTER)
}


function draw() {
  background(50);
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x,ground.position.y,800,20);
  rect(ground2.position.x,ground2.position.y,10,100);
  rect(ground1.position.x,ground1.position.y,10,100);


  keypressed();
  drawSprites();
 
}

function keypressed(){
	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball,ball.position,{x:0.20,y:-0.75})
	}
}



