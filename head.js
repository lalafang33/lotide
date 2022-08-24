const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(actual);
  } else {
    console.assert("error");
  }
  };
 
  const head = function(array){
    return array[0];
  };
  // TEST CODE
  console.log(assertEqual(head([5,6,7]), 5));
  console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));