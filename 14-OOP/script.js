/* **************Code by Najir Seikh - 29/05/2023************** */
'use strict';

/* **************Constructor Functions and the new Operator - 29/05/2023************** */

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

/* **************Prototypes - 29/05/2023************** */
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
