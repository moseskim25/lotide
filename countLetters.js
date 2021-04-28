const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

let countLetters = function(sentence) {
  const characters = {};

  for (const letter of sentence) {
    if (letter === ' ') ;
    else if (characters[letter]) characters[letter]++;
    else characters[letter] = 1;
  }

  return characters;
}

console.log(countLetters('something and a space and a CAPS'));