const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✋🏻 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arrOne, arrTwo) {
  // Are the arrays the same length? If not, false
    if (arrOne.length !== arrTwo.length){
      return false;
    }
  // Compare the arrays
    for (let i = 0; i < arrOne.length; i++) {
    // Are the array values the same? If not, false  
      if (arrOne[i] !== arrTwo[i]) {
        return false;
    }
    }
    return true;
  }


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  // Check if objects are the same length with the keys
  // if they are equal, loop over keys of object 1
  //// get the value object 1 and object2 with the key
  //// if both value is an array, call the eqarrays function
  //// if the values are not an array compare the values
  //// if the values don't match, return false

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {

    if (Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      
      if (!eqArrays(object1[key], object2[key])) {
        return false;

      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }

  }

  return true;
};


module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);