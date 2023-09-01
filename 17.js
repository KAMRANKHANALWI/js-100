// Multiplication table upto 10

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter Number: '));

for (let i=1; i<=10; i++) {
    let result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}