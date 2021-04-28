
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const key1 in object1) {
    if (Array.isArray(object1[key1])) return eqArrays(object1[key1], object2[key1]);
    if (object1[key1] !== object2[key1]) return false;
  }
  
  for (const key2 in object2) {
    if (Array.isArray(object2[key2])) return eqArrays(object1[key2], object2[key2]);
    if (object1[key2] !== object2[key2]) return false;
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// TEST CODE
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);