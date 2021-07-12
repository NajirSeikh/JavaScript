/* **************Code by Najir Seikh - 30/06/2021************** */

/* let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN");

// console.log(40 + 8 + 23 - 10);

let firstName = "najir";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let first_name = "najir";
let $name = "najir";

let PI = 3.1415;

let myFirstJob = "Student";
let myCurrentJob = "Coder";

console.log(myFirstJob);
//////////////////////////////////////////////

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(typeof year);

console.log(typeof null);
//////////////////////////////////////////////

let age = 30;
age = 34;

const birthYear = 1997
// birthYear = 2001

const job

var job = 'Coder'
job = 'Student'

lastName = 'Seikh'
console.log(lastName)
//////////////////////////////////////////////

// Basic operators
const now = 2021;
const ageNajir = now - 1997;
const ageSara = now - 2001;

console.log(ageNajir * 2, ageNajir / 10, 2 ** 3); 
// 2 ** 3 means 2 to the power of 3 or 2 * 2 * 2

const firstName = "Najir";
const lastName = "Seikh";
console.log(firstName + " " + lastName);

//Assogment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageNajir > ageSara); // >,<,>=,<=
console.log(ageSara >= 18);

const isFullAge = ageNajir >= 18;

console.log(now - 1997 > now - 2021);
//////////////////////////////////////////////

//Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀

//answer
const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;
console.log(markBMI);

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
//////////////////////////////////////////////

const firstName = "Najir";
const job = "Coder";
const birthYear = 1997;
const year = 2021;

const najir =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(najir);

const najirNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(najirNew);

console.log(`Just a regular string.....`);

console.log("String \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
//////////////////////////////////////////////

const age = 15;
if (age >= 18) {
  console.log("Suhana can start driving license");
} else {
  const yearLeft = 18 - age;
  console.log(`Suhana is too young. Wait another ${yearLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
//////////////////////////////////////////////

//Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀

//answer
const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;
// console.log(markBMI);

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);

higherBMI = markBMI > johnBMI;

if (higherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
//////////////////////////////////////////////

//type conversion

const inputYear = "1997";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Najir"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log("I am " + 24 + " years old");
console.log("I am " + "23" + " years old");

console.log("23" - "10" - 3); //10
console.log("23" / "2"); // 11.5
console.log("23" > "19"); //true

let n = "1" + 1;
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // '95'
console.log(typeof (2 + 3 + 4 + "5")); // String
console.log("10" - "4" - "3" - 2 + "5"); // '15'
console.log(typeof ("10" - "4" - "3" - 2 + "5")); // String

//////////////////////////////////////////////

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Najir"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should gt a job");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//////////////////////////////////////////////

const age = 18;
if (age === 18) console.log("You just become an adult D: (strict)");

if (age == 18) console.log("You just become an adult D: (loose)");

const favourite = prompt("What's your favourite number");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 ia an amazing number");
} else {
  console.log("Number is not 23");
}

if (favourite !== 23) {
  console.log("Why not 23");
}

//////////////////////////////////////////////

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀

// solution
const dolphnsScore = 96 + 108 + 89;
const koalasScore = 88 + 91 + 110;

avgDolphinsScore = dolphnsScore / 3;
avgKoalasScore = koalasScore / 3;

if (avgDolphinsScore === avgKoalasScore) {
  console.log("Draw the match!");
} else if (avgDolphinsScore > avgKoalasScore) {
  console.log("Winner Dolphins!");
} else {
  console.log("Winner Koalas!");
}

const minimumScore = 100;

// bonus 1
const dolphnsScore = 97 + 112 + 101;
const koalasScore = 109 + 95 + 123;

avgDolphinsScore = dolphnsScore / 3;
avgKoalasScore = koalasScore / 3;

if (minimumScore <= avgDolphinsScore && avgDolphinsScore > avgKoalasScore) {
  console.log("Winner Dolphins!");
} else if (
  minimumScore <= avgKoalasScore &&
  avgDolphinsScore < avgKoalasScore
) {
  console.log("Winner Koalas!");
}

// bonus 2
const dolphnsScore = 97 + 112 + 101;
const koalasScore = 109 + 95 + 106;

avgDolphinsScore = dolphnsScore / 3;
avgKoalasScore = koalasScore / 3;

if (
  minimumScore <= avgKoalasScore &&
  minimumScore <= avgDolphinsScore &&
  avgDolphinsScore === avgKoalasScore
) {
  console.log("Draw the match!");
} else if (
  minimumScore <= avgDolphinsScore &&
  avgDolphinsScore > avgKoalasScore
) {
  console.log("Winner Dolphins!");
} else if (
  minimumScore <= avgKoalasScore &&
  avgDolphinsScore < avgKoalasScore
) {
  console.log("Winner Koalas!");
} else {
  console.log("No one can win the trophhy!");
}
//////////////////////////////////////////////

//switch case

const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "suturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
    break;
}
//////////////////////////////////////////////

// ternary operator

const age = 23;
age >= 18
  ? console.log("I like to drink wine!")
  : console.log("I like to drink water!");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//////////////////////////////////////////////
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§
Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀

// solution

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `he bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
