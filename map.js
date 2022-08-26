// map function will take in 2 arguments, array, cb 
// map = function (array, callback)
const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log(`Error: Uh Oh! These arrays are NOT equal`)
    }
    else {
        console.log(`Yay! : Congratulations! These arrays ARE equal`)
    }
};


const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);
// const map = function(array, callback){
//   console.log("array:", array);
//   console.log("callback:", callback);
//   const results = [];
//   return results; 
// };
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);