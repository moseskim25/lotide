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

let letterPositions = function(sentence) {
  let output = {};
  let i = 0;
  for (const letter of sentence) {
    if (letter === ' ') ;
    else if (output[letter]) output[letter].push(i);
    else output[letter] = [i];

    i++;
  }

  return output;
}

let output = letterPositions('a sentene with a space and letter');

assertArraysEqual(output['a'], [0, 15, 19, 23]);