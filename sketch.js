var rabbit, egg, arrow, spider,spider2,spider3,spider4;
var bgImg, rabbitAnimation, rabbitAnimation2, eggImg, arrowImg, spiderImg ;
var state = 0;
var lives = 5;
var spiders;


function preload() {
    bgImg = loadImage("images/ground.png");
    rabbitAnimation = loadAnimation("images/rabbit2.png", "images/rabbit.png"); 
    rabbitAnimation2 = loadAnimation("images/rabbit2.png");
    eggImg = loadImage("images/egg.png");
    arrowImg = loadImage ("images/arrow.png");
    spiderImg = loadImage ("images/spider.png");
}

function setup(){
    var canvas = createCanvas(windowWidth-100, windowHeight-200);
  
    spiders = new Group();
    

    rabbit = createSprite(50,height/2);
    //sprite.addAnimation() or sprite.addImage()
    
    rabbit.addAnimation("bunny", rabbitAnimation);
    rabbit.scale = 0.07;
   rabbit.setCollider("rectangle",0,0,1100,1100);
  //  rabbit.debug = true;
  
  spider4 = createSprite(random(width-200,width-100),5);
  spider4.addImage(spiderImg);
  spider4.scale = 0.1;
  spider4.setCollider("circle",0,0,200);
 //     spider4.debug = true;

  
  spider3 = createSprite(width/1.5,5);
  spider3.addImage(spiderImg);
  spider3.scale = 0.1;
  spider3.setCollider("circle",0,0,200);
  //    spider3.debug = true;

  
  spider = createSprite(width/4,5);
  spider.addImage(spiderImg);
  spider.scale = 0.1;
  spider.setCollider("circle",0,0,200);
//      spider.debug = true;

   
  spider2 = createSprite(width/2.5,5);
  spider2.addImage(spiderImg);
  spider2.scale = 0.1;
  spider2.setCollider("circle",0,0,200);
  //    spider2.debug = true;

  
  spiders.add(spider);
  spiders.add(spider2);
  spiders.add(spider3);
  spiders.add(spider4);
  
  egg = createSprite(width-70,height/2);
  egg.addImage(eggImg);
  egg.scale = 0.1;
  egg.setCollider("circle",40,0,200);
  //egg.debug = true;
  
  edges = createEdgeSprites();

}

function draw(){
    if(state === 0){
        background('#ffb6c1');
        screen1();
  
    }
    else if(state === 1){
        background(bgImg);
        play();
     drawSprites();
    }
  if(state === 2){
    background("red");
    textSize(50);
    fill('black');
    text("Game Over", width/2, height/2);
  }
    if(state === 3){
      background("green");
    textSize(50);
    fill("black");
    text("You Win", width/2,height/2);
    }
  
 

    //if keyDown then velocityX is > 0 and if keyWentUp then velocityX = 0
    //if keyDown then rabbit.x increases a little 
}

function screen1(){
    textSize(20)
    fill("purple")
    text("Tommorow is the easter egg festival but the easter \negg bunny needs your help to find his easter egg.\nHe needs to cross some creepy spiders and follow \nthe clues to get to the easter egg.\n (you can control him by pressing right key) \n All the best! \npress enter to continue. ", 60, 50)
}

function keyPressed(){
    if(keyCode === 13){
        //state+=1;
      if(state === 0)
        state = 1;
    }
}

function play(){
    //display the rabbit 
    if(keyDown(RIGHT_ARROW)){
        rabbit.velocityX = 7;
    }

    if(keyWentUp(RIGHT_ARROW)){
        rabbit.velocityX = 0;
    }
  //console.log("play");
 
  if(spider.isTouching(edges[2])){
    spider.velocityY = 8;
  }
  if(spider.isTouching(edges[3])){
    spider.velocityY = -8;
  }
  
  line(spider.x,0,spider.x,spider.y);
  
  
  if(spider4.isTouching(edges[2])){
    spider4.velocityY = 7;
  }
  if(spider4.isTouching(edges[3])){
    spider4.velocityY = -7;
  }
  
  line(spider4.x,0,spider4.x,spider4.y);
  
  
   if(spider3.isTouching(edges[2])){
    spider3.velocityY = 9;
  }
  if(spider3.isTouching(edges[3])){
    spider3.velocityY = -9;
  }
  line(spider3.x,0,spider3.x,spider3.y);
  
  
  if(spider2.isTouching(edges[2])){
    spider2.velocityY = 10;
  }
  if(spider2.isTouching(edges[3])){
    spider2.velocityY = -10;
  }
  
  line(spider2.x,0,spider2.x,spider2.y);
  
  if(rabbit.isTouching(spiders)){
    lives = lives - 1;
  }
  fill("black");
  textSize(20);
  text("lives: " + lives,20,20);
  
  if(lives === 0){
    state = 2;
  }
  
  if(rabbit.isTouching(egg)){
    state = 3;
  }
  
  
}







