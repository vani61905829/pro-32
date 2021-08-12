const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var blower;
var button;
var show;
var engine,world;
var blowermouth
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
blower = new Blower(400,200,100,100);
blowermouth =new Blowermouth(250,250,200,40);
//ball = new Ball (100,100,50,50);
}

function draw() {
  background(255,255,255);  

button = createButton ("click to blow");
button.position(width/2 ,height - 100);
button.class('blowButton');
button.mousePressed('blow');

  

blower.show();
blowermouth.show();
ball.show();

drawSprites();

}
function blow(){
Matter.body.applyForce(ball.body,{x:0,y:0},{x:0,y:0});
}










