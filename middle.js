const middle = function(arrOne) {
  let mid = [];
  if (arrOne.length <= 2) {
    return mid;
  }
  if (arrOne.length % 2 !== 0) {
    mid =  [arrOne[Math.floor(arrOne.length / 2)]];
    return mid;
  }
  if (arrOne.length % 2 === 0) {
    mid = [arrOne[Math.floor(arrOne.length / 2 - 1)], arrOne[Math.floor(arrOne.length / 2)]];
    return mid;
  }
 
  return mid;
};


module.exports = middle;