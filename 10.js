// Math.random()
// Math.floor()

const prompt = require('prompt-sync')();

// Get a random between 1 & 10

const a = Math.floor(Math.random() * 10);
console.log(`The random no. b/w 1 & 10 is: ${a}`);

// Get a random between max & min

const min = parseInt(prompt('Enter a min value: '));
const max = parseInt(prompt('Enter a max value: '));

const b = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`The random no. b/w ${min} & ${max} is: ${b}`);

