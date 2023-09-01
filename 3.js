// Area of triangle given base and height

const prompt = require('prompt-sync')();

let baseValue = prompt('Enter base: ');
let heightValue = prompt('Enter height: ');

let areaValue = 0.5 * baseValue * heightValue;

console.log(areaValue, 'unit sq');