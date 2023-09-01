// swap using array destructuring

const prompt = require('prompt-sync')();

let a = prompt('Enter a: ');
let b = prompt('Enter b: ');

[a, b] = [b, a];

console.log(`The value of a after swapping is: ${a}`);
console.log(`The value of b after swapping is: ${b}`);