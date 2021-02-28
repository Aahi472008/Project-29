const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var polygonImg;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900, 430);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 400, 1000, 20);
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 250, 10);
  //layer1 Stand 1
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
  //layer2
  block8 = new Block(450, 235, 30, 40);
  block9 = new Block(330, 235, 30, 40);
  block10 = new Block(360, 235, 30, 40);
  block11 = new Block(390, 235, 30, 40);
  block12 = new Block(420, 235, 30, 40);
  //layer3
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  //layer4
  block16 = new Block(390, 155, 30, 40);

  //layer1 Stand 2
  box1 = new Block(600, 175, 30, 40);
  box2 = new Block(630, 175, 30, 40);
  box3 = new Block(660, 175, 30, 40);
  box4 = new Block(690, 175, 30, 40);
  box5 = new Block(720, 175, 30, 40);
  box6 = new Block(750, 175, 30, 40);
  box7 = new Block(780, 175, 30, 40);
  //layer2
  box8 = new Block(750, 135, 30, 40);
  box9 = new Block(630, 135, 30, 40);
  box10 = new Block(660, 135, 30, 40);
  box11 = new Block(690, 135, 30, 40);
  box12 = new Block(720, 135, 30, 40);
  //layer3
  box13 = new Block(660, 95, 30, 40);
  box14 = new Block(690, 95, 30, 40);
  box15 = new Block(720, 95, 30, 40);
  //layer4
  box16 = new Block(690, 55, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  slingshot = new Slinghot(this.polygon, { x: 100, y: 200 });
}

function draw() {
  getBackgroundImage();
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
  //layer1
  fill("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //layer2
  fill("#E6E6FA");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //layer3
  fill("lightblue");
  block13.display();
  block14.display();
  block15.display();
  //layer4
  fill("yellow");
  block16.display();

  //layer1 stand 2
  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  //layer2
  fill("#E6E6FA");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  //layer3
  fill("lightblue");
  box13.display();
  box14.display();
  box15.display();
  //layer4
  fill("yellow");
  box16.display();
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
  slingshot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingshot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(this.polygon);
  }
}
async function getBackgroundImage() {
  var response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  if (hour >= 06 && hour <= 18) {
    background("#FFCBA4");
  } else {
   background("blue");
  }
}
