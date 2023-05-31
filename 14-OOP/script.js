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
*/
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
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const imran = new PersonCl('Imran', 1997);
console.log(imran);
imran.calcAge();

console.log(imran.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
imran.greet();

// Note:-
// 1. Classes is NOT hoisted
// 2. Class are first-class citizen
// 3. Classes are executed in strict mode
*/
/* **************Setters and Getters - 30/05/2023************** */

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
