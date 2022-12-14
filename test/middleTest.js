const assertEqual = require('../assertEqual');
const assertArrayEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));