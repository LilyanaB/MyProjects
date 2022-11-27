"use strict";
// Given is an array of users: users = ["Maria", "Ada", "Ivan"];
// Task: write the code which will create a NEW ARRAY (i.e. do not change the users array), with alphabetically sorted (in ascending order) elements of users array.

const users = ["Maria", "Ada", "Ivan"];

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */

const usersSortedAlphabetically = [...users];
usersSortedAlphabetically.sort(function (...users) {
  if (users[0] < users[1]) return -1;
  if (users[0] > users[1]) return 1;
  else 0;
});
/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log(`users:\n\t${users}\n`);
console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically}`);

/* -------------------------------------------------------------------------- */
/*                              EXPECTED OUTPUT:                              */
/* -------------------------------------------------------------------------- */
// users:
//  Maria,Ada,Ivan
//
// usersSortedAlphabetically:
//  Ada,Ivan,Maria

// ------------------------------------------------------------------------------
// Given is an array of todos objects:
const todos = [
  {
    title: "Todo1",
    completed: true,
    priority: "low",
  },
  {
    title: "Todo2",
    completed: false,
    priority: "low",
  },
  {
    title: "Todo3",
    completed: true,
    priority: "high",
  },
  {
    title: "Todo4",
    completed: true,
    priority: "medium",
  },
  {
    title: "Todo5",
    completed: false,
    priority: "high",
  },
  {
    title: "Todo6",
    completed: true,
    priority: "low",
  },
];

// Task: write a function: sortArrayByKey(arr), which will return a new array in which the elements of todos array will be sorted by key (property) in ascending order.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */

function sortArrayByKey() {
  return todos.sort((a, b) => {
    const priorityA = a.priority.toUpperCase();
    const priorityB = b.priority.toUpperCase();
    if (priorityA < priorityB) {
      return -1;
    }
    if (priorityA > priorityB) {
      return 1;
    }
    return 0;
  });
}
/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log(sortArrayByKey(todos, "priority"));

// EXPECTED OUTPUT:
// [
// 	{ title: 'Todo3', completed: true, priority: 'high' },
// 	{ title: 'Todo5', completed: false, priority: 'high' },
// 	{ title: 'Todo1', completed: true, priority: 'low' },
// 	{ title: 'Todo2', completed: false, priority: 'low' },
// 	{ title: 'Todo6', completed: true, priority: 'low' },
// 	{ title: 'Todo4', completed: true, priority: 'medium' }
// ]
