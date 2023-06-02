/* **************Code by Najir Seikh - 29/05/2023************** */
'use strict';

/* **************Constructor Functions and the new Operator - 29/05/2023************** */
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  // this.fName = firstName;
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   return 2027 - this.birthYear;
  // };
};

const najir = new Person('Najir', 1997);
console.log(najir);
console.log(najir.birthYear);
// console.log(najir.calcAge());

// 1. New {} is created.
// 2. function is called, this => {}
// 3. {} linked to prototype
// 4. function automatically return {}

const romi = new Person('Romio', 1996);
const maha = new Person('Mahatab', 1997);
console.log(romi, maha);

console.log(najir instanceof Person);
const jay = {};
console.log(jay instanceof Person);

Person.hey = function () {
  console.log('Hey there 🧤');
  console.log(this);
};
Person.hey();

/* **************Prototypes - 29/05/2023************** */
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

najir.calcAge();
romi.calcAge();

console.log(najir.__proto__);
console.log(najir.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(najir));
console.log(Person.prototype.isPrototypeOf(maha));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(najir.species, romi.species);

console.log(najir.hasOwnProperty('firstName'));
console.log(najir.hasOwnProperty('species'));
*/
/* **************Prototypal Inheritance on Built-In Objects - 29/05/2023************** */
/*
console.log(najir.__proto__);
console.log(najir.__proto__.__proto__);
console.log(najir.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 2, 9, 4, 2, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  // return this; // return the array
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
/* **************Coding Challenge #1 - 29/05/2023************** */
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make; // car name
  this.speed = speed; // km/h
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

console.log(bmw);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

console.log(mercedes);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.brake();
*/
/* **************ES6 Classes - 30/05/2023************** */
/*
// Class expression
// const PersonCl = class{}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  /* **************Static Methods - 2/06/2023************** */
/*
  // Static method
  static hey() {
    console.log('Hey there 🧤');
    console.log(this);
  }
}

const imran = new PersonCl('Imran Hossain', 1997);
console.log(imran);
imran.calcAge();
console.log(imran.age);

console.log(imran.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
imran.greet();

// Note:-
// 1. Classes is NOT hoisted
// 2. Class are first-class citizen
// 3. Classes are executed in strict mode

const suman = new PersonCl('Suman Reddy', 1996);

PersonCl.hey();

/* **************Setters and Getters - 1/06/2023************** */
/*
const account = {
  owner: 'najir',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/
/* **************Object.create - 2/06/2023************** */
/*
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const maha = Object.create(PersonProto);
console.log(maha);
maha.name = 'Mahatab';
maha.birthYear = 1997;
maha.calcAge();

console.log(maha.__proto__);
console.log(maha.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1990);
console.log(sarah);
sarah.calcAge();
*/
/* **************Coding Challenge #2 - 2/06/2023************** */
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
// 1.
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // 2.
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3.
  set speedUS(spd) {
    this.speed = spd * 1.6;
  }

  // 4.
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const ford = new CarCl('Ford', 100);

console.log(ford);
console.log(`${ford.speed} km/h = ${ford.speedUS} mi/h`);

ford.accelerate();
ford.break();
ford.accelerate();

ford.speedUS = 50;

console.log(ford);
console.log(`${ford.speed} km/h = ${ford.speedUS} mi/h`);

ford.accelerate();
ford.break();

*/
/* **************Inheritance Between 'Classes': Constructor Functions - 2/06/2023************** */
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am study ${this.course}`);
};

const nina = new Student('Nina Dave', 2000, 'CSE');
console.log(nina);
nina.introduce();
nina.calcAge();

console.log(nina.__proto__);
console.log(nina.__proto__.__proto__);

console.log(nina instanceof Student);
console.log(nina instanceof Person);
console.log(nina instanceof Object);

console.log(Student.prototype.constructor);
console.dir(Student.prototype.constructor);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
console.dir(Student.prototype.constructor);

*/
/* **************Coding Challenge #3 - 2/06/2023************** */
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
// 1.
const Car = function (make, speed) {
  this.make = make; // car name
  this.speed = speed; // km/h
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

/* **************Inheritance Between 'Classes' - 2/06/2023************** */

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(`${this.fullName} is ${2023 - this.birthYear} years old`);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 🧤');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I am study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2023 - this.birthYear} years old, but as a student I feel like ${
        2023 - this.birthYear + 10
      }`
    );
  }
}

const man = new PersonCl('Man Singh', 2002);
man.calcAge();

const manna = new StudentCl('Manna Dey', 2000, 'CSE');
console.log(manna);
manna.introduce();
manna.calcAge();
