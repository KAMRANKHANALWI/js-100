// Check occurrence of a character Using for Loop
// Regex = ?

function countString(str, letter) {
    let count = 0;

    for (let i=0; i < string.length; i++) {
        if (str.charAt(i) == letter) {
            count ++;
        }
    }
    return count
}

// take input
const prompt = require('prompt-sync')();
const string = prompt('Enter a String: ');
const letterToCheck = prompt('Enter a letter to check: ');

// passing parameters and calling function
const result = countString(string, letterToCheck);
console.log(result);