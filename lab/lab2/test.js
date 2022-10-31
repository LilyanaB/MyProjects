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

const numbers = [1, 2, 3, 4, `abc`];

const somePositive = numbers.some(function (value) {
  return value === "abc";
});

console.log(somePositive);
console.log(`hey`);
