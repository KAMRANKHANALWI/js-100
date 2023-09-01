// sum of natural number using recursion

const prompt = require('prompt-sync')();

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
}

const number = parseInt(prompt('Inter a positive integer: '));

const result = sum(number);

console.log(`The sum is ${result}`);