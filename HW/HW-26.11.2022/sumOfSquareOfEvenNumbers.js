"use strict";

// Given is the next array of numbers: [1,2,3,4,5,6,7,8,9,10]
//Write a program which will output in the console the sum of the squares of even numbers

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrSum = arrNum
  .filter((el) => el % 2 === 0)
  .reduce((acc, el) => {
    return acc + el * el;
  }, 0);

console.log(arrSum);
/* --------------------------- YOUR CODE ENDS HERE -------------------------- */
// TEST CASE
// EXPECTED OUTPUT:
//220
