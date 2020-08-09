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
      case 'cx5':
        return new Car(4, 'V6', 'red');
      case 'santa fe':
        return new Car(2, 'V8', 'red');
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case 'car':
      return carFactory.createCar(model);
    case 'suv':
      return suvFactory.createCar(model);
  }
};

const cx5 = autoManufacturer('suv', 'cx5');
console.log(cx5);

function Employee (name) {
  this.name = name;

  this.say = function () {
    log.add('I am employee ' + name);
  };
}

function EmployeeFactory () {
  this.create = function (name) {
    return new Employee(name);
  };
}

function Vendor (name) {
  this.name = name;

  this.say = function () {
    log.add('I am vendor ' + name);
  };
}

function VendorFactory () {
  this.create = function (name) {
    return new Vendor(name);
  };
}

// log helper
var log = (function () {
  var log = '';

  return {
    add  : function (msg) {
      log += msg + '\n';
    },
    show : function () {
      console.log(log);
      log = '';
    },
  };
})();

function run () {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create('Joan DiSilva'));
  persons.push(employeeFactory.create("Tim O'Neill"));
  persons.push(vendorFactory.create('Gerald Watson'));
  persons.push(vendorFactory.create('Nicole McNight'));

  for (var i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
  }

  log.show();
}

run();
