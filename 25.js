// Sum of Natural  Numbers

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a positive number: '));

let sum = 0;

for (let i = 1; i <= number; i++) {
    sum = sum + i
}

console.log('The sum of natural numbers: ', sum);