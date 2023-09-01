// Area of triangle given sides

const prompt = require('prompt-sync')();

let side1 = parseInt(prompt('Enter Side1: '));
let side2 = parseInt(prompt('Enter Side2: '));
let side3 = parseInt(prompt('Enter Side3: '));

let s = (side1 + side2 + side3) / 2;

let area = Math.sqrt( s * (s-side1) * (s-side2) * (s-side3) );

console.log(`The area of triangle is: ${area}`);