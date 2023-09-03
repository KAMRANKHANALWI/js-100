// reduce() -> it reduces the given array to is a single value (number, string, function, object, whatever).

// Example : Factorial of n natural numbers

const numbers = [1, 2, 3, 4, 5];

const factorial = numbers.reduce((acc, item) => acc * item, 1);

console.log(factorial);

// Note: the return value from reduce() is not an array, which is the case with map() and filter().

/* 
The reduce method takes two arguments : 
1st argument is a reducer function*, 
2nd argument is a starting value*(a number or a string).
*/

// reduce() - looks like this: array.reduce(reducerFunction, startingValue). 

/* 
the reducer function:
the reducer function is what tells reduce() how to convert the array into a single value. 
It takes two arguments: 
a variable to act as an accumulator, and 
a variable to store the current value(curr iterating value).
*/

/* 
The “starting value” :
is the starting value for the calculation you want to use. 
For example, if you’re going to do multiplication in the reducer function, 
a starting value of 1 makes sense; 
for addition, you might start with 0, and so on.
*/

/*
accumulator: 
“Accumulator” is just a fancy name for the variable that 
collects and holds the result of the calculation; 

It’s exactly like: 
using a variable called total: to sum all the items in an array using something like -
total += arr[i].

This is exactly how the reducer function in reduce() gets applied: 
the accumulator is initially set to the starting value you provide, 
and then one by one the elements in the array are visited, the calculation is performed, 
and the result is stored in the accumulator, and so on . . .
*/

