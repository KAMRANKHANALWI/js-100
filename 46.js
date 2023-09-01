// Create Object - in Different Ways

// 1. using object literal
const person = {
    name: 'Kamran',
    age: 20,
    hobbies: ['reading', 'travelling', 'coding'],
    greet: function() {
        console.log('Hello Everyone.');
    },
    score : {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value

console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);