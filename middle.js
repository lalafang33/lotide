const assertEqual = require('./assertEqual');
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

const assertArrayEqual = require('./assertArraysEqual');
// const assertArraysEqual = function(arr1,arr2){
//   const result = eqArrays(arr1,arr2)
//     if (!result){
//         console.log(`Error: Uh Oh! These arrays are NOT equal`)
//     }
//     else {
//         console.log(`Yay! : Congratulations! These arrays ARE equal`)
//     }
// };

const middle = function(array){
  let result = [];
  if(array.length <= 2){
    return result;
  } else if (array.length % 2 === 0){
  let firstElementIndex = (array.length/2) -1
  let secondElementIndex = (array.length/2)
  result.push(array[firstElementIndex],array[secondElementIndex]);
  return result;
  }else {
  let middleIndex = Math.floor((array.length/2));
  result.push(array[middleIndex]);
  return result; 
  }
};

module.exports = middle;

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); 