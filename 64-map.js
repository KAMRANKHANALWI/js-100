// map() -> it attaches itself to an array and helps us convert each item into something else, 
// resulting in a new array.

// Q. We recorded the temperature for each day of the last week and stored it as a simple array.
// However , now we are told that the instruments were not accurate and have reported 1.5 degrees 
// less temperature than they should have.

const weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];

const correctedWeeklyReadings = weeklyReadings.map(reading => reading + 1.5);

console.log(correctedWeeklyReadings);