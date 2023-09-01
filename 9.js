// Celsius to Fahrenheit

const prompt = require('prompt-sync')();

let celsius = prompt('Enter Celsius: ');

let toFahrenheit = celsius * 1.8 + 32;

console.log(`${celsius} degree celsius is equal to ${toFahrenheit} degree fahrenheit`);

let fahrenheit = prompt('Enter Fahrenheit: ');

let toCelsius = (fahrenheit - 32) / 1.8;

console.log(`${fahrenheit} degree celsius is equal to ${toCelsius} degree fahrenheit`);