const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(actual);
  } else {
    console.assert(actual == expected, "error");
  }
  };
  module.exports = assertEqual;
