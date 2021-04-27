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

let newArr = [];
let flatten = function(arr) {
  arr.forEach(function(element) {
    if (Array.isArray(element)) flatten(element);
    else newArr.push(element);
  });
  return newArr;
}

console.log(flatten([1, 2, [3, 4, [1, 2]], 5, [6]]));