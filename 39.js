// decimal to binary using toString()
// The JS built-in method toString([radix]) returns a string value in aspecified radix(base).
// Here, toString(2) converts the decimal number to binary number.

const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter a decimal number: '));

//convert to binary
const result = number.toString(2);

console.log('Binary: ' + result );