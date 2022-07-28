const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✋🏻 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// create a function called countLetters
// function should take in a string as a parameter
// function should create object
// function should take characters from string and add as object keys
// function should increment object keys when it sees a duplicate in the string

const countLetters = function(newStr) {
  const results = {};

  for (const item of newStr) {
    if (item === " ") {
      continue;
    }
    if (results[item]) { 
      results[item] += 1;

    } else {
      results[item] = 1;
  }
  }
  return results;
}


console.log(countLetters("LHL"));
console.log(countLetters("Hello world"))

const testOne = countLetters("Lighthouse Labs");
console.log(testOne);

assertEqual(testOne['L'], 2);