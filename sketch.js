const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var ballObj;
var backgroundImg;
var sling;
var bg =  "images/sunrise1.png"


function preload() {
  getBackgroundImg(); 
}


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  //stand
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //glove
  // glove1 = createSprite(180,200,40,50);
  //glove1.addImage("glove", glove1_img);
  //glove1.scale = 0.5;
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);
  //ball 
  ballObj = new ball(200,200,40,50);
  //slingshot
  sling = new slingShot(ballObj.body,{x:200,y:200});
  

}
function draw() {
  // add condition to check if any background image is there to add
  if(backgroundImg)
  background(backgroundImg);

 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  ballObj.display();
  sling.display();
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(ballObj.body,{x:mouseX,y:mouseY})
  //image(glove2_img,180,200,100,100);
  
}
function mouseReleased(){
  sling.fly();
 
}
function keyPressed(){
   if(keyCode===32){
    Matter.Body.setPosition(ballObj.body,{x:200,y:200})
    ballObj.x =200;
    ballObj.y = 200;
    sling.attach(ballObj.body);
     ballObj.tragectory = [];
    
   }
}
async function getBackgroundImg(){

  // write code to fetch time from API
  var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

  //change the data in JSON format
  var responceJSON = await responce.json();
  var datetime = responceJSON.datetime;
  // write code slice the datetime
  var hour = datetime.slice(11,13);

  // add conditions to change the background images from sunrise to sunset
  if(hour>=04 && hour<=06){
      bg = "images/sunrise1.png"
  }
  if(hour>=07 && hour<=08){
      bg = "images/sunrise2.png"
  }
  if(hour>=09 && hour<=010){
      bg = "images/sunrise3.png"
  }
  if(hour>=11 && hour<=12){
      bg = "images/sunrise4.png"
  }
  if(hour>=13 && hour<=14){
      bg = "images/sunrise6.png"
  }
  if(hour>=15 && hour<=16){
      bg = "images/sunset8.png"
  }
  if(hour>=17 && hour<=18){
      bg = "images/sunset9.png"
  }
  if(hour>=19 && hour<=20){
      bg = "images/sunset10.png"
  }
  if(hour>=21 && hour<=22){
      bg = "images/sunset11.png"
  }
  if(hour>=23 && hour<=03){
      bg = "images/sunset12.png"
  }

  //load the image in backgroundImg variable here

  backgroundImg = loadImage(bg);
}


