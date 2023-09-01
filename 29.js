// HCF using while loop

const prompt = require('prompt-sync')();

let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter b first positive integer: ');

// looping until both numbers are equal
while(number1 != number2) {
    if (number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

console.log(`HCF is ${number1}`);