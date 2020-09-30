const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin,paper;
function setup() {
	createCanvas(1300, 500);
	engine = Engine.create();
	world = engine.world;
  ground = new Ground(650,480,1300,20);
  dustbin = new Dustbin(850,320,250,300);
  paper = new Paper(100,460);
	Engine.run(engine);
  }


function draw() {
  background(400);
  ground.display();
  dustbin.display();
  paper.display();
  keyPressed();
  }

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85})

  }
}