// If a number is +ve, -ve or 0

const prompt = require('prompt-sync')();

let number = prompt('Enter the number: ');

if (number > 0) {
    console.log(`${number} is positive number`)
} else if (number == 0) {
    console.log(`${number} is Zero`)
} else {
    console.log(`${number} is negative number`)
}