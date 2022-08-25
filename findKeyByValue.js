// function takes object and value
// scans the object and return first key that contain value, return value
// if no value match, return undefined 


const result = function(object, value){
  for (let i in object){ 
    if(object[i] === value){
      return i;
    }
      
    }return "Undefined";
  
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(result("Brooklyn Nine-Nine"));