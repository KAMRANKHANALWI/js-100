// Print all prime numbers in an interval

const prompt = require('prompt-sync')();

const lowerValue = parseInt(prompt('Enter the min value: '));
const higherValue = parseInt(prompt('Enter the max value: '));

console.log(`The prime numbers between ${lowerValue} & ${higherValue} are: `);

// looping from lowerNumber to higherNumber

for(let i=lowerValue; i<=higherValue; i++) {
    let flag = 0;
    // looping through 2 to user input number
    for(let j=2; j<i; j++) {
        if( i % j == 0 ) {
            flag = 1;
            break;
        }
    }

    if (i >  1 && flag == 0) {
        console.log(i);
    }
}