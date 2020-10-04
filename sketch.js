
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(200,650,20,25);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,670,800,25);
	tree = new Tree(500,640,315,655);
	mango1 = new Mango(745,480,15,15);
	mango2 = new Mango(775,480,15,15);
	mango3 = new Mango(755,520,15,15);
	rock1 = new Stone(boy,mango1);
	laucher1 = new Launcher(200,300,10,30);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground1.display()
tree.display();
mango1.display();
mango2.display();
rock1.display();


  

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectCollision(rock1,mango1){
  mangoBodyPosition= mango1.body.position
  stoneBodyPosition= rock1.body.position

  var distance=dist(stoneBody.Position.x,stoneBody.Position.y)
if(distance<-mango1.r+rock1)
{
	Matter.Body.setStatic(mango1.body,false);
}
}

function keyPressed()
{
	if(keyCode === 32){
		matter.body.setPosition(stoneObj.body,{x:235, y:420})
		laucherObject.attach(stoneObj.body)
	}
}
