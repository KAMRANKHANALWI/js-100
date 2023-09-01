// Even Odd

const prompt = require('prompt-sync')();

let number = prompt('Enter the number: ');

if (number % 2 == 0) {
    console.log(`${number} is Even Number`);
} else {
    console.log(`${number} is Odd Number`)
}

// Using Ternary Operator 

const n = prompt('Enter the number: ');

// ternary operator

const result = (n % 2 == 0 ? 'even number' : 'odd number');

console.log(result);