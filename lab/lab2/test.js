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

// const Person = function (firstName, age, profession) {
//   this.name = firstName;
//   this.age = age;
//   this.profession = profession;
// };

// const person1 = new Person("Martha", 25, "teacher");
// const person2 = new Person("James", 45, "driver");
// console.log(person1);

// person2["language"] = "English";
// console.log(person2);

// const Car = function (brand, color, doors, engine, year) {
//   this.brand = brand;
//   this.color = color;
//   this.doorNumber = doors;
//   this.engine = engine;
//   this.builtYear = year;
// };

// const car1 = new Car("BMW", "blue", 5, "V8", 2018);
// console.log(car1);

// for (let item in car1) {
//   console.log(`${item}: ${car1[item]}`);
// }

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

// const btn = document.querySelector(".btn");
// let displayNum = document.querySelector(".number");

// let randomNum = function (max) {
//   let randomNum = Math.floor(Math.random() * max);
//   return randomNum;
// };

// btn.addEventListener("click", function () {
//   return (displayNum.textContent = randomNum(5));
// });

// const Car = function (brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// };
// const car1 = new Car("BMW", 120);
// console.log(car1);

// Car.prototype.accelerate = function () {
//   return this.speed + 10;
// };
// console.log(car1.accelerate());
// Car.prototype.break = function () {
//   return this.speed - 5;
// };
// console.log(car1.break());

// const Truck = function (brand, speed, color) {
//   Car.call(this, brand, speed);
//   this.color = color;
// };
// Truck.prototype = Object.create(Car.prototype);
// const newCar = new Truck("MAN", 110, "white");

// console.log(newCar.break());

// const MenuItems = function (breakfast, lunch, dinner, deserts) {
//   this.breakfast = breakfast;
//   this.lunch = lunch;
//   this.dinner = dinner;
//   this.deserts = deserts;
// };

// const restorant1 = new MenuItems(
//   ["eggs", "english breakfast", "grilled cheese"],
//   "pizza",
//   "steak",
//   ["lava cacke", "chocolate"]
// );

// MenuItems.prototype.calcPrice = function(){
//   console.log(`${this.breakfast[1]} and ${this.deserts[0]} will cost you 35$.`)
// }
// console.log(restorant1.calcPrice())

// const Person = function (firstName, lastName, birthYear, profession) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
//   this.profession = profession;
// };

// const student = new Person(`John`, `Doe`, 1997, `Gamer`);
// Person.prototype.calcAge = function () {
//   return console.log(
//     `${this.firstName} ${this.lastName}'s age is ${
//       2025 - this.birthYear
//     } years.`
//   );
// };
// student.calcAge();
// // -----------------------------

// const Teacher = function (
//   firstName,
//   lastName,
//   birthYear,
//   profession,
//   eyecolor
// ) {
//   Person.call(this, firstName, lastName, birthYear, profession);
//   this.eyecolor = eyecolor;
// };
// Teacher.prototype = Object.create(Person.prototype);
// const teacher1 = new Teacher("Maria", "Sharapova", 1986, "teacher", "blue");

// console.log(teacher1);
// teacher1.calcAge();

// class Person {
//   constructor(firstName, birthYar) {
//     this.firstName = firstName;
//     this.birthYar = birthYar;
//   }
//   calcAge() {
//     console.log(2022 - this.birthYar)
//   }
// }

// const thomas = new Person("Thomas", 1997);
// thomas.calcAge();

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge () {
//     console.log(2022 - this.birthYear);
//   };
// }
// const person1 = new Person("Martha", 1988);
// console.log(person1.calcAge());

// Destructuring Array
const restourant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Fucaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const { name, location, categories } = restourant;

const { name: RestourantName } = restourant;
// console.log(RestourantName);

//Create a new Array by expanding an existing Array
const newMenu = [...restourant.mainMenu, "Gnocci"];

//Copy Array (Shallow Copy)

const mainMenuCopy = [...restourant.mainMenu];
// console.log(mainMenuCopy);

//Merge two Arrays togedher

const combine = [...restourant.categories, ...restourant.starterMenu];
// console.log(combine);

// const str = "Asmongold";
// let strUppper = str.toUpperCase();
// const letters = [...strUppper, " ", "S."];

// letters.sort(function(...letters){
//   if(letters[0]<letters[1]) return -1;
//   if(letters[0]>letters[1]) return 1;
//   else 0
// });
// console.log(letters);

// //REST

// const arr2 = [1,2,3,4,5]
// const [a,b,c, ...others] = arr2;

// console.log(others)
// const colors = ["red", "green", "blue"];

// for (let color of colors.entries()) console.log(color);

// const arr = [1,2,3,4,5,6];

// const testMap = arr.map((el)=>el*2)
// console.log(testMap)

// const colors = ["red", "green", "blue"];
// const clr = colors.map((color)=>color.toLocaleUpperCase())
// const clrSorted = [...clr];
// clrSorted.sort(function(...clr) {
//   if (clr[0] < clr[1]) return -1;
//   if (clr[0] > clr[1]) return 1;
//   else 0;
// })
// console.log(clrSorted)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const usd = 1.1;

// const convert = movements.map((el) => {
//   return Math.floor(el * usd);
// });

const filtered = movements.filter((el) => el >= 0);
console.log(filtered);

const balance = movements.reduce((acc, el)=>{
  return acc + el
}, 0)
console.log(balance)