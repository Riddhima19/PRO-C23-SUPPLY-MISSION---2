const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var rect;
var box1,box2;
var pig1;
var log1;

function setup() {

  var canvas=createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(600,390,1200,20);


  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);

  pig1=new pig(810,350)

  log1=new Log(810,260,20,PI/2)

  
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);

  box5 = new Box(810,160,70,70);

  
}

function draw() {
  background("black");  
  Engine.update(engine);


//rect(400,200,20,20);


box1.display();
box2.display();

box3.display();
box4.display();
box5.display();
ground.display();

pig1.display();

log1.display();


 drawSprites();
}