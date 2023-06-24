/* **************Code by Najir Seikh - 20/06/2023************** */
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Najir Seikh',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-06-26T17:01:17.194Z',
    '2023-06-17T23:36:17.929Z',
    '2023-06-22T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-IN', // de-DE
  // locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Rimon Roy',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
/* **************Operations With Dates - 23/06/2023************** */
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
/* **************Internationalizing Dates(Intl) - 24/06/2023************** */
// Experimenting API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   // month: '2-digit',
//   // year: '2-digit',
//   year: 'numeric',
//   // weekday: 'short',
//   weekday: 'long',
// };

// const locale = navigator.language;
// // console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
// labelDate.textContent = new Intl.DateTimeFormat('en-IN', options).format(now);
// labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
// labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
// labelDate.textContent = new Intl.DateTimeFormat('pt-PT', options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      // month: '2-digit',
      // year: '2-digit',
      year: 'numeric',
      // weekday: 'short',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    /* **************Adding Dates to Bankist App - 21/06/2023************** */
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // // const hour = now.getHours()
    // // const min = now.getMinutes();
    // // labelDate.textContent = now;
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* **************Converting and Checking Numbers - 20/06/2023************** */
/*
console.log(23 === 23.0); //true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

// Conversion
console.log(Number('23')); //23
console.log(+'23'); //23

// Parsing
console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('e23')); //NaN

console.log(Number.parseInt('2.5rem  ')); //2
console.log(Number.parseFloat('  2.5rem')); //2.5

// console.log(parseInt('2.5rem')); //2

// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(30 / 0)); //false

// Checking if value is Number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(30 / 0)); //false

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
*/
/* **************Math and Rounding - 20/06/2023************** */
/*
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

console.log(Math.max(5, 12, 23, 8, 11, 2)); //23
console.log(Math.max(5, 12, '23', 8, 11, 2)); //23
console.log(Math.max(5, 12, '23px', 8, 11, 2)); //NaN

console.log(Math.min(5, 12, 23, 8, 11, 2)); //2

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  // Math.trunc(Math.random() * (max - min) + 1) + min;
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 30));

// Rounding integers
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

console.log(Math.trunc(23.3)); //23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.9)); //-24

// Rounding decimals
console.log((2.7).toFixed(0)); //3  - 'toFixed()' returns string value
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35 (its a number bcoz of '+')
*/
/* **************The Reminder Operator - 20/06/2023************** */
/*
console.log(5 % 2); //1
console.log(5 / 2); // 2.5, 5 = 2 * 2 +1

console.log(8 % 3); //2
console.log(8 / 3); //2.66666666666665, 8 = 2 * 3 + 2

console.log(6 % 2); //0
console.log(6 / 2); //3

console.log(7 % 2); //1
console.log(7 / 2); //3.5

// const isEven = n => n % 2 === 0;
const isEven = n => (n % 2 === 0 ? `${n} is Even` : `${n} is Odd`);
console.log(isEven(8)); //8 is Even
console.log(isEven(23)); //23 is Odd
console.log(isEven(514)); //514 is Even

// When click on Current balance
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orange';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

*/
/* **************Numeric Separators - 21/06/2023************** */
/*
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); //287460000000

const price = 345_99;
console.log(price); // 34500

const transferFee1 = 15_00;
console.log(transferFee1); //1500
const transferFee2 = 1_500;
console.log(transferFee2); //1500

const PI = 3.1415;
console.log(PI); //3.1415
// This is not allowed
// const PI = 3_.1415;
// const PI = 3.1415_;
// const PI = 3._1415;
// const PI = _3.1415;

console.log(Number('230_00')); //NaN
console.log(parseInt('230_00')); //230
*/
/* **************Working with BigInt - 21/06/2023************** */
/*
console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 + 1); //9007199254740992
console.log(2 ** 53 + 2); //9007199254740994
console.log(2 ** 53 + 3); //9007199254740996
console.log(2 ** 53 + 4); //9007199254740996
console.log(2 ** 53 + 0); //9007199254740992

console.log(484584896446468513216973135n); //484584896446468513216973135n
console.log(BigInt(4854976158)); //4854976158n

// Operations
console.log(10000n + 10000n); //20000n
console.log(13541442313651640564n * 1000n); //13541442313651640564000n
// console.log(Math.sqrt(16n)); //TypeError

const huge = 1245157813650151256221n;
const num = 23;
// console.log(huge * num); //TypeError
console.log(huge * BigInt(num)); //28638629713953478893083n

// Exceptions
console.log(20n > 15); //true
console.log(20n === 20); // false
console.log(typeof 20n); //bigint
console.log(20n == 20); //true
console.log(20n == '20'); //true

console.log(huge + ' is REALLY big!!!'); //1245157813650151256221 is REALLY big!!!

// Divisions
console.log(11n / 3n); //3n
console.log(10 / 3); //3.3333333333333335

*/
/* **************Creating Dates - 21/06/2023************** */
/*
const now = new Date(); //Wed Jun 21 2023 08:22:31 GMT+0530 (India Standard Time)
console.log(now); //Wed Jun 21 2023 08:19:12 GMT+0530 (India Standard Time)

console.log(new Date('Aug 02 2020 18:05:41')); //Sun Aug 02 2020 18:05:41 GMT+0530 (India Standard Time)
console.log(new Date('December 24, 2015')); //Thu Dec 24 2015 00:00:00 GMT+0530 (India Standard Time)

console.log(new Date(account1.movementsDates[0])); //Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)

console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)
console.log(new Date(2037, 10, 31)); //Tue Dec 01 2037 00:00:00 GMT+0530 (India Standard Time)

console.log(new Date(0)); //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)

// Working with dates
const future = new Date(2037, 10, 19, 15, 23); //Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)
console.log(future);
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T09:53:00.000Z
console.log(future.getTime()); //2142237180000

console.log(new Date(2142237180000)); //Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)

console.log(Date.now()); //1687315930568

future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT+0530 (India Standard Time)
*/
/* **************Operations With Dates - 22/06/2023************** */

const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); //10
