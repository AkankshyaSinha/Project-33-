const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var snow





function preload() {
 bg= loadImage("snow3.jpg")
}





function setup() {
  createCanvas(1200,1000);
  createSprite(400, 200, 50, 50);
  snow= new Snow(10,20, radius)
}

function draw() {
  //background(255,255,255);  
  background(bg)
  snow.display()

  drawSprites();
}