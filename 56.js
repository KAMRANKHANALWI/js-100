// Convert Objects to Strings -> JSON.stringify()

const person = {
    name: 'Jack',
    age: 27
}

const result = JSON.stringify(person);

console.log(result);
console.log(typeof result);