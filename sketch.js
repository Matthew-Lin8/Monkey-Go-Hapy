
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(900,400);
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
 
 console.log(ground.x);
  
}


function draw() {

  background("white")
  drawSprites();
  
   if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
   if (ground.x <400) { 
    
    ground.x = ground.width/2;
    
  }
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score: ", + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:   "+ survivalTime,100,50);
  
   if (frameCount % 80 === 0) {
     
     banana = createSprite(590,10,20,20);
     banana.addImage(bananaImage)
     banana.y = Math.round(random(50, 340));
     banana.velocityX = - 4;
     banana.setLifetime = 200;
     banana.scale = 0.1;
     
   }
  
   if (frameCount % 300 === 0) {
     
     obstacle = createSprite(590,315,20,20);
     obstacle.addImage(obstacleImage)
     obstacle.velocityX = - 4;
     obstacle.setLifetime = 200;
     obstacle.scale = 0.1;
     
   }
}






