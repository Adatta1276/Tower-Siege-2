//loading all the matter functions
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

//variables
var po_image,ground1;
var game_canvas;
var stand1,stand2;
//blocks
var gray1,green1,green2,green3,pink1,pink2,pink3,pink4,pink5,blue1,blue2,blue3,blue4,blue5,blue6,blue7,white1,red1,red2,red3,red4,red5,purple1,purple2,purple3,lime1,lime2,lime3,lime4,lime5;
var shooter,slingy1,slingy2;
//var gs = "play";
var score = 0;


/*var gim;*/

//preloading images
function preload() 
{
   
}

//the setup function
function setup() 
{
  //creating the 1400x600 px canvas
  createCanvas(1400,600);
  //creating the matter engine
  engine = Engine.create();
  //creating the world
    world = engine.world;
    //defining all the variables/objects
  ground1 = new Ground(700,593,1400,20);
  stand1 = new Ground(652,416,300,10);
  stand2 = new Ground(1067,320,300,10);
      gray1 = new Block(647,254,30,45,"gray");
      green1 = new Block(647,299,30,45,rgb(43,252,255));
      green2 = new Block(617,299,30,45,rgb(43,252,255));
      green3 = new Block(677,299,30,45,rgb(43,252,255));
      pink1 = new Block(677,344,30,45,"DeepPink");
      pink2 = new Block(617,344,30,45,"DeepPink");
      pink3 = new Block(647,344,30,45,"DeepPink");
      pink4 = new Block(587,344,30,45,"DeepPink");
      pink5 = new Block(707,344,30,45,"DeepPink");
      blue1 = new Block(647,389,30,45,"blue"); 
      blue2 = new Block(617,389,30,45,"blue");
      blue3 = new Block(677,389,30,45,"blue");
      blue4 = new Block(587,389,30,45,"blue");
      blue5 = new Block(707,389,30,45,"blue");
      blue6 = new Block(557,389,30,45,"blue");
      blue7 = new Block(737,389,30,45,"blue");
      white1 = new Block(1062,158,30,45,"white");
      red1 = new Block(1062,248,30,45,"red");
      red2 = new Block(1032,248,30,45,"red");
      red3 = new Block(1092,248,30,45,"red");
      red4 = new Block(1002,248,30,45,"red");
      red5 = new Block(1122,248,30,45,"red");
      purple1 = new Block(1062,203,30,45,"purple");
      purple2 = new Block(1032,203,30,45,"purple");
      purple3 = new Block(1092,203,30,45,"purple");
      lime1 = new Block(1062,293,30,45,"Lime");
      lime2 = new Block(1032,293,30,45,"Lime");
      lime3 = new Block(1092,293,30,45,"Lime");
      lime4 = new Block(1002,293,30,45,"Lime");
      lime5 = new Block(1122,293,30,45,"Lime");
      lime6 = new Block(972,293,30,45,"Lime");
      lime7 = new Block(1152,293,30,45,"Lime");
  shooter = new Polygon1(306,332,30);
  slingy1 = new SlingShot(shooter.body,{x:172, y:230});

  
//giving the command to run the engine
  Engine.run(engine);


}

//drawing/displaying all the sprites/matters
function draw() 
{
    
    
      background(0,32);
      Engine.update(engine);

      fill("red");
      textSize(15);
      text("x : "+mouseX,30,560);
      text("y : "+mouseY,95,560);
      // ellipse(mouseX,mouseY,30);
      textFont("Comic Sans MS");
      fill("white");
      text("Drag the yellow polygon with your mouse and release the mouse button to throw down the blocks !!",390,39);
      
      score = score+1/40;
      text("score : "+Math.round(score),1250,46)
      gray1.display();
      ground1.display();
      stand1.display();
      stand2.display();
      textSize(20);
      textFont("Lucida Sans Unicode");
      fill("pink")
text("TOWER - SIEGE_1 BY A.D",590,89 );
      green1.display();
      green2.display();
      green3.display();
      pink1.display();
      pink2.display();
      pink3.display();
      pink4.display();
      pink5.display();
      blue1.display();
      blue2.display();
      blue3.display();
      blue4.display();
      blue5.display();
      blue6.display();
      blue7.display();
      white1.display();
      red1.display();
      red2.display();
      red3.display();
      red4.display();
      red5.display();
      purple1.display();
      purple2.display();
      purple3.display();
      lime1.display();
      lime2.display();
      lime3.display();
      lime4.display();
      lime5.display();
      lime6.display();
      lime7.display();
      shooter.display();
      slingy1.display();
      //slingy2.display();

        Detect_Collision(shooter,gray1);
        Detect_Collision(shooter,green1);
        Detect_Collision(shooter,green2);
        Detect_Collision(shooter,green3);
        Detect_Collision(shooter,pink1);
        Detect_Collision(shooter,pink2);
        Detect_Collision(shooter,pink3);
        Detect_Collision(shooter,pink4);
        Detect_Collision(shooter,pink5);
        Detect_Collision(shooter,blue1);
        Detect_Collision(shooter,blue2);
        Detect_Collision(shooter,blue3);
        Detect_Collision(shooter,blue4);
        Detect_Collision(shooter,blue5);
        Detect_Collision(shooter,blue6);
        Detect_Collision(shooter,blue7);
        Detect_Collision(shooter,white1);
        Detect_Collision(shooter,purple1);
        Detect_Collision(shooter,purple2);
        Detect_Collision(shooter,purple3);
        Detect_Collision(shooter,red1);
        Detect_Collision(shooter,red2);
        Detect_Collision(shooter,red3);
        Detect_Collision(shooter,red4);
        Detect_Collision(shooter,red5);
        Detect_Collision(shooter,lime1);
        Detect_Collision(shooter,lime2);
        Detect_Collision(shooter,lime3);
        Detect_Collision(shooter,lime4);
        Detect_Collision(shooter,lime5);
        Detect_Collision(shooter,lime6);
        Detect_Collision(shooter,lime7);

        
 
if(keyCode === 32) {
  Matter.Body.setPosition(shooter.body,{x:306,y:332});
  slingy2 = new SlingShot(shooter.body,{x:172,y:228});
  slingy2.display();
  slingy2.fly();
}
console.log(shooter.body.position.y)
}

function mouseDragged() 
{
    Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
      slingy1.fly();
     // slingy2.fly();
}

function Detect_Collision(shooter, gray1) 
{
      var polygon_position = shooter.body.position;
      var block_position = gray1.body.position;

      var distance1 = dist(polygon_position.x,polygon_position.y,block_position.x,block_position.y)

      if(distance1<=gray1.width+shooter.r) 
      {
        Matter.Body.setStatic(gray1.body,false);
      }
  
}
































































































