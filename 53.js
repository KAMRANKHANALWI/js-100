// Merge property of two objects using spread operator

// object1
const person = {
    name: 'Zeeshan',
    age: 20
}

// object 2
const student = {
    gender: 'male',
    age: 21
}

// merge two object
const newObj = {...person, ...student};

console.log(newObj);