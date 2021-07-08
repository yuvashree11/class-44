//variable
var bg,bgimg;
var candy,candyimg1,candyimg2,candyimg3,candyimg4,candyimg5,candyimg6;
var boy,boyimg;
var dg,dgimg;

//function preload
function preload(){
  bgimg = loadImage("images/bg3.jpg");
  boyimg = loadAnimation("images/boy1.PNG","images/boy2.PNG","images/boy3.PNG","images/boy4.PNG","images/boy5.PNG",
  "images/boy6.PNG","images/boy7.PNG","images/boy8.PNG");
  candyimg1 = loadImage("images/candy1.png");
  candyimg2 = loadImage("images/candy2.png");
  candyimg3 = loadImage("images/candy4.png");
  candyimg4 = loadImage("images/candy5.png");
  candyimg5 = loadImage("images/candy6.png");
  candyimg6 = loadImage("images/candy7.png");
  dgimg = loadImage("images/Dragon3.jpg");
  
}

//function setup
function setup() {
  createCanvas(1200,700);

  boy = createSprite(50,500);
  boy.addAnimation("running",boyimg);

}

//function draw
function draw() {

  background(bgimg);
  drawSprites();

}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(60,390,10,40);
    obstacle.velocityX = -(6 + score/100);
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }