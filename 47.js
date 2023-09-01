// Create Object - in Different Ways

// 2. using instance of object -> const objectName = new Object ();
// Here, the new keyword is used with the Object() instance to create an object

const person = new Object ( {
    name: 'Kamran',
    age: 20,
    hobbies: ['Reading', 'Coding', 'Travelling'],
    greet: () => 'Hello Everyone',
    score: {
        maths: 90,
        science: 80
    }
} );

console.log(typeof person);

console.log(person.name);
console.log(person.hobbies[1]);
person.greet();
console.log(person.score.science);