var dog, happyDog, database, foodS, foodStock

function preload()
{
  dogImage = loadImage("images/dogimg.png")
  happyDogImage = loadImage("images/happyDog.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  Dog = createSprite(250, 300, 150, 100)
  Dog.addImage(dogImage)
  Dog.scale = 0.15
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  textSize(20)
}


function draw() {  
background("White")
if(keyWentDown (UP_ARROW)) {
  writeStock(foodS)
  Dog.addImage(happyDogImage)
}
  drawSprites();  
  text("Food Remaning " + foodS, 170, 200)
textSize(13)
text("Press Up Arrow to feed the dog", 130, 10, 300, 20)

}

function readStock(data) {
  foodS = data.val()
}

function writeStock(x) {
  if(x <= 0) {
    x = 0
  }
else {
  x = x - 1
}
database.ref('/').update({Food: x})
}

