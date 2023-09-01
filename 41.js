// check if the string is palindrome or not using built-in-functions

// split('') -> method converts the string into individual array characters. ["h", "e", "l", "l", "o"]
// reverse('') -> method reverses the position in an array. ["o", "l", "l", "e", "h"]
// join('') -> methods joins all the elements of an array into a string. "olleh"

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split(''); 

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    // check palindrome
    if (string == reverseString) {
        console.log('It is a palindrome');
    } 
    else {
        console.log('It is not a palindrome');
    }
}

// take input
const prompt = require('prompt-sync')();
const string = prompt('Enter a string: ');

// call function
checkPalindrome(string)