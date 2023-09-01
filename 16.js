// Factorial of a number

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a positive number: '));

// check if a number is negative
if (number<0) {
    console.log('Error! Factorial for negative number does not exist.')
}

// if number is 0

else if (number === 0) {
    console.log(`The Factorial of ${number} is 1.`);
}

// if number is positive

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact*i
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}