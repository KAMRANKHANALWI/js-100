// Check if the Number have same last digit

const prompt = require('prompt-sync')();

const a = prompt('Enter a first integer: ');
const b = prompt('Enter b first integer: ');
const c = prompt('Enter c first integer: ');

// find the last digit
const result1 = a % 10; // 58 % 10 = 8
const result2 = b % 10;
const result3 = c % 10;

// compare the last digit

if (result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have same last digit`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit`);
}