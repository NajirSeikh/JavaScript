/* **************Code by Najir Seikh - 21/05/2023************** */
'use strict';
/* **************Default Parameters - Dated-21.05.2023************** */

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
