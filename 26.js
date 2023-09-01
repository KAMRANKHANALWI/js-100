// Sum of Natural  Numbers using while loop

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a positive number: '));

let sum = 0, i = 1;

while (i <= number) {
    sum += i;
    i++
}

console.log('The sum of natural numbers: ', sum);