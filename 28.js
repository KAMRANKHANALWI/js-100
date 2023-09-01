// HCF using for loop

const prompt = require('prompt-sync')();

let hcf;

const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter b first positive integer: ');

// looping from 1 to number1 and number2

for (let i=1; i <= number1 && number2; i++) {

    // check if is factor of both integers
    if (number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

console.log(`HCF of ${number1} and ${number2} is ${hcf}`);

