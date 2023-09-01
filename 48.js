// Create Object - in Different Ways

// 3. Using Constructor Function
// Person() -> Constructor Function is used to create an object using the new keyword.

function Person() {
    this.name = 'Kamran',
    this.age = 20,
    this.hobbies = ['Reading', 'Coding', 'Travelling'],
    this.greet = () => 'Hello Everyone',
    this.score = {
        maths: 90,
        science: 80
    }
}

const person = new Person(); // creates a new object

console.log(person.name);
console.log(person.hobbies[2]);
person.greet();
console.log(person.score.science);