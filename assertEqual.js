const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(actual);
  } else {
    console.assert(actual == expected, "error");
  }
  };

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);