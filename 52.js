// Merge property of two objects using object.assign

// object1
const person = {
    name: 'Zeeshan',
    age: 20
}

// object 2
const student = {
    gender: 'male'
}

// merge two object
const newObj = Object.assign(person, student);

console.log(newObj);