//sprite liberary
//https://molleindustria.github.io/p5.play/docs/classes/Sprite.html

//p5js
//https://p5js.org/reference/

var trex, trex_running;
var ground, groundImage;
var invisibleground;
var clouds, cloudsImage;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  cloudsImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(800, 200);

  //create a trex sprite

  trex = createSprite(40, 195, 80, 80);
  trex.addAnimation("trex", trex_running);
  trex.scale = 0.4;
  ground = createSprite(200, 190, 2000, 20);
  ground.addImage("floor", groundImage);

  invisibleground = createSprite(200, 202, 2000, 20);
  invisibleground.visible = false;
}

function draw() {
  background("white");
  drawSprites();
  ground.velocityX = -4;

  if (keyDown("UP_ARROW") && trex.y >= 171) {
    trex.velocityY = -8;
  } else if (keyDown("space") && trex.y >= 171) {
    trex.velocityY = -8;
  }

  trex.velocityY = trex.velocityY + 0.5;
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleground);
  //console.log(trex.y)
  createclouds();
}

function createclouds() {
  if (frameCount % 50 === 0) {
    clouds = createSprite(500, 50, 100, 20);
    clouds.addImage("cloudy", cloudsImage);
    clouds.velocityX = -4;
    clouds.scale = 0.6;
    //console.log('display clouds',frameCount)
    clouds.y = Math.round(random(80, 150));
    trex.depth = clouds.depth;
    trex.depth + 1;
    console.log("trex depth is", trex.depth);
    console.log("clouds depth is", clouds.depth);
  }
}
