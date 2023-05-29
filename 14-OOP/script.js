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
