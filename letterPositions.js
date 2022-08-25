const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  if (!result) {
    console.log(`Error: Uh Oh! These arrays are NOT equal`)
  }
  else {
    console.log(`Yay! : Congratulations! These arrays ARE equal`)
  }
};

const letterPositions = function (sentence) {
  let results = {};
  // results[word] = [];
  for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== " "){ 
      if(results[sentence[i]]){
        results[sentence[i]].push(i)
      }else {
        results[sentence[i]] = [i]
      }
    }
      //looping in the sentence looking for index with the same letter  
    // console.log(word);

  }
  // results =object 
  // word of sentence to become key 
  // value of key to be index of string
  // value of key to return to an array 
  // if letter(word) exists we need to show which index the extra letter is 
  // if empty skip the loop 
  // "lighthouse in the house"

  return results;
};

console.log(letterPositions("lighthouse in the house")); 