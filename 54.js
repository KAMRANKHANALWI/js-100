// Clone the object using Object.assign() -> performs deep copy

const person = {
    name: 'Shadman',
    age: 21,
}

const clonePerson = Object.assign({}, person);
// The empty {} as the first argument ensures that you don't change the original object.

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);