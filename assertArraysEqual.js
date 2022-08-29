const eqArrays = require('./eqArrays');
// const eqArrays = function(arr1,arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const assertArrayEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (equivalentArrays ===false) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArrayEqual;

// assertArrayEqual(actual, expected)
