var movingRect, fixedRect, ellipse1, ellipse2

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(300, 100, 80, 20);
  
  ellipse1=createSprite(500, 200, 80, 20);
  ellipse1.shapeColor="yellow";

  ellipse2=createSprite(400, 200, 80, 20);
  ellipse2.shapeColor="cyan";
  ellipse2.velocityY=5;

  
  movingRect=createSprite(400, 800, 50, 50);
  movingRect.velocityY=-5;

}


function draw() {
  background(255,255,255);  
  
  //so the rectangle moves with the mouse
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;
  */
  
  console.log(movingRect.x - fixedRect.x)

  // to detect the collision between object1
// if(collision(movingRect, ellipse1)) {
  //movingRect.shapeColor="red";
  //ellipse1.shapeColor="yellow";

// }
/* else{
  ellipse1.shapeColor="lime";
  movingRect.shapeColor="orange";
 }
*/
 bounceOff(ellipse2, movingRect);

 
 
  drawSprites();
}

// function definition
function collision (object1, object2) {
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 
    && object2.x - object1.x <= object1.width/2 + object2.width/2
    && object2.y - object1.y <= object1.height/2 + object2.height/2
    && object1.y - object2.y <= object1.height/2 + object2.height/2){

     
      return true;
  
    }
  
  
    else{
      return false;
      
    }

}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}
