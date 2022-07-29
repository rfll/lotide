// "use strict";


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✋🏻 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(itsAnObject, stopCondition) {
  
  for (let key in itsAnObject) {
    console.log(key);
    if (stopCondition(itsAnObject[key])) {
      console.log("found ", key);
      return key;
    }
  }
};




assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"




