// check if the string is palindrome or not using for loop

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    //loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if 1st and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const prompt = require('prompt-sync')();
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);