"Use struct";
//Given is the next Douglas Adams quote:
//"A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."
//TASK: Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
const quote =
  "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.";
const words = quote.split(" ");
function filterItems(arr, query) {
  return arr
    .filter((el) => el[0].toLowerCase().includes(query.toLowerCase()))
    .filter((el) => el.length > 2);
}

/* --------------------------- YOUR CODE ENDS HERE -------------------------- */
// TEST CASE
console.log(filterItems(words, "T"));

// EXPECTED OUTPUT:
//[ 'that', 'trying', 'the' ]
