
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

module.exports = letterPositions;
