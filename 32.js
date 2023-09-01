// Factor of an integer

const prompt = require('prompt-sync')();

const number = prompt('Enter an integer: ');

console.log(`The factors of ${number} are: `);

for (let i=1; i<=number; i++) {
    if (number % i == 0) {
        console.log(i);
    }
}