var a, b, d, e, f, g

function setup() {
  createCanvas(1200, 800);
  a = createSprite(400, 210, 50, 50);
b = createSprite(200, 200, 50, 60)
c = random(1, 255);
d= createSprite(400, 100, 50, 80)
e = createSprite(400, 800, 80, 30)
 a.shapeColor = "red"
 b.shapeColor= "red"
d.velocityY = 4
e.velocityY = -3
f = createSprite(130, 330, 40, 60);
g = createSprite(500, 360, 30, 40);
}

function draw() {
  background(c, c + 20, c + 25);  
a.x = mouseX;
a.y = mouseY;





if(touch(a, g)){
  a.shapeColor = "green"
  g.shapeColor = "yellow"
}
else{
  a.shapeColor = "red"
  g.shapeColor = "red"
}

if(d.height/2 + e.height/2 > d.y - e.y &&
  d.height/2 + e.height/2 > e.y - d.y)
  {
    d.velocityY = -4
    e.velocityY = 4
  }



console.log(a.width/2 + b.width/2)
console.log(b.x - a.x)


  drawSprites();
}

