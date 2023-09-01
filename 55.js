// clone the object using spread syntax

const person = {
    name: 'Mark',
    age: 30,
}

const clonePerson = {...person}

console.log(clonePerson);

clonePerson.name = 'SRK'

console.log(person.name);
console.log(clonePerson.name);