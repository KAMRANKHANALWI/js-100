// Find factorial using recursiion

function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }
    // if number is positive
    else {
        return x * factorial(x-1);
    }
}

// input
const prompt = require('prompt-sync')();
const num = prompt('Enter a positive number: ');

// calling 
if (num > 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}