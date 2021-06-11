var iss, spaceCraft, in1;
var bg, space1, space2, space3, space4, issImg;
var hasDocked = false;

function preload(){
  //preload the files
  bg = loadImage("Sprites/spacebg.jpg");
  issImg = loadImage("Sprites/iss.png");
  space1 = loadImage("Sprites/spacecraft1.png");
  space2 = loadImage("Sprites/spacecraft2.png");
  space3 = loadImage("Sprites/spacecraft3.png");
  space4 = loadImage("Sprites/spacecraft4.png");
}

function setup(){
  //creat6e the canvas
  createCanvas(1275, 603);

  //create the station
  iss = createSprite(500, 275);
  iss.addImage(issImg);

  //create the space ship
  spaceCraft = createSprite(500, 460);
  spaceCraft.addImage(space1);
  spaceCraft.scale = 0.15;
}

function draw(){
  //create the background
  background(bg);

  //add the movement to the space craft
  spaceCraft.addImage(space1);

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);

    if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y -2;
    }

    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(space3);
      spaceCraft.x -= 2;
    }

    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(space4);
      spaceCraft.x += 2;
    }

    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(space2);
    }
  }

  if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(20);
    fill("white");
    text("!!!Docked Succesfully!!!", 900, 300);
  }
  else{
    textSize(20);
    fill("white");
    text("###Not Docked###", 900, 300);
  }

  //makes the sprites visible
  drawSprites();
}