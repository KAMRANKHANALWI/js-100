// convert 1st letter to upper case

// slice() -> methods returns the rest of the string.
// Here, str.slice(1) -> gives avaScript

function capitalizeFirstLetter(str) {

    // converting letter to Uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const prompt = require('prompt-sync')();
const string = prompt('Enter a String: ');  // javaScript

const result = capitalizeFirstLetter(string);
console.log(result);