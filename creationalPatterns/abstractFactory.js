
class Car {
  constructor (doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar (type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'V6', 'red');
      case 'honda':
        return new Car(2, 'V8', 'red');
    }
  }
}

class SUV {
  constructor (doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SUVFactory {
  createCar (type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'V6', 'red');
      case 'honda':
        return new Car(2, 'V8', 'red');
    }
  }
}
