
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);

  monkey = createSprite(150, 450, 10, 10);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.18;
  
  ground = createSprite(600, 500, 900, 10);
  ground.velocityX = -4;
  
 
 
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background("lightBlue");
  
   if(ground.x<0){
  ground.x = ground.width/2;
  console.log(ground.x);
   }
  

  if(keyDown("space")){
    monkey.velocityY = -5;  
  monkey.velocityY = monkey.velocityY+0.5;
    
  }
  monkey.collide(ground);
   
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
      text("Survival time: "+ survivalTime, 100, 50);
  
 
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  
  if(frameCount% 80 === 0){
  banana = createSprite(300, 400, 10, 10);
  
banana.addImage(bananaImage);
 banana.y = Math.round(random(120, 200));
    banana.velocityX = -3;
  banana.scale = 0.05;
  }
  
  FoodGroup.setLifetimeEach();
}

function obstacles(){
  
  if(frameCount% 300 === 0){
    
  obstacle = createSprite(300, 450, 10, 10)
 
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
    obstacle.y = 470;
    obstacle.velocityX = -3;
    
  }

  obstacleGroup.setLifetimeEach();
  
  }



