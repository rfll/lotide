const words = ["ground", "control", "to", "major", "tom"];

const nums = [2, 3, 4, 5, 6];
// modify this array and test to compare modified version

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);


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



module.exports = map;


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);