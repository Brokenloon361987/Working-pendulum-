
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var bobb
var bobbb
var bobbbb
var bobbbbb
var bobbbbbb

var Roof		

var rope
var roope
var rooope
var roooope
var rooooope

var bobDiameter

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
    

	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.
	
	Roof = new roof(490, 200, 400, 50);

	bobb = new bob(430, 500, 50, 50);
	bobbb = new bob(455, 500, 50, 50);
	bobbbb = new bob(490, 500, 50, 50);
	bobbbbb = new bob(525, 500, 50, 50);
	bobbbbbb = new bob(550, 500, 50, 50);

	rope = new chain (bobb.body, Roof.body, -60, 0);
	roope = new chain (bobbb.body, Roof.body, -30, 0);
	rooope = new chain (bobbbb.body, Roof.body,  0, 0);
	roooope = new chain (bobbbbb.body, Roof.body, 30, 0);
	rooooope = new chain (bobbbbbb.body, Roof.body, 60, 0);

	Engine.run(engine);bobbbbbb
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   Roof.display();
   
   bobb.display();
   bobbb.display(); 
   bobbbb.display();
   bobbbbb.display();
   bobbbbbb.display();

  
   keyPressed()
 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW)
	 { 
		 Matter.Body.applyForce(bobb.body,bobb.body.position,{x:40,y:45}); 
		 bobb.isStatic = false;
     }
 }

