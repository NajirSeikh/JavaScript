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
