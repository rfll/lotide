const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("👍🏻 These 2 arrays are equal");
  } else {
    console.log("🤚🏻 These 2 arrays are not equal");
  }
};

module.exports = assertArraysEqual;