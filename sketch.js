var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;
var score

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
 createCanvas(400,400);
  
 monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;

  FoodGroup=new Group()
  obstacleGroup=new Group();
  
   
}


function draw() {
  background("white");
  fill ("black");
  textSize(20);
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival time:"+survivaltime,100,50)
  
  
  
  
  if (ground.x < 0) {
  ground.x = ground.width / 2;
}
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  
  banana();
  obstacle();
  
drawSprites();
}

 function banana(){
   if(frameCount % 60===0){
     bananas=createSprite(300,Math.round(random(150,250)),10,10);
     bananas.addImage(bananaImage);
     bananas.scale=0.1;
     bananas.velocityX=-3
     FoodGroup.add(bananas);
   }
 }

function obstacle(){
if(frameCount % 80===0){
  obstacles=createSprite(300,Math.round(random(330,330)),10,10);
  obstacles.addImage(obstaceImage);
  obstacles.velocityX=-3
  obstacles.scale=0.1;
}
}