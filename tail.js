const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(actual);
  } else {
    console.assert("error");
  }
  };

  const tail = function(arr){
  return arr.slice(1);
}

console.log(tail([1,2,3]));

  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assertEqual(result, ["Lighthouse", "Labs"]);