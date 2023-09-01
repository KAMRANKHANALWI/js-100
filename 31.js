// LCM calculation using HCF
// program to find the LCM of two integers

const prompt = require('prompt-sync')();

let hcf;

const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

//looping from 1 to number1 & number2 to find HCF
for (let i = 1; i < number1 && i < number2; i++) {

    //check if is factor of both integers
    if ( number1 % i == 0 && number2 % i == 0 ) 
    hcf = i;
}

// find LCM
let lcm = (number1 * number2) / hcf;

//display
console.log(`LCM of ${number1} and ${number2} is ${lcm}`);