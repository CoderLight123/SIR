// super power 10000000.0!!!! :P

// :D

var line1;
var line2;

var ground1, ground2, groundA;

var balloon1, balloon1a;
var balloon2, balloon2a;
var balloon3, balloon3a;
var balloon4, balloon4a;

var balloon1aa;
var balloon2bb;
var balloon3cc;
var balloon4dd;


var bow, bow1;
var arrow, arrow1001, arrow1;
var arrowABC, arrowCBA;

var ok, okok, okokok, okokokok, arrowG, arrowGG, arrowGGG, arrowGGGG, arrowGGGGG;

var score, game;

var boom, haha;

 
function preload(){
 //load your images here 
  boom = loadSound("Arrow+Swoosh+2.mp3");
  haha = loadSound("Balloon popping _ burst _ blast (3D77618-MSB).mp3");
  
  groundA = loadImage("background0.png");
  bow1 = loadImage("bow0.png");
  arrow1 = loadImage("arrow0.png");
  balloon1a = loadImage("blue_balloon0.png");
  balloon2a = loadImage("red_balloon0.png");
  balloon3a = loadImage("green_balloon0.png")
  balloon4a = loadImage("pink_balloon0.png")
}

function setup() {
  createCanvas(600, 600);
  
  score = 0;
  game = "ok";
  
  ok = new Group();
  okok = new Group();
  okokok = new Group();
  okokokok = new Group();
  arrowG = new Group();
  arrowGG = new Group();
  arrowGGG = new Group();
  arrowGGGG = new Group();
  arrowGGGGG = new Group();
    
  line1 = createSprite(300,0,600,3);
  line2 = createSprite(300,600,600,3);
  
  ground1 = createSprite(300,300,10,10);
  ground1.addAnimation("ground1", groundA);
  ground1.scale = 1.5;
  
  ground2 = createSprite(900,300,10,10);
  ground2.addAnimation("ground2", groundA);
  ground2.scale = 1.5;
  
  bow = createSprite(530,300,10,10);
  bow.addAnimation("woow", bow1);
  bow.scale = 1;
  
  
}

function draw() {
  background(220);
  //add code here
  
  ground1.velocityX = -6;
  ground2.velocityX = -6;
  
  if(keyWentDown("space")){
    
    
    var woow = Math.round(random(1,5));
    
    if (woow == 1) {
    var arrow = lol();
    arrow.addImage(arrow1);
    arrow.y = bow.y;
      
    } else if (woow == 2) {
    var arrow1001 = lool();
    arrow1001.addImage(arrow1);
    arrow1001.y = bow.y;
      
    } else if (woow == 3) {
    var arrow1111 = loool();
    arrow1111.addImage(arrow1);
    arrow1111.y = bow.y;
      
    } else if (woow == 4) {
    var arrow2222 = looool();
    arrow2222.addImage(arrow1);
    arrow2222.y = bow.y;
      
    } else if (woow == 5) {
    var arrow3333 = loooool();
    arrow3333.addImage(arrow1);
    arrow3333.y = bow.y;
    } 
  
    boom.play();
    boom.setVolume(0.2);
  }
  
  if(keyWentDown("delete")){
    
    score = 0;
  }
  
  if(keyWentDown("E")){
    
    game = "easy";
  }
  
  if(keyWentDown("H")){
    
    game = "hard";
  }
    
  bow.y = World.mouseY;
  bow.collide(line1);
  bow.collide(line2);
  
  if(game === "easy"){
    
    var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      balloonA();
    } else if (select_balloon == 2) {
      balloonB();
    } else if (select_balloon == 3) {
      balloonC();
    } else {
      balloonD();
    }
  }
  }
  
  if(game === "hard"){
    
    var select_balloonABC = Math.round(random(1,4));
  
  if (World.frameCount % 50 == 0) {
    if (select_balloonABC == 1) {
      balloon11();
    } else if (select_balloonABC == 2) {
      balloon22();
    } else if (select_balloonABC == 3) {
      balloon33();
    } else {
      balloon44();
    }
  }
  }
  
  if(keyWentDown("delete")){
    game = "ok"
  }
  
  
  
  
  if(arrowG.isTouching(ok) && (game === "easy")){
    ok.destroyEach();
    arrowG.destroyEach();
    score = score + 5;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowG.isTouching(okok) && (game === "easy")){
    okok.destroyEach();
    arrowG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowG.isTouching(okokok) && (game === "easy")){
    okokok.destroyEach();
    arrowG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowG.isTouching(okokokok) && (game === "easy")){
    okokokok.destroyEach();
    arrowG.destroyEach();
    score = score + 3;
    haha.play();
    haha.setVolume(0.2);
        }    
          
  
  if(arrowG.isTouching(ok) && (game === "hard")){
    ok.destroyEach();
    arrowG.destroyEach();
    score = score + 10;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowG.isTouching(okok) && (game === "hard")){
    okok.destroyEach();
    arrowG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowG.isTouching(okokok) && (game === "hard")){
    okokok.destroyEach();
    arrowG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowG.isTouching(okokokok) && (game === "hard")){
    okokokok.destroyEach();
    arrowG.destroyEach();
    score = score + 6;
    haha.play();
    haha.setVolume(0.2);
        }
  
  // loool
  
  if(arrowGG.isTouching(ok) && (game === "easy")){
    ok.destroyEach();
    arrowGG.destroyEach();
    score = score + 5;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGG.isTouching(okok) && (game === "easy")){
    okok.destroyEach();
    arrowGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGG.isTouching(okokok) && (game === "easy")){
    okokok.destroyEach();
    arrowGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGG.isTouching(okokokok) && (game === "easy")){
    okokokok.destroyEach();
    arrowGG.destroyEach();
    score = score + 3;
    haha.play();
    haha.setVolume(0.2);
        }    
          
  
  if(arrowGG.isTouching(ok) && (game === "hard")){
    ok.destroyEach();
    arrowGG.destroyEach();
    score = score + 10;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGG.isTouching(okok) && (game === "hard")){
    okok.destroyEach();
    arrowGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGG.isTouching(okokok) && (game === "hard")){
    okokok.destroyEach();
    arrowGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGG.isTouching(okokokok) && (game === "hard")){
    okokokok.destroyEach();
    arrowGG.destroyEach();
    score = score + 6;
    haha.play();
    haha.setVolume(0.2);
        }
  
  // loool
  
  if(arrowGGG.isTouching(ok) && (game === "easy")){
    ok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 5;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGGG.isTouching(okok) && (game === "easy")){
    okok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGGG.isTouching(okokok) && (game === "easy")){
    okokok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGGG.isTouching(okokokok) && (game === "easy")){
    okokokok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 3;
    haha.play();
    haha.setVolume(0.2);
        }    
          
  
  if(arrowGGG.isTouching(ok) && (game === "hard")){
    ok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 10;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGGG.isTouching(okok) && (game === "hard")){
    okok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGGG.isTouching(okokok) && (game === "hard")){
    okokok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGGG.isTouching(okokokok) && (game === "hard")){
    okokokok.destroyEach();
    arrowGGG.destroyEach();
    score = score + 6;
    haha.play();
    haha.setVolume(0.2);
        }
  
  // loool
  
  if(arrowGGGG.isTouching(ok) && (game === "easy")){
    ok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 5;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGGGG.isTouching(okok) && (game === "easy")){
    okok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGGGG.isTouching(okokok) && (game === "easy")){
    okokok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGGGG.isTouching(okokokok) && (game === "easy")){
    okokokok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 3;
    haha.play();
    haha.setVolume(0.2);
        }    
          
  
  if(arrowGGGG.isTouching(ok) && (game === "hard")){
    ok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 10;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGGGG.isTouching(okok) && (game === "hard")){
    okok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGGGG.isTouching(okokok) && (game === "hard")){
    okokok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGGGG.isTouching(okokokok) && (game === "hard")){
    okokokok.destroyEach();
    arrowGGGG.destroyEach();
    score = score + 6;
    haha.play();
    haha.setVolume(0.2);
        }
  
  // loool
  
  if(arrowGGGGG.isTouching(ok) && (game === "easy")){
    ok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 5;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGGGGG.isTouching(okok) && (game === "easy")){
    okok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGGGGG.isTouching(okokok) && (game === "easy")){
    okokok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 2;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGGGGG.isTouching(okokokok) && (game === "easy")){
    okokokok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 3;
    haha.play();
    haha.setVolume(0.2);
        }    
          
  
  if(arrowGGGGG.isTouching(ok) && (game === "hard")){
    ok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 10;
    haha.play();
    haha.setVolume(0.2);
  }
    
    if(arrowGGGGG.isTouching(okok) && (game === "hard")){
    okok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
    }
      
      if(arrowGGGGG.isTouching(okokok) && (game === "hard")){
    okokok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 4;
    haha.play();
    haha.setVolume(0.2);
      }
        
        if(arrowGGGGG.isTouching(okokokok) && (game === "hard")){
    okokokok.destroyEach();
    arrowGGGGG.destroyEach();
    score = score + 6;
    haha.play();
    haha.setVolume(0.2);
        }
  
  
  
  
  if(ground1.x === -300){
    
    ground1.x = 900;
  }
  
  if(ground2.x === -300){
    
    ground2.x = 900;
  }
  
  
  drawSprites();
  
  fill("black");
  textSize(20);
  text("score = " + score,470,30);
  textSize(10);
  text("press 'E' to make the game easy",120,20);
  text("press 'H' to make the game hard",120,35);
}

function balloonA() {
  var balloon1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon1.addImage(balloon1a);
  balloon1.velocityX = 3;
  balloon1.lifetime = 160;
  balloon1.scale = 0.1
  ok.add(balloon1);
}

function balloonB() {
  var balloon2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon2.addImage(balloon2a);
  balloon2.velocityX = 3;
  balloon2.lifetime = 160;
  balloon2.scale = 0.1
  okok.add(balloon2);
}

function balloonC() {
  var balloon3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon3.addImage(balloon3a);
  balloon3.velocityX = 3;
  balloon3.lifetime = 160;
  balloon3.scale = 0.1
  okokok.add(balloon3);
}

function balloonD() {
  var balloon4 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon4.addImage(balloon4a);
  balloon4.velocityX = 3;
  balloon4.lifetime = 160;
  balloon4.scale = 1.1;
  okokokok.add(balloon4);
}

function balloon11() {
  var balloon1aa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon1aa.addImage(balloon1a);
  balloon1aa.velocityX = 7;
  balloon1aa.lifetime = 80;
  balloon1aa.scale = 0.1
  ok.add(balloon1aa);
}

function balloon22() {
  var balloon2bb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon2bb.addImage(balloon2a);
  balloon2bb.velocityX = 7;
  balloon2bb.lifetime = 80;
  balloon2bb.scale = 0.1
  okok.add(balloon2bb);
}

function balloon33() {
  var balloon3cc = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon3cc.addImage(balloon3a);
  balloon3cc.velocityX = 7;
  balloon3cc.lifetime = 80;
  balloon3cc.scale = 0.1
  okokok.add(balloon3cc);
}

function balloon44() {
  var balloon4dd = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloon4dd.addImage(balloon4a);
  balloon4dd.velocityX = 7;
  balloon4dd.lifetime = 80;
  balloon4dd.scale = 1.1;
  okokokok.add(balloon4dd);
}


function lol() {
  arrowABC = createSprite(480, 100, 5, 10);
  arrowABC.velocityX = -6;
  arrowABC.scale = 0.3;
  arrowABC.lifetime = 160;
  arrowG.add(arrowABC);
  return arrowABC;
}
function lool() {
  arrowCBA = createSprite(480, 100, 5, 10);
  arrowCBA.velocityX = -6;
  arrowCBA.scale = 0.3;
  arrowCBA.lifetime = 160;
  arrowGG.add(arrowCBA);
  return arrowCBA;
}
function loool() {
  arrowXYZ = createSprite(480, 100, 5, 10);
  arrowXYZ.velocityX = -6;
  arrowXYZ.scale = 0.3;
  arrowXYZ.lifetime = 160;
  arrowGGG.add(arrowXYZ);
  return arrowXYZ;
}
function looool() {
  arrowZYX = createSprite(480, 100, 5, 10);
  arrowZYX.velocityX = -6;
  arrowZYX.scale = 0.3;
  arrowZYX.lifetime = 160;
  arrowGGGG.add(arrowZYX);
  return arrowZYX;
}
function loooool() {
  arrowOOO = createSprite(480, 100, 5, 10);
  arrowOOO.velocityX = -6;
  arrowOOO.scale = 0.3;
  arrowOOO.lifetime = 160;
  arrowGGGGG.add(arrowOOO);
  return arrowOOO;
}





