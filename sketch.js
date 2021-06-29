
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var pc, npc1, npc2, npc3, npc4, i, devili, pci;
var bullet, npcb, x, bulleti2;
var score1=0, shoots=0;

function preload(){

	devili=loadImage("devil-removebg-preview.png")
	
	pci=loadImage("destroyer-removebg-preview.png")

    bulleti=loadImage("images/image-removebg-preview.png")

	bulleti2=loadImage("images/image__1_-removebg-preview.png")
}

function setup() {
createCanvas(600, 600);

	pc=createSprite(width/2-20,height-60,40,15)
	pc.addImage(pci)
	pc.scale=0.3;

	//	mode("CENTER")

 //	engine = Engine.create();
 //	world = engine.world;
 //Create the Bodies Here.
 //Engine.run(engine);
  


	for(i=48; i<570; i=i+80){

	npc1=createSprite(i, 65, 35, 35)
	npc1.addImage(devili)
	npc1.scale=0.14;

	npc2=createSprite(i, 145, 35, 35)
	npc2.addImage(devili)
	npc2.scale=0.14;
	
	npc3=createSprite(i, 225, 35, 35)
	npc3.addImage(devili)
	npc3.scale=0.14;
	
	npc4=createSprite(i, 305, 35, 35)
	npc4.addImage(devili)
	npc4.scale=0.14;

 
	}

}


function draw() {
  rectMode(CENTER);
  background(rgb(190,190,190));
 
  textSize(27)
  fill("RED")
  text("SCORE: "+score1, 40, 28)

  textSize(27)
  fill("black")
  text("LIVES: ", 370, 28)

  if(keyDown("left")){
	  pc.x=pc.x-5;
  }

  if(keyDown("right")){
	pc.x=pc.x+5;
}

if(frameCount%25===0) {

	shoots=shoots+1;
}

if(shoots!==0){

if(keyDown("space")){

bullet=createSprite(pc.x, pc.y, 5, 15)
//bullet.shapeColor="BLACK"
bullet.velocityY=-8
bullet.addImage(bulleti)
bullet.scale=0.13

shoots=shoots-shoots;
}
	}
incomingBullets();
spawnDemons();


  drawSprites();
 
}

function incomingBullets(){

	if(frameCount%35===0){

 npcb=createSprite(x,npc4.y,5,15)
npcb.velocityY=8
npcb.addImage(bulleti2)
npcb.scale=0.1

	}

	var rand=Math.round(random(1,7));

	switch(rand){
  
		case 1: x=48;
        break;

		case 2: x=128;
        break;

		case 3: x=208;
        break
	
		case 4: x=288;
        break;
	
		case 5: x=368;
        break;
	
		case 6: x=448;
        break;
	
		case 7: x=528;
        break;

default: break;
	}
}

function spawnDemons(){

if(frameCount%60===0){

npc1.y=npc1.y+30;

}


}