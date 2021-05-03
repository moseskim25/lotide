
let findKeyByValue = function (obj, found) {
  for (const key in obj) {
    if (found === obj[key]) return key;
  }
}

module.exports = findKeyByValue;
