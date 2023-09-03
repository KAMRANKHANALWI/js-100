// fill() -> to replace some or all of the array with the given value

const heights = [1, 2, 3, 5, 6, 7, 9, 3];
heights.fill(1);
console.log(heights);

const heights2 = [1, 2, 4, 5, 6, 7, 1, 1];
heights2.fill(0, 2);  // it fills 0 after 2 digits
console.log(heights2);