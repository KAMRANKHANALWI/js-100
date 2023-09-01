// Guess a random number

const prompt = require('prompt-sync')();

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // taking input
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the number is correct
    if (number == random) {
        console.log('You guess the correct number.');
    }
}

// call the function
guessNumber();