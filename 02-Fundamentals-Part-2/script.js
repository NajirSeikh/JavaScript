/* **************Code by Najir Seikh - 13/07/2021************** */
"use strict";

/*
let hasDriversLicense = false;
const passText = true;

if (passText) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log("I can drive");
}

// const interface = "Audio";
// const private = 534;

///////////////////////////////////////////////////////////////////

function logger() {
  console.log("My name is Najir");
}

// calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

///////////////////////////////////////////////////////////////////

// function declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(1997);

// function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(2000);

console.log(age1, age2);

//Arrow function
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUnitRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retire in ${retirement} years`;
};

console.log(yearsUnitRetirement(1997, "Najir"));
console.log(yearsUnitRetirement(2000, "Roni"));

///////////////////////////////////////////////////////////////////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //   console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

///////////////////////////////////////////////////////////////////

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUnitRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retire in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUnitRetirement(1997, "Najir"));
console.log(yearsUnitRetirement(1950, "Mike"));

///////////////////////////////////////////////////////////////////

Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉

GOOD LUCK 😀

// solution
// task 1
const calcAverage = (score) => score / 3;

// task 2
let avgDolphins = calcAverage(44 + 23 + 71);
let avgKoalas = calcAverage(65 + 54 + 49);
console.log(avgDolphins, avgKoalas);

// task 3
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No one is win!`);
  }
};

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85 + 54 + 41);
avgKoalas = calcAverage(23 + 34 + 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);

///////////////////////////////////////////////////////////////////

// Array
const friends = ["Michel", "Roni", "Rohid"];
console.log(friends);

// Array creation using Array() method
const y = new Array(1992, 1993, 1995, 1997);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Najir";
const najir = [firstName, "Seikh", 2021 - 1997, "coder", friends];
console.log(najir);
console.log(najir.length);

//Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 1997, 2000, 2002];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

///////////////////////////////////////////////////////////////////
//Array methods

const friends = ["Michel", "Roni", "Mohid"];

//add elements
const newLength = friends.push("Steve");
console.log(friends, newLength);

friends.unshift("John");
console.log(friends);

//remove elements
friends.pop(); //last
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Roni"));
console.log(friends.indexOf("Raja"));

friends.push(23);
console.log(friends.includes("Roni"));
console.log(friends.includes("Roni"));
console.log(friends.includes("23"));

if (friends.includes("Roni")) {
  console.log("You have a friend called Roni");
}

///////////////////////////////////////////////////////////////////

Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉

GOOD LUCK 😀

//solution

// const calcTip = function (billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//Arrow function
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(125));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

///////////////////////////////////////////////////////////////////

//Object basic
const najirArray = [
  "Najir",
  "Seikh",
  2021 - 1997,
  "Coder",
  ["Romi", "Imran", "Roki"],
];

const najir = {
  firstName: "Najir",
  lastName: "Seikh",
  age: 2021 - 1997,
  job: "Coder",
  friends: ["Romi", "Imran", "Roki"],
};

///////////////////////////////////////////////////////////////////

//Object notations(dot and bracket)

const najir = {
  firstName: "Najir",
  lastName: "Seikh",
  age: 2021 - 1997,
  job: "Coder",
  friends: ["Romi", "Imran", "Roki"],
};

console.log(najir);

console.log(najir.lastName);
console.log(najir["lastName"]);

const nameKey = "Name";
console.log(najir["first" + nameKey]);
console.log(najir["last" + nameKey]);

// console.log(najir."last" + nameKey);

const interestedIn = prompt(
  "What do you want to know about Najir? Choose between firstName, lastName, age, job, friends"
);
// console.log(interestedIn);
// console.log(najir.interestedIn); //it should not work bcoz of . notation
// console.log(najir[interestedIn]); //it will work for [] notation

if (najir[interestedIn]) {
  console.log(najir[interestedIn]);
} else {
  console.log(
    "Wrong input! Choose between firstName, lastName, age, job, friends"
  );
}

najir.location = "India";
najir["twitter"] = "@NajirSeikh";
console.log(najir);

//challege
//"Najir has 3 friends, and his best friend is called Romi"

console.log(
  `${najir.firstName} has ${najir.friends.length} friends, and his best friend is called ${najir.friends[0]} `
);

///////////////////////////////////////////////////////////////////

//Object methods
const najir = {
  firstName: "Najir",
  lastName: "Seikh",
  birthYear: 1997,
  // age: 2021 - 1997,
  job: "Coder",
  friends: ["Romi", "Imran", "Roki"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2021 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(najir.calcAge());

console.log(najir.age);
console.log(najir.age);
console.log(najir.age);

// console.log(najir["calcAge"](1997));

//challenge
//'Najir is a 24-years old coder, and he has a driver's license'

// console.log(
//   `${najir.firstName} is a ${najir.calcAge()}-years old ${najir.job}, and he has ${
//     najir.hasDriversLicense ? "a" : "no"
//   } driver's license`
// );

console.log(najir.getSummary());

///////////////////////////////////////////////////////////////////

Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John Miller's BMI (28.3) is higher than Mark Miller's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀

//solution

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  clacBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  clacBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.clacBMI(), john.clacBMI());

console.log(
  `${
    mark.BMI > john.BMI
      ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})!`
      : `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})!`
  } `
);

//////////////////////////////////////////////////////////////////

//Loops

//For Loop
// for loop keeps while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

///////////////////////////////////////////////////////////////////

//more on for loop
const najirArray = [
  "Najir",
  "Seikh",
  2021 - 1997,
  "Coder",
  ["Romi", "Imran", "Roki"],
  true,
];
const types = [];

for (let i = 0; i < najirArray.length; i++) {
  // Reading from najirArray array
  console.log(najirArray[i], typeof najirArray[i]);

  // Filling types array
  // types[i] = typeof najirArray[i];
  types.push(typeof najirArray[i]);
}

console.log(types);

const years = [1991, 1992, 1997, 2000];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

// continue and break
console.log("---- ONLY STRINGS ----");
for (let i = 0; i < najirArray.length; i++) {
  if (typeof najirArray[i] !== "string") continue;
  console.log(najirArray[i], typeof najirArray[i]);
}

console.log("---- BREAK WITH NUMBER ----");
for (let i = 0; i < najirArray.length; i++) {
  if (typeof najirArray[i] === "number") break;
  console.log(najirArray[i], typeof najirArray[i]);
}

///////////////////////////////////////////////////////////////////

// looping on backward and loops in loop

const najir = [
  "Najir",
  "Seikh",
  2021 - 1997,
  "Coder",
  ["Romi", "Imran", "Roki"],
];

//looping on backward
for (let i = najir.length - 1; i >= 0; i--) {
  console.log(najir[i]);
}

//loops in loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------ Sttarting exercise ${exercise} `);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

///////////////////////////////////////////////////////////////////

// While loop

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}

///////////////////////////////////////////////////////////////////

Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1.
First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2.
To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3.
Call the function with the 'totals' array

GOOD LUCK 😀

// solution

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let bill = 0; bill < bills.length; bill++) {
  tips.push(calcTip(bills[bill]));
  totals.push(bills[bill] + tips[bill]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
