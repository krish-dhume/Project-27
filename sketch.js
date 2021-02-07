
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;
var roof;
var bob;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
   roof=new Roof(400,450,40);
   bob=new Bob(320,700);
	bob1=new Bob(380,700);
   bob2=new Bob(440,700);
   bob3=new Bob(500,700);
  
}


function draw() {
  background(0,255,255);
  Engine.update(myengine);

  
  roof.display();
 bob.display();
 bob1.display();
 bob2.display();
 bob3.display();

}



