// slice() -> return a part of a string or array from a given one,
// much like we create slices of fruit

const headline = "And in tonight's special, the guest we've all been waiting for!";

const startIndex = headline.indexOf('guest');

const endIndex = headline.indexOf('waiting');

const newHeadline = headline.slice(startIndex, endIndex);

console.log(newHeadline);