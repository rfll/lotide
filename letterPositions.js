const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  // loop through string
  // return string letters as object keys
  // return string letter indexes in an array for each letter

  for (let i = 0; i < sentence.length; i++) {
    if (i === " ") {
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

console.log(letterPositions("hello"));

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


module.exports = letterPositions;

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("These 2 arrays are equal");
  } else {
    console.log("These 2 arrays are not equal");
  }
};

assertArraysEqual(letterPositions("hello").e, [1]);