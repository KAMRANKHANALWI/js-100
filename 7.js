// swap two number using arthematic operation

const prompt = require('prompt-sync')();

let a = parseInt(prompt('Enter a: '));
let b = parseInt(prompt('Enter b: '));

a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping is: ${a}`);
console.log(`The value of b after swapping is: ${b}`);
