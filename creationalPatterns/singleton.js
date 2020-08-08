//Singleton - limites the number of instances to just one.
let instance = null;

class Car {
  constructor (doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, 'V6', 'red');
const honda = new Car(4, 'v8', 'white');

console.log(civic);
console.log(honda);
console.log(civic === honda);

var Singleton = (function () {
  var instance;

  function createInstance () {
    var object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance : function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function run () {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log('Same instance? ' + (instance1 === instance2));
}

run();
