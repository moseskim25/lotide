const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  else console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}

const middle = function(arr) {
  let arrMid = (arr.length - 1) / 2;

  if (arrMid % 1 !== 0) {
    return [arr[Math.floor(arrMid)], arr[Math.ceil(arrMid)]];
  }

  return [arr[arrMid]];
}

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);