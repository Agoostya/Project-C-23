const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var playerBase,comBase,player,com;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  playerBase=new PlayerBase(300,450,180,150);
  comBase=new ComBase(900,450,180,150);
  player=new Player(300,playerBase.body.position.y-153,50,180);
  com=new Com(900,comBase.body.position.y-153,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  comBase.display();
  player.display();
  com.display();
}
