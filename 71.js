// Merge three objects into one

const obj1 = {
    name: 'Kamran Khan',
    age: 20,
    gender: 'Male'
}

const obj2 = {
    city: 'New Delhi',
    collage: 'Jamia Hamdard',
    course: 'B. Tech'
}


const obj3 = {
    stream: 'Computer Science'
}

const newObj = {...obj1,...obj2,...obj3};

console.log(newObj);