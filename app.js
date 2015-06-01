// Create a plant that is an object.
// It starts out a seed.
// When you pour water onto it, the seed becomes a plant the first time it is watered and grows two inches every watering after.
// If you feed it plant food it grows one inch.
// If you feed it anti-freeze it dies.

var plant = {
  isSeed: true,
  height: 0,
  isAlive: true,
  hasFlower: false,
  };
function feed(obj, give, sun){
  if(give == "water" && obj.isSeed){
    obj.isSeed = false;
  }
   if(obj.isSeed === false){
    obj.height += 2;
  }
  if(give == "plant food"){
    obj.height++;
  }
  if(give === "anti-freeze"){
    obj.isAlive = false;
  }
  if(sun === "sun"){
    obj.hasFlower = true;
  }

  return obj;
}
var object = plant;
// object = feed(object,"water","sun");
// object = feed(object,"water","sun");
// object = feed(object,"water","sun");
// object = feed(object,"water","sun");
// object = feed(object,"water","sun");
// object = feed(object,"water","sun");
object = feed(object,"water");
object = feed(object,"water");
object = feed(object,"water");
object = feed(object,"water");
console.log(object);
