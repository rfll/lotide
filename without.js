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

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
  }
  console.log(newArr);
  return newArr;
};


module.exports = without;

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);