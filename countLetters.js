const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(actual);
  } else {
    console.assert(actual == expected, "error");
  }
};

const countLetters = function (sentence) {
  // console.log("sentence", sentence);
  let countOfLetters = {};
  for (const word of sentence) {
    // console.log(word);
    if(word === ' '){
      continue;
    }
    // if empty skip the loop iteration
    // do a check if letter already exists in the object
    // if letter already exists in object, do not reset, add 1 
    // if letter doesnt exist in the object, reset 

    if (word in countOfLetters) {
      countOfLetters[word] = countOfLetters[word] + 1;
    } else {
      countOfLetters[word] = 1;
    }
  }
 return countOfLetters;
  // const word = []; 
  //   for (const)

};

const check = countLetters("lighthouse in the house")
console.log(check);

