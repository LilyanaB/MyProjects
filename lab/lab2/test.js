// const numbers = [1, 2, 3];
// console.log(numbers.indexOf("a") !== -1);

// numbers.push(5);

// console.log(numbers);

// console.log(numbers.includes(1));

// const courses = [
//   {
//     id: 1,
//     name: `course name`,
//   },
//   {
//     id: 2,
//     name: `course name 2`,
//   },
// ];

// console.log(courses);

// const cource = courses.find((cource) => cource.id === 1);

// console.log(cource);

// const number1 = [1, 2, 3, 4];
// const number2 = [5, 6, 7, 8];

// for (let number of number1) {
//   console.log(number);
// }

// number2.forEach((number) => console.log(number));
// numbers.push("abv", "dfg");

// //Remove End
// const last = numbers.pop();
// console.log(numbers);

// //Remove Beginning
// numbers.shift();
// console.log(numbers);

// //Remove Middle

// numbers.splice(1, 2);
// console.log(numbers);

// const numbers = [4, 2, 7, 3, 5, 1, 6];

// numbers.sort();
// console.log(numbers);

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "JavaScrip" },
// ];

// courses.sort(function (course1, course2) {
//   const nameUpper1 = course1.name.toUpperCase();
//   const nameUpper2 = course2.name.toUpperCase();

//   if (nameUpper1 < nameUpper2) return -1;
//   if (nameUpper1 > nameUpper2) return 1;
//   else 0;
// });

// console.log(courses);

// const somePositive = numbers.some(function (value) {
//   return value === "abc";
// });

// console.log(somePositive);
// console.log(`hey`);
// const numbers = [1, 2, 3, 4, `abc`];

// const filtered = numbers.filter(function (value) {
//   return value >= 0;
// });
// console.log(filtered);

// const run = () => {
//   console.log(`hello`);
// };
// console.log(run);
// run.id = 2;
// console.log(run)

// FUNCTIONS

// function logger() {
//   console.log(`log something in the console`);
// }

// logger();

//Paramenters
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 7));
// const appleJuice = function (apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// };
// console.log(appleJuice(5, 4));

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// console.log(calcAge1(1991));

// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(2022);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, name) => {
//   let age = 2037 - birthYear;
//   let retirementAge = 65 - age;
//   return `${name} rerires in ${retirementAge}`;
// };

// console.log(yearsUntilRetirement(1991, "Johnas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// CALLBACK Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   let applePieces = cutFruitPieces(apples);
//   let orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2,3))

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 77);

// function checkWinner(avgD, avgK) {
//   if (avgD * 2 > avgK * 2) {
//     return `Dolphins with ${avgD} points`;
//   } else {
//     return `Koalas wutg ${avgK} points`;
//   }
// }

// const winner = function (scoreD, scoreK) {
//   const winnerTeam = checkWinner(scoreD, scoreK);
//   return `Winner team is ${winnerTeam}`;
// };

// console.log(winner(avgDolphins, avgKoalas));

// const johnas = {
//   name: "Johnas",
//   age: 25,
//   profession: "teacher",
//   isMarried: false,
//   frieds: ["Lisa", "John", "Bob", "Michael"],
//   retirementIn: function () {
//     return 65 - this.age;
//   },
// };

// console.log(johnas.profession);

// console.log(
//   `${johnas.name} has ${johnas.frieds.length} friends and his best friend is ${
//     johnas.frieds[2]
//   }. He will retire in ${johnas.retirementIn()} years.`
// );

// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   BMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   BMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const higherBMI =
//   John.BMI() > Mark.BMI()
//     ? `${John.fullName}'s BMI (${John.BMI()}) is higher than ${
//         Mark.fullName
//       }'s BMI (${Mark.BMI()}) `
//     : `${Mark.fullName}'s BMI (${Mark.BMI()}) is higher than ${
//         John.fullName
//       }'s BMI (${John.BMI()}) `;
// console.log(higherBMI);

// const bookings = [];
// const createBooking = function (
//   flightNumber,
//   numPassangers = 0,
//   price = numPassangers * 225
// ) {
//   const booking = {
//     flightNumber,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123", 3);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log(draw);
//   };
// }
// const circle = new Circle(1);
// console.log(circle);

// let x = 1;
// let id = 12345;

// let obj = {
//   x,
//   id
// }

// console.log(obj)

// const person = {
//   firstName: "Josh",
//   age: 25,
//   jobTitle: "Designer",
// };
// for (let key in person) {
//   console.log(key, person[key]);
// }

// const Person = function (firstName, birthYear) {
//   (this.name = firstName), (this.birthYear = birthYear);
// };

// const johnas = new Person("johnas", 2017);
// const mathilda = new Person("Mathilda", 2010);

// Person.prototype.calcAge = function () {
//   console.log(2045 - this.birthYear);
// };
// johnas.calcAge();

const Person = function (firstName, age, profession) {
  this.name = firstName;
  this.age = age;
  this.profession = profession;
};

const person1 = new Person("Martha", 25, "teacher");
const person2 = new Person("James", 45, "driver");
console.log(person1);

person2["language"] = "English";
console.log(person2);

const Car = function (brand, color, doors, engine, year) {
  this.brand = brand;
  this.color = color;
  this.doorNumber = doors;
  this.engine = engine;
  this.builtYear = year;
};

const car1 = new Car("BMW", "blue", 5, "V8", 2018);
console.log(car1);

for (let item in car1) {
  console.log(`${item}: ${car1[item]}`);
}

// const Products = function (vegetables, frouits, meat, milk) {
//   this.vegetables = vegetables;
//   this.frouits = frouits;
//   this.meat = meat;
//   this.milk = milk;
// };

// const shoppingCart1 = new Products(
//   `tomatoes`,
//   `lemons`,
//   `chicken`,
//   "goat milk"
// );
// console.log(shoppingCart1);

// Car.prototype.calcAge = function () {
//   console.log(2022 - this.builtYear);
// };
// const car3 = new Car("BMW", "blue", 5, "V8", 2015);
// console.log(car3.calcAge());

// for (let item in car3) {
//   console.log(`${item}: ${car3[item]}`);
// }

// console.log(car3.__proto__);

const btn = document.querySelector(".btn");
let displayNum = document.querySelector(".number");

let randomNum = function (max) {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
};

btn.addEventListener("click", function () {
  return (displayNum.textContent = randomNum(5));
});
