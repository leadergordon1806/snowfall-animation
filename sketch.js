function preload() {
  snowflakeimg=loadImage("snow5.webp")
bgimg=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bgimg);  
  drawSprites();
  createSnowflake();
}
function createSnowflake(){
  if (frameCount%10===0){
    snowflake=createSprite(random(0,800),0,50,50)
    snowflake.velocityX = -2
    snowflake.velocityY = 4
    snowflake.addImage(snowflakeimg)
    snowflake.scale = 0.1

  }
}