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

assertArraysEqual([1, 2, 3], [1, 2, 4]);