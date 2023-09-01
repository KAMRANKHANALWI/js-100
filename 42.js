// Sort Words in Alphabetical Order

// split(' ') -> method splits the string at whitespaces.
// for...of -> loop is used to iterate over the array elements and display them.
// sort() -> method, uppercase letteers are placed before lowercase.
// join('') -> method convert the array elements back to the string.

// input
const prompt = require('prompt-sync')();
const string = prompt('Enter a Sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are: ');

for (const element of words) {
    console.log(element);
}