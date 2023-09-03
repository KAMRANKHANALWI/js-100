// filter() -> filters an array based on the rules/logic you provide and returns 
// a new array containing items that satisfy that rule

// Q. We have an array containing the maximum temperatures for each days of last week;
// now, we want to find out how many of those days were colder. We are looking for days
// where the temperature was below 20.

const weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];

const colderDays = weeklyReadings.filter(dayTemperature => dayTemperature < 20);

console.log("Total colder days in week were: " + colderDays.length);

// Note: Don't use if conditions for the result of filter method as it returns an array; if(result -> array[]).
// because inside an if condition, [] evaluates to true!

// Fix -> the fix is very simple, as given in above code. We check for colderDays.length, 
// which is guaranteed to give us an integer(zero or above) and thus work in logical comparisions.