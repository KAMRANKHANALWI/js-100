// Simple Calculator with if...else

const prompt = require('prompt-sync')();

//take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
} 
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display result
console.log(`${number1} ${operator} ${number2} = ${result}`);