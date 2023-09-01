// count the number of vowels in a string -> using Regex

function countVowel(str) {

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length; // checks for all vovels(case-insensative)

    // return number of count
    return count;
}

// take input
const prompt = require('prompt-sync')();
const string = prompt('Enter a string: ');

const result = countVowel(string);
console.log(result);