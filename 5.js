// swap two numbers: 
// Case 1
// Using temp variable

const prompt = require('prompt-sync')();

let a = prompt('Enter a: ');
let b = prompt('Enter b: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping is: ${a}`);
console.log(`The value of b after swapping is: ${b}`);