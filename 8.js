// KM to Miles

const prompt = require('prompt-sync')();

let KM = prompt('Enter KM: ');

let toMiles = KM * 0.621371;

console.log(`${KM} kilometers is equals to ${toMiles} Miles`);