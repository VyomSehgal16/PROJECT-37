var track, mobile, obstaclesGroup;
var obstaclePosition = Math.round(random(50,750));
var gameState = "play";

function preload(){

    track = loadImage("track.jpg");

}

function setup(){

    canvas = createCanvas(800, 800);
    background("brown");
    image(track, 400, 400, 800, 3600);
    obstaclesGroup = new Group();

    mobile = createSprite(400,700,20,30);
    mobile.shapeColor = "red";
    
}

function draw(){
  if(gameState === "play"){
    if(keyWentDown(RIGHT_ARROW)){
      mobile.velocityX = 3.5;
      mobile.velocityY = 0;
    }
     if(keyWentUp(RIGHT_ARROW)){
      mobile.velocityY = 0 ;
      mobile.velocityX = 0 ;
    }
    if(keyWentDown(LEFT_ARROW)){
      mobile.velocityX = -3.5;
      mobile.velocityY = 0;
    }
     if(keyWentUp(LEFT_ARROW)){
      mobile.velocityY = 0 ;
      mobile.velocityX = 0 ;
    }

    spawnObstacles();

    if(obstaclesGroup.isTouching(mobile)){
      gameState = "end";
    }
  }
  
  if(gameState === "end"){
    mobile.destroy();
    obstaclesGroup.destroyEach();
    text("GAME OVER",200,400);
  }

}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(obstaclePosition,50,10,40);
      obstacle.velocityX = -4;
    }
    obstacle.lifetime = 700;
    obstaclesGroup.add(obstacle);
}  