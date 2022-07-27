const eqArrays = function(arrOne, arrTwo) {
  // Are the arrays the same length? If not, false
  if (arrOne.length !== arrTwo.length) {
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
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("These 2 arrays are equal");
  } else {
    console.log("These 2 arrays are not equal");
  }
};

const middle = function(arrOne) {
  let mid = [];
  if (arrOne.length <= 2) {
    return mid;
  }
  if (arrOne.length % 2 !== 0) {
    mid =  arrOne[Math.floor(arrOne.length / 2)];
    return mid;
  }
  if (arrOne.length % 2 === 0) {
    mid = [arrOne[Math.floor(arrOne.length / 2 - 1)], arrOne[Math.floor(arrOne.length / 2)]];
    return mid;
  }
 
  return mid;
};


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle(["hello", "world", "are", "you", "there"]));

console.log(assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3])));