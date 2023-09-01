// reverse a string using built-in-methods

function reverseString(string) {

    // array of string
    const arrayString = string.split('');

    // reverse the array
    const reverseArray = arrayString.reverse();

    // join all elements of array into a string
    const joinArray = reverseArray.join('');

    //return the reversed string
    return joinArray;
}

// input
const propmt = require('prompt-sync')();
const string = propmt('Enter a string: ');

const result = reverseString(string)

console.log(result);
