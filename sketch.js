const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies 

var balls = [];
var plinkos = [];
var divisions = [];
var ball;
var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "start";

function setup() 
{
  createCanvas(800, 800);
  
  engine = Engine.create();
  world = engine.world;

  g = new Ground(0,800, 40,40);
  console.log(g);
  
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <= width; k+=80) 
   {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j+=50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j+=50) 
    {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j+=50) 
    {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j+=50) 
    {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() 
{
  background("purple");
  Engine.update(engine);
  ground.display();
  g.display();
  
  
  if(gameState === "start")
  {
            fill("pink");
            textSize(30);
            text("SCORE : "+score,10,25);

            fill("pink");
            textSize(25);
            text("50", 30 ,760);
            text("50", 750 ,760);
            text("100", 100 ,760);
            text("100", 660 ,760);
            text("150", 180 ,760);
            text("150", 580 ,760);
            text("200", 260 ,760);
            text("200", 500 ,760);
            text("250", 340 ,760);
            text("250", 420 ,760);







            
                    for (var i = 0; i < plinkos.length; i++) 
            
                plinkos[i].display();  
            
            
                    if ( count >= 10)
                    { 
                    gameState = "end"; 
                    }   
              
            if(ball)
            {
            ball.display();
            var a = ball.body.position.x;
            if(ball.body.position.y > 770)
            {
            if(a <= 80)
            {
                score = score + 50;
                ball = null;
            }
            if(a <= 160 && a >80)
            {
                score = score + 100;
                ball = null;

            }
            if(a <= 240 && a >160)
            {
                score = score + 150;
                ball = null;

            }
            if(a <= 320 && a >240)
            {
                score = score + 200;
                ball = null;

            }
            if(a <= 400 && a >320)
            {
                score = score + 250;
                ball = null;

            }
            if(a <= 480 && a >400)
            {
                score = score + 250;
                ball = null;

            }
            if(a <= 560 && a >480)
            {
                score = score + 200;
                ball = null;

            }
            if(a <= 640 && a >560)
            {
                score = score + 150;
                ball = null;

            }
            if(a <= 720 && a >640)
            {
                score = score + 100;
                ball = null;

            }
            if(a <= 800 && a >720)
            {
                score = score + 50;
                ball = null;
            }
        }
            }
            for (var k = 0; k < divisions.length; k++) 
            {
                divisions[k].display();
            }
                

  }
  
  
  
  if ( gameState === "end") 
  {  
    fill("red");  
    textSize(100);
    text("GameOver", 150, 250);
    
    fill("yellow");
    textSize(60);
    text("SCORE :" + score, 220 ,500);

    plinkos = [];
    balls = [];
    divisions = [];
  }
   
}


function mousePressed()
{
  if(gameState!=="end")
  {
     count++;
     ball=new Ball(mouseX, 10, 10); 
     console.log(ball)
     //ball.display()
  }   
}