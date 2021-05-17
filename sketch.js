const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup(){
  createCanvas(490,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,height-5,490,10);

  for (var d = 6; d <= width; d = d+80){
    divisions.push(new Division(d, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width-5; j = j+50){
    plinkos.push(new Plinko(j,80,10));
  }

  for (var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j,150,10));
  }

  for (var j = 40; j<= width-5; j = j+50){
    plinkos.push(new Plinko(j,220,10));
  }

  for (var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j,290,10));
  }
}

function draw(){
  background("black");
  Engine.update(engine);

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  ground.display();

  for (var d = 0; d < divisions.length; d++){
    divisions[d].display();
  }

  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }  
}