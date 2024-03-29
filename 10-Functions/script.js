/* **************Code by Najir Seikh - 21/05/2023************** */
'use strict';
/* **************Default Parameters - Dated-21.05.2023************** */
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// To skip a parameter, set 'undefined'
createBooking('LH123', undefined, 1000);
*/
/* **************How Passing Arguments Works-Value VS Reference - Dated-21.05.2023************** */
/*
const flight = 'LH234';
const najir = {
  name: 'Najir Seikh',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, najir);
// console.log(flight);
// console.log(najir);

//Is the same as doing...
// const flightNum = flight;
// const passenger = najir;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(najir);
checkIn(flight, najir);
*/
/* **************Functions Accepting Callback Functions - Dated-21.05.2023************** */
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Najir', 'Romi', 'Mahatab'].forEach(high5);
*/
/* **************Functions Returning Functions - Dated-21.05.2023************** */
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Najir');
greetHey('Romi');

greet('Hello')('Mahatab');

// Challenge - Using Arrow()
// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Arif');
*/
/* **************The call and apply Methods - Dated-21.05.2023************** */
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Najir Seikh');
lufthansa.book(635, 'John Romi');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 258, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 538, 'Imran Ali');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// Same as apply method
book.call(eurowings, ...flightData);
console.log(eurowings);

/* **************The bind Method - Dated-21.05.2023************** */
/*
// Bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
// console.log(eurowings);
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Najir Seikh');
bookEW23('Jani Mir');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Same task without Bind() and Arrow() methods
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
/* **************Coding Challenge #1 - Dated-21.05.2023************** */
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  // Task 1
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // Task 4
    this.displayResults();
    this.displayResults('string');
  },
  // Task 3
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// Task 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// My answer
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   // Task 1
//   registerNewAnswer() {
//     const ans = prompt(
//       'What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)'
//     );
//     // console.log(this);
//     ans <= 4 && (ans => 0) ? this.answers[ans]++ : alert('Wrong answer!');

//     // Task 4
//     this.displayResults();
//   },
//   // Task 3
//   displayResults() {
//     const type = prompt('Enter display type: (Array or String)').toLowerCase();
//     // console.log(type);
//     if (type === 'array') {
//       console.log(poll.answers);
//     } else if (type === 'string') {
//       console.log(
//         `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
//       );
//     } else {
//       alert('Wrong display type answer!');
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// console.log(poll);
*/
/* **************Immediately Invoked Function Expressions(IIFE) - Dated-21.05.2023************** */
/*
const runOnce = function () {
  console.log('This will never run again!');
};
runOnce();

//IIFE
(function () {
  console.log('This will ALSO never run again!');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again!'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/
/* **************Closures - Dated-21.05.2023************** */
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passecgers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

/*
Understanding Closures - 
👉 A function has access to the variable environment(VE) of the excution context(EC) in which it was created.
👉 Closure: VE attached to the function, exactly as it was at the time and place the function was created


CLOSURES SUMMARY 🥳

👉 A closure is the closed-over variable environment of the execution context in which a function was created, even after that
execution context is gone;
👉 A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The
function keeps a reference to its outer scope, which preserves the scope chain throughout time.
👉 A closure makes sure that a function doesn’t loose connection to variables that existed at the function’s birth place;
👉 A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were
present in the environment where the function was created.
 
☝ We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can’t even
access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.
*/
/* **************More Closures Examples - Dated-21.05.2023************** */
/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = () => {
  const b = 777;
  f = () => {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Re-assainning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

*/
/* **************Coding Challenge #2 - Dated-21.05.2023************** */
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  console.log('IIFE Function called');
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    console.log('Body clicked');
    header.style.color = 'blue';
  });
})();
