const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✋🏻 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(randomKey, randomValue) {
  
  let something = undefined;

  for (let key in randomKey) {
    if (randomKey[key] === randomValue) {
      something = key;
    }
  }
  return something;
};


module.exports = findKeyByValue;



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");