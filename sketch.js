function setup() {
  createCanvas(800,400);
  A = createSprite(400, 200, 50, 50);
  A.shapeColor ="purple"

  B = createSprite (200,200,50,50)
  B.shapeColor = "purple"

  C = createSprite (500,200,50,50)
  C.shapeColor = "purple"
}

function draw() {
  background(255,255,255);  

  A.x = mouseX
  A.y = mouseY

  if (touch(A,C)){
    A.shapeColor = "black"
    C.shapeColor = "black"
  }
  else {
    A.shapeColor = "purple"
    C.shapeColor = "purple"
  }

  drawSprites();
}
