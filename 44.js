// reverse a string using for loop

function reverseString(str) {

    // empty string
    let newString = "";
    for(let i = str.length - 1; i >= 0; i-- ) {
        newString = newString + str[i];
    }
    return newString;
}

// take input
const prompt = require('prompt-sync')();
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);