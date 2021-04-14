const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var polygon,slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500,300,250,10);
    //level1
    block1 = new Box(410,275,40,40);
    block2 = new Box(450,275,40,40);
    block3 = new Box(490,275,40,40);
    block4 = new Box(530,275,40,40);
    block5 = new Box(570,275,40,40);
    //level2
    block6 = new Box(430,235,40,40);
    block7 = new Box(470,235,40,40);
    block8 = new Box(510,235,40,40);
    block9 = new Box(550,235,40,40);
    //level3
    block10 = new Box(450,195,40,40);
    block11 = new Box(490,195,40,40);
    block12 = new Box(530,195,40,40);
    //leve4
    block13 = new Box(470,155,40,40);
    block14 = new Box(510,155,40,40);
    //level5
    block15 = new Box(490,115,40,40);

//pyramid 2
stand2 = new Ground(850,200,200,10);
//level 1
block16 = new Box(780,175,40,40);
block17 = new Box(820,175,40,40);
block18 = new Box(860,175,40,40);
block19 = new Box(900,175,40,40);
//level2
block20 = new Box(800,135,40,40);
block21 = new Box(840,135,40,40);
block22 = new Box(880,135,40,40);
//level3
block23 = new Box(820,95,40,40);
block24 = new Box(860,95,40,40);
//level4
block25 =new Box(840,55,40,40);

polygon = new Polygon(100,200,40,40);

slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){  
    background(0);
    Engine.update(engine);
    ground.display();
    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    stand2.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon.display();
    slingshot.display(); 
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
