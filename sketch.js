const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  
  world=engine.world;

  var option={
    isStatic: true
  }
  var option2={
    restitution: 1.0
  }
  ground= Bodies.rectangle(200,390,200,20,option);
  World.add(world,ground);


  ball=Bodies.circle(200,100,20,option2);
  World.add(world,ball);

  console.log(ground.position.y);
 
}

function draw() {
  background("pink"); 
  Engine.update(engine);
rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}