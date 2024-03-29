'use strict';

//////////////////////////////////////// Scoping in Practice

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = 'true';
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Munna';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Najir';
calcAge(1997);
// console.log(age);
// printAge();

//////////////////////////////////////// Hoisting in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Najir';
let job = 'Student';
const year = 1997;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//////////////////////////////////////// Hoisting in Practice
console.log(this);

const calcAge = function (birthYear) {
  // console.log(2023 - birthYear);
  // console.log(this);
};
calcAge(1997);

const calcAgeArrow = birthYear => {
  // console.log(2023 - birthYear);
  // console.log(this);
};
calcAgeArrow(2000);

const najir = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
// najir.calcAge();

const romi = {
  year: 2017,
};
romi.calcAge = najir.calcAge;
romi.calcAge();

const f = najir.calcAge;
f();

//////////////////////////////////////// Regular Functions vs Arrow Functions

// var firstName = 'Romi';

const najir2 = {
  firstName: 'Najir',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
najir2.greet();
najir2.calcAge();

// arguments keyword
const add2Expr = function (a, b) {
  console.log(arguments);
  return a + b;
};

add2Expr(2, 5);
add2Expr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};
addArrow(2, 5, 8);

//////////////////////////////////////// Primitives vs Objects (Primitive vs Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Najir',
  age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friend: ', friend);
console.log('Me: ', me);

//////////////////////////////////////// Primitives vs Objects in Practice

// Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jani = {
  firstName: 'Jani',
  lastName: 'Williams',
  age: 27,
};
const marriedJani = jani;
marriedJani.lastName = 'Davis';
console.log('Before marraige: ', jani);
console.log('After marraige: ', marriedJani);
// marriedJani = {};

// Copying objects
const jani2 = {
  firstName: 'Jani',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const janiCopy = Object.assign({}, jani2);
janiCopy.lastName = 'Davis';

janiCopy.family.push('Mary');
janiCopy.family.push('John');

console.log('Before marraige: ', jani2);
console.log('After marraige: ', janiCopy);
