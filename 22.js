// Check Armstrong Number of n Digits

const prompt = require('prompt-sync')();

const number = prompt('Enter a positive number: ');
const numberOfDigits = number.length;
let sum = 0;

//create a temporary varible
let temp = number;

while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10);
} 

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
} else {
    console.log(`${number} is not an Armstrong number`);
}