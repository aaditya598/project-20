
var car,wall
var speed,weigth



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(50,90)
  weigth=random(400,1500)
  
  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  car.shapeColor=(255)



  wall=createSprite(800,200,60,height/2)
  wall.shapeColor=(255)

}

function draw() {
  background(0);  
  drawSprites();
 if(wall.x-car.x<(car.width+wall.width)/2) 
 {
   car.velocityX=0;
   var deformation=0.5*weigth*speed*speed/22500;
   if(deformation>180)
   {
     car.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100)
   {
     car.shapeColor=color(230,230,0);
   }

   if(deformation<100)
   {
     car.shapeColor=color(0,255,0);
   }
 }
 
}






